(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboardjobseeker-dashboardjobseeker-module"],{

/***/ "./src/app/dashboardjobseeker/dashboardjobseeker.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboardjobseeker/dashboardjobseeker.module.ts ***!
  \*****************************************************************/
/*! exports provided: dashboardjobseekerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardjobseekerPageModule", function() { return dashboardjobseekerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboardjobseeker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboardjobseeker.page */ "./src/app/dashboardjobseeker/dashboardjobseeker.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _dashboardjobseeker_page__WEBPACK_IMPORTED_MODULE_6__["dashboardjobseekerPage"]
    }
];
var dashboardjobseekerPageModule = /** @class */ (function () {
    function dashboardjobseekerPageModule() {
    }
    dashboardjobseekerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboardjobseeker_page__WEBPACK_IMPORTED_MODULE_6__["dashboardjobseekerPage"]]
        })
    ], dashboardjobseekerPageModule);
    return dashboardjobseekerPageModule;
}());



/***/ }),

/***/ "./src/app/dashboardjobseeker/dashboardjobseeker.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboardjobseeker/dashboardjobseeker.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button class=\"headerNameCss\" ></ion-menu-button>\n  </ion-buttons>\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-title class=\"headerNameCss\">\n      Home\n    </ion-title>\n    <ion-icon role=\"link\" class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\" aria-label=\"notifications button\" alt=\"notifications button\"></ion-icon>\n    <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n  </ion-item>\n\n</ion-toolbar>\n\n<ion-content>\n  <ion-card style=\"background-color:#F5F3F3;\" (click)=\"open_R_and_A_Portal()\">\n    <ion-card-content>\n      <a role=\"link\" style=\"font-size: large;color: #4a90e2;\">Continue with registration</a>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style=\"background-color:#F5F3F3;margin-top: 20px; padding-bottom:20px \">\n    <ion-card-content>\n\n      <ion-label style=\"color: #2b0c43;font-size:16px;\">Search Jobs</ion-label>\n\n      <!-- <ion-item class=\"ionitemcss\">\n        <ion-label position=\"floating\" class=\"blacklabel\">Jobtitle, Skill or Company</ion-label>\n        <ion-input class=\"headerNameCss\" clear-on-edit=\"true\" type=\"text\" name=\"jobtitle\" [(ngModel)]=\"jobtitle\">\n        </ion-input>\n      </ion-item> -->\n\n      <div class=\"inputTextbox\">\n        <p>\n          <mat-form-field class=\"inputFields\">\n            <mat-label>Jobtitle, Skill or Company</mat-label>\n            <input matInput [(ngModel)]=\"jobtitle\">\n          </mat-form-field>\n        </p>\n\n        <p>\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Location</mat-label>\n              <input matInput [(ngModel)]=\"location\">\n            </mat-form-field>\n          </p>\n      </div>\n\n      <!-- <div class=\"inputTextbox\">\n        <mat-label>Jobtitle, Skill or Company</mat-label>\n        <mat-form-field class=\"inputFields\">\n          <input matInput placeholder=\"Jobtitle, Skill or Company\" [(ngModel)]=\"jobtitle\">\n        </mat-form-field>\n\n        <mat-label>Location</mat-label>\n        <mat-form-field class=\"inputFields\">\n          <input matInput placeholder=\"Location\" [(ngModel)]=\"location\">\n        </mat-form-field>\n      </div> -->\n\n      <button class=\"buttonfont selector inputTextbox\" (click)=\"searchJobs()\" style=\"width:80% !important\">FIND JOBS\n      </button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card style=\"background-color:#F5F3F3;height:10% \" (click)=\"recommendedJobs()\">\n    <ion-card-content style=\"background-color:#F5F3F3; \">\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-label style=\"background-color:#F5F3F3;color: #2b0c43 \">Recommended Jobs </ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <!-- <ion-badge class=\"badgeCss\">0</ion-badge> -->\n          <ion-badge class=\"badgeCss\">{{total_recommended_job_count}}</ion-badge>\n\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card style=\"background-color:#F5F3F3;height:10% \" (click)=\"savedJobs()\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-label style=\"background-color:#F5F3F3;color: #2b0c43\">Saved Jobs</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-badge class=\"badgeCss\">{{total_save_job_count}}</ion-badge>\n          <!-- <ion-badge class=\"badgeCss\">0</ion-badge> -->\n\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboardjobseeker/dashboardjobseeker.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboardjobseeker/dashboardjobseeker.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionitemcss {\n  margin-left: 10%;\n  margin-right: 10%;\n  --background: var(--ion-item-background,var(--ion-background-color,#F5F3F3)) !important ; }\n\n.badgeCss {\n  background: #ff801c;\n  width: 100%;\n  padding: 14%;\n  font-size: 15px;\n  width: 80%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9kYXNoYm9hcmRqb2JzZWVrZXIvZGFzaGJvYXJkam9ic2Vla2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLHdGQUFhLEVBQUE7O0FBSWQ7RUFPQyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkam9ic2Vla2VyL2Rhc2hib2FyZGpvYnNlZWtlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uaXRlbWNzc3tcbiAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OjEwJTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI0Y1RjNGMykpICFpbXBvcnRhbnQgO1xuICAgfVxuICAgXG4gICAvL0NzcyBmb3IgSm9iIENvdW50cy5cbiAgIC5iYWRnZUNzc3tcbiAgICAvLyBiYWNrZ3JvdW5kOiNmZjgwMWM7XG4gICAgLy8gd2lkdGg6MTAwJTtcbiAgICAvLyBoZWlnaHQ6MTAwJTtcbiAgICAvLyBwYWRkaW5nOjVweDsgXG4gICAgLy8gZm9udC1zaXplOjE1cHg7XG4gICBcbiAgICBiYWNrZ3JvdW5kOiAjZmY4MDFjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE0JTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboardjobseeker/dashboardjobseeker.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboardjobseeker/dashboardjobseeker.page.ts ***!
  \***************************************************************/
/*! exports provided: dashboardjobseekerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardjobseekerPage", function() { return dashboardjobseekerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_authservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/authservices.service */ "./src/app/providers/authservices.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");









var dashboardjobseekerPage = /** @class */ (function () {
    function dashboardjobseekerPage(menuCtrl, events, router, alertCtrl, dataServices, loadingController, authService, iab, tts, mobileAccessibility) {
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.authService = authService;
        this.iab = iab;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.isFirstNameEmpty = false;
        this.options = {
            location: 'yes',
            hidden: 'no',
            // clearcache : 'yes',
            // clearsessioncache : 'yes',
            zoom: 'no',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
            EnableViewPortScale: 'yes'
        };
    }
    dashboardjobseekerPage.prototype.ngOnInit = function () {
    };
    dashboardjobseekerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadingController.dismiss();
        }, 500);
    };
    dashboardjobseekerPage.prototype.ionViewWillEnter = function () {
        this.users_id = localStorage.getItem('users_id');
        this.isLogin = localStorage.getItem('login');
        if (this.users_id != '' || this.users_id != null || this.users_id != undefined) {
            this.getSeekerInformation(this.users_id);
        }
        if (this.users_id == '' || this.users_id == null || this.users_id == undefined) {
            this.users_id = 0;
        }
        this.getJobsCount(this.users_id);
        this.jobtitle = "";
        this.location = "";
        this.menuCtrl.enable(true);
        this.getCountryArray();
        this.getNotificationBadgeCount();
    };
    dashboardjobseekerPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Home Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    // Function For Get Seeker Infromation
    dashboardjobseekerPage.prototype.getSeekerInformation = function (userId) {
        var _this = this;
        // this.presentLoading();
        this.dataServices.getSeekerData(userId).then(function (result) {
            if (result.status == 1) {
                _this.loadingController.dismiss();
                var first_name = result.seeker_details[0].first_name;
                if (first_name != '') {
                    if (first_name.split(' ').length == 2) {
                        _this.first_name = first_name.split(' ')[0];
                        _this.last_name = first_name.split(' ')[1];
                    }
                    else if (first_name.split(' ').length >= 3) {
                        _this.first_name = first_name.split(' ')[0];
                        _this.last_name = first_name.split(' ')[2];
                    }
                    else {
                        _this.first_name = first_name.split(' ')[0];
                        _this.last_name = 'null';
                    }
                    _this.mobile = result.seeker_details[0].mobile;
                    _this.usersId = userId;
                    _this.isFirstNameEmpty = false;
                }
                else {
                    _this.isFirstNameEmpty = true;
                }
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
        });
    }; // Function For Get Seeker Infromation Ends Here.
    dashboardjobseekerPage.prototype.open_R_and_A_Portal = function () {
        var _this = this;
        if (!this.isFirstNameEmpty) {
            var postData = {
                "first_name": this.first_name,
                "last_name": this.last_name,
                "mobile": this.mobile,
                "users_id": this.usersId,
                "partner_users_id": localStorage.getItem("partner_users_id")
            };
            this.presentLoading();
            this.authService.open_R_and_A_Portal(postData).then(function (result) {
                if (result.status == 1) {
                    _this.loadingController.dismiss();
                    if (result.token != '') {
                        var browser = _this.iab.create('https://i2talent.org/user-dashboard?token=' + result.token + '&&src=app', '_blank', _this.options);
                        browser.on('exit').subscribe(function (result) {
                            console.log('Browser closed');
                        }, function (error) {
                            alert("Error in browser" + JSON.stringify(error));
                        });
                    }
                }
                else {
                    _this.presentAlert(result.message, '');
                    _this.loadingController.dismiss();
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log('Error in login: ' + JSON.stringify(error));
            });
        }
        else {
            this.presentAlert('Please add your contact details on my profile.', '');
        }
    };
    dashboardjobseekerPage.prototype.searchJobs = function () {
        localStorage.setItem('jobtitle', this.jobtitle);
        localStorage.setItem('location', this.location);
        // if ((this.jobtitle == "" || this.jobtitle == undefined) && (this.location == "" || this.location == undefined)) {
        //     console.log('jobtitle :: ' + this.jobtitle)
        //     console.log('location:: ' + this.location)
        //     this.presentAlert('Please fill-up at least one field', '')
        //     return;
        // }
        // let info = {
        //     // searchInfo: this.resultData.search_result_data,
        //     jobtitle: this.jobtitle,
        //     location: this.location,
        // }
        // this.router.navigate(['/searchjobs', { item: JSON.stringify(info) }]);
        this.router.navigate(['/searchjobs']);
    };
    dashboardjobseekerPage.prototype.recommendedJobs = function () {
        this.router.navigate(['/recommendedjobs', { count: this.total_recommended_job_count }]);
    };
    dashboardjobseekerPage.prototype.savedJobs = function () {
        this.router.navigate(['/savedjobs', { count: this.total_save_job_count }]);
    };
    dashboardjobseekerPage.prototype.getJobsCount = function (users_id) {
        var _this = this;
        // this.presentLoading();
        this.dataServices.getJobsCountData(users_id).then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                // this.loadingController.dismiss();
                var total_count_data = _this.resultData.total_count_data;
                if (total_count_data == null) {
                    return;
                }
                else {
                    _this.total_save_job_count = _this.resultData.total_count_data.total_save_job_count;
                    _this.total_recommended_job_count = _this.resultData.total_count_data.total_recommended_job_count;
                }
            }
            else {
                // this.loadingController.dismiss();
                _this.presentAlert('', _this.resultData.message);
            }
        }, function (error) {
            // this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    dashboardjobseekerPage.prototype.getNotificationBadgeCount = function () {
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
    dashboardjobseekerPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    dashboardjobseekerPage.prototype.getCountryArray = function () {
        var _this = this;
        this.resultData = [];
        this.dataServices.getCountryArrayAPI().then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                localStorage.setItem("countryArray", JSON.stringify(_this.resultData));
            }
            else {
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Display loader 
    dashboardjobseekerPage.prototype.presentLoading = function () {
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
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here
    dashboardjobseekerPage.prototype.presentAlert = function (title, message) {
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
                        alert.setAttribute('role', 'alert');
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    dashboardjobseekerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardjobseeker',
            template: __webpack_require__(/*! ./dashboardjobseeker.page.html */ "./src/app/dashboardjobseeker/dashboardjobseeker.page.html"),
            styles: [__webpack_require__(/*! ./dashboardjobseeker.page.scss */ "./src/app/dashboardjobseeker/dashboardjobseeker.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_authservices_service__WEBPACK_IMPORTED_MODULE_5__["AuthservicesService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_7__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_8__["MobileAccessibility"]])
    ], dashboardjobseekerPage);
    return dashboardjobseekerPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboardjobseeker-dashboardjobseeker-module.js.map