(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~login-login-module~otpgeneration-otpgeneration-module~register-register-module"],{

/***/ "./src/app/providers/OTP/sendotp.service.ts":
/*!**************************************************!*\
  !*** ./src/app/providers/OTP/sendotp.service.ts ***!
  \**************************************************/
/*! exports provided: SendotpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendotpService", function() { return SendotpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var SendotpService = /** @class */ (function () {
    function SendotpService(http) {
        this.http = http;
        this.APIBaseUrl = 'http://www.jobtest.jobability.org/';
    }
    //Function For Sent OTP
    SendotpService.prototype.loginUsingOTP = function (mobilenumber) {
        var _this = this;
        var mobileNumber = (mobilenumber == undefined) ? "" : mobilenumber;
        var OTP = Math.floor(100000 + Math.random() * 900000).toString().substring(0, 4);
        return new Promise(function (resolve, reject) {
            var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOptions.headers = headers;
            var postData = {
                'mobile': mobileNumber,
                'otp_number': OTP
            };
            // headers.set("Access-Control-Allow-Credentials", "true");
            // headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
            _this.http.post(_this.APIBaseUrl + "api/registration/sendotp", postData, requestOptions)
                .subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //loginUsingOTP Function Ends Here
    //Function For Sent OTP
    // loginUsingOTP(mobilenumber) {
    //   var mobileNumber = (mobilenumber == undefined) ? "" : mobilenumber;
    //   var OTP = Math.floor(100000 + Math.random() * 900000).toString().substring(0, 4);
    //   return new Promise((resolve, reject) => {
    //     var headers = new Headers();
    //     headers.append('Access-Control-Allow-Origin', '*');
    //     const requestOptions = new RequestOptions({ headers: headers });
    //     this.http.post("http://control.msg91.com/api/sendotp.php?otp_length=4&authkey=274501ASOJ0GRCFrn5cc7d0e8&message=" + OTP + " is your One Time Password (OTP) for Jobability.&sender=ABC123X&mobile=" + mobileNumber + "&otp=" + OTP + "&otp_expiry=10", requestOptions)
    //       .subscribe(data => {
    //         resolve(data.json());
    //       }, error => {
    //         console.log(error);
    //       });
    //   });
    // }
    //loginUsingOTP Function Ends Here
    // Function For Verify OTP 
    SendotpService.prototype.verifyOTP = function (OTP, mobileNumber) {
        var _this = this;
        // var mobileNumber = (mobilenumber == undefined) ? "" : mobilenumber; 
        return new Promise(function (resolve, reject) {
            var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOptions.headers = headers;
            var postData = {
                'mobile': mobileNumber,
                'otp_number': OTP
            };
            _this.http.post(_this.APIBaseUrl + "http://www.jobtest.jobability.org/api/registration/verifyotp", postData, requestOptions)
                .subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    SendotpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SendotpService);
    return SendotpService;
}());



/***/ }),

/***/ "./src/app/providers/authservices.service.ts":
/*!***************************************************!*\
  !*** ./src/app/providers/authservices.service.ts ***!
  \***************************************************/
/*! exports provided: AuthservicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthservicesService", function() { return AuthservicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





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
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
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
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
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
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
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
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
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
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
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
    AuthservicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], AuthservicesService);
    return AuthservicesService;
}());



/***/ })

}]);
//# sourceMappingURL=default~login-login-module~otpgeneration-otpgeneration-module~register-register-module.js.map