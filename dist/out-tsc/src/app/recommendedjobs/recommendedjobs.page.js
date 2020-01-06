import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController } from '@ionic/angular';
var RecommendedjobsPage = /** @class */ (function () {
    function RecommendedjobsPage(router, dataServices, activatedRoute, loadingController, alertCtrl) {
        this.router = router;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.recommendedJobsArray = [];
        this.showSearchData = true;
        this.offset = 0;
    }
    RecommendedjobsPage.prototype.ngOnInit = function () {
    };
    RecommendedjobsPage.prototype.ionViewWillEnter = function () {
        this.recommendedJobsArray = [];
        this.users_id = localStorage.getItem('users_id');
        this.recommendedjobCount = (this.activatedRoute.snapshot.paramMap.get('count'));
        this.offset = 0;
        if (this.recommendedjobCount != '0' || this.recommendedjobCount != 0) {
            this.recommendedJob(this.users_id, this.offset);
        }
        else {
            this.showSearchData = false;
        }
        this.getNotificationBadgeCount();
    };
    RecommendedjobsPage.prototype.getNotificationBadgeCount = function () {
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
    RecommendedjobsPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    RecommendedjobsPage.prototype.jobDescription = function (item) {
        this.router.navigate(['/searchjobdetail', { jobId: item.id }]);
    };
    RecommendedjobsPage.prototype.recommendedJob = function (users_id, offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getRecommendedJobsData(users_id, offset).then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.recommendedJobsArray = _this.recommendedJobsArray.concat(_this.resultData.recommended_job_list);
                _this.recommendedJobsLength = _this.resultData.recommended_job_total_count;
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (_this.recommendedJobsLength < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.recommendedJobsLength == 0) {
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
    // Function for save or remove job
    RecommendedjobsPage.prototype.saveJob = function (jobId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.saveOrRemoveJob(jobId, this.users_id).then(function (res) {
            _this.saveJObResponse = res;
            _this.loadingController.dismiss();
            if (_this.saveJObResponse.status == 1) {
                if (_this.saveJObResponse.check_flag == 1) {
                    for (var i = 0; i < _this.recommendedJobsArray.length; i++) {
                        if (_this.recommendedJobsArray[i].id == jobId) {
                            _this.recommendedJobsArray[i].job_saved_flag = 1;
                        }
                    }
                }
                else {
                    for (var i = 0; i < _this.recommendedJobsArray.length; i++) {
                        if (_this.recommendedJobsArray[i].id == jobId) {
                            _this.recommendedJobsArray[i].job_saved_flag = 2;
                        }
                    }
                }
                _this.presentAlert("", _this.saveJObResponse.message);
            }
            else {
                _this.presentAlert("", _this.saveJObResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log(error);
        });
    };
    // Function For Load Data While Scrolling
    RecommendedjobsPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.recommendedJobsLength) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.recommendedJob(_this.users_id, _this.offset);
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    //Display loader 
    RecommendedjobsPage.prototype.presentLoading = function () {
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
    RecommendedjobsPage.prototype.presentAlert = function (title, message) {
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
    RecommendedjobsPage = tslib_1.__decorate([
        Component({
            selector: 'app-recommendedjobs',
            templateUrl: './recommendedjobs.page.html',
            styleUrls: ['./recommendedjobs.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataservicesService,
            ActivatedRoute,
            LoadingController,
            AlertController])
    ], RecommendedjobsPage);
    return RecommendedjobsPage;
}());
export { RecommendedjobsPage };
//# sourceMappingURL=recommendedjobs.page.js.map