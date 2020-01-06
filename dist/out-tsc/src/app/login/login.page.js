import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, Events, LoadingController, NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { AuthservicesService } from '../providers/authservices.service';
import { Location } from '@angular/common';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, alertCtrl, formBuilder, authService, menuCtrl, navCtrl, location, events, loadingController, dataServices, titleService, tts, mobileAccessibility) {
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
        this.showErrorIcon = false;
        // Forms declaration
        this.loginWithGmailForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
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
        this.menuCtrl.enable(false);
        this.uacc_id = localStorage.getItem('users_id');
        // this.titleService.setTitle('Login Screen');
        // document.title = 'Login Screen'
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        // this.titleService.setTitle('Login');
        // this.loginWithGmailForm.reset();
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
    LoginPage.prototype.presentLoading = function () {
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
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AlertController,
            FormBuilder,
            AuthservicesService,
            MenuController,
            NavController,
            Location,
            Events,
            LoadingController,
            DataservicesService,
            Title,
            TextToSpeech,
            MobileAccessibility])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
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
//# sourceMappingURL=login.page.js.map