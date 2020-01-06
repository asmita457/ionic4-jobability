import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
    badgecount: any
    badgeResultData: any
    isActive: boolean


    constructor
        (
            private router: Router,
            public loadingController: LoadingController,
            private dataServices: DataservicesService,
            private alertCtrl: AlertController,
            private tts: TextToSpeech,
            private mobileAccessibility: MobileAccessibility,
    ) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.getNotificationStatus()
        this.getNotificationBadgeCount()
    }

    ionViewDidEnter() {
        this.mobileAccessibility.isScreenReaderRunning().then(bool => {
            if (bool) {
                setTimeout(() => {
                    this.tts.speak('Create Success Story Screen')
                        .then(() => console.log('Success'))
                        .catch((reason: any) => console.log(reason));
                }, 1000);
            }
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
    //Display loader 

    getNotificationStatus() {
        this.presentLoading()
        this.dataServices.getNotificationStatus().then((result: any) => {
            this.loadingController.dismiss();
            if (result.status == 1) {
                this.isActive = result.notification_status == "1" ? true : false
            } else {
                this.presentAlert('', result.message)
            }
        }, error => {
            this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error))
        })
    }

    onOffNotification(event) {
        this.presentLoading()
        if (this.isActive != event.detail.checked) {
            this.isActive = event.detail.checked
            let status = this.isActive == true ? 1 : 0
            this.dataServices.onOffNotification(status).then((result: any) => {
                this.loadingController.dismiss();
                if (result.status == 1) {
                    if (this.isActive) {
                        this.presentAlert('', 'Push notifications turn on.')
                    } else {
                        this.presentAlert('', 'Push notifications turn off.')
                    }
                } else {
                    this.presentAlert('', result.message)
                }
            }, error => {
                this.loadingController.dismiss();
                console.log('Error in login: ' + JSON.stringify(error))
            })
        }

    }


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
        console.log('Loading dismissed!' + role + ' Data: ' + data);

    }//Display Function Ends Here 

    async presentAlert(title, message) {
        const alert = await this.alertCtrl.create({
            header: title,
            subHeader: message,
            buttons: [{
                text: 'OK',
                cssClass: 'secondary',
                handler: (blah) => {
                    // this.closePage();
                }
            }]
        });
        await alert.present();
    }

}