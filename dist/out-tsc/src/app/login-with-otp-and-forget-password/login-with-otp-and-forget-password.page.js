import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthservicesService } from '../providers/authservices.service';
import { AlertController, Events, LoadingController } from '@ionic/angular';
import { SendotpService } from '../providers/OTP/sendotp.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
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
            mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib_1.__generator(this, function (_b) {
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
    LoginWithOtpAndForgetPasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-login-with-otp-and-forget-password',
            templateUrl: './login-with-otp-and-forget-password.page.html',
            styleUrls: ['./login-with-otp-and-forget-password.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            AuthservicesService,
            Events,
            LoadingController,
            SendotpService,
            Router,
            AlertController,
            TextToSpeech,
            MobileAccessibility,
            Location])
    ], LoginWithOtpAndForgetPasswordPage);
    return LoginWithOtpAndForgetPasswordPage;
}());
export { LoginWithOtpAndForgetPasswordPage };
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
export { MyErrorStateMatcher };
//# sourceMappingURL=login-with-otp-and-forget-password.page.js.map