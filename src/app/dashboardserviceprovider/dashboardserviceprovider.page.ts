import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
@Component({
  selector: 'app-dashboardserviceprovider',
  templateUrl: './dashboardserviceprovider.page.html',
  styleUrls: ['./dashboardserviceprovider.page.scss'],
})
export class DashboardserviceproviderPage implements OnInit {
  offset = 0
  servicesArray: any = []
  totalApplication: any;
  moreDataAvailable: boolean
  badgecount: any
  uacc_id: any
  verify_email: any

  constructor
    (
      private menuCtrl: MenuController,
      public router: Router,
      public loadingController: LoadingController,
      public dataServices: DataservicesService,
      public alertController: AlertController
    ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.getNotificationBadgeCount()
    this.offset = 0
    this.servicesArray = []
    this.getSPDetails(this.offset);
  }

  //get Employer Dashboard Details
  getSPDetails(offset) {
    this.presentLoading();
    this.dataServices.getSPDashBoardDetails(offset).then((result: any) => {
      if (result.status == 1) {
        this.totalApplication = result.my_services_total_count
        this.servicesArray = this.servicesArray.concat(result.my_services_list)

        if (this.totalApplication < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }
        this.loadingController.dismiss();
      } else {
        this.loadingController.dismiss();
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  } // getEmployerDashBoardDetails Function Ends Here.

  getNotificationBadgeCount() {
    this.dataServices.getNotificationBadgeCount().then((result: any) => {
      if (result.status == 1) {
        this.badgecount = result.total_notification_count
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  navToPostService() {
    this.getServiceProviderInformation()
  }

  servicesDetail(serviceId) {
    this.router.navigate(['/servicesdetailinfo', { item: serviceId }])
  }

  getServiceProviderInformation() {
    this.uacc_id = localStorage.getItem("users_id");
    this.presentLoading();
    this.dataServices.getServiceProviderData().then((result: any) => {
      if (result.status == 1) {
        this.verify_email = result.service_provider_details[0].verify_email;
        if (this.verify_email == 0) {
          this.loadingController.dismiss();
          this.presentAlertCtrl('', 'Email address is not verified.')
        } else {
          this.loadingController.dismiss();
          this.router.navigate(['/postservice']);
        }
      } else {
        this.loadingController.dismiss();
        this.presentAlertCtrl('', result.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }


  loadData(event) {
    setTimeout(() => {
      this.offset += this.dataServices.globalOffset()
      if (this.offset > this.totalApplication) {
        this.moreDataAvailable = false
      } else {
        this.moreDataAvailable = true
        this.getSPDetails(this.offset)
      }
    }, 500)
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
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 500);
    // const { role, data } = await loading.onDidDismiss();

  }//Display Function Ends Here 

  async presentAlertCtrl(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
