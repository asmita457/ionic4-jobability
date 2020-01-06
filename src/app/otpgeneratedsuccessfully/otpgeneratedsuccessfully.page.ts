import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@Component({
  selector: 'app-otpgeneratedsuccessfully',
  templateUrl: './otpgeneratedsuccessfully.page.html',
  styleUrls: ['./otpgeneratedsuccessfully.page.scss'],
})
export class OtpgeneratedsuccessfullyPage implements OnInit {
  role: any;
  constructor(public router: Router,
    public menuCtrl: MenuController,
    public dataServices: DataservicesService,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,
    public navCtrl: NavController,

  ) { }


  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    setTimeout(() => {
      this.role = "alertdialog";
    }, 2000)
  }

  ionViewDidEnter() {
    // this.mobileAccessibility.isScreenReaderRunning().then(bool => {
    //   if (bool) {
    //     setTimeout(() => {
    //       this.tts.speak('Verified OTP Screen')
    //         .then(() => console.log('Success'))
    //         .catch((reason: any) => console.log(reason));
    //     }, 1000);
    //   }
    // })
  }

  jobseekerDashboard() {
    this.dataServices.setIsAlertShown()

    let RegisterProfileType = localStorage.getItem('RegisterProfileType');
    if (RegisterProfileType == "Job Seeker") {
      this.navCtrl.navigateRoot(['/dashboardjobseeker']);
      return;
    }
    if (RegisterProfileType == "Employer") {
      this.navCtrl.navigateRoot(['/dashboardemployer']);
      return;
    }
    if (RegisterProfileType == "Service Provider") {
      this.navCtrl.navigateRoot(['/dashboardserviceprovider']);
      return;
    }
  }



}
