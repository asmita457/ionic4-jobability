import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, AlertController, Events, NavController } from '@ionic/angular';
import { SendotpService } from '../providers/OTP/sendotp.service';
import { AuthservicesService } from '../providers/authservices.service';
import { Location } from '@angular/common';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController } from '@ionic/angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

declare var SMSReceive: any;

@Component({
  selector: 'app-otpgeneration',
  templateUrl: './otpgeneration.page.html',
  styleUrls: ['./otpgeneration.page.scss'],
})
export class OtpgenerationPage implements OnInit {

  firstdigit: number;
  seconddigit: number;
  thirddigit: number;
  fourthdigit: number;
  mobileNumber: any;
  verifuOtpResponse: any;
  registerDataResponse: any
  profileType: any
  email: any
  password: any
  mobile: any
  sendOtpResponce: any;
  userType: any
  splitMobile: '';
  sentOtpMsg: any
  inputvalue: any;
  otpFlag: any;
  otp_value1 = ""
  otp_value2 = ""
  otp_value3 = ""
  otp_value4 = ""
  role: any
  inputFiedlsROle = "alertdialog"
  isOTPRecived = false;
  isVerifiedOTP = false;
  firstDigit = "Enter OTP first digit";
  secondDigit = "Enter OTP Second digit";
  thirdDigit = "Enter OTP third digit";
  fourthDigit = "Enter OTP fourth digit";
  isDisable = false;

  name = ''
  partner_id

  constructor(

    public router: Router,
    private alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute,
    public menuCtrl: MenuController,
    private SendOTP: SendotpService,
    public authService: AuthservicesService,
    private verifyOTP: SendotpService,
    private location: Location,
    public events: Events,
    public navctrl: NavController,
    public dataServices: DataservicesService,
    public loadingController: LoadingController,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility

  ) {

    this.mobileNumber = this.activatedRoute.snapshot.paramMap.get("mobileNumber");
    this.splitMobile = this.mobileNumber.split('').join(' ').replace(/0/g, 'zero');
    this.sentOtpMsg = "We have sent an OTP (one time password) to your mobile number ";
    this.sentOtpMsg = this.sentOtpMsg.concat(this.splitMobile);
    this.email = this.activatedRoute.snapshot.paramMap.get("emailId");
    this.password = this.activatedRoute.snapshot.paramMap.get("password");
    this.profileType = this.activatedRoute.snapshot.paramMap.get("profileType");
    this.otpFlag = localStorage.getItem("otpFlag");
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    this.partner_id = this.activatedRoute.snapshot.paramMap.get("partner_id");
  }

  ionViewWillEnter() {
    // const info = JSON.parse(this.activatedRoute.snapshot.paramMap.get('info'));
    // console.log('info array: ' + info);

    // this.profileType = info.profileType;
    // this.email = info.email;
    // this.password = info.password;
    // this.mobile = info.mobile;
    this.menuCtrl.enable(false);
    this.startSMSReceiving()
  }

  ionViewDidEnter() {
    // this.mobileAccessibility.isScreenReaderRunning().then(bool => {
    //   if (bool) {
    //     setTimeout(() => {
    //       this.tts.speak('Enter OTP Screen')
    //         .then(() => console.log('Success'))
    //         .catch((reason: any) => console.log(reason));
    //     }, 1000);
    //   }
    // })
  }

  ionViewWillDismiss() {
    SMSReceive.stopWatch(
      () => { console.log('watch stopped') },
      () => { console.log('watch stop failed') }
    )
  }

  startSMSReceiving() {
    SMSReceive.startWatch(
      () => {
        // alert('watch started');
        document.addEventListener('onSMSArrive', (e: any) => {
          // alert('onSMSArrive()');
          var IncomingSMS = e.data;
          if (IncomingSMS.address.split("-")[1] == "JOBAPP") {
            this.otp_value1 = IncomingSMS.body.split(" ")[0].split("")[0]
            this.otp_value2 = IncomingSMS.body.split(" ")[0].split("")[1]
            this.otp_value3 = IncomingSMS.body.split(" ")[0].split("")[2]
            this.otp_value4 = IncomingSMS.body.split(" ")[0].split("")[3]
            // // alert("OTP: " + JSON.stringify(IncomingSMS.body.split(" ")[0]));
            // if (!this.isVerifiedOTP) {
            // this.isVerifiedOTP = true
            // this.otpGeneratedSuccessfully()
            // }
            this.firstDigit = "";
            this.secondDigit = "";
            this.thirdDigit = "";
            this.fourthDigit = "";
            this.inputFiedlsROle = "";
            this.isDisable = true;

            setTimeout(() => {
              this.isOTPRecived = true
              this.role = "alertdialog"
            }, 5000)
          }
        });
      },
      () => { console.log('watch start failed') }
    )
  }

  ngOnInit() {
  }

  otpGeneratedSuccessfully() {
    this.presentLoading()
    let OTP = this.otp_value1 + '' + this.otp_value2 + '' + this.otp_value3 + '' + this.otp_value4
    this.verifyOTP.verifyOTP(OTP, this.mobileNumber).then((res) => {
      this.loadingController.dismiss()
      this.verifuOtpResponse = res;
      if (this.verifuOtpResponse.status == 1) {

        if (this.otpFlag == '1') {
          this.registerAPICall(1);
        } else {
          this.addDeviceToken()
          let userstype = localStorage.getItem('userstype');
          if (userstype == "5") {
            localStorage.setItem('login', 'yes');
            this.navctrl.navigateRoot(['/dashboardjobseeker']);
            return;
          }
          if (userstype == "4") {
            localStorage.setItem('login', 'yes');
            this.navctrl.navigateRoot(['/dashboardemployer']);
            return;
          }
          if (userstype == "8") {
            localStorage.setItem('login', 'yes');
            // this.router.(['/dashboardserviceprovider', { skipLocationChange: true }]);
            this.navctrl.navigateRoot(['/dashboardserviceprovider'])
            return;
          }
        }
      }
      else {
        this.presentAlert(this.verifuOtpResponse.message, '');
      }
    }, (error) => {
      this.loadingController.dismiss()
      console.log(error);
    });
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    alert.setAttribute('role', 'alert');
    await alert.present();
  }

  resendOTP() {
    this.SendOTP.loginUsingOTP(this.mobile).then((res) => {
      this.sendOtpResponce = res;
      if (this.sendOtpResponce.type == "success") {
        // this.navCtrl.navigateForward(`/otpgeneration/${JSON.stringify(info)}`);
      }
      else {
        this.presentAlert('Sorry', 'Please check OTP');
      }
    }, (error) => {
      this.presentAlert('Something went wrong', '');
    });
  }

  registerAPICall(otpVerify) {
    // this.presentLoading()
    this.authService.registerUser(otpVerify, this.profileType, this.mobileNumber, this.email, this.password, this.name, this.partner_id).then((res) => {
      this.registerDataResponse = res;
      if (this.registerDataResponse.status == 1) {
        this.userType = this.registerDataResponse.profile_type;
        localStorage.setItem('userName', this.registerDataResponse.name)
        localStorage.setItem("userstype", this.registerDataResponse.uacc_group_fk);
        localStorage.setItem('RegisterProfileType', this.registerDataResponse.profile_type);
        // this.presentAlert('Registered', this.registerDataResponse.message);
        localStorage.setItem("partner_users_id", this.registerDataResponse.partner_users_id);
        localStorage.setItem("app_or_rna", this.registerDataResponse.app_or_rna);  //This for open RNA portal as profile(1) or app profile(0)
        localStorage.setItem("users_id", this.registerDataResponse.users_id);
        this.events.publish('Event-UserName')
        localStorage.setItem('login', 'yes');
        localStorage.setItem('auth_token', this.registerDataResponse.api_token)
        this.addDeviceToken()

        this.router.navigate(['/otpgeneratedsuccessfully']);
      } else {
        this.presentAlert('Sorry!', this.registerDataResponse.message);
      }
      // this.loadingController.dismiss()

    }, (error) => {
      this.presentAlert('Something went wrong', '');
    });
  }

  addDeviceToken() {
    // this.presentLoading()
    let device_token = this.dataServices.getDeviceToken()
    this.dataServices.postAddDeviceToken(device_token).then((result: any) => {
      // this.loadingController.dismiss()
      if (result.status == 1) {
        console.log(result.message)
      } else {
        console.log(result.message)
      }
      // this.loadingController.dismiss()

    }, error => {
      // this.loadingController.dismiss()
      console.log('Error in adding device token: ' + error)
    })
  }

  next(event, prev, next) {
    if (event.target.value.length < 1 && prev) {
      prev.focus();
      // prev.setAttribute('role', 'alert');
    } else if (next && event.target.value.length > 0) {
      next.focus();
      // next.setAttribute('role', 'alert');
    } else {
      return 0;
    }
  }

  goBack() {
    this.location.back();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
  }
}