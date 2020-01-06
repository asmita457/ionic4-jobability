import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, LoadingController, NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { SendotpService } from '../providers/OTP/sendotp.service';
import { AuthservicesService } from '../providers/authservices.service';
import { Location } from '@angular/common';
import { Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, alertCtrl, formBuilder, SendOTP, navCtrl, authService, menuCtrl, location, loadingController, titleService, tts, mobileAccessibility) {
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
        this.profiletypeArray = [
            'Job Seeker',
            'Employer',
            'Service Provider'
        ];
        this.registrationForm = this.formBuilder.group({
            username: ['', Validators.required],
            mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            profileType: ['', Validators.required],
        }); // Forms declaration Ends Here.
        this.hide = true;
        this.showErrorIcon = false;
        this.readProfileType = '';
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.authService.androidPermission().then(function (success) {
            console.log("got android permissions" + success);
        }, function (error) {
            console.log("got android permissions" + error);
        });
    };
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
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
    RegisterPage.prototype.selectedProfileType = function (type) {
        this.readProfileType = '';
        this.readProfileType = 'Sign up as' + type;
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
                _this.router.navigate(['/otpgeneration', { mobileNumber: registretionForm.mobile, emailId: registretionForm.username, password: registretionForm.password, profileType: registretionForm.profileType }]);
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
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.presentAlert = function (title, message) {
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
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AlertController,
            FormBuilder,
            SendotpService,
            NavController,
            AuthservicesService,
            MenuController,
            Location,
            LoadingController,
            Title,
            TextToSpeech,
            MobileAccessibility])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
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
//# sourceMappingURL=register.page.js.map