(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-with-otp-and-forget-password-login-with-otp-and-forget-password-module"],{

/***/ "./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: LoginWithOtpAndForgetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWithOtpAndForgetPasswordPageModule", function() { return LoginWithOtpAndForgetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_with_otp_and_forget_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-with-otp-and-forget-password.page */ "./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _login_with_otp_and_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["LoginWithOtpAndForgetPasswordPage"]
    }
];
var LoginWithOtpAndForgetPasswordPageModule = /** @class */ (function () {
    function LoginWithOtpAndForgetPasswordPageModule() {
    }
    LoginWithOtpAndForgetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_with_otp_and_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["LoginWithOtpAndForgetPasswordPage"]]
        })
    ], LoginWithOtpAndForgetPasswordPageModule);
    return LoginWithOtpAndForgetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.page.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\">\n  <ion-img class=\"jobabilitylogo\" aria-label=\"i2talent logo\" alt=\"i2talent logo\"\n    src=\"../../assets/img/jobabilitylogo.png\"></ion-img>\n  <ion-card class=\"cardMargins\">\n    <!-- <ion-row class=\"formPadding\">\n      <ion-item lines=\"none\" class=\"inoItem\">\n        <div (click)=\"backtoWelcome()\" class=\"backbutton\">\n          <img class=\"backbuttonImage\" aria-label=\"Back navigation button\" alt=\"Back navigation button\"\n            src=\"../../assets/img/backnavigation.png\">\n        </div>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"width: 58%;\">\n        <div class=\"labelWidth\">\n          <ion-label align=\"center\" class=\"authenticationLabel\">Login With OTP\n          </ion-label>\n        </div>\n      </ion-item>\n    </ion-row> -->\n\n    <ion-row class=\"formPadding\">\n      <ion-col size=\"2\" (click)=\"backtoWelcome()\">\n        <div >\n          <img class=\"backArrow\" aria-label=\"Back navigation button\" alt=\"Back navigation button\"\n            src=\"../../assets/img/backnavigation.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"loginWithOPTLabel\">\n          <ion-label align=\"center\" class=\"authenticationLabel\">Login With OTP\n          </ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-card-content>\n      <div class=\"formPadding\">\n        <form [formGroup]=\"loginWithOTPForm\" (ngSubmit)=\"loginSuccessWithOTP(loginWithOTPForm.value)\">\n          <p>\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Mobile</mat-label>\n              <input type=\"tel\" matInput formControlName=\"mobile\" [errorStateMatcher]=\"esMatcher\" pattern=\"^[0-9]{10}$\">\n              <mat-icon matSuffix color=\"warn\"\n                *ngIf=\"(loginWithOTPForm.controls.mobile.invalid && loginWithOTPForm.controls.mobile.touched) || (loginWithOTPForm.controls.mobile.invalid  && showErrorIcon && !loginWithOTPForm.controls.mobile.touched)\">\n                error</mat-icon>\n              <mat-error>\n                <span *ngIf=\"loginWithOTPForm.controls.mobile.errors?.required\">Mobile number is required.</span>\n                <span\n                  *ngIf=\"loginWithOTPForm.controls.mobile.errors?.minlength || loginWithOTPForm.controls.mobile.errors?.maxlength\">Please\n                  enter valid mobile number.</span>\n              </mat-error>\n            </mat-form-field>\n          </p>\n          <button type=\"submit\" class=\"buttonfont selector loginButton\" placeholder=\"Mobile\">SEND OTP</button>\n        </form>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('backgroundlogin.png') 0 0/100% 70% no-repeat; }\n\n.jobabilitylogo {\n  height: 10%;\n  margin-top: 10%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60%; }\n\n.cardMargins {\n  margin-top: 13%;\n  width: 94% !important;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-bottom: 10px;\n  background: white; }\n\n.labelWidth {\n  width: 100% !important; }\n\n.backArrow {\n  padding: 20%; }\n\n.loginWithOPTLabel {\n  padding: 5%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9sb2dpbi13aXRoLW90cC1hbmQtZm9yZ2V0LXBhc3N3b3JkL2xvZ2luLXdpdGgtb3RwLWFuZC1mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0RBQWEsRUFBQTs7QUFHakI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUVFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDcEIsaUJBQWdCLEVBQUE7O0FBR25CO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXdpdGgtb3RwLWFuZC1mb3JnZXQtcGFzc3dvcmQvbG9naW4td2l0aC1vdHAtYW5kLWZvcmdldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZGxvZ2luLnBuZykgMCAwLzEwMCUgNzAlIG5vLXJlcGVhdDtcbn1cblxuLmpvYmFiaWxpdHlsb2dve1xuICAgIGhlaWdodDogMTAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gIC5jYXJkTWFyZ2luc3tcbiAgICAvLyBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICB3aWR0aDogOTQlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIGJhY2tncm91bmQ6d2hpdGU7XG59XG5cbi5sYWJlbFdpZHRoe1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrQXJyb3d7XG4gICAgcGFkZGluZzogMjAlO1xufVxuXG4ubG9naW5XaXRoT1BUTGFiZWx7XG4gICAgcGFkZGluZzogNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: LoginWithOtpAndForgetPasswordPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWithOtpAndForgetPasswordPage", function() { return LoginWithOtpAndForgetPasswordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_authservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/authservices.service */ "./src/app/providers/authservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_OTP_sendotp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/OTP/sendotp.service */ "./src/app/providers/OTP/sendotp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");











var LoginWithOtpAndForgetPasswordPage = /** @class */ (function () {
    function LoginWithOtpAndForgetPasswordPage(formBuilder, authService, events, loadingController, SendOTP, router, alertCtrl, tts, mobileAccessibility, location) {
        // this.titleService.setTitle(this.pageTitle);
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.events = events;
        this.loadingController = loadingController;
        this.SendOTP = SendOTP;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.location = location;
        this.showErrorIcon = false;
        this.loginWithOTPForm = this.formBuilder.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])]
        });
    }
    LoginWithOtpAndForgetPasswordPage.prototype.ngOnInit = function () {
    };
    LoginWithOtpAndForgetPasswordPage.prototype.ionViewWillEnter = function () {
        // this.titleService.setTitle(this.pageTitle + 'Screen');
        // document.title = this.pageTitle + ' Screen'
    };
    LoginWithOtpAndForgetPasswordPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Login With OTP Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    // Function For Login With OTP
    LoginWithOtpAndForgetPasswordPage.prototype.loginSuccessWithOTP = function (form) {
        var _this = this;
        if (this.loginWithOTPForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.authService.loginOTPAPI(form.mobile).then(function (res) {
                if (res.status == 1) {
                    localStorage.setItem("users_id", res.user_data[0].users_id);
                    localStorage.setItem("userstype", res.user_data[0].uacc_group_fk);
                    localStorage.setItem('userName', res.user_data[0].first_name);
                    localStorage.setItem('auth_token', res.api_token);
                    localStorage.setItem("partner_users_id", res.user_data[0].partner_users_id);
                    localStorage.setItem("app_or_rna", res.user_data[0].app_or_rna); //This for open RNA portal as profile(1) or app profile(0)
                    if (res.user_data[0].uacc_group_fk == '8') {
                        localStorage.setItem('id', res.user_data[0].id);
                        localStorage.setItem("email", res.user_data[0].email);
                    }
                    _this.events.publish('Event-UserName');
                    _this.loadingController.dismiss();
                    _this.loginSendOTP(form.mobile);
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert(res.message, '');
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log(error);
                _this.presentAlert('Something went wrong', '');
            });
        }
    }; // loginSuccessWithOTP Function Ends Here
    // Function To send OTP
    LoginWithOtpAndForgetPasswordPage.prototype.loginSendOTP = function (mobileNumber) {
        var _this = this;
        this.presentLoading();
        this.SendOTP.loginUsingOTP(mobileNumber).then(function (res) {
            if (res.status == 1) {
                _this.loadingController.dismiss();
                localStorage.setItem('otpFlag', '0');
                _this.router.navigate(['/otpgeneration', { mobileNumber: mobileNumber }]);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', res.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            alert(error);
        });
    };
    // loginSendOTP Function Ends Here
    LoginWithOtpAndForgetPasswordPage.prototype.backtoWelcome = function () {
        this.router.navigate(['/login']);
        // this.navCtrl.navigateRoot('/login');
        // this.location.back();
    };
    // Function To show Alert
    LoginWithOtpAndForgetPasswordPage.prototype.presentAlert = function (title, message) {
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
    //Display loader 
    LoginWithOtpAndForgetPasswordPage.prototype.presentLoading = function () {
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
    LoginWithOtpAndForgetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-with-otp-and-forget-password',
            template: __webpack_require__(/*! ./login-with-otp-and-forget-password.page.html */ "./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.page.html"),
            styles: [__webpack_require__(/*! ./login-with-otp-and-forget-password.page.scss */ "./src/app/login-with-otp-and-forget-password/login-with-otp-and-forget-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _providers_authservices_service__WEBPACK_IMPORTED_MODULE_3__["AuthservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _providers_OTP_sendotp_service__WEBPACK_IMPORTED_MODULE_5__["SendotpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_8__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_9__["MobileAccessibility"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], LoginWithOtpAndForgetPasswordPage);
    return LoginWithOtpAndForgetPasswordPage;
}());

/** Error when invalid control is dirty, touched, or submitted. */
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
//# sourceMappingURL=login-with-otp-and-forget-password-login-with-otp-and-forget-password-module.js.map