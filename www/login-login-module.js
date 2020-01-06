(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\" role=\"application\">\n  <ion-img class=\"jobabilitylogo\" aria-label=\"i2talent logo\" alt=\"i2talent logo\"\n    src=\"../../assets/img/jobabilitylogo.png\"></ion-img>\n  <ion-card class=\"cardMargins\">\n    <!-- <ion-row class=\"formPadding\">\n      <ion-item lines=\"none\" class=\"inoItem\">\n        <div (click)=\"backtoWelcome()\" class=\"backbutton\">\n          <img class=\"backbuttonImage\" aria-label=\"Back navigation button\" alt=\"Back navigation button\"\n            src=\"../../assets/img/backnavigation.png\">\n        </div>\n      </ion-item>\n      <ion-item lines=\"none\" style=\"width: 58%;\">\n        <div class=\"labelWidth\">\n          <ion-label align=\"center\" class=\"authenticationLabel\">LOGIN\n          </ion-label>\n        </div>\n      </ion-item>\n    </ion-row> -->\n\n    <ion-row class=\"formPadding\">\n      <ion-col size=\"2\" (click)=\"backtoWelcome()\">\n        <div>\n          <img class=\"backArrow\" aria-label=\"Back navigation button\" alt=\"Back navigation button\"\n            src=\"../../assets/img/backnavigation.png\">\n        </div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"loginLabel\">\n          <ion-label align=\"center\" class=\"authenticationLabel\">LOGIN\n          </ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-card-content>\n      <div class=\"formPadding\">\n        <form [formGroup]=\"loginWithGmailForm\" (ngSubmit)=\"loginSuccessWithEmail(loginWithGmailForm.value)\">\n          <p>\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Email Id</mat-label>\n              <input matInput type=\"text\" formControlName=\"username\" [errorStateMatcher]=\"esMatcher\"\n                pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,}$\">\n              <mat-icon matSuffix color=\"warn\"\n                *ngIf=\"(loginWithGmailForm.controls.username.invalid && loginWithGmailForm.controls.username.touched) || (loginWithGmailForm.controls.username.invalid && showErrorIcon && !loginWithGmailForm.controls.username.touched)\">\n                error\n              </mat-icon>\n              <mat-error>\n                <span *ngIf=\"loginWithGmailForm.controls.username.errors?.required\">Email id is required.</span>\n                <span *ngIf=\"loginWithGmailForm.controls.username.errors?.pattern\">Please enter valid email id.</span>\n              </mat-error>\n            </mat-form-field>\n          </p>\n\n          <p>\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Password</mat-label>\n              <input type=\"password\" matInput formControlName=\"password\" [errorStateMatcher]=\"esMatcher\">\n              <mat-icon matSuffix color=\"warn\"\n                *ngIf=\"(loginWithGmailForm.controls.password.invalid && loginWithGmailForm.controls.password.touched) || (loginWithGmailForm.controls.password.invalid && showErrorIcon && !loginWithGmailForm.controls.password.touched)\">\n                error</mat-icon>\n              <mat-error>\n                <span *ngIf=\"loginWithGmailForm.controls.password.errors?.required\">Password is required.</span>\n                <!-- <span *ngIf=\"loginWithGmailForm.controls.password.errors?.minlength\">Password should be at least 6\n                  characters long</span> -->\n              </mat-error>\n            </mat-form-field>\n          </p>\n\n          <button type=\"submit\" class=\"buttonfont selector loginButton\" placeholder=\"Mobile\">LOGIN</button>\n        </form>\n\n        <br>\n        <ion-row>\n          <ion-col size=\"6\">\n            <u (click)=\"showLoginCard('OTP')\" align=\"center\" style=\"float: left;font-size: medium;\" role=\"link\">Login\n              with OTP</u>\n            <!-- <h2 class=\"defaultColor\" (click)=\"showLoginCard('OTP')\" align=\"center\" style=\"float: left;\">\n              <u>Login with OTP</u>\n            </h2> -->\n          </ion-col>\n          <ion-col size=\"6\">\n            <u (click)=\"showLoginCard('Forgot')\" align=\"center\" style=\"float: right;font-size: medium;\"\n              role=\"link\">Forgot Password\n              ?</u>\n            <!-- <h2 class=\"defaultColor\" (click)=\"showLoginCard('Forgot')\" align=\"center\" style=\"float: right;font-size: medium;\">\n              <u>Forgot Password ?</u>\n            </h2> -->\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('backgroundlogin.png') 0 0/100% 70% no-repeat; }\n\n.cardMargins {\n  margin-top: 13%;\n  width: 94% !important;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-bottom: 10px;\n  background: white; }\n\n.jobabilitylogo {\n  height: 10%;\n  margin-top: 10%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60%; }\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 22px !important;\n  margin: 0 auto !important; }\n\n.errorMsg {\n  color: red; }\n\n.inputPassword {\n  margin-top: 8%; }\n\n.passwordHideShowIcon {\n  font-size: 21px; }\n\n.passwordHideShowIconButton {\n  background: white;\n  width: 40px; }\n\n.loginButton {\n  margin-top: 8%; }\n\n.hideLoginCard {\n  width: 40px;\n  height: 40px; }\n\n.inputMobileNumber {\n  margin-top: 30px; }\n\n.loginWithOtpButton {\n  margin-bottom: 25px;\n  margin-top: 28px !important; }\n\n.labelWidth {\n  width: 100% !important; }\n\n.divCenter {\n  height: 50%;\n  width: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 10%; }\n\nion-item {\n  --highlight-color-focused: #2b0c43;\n  --highlight-color-valid: #2b0c43; }\n\n.backArrow {\n  padding: 20%; }\n\n.loginLabel {\n  padding: 5%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrREFBYSxFQUFBOztBQUdqQjtFQUVJLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDcEIsaUJBQWdCLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSwwQkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUIsRUFBQTs7QUFHNUI7RUFDQyxVQUFXLEVBQUE7O0FBT2I7RUFDSSxjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBYyxFQUFBOztBQUVsQjtFQUNJLGlCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFHZjtFQUNJLGdCQUNKLEVBQUE7O0FBRUE7RUFDSSxtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksc0JBQXNCLEVBQUE7O0FBZTFCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBT1o7RUFDSSxrQ0FBMEI7RUFDMUIsZ0NBQXdCLEVBQUE7O0FBSTVCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kbG9naW4ucG5nKSAwIDAvMTAwJSA3MCUgbm8tcmVwZWF0O1xufVxuXG4uY2FyZE1hcmdpbnN7XG4gICAgLy8gaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxMyU7XG4gICAgd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICBiYWNrZ3JvdW5kOndoaXRlO1xufVxuXG4uam9iYWJpbGl0eWxvZ297XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbi5wYXNzd29yZEljb257XG4gICAgZm9udC1zaXplOjJyZW0gIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IDIycHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuIH1cblxuIC5lcnJvck1zZ3tcbiAgY29sb3IgOiByZWQ7XG59XG5cblxuXG5cblxuLmlucHV0UGFzc3dvcmR7XG4gICAgbWFyZ2luLXRvcDo4JTtcbn1cblxuLnBhc3N3b3JkSGlkZVNob3dJY29ue1xuICAgIGZvbnQtc2l6ZToyMXB4O1xufVxuLnBhc3N3b3JkSGlkZVNob3dJY29uQnV0dG9ue1xuICAgIGJhY2tncm91bmQ6d2hpdGU7IFxuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4ubG9naW5CdXR0b257XG4gICAgbWFyZ2luLXRvcDo4JTtcbn1cblxuLmhpZGVMb2dpbkNhcmR7XG4gICAgd2lkdGg6NDBweDtcbiAgICBoZWlnaHQ6NDBweDtcbn1cblxuLmlucHV0TW9iaWxlTnVtYmVye1xuICAgIG1hcmdpbi10b3A6MzBweFxufVxuXG4ubG9naW5XaXRoT3RwQnV0dG9ue1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgbWFyZ2luLXRvcDogMjhweCAhaW1wb3J0YW50O1xufVxuLmxhYmVsV2lkdGh7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuXG4vLyAuaW5wdXRDb2xvcjEge1xuLy8gICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgZ3JheSk7XG4vLyB9XG4vLyAuaW5wdXRDb2xvcjIge1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCByZWQpO1xuLy8gICB9XG5cbi8vIC5pdGVtLW1kLml0ZW0taW5wdXQgLml0ZW0taW5uZXIge1xuLy8gICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbi8vIH1cblxuLmRpdkNlbnRlcntcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAxMCU7XG4gICAgfVxuXG4gICAgLy8gLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1oYXMtZm9jdXMge1xuICAgIC8vICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjMmIwYzQzO1xuICAgIC8vICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjMmIwYzQzO1xuICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzJiMGM0Mzs7XG4gICAgICAgIC8vIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHJlZDtcbiAgICAgIH1cblxuICAgIC5iYWNrQXJyb3d7XG4gICAgICAgIHBhZGRpbmc6IDIwJTtcbiAgICB9XG4gICAgXG4gICAgLmxvZ2luTGFiZWx7XG4gICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICBcbiAgICAgIFxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_authservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/authservices.service */ "./src/app/providers/authservices.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");
/* harmony import */ var _providers_AppRoutingPreloader_app_routing_preloader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/AppRoutingPreloader/app-routing-preloader.service */ "./src/app/providers/AppRoutingPreloader/app-routing-preloader.service.ts");













var LoginPage = /** @class */ (function () {
    function LoginPage(router, alertCtrl, formBuilder, authService, menuCtrl, navCtrl, location, events, loadingController, dataServices, titleService, tts, mobileAccessibility, routingService) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.location = location;
        this.events = events;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.titleService = titleService;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.routingService = routingService;
        this.showErrorIcon = false;
        // Forms declaration
        this.loginWithGmailForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        this.authService.androidPermission().then(function (success) {
            console.log("got android permissions" + success);
        }, function (error) {
            console.log("got android permissions" + error);
        });
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('login')];
                    case 1:
                        _a.sent();
                        this.menuCtrl.enable(false);
                        this.uacc_id = localStorage.getItem('users_id');
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Login Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    LoginPage.prototype.loginSuccessWithEmail = function (credentials) {
        var _this = this;
        if (this.loginWithGmailForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.showErrorIcon = false;
            this.presentLoading();
            this.authService.loginEmailAPI(credentials).then(function (res) {
                if (res.status == 1) {
                    _this.loadingController.dismiss();
                    localStorage.clear();
                    localStorage.setItem('userName', res.user_data[0].first_name);
                    localStorage.setItem("users_id", res.user_data[0].users_id);
                    localStorage.setItem("userstype", res.user_data[0].uacc_group_fk);
                    localStorage.setItem("email", res.user_data[0].email);
                    localStorage.setItem('login', 'yes');
                    localStorage.setItem('auth_token', res.api_token);
                    localStorage.setItem("partner_users_id", res.user_data[0].partner_users_id);
                    localStorage.setItem("app_or_rna", res.user_data[0].app_or_rna); //This for open RNA portal as profile(1) or app profile(0)
                    _this.addDeviceToken();
                    _this.dataServices.setIsAlertShown();
                    _this.events.publish('Event-UserName');
                    if (res.user_data[0].uacc_group_fk == "5") {
                        _this.navCtrl.navigateRoot(['/dashboardjobseeker']);
                    }
                    else if (res.user_data[0].uacc_group_fk == "4") {
                        _this.navCtrl.navigateRoot(['/dashboardemployer']);
                    }
                    else {
                        localStorage.setItem('id', res.user_data[0].id);
                        _this.navCtrl.navigateRoot(['/dashboardserviceprovider']);
                    }
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert(res.message, '');
                }
            }, function (error) {
                _this.loadingController.dismiss();
                _this.presentAlert('Something went wrong', '');
            });
        }
    }; // loginSuccessWithEmail Function Ends Here
    LoginPage.prototype.showLoginCard = function (value) {
        if (value == 'OTP') {
            this.router.navigate(['/login-with-otp-and-forget-password']);
        }
        else {
            this.router.navigate(['/forgotpassword']);
        }
    };
    // Function For navigate user to back page
    LoginPage.prototype.backtoWelcome = function () {
        // if (this.uacc_id != 0) {
        // this.location.back();
        // } else {
        // }
        // this.location.back();
        this.router.navigate(['/welcomescreen']);
    };
    // backtoWelcome Function Ends Here
    LoginPage.prototype.addDeviceToken = function () {
        var device_token = this.dataServices.getDeviceToken();
        this.dataServices.postAddDeviceToken(device_token).then(function (result) {
            console.log('Response: ' + JSON.stringify(result));
            if (result.status == 1) {
                console.log(result.message);
            }
            else {
                console.log(result.message);
            }
        }, function (error) {
            console.log('Error in adding device token: ' + error);
        });
    };
    // Function To show Alert
    LoginPage.prototype.presentAlert = function (title, message) {
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
    LoginPage.prototype.presentLoading = function () {
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
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _providers_authservices_service__WEBPACK_IMPORTED_MODULE_5__["AuthservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_7__["DataservicesService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_9__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_10__["MobileAccessibility"],
            _providers_AppRoutingPreloader_app_routing_preloader_service__WEBPACK_IMPORTED_MODULE_11__["AppRoutingPreloaderService"]])
    ], LoginPage);
    return LoginPage;
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
//# sourceMappingURL=login-login-module.js.map