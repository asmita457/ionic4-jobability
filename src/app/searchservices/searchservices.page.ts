import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@Component({
  selector: 'app-searchservices',
  templateUrl: './searchservices.page.html',
  styleUrls: ['./searchservices.page.scss'],
})
export class SearchservicesPage implements OnInit {

  offset = 0
  keywords: any
  disability_id: any
  serviceApiResponse: any
  serviceListArray = []
  servicesTotalCount: any
  disabilityApiResponse: any
  disabilityListArray = []
  moreDataAvailable: boolean
  serviceAvailable: boolean = true
  badgecount: any
  badgeResultData: any
  searchTitle: any

  readDisability: string = ''

  constructor(
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private dataServices: DataservicesService,
    private router: Router,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,
  ) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.searchTitle != '' || this.searchTitle != undefined) {
      this.keywords = this.searchTitle
    }
    // this.disability_id = ''
    this.offset = 0
    this.serviceListArray = []
    this.disability_id = localStorage.getItem('disabilityID')

    if (this.disability_id == 'null') {
      this.disability_id = ''
    }

    this.getServiceListForJobSeeker(this.keywords, this.disability_id, this.offset)
    this.getDisabilityList()
    this.getNotificationBadgeCount()
    if (this.disability_id != "") {
      this.readDisability = this.disabilityListArray[this.disabilityListArray.findIndex(id => id.id === this.disability_id)].name
    }
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Services Screen')
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
  // Function For get service list
  getServiceListForJobSeeker(keywords, disability_id, offset) {
    if (this.offset == 0) {
      this.presentLoading();
    }
    this.dataServices.getServiceListForJobSeeker(keywords, disability_id, offset).then((result) => {
      this.serviceApiResponse = result
      if (this.serviceApiResponse.status == 1) {
        this.serviceListArray = this.serviceListArray.concat(this.serviceApiResponse.services_list)
        this.servicesTotalCount = this.serviceApiResponse.services_total_count
        if (this.offset == 0) {
          this.loadingController.dismiss()
        }

        if (this.servicesTotalCount < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }
        if (this.servicesTotalCount == 0) {
          this.serviceAvailable = false;
        } else {
          this.serviceAvailable = true;
        }

      } else {
        this.loadingController.dismiss();
        this.presentAlert("", this.serviceApiResponse.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))

    })

  }
  // Function for to get disability type
  getDisabilityList() {
    this.presentLoading();

    this.dataServices.getDisabilityList().then((result) => {
      this.disabilityApiResponse = result
      if (this.disabilityApiResponse.status == 1) {
        this.disabilityListArray = []
        this.disabilityListArray = [{ id: "allDisabilities", name: "All Disabilities" }]
        this.disabilityListArray = this.disabilityListArray.concat(this.disabilityApiResponse.disability_list)
        this.loadingController.dismiss();

      } else {
        this.loadingController.dismiss();
        this.presentAlert('', this.disabilityApiResponse.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))

    })
  } // getDisabilityList Function Ends Here


  // Function For Load Data While Scrolling
  loadData(event) {

    setTimeout(() => {
      this.offset += this.dataServices.globalOffset();

      if (this.offset > this.servicesTotalCount) {
        this.moreDataAvailable = false
      } else {
        this.moreDataAvailable = true
        this.getServiceListForJobSeeker(this.keywords, this.disability_id, this.offset)
        event.target.complete();
      }
    }, 500)

  } //loadData Function Eds Here.

  // On Select of Disability type
  onSelectDisability(disabilityId: any) {
    this.readDisability = this.disabilityListArray[this.disabilityListArray.findIndex(id => id.id === disabilityId)].name
    this.offset = 0
    this.disability_id = disabilityId
    // this.disability_id = item
    if (this.disability_id == "allDisabilities") {
      this.disability_id = ''
    }
    localStorage.setItem("disabilityID", this.disability_id)

    this.serviceListArray = []
    this.getServiceListForJobSeeker(this.keywords, this.disability_id, this.offset)
  }

  search(keywords: string) {
    this.offset = 0
    this.serviceListArray = []
    this.getServiceListForJobSeeker(keywords, this.disability_id, this.offset)
  }

  serviceDetails(item) {
    this.router.navigate(['/servicedetails', { serviceId: item }])
  }

  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    // setTimeout(() => {
    loading.dismiss();
    // }, 500);
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
}
