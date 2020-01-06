import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-savedjobs',
  templateUrl: './savedjobs.page.html',
  styleUrls: ['./savedjobs.page.scss'],
})
export class SavedjobsPage implements OnInit {

  resultData: any
  recommendedJobsLength: any
  savedJobsArray = []
  showSearchData = true;
  // hideSearchData = false;
  users_id: any
  saved_job_list = []
  savedJobListLength: any
  offset = 0;
  moreDataAvailable: boolean
  savejobCount: any
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
    this.offset = 0;
    this.saved_job_list = []

    this.users_id = localStorage.getItem('users_id')

    this.savejobCount = (this.activatedRoute.snapshot.paramMap.get('count'));


    if (this.users_id == '' || this.users_id == null || this.users_id == undefined) {
      this.users_id = 0;
    }
    if (this.savejobCount != '0' || this.savejobCount != 0) {
      this.getSavedJobList();
    } else {
      this.showSearchData = false
    }
    this.getNotificationBadgeCount()
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Saved Jobs Screen')
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
  // Function For Load Data While Scrolling
  loadData(event) {

    setTimeout(() => {
      this.offset += this.dataServices.globalOffset();
      if (this.offset > this.savedJobListLength) {
        this.moreDataAvailable = false
      } else {
        this.moreDataAvailable = true
        this.getSavedJobList()
        event.target.complete();
      }
    }, 500)

  } //loadData Function Eds Here.

  jobDescription(item) {
    console.log('id: ' + item.id)
    this.router.navigate(['/searchjobdetail', { jobId: item.id }])
  }

  getSavedJobList() {
    if (this.offset == 0) {
      this.presentLoading();
    }
    this.dataServices.getSavedJobsData(this.users_id, this.offset).then((result) => {
      this.resultData = result

      if (this.resultData.status == 1) {
        this.saved_job_list = this.saved_job_list.concat(this.resultData.saved_job_list);
        this.savedJobListLength = this.resultData.save_job_total_count
        if (this.offset == 0) {
          this.loadingController.dismiss()
        }
        if (this.savedJobListLength < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }

        if (this.savedJobListLength == 0) {
          this.showSearchData = false;
        } else {
          this.showSearchData = true;
        }
      } else {
        this.loadingController.dismiss();
        this.presentAlert('', this.resultData.message)
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  saveOrRemoveJob(jobId) {
    var val = jobId;
    this.presentLoading();
    this.dataServices.saveOrRemoveJob(jobId, this.users_id).then((res) => {
      this.resultData = res;
      if (this.resultData.status == 1) {
        this.loadingController.dismiss();
        this.presentAlert("", this.resultData.message);
        ///this.getSavedJobList()
        var index = this.saved_job_list.findIndex(function (item, i) {
          return item.id === val
        });
        if (index > -1) {
          this.saved_job_list.splice(index, 1);
          this.savedJobListLength = this.savedJobListLength - 1
          if (this.savedJobListLength == 0) {
            this.showSearchData = false
          }
        }
      }
      else {
        this.presentAlert("", this.resultData.message);
      }
    }, (error) => {
      this.loadingController.dismiss();
      console.log(error);
    });
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

  ionViewWillLeave() {
    this.loadingController.dismiss();
  }
}
