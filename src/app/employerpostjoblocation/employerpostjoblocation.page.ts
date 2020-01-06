import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-employerpostjoblocation',
  templateUrl: './employerpostjoblocation.page.html',
  styleUrls: ['./employerpostjoblocation.page.scss'],
})
export class EmployerpostjoblocationPage implements OnInit {

  option: any
  uacc_id: any
  isStateCitySelected = false;
  isCountrySelected = false;
  countryID = "0";
  stateCityId = []
  enableStateCityField = true
  selectCountry = false
  selectState = false
  selectCity = false
  disabilityList = []
  countryArrayFromLocalStorage = []
  countryArrayResponse: any
  DdlResponseArray: any
  resultData: any
  cityAndStateArrayFromLocalStorage: any
  // postJobDetailArray = []
  postJobLocationArray = []
  countryId = []
  countryName = []
  stateCity_id = []
  stateCity_name = []

  backwardJobLocationFlag = ""
  backPostJobLocation = []
  // onStateCityStatusSelect = false
  onCountryStatusSelect = false

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,

  ) { }

  ngOnInit() {
  }


  checkForEnableState() {
    if (this.countryID != "0") {
      this.isStateCitySelected = false
      this.enableStateCityField = false
    } else {
      this.enableStateCityField = true
    }
  }


  getStateCityDDLAPI(countryID) {
    this.uacc_id = localStorage.getItem('users_id')
    this.dataServices.getStateAndCityDDLAPI(this.uacc_id, countryID).then((result) => {
      console.log(result)
      this.resultData = result
      if (this.resultData.status == 1) {
        this.cityAndStateArrayFromLocalStorage = [];
        console.log('combine response :: ', this.resultData.state_city_list)
        localStorage.setItem("stateAndCityArray", JSON.stringify(this.resultData.state_city_list));
        // this.countryID = CountryID;
        this.cityAndStateArrayFromLocalStorage = this.resultData.state_city_list;
        if (this.backwardJobLocationFlag == "1") {
          this.stateCityId = this.backPostJobLocation[0].stateCityId;
        }
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))

    })
  }
  goBack() {
    localStorage.setItem('backwardJobDetailFlag', '1')
    // this.router.navigate(['/employerpostjobdetails', {currencyPreselection : "INR" }]);
    this.router.navigate(['/employerpostjobdetails']);
  }

  selectedStateCityValue(item: any) {
    let arrayLength = item.detail.value.length;
    this.isStateCitySelected = false

    if (arrayLength > 3) {
      this.stateCityId = []
      this.isStateCitySelected = true
      item.detail.value.length = 0
      item.detail.value = []
      this.presentAlert('','You should not select Preferred State/City more than 3')   
      return;
    } else {
      console.log('Selected State_City:', item.detail.value)
      for (let i = 0; i < arrayLength; i++) {
        this.stateCityId = []
        this.stateCityId = item.detail.value
        // this.stateCityId.push(item.detail.value);
        // this.stateCity_name.push(item.detail.value[i].name)
        // this.onStateCityStatusSelect = false
        this.isStateCitySelected = false
        console.log("state city id :: ", this.stateCityId)
        return;
      }
    }

  }

  selectedCountryValue(item: any) {

    this.countryID = item.detail.value
    this.stateCityId = []
    console.log("Country id :: ", this.countryID)
    this.getStateCityDDLAPI(this.countryID);

    if (this.countryID != undefined) {
      // this.stateCityId = 0
      this.isCountrySelected == false
      this.presentLoading();
      this.checkForEnableState()
    } else {
      this.isCountrySelected == true
    }
    if (this.countryID == "0") {
      this.isCountrySelected = true
      // this.selectState = true

    } else {
      this.selectCountry = false
      this.isCountrySelected = false
      // this.isStateCitySelected = false
      // this.selectState = false
    }
  }

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



  ionViewWillEnter() {
    // this.enableStateCityField = true
    this.postJobLocationArray = []
    // this.postJobDetailArray = []

    this.backwardJobLocationFlag = localStorage.getItem('backwardJobLocationFlag')
    if (this.backwardJobLocationFlag == "1") {
      this.presentLoading();
      this.stateCityId = []
      this.backPostJobLocation = JSON.parse(localStorage.getItem('backPostJobLocation'))
      console.log('post Job Location LocalStorage :', this.backPostJobLocation)
      this.countryID = this.backPostJobLocation[0].countryId;
      this.stateCityId = this.backPostJobLocation[0].stateCityId;
      this.enableStateCityField = false

    }

    this.DdlResponseArray = JSON.parse(localStorage.getItem('employerDDLResponse'));
    this.disabilityList = this.DdlResponseArray.disability_list;
    this.countryArrayResponse = JSON.parse(localStorage.getItem('countryArray'))
    this.countryArrayFromLocalStorage = this.countryArrayResponse.country_list;
    console.log('countryArray :: ', this.countryArrayFromLocalStorage);
    // const contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
    // this.postJobDetailArray = JSON.parse(contactInfo);
    // console.log("postJobDetailArray :: " + JSON.stringify(this.postJobDetailArray))
    this.getStateCityDDLAPI(this.countryID);

  }

  closePage() {
    this.router.navigate(['/dashboardemployer'])
  }

  nextPage() {
    if (this.countryID == "0" || this.countryID == undefined || this.countryID == null || this.countryID == "") {
      this.isCountrySelected = true
      // this.selectState = true

    } else {
      this.selectCountry = false
      this.isCountrySelected = false
      // this.isStateCitySelected = false
      // this.selectState = false
    }
    let stateCityLength = this.stateCityId.length
    if (stateCityLength == 0) {
      this.isStateCitySelected = true
    }
    else {
      this.isStateCitySelected = false

    }

    // if (this.stateCityId == null || this.stateCityId == undefined  || this.stateCityId == []) {
    //   this.isStateCitySelected = true
    // }
    // else {
    //   this.isStateCitySelected = false
    // }

    if (this.isCountrySelected == false &&
      this.isStateCitySelected == false) {
      this.postJobLocationArray.push({
        countryId: this.countryID,
        stateCityId: this.stateCityId,
      });
      localStorage.setItem('backPostJobLocation', JSON.stringify(this.postJobLocationArray))
      // this.postJobLocationArray = this.postJobLocationArray.concat(this.postJobDetailArray)

      this.router.navigate(['/employerpostjobrequirement', { item: JSON.stringify(this.postJobLocationArray) }])

    }
  }

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
