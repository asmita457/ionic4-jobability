import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Location } from '@angular/common';
export var COLORS;
(function (COLORS) {
    COLORS["GREY"] = "#E0E0E0";
    COLORS["BLUE"] = "#2b0c43";
})(COLORS || (COLORS = {}));
var ServicereviewPage = /** @class */ (function () {
    function ServicereviewPage(router, activatedRoute, dataServices, loadingController, alertCtrl, location) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.location = location;
        this.ratingChange = new EventEmitter();
        this.showCommentErrorMsg = false;
        this.serviceId = (this.activatedRoute.snapshot.paramMap.get('serviceId'));
        this.showCommnet = (this.activatedRoute.snapshot.paramMap.get('showCommnet'));
        if (this.showCommnet == 'true') {
            this.showCommitButton = true;
        }
        this.serviceProviderId = (this.activatedRoute.snapshot.paramMap.get('serviceProviderId'));
        this.ratingCount = (this.activatedRoute.snapshot.paramMap.get('ratingCount'));
        this.userId = localStorage.getItem('users_id');
        this.navFromServiceDetails = (this.activatedRoute.snapshot.paramMap.get('navFromServiceDetails'));
        if (this.navFromServiceDetails != 'true') {
            this.showCommnet = "true";
            this.showCommitButton = true;
            this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'));
            this.personeName = (this.activatedRoute.snapshot.paramMap.get('personeName'));
            this.emailId = (this.activatedRoute.snapshot.paramMap.get('emailId'));
            this.jobTitle = (this.activatedRoute.snapshot.paramMap.get('jobTitle'));
        }
        if (this.ratingCount == 'null') {
            this.rating = null;
            this.ratingButton = true;
        }
        else {
            this.rate(this.ratingCount);
            this.ratingButton = false;
        }
    }
    ServicereviewPage.prototype.ngOnInit = function () {
    };
    ServicereviewPage.prototype.ionViewWillEnter = function () {
        if (this.ratingCount != 'null') {
            this.rateFlag = true;
        }
        else {
            this.rateFlag = false;
        }
    };
    //Function for validate comment
    ServicereviewPage.prototype.validationForComment = function () {
        if (this.Comment == null || this.Comment.trim() == "" || this.Comment == undefined) {
            this.showCommentErrorMsg = true;
        }
        else {
            this.showCommentErrorMsg = false;
        }
    };
    ServicereviewPage.prototype.Submit = function () {
        if (this.Comment == null || this.Comment.trim() == "" || this.Comment == undefined) {
            this.showCommentErrorMsg = true;
            // this.errorAlert('','Please enter comment')
            return;
        }
        else {
            if (this.navFromServiceDetails != 'true') {
                this.raiseQuery(this.jobId, this.personeName, this.emailId, this.jobTitle, this.Comment, this.userId);
            }
            else {
                this.submitComment(this.serviceId, this.Comment, this.userId);
            }
        }
    };
    //Comment on service
    ServicereviewPage.prototype.submitComment = function (serviceID, comment, users_id) {
        var _this = this;
        // if (this.Comment == null || this.Comment.trim() == "" || this.Comment == undefined) {
        //   this.presentAlert('', 'Please enter comment')
        //   return
        // } else {
        this.presentLoading();
        this.dataServices.commentOnService(serviceID, comment, users_id).then(function (result) {
            _this.commitResponse = result;
            _this.loadingController.dismiss();
            if (_this.commitResponse.status == 1) {
                _this.presentAlert('', _this.commitResponse.message);
                // this.showServiceDetails = true
                // this.showRating = false
                // this.showContact = false
                // this.serviceDetails.total_service_contact = 1
            }
            else {
                _this.presentAlert('', _this.commitResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in commit service: ' + JSON.stringify(error));
        });
        // }
    };
    ServicereviewPage.prototype.raiseQuery = function (jobId, personName, emailId, jobTitle, comment, users_id) {
        // if (this.Comment == null || this.Comment.trim() == "" || this.Comment == undefined) {
        //   this.presentAlert('', 'Please enter comment')
        //   return
        // } else {
        var _this = this;
        this.presentLoading();
        this.dataServices.raiseQuery(jobId, personName, emailId, jobTitle, comment, users_id).then(function (result) {
            _this.commitResponse = result;
            _this.loadingController.dismiss();
            if (_this.commitResponse.status == 1) {
                _this.presentAlert('', _this.commitResponse.message);
                _this.showCommitButton = false;
                // this.showServiceDetails = true
                // this.showRating = false
                // this.showContact = false
                // this.serviceDetails.total_service_contact = 1
            }
            else {
                _this.presentAlert('', _this.commitResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in commit service: ' + JSON.stringify(error));
        });
        // }
    };
    ServicereviewPage.prototype.rate = function (index) {
        if (this.rateFlag) {
            this.presentAlert("", "You have already rated for this service");
            return;
        }
        else {
            this.rating = index;
            this.ratingChange.emit(this.rating);
        }
        // if (this.rateFlag != null) {
        // this.presentAlert("", "You have already rated for this service")
        // return
        // } else {
        // this.rating = index;
        // this.ratingChange.emit(this.rating)
        // }
    };
    ServicereviewPage.prototype.getColor = function (index) {
        if (this.isAboveRating(index)) {
            return COLORS.GREY;
        }
        switch (this.rating) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                return COLORS.BLUE;
        }
    };
    ServicereviewPage.prototype.isAboveRating = function (index) {
        return index > this.rating;
    };
    ServicereviewPage.prototype.submitRating = function () {
        var _this = this;
        if (this.rating != null) {
            this.dataServices.rateForService(this.serviceId, this.serviceProviderId, this.userId, this.rating).then(function (result) {
                _this.ratingResponse = result;
                _this.loadingController.dismiss();
                if (_this.ratingResponse.status == 1) {
                    _this.presentAlert('', _this.ratingResponse.message);
                    _this.rateFlag = true;
                    // this.showServiceDetails = true
                    // this.showContact = false
                    // this.showRating = false
                    _this.ratingButton = false;
                    // this.serviceDetails.total_service_contact = 1
                    // this.rateFlag = 1
                }
                else {
                    _this.presentAlert('', _this.ratingResponse.message);
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log('Error in commit service: ' + JSON.stringify(error));
            });
        }
        else {
            this.errorAlert("", "please rate service");
            return;
        }
    };
    ServicereviewPage.prototype.closePage = function () {
        this.location.back();
        // if (this.navFromServiceDetails != 'true') {
        //   this.router.navigate(['/searchjobdetail', { jobId: this.jobId, navFromServiceReview: true }],{skipLocationChange: true})
        // } else {
        //   this.router.navigate(['/servicedetails', { serviceId: this.serviceId }],{skipLocationChange: true})
        // }
    };
    ServicereviewPage.prototype.presentLoading = function () {
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
                        }, 600);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    ServicereviewPage.prototype.presentAlert = function (title, message) {
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
                                        _this.closePage();
                                        // this.router.navigate(['/searchservices'])
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
    ServicereviewPage.prototype.errorAlert = function (title, message) {
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
                                        if (title != 0) {
                                        }
                                        // this.router.navigate(['/searchservices'])
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
    ServicereviewPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ServicereviewPage.prototype, "rating", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], ServicereviewPage.prototype, "ratingChange", void 0);
    ServicereviewPage = tslib_1.__decorate([
        Component({
            selector: 'app-servicereview',
            templateUrl: './servicereview.page.html',
            styleUrls: ['./servicereview.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            DataservicesService,
            LoadingController,
            AlertController,
            Location])
    ], ServicereviewPage);
    return ServicereviewPage;
}());
export { ServicereviewPage };
//# sourceMappingURL=servicereview.page.js.map