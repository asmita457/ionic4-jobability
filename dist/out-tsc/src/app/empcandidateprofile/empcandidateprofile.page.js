import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
var EmpcandidateprofilePage = /** @class */ (function () {
    function EmpcandidateprofilePage(router, location, activatedRoute, loadingController, dataServices, alertCtrl, transfer, file, emailComposer) {
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.file = file;
        this.emailComposer = emailComposer;
        this.getSeekerData = [];
        this.qualificationArray = [];
        this.experience_details_array = [];
    }
    EmpcandidateprofilePage.prototype.ionViewWillEnter = function () {
        this.resumeId = (this.activatedRoute.snapshot.paramMap.get('resumeId'));
        console.log('resumeId:', this.resumeId);
        this.getResumeDetailsData();
    };
    //Display loader 
    EmpcandidateprofilePage.prototype.presentLoading = function () {
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
    EmpcandidateprofilePage.prototype.getResumeDetailsData = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.resumeDetailAPI(this.resumeId).then(function (result) {
            _this.ResumeDetailResponse = result;
            if (_this.ResumeDetailResponse.status == 1) {
                _this.getSeekerData = _this.ResumeDetailResponse.seeker_details;
                _this.mobile = _this.ResumeDetailResponse.seeker_details.mobile;
                _this.resume_saved_flag = _this.ResumeDetailResponse.seeker_details.resume_saved_flag;
                _this.resume_download_url = _this.ResumeDetailResponse.seeker_details.resume_download_url;
                _this.verify_email = _this.ResumeDetailResponse.seeker_details.verify_email;
                _this.email = _this.ResumeDetailResponse.seeker_details.email;
                _this.firstname = _this.ResumeDetailResponse.seeker_details.first_name;
                _this.profile_photo_path = _this.ResumeDetailResponse.seeker_details.profile_photo_path;
                _this.experience_details_array = _this.ResumeDetailResponse.seeker_details.experience_details_array;
                _this.qualificationArray = _this.ResumeDetailResponse.seeker_details.qulification_details_array[0];
                _this.loadingController.dismiss();
                // this.router.navigate(['/employerjobapplications', { jobApplication : this.jobApplication}]);
                if (_this.applicants_display == 0) {
                }
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmpcandidateprofilePage.prototype.ngOnInit = function () {
    };
    EmpcandidateprofilePage.prototype.goBack = function () {
        this.location.back();
        // this.router.navigate(['/employerjobapplications'])
    };
    //save and remove resume 
    EmpcandidateprofilePage.prototype.saveRemoveResume = function () {
        var _this = this;
        this.uacc_id = localStorage.getItem('users_id');
        this.presentLoading();
        this.dataServices.saveRemoveResumeAPI(this.uacc_id, this.resumeId).then(function (result) {
            _this.saveRemoveResumeResponse = result;
            if (_this.saveRemoveResumeResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.saveRemoveResumeResponse.message);
                if (_this.saveRemoveResumeResponse.check_flag == 1) {
                    _this.resume_saved_flag = 1;
                }
                else if (_this.saveRemoveResumeResponse.check_flag == 2) {
                    _this.resume_saved_flag = 0;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.saveRemoveResumeResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmpcandidateprofilePage.prototype.presentAlert = function (title, message) {
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
    EmpcandidateprofilePage.prototype.emailComposerOpen = function () {
        if (this.verify_email == 0) {
            this.presentAlert('', 'Email address is not verified.');
        }
        else {
            this.emailComposer.isAvailable().then(function (available) {
                if (available) {
                    console.log('emailComposer available');
                }
            });
            var employerEmail = localStorage.getItem("email");
            var email = {
                to: this.email,
                subject: 'Jobability',
                body: 'You have been contacted.',
                isHtml: true
            };
            this.emailComposer.open(email);
        }
    };
    //download Resume 
    EmpcandidateprofilePage.prototype.download = function () {
        var _this = this;
        this.presentLoading();
        var url = this.resume_download_url;
        this.fileName = url.substring(url.lastIndexOf("/") + 1);
        var fileTransfer = this.transfer.create();
        fileTransfer.download(url, this.file.externalRootDirectory +
            '/Download/' + this.fileName)
            .then(function (entry) {
            _this.loadingController.dismiss();
            _this.presentAlert('File', 'File has been downloaded to the Downloads folder');
        }, function (error) {
            // handle error
            _this.loadingController.dismiss();
            console.log('download failed: ' + error);
        });
    }; //download Rresume.
    EmpcandidateprofilePage = tslib_1.__decorate([
        Component({
            selector: 'app-empcandidateprofile',
            templateUrl: './empcandidateprofile.page.html',
            styleUrls: ['./empcandidateprofile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location,
            ActivatedRoute,
            LoadingController,
            DataservicesService,
            AlertController,
            FileTransfer,
            File,
            EmailComposer])
    ], EmpcandidateprofilePage);
    return EmpcandidateprofilePage;
}());
export { EmpcandidateprofilePage };
//# sourceMappingURL=empcandidateprofile.page.js.map