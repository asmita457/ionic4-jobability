import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { ActivatedRoute, Router } from '@angular/router';
var EmployerjobdetailPage = /** @class */ (function () {
    function EmployerjobdetailPage(location, loadingController, dataServices, alertCtrl, activatedRoute, router) {
        this.location = location;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.employerJobDetailArray = [];
        this.manageResponsesWalkin = false;
        this.manageResponsesEmail = false;
        this.hideSalary = true;
        this.contactDetailShow = true;
        this.contactDetailHide = false;
    }
    EmployerjobdetailPage.prototype.ngOnInit = function () {
        // this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'));
        // console.log('resumeId:', this.jobId)
        // this.getJobDetail();
    };
    EmployerjobdetailPage.prototype.ionViewWillEnter = function () {
        this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'));
        console.log('resumeId:', this.jobId);
        this.getJobDetail();
    };
    EmployerjobdetailPage.prototype.getJobDetail = function () {
        var _this = this;
        this.uacc_id = 0;
        this.presentLoading();
        this.dataServices.getEmployerJobDetailAPI(this.jobId, this.uacc_id).then(function (result) {
            _this.employerJobDetailResponse = result;
            if (_this.employerJobDetailResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.employerJobDetailArray = _this.employerJobDetailResponse.job_details_data[0];
                _this.walkinFromDate = _this.employerJobDetailResponse.job_details_data[0].walkin_from_date;
                _this.walkin_to_date = _this.employerJobDetailResponse.job_details_data[0].walkin_to_date;
                _this.applicants_display = _this.employerJobDetailResponse.job_details_data[0].applicants_display;
                _this.hide_salary = _this.employerJobDetailResponse.job_details_data[0].hide_salary;
                _this.show_contact = _this.employerJobDetailResponse.job_details_data[0].show_contact;
                if ((_this.walkinFromDate == 0 && _this.walkin_to_date == 0) || _this.applicants_display == 1) {
                    _this.manageResponsesEmail = true;
                    _this.manageResponsesWalkin = false;
                }
                else {
                    _this.manageResponsesEmail = false;
                    _this.manageResponsesWalkin = true;
                }
                if (_this.applicants_display == 0) {
                    _this.applicantDisaply = "Show";
                }
                else {
                    _this.applicantDisaply = "Hide";
                }
                if (_this.hide_salary == 1) {
                    _this.hideSalary = false;
                }
                if (_this.show_contact == 1) {
                    _this.contactDetailHide = true;
                    _this.contactDetailShow = false;
                }
                else {
                    _this.contactDetailHide = false;
                    _this.contactDetailShow = true;
                }
                // this.presentAlert('', this.employerJobDetailResponse.message);
            }
            else {
                _this.loadingController.dismiss();
                // this.presentAlert('', this.employerJobDetailResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployerjobdetailPage.prototype.deleteJobDetail = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteEmployerJobDetailAPI(this.jobId).then(function (result) {
            _this.employerJobDeleteAPIResponse = result;
            if (_this.employerJobDeleteAPIResponse.status == 1) {
                _this.loadingController.dismiss();
                // this.employerJobDetailArray = this.employerJobDeleteAPIResponse
                _this.presentAlert('', _this.employerJobDeleteAPIResponse.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.employerJobDeleteAPIResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployerjobdetailPage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.router.navigate(['/joblistingemployee']);
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
    EmployerjobdetailPage.prototype.presentAlertForDelete = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subHeader: "Are you sure you want to delete?",
                            buttons: [{
                                    text: 'Cancel',
                                    cssClass: 'secondary',
                                    role: 'cancel'
                                },
                                {
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (_) {
                                        //api call
                                        _this.deleteAPICall();
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
    EmployerjobdetailPage.prototype.deleteAPICall = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteEmployerJobDetailAPI(this.jobId).then(function (result) {
            _this.employerJobDeleteAPIResponse = result;
            if (_this.employerJobDeleteAPIResponse.status == 1) {
                _this.loadingController.dismiss();
                // this.employerJobDetailArray = this.employerJobDeleteAPIResponse
                _this.presentAlert('', _this.employerJobDeleteAPIResponse.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.employerJobDeleteAPIResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Display loader 
    EmployerjobdetailPage.prototype.presentLoading = function () {
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
    EmployerjobdetailPage.prototype.closePage = function () {
        this.location.back();
        // this.router.navigate(['/'])
    };
    EmployerjobdetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-employerjobdetail',
            templateUrl: './employerjobdetail.page.html',
            styleUrls: ['./employerjobdetail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            LoadingController,
            DataservicesService,
            AlertController,
            ActivatedRoute,
            Router])
    ], EmployerjobdetailPage);
    return EmployerjobdetailPage;
}());
export { EmployerjobdetailPage };
//# sourceMappingURL=employerjobdetail.page.js.map