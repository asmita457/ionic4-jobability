(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommendedjobs-recommendedjobs-module"],{

/***/ "./src/app/recommendedjobs/recommendedjobs.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/recommendedjobs/recommendedjobs.module.ts ***!
  \***********************************************************/
/*! exports provided: RecommendedjobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedjobsPageModule", function() { return RecommendedjobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recommendedjobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recommendedjobs.page */ "./src/app/recommendedjobs/recommendedjobs.page.ts");







var routes = [
    {
        path: '',
        component: _recommendedjobs_page__WEBPACK_IMPORTED_MODULE_6__["RecommendedjobsPage"]
    }
];
var RecommendedjobsPageModule = /** @class */ (function () {
    function RecommendedjobsPageModule() {
    }
    RecommendedjobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recommendedjobs_page__WEBPACK_IMPORTED_MODULE_6__["RecommendedjobsPage"]]
        })
    ], RecommendedjobsPageModule);
    return RecommendedjobsPageModule;
}());



/***/ }),

/***/ "./src/app/recommendedjobs/recommendedjobs.page.html":
/*!***********************************************************!*\
  !*** ./src/app/recommendedjobs/recommendedjobs.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" class=\"new-background-color\">\n      <ion-title class=\"headerNameCss\">\n        Recommended Jobs\n      </ion-title>\n      <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\" aria-label=\"notifications button\" alt=\"notifications button\"></ion-icon>\n      <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n    </ion-item>\n  </ion-toolbar>\n\n  <div class=\"divPadding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label class=\"jobNameCss\">{{recommendedJobsLength}} Jobs</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n\n<ion-content>\n\n  <!-- <h5 align=\"center\" style=\"margin-top:50%\">Coming Soon...!</h5> -->\n  <div *ngIf=\"showSearchData\">\n    <ion-card *ngFor=\"let item of recommendedJobsArray; let j = index\" class=\"cardMargins\">\n      <ion-card-content>\n        <ion-list>\n          <ion-row>\n            <ion-col size=\"10\" (click)=\"jobDescription(item)\">\n\n              <ion-row>\n                <ion-label class=\"jobNameCss\">{{item.name}}</ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-label class=\"companyNameCss\">{{item.company_name}}\n                </ion-label>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-img src=\"../../assets/img/experience.png\" class=\"experienceAndLocationPng\">\n                  </ion-img>\n                </ion-col>\n                <ion-col size=\"11\">\n                  <ion-label class=\"ionimgcss\">{{item.min_experience}} - {{item.max_experience}} years</ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-img src=\"../../assets/img/location.png\" class=\"experienceAndLocationPng\">\n                  </ion-img>\n                </ion-col>\n                <ion-col size=\"11\">\n                  <ion-label class=\"ionimgcss\">{{item.location_name}}</ion-label>\n                  <br>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-label class=\"ionimgcss\"><i>Posted: {{item.posted_age}}</i></ion-label>\n              </ion-row>\n\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-col size=\"2\">\n                <ion-icon *ngIf=\"item.job_saved_flag != 1\" (click)=\"saveJob(item.id)\"  aria-label=\"save job\"  name=\"heart-empty\"\n                  class=\"iconcss emptyHeart\"></ion-icon>\n                <ion-icon *ngIf=\"item.job_saved_flag == 1\" (click)=\"saveJob(item.id)\" aria-label=\"job saved\" ios=\"ios-heart\" md=\"md-heart\"\n                  class=\"iconcss fillHeart\"></ion-icon>\n              </ion-col>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n  <div *ngIf=\"!showSearchData\">\n    <h5 align=\"center\">No Recommended Jobs</h5>\n  </div>\n  <br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/recommendedjobs/recommendedjobs.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/recommendedjobs/recommendedjobs.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jobNameCss {\n  font-size: 18px;\n  color: #2b0c43; }\n\n.divPadding {\n  padding: 3% 5% 0% 5%;\n  border-bottom: 1px solid #807b7b5e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9yZWNvbW1lbmRlZGpvYnMvcmVjb21tZW5kZWRqb2JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQWU7RUFDZixjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksb0JBQW9CO0VBQ3BCLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVjb21tZW5kZWRqb2JzL3JlY29tbWVuZGVkam9icy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmpvYk5hbWVDc3N7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiMyYjBjNDM7XG59XG5cbi5kaXZQYWRkaW5ne1xuICAgIHBhZGRpbmc6IDMlIDUlIDAlIDUlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA3YjdiNWU7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/recommendedjobs/recommendedjobs.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/recommendedjobs/recommendedjobs.page.ts ***!
  \*********************************************************/
/*! exports provided: RecommendedjobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedjobsPage", function() { return RecommendedjobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");








var RecommendedjobsPage = /** @class */ (function () {
    function RecommendedjobsPage(router, dataServices, activatedRoute, loadingController, alertCtrl, tts, mobileAccessibility) {
        this.router = router;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
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
    RecommendedjobsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Recommended Jobs Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
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
    RecommendedjobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommendedjobs',
            template: __webpack_require__(/*! ./recommendedjobs.page.html */ "./src/app/recommendedjobs/recommendedjobs.page.html"),
            styles: [__webpack_require__(/*! ./recommendedjobs.page.scss */ "./src/app/recommendedjobs/recommendedjobs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_5__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__["MobileAccessibility"]])
    ], RecommendedjobsPage);
    return RecommendedjobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=recommendedjobs-recommendedjobs-module.js.map