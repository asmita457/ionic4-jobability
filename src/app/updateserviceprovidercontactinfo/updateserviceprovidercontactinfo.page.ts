import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
    selector: 'app-updateserviceprovidercontactinfo',
    templateUrl: './updateserviceprovidercontactinfo.page.html',
    styleUrls: ['./updateserviceprovidercontactinfo.page.scss'],
})
export class UpdateserviceprovidercontactinfoPage implements OnInit {
    updateContactDetailsForm: FormGroup;
    showErrorIcon: boolean = false
    dataArray: any
    stateAndCityArray: any
    countryArray: any
    countryArrayFromLocalStorage: any
    cityAndStateArrayFromLocalStorage: any
    cityNameArray = []

    constructor(private router: Router,
        private dataServices: DataservicesService,
        private alertCtrl: AlertController,
        private activatedRoute: ActivatedRoute,
        public loadingController: LoadingController,
        public formBuilder: FormBuilder,

    ) {

        this.stateAndCityArray = localStorage.getItem("stateAndCityArray");
        this.countryArray = localStorage.getItem("countryArray");
        this.dataArray = JSON.parse((this.activatedRoute.snapshot.paramMap.get('serviceProviderInfo')));

        if ((this.countryArray != '' || this.countryArray != null || this.countryArray != undefined) &&
            (this.stateAndCityArray != '' || this.stateAndCityArray != null || this.stateAndCityArray != undefined)) {
            this.setDefaultCity(this.countryArray, this.stateAndCityArray);
        }
        else {
            this.countryArrayFromLocalStorage = JSON.parse(this.countryArray).country_list;
        }
    }

    ngOnInit() {
        this.buildForm()
    }

    buildForm() {
        this.updateContactDetailsForm = this.formBuilder.group({
            name: ['', Validators.required],
            designation: ['', Validators.required],
            email: ['', Validators.required],
            businessEmail: [''],
            phone: ['', Validators.compose([Validators.maxLength(15)])],
            mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
            address: ['', Validators.required],
            country: ['', Validators.required],
            state: ['', Validators.required],
            city: ['', Validators.required],
            zipCode: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
        });
    }

    getDDLAPI(country) {
        this.dataServices.getDDLAPI(country).then((res: any) => {
            if (res.status == 1) {
                this.cityAndStateArrayFromLocalStorage = [];
                localStorage.setItem("stateAndCityArray", JSON.stringify(res));
                this.cityAndStateArrayFromLocalStorage = res.ddl_list.state_list;
            }
        }, error => {
            console.log('Error in login: ' + JSON.stringify(error))
        })
    }


    // Function for showing selected value city.
    setDefaultCity(countryArray, stateAndCityArray) {
        this.countryArrayFromLocalStorage = JSON.parse(countryArray).country_list;
        if (this.dataArray.state != 0) {
            this.cityAndStateArrayFromLocalStorage = JSON.parse(stateAndCityArray).ddl_list.state_list;
            for (let i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
                if (this.cityAndStateArrayFromLocalStorage[i].id == this.dataArray.state) {
                    this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city
                }
            }
        }
    } //setDefaultCity Ends Here;

    // Function To show Alert
    async presentAlert(title, message) {
        const alert = await this.alertCtrl.create({
            header: title,
            message: message,
            // buttons: ['OK']
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        this.closePage()
                    }
                }
            ]
        });
        await alert.present();
    } // presentAlert Function Ends Here

    closePage() {
        this.router.navigate(['/serviceproviderprofile']);
    }

    selectedCountryValue(countryId) {
        this.dataArray.state = ''
        this.dataArray.city = ''
        this.getDDLAPI(countryId);
    }

    selectedStatesValue(stateId) {
        this.dataArray.city = ''
        for (let i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
            if (this.cityAndStateArrayFromLocalStorage[i].id == stateId) {
                this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city
            }
        }
    }

    updateServiceProviderContactDetail(contactDetailsform) {
        if (this.updateContactDetailsForm.invalid) {
            this.showErrorIcon = true
            return
        } else {
            this.presentLoading()
            this.dataServices.updateServiceproviderContactInfoAPI(contactDetailsform).then((res: any) => {
                if (res.status == 1) {
                    this.loadingController.dismiss()
                    this.presentAlert(res.message, '');
                }
                else {
                    this.loadingController.dismiss()
                    this.presentAlert(res.message, '');
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
    }//Display Function Ends Here  
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}