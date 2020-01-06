(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicereview-servicereview-module"],{

/***/ "./src/app/servicereview/servicereview.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/servicereview/servicereview.module.ts ***!
  \*******************************************************/
/*! exports provided: ServicereviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicereviewPageModule", function() { return ServicereviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicereview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicereview.page */ "./src/app/servicereview/servicereview.page.ts");







var routes = [
    {
        path: '',
        component: _servicereview_page__WEBPACK_IMPORTED_MODULE_6__["ServicereviewPage"]
    }
];
var ServicereviewPageModule = /** @class */ (function () {
    function ServicereviewPageModule() {
    }
    ServicereviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_servicereview_page__WEBPACK_IMPORTED_MODULE_6__["ServicereviewPage"]]
        })
    ], ServicereviewPageModule);
    return ServicereviewPageModule;
}());



/***/ }),

/***/ "./src/app/servicereview/servicereview.page.html":
/*!*******************************************************!*\
  !*** ./src/app/servicereview/servicereview.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-item lines=\"none\" class=\"new-background-color\">\n      <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n      <ion-title *ngIf=\"showCommnet\" style=\"margin-left: 5%; color: #2b0c43\">Comment</ion-title>\n      <ion-title *ngIf=\"!showCommnet\" style=\"margin-left: 5%; color: #2b0c43\">Rate for Service</ion-title>\n\n    </ion-item>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"showCommnet\" class=\"divCenter\" style=\"height: 100% !important;\">\n    <div class=\"divCenter\" style=\"height: 70% !important;\">\n\n      <ion-card class=\"cardMargins\">\n        <ion-card-header class=\"profileCardHeader\">\n          <!-- <ion-grid class=\"cardPadding\"> -->\n          <!-- <ion-label class=\"cardHeadings\">Comment:</ion-label>\n          <br>\n          <br>\n          <ion-item>\n            <ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\n          </ion-item> -->\n\n          <ion-item lines=\"none\">\n            <ion-label class=\"headerNameCss\" position=\"floating\"\n              [ngClass]=\"{'redlabel' : showCommentErrorMsg == true, 'blacklabel' : showCommentErrorMsg == false}\">\n              Comment</ion-label>\n            <ion-textarea rows=\"6\" [(ngModel)]=\"Comment\" (ionChange)=\"validationForComment()\" required></ion-textarea>\n          </ion-item>\n          <br *ngIf=\"showCommentErrorMsg\">\n          <ion-item>\n            <p *ngIf=\"showCommentErrorMsg\" class=\"redlabel\">Please enter comment</p>\n          </ion-item>\n          <!-- </ion-grid> -->\n        </ion-card-header>\n\n\n      </ion-card>\n      <br><br>\n      <div class=\"saveButtonPadding\" *ngIf=\"showCommitButton\">\n        <button class=\"buttonfont\" (click)=\"Submit()\">Submit</button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!showCommnet\" class=\"divCenter\">\n    <ion-card class=\"cardMargins\">\n      <ion-card-header class=\"profileCardHeader\" style=\"padding: 2% !important; font-size: large;\">\n        <!-- <ion-label > -->\n        <div text-center>Rate Service\n        </div>\n        <!-- </ion-label> -->\n      </ion-card-header>\n      <ion-card-content style=\"padding-top: 5% !important;\">\n        <div text-center>\n          <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\" (click)=\"rate(num)\" [ngStyle]=\"{'color':getColor(num)}\"\n            style=\"font-size: -webkit-xxx-large;\"></ion-icon>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <br>\n    <div class=\"saveButtonPadding\" *ngIf=\"ratingButton\">\n      <button class=\"buttonfont\" (click)=\"submitRating()\">Submit</button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/servicereview/servicereview.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/servicereview/servicereview.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divCenter {\n  height: 50%;\n  width: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9zZXJ2aWNlcmV2aWV3L3NlcnZpY2VyZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcmV2aWV3L3NlcnZpY2VyZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdkNlbnRlcntcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAxMCU7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/servicereview/servicereview.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/servicereview/servicereview.page.ts ***!
  \*****************************************************/
/*! exports provided: COLORS, ServicereviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicereviewPage", function() { return ServicereviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var COLORS;
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
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
                setTimeout(function (_) {
                    _this.presentAlert('', _this.commitResponse.message);
                }, 500);
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
                _this.showCommitButton = false;
                setTimeout(function (_) {
                    _this.presentAlert('', _this.commitResponse.message);
                }, 500);
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
                    _this.rateFlag = true;
                    // this.showServiceDetails = true
                    // this.showContact = false
                    // this.showRating = false
                    _this.ratingButton = false;
                    // this.serviceDetails.total_service_contact = 1
                    // this.rateFlag = 1
                    setTimeout(function (_) {
                        _this.presentAlert('', _this.ratingResponse.message);
                    }, 500);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ServicereviewPage.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ServicereviewPage.prototype, "ratingChange", void 0);
    ServicereviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicereview',
            template: __webpack_require__(/*! ./servicereview.page.html */ "./src/app/servicereview/servicereview.page.html"),
            styles: [__webpack_require__(/*! ./servicereview.page.scss */ "./src/app/servicereview/servicereview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], ServicereviewPage);
    return ServicereviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicereview-servicereview-module.js.map