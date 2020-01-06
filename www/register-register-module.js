(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\" role=\"application\">\n\n  <img class=\"jobabilitylogo\" aria-label=\"i2talent logo\" alt=\"i2talent logo\" src=\"../../assets/img/jobabilitylogo.png\">\n\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-content style=\"padding-bottom:20px\">\n      <!-- <ion-row>\n        <ion-item lines=\"none\" class=\"inoItem\">\n          <div (click)=\"goBack()\" class=\"backbutton\">\n            <img class=\"backbuttonImage\" aria-label=\"Back navigation button\" alt=\"Back navigation button\"\n              src=\"../../assets/img/backnavigation.png\">\n          </div>\n        </ion-item>\n        <ion-item lines=\"none\" style=\"width: 58%;\">\n          <div>\n            <ion-label align=\"center\" style=\"margin-left: 45%; width: 100%;\" class=\"authenticationLabel\">REGISTER\n            </ion-label>\n          </div>\n        </ion-item>\n      </ion-row> -->\n\n      <ion-row class=\"formPadding\">\n        <ion-col size=\"2\" (click)=\"goBack()\">\n          <div>\n            <img class=\"backArrow\" aria-label=\"Back navigation button\" alt=\"Back navigation button\"\n              src=\"../../assets/img/backnavigation.png\">\n          </div>\n        </ion-col>\n        <ion-col size=\"9\">\n          <div class=\"registerLabel\">\n            <ion-label class=\"authenticationLabel\">REGISTER\n            </ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n\n\n      <div class=\"formPadding\">\n        <form [formGroup]=\"registrationForm\">\n          <p>\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Signup As</mat-label>\n              <mat-select formControlName=\"profileType\" [errorStateMatcher]=\"esMatcher\"\n                (selectionChange)=\"selectedProfileType($event.value)\" [aria-label]=\"readProfileType\">\n                <mat-option *ngFor=\"let item of profiletypeArray\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n\n              <mat-error>\n                <span *ngIf=\"registrationForm.controls.profileType.errors?.required\">Please select profile type.</span>\n              </mat-error>\n            </mat-form-field>\n          </p>\n\n          <p *ngIf=\"isJobSeekerSelected\">\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Name (e.g. Sophie Morgan)</mat-label>\n              <input matInput formControlName=\"name\" [errorStateMatcher]=\"esMatcher\" pattern=\"[A-z\\s]+\">\n              <mat-icon matSuffix color=\"warn\"\n                *ngIf=\"(registrationForm.controls.name.invalid && registrationForm.controls.name.touched) || (registrationForm.controls.name.invalid && showErrorIcon && !registrationForm.controls.name.touched)\">\n                error\n              </mat-icon>\n\n              <mat-error>\n                <span *ngIf=\"registrationForm.controls.name.errors?.required\">Name is required.</span>\n                <!-- <span *ngIf=\"registrationForm.controls.name.errors?.pattern\">Please enter valid email id.</span> -->\n              </mat-error>\n            </mat-form-field>\n          </p>\n\n          <p>\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Email Id</mat-label>\n              <input matInput formControlName=\"username\" [errorStateMatcher]=\"esMatcher\"\n                pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,}$\">\n              <mat-icon matSuffix color=\"warn\"\n                *ngIf=\"(registrationForm.controls.username.invalid && registrationForm.controls.username.touched) || (registrationForm.controls.username.invalid && showErrorIcon && !registrationForm.controls.username.touched)\">\n                error\n              </mat-icon>\n\n              <mat-error>\n                <span *ngIf=\"registrationForm.controls.username.errors?.required\">Email id is required.</span>\n                <span *ngIf=\"registrationForm.controls.username.errors?.pattern\">Please enter valid email id.</span>\n              </mat-error>\n            </mat-form-field>\n          </p>\n\n\n          <p>\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Mobile</mat-label>\n              <input type=\"tel\" matInput formControlName=\"mobile\" [errorStateMatcher]=\"esMatcher\" pattern=\"^[0-9]{10}$\">\n              <mat-icon matSuffix color=\"warn\"\n                *ngIf=\"(registrationForm.controls.mobile.invalid && registrationForm.controls.mobile.touched) || (registrationForm.controls.mobile.invalid && showErrorIcon && !registrationForm.controls.mobile.touched)\">\n                error</mat-icon>\n              <mat-error>\n                <span *ngIf=\"registrationForm.controls.mobile.errors?.required\">Mobile number is required.</span>\n                <span\n                  *ngIf=\"registrationForm.controls.mobile.errors?.minlength || registrationForm.controls.mobile.errors?.maxlength\">Please\n                  enter valid mobile number.</span>\n              </mat-error>\n            </mat-form-field>\n          </p>\n\n          <p *ngIf=\"isJobSeekerSelected\">\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Partner Name</mat-label>\n              <mat-select formControlName=\"partner_id\" [errorStateMatcher]=\"esMatcher\"\n                (selectionChange)=\"selectedPartner($event)\" [aria-label]=\"readPartnerValue\">\n                <mat-option *ngFor=\"let item of partnerList\" [value]=\"item\">\n                  {{item.organization_name}}\n                </mat-option>\n              </mat-select>\n\n              <!-- <mat-error>\n                <span *ngIf=\"registrationForm.controls.partnerIs.errors?.required\">Please select profile type.</span>\n              </mat-error> -->\n            </mat-form-field>\n          </p>\n\n          <p>\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Password</mat-label>\n              <input [type]=\"hide ? 'password' : 'text'\" matInput formControlName=\"password\"\n                [errorStateMatcher]=\"esMatcher\">\n              <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\n                [attr.aria-pressed]=\"hide\" style=\"background: white;\n                font-size: unset;\">\n                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n              </button>\n              <mat-error>\n                <span *ngIf=\"registrationForm.controls.password.errors?.required\">Password is required.</span>\n                <span *ngIf=\"registrationForm.controls.password.errors?.minlength\">Password should be at least 6\n                  characters long.</span>\n              </mat-error>\n            </mat-form-field>\n          </p>\n\n          <button type=\"submit\" (click)=\"register(registrationForm.value)\" class=\"buttonfont selector loginButton\"\n            style=\"margin-bottom: 10px;margin-top:25px\">SIGN\n            UP</button>\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('backgroundlogin.png') 0 0/100% 70% no-repeat; }\n\n.cardMargins {\n  margin-top: 13%;\n  width: 94% !important;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-bottom: 10px;\n  background: white; }\n\n.img {\n  height: 70vh;\n  width: auto;\n  margin: auto;\n  display: block; }\n\n.jobabilitylogo {\n  margin-top: 10%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60%; }\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 22px !important;\n  margin: 0 auto !important; }\n\n.errorMsg {\n  color: red; }\n\n.backnavigation {\n  width: 25px !important;\n  height: 15px;\n  margin-top: 12.5px; }\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 22px !important;\n  margin: 0 auto !important; }\n\n.backArrow {\n  padding: 20%; }\n\n.registerLabel {\n  padding: 5%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrREFBYSxFQUFBOztBQUlqQjtFQUVJLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDcEIsaUJBQWdCLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdsQjtFQUVFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1Y7RUFDRSwwQkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUIsRUFBQTs7QUFHNUI7RUFDQyxVQUFXLEVBQUE7O0FBR2I7RUFDRSxzQkFBcUI7RUFDckIsWUFBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDBCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHlCQUF5QixFQUFBOztBQUcxQjtFQUNDLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kbG9naW4ucG5nKSAwIDAvMTAwJSA3MCUgbm8tcmVwZWF0O1xufVxuXG5cbi5jYXJkTWFyZ2luc3tcbiAgICAvLyBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICB3aWR0aDogOTQlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIGJhY2tncm91bmQ6d2hpdGU7XG59XG5cbi5pbWd7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4uam9iYWJpbGl0eWxvZ297XG4gIC8vIGhlaWdodDogMTAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNjAlO1xufVxuXG4gIC5wYXNzd29yZEljb257XG4gICAgZm9udC1zaXplOjJyZW0gIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IDIycHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuIH1cblxuIC5lcnJvck1zZ3tcbiAgY29sb3IgOiByZWQ7XG59XG5cbi5iYWNrbmF2aWdhdGlvbntcbiAgd2lkdGg6MjVweCAhaW1wb3J0YW50OyBcbiAgaGVpZ2h0OjE1cHg7IFxuICBtYXJnaW4tdG9wOiAxMi41cHg7XG59XG5cbi5wYXNzd29yZEljb257XG4gIGZvbnQtc2l6ZToycmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IDIycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiB9XG5cbiAuYmFja0Fycm93e1xuICBwYWRkaW5nOiAyMCU7XG59XG5cbi5yZWdpc3RlckxhYmVse1xuICBwYWRkaW5nOiA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_OTP_sendotp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/OTP/sendotp.service */ "./src/app/providers/OTP/sendotp.service.ts");
/* harmony import */ var _providers_authservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/authservices.service */ "./src/app/providers/authservices.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _providers_AppRoutingPreloader_app_routing_preloader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../providers/AppRoutingPreloader/app-routing-preloader.service */ "./src/app/providers/AppRoutingPreloader/app-routing-preloader.service.ts");














var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, alertCtrl, formBuilder, SendOTP, navCtrl, authService, menuCtrl, location, loadingController, titleService, tts, mobileAccessibility, dataServices, routingService) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.SendOTP = SendOTP;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.location = location;
        this.loadingController = loadingController;
        this.titleService = titleService;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.dataServices = dataServices;
        this.routingService = routingService;
        this.profiletypeArray = [
            'Job Seeker',
            'Employer',
            'Service Provider'
        ];
        this.partnerList = [];
        this.registrationForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)])],
            profileType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            partner_id: [0]
        }); // Forms declaration Ends Here.
        this.hide = true;
        this.showErrorIcon = false;
        this.readProfileType = '';
        this.readPartnerValue = '';
        this.isJobSeekerSelected = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.setValidatorForJobSeeker();
        this.authService.androidPermission().then(function (success) {
            console.log("got android permissions" + success);
        }, function (error) {
            console.log("got android permissions" + error);
        });
    };
    RegisterPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routingService.preloadRoute('login')];
                    case 1:
                        _a.sent();
                        this.menuCtrl.enable(false);
                        this.getPartnerList();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // this.titleService.setTitle('Sign Up');
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Sign up screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    RegisterPage.prototype.goBack = function () {
        this.location.back();
    };
    RegisterPage.prototype.setValidatorForJobSeeker = function () {
        var _this = this;
        var name = this.registrationForm.get('name');
        var partner_id = this.registrationForm.get('partner_id');
        this.registrationForm.get('profileType').valueChanges.subscribe(function (profileType) {
            console.log('profileType: ' + profileType);
            if (profileType == 'Job Seeker') {
                _this.isJobSeekerSelected = true;
                name.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                // partner_id.setValidators()
            }
            else {
                _this.isJobSeekerSelected = false;
                name.setValidators(null);
            }
            name.updateValueAndValidity();
        });
    };
    RegisterPage.prototype.getPartnerList = function () {
        var _this = this;
        this.dataServices.getPartnerList().then(function (response) {
            console.log('Partner List: ' + JSON.stringify(response));
            _this.partnerList = response.partner_list;
        }, function (error) {
            console.log('Error: ' + JSON.stringify(error));
        }).catch(function (err) {
            console.log('Error in catch: ' + JSON.stringify(err));
        });
    };
    RegisterPage.prototype.selectedProfileType = function (type) {
        this.readProfileType = '';
        this.readProfileType = 'Sign up as' + type;
    };
    RegisterPage.prototype.selectedPartner = function (partnerValue) {
        this.readPartnerValue = '';
        this.readPartnerValue = 'Partner name is ' + partnerValue.value.organization_name;
    };
    RegisterPage.prototype.register = function (registerForm) {
        var _this = this;
        if (this.registrationForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.showErrorIcon = false;
            this.presentLoading();
            this.authService.checkExistingData(registerForm).then(function (res) {
                _this.loadingController.dismiss();
                if (res.status == 1) {
                    _this.checkOTPAPI(registerForm);
                }
                else {
                    _this.presentAlert(res.message, '');
                }
            }, function (error) {
                alert(error);
            });
        }
    };
    RegisterPage.prototype.checkOTPAPI = function (registretionForm) {
        var _this = this;
        this.presentLoading();
        this.SendOTP.loginUsingOTP(registretionForm.mobile).then(function (res) {
            _this.loadingController.dismiss();
            if (res.status == 1) {
                localStorage.setItem('otpFlag', '1');
                _this.router.navigate(['/otpgeneration', { mobileNumber: registretionForm.mobile, emailId: registretionForm.username, password: registretionForm.password, profileType: registretionForm.profileType, name: registretionForm.name, partner_id: registretionForm.partner_id.id == undefined ? registretionForm.partner_id : registretionForm.partner_id.id }]);
            }
            else {
                _this.presentAlert('', res.message);
            }
        }, function (error) {
            console.log(error);
        });
        // this.router.navigate(['/otpgeneration']);
    };
    RegisterPage.prototype.presentLoading = function () {
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
    RegisterPage.prototype.presentAlert = function (title, message) {
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
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _providers_OTP_sendotp_service__WEBPACK_IMPORTED_MODULE_5__["SendotpService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _providers_authservices_service__WEBPACK_IMPORTED_MODULE_6__["AuthservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_9__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_10__["MobileAccessibility"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_11__["DataservicesService"],
            _providers_AppRoutingPreloader_app_routing_preloader_service__WEBPACK_IMPORTED_MODULE_12__["AppRoutingPreloaderService"]])
    ], RegisterPage);
    return RegisterPage;
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
//# sourceMappingURL=register-register-module.js.map