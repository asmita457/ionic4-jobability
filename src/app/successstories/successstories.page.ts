import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-successstories',
  templateUrl: './successstories.page.html',
  styleUrls: ['./successstories.page.scss'],
})
export class SuccessstoriesPage implements OnInit {

  offset = 0;
  moreDataAvailable: boolean
  successStoriesList = []
  uacc_id: any
  badgecount: any
  badgeResultData: any
  verifyEmail: any




  constructor(
    private router: Router,
    private dataServices: DataservicesService,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,
  ) {
    this.uacc_id = localStorage.getItem("users_id");
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.offset = 0;
    this.successStoriesList = []
    this.getSuccessStorys(this.offset)
    this.getNotificationBadgeCount()
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Success Stories Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  navToSuccessStories() {
    if (this.verifyEmail == '1') {
      this.router.navigate(['/addsuccessstories']);
    } else {
      this.presentAlert('', 'Please verify your email address to add success story.')
    }
  }

  navToSuccessStoryDetails(successStoryId) {
    this.router.navigate(['/successstorydetails', { successStoryId: successStoryId }]);
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


  getSuccessStorys(offset) {
    if (this.offset == 0) {
      this.presentLoading();
    }
    this.dataServices.getsuccessStory(offset, this.uacc_id).then((result: any) => {
      if (result.status == 1) {
        this.verifyEmail = result.verify_email
        this.successStoriesList = this.successStoriesList.concat(result.success_stories_list);
        // this.savedJobListLength = this.resultData.save_job_total_count
        if (this.offset == 0) {
          this.loadingController.dismiss()
        }
        if (result.total_stroy_count > this.successStoriesList.length) {
          this.moreDataAvailable = true
        } else {
          this.moreDataAvailable = false
        }
      } else {
        this.loadingController.dismiss();
        this.presentAlert('', result.message)
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  deleteSuccessStoryConfirm(id) {
    this.deleteSuccesssStoryFunction(id)
  }
  deleteSuccessStory(successStoryId) {

    this.presentLoading();

    this.dataServices.deleteSuccessStory(successStoryId).then((result: any) => {

      if (result.status == 1) {
        var index = this.successStoriesList.findIndex(function (item, i) {
          return item.resource_id === successStoryId
        });
        if (index > -1) {
          this.successStoriesList.splice(index, 1);
        }
        this.loadingController.dismiss()
        this.presentAlert('', result.message)

      } else {
        this.loadingController.dismiss();
        this.presentAlert('', result.message)
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  // Function For Load Data While Scrolling
  loadData(event) {
    setTimeout(() => {
      this.offset += this.dataServices.globalOffset();
      this.getSuccessStorys(this.offset)
      event.target.complete();
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

  async deleteSuccesssStoryFunction(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      subHeader: 'Are you sure? Do you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'OK',
          handler: () => {
            // this.router.navigate(['/login']);

            this.deleteSuccessStory(id)
          }
        }]
    });
    await alert.present();
  }
}