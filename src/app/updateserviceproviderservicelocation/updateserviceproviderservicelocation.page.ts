import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-updateserviceproviderservicelocation',
  templateUrl: './updateserviceproviderservicelocation.page.html',
  styleUrls: ['./updateserviceproviderservicelocation.page.scss'],
})
export class UpdateserviceproviderservicelocationPage implements OnInit {
  updateServiceLocationForm: FormGroup
  countryArray: any
  stateAndCityArray: any
  showErrorIcon: boolean = false
  stateAndCityIds: any = []
  editServiceLocationDetails: any = []

  constructor
    (
      private location: Location,
      public dataServices: DataservicesService,
      public loadingController: LoadingController,
      public alertCtrl: AlertController,
      private activatedRoute: ActivatedRoute,
      public formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.buildForm()
    this.onPageLoad()

  }

  buildForm() {
    this.updateServiceLocationForm = this.formBuilder.group({
      country: ['', Validators.required],
      stateCity: ['', Validators.required],

    });
  }


  onPageLoad() {
    this.editServiceLocationDetails = JSON.parse((this.activatedRoute.snapshot.paramMap.get('item')))
    this.getCountry()
    this.getStateCityListInformation(this.editServiceLocationDetails.Country)

    for (let i = 0; i < this.editServiceLocationDetails.Preferred_StateCity.length; i++) {
      this.stateAndCityIds.push(this.editServiceLocationDetails.Preferred_StateCity[i].id)
    }
  }

  // Forms declaration


  selectedStateAndCityValue(item) {
    if (item.length > 3) {
      item = []
      this.stateAndCityIds = []
      this.presentAlert('You should not select Preferred State/City more than 3', '', 'success')
    }
  }

  selectedCountryValue(countryId) {

    this.editServiceLocationDetails.Country = ''
    this.stateAndCityIds = []
    this.stateAndCityArray = []
    this.getCountry();
    this.getStateCityListInformation(countryId)
  }

  getCountry() {
    this.presentLoading();
    this.dataServices.getCountryArrayAPI().then((result: any) => {
      if (result.status == 1) {
        this.countryArray = result.country_list
        this.loadingController.dismiss()
      } else {
        this.loadingController.dismiss()
      }
    }, error => {
      this.loadingController.dismiss()
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  getStateCityListInformation(countryId) {
    this.presentLoading();
    this.dataServices.getStateCountryList(countryId).then((result: any) => {
      if (result.status == 1) {
        this.stateAndCityArray = result.state_city_list
        this.loadingController.dismiss()
      } else {
        this.loadingController.dismiss()
      }
    }, error => {
      this.loadingController.dismiss()
      console.log('Error in updateServiceProviderServiceLocation: ' + JSON.stringify(error))
    })
  }

  closePage() {
    this.location.back()
  }

  updateServiceLocation(formDetails) {
    if (this.updateServiceLocationForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      this.showErrorIcon = false
      let post = {
        "id": this.editServiceLocationDetails.Service_id,
        "country_id": formDetails.country,
        "state_city_id": formDetails.stateCity
      }
      this.presentLoading();
      this.dataServices.updateServicesLocation(post).then((result: any) => {
        if (result.status == 1) {
          this.loadingController.dismiss()
          this.presentAlert(result.message, '', '')
        } else {
          this.loadingController.dismiss()
          this.presentAlert(result.message, '', '')
        }
      }, error => {
        this.loadingController.dismiss()
      })
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
    }, 800);
  }

  async presentAlert(title, message, status) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      // buttons: ['OK']
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (status != 'success') {
              this.closePage()
            }
          }
        }
      ]
    });
    await alert.present();
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
