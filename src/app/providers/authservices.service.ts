import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { NavController } from '@ionic/angular';

declare var SMSReceive: any;

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {


  APIBaseUrl = 'http://www.jobability.org/'
  constructor(
    public http: Http,
    private androidPermissions: AndroidPermissions,
    public navCtrl: NavController


  ) { }

  loginOTPAPI(mobile) {
    return new Promise((resolve, reject) => {

      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      requestOpt.headers = headers
      var postData = {
        "mobile": mobile
      }
      this.http.post(this.APIBaseUrl + 'api/auth/login_mobile', postData, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  loginEmailAPI(credentials) {
    return new Promise((resolve, reject) => {

      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      // headers.set("Access-Control-Allow-Origin",'*');
      // headers.set("Access-Control-Allow-Credentials", "true");
      // headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");

      requestOpt.headers = headers
      var postData = {
        "login_identity": credentials.username,
        "login_password": credentials.password
      }
      this.http.post(this.APIBaseUrl + 'api/auth/login', postData, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  registerUser(otpverify, profileType, mobile, email, password, name, partner_id) {
    return new Promise((resolve, reject) => {

      var requestOpt = new RequestOptions()
      var headers = new Headers()
      // headers.append('Access-Control-Allow-Origin' , '*');
      headers.set('Content-Type', 'application/json')

      requestOpt.headers = headers
      // let pType = localStorage.getItem('UserID')
      var postData = {
        'otp_verify': otpverify,
        'profile_type': profileType,
        'mobile_no': mobile,
        'email': email,
        'password': password,
        'name': name,
        'partner_id': partner_id
      }
      this.http.post(this.APIBaseUrl + 'api/registration/signup', postData, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  checkExistingData(registerForm) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      // headers.append('Access-Control-Allow-Origin' , '*');
      headers.set('Content-Type', 'application/json')
      requestOpt.headers = headers
      var postData = {
        'profile_type': registerForm.profileType,
        'mobile_no': registerForm.mobile,
        'email': registerForm.username,
        'password': registerForm.password
      }
      this.http.post(this.APIBaseUrl + 'api/registration/check_exist_data', postData, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  async androidPermission() {


    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
    );
    // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]);

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]);

    SMSReceive.startWatch()
  }

  // Function call if user clicked on forget his password
  forgotPassword(email) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      requestOpt.headers = headers
      var postData = {
        "email": email
      }
      this.http.post(this.APIBaseUrl + 'api/auth/forgotten_password', postData, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  navigateUnauthoriseUser(){
    this.navCtrl.navigateRoot('/dashboardjobseeker');
  }

  open_R_and_A_Portal(postData) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      requestOpt.headers = headers
     
      this.http.post(this.APIBaseUrl +'api/registration/redirect_rna_portal', postData, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


}
