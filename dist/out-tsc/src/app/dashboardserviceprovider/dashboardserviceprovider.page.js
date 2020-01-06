import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
var DashboardserviceproviderPage = /** @class */ (function () {
    function DashboardserviceproviderPage(menuCtrl, router, loadingController, dataServices, alertController) {
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertController = alertController;
        this.offset = 0;
        this.servicesArray = [];
    }
    DashboardserviceproviderPage.prototype.ngOnInit = function () {
    };
    DashboardserviceproviderPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.getNotificationBadgeCount();
        this.offset = 0;
        this.servicesArray = [];
        this.getSPDetails(this.offset);
    };
    //get Employer Dashboard Details
    DashboardserviceproviderPage.prototype.getSPDetails = function (offset) {
        var _this = this;
        this.presentLoading();
        this.dataServices.getSPDashBoardDetails(offset).then(function (result) {
            if (result.status == 1) {
                _this.totalApplication = result.my_services_total_count;
                _this.servicesArray = _this.servicesArray.concat(result.my_services_list);
                if (_this.totalApplication < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // getEmployerDashBoardDetails Function Ends Here.
    DashboardserviceproviderPage.prototype.getNotificationBadgeCount = function () {
        var _this = this;
        this.dataServices.getNotificationBadgeCount().then(function (result) {
            if (result.status == 1) {
                _this.badgecount = result.total_notification_count;
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    DashboardserviceproviderPage.prototype.navToPostService = function () {
        this.getServiceProviderInformation();
    };
    DashboardserviceproviderPage.prototype.servicesDetail = function (serviceId) {
        this.router.navigate(['/servicesdetailinfo', { item: serviceId }]);
    };
    DashboardserviceproviderPage.prototype.getServiceProviderInformation = function () {
        var _this = this;
        this.uacc_id = localStorage.getItem("users_id");
        this.presentLoading();
        this.dataServices.getServiceProviderData().then(function (result) {
            if (result.status == 1) {
                _this.verify_email = result.service_provider_details[0].verify_email;
                if (_this.verify_email == 0) {
                    _this.loadingController.dismiss();
                    _this.presentAlertCtrl('', 'Email address is not verified.');
                }
                else {
                    _this.loadingController.dismiss();
                    _this.router.navigate(['/postservice']);
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlertCtrl('', result.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    DashboardserviceproviderPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.totalApplication) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getSPDetails(_this.offset);
            }
        }, 500);
    };
    DashboardserviceproviderPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    //Display loader 
    DashboardserviceproviderPage.prototype.presentLoading = function () {
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
    DashboardserviceproviderPage.prototype.presentAlertCtrl = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
    DashboardserviceproviderPage = tslib_1.__decorate([
        Component({
            selector: 'app-dashboardserviceprovider',
            templateUrl: './dashboardserviceprovider.page.html',
            styleUrls: ['./dashboardserviceprovider.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController,
            Router,
            LoadingController,
            DataservicesService,
            AlertController])
    ], DashboardserviceproviderPage);
    return DashboardserviceproviderPage;
}());
export { DashboardserviceproviderPage };
//# sourceMappingURL=dashboardserviceprovider.page.js.map