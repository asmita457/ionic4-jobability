import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
var JoblistingemployeePage = /** @class */ (function () {
    function JoblistingemployeePage(router, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.employerJobListingArray = [];
        this.showPostJobList = true;
        this.disability_id = [];
        this.offset = 0;
    }
    JoblistingemployeePage.prototype.ngOnInit = function () {
        // this.getJobListingResult();
    };
    JoblistingemployeePage.prototype.ionViewWillEnter = function () {
        this.presentLoading();
        this.employerJobListingArray = [];
        this.getJobListingResult();
        this.offset = 0;
        this.getNotificationBadgeCount();
    };
    JoblistingemployeePage.prototype.getNotificationBadgeCount = function () {
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
    JoblistingemployeePage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    JoblistingemployeePage.prototype.getJobListingResult = function () {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.uacc_id = localStorage.getItem('users_id');
        // this.presentLoading();
        this.dataServices.getJobListingAPI(this.uacc_id, this.offset).then(function (result) {
            _this.jobListingResponse = result;
            if (_this.jobListingResponse.status == 1) {
                _this.employerJobListingArray = _this.employerJobListingArray.concat(_this.jobListingResponse.job_list);
                _this.jobListingLength = _this.jobListingResponse.job_total_count;
                console.log('search resume data:', _this.jobListingResponse);
                if (_this.offset == 0 && _this.jobListingLength > _this.dataServices.globalOffset()) {
                    _this.loadingController.dismiss();
                    // this.offset = 1
                }
                if (_this.jobListingLength < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.jobApplicationCount != 0) {
                    _this.showPostJobList = true;
                }
                else {
                    _this.showPostJobList = false;
                }
            }
            else {
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                alert(_this.jobListingResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Function for show detail of employer post job
    JoblistingemployeePage.prototype.employerJobDetail = function (id) {
        this.router.navigate(['/employerjobdetail', { jobId: id }]);
    }; //employerJobDetail Function Eds Here.
    // Function For Load Data While Scrolling
    JoblistingemployeePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            // event.target.disabled = false;
            // this.infiniteScroll.disabled = false;
            if (_this.offset > _this.jobListingLength) {
                // event.target.disabled = true;
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getJobListingResult();
                event.target.complete();
            }
        }, 100);
    }; //loadData Function Eds Here.
    //Display loader 
    JoblistingemployeePage.prototype.presentLoading = function () {
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
    JoblistingemployeePage.prototype.queryRaised = function (id, total_raised_query_count) {
        console.log('id', id);
        console.log('total_raised_query_count', total_raised_query_count);
        if (total_raised_query_count == 0) {
            this.presentAlert('No query raised', '');
        }
        else {
            this.router.navigate(['/employerqueryraised', { id: id }]);
        }
    };
    JoblistingemployeePage.prototype.presentAlert = function (title, message) {
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
    JoblistingemployeePage = tslib_1.__decorate([
        Component({
            selector: 'app-joblistingemployee',
            templateUrl: './joblistingemployee.page.html',
            styleUrls: ['./joblistingemployee.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            LoadingController,
            DataservicesService,
            AlertController])
    ], JoblistingemployeePage);
    return JoblistingemployeePage;
}());
export { JoblistingemployeePage };
//# sourceMappingURL=joblistingemployee.page.js.map