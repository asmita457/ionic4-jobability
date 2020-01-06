import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
var ServicesPage = /** @class */ (function () {
    function ServicesPage(router, menuCtrl, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.applicationData = [];
        this.applicationDetails = [];
        this.offset = 0;
        this.servicesArray = [];
        this.postedAge = [];
    }
    ServicesPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.onPageLoad();
        this.servicesArray = [];
        this.getNotificationBadgeCount();
    };
    ServicesPage.prototype.servicesDetail = function (index) {
        console.log('Selected item:', this.servicesArray[index]);
        // this.router.navigate(['/servicesdetailinfo'])
        this.router.navigate(['/servicesdetailinfo', { item: this.servicesArray[index].id }]);
    };
    ServicesPage.prototype.ngOnInit = function () {
    };
    ServicesPage.prototype.onPageLoad = function () {
        this.offset = 0;
        this.servicesArray = [];
        this.getSPDetails(this.offset);
    };
    ServicesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.totalApplication) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getSPDetails(_this.offset);
                event.target.complete();
            }
        }, 500);
    };
    ServicesPage.prototype.navigateToPostServices = function () {
        this.getServiceProviderInformation();
    };
    ServicesPage.prototype.getServiceProviderInformation = function () {
        var _this = this;
        this.uacc_id = localStorage.getItem("users_id");
        console.log('id::' + this.uacc_id);
        this.presentLoading();
        this.dataServices.getServiceProviderData().then(function (result) {
            console.log(result);
            if (result.status == 1) {
                _this.verify_email = result.service_provider_details[0].verify_email;
                if (_this.verify_email == 0) {
                    _this.loadingController.dismiss();
                    _this.presentAlert('', "Email address is not verified.");
                }
                else {
                    _this.loadingController.dismiss();
                    _this.router.navigate(['/postservice']);
                }
            }
            else {
                _this.loadingController.dismiss();
                console.log(result.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //get Employer Dashboard Details
    ServicesPage.prototype.getSPDetails = function (offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getSPDashBoardDetails(offset).then(function (result) {
            _this.getSPResponse = result;
            if (_this.getSPResponse.status == 1) {
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                console.log('Services Response:', JSON.stringify(_this.getSPResponse));
                // this.loadingController.dismiss();
                _this.totalApplication = _this.getSPResponse.my_services_total_count;
                _this.servicesArray = _this.servicesArray.concat(_this.getSPResponse.my_services_list);
                if (_this.totalApplication < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                // this.totalJobPost = this.getSPResponse.dashboard_count_data.total_job_post;
                // this.totalApplication = this.getSPResponse.dashboard_count_data.total_application;
                // this.applicationData = this.applicationData.concat(this.getSPResponse.dashboard_application_data);
                // this.postedAge = this.getSPResponse.
                // localStorage.setItem("applicationData", JSON.stringify(this.applicationData));
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                // this.presentAlert('', this.applicationDetailsResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // getEmployerDashBoardDetails Function Ends Here.
    //Display loader 
    ServicesPage.prototype.presentLoading = function () {
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
                        }, 500);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    ServicesPage.prototype.presentAlert = function (title, message) {
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
    ServicesPage.prototype.getNotificationBadgeCount = function () {
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
            // this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    ServicesPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    ServicesPage = tslib_1.__decorate([
        Component({
            selector: 'app-services',
            templateUrl: './services.page.html',
            styleUrls: ['./services.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            MenuController,
            LoadingController,
            DataservicesService,
            AlertController])
    ], ServicesPage);
    return ServicesPage;
}());
export { ServicesPage };
//# sourceMappingURL=services.page.js.map