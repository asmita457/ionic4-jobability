import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Platform, AlertController, Events, NavController, LoadingController, ActionSheetController, ToastController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { DataservicesService } from './providers/dataservices/dataservices.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { Location } from '@angular/common';
import { FCM } from '@ionic-native/fcm/ngx';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';
import { LocalNotifications, ELocalNotificationTriggerUnit, ILocalNotificationActionType, ILocalNotification } from '@ionic-native/local-notifications/ngx';
import { environment } from 'src/environments/environment';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { AuthservicesService } from './providers/authservices.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild('sideMenu') sideMenuRef;
  @ViewChild('myInput') myInput;
  userstype: any
  appPages: any
  appversion: any
  uacc_id: any
  resultData: any
  verify_email: any
  employerInformation: any
  PhotoData: any
  imagePath: any
  lastImage: any
  photos: any
  isLogoAvailable: any = false
  profileLogoInfoResult: any
  seekerLogin: any
  checkEmail: any
  business_email: any
  userName: any
  menuCount: number
  id: any

  first_name: any
  last_name: any;
  mobile: any
  usersId: any
  isFirstNameEmpty: boolean = false;

  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    // clearcache : 'yes',
    // clearsessioncache : 'yes',
    zoom: 'no',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only
    EnableViewPortScale: 'yes'

  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertCtrl: AlertController,
    private router: Router,
    public events: Events,
    private appVersion: AppVersion,
    public navctrl: NavController,
    public loadingController: LoadingController,
    public dataServices: DataservicesService,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    public http: Http,
    private file: File,
    private filePath: FilePath,
    public toastCtrl: ToastController,
    private transfer: FileTransfer,
    private location: Location,
    private fcm: FCM,
    private localNotifications: LocalNotifications,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,
    private menu: MenuController,
    private renderer: Renderer2,
    private authService: AuthservicesService,
    private iab: InAppBrowser,
    // private androidPermissions: AndroidPermissions
  ) {
    // this.userstype = 4;
    // this.userstype = localStorage.getItem('userstype');

    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.appVersion.getVersionNumber().then((appVersion => {
        this.appversion = appVersion
      }));

      this.fcmNotificationFunction()
      this.statusBar.styleLightContent();
      this.hideSplashScreen();

      let loginSession = localStorage.getItem('login');

      this.events.subscribe('Event-UserName', () => {
        this.userName = localStorage.getItem('userName')
        this.userstype = localStorage.getItem('userstype');
        this.login();
        this.getCompanyProfileLogoInfo()
      });

      if (loginSession == 'yes') {
        this.loginSession();
        this.getCompanyProfileLogoInfo()
      }
    });

    this.platform.backButton.subscribe(() => {
      if (this.router.url === '/welcomescreen' || this.router.url === '/dashboardjobseeker' || this.router.url === '/dashboardemployer' || this.router.url === '/dashboardserviceprovider') {
        this.presentAlert()
        return
      }
    });
  }

  fcmNotificationFunction() {
    this.fcm.getToken().then(token => {
      this.dataServices.setDeviceToken(token)
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      this.dataServices.setDeviceToken(token)
    });

    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
      } else {
        this.localNotifications.schedule({
          id: 1,
          title: data.title,
          text: data.body,
          // sound: 'default',
          // icon: 'file://android/icon/notification_icon.png'
        });
      };
    });
  }

  // (tap)="myCustomFunction()"
  // myCustomFunction(){
  //   alert("myCustomFunction")
  // }

  onMenuOpen() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Side Menu Screen in list' + this.menuCount + 'item')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  hideSplashScreen() {
    if (this.splashScreen) {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 500);
    }
  }

  // Function To Maintain Login Session
  loginSession() {
    this.userstype = localStorage.getItem('userstype');
    this.login();
    let loginSession = localStorage.getItem('login');
    if (loginSession == 'yes') {
      let loginUserStatus = localStorage.getItem('userstype');
      if (loginUserStatus == "4" || loginUserStatus == "Employer") {
        this.userName = localStorage.getItem('userName')
        this.navctrl.navigateRoot(['/dashboardemployer']);
        return;
      }
      else if (loginUserStatus == "5" || loginUserStatus == "Job Seeker") {
        this.seekerLogin = "JobSeeker"
        this.userName = localStorage.getItem('userName')
        this.navctrl.navigateRoot(['/dashboardjobseeker']);
        // this.router.navigate(['/otpgeneration']);
        let users_id = localStorage.getItem('users_id')
        if (users_id != '' || users_id != null || users_id != undefined) {
          this.getSeekerInformation(users_id)
        }
        return;
      }
      //  (loginUserStatus == "8" || loginUserStatus == "Service Provider") 
      else {
        this.userName = localStorage.getItem('userName')
        this.navctrl.navigateRoot(['/dashboardserviceprovider']);
        return;
      }
    }
    else {
      this.router.navigate(['/welcomescreen']);
    }
  }


  login() {
    if (this.userstype == "4" || this.userstype == "Employer") {
      this.appPages = [
        {
          title: 'Home',
          url: '/dashboardemployer'
        },
        {
          title: 'My Profile',
          url: '/employerprofile'
        },
        {
          title: 'Post Job',
          // url: '/employerpostjobdetails'
        },
        {
          title: 'Job Listing',
          url: '/joblistingemployee'
        },
        {
          title: 'Search Resumes',
          // url: '/employersearchresumes'
        },
        {
          title: 'Shortlisted Candidates',
          url: '/employershortlistedcandidate'
        },
        {
          title: 'Settings',
          url: '/settings'
        },
        {
          title: 'Change Password',
          url: '/changepassword',
        },
        {
          title: 'Log Out',
          url: '/welcomescreen',
        }

      ];
      this.menuCount = 9;
      return;
    } else if (this.userstype == "5" || this.userstype == "Job Seeker") {
      this.appPages = [
        {
          title: 'Home',
          url: '/dashboardjobseeker'
        },
        {
          title: 'My Profile',
          // url: '/profile'
        },
        {
          title: 'Track Jobs',
          url: '/trackjobsjobseeker'
        },
        {
          title: 'Recommended Jobs',
          url: '/recommendedjobs'
        },
        {
          title: 'Services',
          // url: '/searchservices'
        },
        {
          title: 'Saved Jobs',
          url: '/savedjobs'
        },
        {
          title: 'Success Stories',
          url: '/successstories',
        },
        {
          title: 'Settings',
          url: '/settings'
        },
        {
          title: 'Change Password',
          url: '/changepassword',
        },
        {
          title: 'Log Out',
          url: '/welcomescreen'
        }
      ];
      this.menuCount = 10;
      return;
    } else if (this.userstype == "8" || this.userstype == "Service Provider") {
      this.appPages = [
        {
          title: 'Home',
          url: '/dashboardserviceprovider',
        },
        {
          title: 'My Profile',
          url: '/serviceproviderprofile',
        },
        {
          title: 'Post Service',
          // url: '/postservice'
        },
        {
          title: 'My Services',
          url: '/services'
        },
        {
          title: 'Settings',
          url: '/settings'
        },
        {
          title: 'Change Password',
          url: '/changepassword',
        },
        {
          title: 'Log Out',
          url: '/welcomescreen',
        }
      ];
      this.menuCount = 7;
      return;
    } else if (this.userstype == "0") {
      this.appPages = [
        {
          title: 'Log Out',
          url: '/welcomescreen',
          icon: 'log-out'
        }
      ];
      return;
    }
  }

  getCompanyProfileLogoInfo() {
    let postData = {
      "uacc_id": localStorage.getItem("users_id"),
      "profile_type": localStorage.getItem('userstype')
    }

    this.dataServices.getCompanyLogoInformation(postData).then((result) => {
      this.resultData = result
      if (this.resultData.status == 1) {
        this.profileLogoInfoResult = this.resultData.profile_details;
        this.photos = this.profileLogoInfoResult[0].photo_path;
        if (this.photos == "" || this.photos == null || this.photos == undefined) {
          this.isLogoAvailable = false
        } else {
          this.isLogoAvailable = true
        }
      } else {
        this.loadingController.dismiss()
        this.sucessAlert('', this.resultData.message);
      }
    }, error => {
      this.loadingController.dismiss()
      console.log('Error in login: ' + JSON.stringify(error))

    })
  }

  setSearchResumesFlag() {
    localStorage.setItem('searchResumeDataFlag', '0')
    this.router.navigate(['/employersearchresumes'])
  }

  // Function For to check chiked Menu
  sideMenuClicked(page) {
    if (page === 'Log Out') {
      this.deleteDeviceToken()
      localStorage.clear();
    } else if (page === 'Post Service') {
      this.getServiceProviderInformation()
    } else if (page === 'Post Job') {
      this.getEmployerInformation();
    } else if (page === 'Search Resumes') {
      this.setSearchResumesFlag();
    } else if (page === 'Services' && (this.userstype == "5" || this.seekerLogin == "JobSeeker")) {
      localStorage.setItem("disabilityID", '')
      this.router.navigate(['/searchservices'])
    } else if (page === 'My Profile' && (this.userstype == "5" || this.userstype == "Job Seeker")) {
      /*
      IF CLIENT ASKED FOR REMOVE RNA PROTAL NAVIGATION FROM 'MY PROFILE' AND SET APP PROFILE PAGE, 
      THEN ONLY CHANGE IN LOGIN & REGISTER API RESPONSE. THE CHANGE IS TO CHANGE VALUE OF "app_or_rna" KEY TO FALSE(0)
      IF IT IS TRUE(1) THEN IT WILL NAVIGATE TO RNA PROTAL AND IF IT IS FALSE(0) THEN IT WILL NAVIGATE TO APP PROFILE PAGE.
      */
      console.log("is Job Seeker's Profile: " + page)
      if (localStorage.getItem("app_or_rna")) {
        this.open_R_and_A_Portal()
      } else {
        this.router.navigate(['/profile'])
      }
    }
  }

  open_R_and_A_Portal() {
    if (!this.isFirstNameEmpty) {
      var postData = {
        "first_name": this.first_name,
        "last_name": this.last_name,
        "mobile": this.mobile,
        "users_id": this.usersId,
        "partner_users_id": localStorage.getItem("partner_users_id")
      }

      this.presentLoading();
      this.authService.open_R_and_A_Portal(postData).then((result: any) => {
        if (result.status == 1) {
          this.loadingController.dismiss();
          if (result.token != '') {
            const browser = this.iab.create('https://i2talent.org/user-dashboard?token=' + result.token + '&&src=app', '_blank', this.options);
            browser.on('exit').subscribe(result => {
              console.log('Browser closed')
            }, error => {
              alert("Error in browser" + JSON.stringify(error))
            })
          }
        } else {
          this.presentAlertMessage(result.message, '');
          this.loadingController.dismiss();

        }
      }, error => {
        this.loadingController.dismiss();
        console.log('Error in login: ' + JSON.stringify(error))

      })
    } else {
      this.presentAlertMessage('Please add your contact details on my profile.', '')
    }
  }

  async presentAlertMessage(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: ['OK']
    });
    alert.setAttribute('role', 'alert');
    await alert.present();
  }

  // Function For Get Seeker Infromation
  getSeekerInformation(userId) {
    // this.presentLoading();
    this.dataServices.getSeekerData(userId).then((result: any) => {
      if (result.status == 1) {
        this.loadingController.dismiss();
        let first_name = result.seeker_details[0].first_name;
        if (first_name != '') {
          if (first_name.split(' ').length == 2) {
            this.first_name = first_name.split(' ')[0]
            this.last_name = first_name.split(' ')[1]

          } else if (first_name.split(' ').length >= 3) {
            this.first_name = first_name.split(' ')[0]
            this.last_name = first_name.split(' ')[2]

          } else {
            this.first_name = first_name.split(' ')[0]
            this.last_name = 'null'
          }

          this.mobile = result.seeker_details[0].mobile;
          this.usersId = userId;
          this.isFirstNameEmpty = false;
        } else {
          this.isFirstNameEmpty = true;
        }

      } else {
        this.loadingController.dismiss();
      }
    }, error => {
      this.loadingController.dismiss();

    })
  }

  deleteDeviceToken() {
    let device_token = this.dataServices.getDeviceToken()
    this.dataServices.postDeleteDeviceToken(device_token).then((result: any) => {
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

  // sideMenuClicked Function Ends Here.
  getEmployerInformation() {
    this.uacc_id = localStorage.getItem("users_id");
    this.presentLoading();
    this.dataServices.getEmployerData(this.uacc_id).then((result) => {
      console.log('employer details :: ' + result)
      this.resultData = result
      if (this.resultData.status == 1) {

        this.employerInformation = this.resultData.employer_details;
        this.verify_email = this.employerInformation[0].verify_email;
        this.checkEmail = this.employerInformation[0].email
        this.business_email = this.employerInformation[0].business_email
        localStorage.setItem('email', this.checkEmail);
        localStorage.setItem('business_email', this.business_email)
        if (this.verify_email == 0) {
          this.loadingController.dismiss()
          this.sucessAlert('', 'Email address is not verified')
        } else {
          this.loadingController.dismiss()
          localStorage.removeItem('postJobDetail')
          localStorage.removeItem('backPostJobLocation')
          localStorage.removeItem('backPostJobRequirement')
          localStorage.removeItem('JobPostLocalStorageData')
          localStorage.removeItem('backwardJobDetailFlag')
          localStorage.removeItem('backwardJobLocationFlag')
          localStorage.removeItem('backwardJobRequirementFlag')
          this.router.navigate(['/employerpostjobdetails'])
        }
      } else {
        this.loadingController.dismiss()
        this.sucessAlert('', this.resultData.message);
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  showAlert(header, sub, msg) {
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['Ok']
    }).then(alert => alert.present());
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Do you want to exit?',
      message: '',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            // this.platform.;
            navigator['app'].exitApp()
          }
        }
      ]
    });
    alert.setAttribute('role', 'alert');
    await alert.present();
  }

  getServiceProviderInformation() {
    this.uacc_id = localStorage.getItem("users_id");
    this.presentLoading();
    this.dataServices.getServiceProviderData().then((result) => {
      console.log(result)
      this.resultData = result
      if (this.resultData.status == 1) {
        // this.photos = this.resultData.service_provider_details[0].company_logo_path
        this.verify_email = this.resultData.service_provider_details[0].verify_email;
        if (this.verify_email == 0) {
          this.loadingController.dismiss();
          this.sucessAlert('', "Email address is not verified.")
        } else {
          this.loadingController.dismiss();
          this.router.navigate(['/postservice']);
        }
      } else {
        this.loadingController.dismiss();
        this.sucessAlert('', this.resultData.message);
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }




  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);
  }//Display Function Ends Here

  takePhoto(sourceType: number) {
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imagePath) => {
      this.uploadFile(imagePath)
    }, (err) => {
      console.log(err);
      //this.presentToast(err);
    }).catch(err => {
      console.log('Error in catch: ' + err)
    });
  }

  uploadFile(imageData) {
    this.presentLoading()
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'photo',
      fileName: this.createFileName(),
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {},
      params: {
        "uacc_id": localStorage.getItem('users_id'),
        "profile_type": localStorage.getItem('userstype')
      }
    }
    fileTransfer.upload(imageData, 'http://www.jobability.org/api/profile/upload_profile_photo', options)
      .then((data) => {
        this.loadingController.dismiss()
        let ResultData: any = data
        ResultData = JSON.parse(ResultData.response)
        this.photos = ResultData.photo_path
        if (this.photos == "" || this.photos == null || this.photos == undefined) {
          this.isLogoAvailable = false
        } else {
          this.isLogoAvailable = true
        }
        this.sucessAlert('', ResultData.message)
      }, (err) => {
        this.loadingController.dismiss()
        console.log(err)
      });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Your Action',
      buttons: [{
        text: 'Camera',
        handler: () => {
          // this.openCamera();
          this.takePhoto(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Gallery',
        handler: () => {
          // this.OpenGallery();
          this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        text: 'Cancel',
        role: 'destructive',
        // role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return this.file.dataDirectory + img;
    }
  }

  async sucessAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
        }
      }]
    });
    await alert.present();
  }

  menuOpened() {
    if (this.userstype == "5" || this.userstype == "Job Seeker") {
      let users_id = localStorage.getItem('users_id')
      if (users_id != '' || users_id != null || users_id != undefined) {
        this.getSeekerInformation(users_id)
      }
    }
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Side menu opened')
            .then(() => console.log('Side menu opened Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  menuClosed() {
    // this.mobileAccessibility.isScreenReaderRunning().then(bool => {
    //   if (bool) {
    //     setTimeout(() => {
    //       this.tts.speak('Side menu closed')
    //         .then(() => console.log('Side menu closed Success'))
    //         .catch((reason: any) => console.log(reason));
    //     }, 1000);
    //   }
    // })
  }
}
