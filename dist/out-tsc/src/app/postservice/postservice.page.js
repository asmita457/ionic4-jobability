import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Location } from '@angular/common';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Validators, FormBuilder } from '@angular/forms';
var PostservicePage = /** @class */ (function () {
    function PostservicePage(router, menuCtrl, fileChooser, transfer, dataServices, loadingController, alertCtrl, location, filePath, formBuilder) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.location = location;
        this.filePath = filePath;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.Serviceofferedlist = [];
        this.disabilitylist = [];
        this.countryList = [];
        this.stateCityList = [];
        this.selectedCount = 0;
        this.maxCount = 3;
    }
    PostservicePage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    PostservicePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
        this.getServiceProviderDropDownList();
        this.getCountryListInformation();
    };
    PostservicePage.prototype.buildForm = function () {
        this.postServiceDetailsForm = this.formBuilder.group({
            serviceTitle: ['', Validators.required],
            serviceoffered: ['', Validators.required],
            disability: ['', Validators.required],
            brief: ['', Validators.required],
            description: ['', Validators.required],
            country: ['', Validators.required],
            preferredStateCity: ['', Validators.required],
            status: [''],
            showDetailsToApplicants: ['']
        });
    };
    PostservicePage.prototype.updateSelectedCount = function (count) {
        this.selectedCount = count;
        // if (count === this.maxCount) {
        //   this.showAlert('You should not select Preferred State/City more than 3','')
        // }
    };
    PostservicePage.prototype.getServiceProviderDropDownList = function () {
        var _this = this;
        this.dataServices.getDDLAPI(0).then(function (result) {
            if (result.status == 1) {
                _this.Serviceofferedlist = result.ddl_list.service_offered_list;
                _this.disabilitylist = result.ddl_list.disability_list;
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    PostservicePage.prototype.getCountryListInformation = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getCountryArrayAPI().then(function (result) {
            if (result.status == 1) {
                _this.countryList = result.country_list;
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in postservice: ' + JSON.stringify(error));
        });
    };
    PostservicePage.prototype.selectedCountryValue = function (countryId) {
        this.getStateCityListInformation(countryId);
    };
    PostservicePage.prototype.getStateCityListInformation = function (country_id) {
        var _this = this;
        this.presentLoading();
        this.dataServices.getStateCountryList(country_id).then(function (result) {
            if (result.status == 1) {
                _this.stateCityList = result.state_city_list;
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
    PostservicePage.prototype.postServiceDetails = function (formDeatails) {
        var _this = this;
        if (this.postServiceDetailsForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.showErrorIcon = false;
            formDeatails.showDetailsToApplicants = formDeatails.showDetailsToApplicants == false ? '0' : '1';
            var postData = {
                "service_name": formDeatails.serviceTitle,
                "service_description": formDeatails.description,
                "brife": formDeatails.brief,
                "status": formDeatails.status,
                "show_contact": formDeatails.showDetailsToApplicants,
                "upload_file": [],
                "country_id": formDeatails.country,
                "state_city_id": formDeatails.preferredStateCity.toString(),
                "servicetype_id": formDeatails.serviceoffered.toString(),
                "disability_id": formDeatails.disability.toString(),
                "verify_email": "1",
                "uacc_id": localStorage.getItem('users_id')
            };
            this.dataServices.postServices(postData).then(function (result) {
                if (result.status == 1) {
                    _this.loadingController.dismiss();
                    _this.presentAlert(result.message, '');
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert(result.message, '');
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log('Error in login: ' + JSON.stringify(error));
            });
        }
    };
    PostservicePage.prototype.closePage = function () {
        this.location.back();
    };
    PostservicePage.prototype.postServicesAPI = function (postData) {
        var _this = this;
        this.presentLoading();
        this.dataServices.postServices(postData).then(function (result) {
            console.log(result);
            if (result.status == 1) {
                console.log('Country List', result);
                _this.loadingController.dismiss();
                _this.presentAlert(result.message, '');
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert(result.message, '');
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    PostservicePage.prototype.presentLoading = function () {
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
    };
    PostservicePage.prototype.presentAlert = function (title, message) {
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
                                        if (title != 'File Type')
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
    };
    PostservicePage.prototype.showAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
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
    PostservicePage = tslib_1.__decorate([
        Component({
            selector: 'app-postservice',
            templateUrl: './postservice.page.html',
            styleUrls: ['./postservice.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            MenuController,
            FileChooser,
            FileTransfer,
            DataservicesService,
            LoadingController,
            AlertController,
            Location,
            FilePath,
            FormBuilder])
    ], PostservicePage);
    return PostservicePage;
}());
export { PostservicePage };
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
//# sourceMappingURL=postservice.page.js.map