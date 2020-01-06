import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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
        console.log("OTP" + OTP);
        return new Promise(function (resolve, reject) {
            var requestOptions = new RequestOptions();
            var headers = new Headers();
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
            var requestOptions = new RequestOptions();
            var headers = new Headers();
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
    SendotpService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], SendotpService);
    return SendotpService;
}());
export { SendotpService };
//# sourceMappingURL=sendotp.service.js.map