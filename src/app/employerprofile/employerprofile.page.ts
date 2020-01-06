import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Events, LoadingController, AlertController } from '@ionic/angular';

@Component({
    selector: 'app-employerprofile',
    templateUrl: './employerprofile.page.html',
    styleUrls: ['./employerprofile.page.scss'],
})
export class EmployerprofilePage implements OnInit {

    verify_email: any
    resultData: any
    companyTypeArray: any = []
    industryTypeArray: any = []
    companyIdArray = []
    industryIdArray = []
    uacc_id: any
    first_name: any
    results: any = []
    companyNAME: any
    companyTypeIndex: any
    country: any
    countryData: any
    company_description: any
    showVerifyButton: boolean
    showVerifiedButton: boolean
    emailVerificatonResponse: any
    employerInformation: any
    badgecount: any
    badgeResultData: any
    splitMobile: any

    constructor(
        private router: Router,
        public events: Events,
        private dataServices: DataservicesService,
        public loadingController: LoadingController,
        private alertCtrl: AlertController
    ) {
        this.uacc_id = localStorage.getItem('users_id');
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.getEmployerInformation();
        this.getCountryArray();
        this.getNotificationBadgeCount()
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
        //   this.loadingController.dismiss();
          console.log('Error in login: ' + JSON.stringify(error))
        })
      }
    
    navigateToNotification() {
    this.router.navigate(['/notification'])
    }

    getCountryArray() {
        this.countryData = [];
        this.dataServices.getCountryArrayAPI().then((result) => {
            this.countryData = result
            if (this.countryData.status == 1) {
                localStorage.setItem("countryArray", JSON.stringify(this.countryData));
            } else {
            }
        }, error => {
            console.log('Error in login: ' + JSON.stringify(error))

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
        }, 6000);
        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!' + role + ' Data: ' + data);
    }//Display Function Ends Here 

    updateEmployerInfo() {
        let info = {
            empInfo: this.results[0],
        }
        this.router.navigate(['/updateemployeeemployerinfo', { item: JSON.stringify(info) }]);
    }

    updateContactInfo() {
        this.router.navigate(['/updateemployeecontactinfo', { item: JSON.stringify(this.results[0]) }]);
    }

    getEmployerDDL(country) {
        console.log("country id: " + country)
        this.dataServices.getDDLAPI(country).then((result) => {
            console.log(result)
            this.resultData = result
            if (this.resultData.status == 1) {
                localStorage.setItem("ddl_list", JSON.stringify(this.resultData));

            } else {
            }
        }, error => {
            console.log('Error in login: ' + JSON.stringify(error))

        })
    }

    // Function For Email Verification
    emailVerification() {
        this.presentLoading();
        this.dataServices.emailVerification().then((result) => {
            this.emailVerificatonResponse = result
            if (this.emailVerificatonResponse.status == 1) {
                this.loadingController.dismiss();
                this.presentAlert('', this.emailVerificatonResponse.message);
            } else {
                this.loadingController.dismiss();
                this.presentAlert('', this.emailVerificatonResponse.message);
            }
        }, error => {
            console.log('Error in login: ' + JSON.stringify(error))
        })
    } // Function emailVerification Ends Here.



    async presentAlert(title, message) {
        const alert = await this.alertCtrl.create({
            header: title,
            subHeader: message,
            buttons: ['OK']
        });
        await alert.present();
    }


    getEmployerInformation() {
        // this.uacc_id = localStorage.getItem("users_id");
        this.presentLoading();
        this.dataServices.getEmployerData(this.uacc_id).then((result) => {
            console.log('employer details :: ' + result)
            this.resultData = result
            if (this.resultData.status == 1) {

                this.employerInformation = this.resultData.employer_details;
                this.first_name = this.resultData.employer_details[0].first_name;
                this.country = this.resultData.employer_details[0].country;
                this.verify_email = this.resultData.employer_details[0].verify_email;

                this.splitMobile =  this.resultData.employer_details[0].mobile.split('').join(' ').replace(/0/g, 'zero')

                console.log("show Verify email: " + this.verify_email)
                localStorage.setItem('userName', this.first_name)

                if (this.verify_email == 0) {
                    this.showVerifyButton = true;
                } else {
                    this.showVerifyButton = false;
                }
                this.getEmployerDDL(this.country);
                this.events.publish('Event-UserName')
                this.results = [];
                this.results.push({
                    compnayName: this.resultData.employer_details[0].company_name,
                    company_type_name: this.resultData.employer_details[0].company_type_name,
                    companytype_id: this.resultData.employer_details[0].companytype_id,
                    year_establishment: this.resultData.employer_details[0].year_establishment,
                    industry: this.resultData.employer_details[0].industry,
                    company_description: this.resultData.employer_details[0].company_description,
                    industry_name: this.resultData.employer_details[0].industry_name,
                    industry_id: this.resultData.employer_details[0].industry_id,
                    website_url: this.resultData.employer_details[0].website_url,
                    first_name: this.resultData.employer_details[0].first_name,
                    designation: this.resultData.employer_details[0].designation,
                    email: this.resultData.employer_details[0].email,
                    phone: this.resultData.employer_details[0].phone,
                    mobile: this.resultData.employer_details[0].mobile,
                    address: this.resultData.employer_details[0].address,
                    zip_code: this.resultData.employer_details[0].zip_code,
                    companyTypeIndex: this.companyTypeIndex,
                    country: this.resultData.employer_details[0].country,
                    state: this.resultData.employer_details[0].state,
                    city: this.resultData.employer_details[0].city,
                    business_email: this.resultData.employer_details[0].business_email

                });
                this.loadingController.dismiss();
            } else {
                this.loadingController.dismiss();
                alert(this.resultData.message);

            }
        }, error => {
            console.log('Error in login: ' + JSON.stringify(error))

        })
    }

}
