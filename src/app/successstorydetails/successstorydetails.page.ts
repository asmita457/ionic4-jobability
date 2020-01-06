import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-successstorydetails',
  templateUrl: './successstorydetails.page.html',
  styleUrls: ['./successstorydetails.page.scss'],
})
export class SuccessstorydetailsPage implements OnInit {
  successStoriesDetails: any
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private dataServices: DataservicesService,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private socialSharing: SocialSharing,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,
  ) {
    const successStoryId = (this.activatedRoute.snapshot.paramMap.get('successStoryId'));
    this.successStorysDetails(successStoryId)
  }

  ngOnInit() {
  }

  closePage() {
    this.location.back();
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Success Stories Details Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  successStorysDetails(successStoryId) {
    this.presentLoading();

    this.dataServices.successStorysDetails(successStoryId).then((result: any) => {
      this.loadingController.dismiss();
      if (result.status == 1) {
        this.successStoriesDetails = result.success_stories_details
        // this.savedJobListLength = this.resultData.save_job_total_count
      } else {
        this.loadingController.dismiss();
        this.presentAlert('', result.message)
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  shareSocialMedia() {
    let shareURL = this.successStoriesDetails[0].success_story_details_link
    console.log('shareURL: ' + shareURL)
    this.socialSharing.share('Refer this job', 'Refer this job', '', shareURL).then(success => {
      console.log('Success: ' + success)
    }, error => {
      console.log('Failed: ' + error)
    }).catch(err => {
      console.log('error: ' + err)
    })
  }

  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 500);
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);

  }//Display Function Ends Here 


  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
          // this.closePage();
        }
      }]
    });
    await alert.present();
  }
}