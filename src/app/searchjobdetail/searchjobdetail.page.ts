import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-searchjobdetail',
  templateUrl: './searchjobdetail.page.html',
  styleUrls: ['./searchjobdetail.page.scss'],
})
export class SearchjobdetailPage implements OnInit {

  jobDetailsArray = []
  saveJObResponse: any
  jobId: any
  userId: any
  detailData: any
  jobSaveFlag: number
  jobStatus: number
  freeSearch: boolean = false
  walkin_from_date: any
  walkin_to_date: any
  showWalkin = false
  login_status: any
  hideApplied = true
  showApplied = false
  applicants_display: any

  personeName: any
  emailId: any
  jobTitle: any
  jobCommentFlag: number
  verifyEmailStatus: any
  jobDetailsLink: any
  salary: any
  splitMobile: any
  constructor
    (
      private router: Router,
      private location: Location,
      private activatedRoute: ActivatedRoute,
      private dataServices: DataservicesService,
      private loadingController: LoadingController,
      private alertCtrl: AlertController,
      private platform: Platform,
      private socialSharing: SocialSharing

    ) {
    // this.jobDetails();

    // this.platform.backButton.subscribe(() => {
    //   // this does work
    //   // alert('Back btn pressed')
    //   this.location.back()
    // });
  }

  ionViewWillEnter() {
    this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'));

    this.userId = localStorage.getItem('users_id')
    if (this.userId == '' || this.userId == null || this.userId == undefined || this.userId == 0) {
      this.freeSearch = true
      this.userId = 0
    }

    this.jobDetails(this.jobId, this.userId);
  }




  jobDetails(jobID, userId) {
    this.presentLoading();
    this.dataServices.getDetailInfoOfJob(jobID, userId).then((result) => {
      this.detailData = result
      if (this.detailData.status == 1) {

        this.jobDetailsArray = this.detailData.job_details_data[0]
        this.jobDetailsLink = this.detailData.job_details_data[0].job_details_link
        this.splitMobile = this.detailData.job_details_data[0].mobile.split('').join(' ').replace(/0/g, 'zero')
        this.jobSaveFlag = this.detailData.job_details_data[0].job_saved_flag
        this.jobStatus = this.detailData.job_details_data[0].job_applied_flag
        this.jobCommentFlag = this.detailData.job_details_data[0].job_comment_flag
        this.verifyEmailStatus = this.detailData.job_details_data[0].verify_email
        this.salary = this.detailData.job_details_data[0].ctc_currency + ' ' + this.detailData.job_details_data[0].annual_ctc_from + ' ' + 'to' + ' ' + this.detailData.job_details_data[0].annual_ctc_to

        this.loadingController.dismiss();
      } else {
        this.loadingController.dismiss();
        this.presentAlert('', this.detailData.message);
      }
    }, error => {
      this.loadingController.dismiss();

      console.log('Error in login: ' + JSON.stringify(error))

    })
  }

  shareSocialMedia() {
    let shareURL = this.jobDetailsLink
    console.log('shareURL: ' + shareURL)
    this.socialSharing.share('Refer this job', 'Refer this job', '', shareURL).then(success => {
      console.log('Success: ' + success)
    }, error => {
      console.log('Failed: ' + error)
    }).catch(err => {
      console.log('error: ' + err)
    })
  }

  applyJob() {

    this.login_status = localStorage.getItem('login');

    if (this.login_status == 'yes') {
      this.applyJobAPI();
    }
    else {
      this.presentAlert('', "Please login to apply the job.")
      // this.router.navigate(['/welcomescreen'])
      return;
    }

  }

  //Save Job
  saveJob(jobId) {
    if (this.userId == 0) {
      this.confirmAction('save')

    } else {
      this.saveOrRemoveJob(jobId)
    }
  }

  //Save Job and Remove Job
  saveOrRemoveJob(jobId) {
    this.presentLoading();
    this.dataServices.saveOrRemoveJob(jobId, this.userId).then((res) => {
      this.saveJObResponse = res;
      this.loadingController.dismiss();
      if (this.saveJObResponse.status == 1) {
        if (this.saveJObResponse.check_flag == 1) {
          this.jobSaveFlag = 1
        } else {
          this.jobSaveFlag = 0
        }
        this.presentAlert("", this.saveJObResponse.message);
      }
      else {
        this.presentAlert("", this.saveJObResponse.message);
      }
    }, (error) => {
      this.loadingController.dismiss();
      console.log(error);
    });
  } // Save and Remove Job Functon Ends Here.

  async confirmAction(action) {
    if (action == 'applay') {
      var subHeader = 'If you want to apply for job you have to "Register" or "Login" first.'
    } else {
      var subHeader = 'If you want to save job you have to "Register" or "Login" first.'
    }
    const alert = await this.alertCtrl.create({
      header: '',
      subHeader: subHeader,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            localStorage.clear();
            localStorage.setItem('users_id', '0')
            this.router.navigate(['/welcomescreen']);
          }
        }]
    });
    await alert.present();
  }

  applyJobAPI() {

    this.presentLoading();
    this.dataServices.jobApplyAPI(this.userId, this.jobId).then((result: any) => {
      if (result.status == 1) {
        this.loadingController.dismiss();

        this.presentAlert('', result.message);

        // this.hideApplied = false
        // this.showApplied = true;
        this.jobStatus = 1


      } else {
        this.loadingController.dismiss();
        this.presentAlert('', result.message);

        if (result.message == "You have already applied this job.") {
          this.hideApplied = false
          this.showApplied = true;
        }
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  freeSearchUser() {
    this.confirmAction('applay')
  }

  ngOnInit() {
  }
  goBack() {

    this.location.back();
    // this.router.navigate(['/searchjobs']);
  }

  comment() {
    if (this.jobCommentFlag == 0 && this.verifyEmailStatus == '1') {
      this.personeName = this.detailData.job_details_data[0].person_name;
      this.emailId = this.detailData.job_details_data[0].email;
      this.jobTitle = this.detailData.job_details_data[0].name;

      this.router.navigate(['/servicereview', { jobId: this.jobId, personeName: this.personeName, emailId: this.emailId, jobTitle: this.jobTitle, navFromServiceDetails: false }])
    } else if (this.jobCommentFlag == 0 && this.verifyEmailStatus == '0') {
      this.presentAlert('', 'Please verify your email address to comment on the job.')
    } else {
      this.presentAlert('', 'You have already commented for this job.')
      return
    }

    // }
  } //Display loader 

  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 1000);


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

