import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Events, LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboardemployer',
  templateUrl: './dashboardemployer.page.html',
  styleUrls: ['./dashboardemployer.page.scss'],
})

export class dashboardemployerPage implements OnInit {
  countryId = 0;
  totalJobPost: any;
  totalApplication: any;
  applicationData = [];
  applicationDetailsResponse: any;
  applicationDetails: any = [];
  aplicationsResponse: any;
  getEmpDashBoardResponse: any;
  getDLLAPIData: any
  offset = 0
  resultData: any
  moreDataAvailable: boolean
  badgecount: any
  badgeResultData: any

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,

  ) {
    this.onPageLoad();
    this.getAllDDLAPI(this.countryId);
    this.getCountryDDlAPI();
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    // localStorage.clear();
    this.offset = 0
    this.menuCtrl.enable(true);
    this.getNotificationBadgeCount()
  }

  //function for get all required data for employer dashboard when page is load
  onPageLoad() {
    this.getEmployerDashBoardDetails(this.offset);
  }



  loadData(event) {
    setTimeout(() => {
      this.offset += this.dataServices.globalOffset()
      // if (this.offset > this.totalApplication) {
      //   this.moreDataAvailable = false
      // } else {
      //   this.moreDataAvailable = true
        this.getEmployerDashBoardDetails(this.offset)
        event.target.complete();
      // }
    }, 500)
  }

  getCountryDDlAPI() {
    this.resultData = [];
    this.dataServices.getCountryArrayAPI().then((result) => {
      this.resultData = result
      if (this.resultData.status == 1) {
        localStorage.setItem("countryArray", JSON.stringify(this.resultData));
      } else {
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))

    })
  }


  getAllDDLAPI(countryId) {
    this.dataServices.getDDLAPI(countryId).then((result) => {
      this.getDLLAPIData = result
      if (this.getDLLAPIData.status == 1) {
        localStorage.setItem("employerDDLResponse", JSON.stringify(this.getDLLAPIData.ddl_list));
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))

    })
  }


  //get Employer Dashboard Details
  getEmployerDashBoardDetails(offset) {
    if (this.offset == 0) {
      this.presentLoading();
    }
    this.dataServices.getEmployerDashBoardDetails(offset).then((result) => {
      this.getEmpDashBoardResponse = result;
      if (this.getEmpDashBoardResponse.status == 1) {
        if (this.offset == 0) {
          // this.offset = 1
          this.loadingController.dismiss();

        }

        this.totalJobPost = this.getEmpDashBoardResponse.dashboard_count_data.total_job_post;
        this.totalApplication = this.getEmpDashBoardResponse.dashboard_count_data.total_application;
        this.applicationData = this.applicationData.concat(this.getEmpDashBoardResponse.dashboard_application_data);

        localStorage.setItem("applicationData", JSON.stringify(this.applicationData));

        if (this.totalJobPost > this.applicationData.length) {
          this.moreDataAvailable = true
        } else {
          this.moreDataAvailable = false
        }
      } else {
        this.loadingController.dismiss();
        // this.presentAlert('', this.applicationDetailsResponse.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  } // getEmployerDashBoardDetails Function Ends Here.

  //Function For Applications Details
  applicationsDetails(id, offset) {
    this.presentLoading();
    this.dataServices.applicationDetails(id, offset).then((result) => {
      this.aplicationsResponse = result;
      if (this.aplicationsResponse.status == 1) {
        this.loadingController.dismiss();
        this.applicationDetailsResponse = this.aplicationsResponse.application_apply_data;
        localStorage.setItem("jobApplications", JSON.stringify(this.applicationDetailsResponse))
        localStorage.setItem("applicationId", id)
        // this.router.navigate(['/employerjobapplications', { jobApplications: JSON.stringify(this.applicationDetailsResponse), applicationId: id }]);
        this.router.navigate(['/employerjobapplications', { applicationId: id }]);


      } else {
        this.loadingController.dismiss();
        // this.presentAlert('', this.applicationDetailsResponse.message);
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
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




  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 6000);
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);

  }//Display Function Ends Here 



  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
