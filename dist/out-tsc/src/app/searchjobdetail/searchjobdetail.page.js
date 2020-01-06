import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
var SearchjobdetailPage = /** @class */ (function () {
    function SearchjobdetailPage(router, location, activatedRoute, dataServices, loadingController, alertCtrl, platform, socialSharing) {
        // this.jobDetails();
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.jobDetailsArray = [];
        this.freeSearch = false;
        this.showWalkin = false;
        this.hideApplied = true;
        this.showApplied = false;
        // this.platform.backButton.subscribe(() => {
        //   // this does work
        //   // alert('Back btn pressed')
        //   this.location.back()
        // });
    }
    SearchjobdetailPage.prototype.ionViewWillEnter = function () {
        this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'));
        this.userId = localStorage.getItem('users_id');
        if (this.userId == '' || this.userId == null || this.userId == undefined || this.userId == 0) {
            this.freeSearch = true;
            this.userId = 0;
        }
        this.jobDetails(this.jobId, this.userId);
    };
    SearchjobdetailPage.prototype.jobDetails = function (jobID, userId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.getDetailInfoOfJob(jobID, userId).then(function (result) {
            _this.detailData = result;
            if (_this.detailData.status == 1) {
                _this.jobDetailsArray = _this.detailData.job_details_data[0];
                _this.jobDetailsLink = _this.detailData.job_details_data[0].job_details_link;
                _this.splitMobile = _this.detailData.job_details_data[0].mobile.split('').join(' ').replace(/0/g, 'zero');
                _this.jobSaveFlag = _this.detailData.job_details_data[0].job_saved_flag;
                _this.jobStatus = _this.detailData.job_details_data[0].job_applied_flag;
                _this.jobCommentFlag = _this.detailData.job_details_data[0].job_comment_flag;
                _this.verifyEmailStatus = _this.detailData.job_details_data[0].verify_email;
                _this.salary = _this.detailData.job_details_data[0].ctc_currency + ' ' + _this.detailData.job_details_data[0].annual_ctc_from + ' ' + 'to' + ' ' + _this.detailData.job_details_data[0].annual_ctc_to;
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.detailData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    SearchjobdetailPage.prototype.shareSocialMedia = function () {
        var shareURL = this.jobDetailsLink;
        console.log('shareURL: ' + shareURL);
        this.socialSharing.share('Refer this job', 'Refer this job', '', shareURL).then(function (success) {
            console.log('Success: ' + success);
        }, function (error) {
            console.log('Failed: ' + error);
        }).catch(function (err) {
            console.log('error: ' + err);
        });
    };
    SearchjobdetailPage.prototype.applyJob = function () {
        this.login_status = localStorage.getItem('login');
        if (this.login_status == 'yes') {
            this.applyJobAPI();
        }
        else {
            this.presentAlert('', "Please login to apply the job.");
            // this.router.navigate(['/welcomescreen'])
            return;
        }
    };
    //Save Job
    SearchjobdetailPage.prototype.saveJob = function (jobId) {
        if (this.userId == 0) {
            this.confirmAction('save');
        }
        else {
            this.saveOrRemoveJob(jobId);
        }
    };
    //Save Job and Remove Job
    SearchjobdetailPage.prototype.saveOrRemoveJob = function (jobId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.saveOrRemoveJob(jobId, this.userId).then(function (res) {
            _this.saveJObResponse = res;
            _this.loadingController.dismiss();
            if (_this.saveJObResponse.status == 1) {
                if (_this.saveJObResponse.check_flag == 1) {
                    _this.jobSaveFlag = 1;
                }
                else {
                    _this.jobSaveFlag = 0;
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
    }; // Save and Remove Job Functon Ends Here.
    SearchjobdetailPage.prototype.confirmAction = function (action) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var subHeader, subHeader, alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (action == 'applay') {
                            subHeader = 'If you want to apply for job you have to "Register" or "Login" first.';
                        }
                        else {
                            subHeader = 'If you want to save job you have to "Register" or "Login" first.';
                        }
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '',
                                subHeader: subHeader,
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'OK',
                                        handler: function () {
                                            localStorage.clear();
                                            localStorage.setItem('users_id', '0');
                                            _this.router.navigate(['/welcomescreen']);
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
    SearchjobdetailPage.prototype.applyJobAPI = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.jobApplyAPI(this.userId, this.jobId).then(function (result) {
            if (result.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
                // this.hideApplied = false
                // this.showApplied = true;
                _this.jobStatus = 1;
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
                if (result.message == "You have already applied this job.") {
                    _this.hideApplied = false;
                    _this.showApplied = true;
                }
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    SearchjobdetailPage.prototype.freeSearchUser = function () {
        this.confirmAction('applay');
    };
    SearchjobdetailPage.prototype.ngOnInit = function () {
    };
    SearchjobdetailPage.prototype.goBack = function () {
        this.location.back();
        // this.router.navigate(['/searchjobs']);
    };
    SearchjobdetailPage.prototype.comment = function () {
        if (this.jobCommentFlag == 0 && this.verifyEmailStatus == '1') {
            this.personeName = this.detailData.job_details_data[0].person_name;
            this.emailId = this.detailData.job_details_data[0].email;
            this.jobTitle = this.detailData.job_details_data[0].name;
            this.router.navigate(['/servicereview', { jobId: this.jobId, personeName: this.personeName, emailId: this.emailId, jobTitle: this.jobTitle, navFromServiceDetails: false }]);
        }
        else if (this.jobCommentFlag == 0 && this.verifyEmailStatus == '0') {
            this.presentAlert('', 'Please verify your email address to comment on the job.');
        }
        else {
            this.presentAlert('', 'You have already commented for this job.');
            return;
        }
        // }
    }; //Display loader 
    //Display loader 
    SearchjobdetailPage.prototype.presentLoading = function () {
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
    SearchjobdetailPage.prototype.presentAlert = function (title, message) {
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
    SearchjobdetailPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    SearchjobdetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-searchjobdetail',
            templateUrl: './searchjobdetail.page.html',
            styleUrls: ['./searchjobdetail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location,
            ActivatedRoute,
            DataservicesService,
            LoadingController,
            AlertController,
            Platform,
            SocialSharing])
    ], SearchjobdetailPage);
    return SearchjobdetailPage;
}());
export { SearchjobdetailPage };
//# sourceMappingURL=searchjobdetail.page.js.map