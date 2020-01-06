(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trackjobsjobseeker-trackjobsjobseeker-module"],{

/***/ "./src/app/trackjobsjobseeker/trackjobsjobseeker.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/trackjobsjobseeker/trackjobsjobseeker.module.ts ***!
  \*****************************************************************/
/*! exports provided: TrackjobsjobseekerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackjobsjobseekerPageModule", function() { return TrackjobsjobseekerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trackjobsjobseeker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trackjobsjobseeker.page */ "./src/app/trackjobsjobseeker/trackjobsjobseeker.page.ts");







var routes = [
    {
        path: '',
        component: _trackjobsjobseeker_page__WEBPACK_IMPORTED_MODULE_6__["TrackjobsjobseekerPage"]
    }
];
var TrackjobsjobseekerPageModule = /** @class */ (function () {
    function TrackjobsjobseekerPageModule() {
    }
    TrackjobsjobseekerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_trackjobsjobseeker_page__WEBPACK_IMPORTED_MODULE_6__["TrackjobsjobseekerPage"]]
        })
    ], TrackjobsjobseekerPageModule);
    return TrackjobsjobseekerPageModule;
}());



/***/ }),

/***/ "./src/app/trackjobsjobseeker/trackjobsjobseeker.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/trackjobsjobseeker/trackjobsjobseeker.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" class=\"new-background-color\">\n      <ion-title class=\"headerNameCss\">\n        Track Jobs\n      </ion-title>\n      <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\" aria-label=\"notifications button\" alt=\"notifications button\"></ion-icon>\n      <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n    </ion-item>\n  </ion-toolbar>\n  <div class=\"divPadding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label class=\"jobNameCss\">{{track_job_list_length}} Jobs</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n<ion-content>\n\n  <div *ngIf=\"trackJobData\">\n    <ion-card *ngFor=\"let item of track_job_list;\" class=\"cardMargins\">\n      <ion-card-content>\n        <ion-list>\n          <ion-row>\n            <ion-col size=\"10\" (click)=\"jobDescription(item.id)\">\n              <ion-row>\n                <!-- <ion-col size=\"11\"> -->\n                <ion-label class=\"jobNameCss\">{{item.name}}</ion-label>\n                <!-- </ion-col> -->\n              </ion-row>\n              <ion-row>\n                <ion-label class=\"companyNameCss\">{{item.company_name}}\n                </ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-img src=\"../../assets/img/experience.png\" class=\"experienceAndLocationPng\">\n                  </ion-img>\n                </ion-col>\n                <ion-col size=\"11\">\n                  <ion-label>{{item.min_experience}} - {{item.max_experience}} years</ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-img src=\"../../assets/img/location.png\" class=\"experienceAndLocationPng\">\n                  </ion-img>\n                </ion-col>\n                <ion-col size=\"11\">\n                  <ion-label>{{item.location_name}}</ion-label>\n                  <br>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-label><i>Posted: {{item.posted_age}}</i></ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-label><b>{{item.status}}</b></ion-label>\n              </ion-row>\n\n            </ion-col>\n            <!-- <ion-col size=\"2\">\n              <ion-icon ios=\"ios-heart\" md=\"md-heart\" class=\"iconcss\" style=\"float:right;color:#2b0c43;\"></ion-icon>\n            </ion-col> -->\n\n          </ion-row>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"!trackJobData\">\n    <h5 align=\"center\">No jobs for tracking</h5>\n  </div>\n\n  <br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <!-- \n  <ion-card style=\"height:8%\" class=\"cardMargins\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label  class=\"headerNameCss\">20 Job Application</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor=\"let item of trackJobsArray; let j = index\" class=\"cardMargins\">\n    <ion-card-content >\n      <ion-list >\n        <ion-row (click)=\"jobDescription()\" >\n          <ion-col size=\"10\">\n          <ion-label style=\"font-size: 18px;color:black;\">{{item.title}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon name=\"heart-empty\" style=\"margin-top: 6px; height: 20px; width : 20px; \"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-label style=\"font-size: 16px;color:black; padding :5px\">{{item.company}}</ion-label></ion-row>\n        <ion-row style=\"padding:5px\">\n        <ion-img src=\"../../assets/img/experience.png\"  style=\"width:15px; height:15px;;\"></ion-img>&nbsp;&nbsp;\n        <ion-label style=\"font-size: 15px;color:black; margin-top:-1px;\">{{item.minexp}} - </ion-label>\n        <ion-label style=\"font-size: 15px;color:black; margin-top:-1px\">{{item.maxexp}} years</ion-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <ion-img src=\"../../assets/img/location.png\"  style=\"width:15px; height:15px; \"></ion-img>&nbsp;&nbsp;\n        <ion-label style=\"font-size: 15px;color:black ; margin-top:-3px\">{{item.location}}</ion-label><br>\n      </ion-row>\n      <ion-item style=\"--min-height:0px\"></ion-item>\n      <ion-row>\n        <ion-col size=\"9\">\n        <ion-label style=\"font-size: 15px;color:black;\">Resume Viewed by Employer</ion-label>\n      </ion-col>\n        <ion-col size=\"3\">\n        <ion-label style=\"font-size: 15px;color:black;\">3 hrs ago</ion-label>\n      </ion-col>\n      </ion-row>\n         </ion-list>\n    </ion-card-content>\n  </ion-card> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/trackjobsjobseeker/trackjobsjobseeker.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/trackjobsjobseeker/trackjobsjobseeker.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".companyNameCss {\n  font-size: 16px;\n  color: #2b0c43; }\n\n.jobNameCss {\n  font-size: 18px;\n  color: #2b0c43; }\n\n.divPadding {\n  padding: 3% 5% 0% 5%;\n  border-bottom: 1px solid #807b7b5e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC90cmFja2pvYnNqb2JzZWVrZXIvdHJhY2tqb2Jzam9ic2Vla2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQWU7RUFDZixjQUFhLEVBQUE7O0FBTWY7RUFDRSxlQUFlO0VBQ2YsY0FBYSxFQUFBOztBQUdmO0VBQ0Usb0JBQW9CO0VBQ3BCLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJhY2tqb2Jzam9ic2Vla2VyL3RyYWNram9ic2pvYnNlZWtlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueU5hbWVDc3N7XG5cbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IzJiMGM0MzsgXG4gICAgLy8gcGFkZGluZyA6NXB4O1xuICAgIC8vIG1hcmdpbi10b3A6LTEwcHg7XG4gICBcbiAgfVxuXG4gIC5qb2JOYW1lQ3Nze1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjojMmIwYzQzO1xuICB9XG5cbiAgLmRpdlBhZGRpbmd7XG4gICAgcGFkZGluZzogMyUgNSUgMCUgNSU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDdiN2I1ZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/trackjobsjobseeker/trackjobsjobseeker.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/trackjobsjobseeker/trackjobsjobseeker.page.ts ***!
  \***************************************************************/
/*! exports provided: TrackjobsjobseekerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackjobsjobseekerPage", function() { return TrackjobsjobseekerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");







var TrackjobsjobseekerPage = /** @class */ (function () {
    function TrackjobsjobseekerPage(router, dataServices, alertCtrl, loadingController, tts, mobileAccessibility) {
        // this.onPageLoad()
        this.router = router;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.trackJobList = [];
        this.offset = 0;
        this.track_job_list = [];
        this.trackJobData = true;
    }
    TrackjobsjobseekerPage.prototype.ngOnInit = function () {
    };
    TrackjobsjobseekerPage.prototype.ionViewWillEnter = function () {
        this.users_id = localStorage.getItem('users_id');
        if (this.users_id == '' || this.users_id == null || this.users_id == undefined || this.users_id == 0) {
            this.users_id = 0;
        }
        this.offset = 0;
        this.track_job_list = [];
        this.getTrackJobList();
        this.getNotificationBadgeCount();
    };
    TrackjobsjobseekerPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Track Jobs Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    TrackjobsjobseekerPage.prototype.onPageLoad = function () {
    };
    TrackjobsjobseekerPage.prototype.getNotificationBadgeCount = function () {
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
    TrackjobsjobseekerPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    //Function for get list of track jobs
    TrackjobsjobseekerPage.prototype.getTrackJobList = function () {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.trackjoblist(this.users_id, this.offset).then(function (result) {
            _this.trackJobResponse = result;
            if (_this.trackJobResponse.status == 1) {
                _this.track_job_list = _this.track_job_list.concat(_this.trackJobResponse.job_applied_list);
                _this.track_job_list_length = _this.trackJobResponse.job_applied_total_count;
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (_this.track_job_list_length < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.track_job_list_length == 0) {
                    _this.trackJobData = false;
                }
                else {
                    _this.trackJobData = true;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.trackJobResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    TrackjobsjobseekerPage.prototype.jobDescription = function (item) {
        this.router.navigate(['/searchjobdetail', { jobId: item }]);
    };
    TrackjobsjobseekerPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.track_job_list_length) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getTrackJobList();
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    //Display loader 
    TrackjobsjobseekerPage.prototype.presentLoading = function () {
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
    TrackjobsjobseekerPage.prototype.presentAlert = function (title, message) {
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
    TrackjobsjobseekerPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    TrackjobsjobseekerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trackjobsjobseeker',
            template: __webpack_require__(/*! ./trackjobsjobseeker.page.html */ "./src/app/trackjobsjobseeker/trackjobsjobseeker.page.html"),
            styles: [__webpack_require__(/*! ./trackjobsjobseeker.page.scss */ "./src/app/trackjobsjobseeker/trackjobsjobseeker.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_2__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_5__["MobileAccessibility"]])
    ], TrackjobsjobseekerPage);
    return TrackjobsjobseekerPage;
}());



/***/ })

}]);
//# sourceMappingURL=trackjobsjobseeker-trackjobsjobseeker-module.js.map