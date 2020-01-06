import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Title } from '@angular/platform-browser';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
var WelcomescreenPage = /** @class */ (function () {
    function WelcomescreenPage(router, menuCtrl, titleService, tts, mobileAccessibility) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.titleService = titleService;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.jobtitle = "";
        this.location = "";
        this.post = { color: 'primary' };
    }
    WelcomescreenPage.prototype.ngOnInit = function () {
    };
    WelcomescreenPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // this.titleService.setTitle('Welcome Screen');
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Welcome Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    //Function for drawer disabled on launch
    WelcomescreenPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
        localStorage.clear();
    };
    //Function for search job.
    WelcomescreenPage.prototype.jobSearchFunction = function () {
        localStorage.setItem('freeSearch', '1');
        localStorage.setItem('jobtitle', this.jobtitle);
        localStorage.setItem('location', this.location);
        localStorage.setItem('login', 'no');
        var info = {
            // searchInfo: this.resultData.search_result_data,
            jobtitle: this.jobtitle,
            location: this.location,
        };
        this.router.navigate(['/searchjobs', { item: JSON.stringify(info) }]);
        // alert('Coming Soon...')
    };
    //Navigate to Register user
    WelcomescreenPage.prototype.signUp = function () {
        this.router.navigate(['/register']);
    };
    //Navigate to login screen
    WelcomescreenPage.prototype.signIn = function () {
        this.router.navigate(['/login']);
    };
    WelcomescreenPage = tslib_1.__decorate([
        Component({
            selector: 'app-welcomescreen',
            templateUrl: './welcomescreen.page.html',
            styleUrls: ['./welcomescreen.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            MenuController,
            Title,
            TextToSpeech,
            MobileAccessibility])
    ], WelcomescreenPage);
    return WelcomescreenPage;
}());
export { WelcomescreenPage };
//# sourceMappingURL=welcomescreen.page.js.map