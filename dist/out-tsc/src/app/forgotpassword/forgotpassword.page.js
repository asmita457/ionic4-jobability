import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, LoadingController } from '@ionic/angular';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { Location } from '@angular/common';
import { AuthservicesService } from '../providers/authservices.service';
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
            username: ['', Validators.required]
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
    ForgotpasswordPage.prototype.presentPrompt = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
    ForgotpasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-forgotpassword',
            templateUrl: './forgotpassword.page.html',
            styleUrls: ['./forgotpassword.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AlertController,
            FormBuilder,
            MenuController,
            MobileAccessibility,
            TextToSpeech,
            Location,
            AuthservicesService,
            LoadingController])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());
export { ForgotpasswordPage };
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
//# sourceMappingURL=forgotpassword.page.js.map