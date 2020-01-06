import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, MenuController, Events, LoadingController } from '@ionic/angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
    selector: 'app-updateserviceproviderorganisationinfo',
    templateUrl: './updateserviceproviderorganisationinfo.page.html',
    styleUrls: ['./updateserviceproviderorganisationinfo.page.scss'],
})
export class UpdateserviceproviderorganisationinfoPage implements OnInit {

    updateOrgInfoForm: FormGroup;
    showErrorIcon: boolean = false

    disabilityArray = []
    organizationTypeList = []
    serviceOfferedList = []
    organisationTypeList = []
    preSelectionData: any
    show = false;
    yearArray: any = []
    serviceProviderArray = [{ name: 'Organization', id: '1' }, { name: 'Service Professional', id: '2' },]

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        public alertCtrl: AlertController,
        private dataServices: DataservicesService,
        public menuCtrl: MenuController,
        public loadingController: LoadingController,
        public formBuilder: FormBuilder,
    ) {
        this.onPageLoad()
    }

    ngOnInit() {
        this.buildForm()
        this.setOrganizationValdators()
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false)
    }

    buildForm() {
        this.updateOrgInfoForm = this.formBuilder.group({
            serviceProviderType: ['', Validators.required],
            serviceProviderCategory: ['', Validators.required],
            organisatioName: ['', Validators.required],
            disability: ['', Validators.required],
            serviceOffered: ['', Validators.required],
            yearOfEstablishment: ['', Validators.required],
            websiteURL: ['', Validators.required]
        });
    }

    onPageLoad() {
        const dropData = localStorage.getItem('stateAndCityArray')
        const dropDownLists = JSON.parse(dropData).ddl_list
        this.disabilityArray = dropDownLists.disability_list
        this.organizationTypeList = dropDownLists.organization_type_list
        this.serviceOfferedList = dropDownLists.service_offered_list
        this.organisationTypeList = dropDownLists.organization_type_list

        this.preSelectionData = JSON.parse((this.activatedRoute.snapshot.paramMap.get('serviceProviderOrgInfo')));
        this.show = this.preSelectionData.organizationtype == '1' ? true : false

        // if (this.organizationtype == "1") {
        //     this.show = true;
        // } else if (this.organizationtype == "2") {
        //     this.show = false;
        // }

        let currentYear = new Date().getFullYear()
        for (let i = currentYear; i >= 1965; i--) {
            this.yearArray.push(i.toString());
        }
    }

    setOrganizationValdators() {
        const serviceProviderCategory = this.updateOrgInfoForm.get('serviceProviderCategory');
        const organisatioName = this.updateOrgInfoForm.get('organisatioName');

        this.updateOrgInfoForm.get('serviceProviderType').valueChanges
            .subscribe(serviceProviderType => {

                if (serviceProviderType == '1') {
                    serviceProviderCategory.setValidators([Validators.required])
                    organisatioName.setValidators([Validators.required])
                } else {
                    serviceProviderCategory.setValidators(null)
                    organisatioName.setValidators(null)
                }

                serviceProviderCategory.updateValueAndValidity();
                organisatioName.updateValueAndValidity();
            });
    }

    selectedServiceProviderValue(serviceType: any) {
        this.show = serviceType == '1' ? true : false
    }

    closePage() {
        this.router.navigate(['/serviceproviderprofile']);
    }

    updateOrgInfoDetails(orgInfoForm) {
        if (this.updateOrgInfoForm.invalid) {
            this.showErrorIcon = true
            return
        } else {
            this.presentLoading()
            var postData = {
                "organizationtype": orgInfoForm.serviceProviderType,
                "organization_type_id": orgInfoForm.serviceProviderType == '2' ? '' : orgInfoForm.serviceProviderCategory,
                "year_establishment": orgInfoForm.yearOfEstablishment,
                "website_url": orgInfoForm.websiteURL,
                "organisation_name": orgInfoForm.serviceProviderType == '2' ? '' : orgInfoForm.organisatioName,
                "disability_id": orgInfoForm.disability,
                "servicetype_id": orgInfoForm.serviceOffered,
                "uacc_id": localStorage.getItem('users_id')
            }

            this.dataServices.updateServiceproviderOrganisationInfoAPI(postData).then((res: any) => {
                if (res.status == 1) {
                    this.loadingController.dismiss()
                    this.presentAlert('', res.message);
                }
                else {
                    this.loadingController.dismiss()
                    this.presentAlert('', res.message);
                }
            }, (error) => {
                alert(error);
            });
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