import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, AlertController, Events, NavController } from '@ionic/angular';
import { SendotpService } from '../providers/OTP/sendotp.service';
import { AuthservicesService } from '../providers/authservices.service';
import { Location } from '@angular/common';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController } from '@ionic/angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
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
        this.mobileNumber = this.activatedRoute.snapshot.paramMap.get("mobileNumber");
        this.splitMobile = this.mobileNumber.split('').join(' ').replace(/0/g, 'zero');
        this.sentOtpMsg = "We have sent an OTP (one time password) to your mobile number ";
        this.sentOtpMsg = this.sentOtpMsg.concat(this.splitMobile);
        this.email = this.activatedRoute.snapshot.paramMap.get("emailId");
        this.password = this.activatedRoute.snapshot.paramMap.get("password");
        this.profileType = this.activatedRoute.snapshot.paramMap.get("profileType");
        this.otpFlag = localStorage.getItem("otpFlag");
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
        this.authService.registerUser(otpVerify, this.profileType, this.mobileNumber, this.email, this.password).then(function (res) {
            _this.registerDataResponse = res;
            if (_this.registerDataResponse.status == 1) {
                _this.userType = _this.registerDataResponse.profile_type;
                localStorage.setItem("userstype", _this.registerDataResponse.uacc_group_fk);
                localStorage.setItem('RegisterProfileType', _this.registerDataResponse.profile_type);
                // this.presentAlert('Registered', this.registerDataResponse.message);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
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
    OtpgenerationPage = tslib_1.__decorate([
        Component({
            selector: 'app-otpgeneration',
            templateUrl: './otpgeneration.page.html',
            styleUrls: ['./otpgeneration.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AlertController,
            ActivatedRoute,
            MenuController,
            SendotpService,
            AuthservicesService,
            SendotpService,
            Location,
            Events,
            NavController,
            DataservicesService,
            LoadingController,
            TextToSpeech,
            MobileAccessibility])
    ], OtpgenerationPage);
    return OtpgenerationPage;
}());
export { OtpgenerationPage };
//# sourceMappingURL=otpgeneration.page.js.map