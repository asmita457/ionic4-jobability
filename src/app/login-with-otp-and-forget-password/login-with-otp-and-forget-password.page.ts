import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthservicesService } from '../providers/authservices.service';
import { AlertController, Events, LoadingController, NavController } from '@ionic/angular';
import { SendotpService } from '../providers/OTP/sendotp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@Component({
  selector: 'app-login-with-otp-and-forget-password',
  templateUrl: './login-with-otp-and-forget-password.page.html',
  styleUrls: ['./login-with-otp-and-forget-password.page.scss'],
})
export class LoginWithOtpAndForgetPasswordPage implements OnInit {

  showErrorIcon: boolean = false

  loginWithOTPForm = this.formBuilder.group({
    mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
  });

  
  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthservicesService,
    public events: Events,
    public loadingController: LoadingController,
    private SendOTP: SendotpService,
    public router: Router,
    private alertCtrl: AlertController,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,
    private location: Location

  ) {

    // this.titleService.setTitle(this.pageTitle);

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // this.titleService.setTitle(this.pageTitle + 'Screen');
    // document.title = this.pageTitle + ' Screen'
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Login With OTP Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }
  // Function For Login With OTP
  loginSuccessWithOTP(form) {
    if (this.loginWithOTPForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      this.presentLoading();
      this.authService.loginOTPAPI(form.mobile).then((res: any) => {
        if (res.status == 1) {
          localStorage.setItem("users_id", res.user_data[0].users_id)
          localStorage.setItem("userstype", res.user_data[0].uacc_group_fk)
          localStorage.setItem('userName', res.user_data[0].first_name)
          localStorage.setItem('auth_token', res.api_token)
          localStorage.setItem("partner_users_id", res.user_data[0].partner_users_id);
          localStorage.setItem("app_or_rna", res.user_data[0].app_or_rna);  //This for open RNA portal as profile(1) or app profile(0)

          if (res.user_data[0].uacc_group_fk == '8') {
            localStorage.setItem('id', res.user_data[0].id)
            localStorage.setItem("email", res.user_data[0].email)
          }

          this.events.publish('Event-UserName')
          this.loadingController.dismiss();

          this.loginSendOTP(form.mobile);
        }
        else {
          this.loadingController.dismiss();
          this.presentAlert(res.message, '');
        }
      }, (error) => {
        this.loadingController.dismiss();
        console.log(error);
        this.presentAlert('Something went wrong', '');
      });
    }
  } // loginSuccessWithOTP Function Ends Here

  // Function To send OTP
  loginSendOTP(mobileNumber) {
    this.presentLoading();

    this.SendOTP.loginUsingOTP(mobileNumber).then((res: any) => {
      if (res.status == 1) {
        this.loadingController.dismiss();
        localStorage.setItem('otpFlag', '0');
        this.router.navigate(['/otpgeneration', { mobileNumber: mobileNumber }]);
      } else {
        this.loadingController.dismiss();
        this.presentAlert('', res.message);
      }
    }, (error) => {
      this.loadingController.dismiss();
      alert(error);

    });
  }
  // loginSendOTP Function Ends Here


  backtoWelcome() {
    this.router.navigate(['/login']);
    // this.navCtrl.navigateRoot('/login');

    // this.location.back();

  }

  // Function To show Alert
  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    alert.setAttribute('role', 'alert');
    await alert.present();
  } // presentAlert Function Ends Here

  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

