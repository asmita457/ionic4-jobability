import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, Events, LoadingController, NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { AuthservicesService } from '../providers/authservices.service';
import { Location } from '@angular/common';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Validators, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Title } from '@angular/platform-browser';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { AppRoutingPreloaderService } from '../providers/AppRoutingPreloader/app-routing-preloader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  uacc_id: any
  showErrorIcon: boolean = false

  // Forms declaration
  loginWithGmailForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(public router: Router,
    private alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    private authService: AuthservicesService,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    private location: Location,
    public events: Events,
    public loadingController: LoadingController,
    public dataServices: DataservicesService,
    private titleService: Title,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,
    private routingService: AppRoutingPreloaderService
  ) { }

  ngOnInit() {
    this.authService.androidPermission().then((success) => {
      console.log("got android permissions" + success);
    }, error => {
      console.log("got android permissions" + error)
    })
  }

  async ionViewWillEnter() {
    await this.routingService.preloadRoute('login');
    this.menuCtrl.enable(false);
    this.uacc_id = localStorage.getItem('users_id')
    // this.titleService.setTitle('Login Screen');
    // document.title = 'Login Screen'
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Login Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  loginSuccessWithEmail(credentials) {
    if (this.loginWithGmailForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      this.showErrorIcon = false
      this.presentLoading();
      this.authService.loginEmailAPI(credentials).then((res: any) => {
        if (res.status == 1) {
          this.loadingController.dismiss();
          localStorage.clear()

          localStorage.setItem('userName', res.user_data[0].first_name)
          localStorage.setItem("users_id", res.user_data[0].users_id);
          localStorage.setItem("userstype", res.user_data[0].uacc_group_fk);
          localStorage.setItem("email", res.user_data[0].email)
          localStorage.setItem('login', 'yes');
          localStorage.setItem('auth_token', res.api_token)
          localStorage.setItem("partner_users_id", res.user_data[0].partner_users_id);
          localStorage.setItem("app_or_rna", res.user_data[0].app_or_rna);  //This for open RNA portal as profile(1) or app profile(0)
          this.addDeviceToken();
          this.dataServices.setIsAlertShown()
          this.events.publish('Event-UserName')
          if (res.user_data[0].uacc_group_fk == "5") {
            this.navCtrl.navigateRoot(['/dashboardjobseeker']);

          } else if (res.user_data[0].uacc_group_fk == "4") {
            this.navCtrl.navigateRoot(['/dashboardemployer']);

          } else {
            localStorage.setItem('id', res.user_data[0].id)
            this.navCtrl.navigateRoot(['/dashboardserviceprovider']);
          }

        } else {
          this.loadingController.dismiss();
          this.presentAlert(res.message, '');
        }
      }, (error) => {
        this.loadingController.dismiss();
        this.presentAlert('Something went wrong', '');

      });
    }
  } // loginSuccessWithEmail Function Ends Here

  showLoginCard(value) {
    if (value == 'OTP') {
      this.router.navigate(['/login-with-otp-and-forget-password']);
    } else {
      this.router.navigate(['/forgotpassword']);
    }
  }
  // Function For navigate user to back page
  backtoWelcome() {
    // if (this.uacc_id != 0) {
    // this.location.back();
    // } else {
    // }
    // this.location.back();
    this.router.navigate(['/welcomescreen']);
  }
  // backtoWelcome Function Ends Here


  addDeviceToken() {
    let device_token = this.dataServices.getDeviceToken()
    this.dataServices.postAddDeviceToken(device_token).then((result: any) => {
      console.log('Response: ' + JSON.stringify(result))
      if (result.status == 1) {
        console.log(result.message)
      } else {
        console.log(result.message)
      }
    }, error => {
      console.log('Error in adding device token: ' + error)
    })
  }

  // Function To show Alert
  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    alert.setAttribute('role', 'alert');
    await alert.present()
  } // presentAlert Function Ends Here

  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
