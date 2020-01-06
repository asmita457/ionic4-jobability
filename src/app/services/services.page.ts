import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  totalJobPost: any;
  totalApplication: any;
  applicationData = [];
  applicationDetailsResponse: any;
  applicationDetails: any = [];
  aplicationsResponse: any;
  getSPResponse: any;
  // resultData: any
  uacc_id: any
  verify_email: any
  offset = 0
  servicesArray: any = []
  postedAge: any = []
  moreDataAvailable: boolean
  badgecount: any
  badgeResultData: any

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    public loadingController: LoadingController,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,
  ) {

  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true)
    this.onPageLoad();
    this.servicesArray = []
    this.getNotificationBadgeCount()
  }

  servicesDetail(index) {
    console.log('Selected item:', this.servicesArray[index])
    // this.router.navigate(['/servicesdetailinfo'])
    this.router.navigate(['/servicesdetailinfo', { item: this.servicesArray[index].id }])
  }
  ngOnInit() {
  }
  onPageLoad() {
    this.offset = 0
    this.servicesArray = []
    this.getSPDetails(this.offset);
  }


  loadData(event) {
    setTimeout(() => {
      this.offset += this.dataServices.globalOffset()
      if (this.offset > this.totalApplication) {
        this.moreDataAvailable = false
      } else {
        this.moreDataAvailable = true
        this.getSPDetails(this.offset)
        event.target.complete();
      }
    }, 500)
  }

  navigateToPostServices() {
    this.getServiceProviderInformation()
  }
  getServiceProviderInformation() {
    this.uacc_id = localStorage.getItem("users_id");
    console.log('id::' + this.uacc_id);
    this.presentLoading();
    this.dataServices.getServiceProviderData().then((result: any) => {
      console.log(result)

      if (result.status == 1) {
        this.verify_email = result.service_provider_details[0].verify_email;
        if (this.verify_email == 0) {
          this.loadingController.dismiss();
          this.presentAlert('', "Email address is not verified.")
        } else {
          this.loadingController.dismiss();
          this.router.navigate(['/postservice']);
        }
      } else {
        this.loadingController.dismiss();
        console.log(result.message);
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }
  //get Employer Dashboard Details
  getSPDetails(offset) {
    if (this.offset == 0) {
      this.presentLoading();
    }
    this.dataServices.getSPDashBoardDetails(offset).then((result) => {
      this.getSPResponse = result;
      if (this.getSPResponse.status == 1) {
        if (this.offset == 0) {
          this.loadingController.dismiss();
        }
        console.log('Services Response:', JSON.stringify(this.getSPResponse))
        // this.loadingController.dismiss();
        this.totalApplication = this.getSPResponse.my_services_total_count
        this.servicesArray = this.servicesArray.concat(this.getSPResponse.my_services_list)

        if (this.totalApplication < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }
        // this.totalJobPost = this.getSPResponse.dashboard_count_data.total_job_post;
        // this.totalApplication = this.getSPResponse.dashboard_count_data.total_application;
        // this.applicationData = this.applicationData.concat(this.getSPResponse.dashboard_application_data);
        // this.postedAge = this.getSPResponse.
        // localStorage.setItem("applicationData", JSON.stringify(this.applicationData));
        this.loadingController.dismiss();
      } else {
        this.loadingController.dismiss();
        // this.presentAlert('', this.applicationDetailsResponse.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  } // getEmployerDashBoardDetails Function Ends Here.

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
      message: message,
      buttons: ['OK']
    });
    await alert.present();
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
}
