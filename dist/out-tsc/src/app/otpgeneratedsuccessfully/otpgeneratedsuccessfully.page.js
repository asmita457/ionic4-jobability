import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
var OtpgeneratedsuccessfullyPage = /** @class */ (function () {
    function OtpgeneratedsuccessfullyPage(router, menuCtrl, dataServices, tts, mobileAccessibility) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.dataServices = dataServices;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
    }
    OtpgeneratedsuccessfullyPage.prototype.ngOnInit = function () {
    };
    OtpgeneratedsuccessfullyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false);
        setTimeout(function () {
            _this.role = "alertdialog";
        }, 2000);
    };
    OtpgeneratedsuccessfullyPage.prototype.ionViewDidEnter = function () {
        // this.mobileAccessibility.isScreenReaderRunning().then(bool => {
        //   if (bool) {
        //     setTimeout(() => {
        //       this.tts.speak('Verified OTP Screen')
        //         .then(() => console.log('Success'))
        //         .catch((reason: any) => console.log(reason));
        //     }, 1000);
        //   }
        // })
    };
    OtpgeneratedsuccessfullyPage.prototype.jobseekerDashboard = function () {
        this.dataServices.setIsAlertShown();
        var RegisterProfileType = localStorage.getItem('RegisterProfileType');
        if (RegisterProfileType == "Job Seeker") {
            this.router.navigate(['/dashboardjobseeker']);
            return;
        }
        if (RegisterProfileType == "Employer") {
            this.router.navigate(['/dashboardemployer']);
            return;
        }
        if (RegisterProfileType == "Service Provider") {
            this.router.navigate(['/dashboardserviceprovider']);
            return;
        }
    };
    OtpgeneratedsuccessfullyPage = tslib_1.__decorate([
        Component({
            selector: 'app-otpgeneratedsuccessfully',
            templateUrl: './otpgeneratedsuccessfully.page.html',
            styleUrls: ['./otpgeneratedsuccessfully.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            MenuController,
            DataservicesService,
            TextToSpeech,
            MobileAccessibility])
    ], OtpgeneratedsuccessfullyPage);
    return OtpgeneratedsuccessfullyPage;
}());
export { OtpgeneratedsuccessfullyPage };
//# sourceMappingURL=otpgeneratedsuccessfully.page.js.map