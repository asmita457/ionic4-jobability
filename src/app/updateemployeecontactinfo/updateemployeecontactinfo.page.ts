import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-updateemployeecontactinfo',
  templateUrl: './updateemployeecontactinfo.page.html',
  styleUrls: ['./updateemployeecontactinfo.page.scss'],
})
export class UpdateemployeecontactinfoPage implements OnInit {

  dataArray: any
  first_name: any
  designation: any
  email: any
  business_email: any
  phone: any
  mobile: any
  address: any
  existingDataResponse: any
  zip_code: any
  users_id: any
  country: any
  city: any
  state: any
  nameErrorMsg: any;
  showNameErrorMsg = false
  designationErrorMsg: any;
  showDesignationErrorMsg = false
  mobileErrorMsg: any;
  showMobileErrorMsg = false
  addressErrorMsg: any;
  showAddressErrorMsg = false
  emailErrorMsg: any
  showEmailErrorMsg = false
  zipcodeErrorMsg: any;
  showZipcodeErrorMsg = false
  stateAndCityArray: any
  countryArray: any
  altEmailErrorMsg: any
  showAltEmailErrorMsg = false
  countryArrayFromLocalStorage: any
  cityAndStateArrayFromLocalStorage: any
  cityNameArray = []
  state_id: any
  resultData: any
  isCountrySelected = false;
  isStateSelected = false;
  isCitySelected = false;
  phoneErrorMsg: any
  showPhoneErrorMsg = false
  selectCountry = false
  selectState = false
  selectCity = false
  enableStateField = true
  enableCityField = true

  //Temp var
  tempState_id: string = ""
  tempCity_id: string = ""

  constructor(private router: Router,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,
    public loadingController: LoadingController,
    private activatedRoute: ActivatedRoute) {

    this.users_id = localStorage.getItem('users_id');
    this.countryArray = localStorage.getItem("countryArray");

    const contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
    this.dataArray = JSON.parse(contactInfo);
    this.first_name = this.dataArray.first_name;
    this.designation = this.dataArray.designation;
    this.email = this.dataArray.email;
    this.phone = this.dataArray.phone;
    this.mobile = this.dataArray.mobile;
    this.address = this.dataArray.address;
    this.zip_code = this.dataArray.zip_code;
    this.country = this.dataArray.country;
    this.city = this.dataArray.city;
    this.state_id = this.dataArray.state;
    this.business_email = this.dataArray.business_email;

    //temp var value
    this.tempState_id = this.dataArray.state;
    this.tempCity_id = this.dataArray.city;
    
    if (this.country != "0") {
      this.checkForEnableState()
      this.stateAndCityArray = localStorage.getItem("ddl_list");

    }

    if (this.state_id != "0") {
      this.checkForEnableCity()
    }


    if ((this.countryArray != '' || this.countryArray != null || this.countryArray != undefined) &&
      (this.stateAndCityArray != '' || this.stateAndCityArray != null || this.stateAndCityArray != undefined)) {
      this.setDefaultCity(this.countryArray, this.stateAndCityArray);
    }
  }



  getDDLAPI(country) {
    this.dataServices.getDDLAPI(country).then((result) => {
      console.log(result)
      this.resultData = result
      if (this.resultData.status == 1) {
        this.cityAndStateArrayFromLocalStorage = [];
        localStorage.setItem("stateAndCityArray", JSON.stringify(this.resultData));
        this.country = country;
        this.isCountrySelected = false
        this.cityAndStateArrayFromLocalStorage = this.resultData.ddl_list.state_list;

      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))

    })
  }





  // Function for showing selected value city.
  setDefaultCity(countryArray, stateAndCityArray) {
    this.countryArrayFromLocalStorage = JSON.parse(countryArray).country_list;
    if (this.state_id != 0) {
      this.cityAndStateArrayFromLocalStorage = JSON.parse(stateAndCityArray).ddl_list.state_list;
      for (let i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
        if (this.cityAndStateArrayFromLocalStorage[i].id == this.state_id) {
          this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city
        }
      }
    }

  } //setDefaultCity Ends Here;

  ngOnInit() {
  }

  closePage() {
    this.router.navigate(['/employerprofile'])
  }

  selectedCountryValue(item: any) {
    this.state_id = 0
      this.city = 0
    this.country = item.detail.value.id
    this.getDDLAPI(item.detail.value.id);

    if (this.country != undefined) {
      this.state_id = 0
      this.city = 0
      this.isCountrySelected == false
      this.checkForEnableState()
    } else {
      this.isCountrySelected == true
    }
    if (this.country == "0") {
      this.isCountrySelected = true
      this.selectState = true

    } else {
      this.selectCountry = false
      this.isCountrySelected = false
      this.isStateSelected = false
      this.selectState = false
    }
  }

  selectedStatesValue(item: any) {
    this.city = null
    this.state_id = null
    this.state_id = item.detail.value.id;

    if (this.tempState_id == this.state_id) {
      this.city = this.tempCity_id
    }
    if (this.state_id == "0") {
      this.isStateSelected = true
      this.selectState = true
      this.selectCity = true
      this.isCitySelected = true

    } else {
      this.isStateSelected = false
      this.selectState = false
      this.selectCity = false
      this.isCitySelected = false

      this.checkForEnableCity()
    }
    for (let i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
      if (this.cityAndStateArrayFromLocalStorage[i].id == this.state_id) {
        this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city
      }
    }
  }


  selectedCityValue(item: any) {
    this.city = item.detail.value.id;
    this.tempCity_id = this.city

    if (this.city == "0") {
      this.isCitySelected = true
      this.selectCity = true

    } else {
      this.isCitySelected = false
      this.selectCity = false
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
          this.closePage();
        }
      }]
    });
    await alert.present();
  }

  employeeNameValidator() {
    if (this.first_name == '' || this.first_name == undefined || this.first_name == null) {
      this.showNameErrorMsg = true;
      this.nameErrorMsg = "Please enter name";
    } else {
      this.showNameErrorMsg = false;
    }
  }

  checkForEnableState() {
    if (this.country != "0") {
      this.enableStateField = false
    } else {
      this.enableStateField = true
    }
  }
  checkForEnableCity() {
    if (this.state_id != "0") {
      this.enableCityField = false
    } else {
      this.enableCityField = true
    }
  }

  employeeAltEmailValidator() {

    if (this.business_email == '' || this.business_email == undefined || this.business_email == null) {
      this.showAltEmailErrorMsg = false
    } else {

      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(this.business_email) == false) {
        this.showAltEmailErrorMsg = true;
        this.altEmailErrorMsg = 'Please enter valid email address'
      } else {
        this.showAltEmailErrorMsg = false;
      }

    }


  }

  employeeEmailValidator() {
    if (this.email == '' || this.email == undefined || this.email == null) {
      this.showEmailErrorMsg = true;
      this.emailErrorMsg = "Please enter email address";
    } else {
      this.showEmailErrorMsg = false;
    }
    if (this.showEmailErrorMsg != true) {
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(this.email) == false) {
        this.showEmailErrorMsg = true;
        this.emailErrorMsg = 'Please enter valid email address'
      } else {
        this.showEmailErrorMsg = false;
      }
    }
  }
  employeeDesignationValidator() {
    if (this.designation == '' || this.designation == undefined || this.designation == null) {
      this.showDesignationErrorMsg = true;
      this.designationErrorMsg = "Please enter designation";
    } else {
      this.showDesignationErrorMsg = false;
    }
  }
  employeeAddressValidator() {
    if (this.address == '' || this.address == undefined || this.address == null) {
      this.showAddressErrorMsg = true;
      this.addressErrorMsg = "Please enter address";
    } else {
      this.showAddressErrorMsg = false;
    }
  }
  employeeMobileValidator() {
    if (this.mobile == '' || this.mobile == undefined || this.mobile == null) {
      this.showMobileErrorMsg = true;
      this.mobileErrorMsg = "Please enter mobile no.";
    } else {
      this.showMobileErrorMsg = false;
    }
  }

  // employeePhoneValidator() {
  // if (this.phone == '' || this.phone == undefined || this.phone == null) {
  // this.showPhoneErrorMsg = true;
  // this.phoneErrorMsg = 'Please enter valid Phone number'
  // }
  // else
  // {
  // this.showPhoneErrorMsg = false;
  // }
  // }


  updateEmployerContactDetail() {

    if (this.city != null) {
      this.tempState_id = this.state_id
    }

    if ((this.first_name == '' || this.first_name == null || this.first_name == undefined) &&
      (this.designation == '' || this.designation == null || this.designation == undefined) &&
      (this.address == '' || this.address == null || this.address == undefined) &&
      (this.city == null || this.city == undefined || this.city == "") &&
      (this.state_id == null || this.state_id == undefined || this.state_id == "") &&
      (this.country == null || this.country == undefined || this.country == "") &&
      (this.zip_code == '' || this.zip_code == null || this.zip_code == undefined) &&
      (this.email == '' || this.email == null || this.email == undefined) &&
      (this.mobile == '' || this.mobile == null || this.mobile == undefined)) {
      this.showNameErrorMsg = true
      this.nameErrorMsg = "Please enter name"
      this.showDesignationErrorMsg = true
      this.designationErrorMsg = "Please enter designation"
      this.showEmailErrorMsg = true
      this.emailErrorMsg = "Please enter name"
      this.showMobileErrorMsg = true
      this.mobileErrorMsg = "Please enter mobile number"
      this.showAddressErrorMsg = true
      this.addressErrorMsg = "Please enter address"
      this.isCountrySelected = true
      this.isStateSelected = true
      this.isCitySelected = true
      this.showZipcodeErrorMsg = true
      this.zipcodeErrorMsg = "Please enter zip code"
    }
    else {
      this.showEmailErrorMsg = false
      this.showNameErrorMsg = false
      this.showDesignationErrorMsg = false
      this.showMobileErrorMsg = false
      this.showAddressErrorMsg = false
      this.showZipcodeErrorMsg = false
      this.isCountrySelected = false
      this.isStateSelected = false
      this.isCitySelected = false
    }

    this.employeeMobileValidator();
    this.employeeDesignationValidator();
    this.employeeNameValidator();
    this.employeeAddressValidator();
    this.employeeEmailValidator();
    this.employeeZipcodeValidator()


    if (this.country == "0") {
      this.isCountrySelected = true
      this.selectCountry = true
    } else {
      this.isCountrySelected = false
      this.selectCountry = false
    }

    if (this.state_id == "0") {
      this.isStateSelected = true
      this.selectState = true

    } else {
      this.isStateSelected = false
      this.selectState = false
    }

    if (this.city == "0" || this.city == null) {
      this.isCitySelected = true
      this.selectCity = true
    } else {
      this.isCitySelected = false
      this.selectCity = false
    }

    if (this.showNameErrorMsg == false &&
      this.showDesignationErrorMsg == false &&
      this.showEmailErrorMsg == false &&
      this.showMobileErrorMsg == false &&
      this.showAddressErrorMsg == false &&
      this.isCountrySelected == false &&
      this.isStateSelected == false &&
      this.showZipcodeErrorMsg == false &&
      this.isCitySelected == false) {
      this.presentLoading();
      //employer contact info API.
      this.dataServices.updateEmployeeContactInfoAPI(this.first_name, this.designation, this.business_email, this.phone, this.mobile, this.address, this.city, this.state_id, this.country, this.zip_code, this.email, this.users_id).then((res) => {
        this.existingDataResponse = res;
        console.log('responsre::: ' + this.existingDataResponse)
        if (this.existingDataResponse.status == 1) {
          console.log('Update Employer Information :: ' + this.existingDataResponse)
          this.presentAlert(this.existingDataResponse.message, '');
          localStorage.setItem('email', this.email)
          localStorage.setItem('busciness_email', this.business_email)
          // this.closePage()
          this.loadingController.dismiss();

        }
        else {
          this.loadingController.dismiss();
          this.presentAlert(this.existingDataResponse.message, '');
        }

      }, (error) => {
        alert(error);
      });
    }
  }




  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);

  }//Display Function Ends Here 


  employeeZipcodeValidator() {
    if (this.zip_code == '' || this.zip_code == undefined || this.zip_code == null) {
      this.showZipcodeErrorMsg = true;
      this.zipcodeErrorMsg = "Please enter zip code";
    } else {
      this.showZipcodeErrorMsg = false;
    }
    if (this.zip_code != undefined) {
      if (this.zip_code.toString().length != 6) {
        this.showZipcodeErrorMsg = true;
        this.zipcodeErrorMsg = 'Please enter valid zip code'
      } else {
        this.showZipcodeErrorMsg = false;
      }
    }
  }
}