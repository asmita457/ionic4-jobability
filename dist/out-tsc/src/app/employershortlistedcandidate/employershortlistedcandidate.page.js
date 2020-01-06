import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router } from '@angular/router';
var EmployershortlistedcandidatePage = /** @class */ (function () {
    function EmployershortlistedcandidatePage(loadingController, dataServices, alertCtrl, router) {
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.offset = 0;
        this.shortlistedCandidateData = [];
        this.showCandidatesList = true;
    }
    EmployershortlistedcandidatePage.prototype.ngOnInit = function () {
    };
    EmployershortlistedcandidatePage.prototype.ionViewWillEnter = function () {
        this.uacc_id = localStorage.getItem('users_id');
        this.getListofShortlistedCandidates(this.uacc_id, this.offset);
        this.shortlistedCandidateData = [];
        this.offset = 0;
        this.getNotificationBadgeCount();
    };
    EmployershortlistedcandidatePage.prototype.getNotificationBadgeCount = function () {
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
    EmployershortlistedcandidatePage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    //Functino For get shortlisted candidate list  
    EmployershortlistedcandidatePage.prototype.getListofShortlistedCandidates = function (id, offset) {
        var _this = this;
        this.presentLoading();
        this.dataServices.shortlistedCandidateListAPI(id, offset).then(function (result) {
            _this.shortlistedCandidateResponse = result;
            if (_this.shortlistedCandidateResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.shortlistedCandidateData = _this.shortlistedCandidateResponse.shortlisted_candidated_list;
                // this.presentAlert('', this.shortlistedCandidateData);
                _this.shortlistedCandidateCount = _this.shortlistedCandidateResponse.total_shortlisted_candidated;
                if (_this.shortlistedCandidateCount < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.shortlistedCandidateCount != 0) {
                    _this.showCandidatesList = true;
                }
                else {
                    _this.showCandidatesList = false;
                }
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployershortlistedcandidatePage.prototype.presentAlert = function (title, message) {
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
    // Function For Load Data While Scrolling
    EmployershortlistedcandidatePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.shortlistedCandidateCount) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getListofShortlistedCandidates(_this.uacc_id, _this.offset);
                // this.getSearchResumesResult(
                //   this.skills, this.minExperience, this.maxExperience, this.currency, this.annual_ctc_from, this.annual_ctc_to, this.disability_id,
                //   this.location, this.offset, this.uacc_id)
                // event.target.complete();
            }
        }, 100);
    }; //loadData Function Eds Here.
    //Function for show cadidate profile 
    EmployershortlistedcandidatePage.prototype.candidateProfileDetails = function (item) {
        var resumeId = item.id;
        this.router.navigate(['/empcandidateprofile', { resumeId: resumeId }]);
    }; //candidateProfileDetails ends here
    //Display loader 
    EmployershortlistedcandidatePage.prototype.presentLoading = function () {
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
    EmployershortlistedcandidatePage = tslib_1.__decorate([
        Component({
            selector: 'app-employershortlistedcandidate',
            templateUrl: './employershortlistedcandidate.page.html',
            styleUrls: ['./employershortlistedcandidate.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController,
            DataservicesService,
            AlertController,
            Router])
    ], EmployershortlistedcandidatePage);
    return EmployershortlistedcandidatePage;
}());
export { EmployershortlistedcandidatePage };
//# sourceMappingURL=employershortlistedcandidate.page.js.map