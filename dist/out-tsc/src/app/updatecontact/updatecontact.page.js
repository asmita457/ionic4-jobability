import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
var UpdatecontactPage = /** @class */ (function () {
    function UpdatecontactPage(dataServices, alertCtrl, activatedRoute, router, loadingController, formBuilder, navCtrl) {
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.showErrorIcon = false;
        this.disability_list = [];
        this.cityNameArray = [];
        this.readGender = 'Please select gender';
        this.readMaritalStatus = 'Please select marital status';
        this.readDisabilityType = 'Please select disability type';
        this.readCountry = 'Please select country';
        this.readState = 'Please select state';
        this.readCity = 'Please select city';
        this.disabilityNameArray = [];
        // Forms declaration
        this.updateContactDetailsForm = this.formBuilder.group({
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
        this.contactGenderArray = [
            { id: 'm', name: 'Male' },
            { id: 'f', name: 'Female' },
            { id: 't', name: 'Transgender' },
        ];
        this.contactMaritalStatusArray = [
            { id: '1', name: 'Single' },
            { id: '2', name: 'Married' },
            { id: '3', name: 'Divorced' },
            { id: '4', name: 'Widowed' },
            { id: '5', name: 'Separated' },
        ];
        this.onPageLoad();
    }
    UpdatecontactPage.prototype.ionViewWillEnter = function () {
    };
    UpdatecontactPage.prototype.ngOnInit = function () {
    };
    UpdatecontactPage.prototype.onPageLoad = function () {
        var contactInfo = (this.activatedRoute.snapshot.paramMap.get('seekerContactInfo'));
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
        this.getStringDataForAccessability();
    };
    UpdatecontactPage.prototype.getStringDataForAccessability = function () {
        for (var i = 0; i < this.contactGenderArray.length; i++) {
            if (this.contactGenderArray[i].id == this.dataArray.gender) {
                this.readGender = this.contactGenderArray[i].name;
            }
        }
        for (var i = 0; i < this.contactMaritalStatusArray.length; i++) {
            if (this.contactMaritalStatusArray[i].id == this.dataArray.marritalStatus) {
                this.readMaritalStatus = this.contactMaritalStatusArray[i].name;
            }
        }
        this.disabilityNameArray = [];
        for (var i = 0; i < this.dataArray.disability_id.length; i++) {
            for (var j = 0; j < this.disability_list.length; j++) {
                if (this.disability_list[j].id == this.dataArray.disability_id[i]) {
                    this.disabilityNameArray.push(this.disability_list[j].name);
                }
            }
        }
        this.readDisabilityType = this.disabilityNameArray.toString();
    };
    //OnChange Functions for DropDowns
    // Function for showing selected value city.
    UpdatecontactPage.prototype.selectedGender = function (gender) {
        for (var i = 0; i < this.contactGenderArray.length; i++) {
            if (this.contactGenderArray[i].id == gender) {
                this.readGender = this.contactGenderArray[i].name;
            }
        }
    };
    UpdatecontactPage.prototype.selectedMaritalStatus = function (status) {
        for (var i = 0; i < this.contactMaritalStatusArray.length; i++) {
            if (this.contactMaritalStatusArray[i].id == status) {
                this.readMaritalStatus = this.contactMaritalStatusArray[i].name;
            }
        }
    };
    UpdatecontactPage.prototype.selectedDisabilities = function (id) {
        var disabilityArray = id.detail.value;
        this.disabilityNameArray = [];
        if (disabilityArray.length > 0) {
            this.showErrorIcon = false;
            for (var i = 0; i < disabilityArray.length; i++) {
                for (var j = 0; j < this.disability_list.length; j++) {
                    if (this.disability_list[j].id == disabilityArray[i]) {
                        this.disabilityNameArray.push(this.disability_list[j].name);
                    }
                }
            }
        }
        this.readDisabilityType = this.disabilityNameArray.toString();
    };
    UpdatecontactPage.prototype.setDefaultCity = function (countryArray, stateAndCityArray) {
        this.disability_list = JSON.parse(stateAndCityArray).ddl_list.disability_list;
        this.countryArrayFromLocalStorage = JSON.parse(countryArray).country_list;
        for (var i = 0; i < this.countryArrayFromLocalStorage.length; i++) {
            if (this.countryArrayFromLocalStorage[i].id == this.dataArray.country) {
                this.readCountry = this.countryArrayFromLocalStorage[i].name;
            }
        }
        if (this.dataArray.state != 0) {
            this.cityAndStateArrayFromLocalStorage = JSON.parse(stateAndCityArray).ddl_list.state_list;
            for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
                if (this.cityAndStateArrayFromLocalStorage[i].id == this.dataArray.state) {
                    this.readState = this.cityAndStateArrayFromLocalStorage[i].name;
                    this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
                }
            }
            for (var i = 0; i < this.cityNameArray.length; i++) {
                if (this.cityNameArray[i].id == this.dataArray.city) {
                    this.readCity = this.cityNameArray[i].name;
                }
            }
        }
    }; //setDefaultCity Ends Here;
    UpdatecontactPage.prototype.selectedCountryValue = function (countryId) {
        this.dataArray.state = '';
        this.dataArray.city = '';
        this.readState = 'Please select state';
        this.readCity = 'Please select city';
        this.getDDLAPI(countryId);
        for (var i = 0; i < this.countryArrayFromLocalStorage.length; i++) {
            if (this.countryArrayFromLocalStorage[i].id == this.dataArray.country) {
                this.readCountry = this.countryArrayFromLocalStorage[i].name;
            }
        }
    };
    UpdatecontactPage.prototype.selectedStatesValue = function (stateId) {
        this.dataArray.city = '';
        this.readCity = 'Please select city';
        for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
            if (this.cityAndStateArrayFromLocalStorage[i].id == stateId) {
                this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
                this.readState = this.cityAndStateArrayFromLocalStorage[i].name;
            }
        }
    };
    UpdatecontactPage.prototype.selectedCityValue = function (city) {
        for (var i = 0; i < this.cityNameArray.length; i++) {
            if (this.cityNameArray[i].id == city) {
                this.readCity = this.cityNameArray[i].name;
            }
        }
    };
    //OnChange Functions For DropDowns Ends Here.
    UpdatecontactPage.prototype.getDDLAPI = function (CountryID) {
        var _this = this;
        this.dataServices.getDDLAPI(CountryID).then(function (res) {
            if (res.status == 1) {
                _this.cityAndStateArrayFromLocalStorage = [];
                localStorage.setItem("stateAndCityArray", JSON.stringify(res));
                _this.dataArray.country = CountryID;
                _this.cityAndStateArrayFromLocalStorage = res.ddl_list.state_list;
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    UpdatecontactPage.prototype.updateContactDetail = function (formDeatails) {
        var _this = this;
        if (this.updateContactDetailsForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.showErrorIcon = false;
            this.dataServices.updateContactInfoAPI(formDeatails, this.uacc_id).then(function (res) {
                _this.loadingController.dismiss();
                if (res.status == 1) {
                    _this.presentAlert(res.message, '');
                }
                else {
                    _this.presentAlert(res.message, '');
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log(error);
            });
        }
    };
    UpdatecontactPage.prototype.closePage = function () {
        // this.router.navigate(['/profile'])
        this.navCtrl.navigateRoot('/profile');
    };
    UpdatecontactPage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.closePage();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Display loader 
    UpdatecontactPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    UpdatecontactPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    UpdatecontactPage = tslib_1.__decorate([
        Component({
            selector: 'app-updatecontact',
            templateUrl: './updatecontact.page.html',
            styleUrls: ['./updatecontact.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DataservicesService,
            AlertController,
            ActivatedRoute,
            Router,
            LoadingController,
            FormBuilder,
            NavController])
    ], UpdatecontactPage);
    return UpdatecontactPage;
}());
export { UpdatecontactPage };
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
export { MyErrorStateMatcher };
//# sourceMappingURL=updatecontact.page.js.map