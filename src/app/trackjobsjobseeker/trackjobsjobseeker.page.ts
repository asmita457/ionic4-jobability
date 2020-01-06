import { Component, OnInit } from '@angular/core';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-trackjobsjobseeker',
  templateUrl: './trackjobsjobseeker.page.html',
  styleUrls: ['./trackjobsjobseeker.page.scss'],
})

export class TrackjobsjobseekerPage implements OnInit {
  trackJobList = []
  users_id: any
  offset = 0;
  trackJobResponse: any
  track_job_list = []
  track_job_list_length: number
  moreDataAvailable: boolean
  trackJobData: boolean = true
  badgecount: any
  badgeResultData: any
  constructor(
    private router: Router,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,
    public loadingController: LoadingController,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,

  ) {
    // this.onPageLoad()

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.users_id = localStorage.getItem('users_id')
    if (this.users_id == '' || this.users_id == null || this.users_id == undefined || this.users_id == 0) {
      this.users_id = 0;
    }
    this.offset = 0;
    this.track_job_list = []
    this.getTrackJobList()
    this.getNotificationBadgeCount()
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Track Jobs Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  onPageLoad() {

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
  //Function for get list of track jobs
  getTrackJobList() {
    if (this.offset == 0) {
      this.presentLoading();
    }
    this.dataServices.trackjoblist(this.users_id, this.offset).then((result) => {

      this.trackJobResponse = result
      if (this.trackJobResponse.status == 1) {
        this.track_job_list = this.track_job_list.concat(this.trackJobResponse.job_applied_list);
        this.track_job_list_length = this.trackJobResponse.job_applied_total_count
        if (this.offset == 0) {
          this.loadingController.dismiss()
        }

        if (this.track_job_list_length < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }

        if (this.track_job_list_length == 0) {
          this.trackJobData = false;
        } else {
          this.trackJobData = true;
        }

      } else {
        this.loadingController.dismiss();
        this.presentAlert('', this.trackJobResponse.message)
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  jobDescription(item) {
    this.router.navigate(['/searchjobdetail', { jobId: item }])
  }

  loadData(event) {

    setTimeout(() => {
      this.offset += this.dataServices.globalOffset();
      if (this.offset > this.track_job_list_length) {
        this.moreDataAvailable = false
      } else {
        this.moreDataAvailable = true
        this.getTrackJobList()
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

  ionViewWillLeave() {
    this.loadingController.dismiss();
  }
}
