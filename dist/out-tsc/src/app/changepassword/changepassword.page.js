import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(alertCtrl, loadingController, dataServices, router, formBuilder, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.router = router;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.showErrorIcon = false;
    }
    ChangepasswordPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ChangepasswordPage.prototype.ionViewWillEnter = function () {
        this.getNotificationBadgeCount();
    };
    ChangepasswordPage.prototype.buildForm = function () {
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            confirmPassword: ['', Validators.required],
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
    ChangepasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-changepassword',
            templateUrl: './changepassword.page.html',
            styleUrls: ['./changepassword.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            LoadingController,
            DataservicesService,
            Router,
            FormBuilder,
            NavController])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());
export { ChangepasswordPage };
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
//# sourceMappingURL=changepassword.page.js.map