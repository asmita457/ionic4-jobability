import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, AlertController, Events, NavController, LoadingController, ActionSheetController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { DataservicesService } from './providers/dataservices/dataservices.service';
import { Http } from '@angular/http';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Location } from '@angular/common';
import { FCM } from '@ionic-native/fcm/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, alertCtrl, router, events, appVersion, navctrl, loadingController, dataServices, actionSheetController, camera, http, file, filePath, toastCtrl, transfer, location, fcm, localNotifications
    // private androidPermissions: AndroidPermissions
    ) {
        // this.userstype = 4;
        // this.userstype = localStorage.getItem('userstype');
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.events = events;
        this.appVersion = appVersion;
        this.navctrl = navctrl;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.http = http;
        this.file = file;
        this.filePath = filePath;
        this.toastCtrl = toastCtrl;
        this.transfer = transfer;
        this.location = location;
        this.fcm = fcm;
        this.localNotifications = localNotifications;
        this.isLogoAvailable = false;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.appVersion.getVersionNumber().then((function (appVersion) {
                _this.appversion = appVersion;
            }));
            _this.fcmNotificationFunction();
            _this.statusBar.styleLightContent();
            if (_this.platform.is('android')) {
                _this.statusBar.styleLightContent();
            }
            _this.hideSplashScreen();
            var loginSession = localStorage.getItem('login');
            _this.events.subscribe('Event-UserName', function () {
                _this.userName = localStorage.getItem('userName');
                _this.userstype = localStorage.getItem('userstype');
                _this.login();
                _this.getCompanyProfileLogoInfo();
            });
            if (loginSession == 'yes') {
                _this.loginSession();
                _this.getCompanyProfileLogoInfo();
            }
        });
        this.platform.backButton.subscribe(function () {
            if (_this.router.url === '/welcomescreen' || _this.router.url === '/dashboardjobseeker' || _this.router.url === '/dashboardemployer' || _this.router.url === '/dashboardserviceprovider') {
                _this.presentAlert();
                return;
            }
        });
    };
    AppComponent.prototype.fcmNotificationFunction = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            console.log('getToken : ' + token);
            _this.dataServices.setDeviceToken(token);
            // backend.registerToken(token);
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            // backend.registerToken(token);
            console.log('onTokenRefresh : ' + token);
            _this.dataServices.setDeviceToken(token);
        });
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                console.log("Received in background");
            }
            else {
                console.log("Received in foreground");
                _this.localNotifications.schedule({
                    id: 1,
                    title: data.title,
                    text: data.body,
                });
            }
            ;
        });
    };
    // localNotificationReceived() {
    //   console.log('in localNotificationReceived')
    //   setTimeout(_=> {
    //     console.log('in timeout')
    //     this.notificationBanner()
    //   }, 5000)
    //   this.localNotifications.on('click').subscribe(res => {
    //     let msg = res.data ? res.data.mydata : '';
    //     this.showAlert(res.title, res.text, msg);
    //   });
    //   this.localNotifications.on('trigger').subscribe(res => {
    //     let msg = res.data ? res.data.mydata : '';
    //     this.showAlert(res.title, res.text, msg);
    //   });
    // }
    // notificationBanner() {
    //   this.localNotifications.schedule({
    //     id: 1,
    //     title: 'Attention',
    //     text: 'Simons Notification',
    //     data: { mydata: 'My hidden message this is' },
    //     trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
    //     foreground: true // Show the notification while app is open
    //   });
    // }
    AppComponent.prototype.hideSplashScreen = function () {
        var _this = this;
        if (this.splashScreen) {
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 500);
        }
    };
    // Function To Maintain Login Session
    AppComponent.prototype.loginSession = function () {
        this.userstype = localStorage.getItem('userstype');
        this.login();
        var loginSession = localStorage.getItem('login');
        if (loginSession == 'yes') {
            var loginUserStatus = localStorage.getItem('userstype');
            if (loginUserStatus == "4" || loginUserStatus == "Employer") {
                this.userName = localStorage.getItem('userName');
                this.navctrl.navigateRoot(['/dashboardemployer']);
                return;
            }
            else if (loginUserStatus == "5" || loginUserStatus == "Job Seeker") {
                this.seekerLogin = "JobSeeker";
                this.userName = localStorage.getItem('userName');
                this.navctrl.navigateRoot(['/dashboardjobseeker']);
                // this.router.navigate(['/otpgeneration']);
                return;
            }
            //  (loginUserStatus == "8" || loginUserStatus == "Service Provider") 
            else {
                this.userName = localStorage.getItem('userName');
                this.navctrl.navigateRoot(['/dashboardserviceprovider']);
                return;
            }
        }
        else {
            this.router.navigate(['/welcomescreen']);
        }
    };
    AppComponent.prototype.login = function () {
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
                },
                {
                    title: 'Job Listing',
                    url: '/joblistingemployee'
                },
                {
                    title: 'Search Resumes',
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
            return;
        }
        else if (this.userstype == "5" || this.userstype == "Job Seeker") {
            this.appPages = [
                {
                    title: 'Home',
                    url: '/dashboardjobseeker'
                },
                {
                    title: 'My Profile',
                    url: '/profile'
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
            return;
        }
        else if (this.userstype == "8" || this.userstype == "Service Provider") {
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
            return;
        }
        else if (this.userstype == "0") {
            this.appPages = [
                {
                    title: 'Log Out',
                    url: '/welcomescreen',
                    icon: 'log-out'
                }
            ];
            return;
        }
    };
    AppComponent.prototype.getCompanyProfileLogoInfo = function () {
        var _this = this;
        var postData = {
            "uacc_id": localStorage.getItem("users_id"),
            "profile_type": localStorage.getItem('userstype')
        };
        this.dataServices.getCompanyLogoInformation(postData).then(function (result) {
            console.log('employer details :: ' + result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.profileLogoInfoResult = _this.resultData.profile_details;
                _this.photos = _this.profileLogoInfoResult[0].photo_path;
                if (_this.photos == "" || _this.photos == null || _this.photos == undefined) {
                    _this.isLogoAvailable = false;
                }
                else {
                    _this.isLogoAvailable = true;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.sucessAlert('', _this.resultData.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    AppComponent.prototype.setSearchResumesFlag = function () {
        localStorage.setItem('searchResumeDataFlag', '0');
        this.router.navigate(['/employersearchresumes']);
    };
    // Function For to check chiked Menu
    AppComponent.prototype.sideMenuClicked = function (page) {
        if (page === 'Log Out') {
            this.deleteDeviceToken();
            localStorage.clear();
        }
        else if (page === 'Post Service') {
            this.getServiceProviderInformation();
        }
        else if (page === 'Post Job') {
            this.getEmployerInformation();
        }
        else if (page === 'Search Resumes') {
            this.setSearchResumesFlag();
        }
        else if (page === 'Services' && (this.userstype == "5" || this.seekerLogin == "JobSeeker")) {
            localStorage.setItem("disabilityID", '');
            this.router.navigate(['/searchservices']);
        }
    };
    AppComponent.prototype.deleteDeviceToken = function () {
        var device_token = this.dataServices.getDeviceToken();
        this.dataServices.postDeleteDeviceToken(device_token).then(function (result) {
            console.log('Response: ' + JSON.stringify(result));
            if (result.status == 1) {
                console.log(result.message);
            }
            else {
                console.log(result.message);
            }
        }, function (error) {
            console.log('Error in adding device token: ' + error);
        });
    };
    // sideMenuClicked Function Ends Here.
    AppComponent.prototype.getEmployerInformation = function () {
        var _this = this;
        this.uacc_id = localStorage.getItem("users_id");
        this.presentLoading();
        this.dataServices.getEmployerData(this.uacc_id).then(function (result) {
            console.log('employer details :: ' + result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.employerInformation = _this.resultData.employer_details;
                _this.verify_email = _this.employerInformation[0].verify_email;
                _this.checkEmail = _this.employerInformation[0].email;
                _this.business_email = _this.employerInformation[0].business_email;
                localStorage.setItem('email', _this.checkEmail);
                localStorage.setItem('business_email', _this.business_email);
                if (_this.verify_email == 0) {
                    _this.loadingController.dismiss();
                    _this.sucessAlert('', 'Email address is not verified');
                }
                else {
                    _this.loadingController.dismiss();
                    localStorage.removeItem('postJobDetail');
                    localStorage.removeItem('backPostJobLocation');
                    localStorage.removeItem('backPostJobRequirement');
                    localStorage.removeItem('JobPostLocalStorageData');
                    localStorage.removeItem('backwardJobDetailFlag');
                    localStorage.removeItem('backwardJobLocationFlag');
                    localStorage.removeItem('backwardJobRequirementFlag');
                    _this.router.navigate(['/employerpostjobdetails']);
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.sucessAlert('', _this.resultData.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // notificationRequest() {
    //   this.localNotification.requestPermission().then(
    //     (permission) => {
    //       if (permission === 'granted') {
    //         // Create the notification
    //         // this.localNotification.create('My Title', {
    //         //   tag: 'message1',
    //         //   body: 'My body',
    //         //   icon: 'assets/icon/favicon.ico'
    //         // });
    //       }
    //     }
    //   );
    // }
    AppComponent.prototype.showAlert = function (header, sub, msg) {
        this.alertCtrl.create({
            header: header,
            subHeader: sub,
            message: msg,
            buttons: ['Ok']
        }).then(function (alert) { return alert.present(); });
    };
    AppComponent.prototype.uploadImageProfile = function () {
    };
    AppComponent.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Do you want to exit?',
                            message: '',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Exit',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        // this.platform.;
                                        navigator['app'].exitApp();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.getServiceProviderInformation = function () {
        var _this = this;
        this.uacc_id = localStorage.getItem("users_id");
        console.log('id::' + this.uacc_id);
        this.presentLoading();
        this.dataServices.getServiceProviderData().then(function (result) {
            console.log(result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                // this.photos = this.resultData.service_provider_details[0].company_logo_path
                _this.verify_email = _this.resultData.service_provider_details[0].verify_email;
                if (_this.verify_email == 0) {
                    _this.loadingController.dismiss();
                    _this.sucessAlert('', "Email address is not verified.");
                }
                else {
                    _this.loadingController.dismiss();
                    _this.router.navigate(['/postservice']);
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.sucessAlert('', _this.resultData.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Display loader 
    AppComponent.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            spinner: null
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here
    AppComponent.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.uploadFile(imagePath);
        }, function (err) {
            console.log(err);
            //this.presentToast(err);
        }).catch(function (err) {
            console.log('Error in catch: ' + err);
        });
    };
    AppComponent.prototype.uploadFile = function (imageData) {
        var _this = this;
        this.presentLoading();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'photo',
            fileName: this.createFileName(),
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: {
                "uacc_id": localStorage.getItem('users_id'),
                "profile_type": localStorage.getItem('userstype')
            }
        };
        fileTransfer.upload(imageData, 'http://www.jobtest.jobability.org/api/profile/upload_profile_photo', options)
            .then(function (data) {
            _this.loadingController.dismiss();
            var ResultData = data;
            ResultData = JSON.parse(ResultData.response);
            _this.photos = ResultData.photo_path;
            if (_this.photos == "" || _this.photos == null || _this.photos == undefined) {
                _this.isLogoAvailable = false;
            }
            else {
                _this.isLogoAvailable = true;
            }
            _this.sucessAlert('', ResultData.message);
        }, function (err) {
            _this.loadingController.dismiss();
            console.log(err);
        });
    };
    AppComponent.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Choose Your Action',
                            buttons: [{
                                    text: 'Camera',
                                    handler: function () {
                                        // this.openCamera();
                                        _this.takePhoto(_this.camera.PictureSourceType.CAMERA);
                                    }
                                }, {
                                    text: 'Gallery',
                                    handler: function () {
                                        // this.OpenGallery();
                                        _this.takePhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'destructive',
                                    // role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Create a new name for the image
    AppComponent.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    AppComponent.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return this.file.dataDirectory + img;
        }
    };
    AppComponent.prototype.sucessAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            AlertController,
            Router,
            Events,
            AppVersion,
            NavController,
            LoadingController,
            DataservicesService,
            ActionSheetController,
            Camera,
            Http,
            File,
            FilePath,
            ToastController,
            FileTransfer,
            Location,
            FCM,
            LocalNotifications
            // private androidPermissions: AndroidPermissions
        ])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map