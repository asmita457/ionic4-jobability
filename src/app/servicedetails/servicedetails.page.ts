import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';

import { Location } from '@angular/common';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.page.html',
  styleUrls: ['./servicedetails.page.scss'],
})



export class ServicedetailsPage implements OnInit {

  serviceId: any
  userId: any
  serviceDetailsResponse: any
  serviceDetails = {
    contact_email: "",
    contact_mobile: "",
    contact_person: "",
    description: "",
    disability_id: "",
    disability_list: "",
    id: "",
    location_list: "",
    name: "",
    organization_name: "",
    organization_website_url: "",
    posted_age: "",
    service_star_rate: 0,
    service_type_list: "",
    serviceprovider_id: "",
    total_service_contact: 0
  }
  serviceProviderId: any
  rating: number
  splitMobile: any
  splitPhone: any
  // showServiceDetails: boolean = true
  // showContact: boolean = false
  // showRating: boolean = false
  // ratingButton: boolean = false

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataServices: DataservicesService,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,

  ) {


  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.serviceId = (this.activatedRoute.snapshot.paramMap.get('serviceId'));
    this.userId = localStorage.getItem('users_id')
    this.getserviceDetails();
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Service Details Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  getserviceDetails() {
    this.presentLoading()
    this.dataServices.getJobSeekerServiceDetails(this.serviceId, this.userId).then((result) => {
      this.serviceDetailsResponse = result
      if (this.serviceDetailsResponse.status == 1) {
        this.serviceDetails = this.serviceDetailsResponse.services_details[0]
        this.splitMobile = this.serviceDetailsResponse.services_details[0].contact_mobile.split('').join(' ').replace(/0/g, 'zero')
        this.splitPhone = this.serviceDetailsResponse.services_details[0].contact_phone.split('').join(' ').replace(/0/g, 'zero')

        this.serviceProviderId = this.serviceDetailsResponse.services_details[0].serviceprovider_id
        this.rating = this.serviceDetailsResponse.services_details[0].service_star_rate == 0 ? 'null' : this.serviceDetailsResponse.services_details[0].service_star_rate;

        this.loadingController.dismiss();
      } else {
        this.loadingController.dismiss();
        this.presentAlert("", this.serviceDetailsResponse.message);
      }

    }, error => {
      this.loadingController.dismiss();
      console.log('Error at service details: ' + JSON.stringify(error))
    })
  }

  //Function for back navigate user
  goBack() {
    // this.router.navigate(['/searchservices']);
    this.location.back();
  } //goBack Function Ends Here. 

  comment() {
    if (this.serviceDetails.total_service_contact != 0) {
      this.presentAlert('', 'You have already commented for this service')
      return
    } else {
      this.router.navigate(['/servicereview', { serviceId: this.serviceId, showCommnet: "true", navFromServiceDetails: true }])
    }
  } //Display loader 

  ratings() {
    this.router.navigate(['/servicereview', { serviceProviderId: this.serviceProviderId, ratingCount: this.rating, serviceId: this.serviceId, navFromServiceDetails: true }])
  }




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
    // console.log('Loading dismissed!' + role + ' Data: ' + data);

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
          // this.router.navigate(['/searchservices'])
        }
      }]
    });
    await alert.present();
  }

  ionViewWillLeave() {
    this.loadingController.dismiss();
  }
}
