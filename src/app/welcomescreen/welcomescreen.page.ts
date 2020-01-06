import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, LoadingController, NavController, Platform } from '@ionic/angular';
import { Title } from '@angular/platform-browser';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@Component({
  selector: 'app-welcomescreen',
  templateUrl: './welcomescreen.page.html',
  styleUrls: ['./welcomescreen.page.scss'],
})
export class WelcomescreenPage implements OnInit {

  jobtitle = ""
  location = ""
  public post: any = { color: 'primary' };

  constructor(
    public router: Router,
    public menuCtrl: MenuController,
    private titleService: Title,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,
    public loadingController: LoadingController,
    public navctrl: NavController,
    private platform: Platform
  ) {
  }

  ngOnInit() {
    // this.platform.ready().then(() => {
      // let loginSession = localStorage.getItem('login');
      // if (loginSession == 'yes') {
      //   let loginUserStatus = localStorage.getItem('userstype');
      //   if (loginUserStatus == "4" || loginUserStatus == "Employer") {
      //     this.navctrl.navigateRoot(['/dashboardemployer']);
      //     return;
      //   }
      //   else if (loginUserStatus == "5" || loginUserStatus == "Job Seeker") {
      //     this.navctrl.navigateRoot(['/dashboardjobseeker']);
      //     // this.router.navigate(['/otpgeneration']);
      //     return;
      //   }
      //   //  (loginUserStatus == "8" || loginUserStatus == "Service Provider") 
      //   else {
      //     this.navctrl.navigateRoot(['/dashboardserviceprovider']);
      //     return;
      //   }
      // } else {
      //   loginSession = 'no'
      // }
    // })
  }

  //Function for drawer disabled on launch
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    let loginSession = localStorage.getItem('login');
    if (loginSession == 'yes') {
      // let loginUserStatus = localStorage.getItem('userstype');
      // if (loginUserStatus == "4" || loginUserStatus == "Employer") {
      //   this.navctrl.navigateRoot(['/dashboardemployer']);
      //   return;
      // }
      // else if (loginUserStatus == "5" || loginUserStatus == "Job Seeker") {
      //   this.navctrl.navigateRoot(['/dashboardjobseeker']);
      //   // this.router.navigate(['/otpgeneration']);
      //   return;
      // }
      // //  (loginUserStatus == "8" || loginUserStatus == "Service Provider") 
      // else {
      //   this.navctrl.navigateRoot(['/dashboardserviceprovider']);
      //   return;
      // }
    } else {
      this.loadingController.dismiss();
      localStorage.clear();
    }
  }

  ionViewDidEnter() {
    // this.titleService.setTitle('Welcome Screen');
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Welcome Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }


  //Function for search job.
  jobSearchFunction() {

    localStorage.setItem('freeSearch', '1')
    localStorage.setItem('jobtitle', this.jobtitle);
    localStorage.setItem('location', this.location);
    localStorage.setItem('login', 'no');


    let info = {
      // searchInfo: this.resultData.search_result_data,
      jobtitle: this.jobtitle,
      location: this.location,
    }
    this.router.navigate(['/searchjobs', { item: JSON.stringify(info) }])
    // alert('Coming Soon...')
  }

  //Navigate to Register user
  signUp() {
    this.router.navigate(['/register']);
  }

  //Navigate to login screen
  signIn() {
    this.router.navigate(['/login']);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'circles'
    });
    await loading.present();
  }

  ionViewWillLeave() {
    this.loadingController.dismiss();
  }
}
