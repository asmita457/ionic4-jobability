import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController } from '@ionic/angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@Component({
  selector: 'app-recommendedjobs',
  templateUrl: './recommendedjobs.page.html',
  styleUrls: ['./recommendedjobs.page.scss'],
})
export class RecommendedjobsPage implements OnInit {

  users_id: any
  resultData: any
  recommendedJobsLength: any
  recommendedJobsArray = []
  showSearchData = true;
  // hideSearchData = false;
  saveJObResponse: any
  offset = 0
  moreDataAvailable: boolean
  recommendedjobCount: any
  badgecount: any
  badgeResultData: any
  constructor
    (
      private router: Router,
      private dataServices: DataservicesService,
      private activatedRoute: ActivatedRoute,
      public loadingController: LoadingController,
      private alertCtrl: AlertController,
      private tts: TextToSpeech,
      private mobileAccessibility: MobileAccessibility,
    ) {

  }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.recommendedJobsArray = []
    this.users_id = localStorage.getItem('users_id')
    this.recommendedjobCount = (this.activatedRoute.snapshot.paramMap.get('count'));

    this.offset = 0
    if (this.recommendedjobCount != '0' || this.recommendedjobCount != 0) {
      this.recommendedJob(this.users_id, this.offset);
    } else {
      this.showSearchData = false
    }
    this.getNotificationBadgeCount()
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Recommended Jobs Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  getNotificationBadgeCount() {
    // this.presentLoading();
    this.dataServices.getNotificationBadgeCount().then((result) => {
      console.log(result)
      this.badgeResultData = result
      if (this.badgeResultData.status == 1) {
        // this.loadingController.dismiss();
        this.badgecount = this.badgeResultData.total_notification_count       
      } else {
        // this.loadingController.dismiss();
      }
    }, error => {
      // this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

navigateToNotification() {
this.router.navigate(['/notification'])
}
  jobDescription(item) {
    this.router.navigate(['/searchjobdetail', { jobId: item.id }])
  }

  recommendedJob(users_id, offset) {
    if (this.offset == 0) {
      this.presentLoading();
    }
    this.dataServices.getRecommendedJobsData(users_id, offset).then((result) => {
      this.resultData = result
      if (this.resultData.status == 1) {
        this.recommendedJobsArray = this.recommendedJobsArray.concat(this.resultData.recommended_job_list)
        this.recommendedJobsLength = this.resultData.recommended_job_total_count;

        if (this.offset == 0) {
          this.loadingController.dismiss()
        }
        if (this.recommendedJobsLength < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }
        if (this.recommendedJobsLength == 0) {
          this.showSearchData = false;
        } else {
          this.showSearchData = true;
        }
      } else {
        this.loadingController.dismiss();
        this.presentAlert('', this.resultData.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))

    })
  }


  // Function for save or remove job
  saveJob(jobId) {
    this.presentLoading();
    this.dataServices.saveOrRemoveJob(jobId, this.users_id).then((res) => {
      this.saveJObResponse = res;
      this.loadingController.dismiss();
      if (this.saveJObResponse.status == 1) {
        if (this.saveJObResponse.check_flag == 1) {
          for (let i = 0; i < this.recommendedJobsArray.length; i++) {
            if (this.recommendedJobsArray[i].id == jobId) {
              this.recommendedJobsArray[i].job_saved_flag = 1
            }
          }
        } else {
          for (let i = 0; i < this.recommendedJobsArray.length; i++) {
            if (this.recommendedJobsArray[i].id == jobId) {
              this.recommendedJobsArray[i].job_saved_flag = 2
            }
          }
        }
        this.presentAlert("", this.saveJObResponse.message);
      } else {
        this.presentAlert("", this.saveJObResponse.message);
      }
    }, (error) => {
      this.loadingController.dismiss();
      console.log(error);
    });
  }


  // Function For Load Data While Scrolling
  loadData(event) {
    setTimeout(() => {
      this.offset += this.dataServices.globalOffset()
      if (this.offset > this.recommendedJobsLength) {
        this.moreDataAvailable = false
      } else {
        this.moreDataAvailable = true
        this.recommendedJob(this.users_id, this.offset)
        event.target.complete();
      }
    }, 500)
  } //loadData Function Eds Here.

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
