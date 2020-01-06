import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController } from '@ionic/angular';
var dashboardemployerPage = /** @class */ (function () {
    function dashboardemployerPage(router, menuCtrl, activatedRoute, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.countryId = 0;
        this.applicationData = [];
        this.applicationDetails = [];
        this.offset = 0;
        this.onPageLoad();
        this.getAllDDLAPI(this.countryId);
        this.getCountryDDlAPI();
    }
    dashboardemployerPage.prototype.ngOnInit = function () {
    };
    dashboardemployerPage.prototype.ionViewWillEnter = function () {
        // localStorage.clear();
        this.offset = 0;
        this.menuCtrl.enable(true);
        this.getNotificationBadgeCount();
    };
    //function for get all required data for employer dashboard when page is load
    dashboardemployerPage.prototype.onPageLoad = function () {
        this.getEmployerDashBoardDetails(this.offset);
    };
    dashboardemployerPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            // if (this.offset > this.totalApplication) {
            //   this.moreDataAvailable = false
            // } else {
            //   this.moreDataAvailable = true
            _this.getEmployerDashBoardDetails(_this.offset);
            event.target.complete();
            // }
        }, 500);
    };
    dashboardemployerPage.prototype.getCountryDDlAPI = function () {
        var _this = this;
        this.resultData = [];
        this.dataServices.getCountryArrayAPI().then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                localStorage.setItem("countryArray", JSON.stringify(_this.resultData));
            }
            else {
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    dashboardemployerPage.prototype.getAllDDLAPI = function (countryId) {
        var _this = this;
        this.dataServices.getDDLAPI(countryId).then(function (result) {
            _this.getDLLAPIData = result;
            if (_this.getDLLAPIData.status == 1) {
                localStorage.setItem("employerDDLResponse", JSON.stringify(_this.getDLLAPIData.ddl_list));
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //get Employer Dashboard Details
    dashboardemployerPage.prototype.getEmployerDashBoardDetails = function (offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getEmployerDashBoardDetails(offset).then(function (result) {
            _this.getEmpDashBoardResponse = result;
            if (_this.getEmpDashBoardResponse.status == 1) {
                if (_this.offset == 0) {
                    // this.offset = 1
                    _this.loadingController.dismiss();
                }
                _this.totalJobPost = _this.getEmpDashBoardResponse.dashboard_count_data.total_job_post;
                _this.totalApplication = _this.getEmpDashBoardResponse.dashboard_count_data.total_application;
                _this.applicationData = _this.applicationData.concat(_this.getEmpDashBoardResponse.dashboard_application_data);
                localStorage.setItem("applicationData", JSON.stringify(_this.applicationData));
                if (_this.totalJobPost > _this.applicationData.length) {
                    _this.moreDataAvailable = true;
                }
                else {
                    _this.moreDataAvailable = false;
                }
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
    //Function For Applications Details
    dashboardemployerPage.prototype.applicationsDetails = function (id, offset) {
        var _this = this;
        this.presentLoading();
        this.dataServices.applicationDetails(id, offset).then(function (result) {
            _this.aplicationsResponse = result;
            if (_this.aplicationsResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.applicationDetailsResponse = _this.aplicationsResponse.application_apply_data;
                localStorage.setItem("jobApplications", JSON.stringify(_this.applicationDetailsResponse));
                localStorage.setItem("applicationId", id);
                // this.router.navigate(['/employerjobapplications', { jobApplications: JSON.stringify(this.applicationDetailsResponse), applicationId: id }]);
                _this.router.navigate(['/employerjobapplications', { applicationId: id }]);
            }
            else {
                _this.loadingController.dismiss();
                // this.presentAlert('', this.applicationDetailsResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    dashboardemployerPage.prototype.getNotificationBadgeCount = function () {
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
    dashboardemployerPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    //Display loader 
    dashboardemployerPage.prototype.presentLoading = function () {
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
    dashboardemployerPage.prototype.presentAlert = function (title, message) {
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
    dashboardemployerPage = tslib_1.__decorate([
        Component({
            selector: 'app-dashboardemployer',
            templateUrl: './dashboardemployer.page.html',
            styleUrls: ['./dashboardemployer.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            MenuController,
            ActivatedRoute,
            LoadingController,
            DataservicesService,
            AlertController])
    ], dashboardemployerPage);
    return dashboardemployerPage;
}());
export { dashboardemployerPage };
//# sourceMappingURL=dashboardemployer.page.js.map