(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["savedjobs-savedjobs-module"],{

/***/ "./src/app/savedjobs/savedjobs.module.ts":
/*!***********************************************!*\
  !*** ./src/app/savedjobs/savedjobs.module.ts ***!
  \***********************************************/
/*! exports provided: SavedjobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedjobsPageModule", function() { return SavedjobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _savedjobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./savedjobs.page */ "./src/app/savedjobs/savedjobs.page.ts");







var routes = [
    {
        path: '',
        component: _savedjobs_page__WEBPACK_IMPORTED_MODULE_6__["SavedjobsPage"]
    }
];
var SavedjobsPageModule = /** @class */ (function () {
    function SavedjobsPageModule() {
    }
    SavedjobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_savedjobs_page__WEBPACK_IMPORTED_MODULE_6__["SavedjobsPage"]]
        })
    ], SavedjobsPageModule);
    return SavedjobsPageModule;
}());



/***/ }),

/***/ "./src/app/savedjobs/savedjobs.page.html":
/*!***********************************************!*\
  !*** ./src/app/savedjobs/savedjobs.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" class=\"new-background-color\">\n      <ion-title class=\"headerNameCss\">\n        Saved Jobs\n      </ion-title>\n      <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\" aria-label=\"notifications button\" alt=\"notifications button\"></ion-icon>\n      <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n    </ion-item>\n  </ion-toolbar>\n\n  <div class=\"divPadding\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-label class=\"jobNameCss\">{{savedJobListLength}} Jobs</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n<ion-content>\n  <!-- <h5 align=\"center\" style=\"margin-top:50%\">Coming Soon...!</h5> -->\n  <div *ngIf=\"showSearchData\">\n    <ion-card *ngFor=\"let item of saved_job_list; let j = index\" class=\"cardMargins\">\n      <ion-card-content>\n        <ion-list>\n          <ion-row>\n            <ion-col size=\"10\" (click)=\"jobDescription(item)\">\n              <ion-row>\n                <!-- <ion-col size=\"11\"> -->\n                <ion-label class=\"jobNameCss\">{{item.name}}</ion-label>\n                <!-- </ion-col> -->\n              </ion-row>\n              <ion-row>\n                <ion-label class=\"companyNameCss\">{{item.company_name}}\n                </ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-img src=\"../../assets/img/experience.png\" class=\"experienceAndLocationPng\">\n                  </ion-img>\n                </ion-col>\n                <ion-col size=\"11\">\n                  <ion-label>{{item.min_experience}} - {{item.max_experience}} years</ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-img src=\"../../assets/img/location.png\" class=\"experienceAndLocationPng\">\n                  </ion-img>\n                </ion-col>\n                <ion-col size=\"11\">\n                  <ion-label>{{item.location_name}}</ion-label>\n                  <br>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-label> <i>Posted: {{item.posted_age}}</i></ion-label>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-icon (click)=\"saveOrRemoveJob(item.id)\" aria-label=\"job saved\" ios=\"ios-heart\" md=\"md-heart\" class=\"iconcss fillHeart\">\n              </ion-icon>\n            </ion-col>\n\n          </ion-row>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"!showSearchData\">\n    <h5 align=\"center\">No saved jobs</h5>\n  </div>\n\n  <br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/savedjobs/savedjobs.page.scss":
/*!***********************************************!*\
  !*** ./src/app/savedjobs/savedjobs.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jobNameCss {\n  font-size: 18px;\n  color: #2b0c43; }\n\n.divPadding {\n  padding: 3% 5% 0% 5%;\n  border-bottom: 1px solid #807b7b5e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9zYXZlZGpvYnMvc2F2ZWRqb2JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYSxFQUFBOztBQUdmO0VBQ0Usb0JBQW9CO0VBQ3BCLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2F2ZWRqb2JzL3NhdmVkam9icy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAucHJvZmlsZS1waWN0dXJlIHtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuLy8gICAgIHBhZGRpbmc6IDNweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgICBtYXJnaW46IDUlIGF1dG87XG4vLyAgICAgd2lkdGg6IDEwMHB4O1xuLy8gICAgIGhlaWdodDogMTAwcHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgIFxuLy8gICB9XG5cbiAgLy8gLmNhbWVyYUljb257XG4gIC8vICAgem9vbTogMi4wO1xuICAvLyAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAvLyB9XG4gIC8vIC5maWxlSWNvbntcbiAgLy8gICB6b29tOiAyLjA7XG4gIC8vICAgbWFyZ2luLXRvcDogLTMlO1xuICAgXG4gIC8vIH1cblxuICAgIC8vIFRvIGRpc3BheSBjYXJtZXJhIGljb24gb3ZlciBwcm9maWxlIHBpY3R1cmVcbiAgLy8gLmNhbWVyYUJhY2dyb3VuZHtcbiAgLy8gICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAvLyAgIHBhZGRpbmc6IDRweDtcbiAgLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAvLyAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC8vICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLy8gICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLy8gICB3aWR0aDogMzBweDtcbiAgLy8gICBoZWlnaHQ6IDMwcHg7XG4gIC8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gICBiYWNrZ3JvdW5kOiAjZTZlMmUyO1xuICAvLyAgIG1hcmdpbi1sZWZ0OiA1MyU7XG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyB9XG5cbiAgLy8gVG8gQ2hhbmdlIHRoZSBwb3NpdG9uIG9mIHBsdXMgaWNvblxuLy8gLmZsb2F0UmlnaHR7XG4vLyAgICAgZmxvYXQ6cmlnaHQ7XG4vLyAgICAgem9vbTogMS41O1xuLy8gfVxuXG4vLyAuY2FyZFBhZGRpbmd7XG4vLyAgICAgcGFkZGluZy10b3A6IDVweDtcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIFxuLy8gfVxuXG4vLyAuY2FyZE1hcmdpbnN7XG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuLy8gfVxuXG4vLyAuYmFja25hdmlnYXRpb257XG4vLyAgIHdpZHRoOjI1cHg7IFxuLy8gICBoZWlnaHQ6MTVweDsgXG4vLyAgIG1hcmdpbi10b3A6IDEyLjVweDtcbi8vIH1cbi8vIC5zZWFyY2hjYXJke1xuLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vIH1cblxuLy8gLmNvbnRlbnRjc3N7XG4vLyAgIGZvbnQtc2l6ZTogMTVweDtcbi8vICAgY29sb3I6YmxhY2s7XG4vLyAgICBwYWRkaW5nIDo1cHg7XG4vLyB9XG5cbi8vIC5pb25pbWdjc3N7XG4vLyAgIHdpZHRoOjE1cHg7IFxuLy8gICBoZWlnaHQ6MTVweDtcbi8vIH1cblxuXG4uam9iTmFtZUNzc3tcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjojMmIwYzQzO1xufVxuXG4uZGl2UGFkZGluZ3tcbiAgcGFkZGluZzogMyUgNSUgMCUgNSU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA3YjdiNWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/savedjobs/savedjobs.page.ts":
/*!*********************************************!*\
  !*** ./src/app/savedjobs/savedjobs.page.ts ***!
  \*********************************************/
/*! exports provided: SavedjobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedjobsPage", function() { return SavedjobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");







var SavedjobsPage = /** @class */ (function () {
    function SavedjobsPage(router, dataServices, activatedRoute, loadingController, alertCtrl, tts, mobileAccessibility) {
        this.router = router;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.savedJobsArray = [];
        this.showSearchData = true;
        this.saved_job_list = [];
        this.offset = 0;
    }
    SavedjobsPage.prototype.ngOnInit = function () {
    };
    SavedjobsPage.prototype.ionViewWillEnter = function () {
        this.offset = 0;
        this.saved_job_list = [];
        this.users_id = localStorage.getItem('users_id');
        this.savejobCount = (this.activatedRoute.snapshot.paramMap.get('count'));
        if (this.users_id == '' || this.users_id == null || this.users_id == undefined) {
            this.users_id = 0;
        }
        if (this.savejobCount != '0' || this.savejobCount != 0) {
            this.getSavedJobList();
        }
        else {
            this.showSearchData = false;
        }
        this.getNotificationBadgeCount();
    };
    SavedjobsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Saved Jobs Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    SavedjobsPage.prototype.getNotificationBadgeCount = function () {
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
    SavedjobsPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    // Function For Load Data While Scrolling
    SavedjobsPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.savedJobListLength) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getSavedJobList();
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    SavedjobsPage.prototype.jobDescription = function (item) {
        console.log('id: ' + item.id);
        this.router.navigate(['/searchjobdetail', { jobId: item.id }]);
    };
    SavedjobsPage.prototype.getSavedJobList = function () {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getSavedJobsData(this.users_id, this.offset).then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.saved_job_list = _this.saved_job_list.concat(_this.resultData.saved_job_list);
                _this.savedJobListLength = _this.resultData.save_job_total_count;
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (_this.savedJobListLength < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.savedJobListLength == 0) {
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
    SavedjobsPage.prototype.saveOrRemoveJob = function (jobId) {
        var _this = this;
        var val = jobId;
        this.presentLoading();
        this.dataServices.saveOrRemoveJob(jobId, this.users_id).then(function (res) {
            _this.resultData = res;
            if (_this.resultData.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert("", _this.resultData.message);
                ///this.getSavedJobList()
                var index = _this.saved_job_list.findIndex(function (item, i) {
                    return item.id === val;
                });
                if (index > -1) {
                    _this.saved_job_list.splice(index, 1);
                    _this.savedJobListLength = _this.savedJobListLength - 1;
                    if (_this.savedJobListLength == 0) {
                        _this.showSearchData = false;
                    }
                }
            }
            else {
                _this.presentAlert("", _this.resultData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log(error);
        });
    };
    //Display loader 
    SavedjobsPage.prototype.presentLoading = function () {
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
    SavedjobsPage.prototype.presentAlert = function (title, message) {
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
    SavedjobsPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    SavedjobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-savedjobs',
            template: __webpack_require__(/*! ./savedjobs.page.html */ "./src/app/savedjobs/savedjobs.page.html"),
            styles: [__webpack_require__(/*! ./savedjobs.page.scss */ "./src/app/savedjobs/savedjobs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_5__["MobileAccessibility"]])
    ], SavedjobsPage);
    return SavedjobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=savedjobs-savedjobs-module.js.map