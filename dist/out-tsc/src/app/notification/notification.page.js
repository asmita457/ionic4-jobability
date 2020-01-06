import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController, Events } from '@ionic/angular';
import { Router } from '@angular/router';
var NotificationPage = /** @class */ (function () {
    function NotificationPage(location, dataServices, router, alertCtrl, loadingController, events) {
        this.location = location;
        this.dataServices = dataServices;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.events = events;
        this.offset = 0;
        this.notificationDataArray = [];
    }
    NotificationPage.prototype.ngOnInit = function () {
    };
    NotificationPage.prototype.ionViewWillEnter = function () {
        this.notificationDataArray = [];
        this.onPageLoad();
    };
    NotificationPage.prototype.onPageLoad = function () {
        localStorage.setItem('badge', '0');
        this.offset = 0;
        this.notificationDataArray = [];
        this.getNotificationsListData(this.offset);
    };
    NotificationPage.prototype.closePage = function () {
        this.location.back();
    };
    // getNotificationsListData() {
    // let postData = {
    // "uacc_id":localStorage.getItem('users_id'),
    // "offset":"0"
    // }
    // this.dataServices.getNotificationListData().then((result) => {
    // this.notificationData = result
    // console.log("DDL Response ::" + this.notificationData)
    // if (this.notificationData.status == 1) {
    // } else {
    // }
    // }, error => {
    // console.log('Error in login: ' + JSON.stringify(error))
    // })
    // }
    NotificationPage.prototype.getNotificationsListData = function (offset) {
        var _this = this;
        this.presentLoading();
        this.uacc_id = localStorage.getItem('users_id');
        this.dataServices.getNotificationListData(offset, this.uacc_id).then(function (result) {
            _this.notificationData = result;
            if (_this.notificationData.status == 1) {
                if (_this.offset == 0) {
                    _this.offset = 1;
                }
                // this.loadingController.dismiss();
                _this.totalApplication = _this.notificationData.total_notification_count;
                _this.notificationDataArray = _this.notificationDataArray.concat(_this.notificationData.notification_list);
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
    };
    NotificationPage.prototype.loadData = function (event) {
        if (this.offset > this.totalApplication) {
            event.target.disabled = true;
        }
        this.offset += 10;
        event.target.complete();
        this.getNotificationsListData(this.offset);
    };
    //Display loader 
    NotificationPage.prototype.presentLoading = function () {
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
                        }, 3000);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    NotificationPage = tslib_1.__decorate([
        Component({
            selector: 'app-notification',
            templateUrl: './notification.page.html',
            styleUrls: ['./notification.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            DataservicesService,
            Router,
            AlertController,
            LoadingController,
            Events])
    ], NotificationPage);
    return NotificationPage;
}());
export { NotificationPage };
//# sourceMappingURL=notification.page.js.map