(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./src/app/forgotpassword/forgotpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/forgotpassword/forgotpassword.page.ts");








var routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_7__["ForgotpasswordPage"]
    }
];
var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_7__["ForgotpasswordPage"]]
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\">\n  <ion-img class=\"jobabilitylogo\" aria-label=\"i2talent logo\" alt=\"i2talent logo\"\n    src=\"../../assets/img/jobabilitylogo.png\"></ion-img>\n  <ion-card class=\"cardMargins\">\n    <!-- <ion-row class=\"formPadding\">\n      <ion-item lines=\"none\" class=\"inoItem\">\n        <div (click)=\"backtoWelcome()\" class=\"backbutton\">\n          <img class=\"backbuttonImage\" aria-label=\"Back navigation button\" alt=\"Back navigation button\"\n            src=\"../../assets/img/backnavigation.png\">\n        </div>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"width: 58%;\">\n        <div class=\"labelWidth\">\n          <ion-label align=\"center\" class=\"authenticationLabel\">Forgot Password\n          </ion-label>\n        </div>\n      </ion-item>\n    </ion-row> -->\n\n    <ion-row class=\"formPadding\">\n      <ion-col size=\"2\" (click)=\"backtoWelcome()\">\n        <div>\n          <img class=\"backArrow\" aria-label=\"Back navigation button\" alt=\"Back navigation button\"\n            src=\"../../assets/img/backnavigation.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"forgetPasswordLabel\">\n          <ion-label class=\"authenticationLabel\">Forgot Password\n          </ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-card-content>\n      <div class=\"formPadding\">\n        <form [formGroup]=\"forgotPassForm\" (ngSubmit)=\"forgotPasswordAPI(forgotPassForm.value)\">\n          <p>\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Email Id</mat-label>\n              <input matInput formControlName=\"username\" [errorStateMatcher]=\"esMatcher\"\n                pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,}$\">\n              <mat-icon matSuffix color=\"warn\"\n                *ngIf=\"(forgotPassForm.controls.username.invalid && forgotPassForm.controls.username.touched) || (forgotPassForm.controls.username.invalid && showErrorIcon && !forgotPassForm.controls.username.touched)\">\n                error</mat-icon>\n              <mat-error>\n                <span *ngIf=\"forgotPassForm.controls.username.errors?.required\">Email id is required.</span>\n                <span *ngIf=\"forgotPassForm.controls.username.errors?.pattern\">Please enter valid email id.</span>\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <button type=\"submit\" class=\"buttonfont selector loginButton\" placeholder=\"Mobile\">NEXT</button>\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('backgroundlogin.png') 0 0/100% 70% no-repeat; }\n\n.jobabilitylogo {\n  height: 10%;\n  margin-top: 10%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60%; }\n\n.cardMargins {\n  margin-top: 13%;\n  width: 94% !important;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-bottom: 10px;\n  background: white; }\n\n.labelWidth {\n  width: 100% !important; }\n\n.backArrow {\n  padding: 20%; }\n\n.forgetPasswordLabel {\n  padding: 5%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrREFBYSxFQUFBOztBQUdqQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBRUUsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNwQixpQkFBZ0IsRUFBQTs7QUFHbkI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRsb2dpbi5wbmcpIDAgMC8xMDAlIDcwJSBuby1yZXBlYXQ7XG59XG5cbi5qb2JhYmlsaXR5bG9nb3tcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cblxuICAuY2FyZE1hcmdpbnN7XG4gICAgLy8gaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxMyU7XG4gICAgd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICBiYWNrZ3JvdW5kOndoaXRlO1xufVxuXG4ubGFiZWxXaWR0aHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uYmFja0Fycm93e1xuICAgIHBhZGRpbmc6IDIwJTtcbn1cblxuLmZvcmdldFBhc3N3b3JkTGFiZWx7XG4gICAgcGFkZGluZzogNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpasswordPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_authservices_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/authservices.service */ "./src/app/providers/authservices.service.ts");










var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(router, alertCtrl, formBuilder, menuCtrl, mobileAccessibility, tts, location, authService, loadingController) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        this.mobileAccessibility = mobileAccessibility;
        this.tts = tts;
        this.location = location;
        this.authService = authService;
        this.loadingController = loadingController;
        this.showErrorIcon = false;
        this.forgotPassForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }); // Forms declaration Ends Here.
    }
    ForgotpasswordPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    ForgotpasswordPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Forgot Password')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    ForgotpasswordPage.prototype.ngOnInit = function () {
    };
    ForgotpasswordPage.prototype.forgotPasswordAPI = function (form) {
        var _this = this;
        // this.emailValidator()
        if (this.forgotPassForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.showErrorIcon = false;
            this.presentLoading();
            this.authService.forgotPassword(form.username).then(function (res) {
                _this.loadingController.dismiss();
                if (res.status == 1) {
                    _this.presentPrompt(res.message, '');
                }
                else {
                    _this.presentAlert(res.message, '');
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log("loginSuccessWithEmail error: ", error);
                _this.presentAlert('Something went wrong', '');
                _this.loadingController.dismiss();
            });
        }
    };
    ForgotpasswordPage.prototype.backtoWelcome = function () {
        this.router.navigate(['/login']);
        // this.navCtrl.navigateRoot('/login');
        // this.location.back();
    };
    // Function To show Alert
    ForgotpasswordPage.prototype.presentAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
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
    }; // presentAlert Function Ends Here
    ForgotpasswordPage.prototype.presentPrompt = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // this.location.back();
                                        _this.router.navigate(['/login']);
                                        _this.forgotPassForm.reset();
                                    }
                                }]
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
    }; // presentAlert Function Ends Here
    //Display loader 
    ForgotpasswordPage.prototype.presentLoading = function () {
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
    };
    ForgotpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.page.html */ "./src/app/forgotpassword/forgotpassword.page.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/forgotpassword/forgotpassword.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__["MobileAccessibility"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_5__["TextToSpeech"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _providers_authservices_service__WEBPACK_IMPORTED_MODULE_8__["AuthservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module.js.map