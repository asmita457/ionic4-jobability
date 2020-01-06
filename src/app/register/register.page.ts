import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, LoadingController, NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { SendotpService } from '../providers/OTP/sendotp.service';
import { AuthservicesService } from '../providers/authservices.service';
import { Location } from '@angular/common';
import { Validators, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Title } from '@angular/platform-browser';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AppRoutingPreloaderService } from '../providers/AppRoutingPreloader/app-routing-preloader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  profiletypeArray: any = [
    'Job Seeker',
    'Employer',
    'Service Provider'
  ];
  partnerList = [];

  registrationForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    profileType: ['', Validators.required],
    partner_id: [0]
  }); // Forms declaration Ends Here.


  hide = true;
  showErrorIcon: boolean = false
  readProfileType: string = ''
  readPartnerValue: string = ''
  isJobSeekerSelected = false

  constructor(
    public router: Router,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private SendOTP: SendotpService,
    public navCtrl: NavController,
    private authService: AuthservicesService,
    public menuCtrl: MenuController,
    private location: Location,
    public loadingController: LoadingController,
    private titleService: Title,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,
    private dataServices: DataservicesService,
    private routingService: AppRoutingPreloaderService
  ) { }


  ngOnInit() {
    this.setValidatorForJobSeeker()
    this.authService.androidPermission().then((success) => {
      console.log("got android permissions" + success);
    }, error => {
      console.log("got android permissions" + error)
    })
  }


  async ionViewWillEnter() {
    await this.routingService.preloadRoute('login');
    this.menuCtrl.enable(false);
    this.getPartnerList()
  }

  ionViewDidEnter() {
    // this.titleService.setTitle('Sign Up');
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Sign up screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  goBack() {
    this.location.back();
  }

  setValidatorForJobSeeker() {
    const name = this.registrationForm.get('name')
    const partner_id = this.registrationForm.get('partner_id')
    this.registrationForm.get('profileType').valueChanges.subscribe(profileType => {
      console.log('profileType: ' + profileType)
      if (profileType == 'Job Seeker') {
        this.isJobSeekerSelected = true
        name.setValidators([Validators.required])
        // partner_id.setValidators()
      } else {
        this.isJobSeekerSelected = false
        name.setValidators(null)
      }
      name.updateValueAndValidity()
    })
  }

  getPartnerList() {
    this.dataServices.getPartnerList().then((response: any) => {
      console.log('Partner List: ' + JSON.stringify(response))
      this.partnerList = response.partner_list
    }, error => {
      console.log('Error: ' + JSON.stringify(error))
    }).catch(err => {
      console.log('Error in catch: ' + JSON.stringify(err))
    })
  }

  selectedProfileType(type) {
    this.readProfileType = '';
    this.readProfileType = 'Sign up as' + type;
  }

  selectedPartner(partnerValue) {
    this.readPartnerValue = '';
    this.readPartnerValue = 'Partner name is ' + partnerValue.value.organization_name;
  }

  register(registerForm) {
    if (this.registrationForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      this.showErrorIcon = false
      this.presentLoading();
      this.authService.checkExistingData(registerForm).then((res: any) => {
        this.loadingController.dismiss();
        if (res.status == 1) {
          this.checkOTPAPI(registerForm);
        }
        else {
          this.presentAlert(res.message, '');
        }
      }, (error) => {
        alert(error);
      });
    }
  }



  checkOTPAPI(registretionForm) {
    this.presentLoading();
    this.SendOTP.loginUsingOTP(registretionForm.mobile).then((res: any) => {
      this.loadingController.dismiss();
      if (res.status == 1) {

        localStorage.setItem('otpFlag', '1');
        this.router.navigate(['/otpgeneration', { mobileNumber: registretionForm.mobile, emailId: registretionForm.username, password: registretionForm.password, profileType: registretionForm.profileType, name: registretionForm.name, partner_id: registretionForm.partner_id.id == undefined ? registretionForm.partner_id : registretionForm.partner_id.id }]);
      } else {
        this.presentAlert('', res.message);
      }
    }, (error) => {
      console.log(error);
    });
    // this.router.navigate(['/otpgeneration']);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);
  }

  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    alert.setAttribute('role', 'alert');
    await alert.present();
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

