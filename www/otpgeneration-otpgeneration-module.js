(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otpgeneration-otpgeneration-module"],{

/***/ "./src/app/otpgeneration/otpgeneration.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/otpgeneration/otpgeneration.module.ts ***!
  \*******************************************************/
/*! exports provided: OtpgenerationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpgenerationPageModule", function() { return OtpgenerationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _otpgeneration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otpgeneration.page */ "./src/app/otpgeneration/otpgeneration.page.ts");







var routes = [
    {
        path: '',
        component: _otpgeneration_page__WEBPACK_IMPORTED_MODULE_6__["OtpgenerationPage"]
    }
];
var OtpgenerationPageModule = /** @class */ (function () {
    function OtpgenerationPageModule() {
    }
    OtpgenerationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_otpgeneration_page__WEBPACK_IMPORTED_MODULE_6__["OtpgenerationPage"]]
        })
    ], OtpgenerationPageModule);
    return OtpgenerationPageModule;
}());



/***/ }),

/***/ "./src/app/otpgeneration/otpgeneration.page.html":
/*!*******************************************************!*\
  !*** ./src/app/otpgeneration/otpgeneration.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\" justify>\n  <ion-img class=\"jobabilitylogo\" aria-label=\"i2talent logo\" alt=\"i2talent logo\"\n    src=\"../../assets/img/jobabilitylogo.png\">\n  </ion-img>\n  <ion-card class=\"cardMargins\">\n    <ion-card-content style=\"padding-bottom:20px\">\n      <ion-item lines=\"none\" style=\"width:100%\">\n        <div (click)=\"goBack()\" style=\"width:40px; height:40px;\">\n          <img style=\"width:25px !important; height:25px; margin-top: 12.5px;\" aria-label=\"Back navigation button \"\n            alt=\"Back navigation button \" src=\"../../assets/img/backnavigation.png\">\n        </div>\n        <ion-label align=\"center\" style=\"font-weight: bold; font-size: 18px;color:#2b0c43;\">VERIFY\n          OTP</ion-label>\n      </ion-item>\n      <br>\n      <div text-center style=\"color: #2b0c43; font-size: 15px;\">\n        <label [attr.aria-label]=\"sentOtpMsg\">We have sent an OTP (one time password) to your mobile number.</label>\n        <a aria-hidden=\"true\" href=\"tel:{{mobileNumber}}\">{{mobileNumber}}</a>\n      </div>\n\n      <div text-center><label text-center style=\"color: #2b0c43; font-size: 15px;\">You will receive it shortly</label>\n      </div>\n\n      <br>\n      <br>\n      <div text-center style=\"color: #2b0c43;\">Enter OTP below</div>\n      <br>\n      <ion-row text-center>\n        <ion-col>\n          <input type=\"tel\" [attr.aria-label]=\"firstDigit\" [attr.role]=\"inputFiedlsROle\" [disabled]=\"isDisable\" #otp1\n            maxLength=\"1\" (keyup)=\"next($event, '', otp2)\" [(ngModel)]=\"otp_value1\">\n          <input type=\"tel\" [attr.aria-label]=\"secondDigit\" [attr.role]=\"inputFiedlsROle\" [disabled]=\"isDisable\" #otp2\n            maxLength=\"1\" (keyup)=\"next($event, otp1, otp3)\" [(ngModel)]=\"otp_value2\">\n          <input type=\"tel\" [attr.aria-label]=\"thirdDigit\" [attr.role]=\"inputFiedlsROle\" [disabled]=\"isDisable\" #otp3\n            maxLength=\"1\" (keyup)=\"next($event, otp2, otp4)\" [(ngModel)]=\"otp_value3\">\n          <input type=\"tel\" [attr.aria-label]=\"fourthDigit\" [attr.role]=\"inputFiedlsROle\" [disabled]=\"isDisable\" #otp4\n            maxLength=\"1\" (keyup)=\"next($event, otp3, '')\" [(ngModel)]=\"otp_value4\">\n        </ion-col>\n\n        <!-- <ion-col>\n          <ion-input type=\"tel\" #otp1 maxLength=\"1\" pattern=\"[0-9]{4}\" maxlength=\"1\"\n            size=\"1\" (keyup)=\"next($event, '', otp2)\" [(ngModel)]=\"otp_value1\">\n          </ion-input>\n          <ion-input type=\"tel\" #otp2 maxLength=\"1\" pattern=\"[0-9]{4}\" maxlength=\"1\" size=\"1\"\n            (keyup)=\"next($event, otp1, otp3)\" [(ngModel)]=\"otp_value2\">\n          </ion-input>\n          <ion-input type=\"tel\" #otp3 maxLength=\"1\" pattern=\"[0-9]{4}\" maxlength=\"1\" size=\"1\"\n            (keyup)=\"next($event, otp2, otp4)\" [(ngModel)]=\"otp_value3\">\n          </ion-input>\n          <ion-input type=\"tel\" #otp4 maxLength=\"1\" pattern=\"[0-9]{4}\" maxlength=\"1\" size=\"1\"\n            (keyup)=\"next($event, otp3, '')\" [(ngModel)]=\"otp_value4\">\n          </ion-input>\n        </ion-col> -->\n      </ion-row>\n      <br>\n      <br>\n      <br>\n      <p *ngIf=\"isOTPRecived\" [attr.role]=\"role\" style=\"text-align: center;\ncolor: red;\">OTP has been entered automatically, Please click on continue button to verify.</p>\n      <br>\n      <button (click)=\"otpGeneratedSuccessfully()\" class=\"buttonfont selector\">CONTINUE</button>\n\n      <!-- <a style=\"margin-top:30px; margin-left: 33%\" onclick='resendOTP()'>Resend OTP</a> -->\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/otpgeneration/otpgeneration.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/otpgeneration/otpgeneration.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('backgroundlogin.png') 0 0/100% 70% no-repeat; }\n\n.cardMargins {\n  margin-top: 13%;\n  width: 94% !important;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-bottom: 10px;\n  background: white; }\n\n.img {\n  height: 70vh;\n  width: auto;\n  margin: auto;\n  display: block; }\n\n.jobabilitylogo {\n  height: 10%;\n  margin-top: 10%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60%; }\n\n.inputArea {\n  width: 100%;\n  border: 1px solid black; }\n\n.otp {\n  color: darkgray;\n  border-style: none;\n  width: 60px;\n  height: 60px;\n  font-size: 50px;\n  text-align: center; }\n\ntd {\n  border: 2px solid darkgray; }\n\ntable {\n  border-collapse: collapse; }\n\nion-input {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  margin: 5px;\n  border-radius: 50%;\n  --background:#e1e1e1;\n  --padding-start:7px;\n  font-size: xx-large; }\n\ninput {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  margin: 5px;\n  border-radius: 50%;\n  --padding-start:7px;\n  font-size: xx-large;\n  text-align: center;\n  border-color: #2b0c43;\n  background-color: #e1e1e1; }\n\nspan {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  margin: 5px;\n  border-radius: 50%;\n  --padding-start:7px;\n  font-size: xx-large;\n  text-align: center;\n  background-color: #e1e1e1;\n  border: 2px solid #2b0c43; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9vdHBnZW5lcmF0aW9uL290cGdlbmVyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0RBQWEsRUFBQTs7QUFJakI7RUFFSSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ3BCLGlCQUFnQixFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHVjtFQUNFLFdBQVc7RUFDWCx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDBCQUNGLEVBQUE7O0FBRUE7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxxQkFBb0I7RUFDcEIsV0FBVTtFQUNWLFlBQVc7RUFDWCxXQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQ2IsbUJBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHFCQUFvQjtFQUNwQixXQUFVO0VBQ1YsWUFBVztFQUNYLFdBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBOztBQUkzQjtFQUNFLHFCQUFvQjtFQUNwQixXQUFVO0VBQ1YsWUFBVztFQUNYLFdBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFFbEIseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3RwZ2VuZXJhdGlvbi9vdHBnZW5lcmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kbG9naW4ucG5nKSAwIDAvMTAwJSA3MCUgbm8tcmVwZWF0O1xufVxuXG5cbi5jYXJkTWFyZ2luc3tcbiAgICAvLyBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDEzJTtcbiAgICB3aWR0aDogOTQlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIGJhY2tncm91bmQ6d2hpdGU7XG59XG5cbi5pbWd7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4uam9iYWJpbGl0eWxvZ297XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNjAlO1xufVxuXG4gIC5pbnB1dEFyZWF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5vdHAge1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIHRkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheVxuICB9XG4gIFxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuXG4gIGlvbi1pbnB1dHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB3aWR0aDo1MHB4O1xuICAgIGhlaWdodDo1MHB4O1xuICAgIG1hcmdpbjo1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC0tYmFja2dyb3VuZDojZTFlMWUxO1xuICAgIC0tcGFkZGluZy1zdGFydDo3cHg7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgfVxuXG4gIGlucHV0e1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOjUwcHg7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgbWFyZ2luOjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OjdweDtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItY29sb3I6ICMyYjBjNDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcblxuICB9XG5cbiAgc3BhbntcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB3aWR0aDo1MHB4O1xuICAgIGhlaWdodDo1MHB4O1xuICAgIG1hcmdpbjo1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC0tcGFkZGluZy1zdGFydDo3cHg7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gYm9yZGVyLWNvbG9yOiAjMmIwYzQzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzJiMGM0MztcblxuICB9Il19 */"

/***/ }),

/***/ "./src/app/otpgeneration/otpgeneration.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/otpgeneration/otpgeneration.page.ts ***!
  \*****************************************************/
/*! exports provided: OtpgenerationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpgenerationPage", function() { return OtpgenerationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_OTP_sendotp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/OTP/sendotp.service */ "./src/app/providers/OTP/sendotp.service.ts");
/* harmony import */ var _providers_authservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/authservices.service */ "./src/app/providers/authservices.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");











var OtpgenerationPage = /** @class */ (function () {
    function OtpgenerationPage(router, alertCtrl, activatedRoute, menuCtrl, SendOTP, authService, verifyOTP, location, events, navctrl, dataServices, loadingController, tts, mobileAccessibility) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.menuCtrl = menuCtrl;
        this.SendOTP = SendOTP;
        this.authService = authService;
        this.verifyOTP = verifyOTP;
        this.location = location;
        this.events = events;
        this.navctrl = navctrl;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.otp_value1 = "";
        this.otp_value2 = "";
        this.otp_value3 = "";
        this.otp_value4 = "";
        this.inputFiedlsROle = "alertdialog";
        this.isOTPRecived = false;
        this.isVerifiedOTP = false;
        this.firstDigit = "Enter OTP first digit";
        this.secondDigit = "Enter OTP Second digit";
        this.thirdDigit = "Enter OTP third digit";
        this.fourthDigit = "Enter OTP fourth digit";
        this.isDisable = false;
        this.name = '';
        this.mobileNumber = this.activatedRoute.snapshot.paramMap.get("mobileNumber");
        this.splitMobile = this.mobileNumber.split('').join(' ').replace(/0/g, 'zero');
        this.sentOtpMsg = "We have sent an OTP (one time password) to your mobile number ";
        this.sentOtpMsg = this.sentOtpMsg.concat(this.splitMobile);
        this.email = this.activatedRoute.snapshot.paramMap.get("emailId");
        this.password = this.activatedRoute.snapshot.paramMap.get("password");
        this.profileType = this.activatedRoute.snapshot.paramMap.get("profileType");
        this.otpFlag = localStorage.getItem("otpFlag");
        this.name = this.activatedRoute.snapshot.paramMap.get("name");
        this.partner_id = this.activatedRoute.snapshot.paramMap.get("partner_id");
    }
    OtpgenerationPage.prototype.ionViewWillEnter = function () {
        // const info = JSON.parse(this.activatedRoute.snapshot.paramMap.get('info'));
        // console.log('info array: ' + info);
        // this.profileType = info.profileType;
        // this.email = info.email;
        // this.password = info.password;
        // this.mobile = info.mobile;
        this.menuCtrl.enable(false);
        this.startSMSReceiving();
    };
    OtpgenerationPage.prototype.ionViewDidEnter = function () {
        // this.mobileAccessibility.isScreenReaderRunning().then(bool => {
        //   if (bool) {
        //     setTimeout(() => {
        //       this.tts.speak('Enter OTP Screen')
        //         .then(() => console.log('Success'))
        //         .catch((reason: any) => console.log(reason));
        //     }, 1000);
        //   }
        // })
    };
    OtpgenerationPage.prototype.ionViewWillDismiss = function () {
        SMSReceive.stopWatch(function () { console.log('watch stopped'); }, function () { console.log('watch stop failed'); });
    };
    OtpgenerationPage.prototype.startSMSReceiving = function () {
        var _this = this;
        SMSReceive.startWatch(function () {
            // alert('watch started');
            document.addEventListener('onSMSArrive', function (e) {
                // alert('onSMSArrive()');
                var IncomingSMS = e.data;
                if (IncomingSMS.address.split("-")[1] == "JOBAPP") {
                    _this.otp_value1 = IncomingSMS.body.split(" ")[0].split("")[0];
                    _this.otp_value2 = IncomingSMS.body.split(" ")[0].split("")[1];
                    _this.otp_value3 = IncomingSMS.body.split(" ")[0].split("")[2];
                    _this.otp_value4 = IncomingSMS.body.split(" ")[0].split("")[3];
                    // // alert("OTP: " + JSON.stringify(IncomingSMS.body.split(" ")[0]));
                    // if (!this.isVerifiedOTP) {
                    // this.isVerifiedOTP = true
                    // this.otpGeneratedSuccessfully()
                    // }
                    _this.firstDigit = "";
                    _this.secondDigit = "";
                    _this.thirdDigit = "";
                    _this.fourthDigit = "";
                    _this.inputFiedlsROle = "";
                    _this.isDisable = true;
                    setTimeout(function () {
                        _this.isOTPRecived = true;
                        _this.role = "alertdialog";
                    }, 5000);
                }
            });
        }, function () { console.log('watch start failed'); });
    };
    OtpgenerationPage.prototype.ngOnInit = function () {
    };
    OtpgenerationPage.prototype.otpGeneratedSuccessfully = function () {
        var _this = this;
        this.presentLoading();
        var OTP = this.otp_value1 + '' + this.otp_value2 + '' + this.otp_value3 + '' + this.otp_value4;
        this.verifyOTP.verifyOTP(OTP, this.mobileNumber).then(function (res) {
            _this.loadingController.dismiss();
            _this.verifuOtpResponse = res;
            if (_this.verifuOtpResponse.status == 1) {
                if (_this.otpFlag == '1') {
                    _this.registerAPICall(1);
                }
                else {
                    _this.addDeviceToken();
                    var userstype = localStorage.getItem('userstype');
                    if (userstype == "5") {
                        localStorage.setItem('login', 'yes');
                        _this.navctrl.navigateRoot(['/dashboardjobseeker']);
                        return;
                    }
                    if (userstype == "4") {
                        localStorage.setItem('login', 'yes');
                        _this.navctrl.navigateRoot(['/dashboardemployer']);
                        return;
                    }
                    if (userstype == "8") {
                        localStorage.setItem('login', 'yes');
                        // this.router.(['/dashboardserviceprovider', { skipLocationChange: true }]);
                        _this.navctrl.navigateRoot(['/dashboardserviceprovider']);
                        return;
                    }
                }
            }
            else {
                _this.presentAlert(_this.verifuOtpResponse.message, '');
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log(error);
        });
    };
    OtpgenerationPage.prototype.presentAlert = function (title, message) {
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
    OtpgenerationPage.prototype.resendOTP = function () {
        var _this = this;
        this.SendOTP.loginUsingOTP(this.mobile).then(function (res) {
            _this.sendOtpResponce = res;
            if (_this.sendOtpResponce.type == "success") {
                // this.navCtrl.navigateForward(`/otpgeneration/${JSON.stringify(info)}`);
            }
            else {
                _this.presentAlert('Sorry', 'Please check OTP');
            }
        }, function (error) {
            _this.presentAlert('Something went wrong', '');
        });
    };
    OtpgenerationPage.prototype.registerAPICall = function (otpVerify) {
        var _this = this;
        // this.presentLoading()
        this.authService.registerUser(otpVerify, this.profileType, this.mobileNumber, this.email, this.password, this.name, this.partner_id).then(function (res) {
            _this.registerDataResponse = res;
            if (_this.registerDataResponse.status == 1) {
                _this.userType = _this.registerDataResponse.profile_type;
                localStorage.setItem('userName', _this.registerDataResponse.name);
                localStorage.setItem("userstype", _this.registerDataResponse.uacc_group_fk);
                localStorage.setItem('RegisterProfileType', _this.registerDataResponse.profile_type);
                // this.presentAlert('Registered', this.registerDataResponse.message);
                localStorage.setItem("partner_users_id", _this.registerDataResponse.partner_users_id);
                localStorage.setItem("app_or_rna", _this.registerDataResponse.app_or_rna); //This for open RNA portal as profile(1) or app profile(0)
                localStorage.setItem("users_id", _this.registerDataResponse.users_id);
                _this.events.publish('Event-UserName');
                localStorage.setItem('login', 'yes');
                localStorage.setItem('auth_token', _this.registerDataResponse.api_token);
                _this.addDeviceToken();
                _this.router.navigate(['/otpgeneratedsuccessfully']);
            }
            else {
                _this.presentAlert('Sorry!', _this.registerDataResponse.message);
            }
            // this.loadingController.dismiss()
        }, function (error) {
            _this.presentAlert('Something went wrong', '');
        });
    };
    OtpgenerationPage.prototype.addDeviceToken = function () {
        // this.presentLoading()
        var device_token = this.dataServices.getDeviceToken();
        this.dataServices.postAddDeviceToken(device_token).then(function (result) {
            // this.loadingController.dismiss()
            if (result.status == 1) {
                console.log(result.message);
            }
            else {
                console.log(result.message);
            }
            // this.loadingController.dismiss()
        }, function (error) {
            // this.loadingController.dismiss()
            console.log('Error in adding device token: ' + error);
        });
    };
    OtpgenerationPage.prototype.next = function (event, prev, next) {
        if (event.target.value.length < 1 && prev) {
            prev.focus();
            // prev.setAttribute('role', 'alert');
        }
        else if (next && event.target.value.length > 0) {
            next.focus();
            // next.setAttribute('role', 'alert');
        }
        else {
            return 0;
        }
    };
    OtpgenerationPage.prototype.goBack = function () {
        this.location.back();
    };
    OtpgenerationPage.prototype.presentLoading = function () {
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
    OtpgenerationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otpgeneration',
            template: __webpack_require__(/*! ./otpgeneration.page.html */ "./src/app/otpgeneration/otpgeneration.page.html"),
            styles: [__webpack_require__(/*! ./otpgeneration.page.scss */ "./src/app/otpgeneration/otpgeneration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _providers_OTP_sendotp_service__WEBPACK_IMPORTED_MODULE_4__["SendotpService"],
            _providers_authservices_service__WEBPACK_IMPORTED_MODULE_5__["AuthservicesService"],
            _providers_OTP_sendotp_service__WEBPACK_IMPORTED_MODULE_4__["SendotpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_7__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_8__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_9__["MobileAccessibility"]])
    ], OtpgenerationPage);
    return OtpgenerationPage;
}());



/***/ })

}]);
//# sourceMappingURL=otpgeneration-otpgeneration-module.js.map