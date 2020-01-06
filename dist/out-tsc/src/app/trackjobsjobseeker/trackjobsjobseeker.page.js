import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
var TrackjobsjobseekerPage = /** @class */ (function () {
    function TrackjobsjobseekerPage(router, dataServices, alertCtrl, loadingController) {
        // this.onPageLoad()
        this.router = router;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.trackJobList = [];
        this.offset = 0;
        this.track_job_list = [];
        this.trackJobData = true;
    }
    TrackjobsjobseekerPage.prototype.ngOnInit = function () {
    };
    TrackjobsjobseekerPage.prototype.ionViewWillEnter = function () {
        this.users_id = localStorage.getItem('users_id');
        if (this.users_id == '' || this.users_id == null || this.users_id == undefined || this.users_id == 0) {
            this.users_id = 0;
        }
        this.offset = 0;
        this.track_job_list = [];
        this.getTrackJobList();
        this.getNotificationBadgeCount();
    };
    TrackjobsjobseekerPage.prototype.onPageLoad = function () {
    };
    TrackjobsjobseekerPage.prototype.getNotificationBadgeCount = function () {
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
    TrackjobsjobseekerPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    //Function for get list of track jobs
    TrackjobsjobseekerPage.prototype.getTrackJobList = function () {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.trackjoblist(this.users_id, this.offset).then(function (result) {
            _this.trackJobResponse = result;
            if (_this.trackJobResponse.status == 1) {
                _this.track_job_list = _this.track_job_list.concat(_this.trackJobResponse.job_applied_list);
                _this.track_job_list_length = _this.trackJobResponse.job_applied_total_count;
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (_this.track_job_list_length < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.track_job_list_length == 0) {
                    _this.trackJobData = false;
                }
                else {
                    _this.trackJobData = true;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.trackJobResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    TrackjobsjobseekerPage.prototype.jobDescription = function (item) {
        this.router.navigate(['/searchjobdetail', { jobId: item }]);
    };
    TrackjobsjobseekerPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.track_job_list_length) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getTrackJobList();
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    //Display loader 
    TrackjobsjobseekerPage.prototype.presentLoading = function () {
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
    TrackjobsjobseekerPage.prototype.presentAlert = function (title, message) {
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
    TrackjobsjobseekerPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    TrackjobsjobseekerPage = tslib_1.__decorate([
        Component({
            selector: 'app-trackjobsjobseeker',
            templateUrl: './trackjobsjobseeker.page.html',
            styleUrls: ['./trackjobsjobseeker.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataservicesService,
            AlertController,
            LoadingController])
    ], TrackjobsjobseekerPage);
    return TrackjobsjobseekerPage;
}());
export { TrackjobsjobseekerPage };
//# sourceMappingURL=trackjobsjobseeker.page.js.map