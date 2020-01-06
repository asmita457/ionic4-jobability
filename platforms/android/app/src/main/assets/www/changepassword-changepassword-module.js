(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changepassword-changepassword-module"],{

/***/ "./src/app/changepassword/changepassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ChangepasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepassword.page */ "./src/app/changepassword/changepassword.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _changepassword_page__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordPage"]
    }
];
var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_changepassword_page__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordPage"]]
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());



/***/ }),

/***/ "./src/app/changepassword/changepassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n  <ion-item lines=\"none\" class=\"new-background-color\" style=\"color: #2b0c43\">\n    <ion-title>\n      Change Password\n    </ion-title>\n    <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\" aria-label=\"notifications button\" alt=\"notifications button\"></ion-icon>\n    <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n  <ion-card class=\"cardMargins\" style=\"height: 100%;\">\n    <ion-card-content>\n      <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"submit(changePasswordForm.value)\">\n\n        <mat-form-field class=\"inputFields\">\n          <input type=\"password\"  matInput placeholder=\"Current Password\"  formControlName=\"currentPassword\"\n            pattern=\".*[^ ].*\">\n          <mat-icon matSuffix color=\"warn\"\n            *ngIf=\"(changePasswordForm.controls.currentPassword.invalid && changePasswordForm.controls.currentPassword.touched) || (changePasswordForm.controls.currentPassword.invalid && showErrorIcon && !changePasswordForm.controls.currentPassword.touched)\">\n            error\n          </mat-icon>\n          <mat-error>\n            <span *ngIf=\"changePasswordForm.controls.currentPassword.errors?.required\">Current Password is\n              required.</span>\n            <span *ngIf=\"changePasswordForm.controls.currentPassword.errors?.pattern\">Please enter valid current\n              password.</span>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"inputFields\">\n          <input type=\"password\"  matInput placeholder=\"New Password\" formControlName=\"newPassword\"\n            pattern=\".*[^ ].*\">\n          <mat-icon matSuffix color=\"warn\"\n            *ngIf=\"(changePasswordForm.controls.newPassword.invalid && changePasswordForm.controls.newPassword.touched) || (changePasswordForm.controls.newPassword.invalid && showErrorIcon && !changePasswordForm.controls.newPassword.touched)\">\n            error\n          </mat-icon>\n          <mat-error>\n            <span *ngIf=\"changePasswordForm.controls.newPassword.errors?.required\">New Password is required.</span>\n            <span *ngIf=\"changePasswordForm.controls.newPassword.errors?.pattern\">Please enter valid\n              new password.</span>\n            <span\n              *ngIf=\"changePasswordForm.controls.newPassword.errors?.minlength && !changePasswordForm.controls.newPassword.errors?.required && !changePasswordForm.controls.newPassword.errors?.pattern\">New\n              password should be at least 6\n              characters long</span>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"inputFields\">\n          <input type=\"password\" matInput placeholder=\"Confirm password\" formControlName=\"confirmPassword\"\n            pattern=\".*[^ ].*\" [errorStateMatcher]=\"matcher\">\n          <mat-icon matSuffix color=\"warn\"\n            *ngIf=\"(changePasswordForm.controls.confirmPassword.invalid && changePasswordForm.controls.confirmPassword.touched) || (changePasswordForm.controls.confirmPassword.invalid && showErrorIcon && !changePasswordForm.controls.confirmPassword.touched)\">\n            error\n          </mat-icon>\n          <mat-error>\n            <span *ngIf=\"changePasswordForm.controls.confirmPassword.errors?.required\">Confirm password is\n              required.</span>\n\n            <!-- <span *ngIf=\"changePasswordForm.controls.confirmPassword.errors?.pattern\">Please enter valid\n              confirm password.</span> -->\n            <!-- <span *ngIf=\"changePasswordForm.controls.confirmPassword.errors?.minlength && !changePasswordForm.controls.confirmPassword.errors?.required && !changePasswordForm.controls.confirmPassword.errors?.pattern\">Confirm password should be at least 6\n                  characters long</span> -->\n          </mat-error>\n        </mat-form-field>\n        <button type=\"submit\" class=\"buttonfont selector loginButton\">SUBMIT</button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <div class=\"inputDiv\">\n \n    <ion-row>\n      <ion-col size=\"12\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n      </ion-col>\n    </ion-row>\n    <ion-item class=\"inoItem\" style=\"margin-top:0%\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showCurrentPasswordErrorMsg == true, 'blacklabel' : showCurrentPasswordErrorMsg == false}\">\n              Current password\n            </ion-label>\n            <ion-input type=\"password\" name=\"currentPassword\" [(ngModel)]=\"currentPassword\"\n              (ionChange)=\"currentPasswordValidator()\" required pattern=\"^[0-9a-zA-Z]{6,}$\"></ion-input>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-img *ngIf=\"showCurrentPasswordErrorMsg\" class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p class=\"errorMsg\" *ngIf=\"showCurrentPasswordErrorMsg\" style=\"margin-top: 0%;\">{{currentPasswordErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-item class=\"inoItem\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showNewPasswordErrorMsg == true, 'blacklabel' : showNewPasswordErrorMsg == false}\">\n              New password\n            </ion-label>\n            <ion-input type=\"password\" name=\"newPassword\" [(ngModel)]=\"newPassword\" (ionChange)=\"newPasswordValidator()\"\n              required pattern=\"^[0-9a-zA-Z]{6,}$\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-img *ngIf=\"showNewPasswordErrorMsg\" class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p class=\"errorMsg\" *ngIf=\"showNewPasswordErrorMsg\" style=\"margin-top: 0%;\">{{newPasswordErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-item class=\"inoItem\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showConfirmPasswordErrorMsg == true, 'blacklabel' : showConfirmPasswordErrorMsg == false}\">\n              Confirm password\n            </ion-label>\n            <ion-input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\"\n              (ionChange)=\"confirmPasswordValidator()\" required pattern=\"^[0-9a-zA-Z]{6,}$\"></ion-input>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-img *ngIf=\"showConfirmPasswordErrorMsg\" class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p class=\"errorMsg\" *ngIf=\"showConfirmPasswordErrorMsg\" style=\"margin-top: 0%;\">{{confirmPasswordErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n      </ion-col>\n    </ion-row>\n    <div class=\"saveButtonPadding\">\n      <button class=\"buttonfont\" (click)=\"submit()\">Submit</button>\n    </div>\n  </div> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/changepassword/changepassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/changepassword/changepassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ChangepasswordPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPage", function() { return ChangepasswordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");








var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(alertCtrl, loadingController, dataServices, router, formBuilder, navCtrl, tts, mobileAccessibility) {
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.router = router;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.showErrorIcon = false;
    }
    ChangepasswordPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ChangepasswordPage.prototype.ionViewWillEnter = function () {
        this.getNotificationBadgeCount();
    };
    ChangepasswordPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Change Password Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    ChangepasswordPage.prototype.buildForm = function () {
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    // checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    //   let pass = group.controls.newPassword.value;
    //   let confirmPass = group.controls.confirmPassword.value;
    //   this.notSame = pass === confirmPass ? false : true
    //   return this.notSame
    // }
    ChangepasswordPage.prototype.submit = function (credentials) {
        if (this.changePasswordForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            if (credentials.newPassword != credentials.confirmPassword) {
                this.presentAlert('New password and confirm password does not match', '', 'no');
            }
            else {
                var postData = {
                    "current_password": credentials.currentPassword,
                    "new_password": credentials.newPassword,
                    "uacc_id": localStorage.getItem('users_id')
                };
                this.changePasswordAPI(postData);
            }
        }
    };
    ChangepasswordPage.prototype.changePasswordAPI = function (postData) {
        var _this = this;
        this.presentLoading();
        this.dataServices.changePassword(postData).then(function (res) {
            if (res.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert(res.message, '', 'yes');
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert(res.message, '', 'yes');
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    ChangepasswordPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChangepasswordPage.prototype.closePage = function () {
        var usertype = localStorage.getItem('userstype');
        if (usertype == '4') {
            this.navCtrl.navigateRoot('/dashboardemployer');
        }
        else if (usertype == '5') {
            this.navCtrl.navigateRoot('/dashboardjobseeker');
        }
        else {
            this.navCtrl.navigateRoot('/dashboardserviceprovider');
        }
    };
    ChangepasswordPage.prototype.getNotificationBadgeCount = function () {
        var _this = this;
        this.dataServices.getNotificationBadgeCount().then(function (result) {
            if (result.status == 1) {
                _this.badgecount = result.total_notification_count;
            }
        }, function (error) {
            console.log('Error in getNotificationBadgeCount: ' + JSON.stringify(error));
        });
    };
    ChangepasswordPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    ChangepasswordPage.prototype.presentAlert = function (title, message, redirect) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            // buttons: ['OK']
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        if (redirect == 'yes') {
                                            _this.closePage();
                                            // this.changePasswordForm.reset()
                                        }
                                    }
                                }
                            ]
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
    ChangepasswordPage.prototype.ionViewWillLeave = function () {
    };
    ChangepasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.page.html */ "./src/app/changepassword/changepassword.page.html"),
            styles: [__webpack_require__(/*! ./changepassword.page.scss */ "./src/app/changepassword/changepassword.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_7__["MobileAccessibility"]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
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
//# sourceMappingURL=changepassword-changepassword-module.js.map