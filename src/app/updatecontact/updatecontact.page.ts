import { Component, OnInit, NgZone } from '@angular/core';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Events, LoadingController } from '@ionic/angular';

import { Validators, FormBuilder } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.page.html',
  styleUrls: ['./updatecontact.page.scss'],
})
export class UpdatecontactPage implements OnInit {

  showErrorIcon: boolean = false
  dataArray: any
  disability_list = []
  uacc_id: any
  countryArray: any
  stateAndCityArray: any
  countryArrayFromLocalStorage: any;
  cityNameArray: any = [];
  cityAndStateArrayFromLocalStorage: any;

  readGender: string = 'Please select gender'
  readMaritalStatus: string = 'Please select marital status'
  readDisabilityType: string = 'Please select disability type'
  readCountry: string = 'Please select country'
  readState: string = 'Please select state'
  readCity: string = 'Please select city'


  disabilityNameArray: any = []
  // Forms declaration
  updateContactDetailsForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    gender: ['', Validators.required],
    maritalStatus: ['', Validators.required],
    disability: ['', Validators.required],
    address: ['', Validators.required],
    country: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
  });

  contactGenderArray: any = [
    { id: 'm', name: 'Male' },
    { id: 'f', name: 'Female' },
    { id: 't', name: 'Transgender' },
  ];

  contactMaritalStatusArray: any = [
    { id: '1', name: 'Single' },
    { id: '2', name: 'Married' },
    { id: '3', name: 'Divorced' },
    { id: '4', name: 'Widowed' },
    { id: '5', name: 'Separated' },
  ];

  constructor(
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    public navCtrl: NavController
  ) {

    this.onPageLoad();
  }

  ionViewWillEnter() {

  }

  ngOnInit() {

  }

  onPageLoad() {

    const contactInfo = (this.activatedRoute.snapshot.paramMap.get('seekerContactInfo'));
    this.dataArray = JSON.parse(contactInfo);
    this.uacc_id = localStorage.getItem("users_id");
    this.countryArray = localStorage.getItem("countryArray");
    this.stateAndCityArray = localStorage.getItem("stateAndCityArray");

    if (this.dataArray.disability_id != '') {
      this.dataArray.disability_id = this.dataArray.disability_id.split(",");
    }

    if ((this.countryArray != '' || this.countryArray != null || this.countryArray != undefined) &&
      (this.stateAndCityArray != '' || this.stateAndCityArray != null || this.stateAndCityArray != undefined)) {
      this.setDefaultCity(this.countryArray, this.stateAndCityArray);
    }
    this.getStringDataForAccessability()

  }


  getStringDataForAccessability() {

    for (let i = 0; i < this.contactGenderArray.length; i++) {
      if (this.contactGenderArray[i].id == this.dataArray.gender) {
        this.readGender = this.contactGenderArray[i].name
      }
    }

    for (let i = 0; i < this.contactMaritalStatusArray.length; i++) {
      if (this.contactMaritalStatusArray[i].id == this.dataArray.marritalStatus) {
        this.readMaritalStatus = this.contactMaritalStatusArray[i].name
      }
    }

    this.disabilityNameArray = []
    for (let i = 0; i < this.dataArray.disability_id.length; i++) {
      for (let j = 0; j < this.disability_list.length; j++) {
        if (this.disability_list[j].id == this.dataArray.disability_id[i]) {
          this.disabilityNameArray.push(this.disability_list[j].name)
        }
      }
    }
    this.readDisabilityType = this.disabilityNameArray.toString()
  }

  //OnChange Functions for DropDowns

  // Function for showing selected value city.
  selectedGender(gender) {
    for (let i = 0; i < this.contactGenderArray.length; i++) {
      if (this.contactGenderArray[i].id == gender) {
        this.readGender = this.contactGenderArray[i].name
      }
    }
  }

  selectedMaritalStatus(status) {
    for (let i = 0; i < this.contactMaritalStatusArray.length; i++) {
      if (this.contactMaritalStatusArray[i].id == status) {
        this.readMaritalStatus = this.contactMaritalStatusArray[i].name
      }
    }
  }

  selectedDisabilities(id) {
    this.disabilityNameArray = []
    if (id.length > 0) {
      this.showErrorIcon = false;
      for (let i = 0; i < id.length; i++) {
        for (let j = 0; j < this.disability_list.length; j++) {
          if (this.disability_list[j].id == id[i]) {
            this.disabilityNameArray.push(this.disability_list[j].name)
          }
        }
      }
    } 

    this.readDisabilityType = this.disabilityNameArray.toString()
  }

  setDefaultCity(countryArray, stateAndCityArray) {
    this.disability_list = JSON.parse(stateAndCityArray).ddl_list.disability_list;
    this.countryArrayFromLocalStorage = JSON.parse(countryArray).country_list;

    for (let i = 0; i < this.countryArrayFromLocalStorage.length; i++) {
      if (this.countryArrayFromLocalStorage[i].id == this.dataArray.country) {
        this.readCountry = this.countryArrayFromLocalStorage[i].name
      }
    }

    if (this.dataArray.state != 0) {
      this.cityAndStateArrayFromLocalStorage = JSON.parse(stateAndCityArray).ddl_list.state_list;
      for (let i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
        if (this.cityAndStateArrayFromLocalStorage[i].id == this.dataArray.state) {
          this.readState = this.cityAndStateArrayFromLocalStorage[i].name
          this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city
        }
      }

      for (let i = 0; i < this.cityNameArray.length; i++) {
        if (this.cityNameArray[i].id == this.dataArray.city) {
          this.readCity = this.cityNameArray[i].name
        }
      }
    }
  } //setDefaultCity Ends Here;

  selectedCountryValue(countryId) {
    this.dataArray.state = ''
    this.dataArray.city = ''
    this.readState = 'Please select state'
    this.readCity = 'Please select city'
    this.getDDLAPI(countryId);
    for (let i = 0; i < this.countryArrayFromLocalStorage.length; i++) {
      if (this.countryArrayFromLocalStorage[i].id == this.dataArray.country) {
        this.readCountry = this.countryArrayFromLocalStorage[i].name
      }
    }
  }

  selectedStatesValue(stateId) {
    this.dataArray.city = ''
    this.readCity = 'Please select city'
    for (let i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
      if (this.cityAndStateArrayFromLocalStorage[i].id == stateId) {
        this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city
        this.readState = this.cityAndStateArrayFromLocalStorage[i].name
      }
    }
  }

  selectedCityValue(city) {
    for (let i = 0; i < this.cityNameArray.length; i++) {
      if (this.cityNameArray[i].id == city) {
        this.readCity = this.cityNameArray[i].name
      }
    }
  }

  //OnChange Functions For DropDowns Ends Here.

  getDDLAPI(CountryID) {
    this.dataServices.getDDLAPI(CountryID).then((res: any) => {
      if (res.status == 1) {
        this.cityAndStateArrayFromLocalStorage = [];
        localStorage.setItem("stateAndCityArray", JSON.stringify(res));
        this.dataArray.country = CountryID;
        this.cityAndStateArrayFromLocalStorage = res.ddl_list.state_list;
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))

    })
  }

  updateContactDetail(formDeatails) {

    if (this.updateContactDetailsForm.invalid) {
      this.showErrorIcon = true
      return
    }
    else {
      this.presentLoading()
      this.showErrorIcon = false
      this.dataServices.updateContactInfoAPI(formDeatails, this.uacc_id).then((res: any) => {
        this.loadingController.dismiss();
        if (res.status == 1) {
          this.presentAlert(res.message, '');
        }
        else {
          this.presentAlert(res.message, '');
        }
      }, (error) => {
        this.loadingController.dismiss();
        console.log(error);
      });

    }
  }

  closePage() {
    // this.router.navigate(['/profile'])
    this.navCtrl.navigateRoot('/profile');
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


  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
  }//Display Function Ends Here 

  ionViewWillLeave() {
    this.loadingController.dismiss();
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
