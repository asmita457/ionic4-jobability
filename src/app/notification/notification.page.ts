import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController, Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.page.html',
    styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
    offset = 0
    uacc_id: any
    notificationDataArray: any = []
    notificationCount = 0;
    moreDataAvailable: boolean
    role : string = "role";
    constructor
        (
            private location: Location,
            public dataServices: DataservicesService,
            private router: Router,
            private alertCtrl: AlertController,
            public loadingController: LoadingController,
            public events: Events,
            private tts: TextToSpeech,
            private mobileAccessibility: MobileAccessibility
        ) { }


    ngOnInit() {
    }

    ionViewWillEnter() {
        this.notificationDataArray = []
        this.onPageLoad();
    }

    onPageLoad() {
        localStorage.setItem('badge', '0')
        this.offset = 0
        this.notificationDataArray = []
        this.getNotificationsListData(this.offset);
    }


    ionViewDidEnter() {
        this.mobileAccessibility.isScreenReaderRunning().then(bool => {
            if (bool) {
                setTimeout(() => {
                    this.tts.speak('Notification Screen')
                        .then(() => console.log('Success'))
                        .catch((reason: any) => console.log(reason));
                }, 500);
            }
        })
    }

    closePage() {
        this.location.back()
    }


    getNotificationsListData(offset) {
        if (this.offset == 0) {
            this.presentLoading();
        }

        this.uacc_id = localStorage.getItem('users_id')
        this.dataServices.getNotificationListData(offset, this.uacc_id).then((result: any) => {

            if (result.status == 1 && result.total_notification_count > 0) {
                this.notificationCount = result.total_notification_count;
                this.notificationDataArray = this.notificationDataArray.concat(result.notification_list)

                if (this.notificationCount < this.dataServices.globalOffset()) {
                    this.moreDataAvailable = false
                } else {
                    this.moreDataAvailable = true
                }

                this.loadingController.dismiss();
            } else {
                setTimeout(() => {
                    this.role = "alertdialog";
                }, 3000);
                this.loadingController.dismiss();
            }
        }, error => {
            this.loadingController.dismiss();
        })
    }

    loadData(event) {
        setTimeout(() => {
            this.offset += this.dataServices.globalOffset()
            if (this.offset > this.notificationCount) {
                this.moreDataAvailable = false
            } else {
                this.moreDataAvailable = true
                this.getNotificationsListData(this.offset)
                event.target.complete();
            }
        }, 500)
    } //loadData Function Eds Here.

    //Display loader 
    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Please wait...',
            // spinner: null
        });
        await loading.present();
        setTimeout(() => {
            loading.dismiss();
        }, 500);
        const { role, data } = await loading.onDidDismiss();

    }//Display Function Ends Here 
}