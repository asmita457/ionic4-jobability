import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Events, LoadingController, AlertController } from '@ionic/angular';
var EmployerprofilePage = /** @class */ (function () {
    function EmployerprofilePage(router, events, dataServices, loadingController, alertCtrl) {
        this.router = router;
        this.events = events;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.companyTypeArray = [];
        this.industryTypeArray = [];
        this.companyIdArray = [];
        this.industryIdArray = [];
        this.results = [];
        this.uacc_id = localStorage.getItem('users_id');
    }
    EmployerprofilePage.prototype.ngOnInit = function () {
    };
    EmployerprofilePage.prototype.ionViewWillEnter = function () {
        this.getEmployerInformation();
        this.getCountryArray();
        this.getNotificationBadgeCount();
    };
    EmployerprofilePage.prototype.getNotificationBadgeCount = function () {
        var _this = this;
        // this.presentLoading();
        this.dataServices.getNotificationBadgeCount().then(function (result) {
            console.log(result);
            _this.badgeResultData = result;
            if (_this.badgeResultData.status == 1) {
                // this.loadingController.dismiss();
                _this.badgecount = _this.badgeResultData.total_notification_count;
            }
            else {
                // this.loadingController.dismiss();
            }
        }, function (error) {
            //   this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployerprofilePage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    EmployerprofilePage.prototype.getCountryArray = function () {
        var _this = this;
        this.countryData = [];
        this.dataServices.getCountryArrayAPI().then(function (result) {
            _this.countryData = result;
            if (_this.countryData.status == 1) {
                localStorage.setItem("countryArray", JSON.stringify(_this.countryData));
            }
            else {
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Display loader 
    EmployerprofilePage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        setTimeout(function () {
                            loading.dismiss();
                        }, 6000);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    EmployerprofilePage.prototype.updateEmployerInfo = function () {
        var info = {
            empInfo: this.results[0],
        };
        this.router.navigate(['/updateemployeeemployerinfo', { item: JSON.stringify(info) }]);
    };
    EmployerprofilePage.prototype.updateContactInfo = function () {
        this.router.navigate(['/updateemployeecontactinfo', { item: JSON.stringify(this.results[0]) }]);
    };
    EmployerprofilePage.prototype.getEmployerDDL = function (country) {
        var _this = this;
        console.log("country id: " + country);
        this.dataServices.getDDLAPI(country).then(function (result) {
            console.log(result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                localStorage.setItem("ddl_list", JSON.stringify(_this.resultData));
            }
            else {
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function For Email Verification
    EmployerprofilePage.prototype.emailVerification = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.emailVerification().then(function (result) {
            _this.emailVerificatonResponse = result;
            if (_this.emailVerificatonResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.emailVerificatonResponse.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.emailVerificatonResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // Function emailVerification Ends Here.
    EmployerprofilePage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: ['OK']
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
    EmployerprofilePage.prototype.getEmployerInformation = function () {
        var _this = this;
        // this.uacc_id = localStorage.getItem("users_id");
        this.presentLoading();
        this.dataServices.getEmployerData(this.uacc_id).then(function (result) {
            console.log('employer details :: ' + result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.employerInformation = _this.resultData.employer_details;
                _this.first_name = _this.resultData.employer_details[0].first_name;
                _this.country = _this.resultData.employer_details[0].country;
                _this.verify_email = _this.resultData.employer_details[0].verify_email;
                _this.splitMobile = _this.resultData.employer_details[0].mobile.split('').join(' ').replace(/0/g, 'zero');
                console.log("show Verify email: " + _this.verify_email);
                localStorage.setItem('userName', _this.first_name);
                if (_this.verify_email == 0) {
                    _this.showVerifyButton = true;
                }
                else {
                    _this.showVerifyButton = false;
                }
                _this.getEmployerDDL(_this.country);
                _this.events.publish('Event-UserName');
                _this.results = [];
                _this.results.push({
                    compnayName: _this.resultData.employer_details[0].company_name,
                    company_type_name: _this.resultData.employer_details[0].company_type_name,
                    companytype_id: _this.resultData.employer_details[0].companytype_id,
                    year_establishment: _this.resultData.employer_details[0].year_establishment,
                    industry: _this.resultData.employer_details[0].industry,
                    company_description: _this.resultData.employer_details[0].company_description,
                    industry_name: _this.resultData.employer_details[0].industry_name,
                    industry_id: _this.resultData.employer_details[0].industry_id,
                    website_url: _this.resultData.employer_details[0].website_url,
                    first_name: _this.resultData.employer_details[0].first_name,
                    designation: _this.resultData.employer_details[0].designation,
                    email: _this.resultData.employer_details[0].email,
                    phone: _this.resultData.employer_details[0].phone,
                    mobile: _this.resultData.employer_details[0].mobile,
                    address: _this.resultData.employer_details[0].address,
                    zip_code: _this.resultData.employer_details[0].zip_code,
                    companyTypeIndex: _this.companyTypeIndex,
                    country: _this.resultData.employer_details[0].country,
                    state: _this.resultData.employer_details[0].state,
                    city: _this.resultData.employer_details[0].city,
                    business_email: _this.resultData.employer_details[0].business_email
                });
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                alert(_this.resultData.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployerprofilePage = tslib_1.__decorate([
        Component({
            selector: 'app-employerprofile',
            templateUrl: './employerprofile.page.html',
            styleUrls: ['./employerprofile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Events,
            DataservicesService,
            LoadingController,
            AlertController])
    ], EmployerprofilePage);
    return EmployerprofilePage;
}());
export { EmployerprofilePage };
//# sourceMappingURL=employerprofile.page.js.map