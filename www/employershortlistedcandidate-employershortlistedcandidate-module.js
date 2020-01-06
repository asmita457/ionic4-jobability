(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employershortlistedcandidate-employershortlistedcandidate-module"],{

/***/ "./src/app/employershortlistedcandidate/employershortlistedcandidate.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/employershortlistedcandidate/employershortlistedcandidate.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EmployershortlistedcandidatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployershortlistedcandidatePageModule", function() { return EmployershortlistedcandidatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employershortlistedcandidate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employershortlistedcandidate.page */ "./src/app/employershortlistedcandidate/employershortlistedcandidate.page.ts");







var routes = [
    {
        path: '',
        component: _employershortlistedcandidate_page__WEBPACK_IMPORTED_MODULE_6__["EmployershortlistedcandidatePage"]
    }
];
var EmployershortlistedcandidatePageModule = /** @class */ (function () {
    function EmployershortlistedcandidatePageModule() {
    }
    EmployershortlistedcandidatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employershortlistedcandidate_page__WEBPACK_IMPORTED_MODULE_6__["EmployershortlistedcandidatePage"]]
        })
    ], EmployershortlistedcandidatePageModule);
    return EmployershortlistedcandidatePageModule;
}());



/***/ }),

/***/ "./src/app/employershortlistedcandidate/employershortlistedcandidate.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/employershortlistedcandidate/employershortlistedcandidate.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" class=\"new-background-color\">\n      <ion-title>\n        Shortlisted Candidates\n      </ion-title>\n      <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\"></ion-icon>\n      <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n    </ion-item>\n\n  </ion-toolbar>\n  <div class=\"divPadding\" style=\"padding:3% 5% 0% 1%\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label style=\"color:#2b0c43\">{{shortlistedCandidateCount}} Resumes</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n\n\n<ion-content class=\"viewpost\">\n\n\n  <div *ngIf=\"showCandidatesList\" class=\"headerNameCss\">\n    <ion-card class=\"cardMargins\" *ngFor=\"let item of shortlistedCandidateData\" (click)=\"candidateProfileDetails(item)\"\n      style=\"margin-top:5px\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-label class=\"headingLabel\">Name:</ion-label><br>\n            <ion-label class=\"itemcss\">{{item.first_name}}</ion-label><br>\n\n\n            <ion-label class=\"headingLabel\">Company Name:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.company_name}}</ion-label><br>\n\n            <ion-label class=\"headingLabel\">Designation:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.designation}}</ion-label><br>\n\n            <!-- <ion-label *ngIf=\"item.designation!=÷ null && item.designation != '' \" class=\"itemcss\">{{item.designation}} , {{item.company_name}}</ion-label> -->\n\n            <ion-row lines=\"none\" class=\"inoItem itemcss\">\n              <ion-img src=\"../../assets/img/experience.png\"\n                style=\"width:15px; height:15px;margin-right:10px; margin-top:3px\">\n              </ion-img>\n              <ion-label class=\"ionimgcss itemcss\">{{item.years_total_experience}} years</ion-label>\n            </ion-row>\n\n            <ion-row lines=\"none\" class=\"inoItem itemcss\">\n              <ion-img src=\"../../assets/img/location.png\"\n                style=\"width:15px; height:15px;margin-right:10px; margin-top:3px\"></ion-img>\n              <ion-label class=\"itemcss\">{{item.location_name}}</ion-label>\n            </ion-row>\n\n            <ion-label class=\"headingLabel\">Disability Type:</ion-label><br>\n            <ion-label style=\"margin-top:-5px;\" class=\"itemcss\">{{item.disability_name}}</ion-label><br>\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <div class=\"profile-picture big-profile-picture\">\n              <img *ngIf=\"item.profile_photo_path!=''\" aria-label=\"profile picture\" src=\"{{item.profile_photo_path}}\">\n              <img *ngIf=\"item.profile_photo_path==''\" aria-label=\"profile picture\"\n                src=\"../../assets/img/profileimage.png\">\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-card class=\"cardMargins\" *ngIf=\"!showCandidatesList\">\n    <ion-card-content>\n      <span class=\"ion-text-center\" style=\"font-size: x-large;color:#2b0c43;\">Oops! No Shortlisted Candidates.</span>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/employershortlistedcandidate/employershortlistedcandidate.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/employershortlistedcandidate/employershortlistedcandidate.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBsb3llcnNob3J0bGlzdGVkY2FuZGlkYXRlL2VtcGxveWVyc2hvcnRsaXN0ZWRjYW5kaWRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ2MsY0FBYTtFQUNiLGVBQWM7RUFDZCxpQkFBZ0IsRUFBQTs7QUFHaEI7RUFDQSxlQUFjO0VBQ2QsY0FBYTtFQUNiLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZXJzaG9ydGxpc3RlZGNhbmRpZGF0ZS9lbXBsb3llcnNob3J0bGlzdGVkY2FuZGlkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nTGFiZWx7XG4gICAgICAgICAgICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuY29udGVudEluZm97XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgICAgICAgICAgICBjb2xvcjojMmIwYzQzO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/employershortlistedcandidate/employershortlistedcandidate.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/employershortlistedcandidate/employershortlistedcandidate.page.ts ***!
  \***********************************************************************************/
/*! exports provided: EmployershortlistedcandidatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployershortlistedcandidatePage", function() { return EmployershortlistedcandidatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    EmployershortlistedcandidatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employershortlistedcandidate',
            template: __webpack_require__(/*! ./employershortlistedcandidate.page.html */ "./src/app/employershortlistedcandidate/employershortlistedcandidate.page.html"),
            styles: [__webpack_require__(/*! ./employershortlistedcandidate.page.scss */ "./src/app/employershortlistedcandidate/employershortlistedcandidate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EmployershortlistedcandidatePage);
    return EmployershortlistedcandidatePage;
}());



/***/ })

}]);
//# sourceMappingURL=employershortlistedcandidate-employershortlistedcandidate-module.js.map