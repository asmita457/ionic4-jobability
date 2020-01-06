import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, Events, MenuController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serviceproviderprofile',
  templateUrl: './serviceproviderprofile.page.html',
  styleUrls: ['./serviceproviderprofile.page.scss'],
})
export class ServiceproviderprofilePage implements OnInit {
  serviceProviderDetials = {
    first_name: "",
    email: "",
    mobile: "",
    address: "",
    organizationtype: "",
    year_establishment: "",
    disability_id: "",
    website_url: "",
    country: "",
    verify_email: "",
    business_email: "",
    phone: "",
    designation: "",
    organisation_name: "",
    zip_code: "",
    state: "",
    city: "",
    message: ''
  }

  disabilitys: any
  serviceType: any
  serviceProviderCategory = []
  serviceProviderInfo = []
  serviceProviderOrgInfo = []
  disabilityIds = []
  servicetype_id: any = []
  badgecount: any
  organizationtype: any
  splitMobile : any


  constructor(
    public loadingController: LoadingController,
    public dataServices: DataservicesService,
    private router: Router,
    private alertCtrl: AlertController,
    public events: Events,
    public menuCtrl: MenuController,

  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true)
    this.getServiceProviderInformation();
    this.getCountryArray();
    this.getNotificationBadgeCount()
  }

  ngOnInit() {

  }

  getServiceProviderInformation() {
    this.presentLoading();
    this.dataServices.getServiceProviderData().then((result: any) => {
      if (result.status == 1) {
        this.serviceProviderDetials = result.service_provider_details[0]
        this.disabilitys = result.service_provider_disability_details
        this.serviceType = result.service_provider_servicetype_details
        this.splitMobile = this.serviceProviderDetials.mobile.split('').join(' ').replace(/0/g, 'zero')

        if (this.serviceProviderDetials.organizationtype == '1') {
          this.organizationtype = 'Organization'
        } else if (this.serviceProviderDetials.organizationtype == '2') {
          this.organizationtype = 'Service Professional'
        } else {
          this.organizationtype = ''
        }

        localStorage.setItem('userName', this.serviceProviderDetials.first_name)
        this.events.publish('Event-UserName')

        this.serviceProviderInfo = [];
        this.serviceProviderInfo.push({
          first_name: this.serviceProviderDetials.first_name,
          designation: this.serviceProviderDetials.designation,
          email: this.serviceProviderDetials.email,
          business_email: this.serviceProviderDetials.business_email,
          mobile: this.serviceProviderDetials.mobile,
          phone: this.serviceProviderDetials.phone,
          address: this.serviceProviderDetials.address,
          country: this.serviceProviderDetials.country == '0' ? '' : this.serviceProviderDetials.country,
          state: this.serviceProviderDetials.state == '0' ? '' : this.serviceProviderDetials.state,
          city: this.serviceProviderDetials.city == '0' ? '' : this.serviceProviderDetials.city,
          zip_code: this.serviceProviderDetials.zip_code,
        });

        this.disabilityIds = []
        for (let m = 0; m < this.disabilitys.length; m++) {
          this.disabilityIds.push(this.disabilitys[m].id);
        }

        this.servicetype_id = []
        for (let m = 0; m < this.serviceType.length; m++) {
          this.servicetype_id.push(this.serviceType[m].id);
        }

        this.serviceProviderCategory = []
        if (this.serviceProviderDetials.organizationtype == '1') {
          for (let m = 0; m < result.service_provider_organization_details.length; m++) {
            this.serviceProviderCategory.push(result.service_provider_organization_details[m].id);
          }
        }

        this.serviceProviderOrgInfo = []
        this.serviceProviderOrgInfo.push({
          organisation_name: this.serviceProviderDetials.organisation_name,
          organizationtype: this.serviceProviderDetials.organizationtype,
          disabilityIds: this.disabilityIds,
          servicetype_id: this.servicetype_id,
          serviceProviderCategory: this.serviceProviderCategory,
          year_establishment: this.serviceProviderDetials.year_establishment == '0'? '' : this.serviceProviderDetials.year_establishment,
          website_url: this.serviceProviderDetials.website_url,
        })

        this.getServiceProviderDDL(this.serviceProviderDetials.country)

        this.loadingController.dismiss();

      } else {
        this.loadingController.dismiss();
        this.presentAlert('', this.serviceProviderDetials.message);
      }
    }, error => {
      console.log('Error in service provider profile: ' + JSON.stringify(error))
    })
  }

  getCountryArray() {
    this.dataServices.getCountryArrayAPI().then((result: any) => {
      if (result.status == 1) {
        localStorage.setItem("countryArray", JSON.stringify(result));
      }
    }, error => {
      console.log('Error in service provider profile: ' + JSON.stringify(error))
    })
  }

  getNotificationBadgeCount() {
    this.dataServices.getNotificationBadgeCount().then((result: any) => {
      if (result.status == 1) {
        this.badgecount = result.total_notification_count
      }
    }, error => {
      console.log('Error in service provider profile: ' + JSON.stringify(error))
    })
  }

  navigateToNotification() {
    this.router.navigate(['/notification'])
  }


  getServiceProviderDDL(countryId) {
    this.dataServices.getDDLAPI(countryId).then((result: any) => {
      if (result.status == 1) {
        localStorage.setItem("stateAndCityArray", JSON.stringify(result));
        this.loadingController.dismiss();
      }
    }, error => {
      console.log('Error in service provider profile: ' + JSON.stringify(error))
    })
  }


  updateServiceproviderContactInfo() {

    this.router.navigate(['/updateserviceprovidercontactinfo', { serviceProviderInfo: JSON.stringify(this.serviceProviderInfo[0]) }])

  }


  updateServiceProviderOrganisationInfo() {
    this.router.navigate(['/updateserviceproviderorganisationinfo', { serviceProviderOrgInfo: JSON.stringify(this.serviceProviderOrgInfo[0]) }])

  }


  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();

  }//Display Function Ends Here 

  // Function For Email Verification
  emailVerification() {
    this.presentLoading();
    this.dataServices.emailVerification().then((result: any) => {
      if (result.status == 1) {
        this.loadingController.dismiss();
        this.presentAlert('Email', result.message)
      } else {
        this.loadingController.dismiss();
        this.presentAlert('Email', result.message)
      }
    }, error => {
      console.log('Error in service provider profile: ' + JSON.stringify(error))
    })
  } // Function emailVerification Ends Here.

  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
