import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
var SuccessstorydetailsPage = /** @class */ (function () {
    function SuccessstorydetailsPage(location, activatedRoute, dataServices, loadingController, alertCtrl, socialSharing) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        var successStoryId = (this.activatedRoute.snapshot.paramMap.get('successStoryId'));
        this.successStorysDetails(successStoryId);
    }
    SuccessstorydetailsPage.prototype.ngOnInit = function () {
    };
    SuccessstorydetailsPage.prototype.closePage = function () {
        this.location.back();
    };
    SuccessstorydetailsPage.prototype.successStorysDetails = function (successStoryId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.successStorysDetails(successStoryId).then(function (result) {
            _this.loadingController.dismiss();
            if (result.status == 1) {
                _this.successStoriesDetails = result.success_stories_details;
                // this.savedJobListLength = this.resultData.save_job_total_count
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
    SuccessstorydetailsPage.prototype.shareSocialMedia = function () {
        var shareURL = this.successStoriesDetails[0].success_story_details_link;
        console.log('shareURL: ' + shareURL);
        this.socialSharing.share('Refer this job', 'Refer this job', '', shareURL).then(function (success) {
            console.log('Success: ' + success);
        }, function (error) {
            console.log('Failed: ' + error);
        }).catch(function (err) {
            console.log('error: ' + err);
        });
    };
    //Display loader 
    SuccessstorydetailsPage.prototype.presentLoading = function () {
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
    SuccessstorydetailsPage.prototype.presentAlert = function (title, message) {
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
    SuccessstorydetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-successstorydetails',
            templateUrl: './successstorydetails.page.html',
            styleUrls: ['./successstorydetails.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            ActivatedRoute,
            DataservicesService,
            LoadingController,
            AlertController,
            SocialSharing])
    ], SuccessstorydetailsPage);
    return SuccessstorydetailsPage;
}());
export { SuccessstorydetailsPage };
//# sourceMappingURL=successstorydetails.page.js.map