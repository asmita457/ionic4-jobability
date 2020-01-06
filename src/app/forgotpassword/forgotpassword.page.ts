import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController,MenuController, Events, LoadingController, NavController } from '@ionic/angular';

import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { Location } from '@angular/common';
import { AuthservicesService } from '../providers/authservices.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  showErrorIcon: boolean = false

  forgotPassForm = this.formBuilder.group({
    username: ['', Validators.required]
  }); // Forms declaration Ends Here.


  constructor
    (
      public router: Router,
      private alertCtrl: AlertController,
      private formBuilder: FormBuilder,
      public menuCtrl: MenuController,
      private mobileAccessibility: MobileAccessibility,
      private tts: TextToSpeech,
      private location: Location,
      private authService: AuthservicesService,
      public loadingController: LoadingController,

    ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Forgot Password')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }


  ngOnInit() {
  }

  forgotPasswordAPI(form) {
    // this.emailValidator()
    if (this.forgotPassForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      this.showErrorIcon = false
      this.presentLoading();
      this.authService.forgotPassword(form.username).then((res: any) => {
        this.loadingController.dismiss();
        if (res.status == 1) {
          this.presentPrompt(res.message, '');
        } else {
          this.presentAlert(res.message, '');
        }
      }, (error) => {
        this.loadingController.dismiss();
        console.log("loginSuccessWithEmail error: ", error);
        this.presentAlert('Something went wrong', '');
        this.loadingController.dismiss();
      });
    }
  }

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


  async presentPrompt(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
          // this.location.back();
          this.router.navigate(['/login']);
          this.forgotPassForm.reset();
        }
      }]
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

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
