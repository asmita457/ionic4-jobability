import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoadingController, AlertController, Events, MenuController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router } from '@angular/router';
var ServiceproviderprofilePage = /** @class */ (function () {
    function ServiceproviderprofilePage(loadingController, dataServices, router, alertCtrl, events, menuCtrl) {
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.serviceProviderDetials = {
            first_name: "",
            email: "",
            mobile: "",
            address: "",
            organizationtype: "",
            year_establishment: "",
            disability_id: "",
            website_url: "",
            country: "",
            verify_email: "",
            business_email: "",
            phone: "",
            designation: "",
            organisation_name: "",
            zip_code: "",
            state: "",
            city: "",
            message: ''
        };
        this.serviceProviderCategory = [];
        this.serviceProviderInfo = [];
        this.serviceProviderOrgInfo = [];
        this.disabilityIds = [];
        this.servicetype_id = [];
    }
    ServiceproviderprofilePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.getServiceProviderInformation();
        this.getCountryArray();
        this.getNotificationBadgeCount();
    };
    ServiceproviderprofilePage.prototype.ngOnInit = function () {
    };
    ServiceproviderprofilePage.prototype.getServiceProviderInformation = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getServiceProviderData().then(function (result) {
            if (result.status == 1) {
                _this.serviceProviderDetials = result.service_provider_details[0];
                _this.disabilitys = result.service_provider_disability_details;
                _this.serviceType = result.service_provider_servicetype_details;
                _this.splitMobile = _this.serviceProviderDetials.mobile.split('').join(' ').replace(/0/g, 'zero');
                if (_this.serviceProviderDetials.organizationtype == '1') {
                    _this.organizationtype = 'Organization';
                }
                else if (_this.serviceProviderDetials.organizationtype == '2') {
                    _this.organizationtype = 'Service Professional';
                }
                else {
                    _this.organizationtype = '';
                }
                localStorage.setItem('userName', _this.serviceProviderDetials.first_name);
                _this.events.publish('Event-UserName');
                _this.serviceProviderInfo = [];
                _this.serviceProviderInfo.push({
                    first_name: _this.serviceProviderDetials.first_name,
                    designation: _this.serviceProviderDetials.designation,
                    email: _this.serviceProviderDetials.email,
                    business_email: _this.serviceProviderDetials.business_email,
                    mobile: _this.serviceProviderDetials.mobile,
                    phone: _this.serviceProviderDetials.phone,
                    address: _this.serviceProviderDetials.address,
                    country: _this.serviceProviderDetials.country == '0' ? '' : _this.serviceProviderDetials.country,
                    state: _this.serviceProviderDetials.state == '0' ? '' : _this.serviceProviderDetials.state,
                    city: _this.serviceProviderDetials.city == '0' ? '' : _this.serviceProviderDetials.city,
                    zip_code: _this.serviceProviderDetials.zip_code,
                });
                _this.disabilityIds = [];
                for (var m = 0; m < _this.disabilitys.length; m++) {
                    _this.disabilityIds.push(_this.disabilitys[m].id);
                }
                _this.servicetype_id = [];
                for (var m = 0; m < _this.serviceType.length; m++) {
                    _this.servicetype_id.push(_this.serviceType[m].id);
                }
                _this.serviceProviderCategory = [];
                if (_this.serviceProviderDetials.organizationtype == '1') {
                    for (var m = 0; m < result.service_provider_organization_details.length; m++) {
                        _this.serviceProviderCategory.push(result.service_provider_organization_details[m].id);
                    }
                }
                _this.serviceProviderOrgInfo = [];
                _this.serviceProviderOrgInfo.push({
                    organisation_name: _this.serviceProviderDetials.organisation_name,
                    organizationtype: _this.serviceProviderDetials.organizationtype,
                    disabilityIds: _this.disabilityIds,
                    servicetype_id: _this.servicetype_id,
                    serviceProviderCategory: _this.serviceProviderCategory,
                    year_establishment: _this.serviceProviderDetials.year_establishment == '0' ? '' : _this.serviceProviderDetials.year_establishment,
                    website_url: _this.serviceProviderDetials.website_url,
                });
                _this.getServiceProviderDDL(_this.serviceProviderDetials.country);
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.serviceProviderDetials.message);
            }
        }, function (error) {
            console.log('Error in service provider profile: ' + JSON.stringify(error));
        });
    };
    ServiceproviderprofilePage.prototype.getCountryArray = function () {
        this.dataServices.getCountryArrayAPI().then(function (result) {
            if (result.status == 1) {
                localStorage.setItem("countryArray", JSON.stringify(result));
            }
        }, function (error) {
            console.log('Error in service provider profile: ' + JSON.stringify(error));
        });
    };
    ServiceproviderprofilePage.prototype.getNotificationBadgeCount = function () {
        var _this = this;
        this.dataServices.getNotificationBadgeCount().then(function (result) {
            if (result.status == 1) {
                _this.badgecount = result.total_notification_count;
            }
        }, function (error) {
            console.log('Error in service provider profile: ' + JSON.stringify(error));
        });
    };
    ServiceproviderprofilePage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    ServiceproviderprofilePage.prototype.getServiceProviderDDL = function (countryId) {
        var _this = this;
        this.dataServices.getDDLAPI(countryId).then(function (result) {
            if (result.status == 1) {
                localStorage.setItem("stateAndCityArray", JSON.stringify(result));
                _this.loadingController.dismiss();
            }
        }, function (error) {
            console.log('Error in service provider profile: ' + JSON.stringify(error));
        });
    };
    ServiceproviderprofilePage.prototype.updateServiceproviderContactInfo = function () {
        this.router.navigate(['/updateserviceprovidercontactinfo', { serviceProviderInfo: JSON.stringify(this.serviceProviderInfo[0]) }]);
    };
    ServiceproviderprofilePage.prototype.updateServiceProviderOrganisationInfo = function () {
        this.router.navigate(['/updateserviceproviderorganisationinfo', { serviceProviderOrgInfo: JSON.stringify(this.serviceProviderOrgInfo[0]) }]);
    };
    //Display loader 
    ServiceproviderprofilePage.prototype.presentLoading = function () {
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
    // Function For Email Verification
    ServiceproviderprofilePage.prototype.emailVerification = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.emailVerification().then(function (result) {
            if (result.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert('Email', result.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('Email', result.message);
            }
        }, function (error) {
            console.log('Error in service provider profile: ' + JSON.stringify(error));
        });
    }; // Function emailVerification Ends Here.
    ServiceproviderprofilePage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
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
    ServiceproviderprofilePage = tslib_1.__decorate([
        Component({
            selector: 'app-serviceproviderprofile',
            templateUrl: './serviceproviderprofile.page.html',
            styleUrls: ['./serviceproviderprofile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController,
            DataservicesService,
            Router,
            AlertController,
            Events,
            MenuController])
    ], ServiceproviderprofilePage);
    return ServiceproviderprofilePage;
}());
export { ServiceproviderprofilePage };
//# sourceMappingURL=serviceproviderprofile.page.js.map