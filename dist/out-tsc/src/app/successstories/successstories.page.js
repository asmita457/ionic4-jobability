import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
var SuccessstoriesPage = /** @class */ (function () {
    function SuccessstoriesPage(router, dataServices, loadingController, alertCtrl) {
        this.router = router;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.offset = 0;
        this.successStoriesList = [];
        this.uacc_id = localStorage.getItem("users_id");
    }
    SuccessstoriesPage.prototype.ngOnInit = function () {
    };
    SuccessstoriesPage.prototype.ionViewWillEnter = function () {
        this.offset = 0;
        this.successStoriesList = [];
        this.getSuccessStorys(this.offset);
        this.getNotificationBadgeCount();
    };
    SuccessstoriesPage.prototype.navToSuccessStories = function () {
        if (this.verifyEmail == '1') {
            this.router.navigate(['/addsuccessstories']);
        }
        else {
            this.presentAlert('', 'Please verify your email address to add success story.');
        }
    };
    SuccessstoriesPage.prototype.navToSuccessStoryDetails = function (successStoryId) {
        this.router.navigate(['/successstorydetails', { successStoryId: successStoryId }]);
    };
    SuccessstoriesPage.prototype.getNotificationBadgeCount = function () {
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
    SuccessstoriesPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    SuccessstoriesPage.prototype.getSuccessStorys = function (offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getsuccessStory(offset, this.uacc_id).then(function (result) {
            if (result.status == 1) {
                _this.verifyEmail = result.verify_email;
                _this.successStoriesList = _this.successStoriesList.concat(result.success_stories_list);
                // this.savedJobListLength = this.resultData.save_job_total_count
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (result.total_stroy_count > _this.successStoriesList.length) {
                    _this.moreDataAvailable = true;
                }
                else {
                    _this.moreDataAvailable = false;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    SuccessstoriesPage.prototype.deleteSuccessStoryConfirm = function (id) {
        this.deleteSuccesssStoryFunction(id);
    };
    SuccessstoriesPage.prototype.deleteSuccessStory = function (successStoryId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteSuccessStory(successStoryId).then(function (result) {
            if (result.status == 1) {
                var index = _this.successStoriesList.findIndex(function (item, i) {
                    return item.resource_id === successStoryId;
                });
                if (index > -1) {
                    _this.successStoriesList.splice(index, 1);
                }
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function For Load Data While Scrolling
    SuccessstoriesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            _this.getSuccessStorys(_this.offset);
            event.target.complete();
        }, 500);
    }; //loadData Function Eds Here.
    //Display loader 
    SuccessstoriesPage.prototype.presentLoading = function () {
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
    SuccessstoriesPage.prototype.presentAlert = function (title, message) {
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
    SuccessstoriesPage.prototype.deleteSuccesssStoryFunction = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm',
                            subHeader: 'Are you sure? Do you want to delete?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        // this.router.navigate(['/login']);
                                        _this.deleteSuccessStory(id);
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
    SuccessstoriesPage = tslib_1.__decorate([
        Component({
            selector: 'app-successstories',
            templateUrl: './successstories.page.html',
            styleUrls: ['./successstories.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataservicesService,
            LoadingController,
            AlertController])
    ], SuccessstoriesPage);
    return SuccessstoriesPage;
}());
export { SuccessstoriesPage };
//# sourceMappingURL=successstories.page.js.map