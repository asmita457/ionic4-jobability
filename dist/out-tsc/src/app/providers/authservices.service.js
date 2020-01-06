import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { NavController } from '@ionic/angular';
var AuthservicesService = /** @class */ (function () {
    function AuthservicesService(http, androidPermissions, navCtrl) {
        this.http = http;
        this.androidPermissions = androidPermissions;
        this.navCtrl = navCtrl;
        this.APIBaseUrl = 'http://www.jobtest.jobability.org/';
    }
    AuthservicesService.prototype.loginOTPAPI = function (mobile) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "mobile": mobile
            };
            _this.http.post(_this.APIBaseUrl + 'api/auth/login_mobile', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    AuthservicesService.prototype.loginEmailAPI = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            // headers.set("Access-Control-Allow-Origin",'*');
            // headers.set("Access-Control-Allow-Credentials", "true");
            // headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
            requestOpt.headers = headers;
            var postData = {
                "login_identity": credentials.username,
                "login_password": credentials.password
            };
            _this.http.post(_this.APIBaseUrl + 'api/auth/login', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    AuthservicesService.prototype.registerUser = function (otpverify, profileType, mobile, email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            // headers.append('Access-Control-Allow-Origin' , '*');
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            // let pType = localStorage.getItem('UserID')
            var postData = {
                'otp_verify': otpverify,
                'profile_type': profileType,
                'mobile_no': mobile,
                'email': email,
                'password': password
            };
            _this.http.post(_this.APIBaseUrl + 'api/registration/signup', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    AuthservicesService.prototype.checkExistingData = function (registerForm) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            // headers.append('Access-Control-Allow-Origin' , '*');
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                'profile_type': registerForm.profileType,
                'mobile_no': registerForm.mobile,
                'email': registerForm.username,
                'password': registerForm.password
            };
            _this.http.post(_this.APIBaseUrl + 'api/registration/check_exist_data', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    AuthservicesService.prototype.androidPermission = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) { return console.log('Has permission?', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.CAMERA); });
                this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (result) { return console.log('Has permission?', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE); });
                // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]);
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (result) { return console.log('Has permission?', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE); });
                this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]);
                return [2 /*return*/];
            });
        });
    };
    // Function call if user clicked on forget his password
    AuthservicesService.prototype.forgotPassword = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "email": email
            };
            _this.http.post(_this.APIBaseUrl + 'api/auth/forgotten_password', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    AuthservicesService.prototype.navigateUnauthoriseUser = function () {
        this.navCtrl.navigateRoot('/dashboardjobseeker');
    };
    AuthservicesService.prototype.open_R_and_A_Portal = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            _this.http.post('http://139.162.41.11:80/public/auth/register', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    AuthservicesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http,
            AndroidPermissions,
            NavController])
    ], AuthservicesService);
    return AuthservicesService;
}());
export { AuthservicesService };
//# sourceMappingURL=authservices.service.js.map