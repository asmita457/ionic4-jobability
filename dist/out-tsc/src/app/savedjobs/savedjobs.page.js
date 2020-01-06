import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
var SavedjobsPage = /** @class */ (function () {
    function SavedjobsPage(router, dataServices, activatedRoute, loadingController, alertCtrl) {
        this.router = router;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.savedJobsArray = [];
        this.showSearchData = true;
        this.saved_job_list = [];
        this.offset = 0;
    }
    SavedjobsPage.prototype.ngOnInit = function () {
    };
    SavedjobsPage.prototype.ionViewWillEnter = function () {
        this.offset = 0;
        this.saved_job_list = [];
        this.users_id = localStorage.getItem('users_id');
        this.savejobCount = (this.activatedRoute.snapshot.paramMap.get('count'));
        if (this.users_id == '' || this.users_id == null || this.users_id == undefined) {
            this.users_id = 0;
        }
        if (this.savejobCount != '0' || this.savejobCount != 0) {
            this.getSavedJobList();
        }
        else {
            this.showSearchData = false;
        }
        this.getNotificationBadgeCount();
    };
    SavedjobsPage.prototype.getNotificationBadgeCount = function () {
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
    SavedjobsPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    // Function For Load Data While Scrolling
    SavedjobsPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.savedJobListLength) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getSavedJobList();
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    SavedjobsPage.prototype.jobDescription = function (item) {
        console.log('id: ' + item.id);
        this.router.navigate(['/searchjobdetail', { jobId: item.id }]);
    };
    SavedjobsPage.prototype.getSavedJobList = function () {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getSavedJobsData(this.users_id, this.offset).then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.saved_job_list = _this.saved_job_list.concat(_this.resultData.saved_job_list);
                _this.savedJobListLength = _this.resultData.save_job_total_count;
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (_this.savedJobListLength < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.savedJobListLength == 0) {
                    _this.showSearchData = false;
                }
                else {
                    _this.showSearchData = true;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.resultData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    SavedjobsPage.prototype.saveOrRemoveJob = function (jobId) {
        var _this = this;
        var val = jobId;
        this.presentLoading();
        this.dataServices.saveOrRemoveJob(jobId, this.users_id).then(function (res) {
            _this.resultData = res;
            if (_this.resultData.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert("", _this.resultData.message);
                ///this.getSavedJobList()
                var index = _this.saved_job_list.findIndex(function (item, i) {
                    return item.id === val;
                });
                if (index > -1) {
                    _this.saved_job_list.splice(index, 1);
                    _this.savedJobListLength = _this.savedJobListLength - 1;
                    if (_this.savedJobListLength == 0) {
                        _this.showSearchData = false;
                    }
                }
            }
            else {
                _this.presentAlert("", _this.resultData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log(error);
        });
    };
    //Display loader 
    SavedjobsPage.prototype.presentLoading = function () {
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
    SavedjobsPage.prototype.presentAlert = function (title, message) {
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
    SavedjobsPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    SavedjobsPage = tslib_1.__decorate([
        Component({
            selector: 'app-savedjobs',
            templateUrl: './savedjobs.page.html',
            styleUrls: ['./savedjobs.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataservicesService,
            ActivatedRoute,
            LoadingController,
            AlertController])
    ], SavedjobsPage);
    return SavedjobsPage;
}());
export { SavedjobsPage };
//# sourceMappingURL=savedjobs.page.js.map