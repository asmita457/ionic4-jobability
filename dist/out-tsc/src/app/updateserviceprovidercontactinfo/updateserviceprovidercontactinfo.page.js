import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
var UpdateserviceprovidercontactinfoPage = /** @class */ (function () {
    function UpdateserviceprovidercontactinfoPage(router, dataServices, alertCtrl, activatedRoute, loadingController, formBuilder) {
        this.router = router;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.cityNameArray = [];
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
    UpdateserviceprovidercontactinfoPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UpdateserviceprovidercontactinfoPage.prototype.buildForm = function () {
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
    };
    UpdateserviceprovidercontactinfoPage.prototype.getDDLAPI = function (country) {
        var _this = this;
        this.dataServices.getDDLAPI(country).then(function (res) {
            if (res.status == 1) {
                _this.cityAndStateArrayFromLocalStorage = [];
                localStorage.setItem("stateAndCityArray", JSON.stringify(res));
                _this.cityAndStateArrayFromLocalStorage = res.ddl_list.state_list;
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function for showing selected value city.
    UpdateserviceprovidercontactinfoPage.prototype.setDefaultCity = function (countryArray, stateAndCityArray) {
        this.countryArrayFromLocalStorage = JSON.parse(countryArray).country_list;
        if (this.dataArray.state != 0) {
            this.cityAndStateArrayFromLocalStorage = JSON.parse(stateAndCityArray).ddl_list.state_list;
            for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
                if (this.cityAndStateArrayFromLocalStorage[i].id == this.dataArray.state) {
                    this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
                }
            }
        }
    }; //setDefaultCity Ends Here;
    // Function To show Alert
    UpdateserviceprovidercontactinfoPage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            // buttons: ['OK']
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        _this.closePage();
                                    }
                                }
                            ]
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
    }; // presentAlert Function Ends Here
    UpdateserviceprovidercontactinfoPage.prototype.closePage = function () {
        this.router.navigate(['/serviceproviderprofile']);
    };
    UpdateserviceprovidercontactinfoPage.prototype.selectedCountryValue = function (countryId) {
        this.dataArray.state = '';
        this.dataArray.city = '';
        this.getDDLAPI(countryId);
    };
    UpdateserviceprovidercontactinfoPage.prototype.selectedStatesValue = function (stateId) {
        this.dataArray.city = '';
        for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
            if (this.cityAndStateArrayFromLocalStorage[i].id == stateId) {
                this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
            }
        }
    };
    UpdateserviceprovidercontactinfoPage.prototype.updateServiceProviderContactDetail = function (contactDetailsform) {
        var _this = this;
        if (this.updateContactDetailsForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.dataServices.updateServiceproviderContactInfoAPI(contactDetailsform).then(function (res) {
                if (res.status == 1) {
                    _this.loadingController.dismiss();
                    _this.presentAlert(res.message, '');
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert(res.message, '');
                }
            }, function (error) {
                alert(error);
            });
        }
    };
    //Display loader 
    UpdateserviceprovidercontactinfoPage.prototype.presentLoading = function () {
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
    UpdateserviceprovidercontactinfoPage = tslib_1.__decorate([
        Component({
            selector: 'app-updateserviceprovidercontactinfo',
            templateUrl: './updateserviceprovidercontactinfo.page.html',
            styleUrls: ['./updateserviceprovidercontactinfo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataservicesService,
            AlertController,
            ActivatedRoute,
            LoadingController,
            FormBuilder])
    ], UpdateserviceprovidercontactinfoPage);
    return UpdateserviceprovidercontactinfoPage;
}());
export { UpdateserviceprovidercontactinfoPage };
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
//# sourceMappingURL=updateserviceprovidercontactinfo.page.js.map