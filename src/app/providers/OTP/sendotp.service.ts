import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SendotpService {
  result: any;
  number: any;
  APIBaseUrl = 'http://www.jobability.org/'

  constructor(
    public http: Http,

  ) { }


  //Function For Sent OTP
  loginUsingOTP(mobilenumber) {
    
    var mobileNumber = (mobilenumber == undefined) ? "" : mobilenumber;
    var OTP = Math.floor(100000 + Math.random() * 900000).toString().substring(0, 4);
    console.log("OTP"+OTP)
    return new Promise((resolve, reject) => {
      var requestOptions = new RequestOptions()
      var headers = new Headers()

      headers.set('Content-Type', 'application/json')
      requestOptions.headers = headers;

      var postData = {
        'mobile': mobileNumber,
        'otp_number': OTP
      }
      // headers.set("Access-Control-Allow-Credentials", "true");
      // headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
      this.http.post(this.APIBaseUrl + "api/registration/sendotp", postData, requestOptions)
        .subscribe((response) => {
          console.log("Data", response.json());
          resolve(response.json())
        }, error => {
          console.log("Error", error)
          reject(error)
        })
    });

  }
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
  verifyOTP(OTP, mobileNumber) {
    // var mobileNumber = (mobilenumber == undefined) ? "" : mobilenumber; 
    return new Promise((resolve, reject) => {

      var requestOptions = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      requestOptions.headers = headers;

      var postData = {
        'mobile': mobileNumber,
        'otp_number': OTP
      }

      this.http.post(this.APIBaseUrl + "api/registration/verifyotp", postData, requestOptions)
        .subscribe((response) => {
          console.log("Data", response.json());
          resolve(response.json())
        }, error => {
          console.log("Error", error)
          reject(error)
        })
    });
  }

  //Verify OTP Function Ends Here

  // Function For Verify OTP 
  // verifyOTP(OTP, mobileNumber) {

  //   // var mobileNumber = (mobilenumber == undefined) ? "" : mobilenumber; 

  //   return new Promise((resolve, reject) => {
  //     var headers = new Headers();

  //     headers.append('Access-Control-Allow-Origin', '*');
  //     const requestOptions = new RequestOptions({ headers: headers });

  //     this.http.post("https://control.msg91.com/api/verifyRequestOTP.php?authkey=274501ASOJ0GRCFrn5cc7d0e8&mobile=" + mobileNumber + "&otp=" + OTP, requestOptions)
  //       .subscribe(data => {

  //         resolve(data.json());

  //       }, error => {

  //         console.log(error);

  //       });
  //   });
  // }
  //Verify OTP Function Ends Here

}



