import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
var UpdateserviceproviderservicelocationPage = /** @class */ (function () {
    function UpdateserviceproviderservicelocationPage(location, dataServices, loadingController, alertCtrl, activatedRoute, formBuilder) {
        this.location = location;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.stateAndCityIds = [];
        this.editServiceLocationDetails = [];
    }
    UpdateserviceproviderservicelocationPage.prototype.ngOnInit = function () {
        this.buildForm();
        this.onPageLoad();
    };
    UpdateserviceproviderservicelocationPage.prototype.buildForm = function () {
        this.updateServiceLocationForm = this.formBuilder.group({
            country: ['', Validators.required],
            stateCity: ['', Validators.required],
        });
    };
    UpdateserviceproviderservicelocationPage.prototype.onPageLoad = function () {
        this.editServiceLocationDetails = JSON.parse((this.activatedRoute.snapshot.paramMap.get('item')));
        this.getCountry();
        this.getStateCityListInformation(this.editServiceLocationDetails.Country);
        for (var i = 0; i < this.editServiceLocationDetails.Preferred_StateCity.length; i++) {
            this.stateAndCityIds.push(this.editServiceLocationDetails.Preferred_StateCity[i].id);
        }
    };
    // Forms declaration
    UpdateserviceproviderservicelocationPage.prototype.selectedStateAndCityValue = function (item) {
        if (item.length > 3) {
            item = [];
            this.stateAndCityIds = [];
            this.presentAlert('You should not select Preferred State/City more than 3', '', 'success');
        }
    };
    UpdateserviceproviderservicelocationPage.prototype.selectedCountryValue = function (countryId) {
        this.editServiceLocationDetails.Country = '';
        this.stateAndCityIds = [];
        this.stateAndCityArray = [];
        this.getCountry();
        this.getStateCityListInformation(countryId);
    };
    UpdateserviceproviderservicelocationPage.prototype.getCountry = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getCountryArrayAPI().then(function (result) {
            if (result.status == 1) {
                _this.countryArray = result.country_list;
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    UpdateserviceproviderservicelocationPage.prototype.getStateCityListInformation = function (countryId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.getStateCountryList(countryId).then(function (result) {
            if (result.status == 1) {
                _this.stateAndCityArray = result.state_city_list;
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in updateServiceProviderServiceLocation: ' + JSON.stringify(error));
        });
    };
    UpdateserviceproviderservicelocationPage.prototype.closePage = function () {
        this.location.back();
    };
    UpdateserviceproviderservicelocationPage.prototype.updateServiceLocation = function (formDetails) {
        var _this = this;
        if (this.updateServiceLocationForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.showErrorIcon = false;
            var post = {
                "id": this.editServiceLocationDetails.Service_id,
                "country_id": formDetails.country,
                "state_city_id": formDetails.stateCity
            };
            this.presentLoading();
            this.dataServices.updateServicesLocation(post).then(function (result) {
                if (result.status == 1) {
                    _this.loadingController.dismiss();
                    _this.presentAlert(result.message, '', '');
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert(result.message, '', '');
                }
            }, function (error) {
                _this.loadingController.dismiss();
            });
        }
    };
    UpdateserviceproviderservicelocationPage.prototype.presentLoading = function () {
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
                        setTimeout(function () {
                            loading.dismiss();
                        }, 800);
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateserviceproviderservicelocationPage.prototype.presentAlert = function (title, message, status) {
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
                                        if (status != 'success') {
                                            _this.closePage();
                                        }
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
    };
    UpdateserviceproviderservicelocationPage = tslib_1.__decorate([
        Component({
            selector: 'app-updateserviceproviderservicelocation',
            templateUrl: './updateserviceproviderservicelocation.page.html',
            styleUrls: ['./updateserviceproviderservicelocation.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            DataservicesService,
            LoadingController,
            AlertController,
            ActivatedRoute,
            FormBuilder])
    ], UpdateserviceproviderservicelocationPage);
    return UpdateserviceproviderservicelocationPage;
}());
export { UpdateserviceproviderservicelocationPage };
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
//# sourceMappingURL=updateserviceproviderservicelocation.page.js.map