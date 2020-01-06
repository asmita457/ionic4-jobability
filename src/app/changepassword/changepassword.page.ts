import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router } from '@angular/router';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  changePasswordForm: FormGroup;
  showErrorIcon: boolean = false
  // newPassword: any
  // confirmPassword: any
  badgecount: any

  constructor
    (
      public alertCtrl: AlertController,
      public loadingController: LoadingController,
      public dataServices: DataservicesService,
      private router: Router,
      public formBuilder: FormBuilder,
      public navCtrl: NavController,
      private tts: TextToSpeech,
      private mobileAccessibility: MobileAccessibility
    ) { }

  ngOnInit() {
    this.buildForm()
  }

  ionViewWillEnter() {
    this.getNotificationBadgeCount()
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Change Password Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  buildForm() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.required],
    });
  }


  // checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  //   let pass = group.controls.newPassword.value;
  //   let confirmPass = group.controls.confirmPassword.value;
  //   this.notSame = pass === confirmPass ? false : true
  //   return this.notSame
  // }





  submit(credentials) {
    if (this.changePasswordForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      if (credentials.newPassword != credentials.confirmPassword) {
        this.presentAlert('New password and confirm password does not match', '', 'no')
      } else {
        let postData = {
          "current_password": credentials.currentPassword,
          "new_password": credentials.newPassword,
          "uacc_id": localStorage.getItem('users_id')
        }
        this.changePasswordAPI(postData)
      }
    }
  }

  changePasswordAPI(postData: any) {
    this.presentLoading();
    this.dataServices.changePassword(postData).then((res: any) => {

      if (res.status == 1) {
        this.loadingController.dismiss()
        this.presentAlert(res.message, '', 'yes')
      } else {
        this.loadingController.dismiss()
        this.presentAlert(res.message, '', 'yes')
      }
    }, error => {
      this.loadingController.dismiss()
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
  }

  closePage() {
    let usertype = localStorage.getItem('userstype')
    if (usertype == '4') {
      this.navCtrl.navigateRoot('/dashboardemployer');

    } else if (usertype == '5') {
      this.navCtrl.navigateRoot('/dashboardjobseeker');

    } else {
      this.navCtrl.navigateRoot('/dashboardserviceprovider');
    }

  }

  getNotificationBadgeCount() {
    this.dataServices.getNotificationBadgeCount().then((result: any) => {
      if (result.status == 1) {
        this.badgecount = result.total_notification_count
      }
    }, error => {
      console.log('Error in getNotificationBadgeCount: ' + JSON.stringify(error))
    })
  }

  navigateToNotification() {
    this.router.navigate(['/notification'])
  }

  async presentAlert(title, message, redirect) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      // buttons: ['OK']
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (redirect == 'yes') {
              this.closePage()
              // this.changePasswordForm.reset()
            }
          }
        }
      ]
    });
    await alert.present();
  }

  ionViewWillLeave() {

  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
