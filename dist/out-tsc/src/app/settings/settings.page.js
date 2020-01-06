import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
var SettingsPage = /** @class */ (function () {
    function SettingsPage(router, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        this.getNotificationStatus();
        this.getNotificationBadgeCount();
    };
    SettingsPage.prototype.getNotificationBadgeCount = function () {
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
    SettingsPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    //Display loader 
    SettingsPage.prototype.getNotificationStatus = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getNotificationStatus().then(function (result) {
            _this.loadingController.dismiss();
            if (result.status == 1) {
                _this.isActive = result.notification_status == "1" ? true : false;
            }
            else {
                _this.presentAlert('', result.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    SettingsPage.prototype.onOffNotification = function (event) {
        var _this = this;
        this.presentLoading();
        if (this.isActive != event.detail.checked) {
            this.isActive = event.detail.checked;
            var status_1 = this.isActive == true ? 1 : 0;
            this.dataServices.onOffNotification(status_1).then(function (result) {
                _this.loadingController.dismiss();
                if (result.status == 1) {
                    if (_this.isActive) {
                        _this.presentAlert('', 'Push notifications turn on.');
                    }
                    else {
                        _this.presentAlert('', 'Push notifications turn off.');
                    }
                }
                else {
                    _this.presentAlert('', result.message);
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log('Error in login: ' + JSON.stringify(error));
            });
        }
    };
    SettingsPage.prototype.presentLoading = function () {
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
    SettingsPage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // this.closePage();
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
    SettingsPage = tslib_1.__decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.page.html',
            styleUrls: ['./settings.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            LoadingController,
            DataservicesService,
            AlertController])
    ], SettingsPage);
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.page.js.map