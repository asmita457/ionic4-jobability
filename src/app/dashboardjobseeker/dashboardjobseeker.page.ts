import { Component, OnInit } from '@angular/core';
import { MenuController, Events, AlertController, LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router } from '@angular/router';
import { AuthservicesService } from '../providers/authservices.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';


@Component({
    selector: 'app-dashboardjobseeker',
    templateUrl: './dashboardjobseeker.page.html',
    styleUrls: ['./dashboardjobseeker.page.scss'],
})
export class dashboardjobseekerPage implements OnInit {

    jobtitle: any
    location: any
    users_id: any
    resultData: any
    total_save_job_count: any
    total_recommended_job_count: any
    badgecount: any
    badgeResultData: any
    // uacc_id: any
    isLogin: any

    first_name: any
    mobile: any
    usersId: any
    last_name: any;
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
        public menuCtrl: MenuController,
        public events: Events,
        public router: Router,
        public alertCtrl: AlertController,
        private dataServices: DataservicesService,
        public loadingController: LoadingController,
        private authService: AuthservicesService,
        private iab: InAppBrowser,
        private tts: TextToSpeech,
        private mobileAccessibility: MobileAccessibility,
    ) { }

    ngOnInit() {
    }

    ionViewDidLoad() {
        setTimeout(() => {
            this.loadingController.dismiss();
        }, 500);
    }

    ionViewWillEnter() {
        this.users_id = localStorage.getItem('users_id')
        this.isLogin = localStorage.getItem('login')
        if (this.users_id != '' || this.users_id != null || this.users_id != undefined) {
            this.getSeekerInformation(this.users_id)
        }

        if (this.users_id == '' || this.users_id == null || this.users_id == undefined) {
            this.users_id = 0;
        }

        this.getJobsCount(this.users_id);
        this.jobtitle = ""
        this.location = ""
        this.menuCtrl.enable(true);
        this.getCountryArray();
        this.getNotificationBadgeCount()
    }

    ionViewDidEnter() {
        this.mobileAccessibility.isScreenReaderRunning().then(bool => {
            if (bool) {
                setTimeout(() => {
                    this.tts.speak('Home Screen')
                        .then(() => console.log('Success'))
                        .catch((reason: any) => console.log(reason));
                }, 1000);
            }
        })
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
    } // Function For Get Seeker Infromation Ends Here.

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
                    this.presentAlert(result.message, '');
                    this.loadingController.dismiss();

                }
            }, error => {
                this.loadingController.dismiss();
                console.log('Error in login: ' + JSON.stringify(error))

            })
        } else {
            this.presentAlert('Please add your contact details on my profile.', '')
        }


    }

    searchJobs() {
        localStorage.setItem('jobtitle', this.jobtitle);
        localStorage.setItem('location', this.location);

        // if ((this.jobtitle == "" || this.jobtitle == undefined) && (this.location == "" || this.location == undefined)) {
        //     console.log('jobtitle :: ' + this.jobtitle)
        //     console.log('location:: ' + this.location)
        //     this.presentAlert('Please fill-up at least one field', '')
        //     return;
        // }

        // let info = {
        //     // searchInfo: this.resultData.search_result_data,
        //     jobtitle: this.jobtitle,
        //     location: this.location,
        // }
        // this.router.navigate(['/searchjobs', { item: JSON.stringify(info) }]);
        this.router.navigate(['/searchjobs']);
    }

    recommendedJobs() {
        this.router.navigate(['/recommendedjobs', { count: this.total_recommended_job_count }])
    }

    savedJobs() {

        this.router.navigate(['/savedjobs', { count: this.total_save_job_count }])
    }





    getJobsCount(users_id) {
        // this.presentLoading();
        this.dataServices.getJobsCountData(users_id).then((result) => {
            this.resultData = result
            if (this.resultData.status == 1) {
                // this.loadingController.dismiss();
                let total_count_data = this.resultData.total_count_data;
                if (total_count_data == null) {
                    return;
                }
                else {
                    this.total_save_job_count = this.resultData.total_count_data.total_save_job_count;
                    this.total_recommended_job_count = this.resultData.total_count_data.total_recommended_job_count
                }
            } else {
                // this.loadingController.dismiss();
                this.presentAlert('', this.resultData.message);
            }
        }, error => {
            // this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error))

        })
    }

    getNotificationBadgeCount() {
        // this.presentLoading();
        this.dataServices.getNotificationBadgeCount().then((result) => {
            console.log(result)
            this.badgeResultData = result
            if (this.badgeResultData.status == 1) {
                // this.loadingController.dismiss();
                this.badgecount = this.badgeResultData.total_notification_count
            } else {
                // this.loadingController.dismiss();
            }
        }, error => {
            // this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error))
        })
    }

    navigateToNotification() {
        this.router.navigate(['/notification'])
    }
    getCountryArray() {
        this.resultData = [];
        this.dataServices.getCountryArrayAPI().then((result) => {
            this.resultData = result
            if (this.resultData.status == 1) {
                localStorage.setItem("countryArray", JSON.stringify(this.resultData));
            } else {
            }
        }, error => {
            console.log('Error in login: ' + JSON.stringify(error))

        })
    }


    //Display loader 
    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Please wait...',
            // spinner: null
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();

    }//Display Function Ends Here

    async presentAlert(title, message) {
        const alert = await this.alertCtrl.create({
            header: title,
            subHeader: message,
            buttons: ['OK']
        });
        alert.setAttribute('role', 'alert');
        await alert.present();
    }


}


