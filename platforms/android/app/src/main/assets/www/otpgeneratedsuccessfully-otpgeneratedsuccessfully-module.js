(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otpgeneratedsuccessfully-otpgeneratedsuccessfully-module"],{

/***/ "./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OtpgeneratedsuccessfullyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpgeneratedsuccessfullyPageModule", function() { return OtpgeneratedsuccessfullyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otpgeneratedsuccessfully_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otpgeneratedsuccessfully.page */ "./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.page.ts");







var routes = [
    {
        path: '',
        component: _otpgeneratedsuccessfully_page__WEBPACK_IMPORTED_MODULE_6__["OtpgeneratedsuccessfullyPage"]
    }
];
var OtpgeneratedsuccessfullyPageModule = /** @class */ (function () {
    function OtpgeneratedsuccessfullyPageModule() {
    }
    OtpgeneratedsuccessfullyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_otpgeneratedsuccessfully_page__WEBPACK_IMPORTED_MODULE_6__["OtpgeneratedsuccessfullyPage"]]
        })
    ], OtpgeneratedsuccessfullyPageModule);
    return OtpgeneratedsuccessfullyPageModule;
}());



/***/ }),

/***/ "./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\" justify>\n  <ion-img class=\"img\" style=\"width:130px; height:60px;margin-top: 37px;\" aria-label=\"i2talent logo\" alt=\"i2talent logo\"\n    src=\"../../assets/img/jobabilitylogo.png\">\n  </ion-img>\n  <ion-card class=\"cardMargins\">\n    <ion-card-content style=\"padding-bottom:20px\">\n      <br>\n      <br>\n      <p align=\"center\" style=\"color: #2b0c43;\" [attr.role]=\"role\"><span\n          style=\"font-size: 18px; font-weight: bold;\">Thank you!</span><br> <br> Registered Successfully.\n        <br><span style=\"color: white;\">Please click on continue button.</span>\n      </p>\n      <br>\n      <br>\n      <button (click)=\"jobseekerDashboard()\" class=\"buttonfont selector\">Continue</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('backgroundlogin.png') 0 0/100% 70% no-repeat; }\n\n.cardMargins {\n  margin-top: 13%;\n  width: 94% !important;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-bottom: 10px;\n  background: white; }\n\n.img {\n  height: 70vh;\n  width: auto;\n  margin: auto;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9vdHBnZW5lcmF0ZWRzdWNjZXNzZnVsbHkvb3RwZ2VuZXJhdGVkc3VjY2Vzc2Z1bGx5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtEQUFhLEVBQUE7O0FBSWpCO0VBRUksZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNwQixpQkFBZ0IsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9vdHBnZW5lcmF0ZWRzdWNjZXNzZnVsbHkvb3RwZ2VuZXJhdGVkc3VjY2Vzc2Z1bGx5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kbG9naW4ucG5nKSAwIDAvMTAwJSA3MCUgbm8tcmVwZWF0O1xufVxuXG5cbi5jYXJkTWFyZ2luc3tcbiAgICAvLyBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICB3aWR0aDogOTQlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIGJhY2tncm91bmQ6d2hpdGU7XG59XG5cbi5pbWd7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.page.ts ***!
  \***************************************************************************/
/*! exports provided: OtpgeneratedsuccessfullyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpgeneratedsuccessfullyPage", function() { return OtpgeneratedsuccessfullyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");







var OtpgeneratedsuccessfullyPage = /** @class */ (function () {
    function OtpgeneratedsuccessfullyPage(router, menuCtrl, dataServices, tts, mobileAccessibility, navCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.dataServices = dataServices;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.navCtrl = navCtrl;
    }
    OtpgeneratedsuccessfullyPage.prototype.ngOnInit = function () {
    };
    OtpgeneratedsuccessfullyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false);
        setTimeout(function () {
            _this.role = "alertdialog";
        }, 2000);
    };
    OtpgeneratedsuccessfullyPage.prototype.ionViewDidEnter = function () {
        // this.mobileAccessibility.isScreenReaderRunning().then(bool => {
        //   if (bool) {
        //     setTimeout(() => {
        //       this.tts.speak('Verified OTP Screen')
        //         .then(() => console.log('Success'))
        //         .catch((reason: any) => console.log(reason));
        //     }, 1000);
        //   }
        // })
    };
    OtpgeneratedsuccessfullyPage.prototype.jobseekerDashboard = function () {
        this.dataServices.setIsAlertShown();
        var RegisterProfileType = localStorage.getItem('RegisterProfileType');
        if (RegisterProfileType == "Job Seeker") {
            this.navCtrl.navigateRoot(['/dashboardjobseeker']);
            return;
        }
        if (RegisterProfileType == "Employer") {
            this.navCtrl.navigateRoot(['/dashboardemployer']);
            return;
        }
        if (RegisterProfileType == "Service Provider") {
            this.navCtrl.navigateRoot(['/dashboardserviceprovider']);
            return;
        }
    };
    OtpgeneratedsuccessfullyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otpgeneratedsuccessfully',
            template: __webpack_require__(/*! ./otpgeneratedsuccessfully.page.html */ "./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.page.html"),
            styles: [__webpack_require__(/*! ./otpgeneratedsuccessfully.page.scss */ "./src/app/otpgeneratedsuccessfully/otpgeneratedsuccessfully.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_5__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__["MobileAccessibility"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], OtpgeneratedsuccessfullyPage);
    return OtpgeneratedsuccessfullyPage;
}());



/***/ })

}]);
//# sourceMappingURL=otpgeneratedsuccessfully-otpgeneratedsuccessfully-module.js.map