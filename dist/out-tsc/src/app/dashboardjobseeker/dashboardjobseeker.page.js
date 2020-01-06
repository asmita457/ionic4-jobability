import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController, Events, AlertController, LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router } from '@angular/router';
import { AuthservicesService } from '../providers/authservices.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
var dashboardjobseekerPage = /** @class */ (function () {
    function dashboardjobseekerPage(menuCtrl, events, router, alertCtrl, dataServices, loadingController, authService, iab, tts, mobileAccessibility) {
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.authService = authService;
        this.iab = iab;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.isFirstNameEmpty = false;
        this.options = {
            location: 'yes',
            hidden: 'no',
            // clearcache : 'yes',
            // clearsessioncache : 'yes',
            zoom: 'no',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
            EnableViewPortScale: 'yes'
        };
    }
    dashboardjobseekerPage.prototype.ngOnInit = function () {
    };
    dashboardjobseekerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadingController.dismiss();
        }, 500);
    };
    dashboardjobseekerPage.prototype.ionViewWillEnter = function () {
        this.users_id = localStorage.getItem('users_id');
        this.isLogin = localStorage.getItem('login');
        if (this.users_id != '' || this.users_id != null || this.users_id != undefined) {
            this.getSeekerInformation(this.users_id);
        }
        if (this.users_id == '' || this.users_id == null || this.users_id == undefined) {
            this.users_id = 0;
        }
        this.getJobsCount(this.users_id);
        this.jobtitle = "";
        this.location = "";
        this.menuCtrl.enable(true);
        this.getCountryArray();
        this.getNotificationBadgeCount();
    };
    dashboardjobseekerPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Home Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    // Function For Get Seeker Infromation
    dashboardjobseekerPage.prototype.getSeekerInformation = function (userId) {
        var _this = this;
        // this.presentLoading();
        this.dataServices.getSeekerData(userId).then(function (result) {
            if (result.status == 1) {
                _this.loadingController.dismiss();
                var first_name = result.seeker_details[0].first_name;
                if (first_name != '') {
                    if (first_name.split(' ').length == 2) {
                        _this.first_name = first_name.split(' ')[0];
                        _this.last_name = first_name.split(' ')[1];
                    }
                    else if (first_name.split(' ').length >= 3) {
                        _this.first_name = first_name.split(' ')[0];
                        _this.last_name = first_name.split(' ')[2];
                    }
                    else {
                        _this.first_name = first_name.split(' ')[0];
                        _this.last_name = 'null';
                    }
                    _this.mobile = result.seeker_details[0].mobile;
                    _this.usersId = userId;
                    _this.isFirstNameEmpty = false;
                }
                else {
                    _this.isFirstNameEmpty = true;
                }
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
        });
    }; // Function For Get Seeker Infromation Ends Here.
    dashboardjobseekerPage.prototype.open_R_and_A_Portal = function () {
        var _this = this;
        if (!this.isFirstNameEmpty) {
            var postData = {
                "first_name": this.first_name,
                "last_name": this.last_name,
                "mobile": this.mobile,
                "user_registration_id": this.usersId,
                "organization": 'lcd-india',
                "role": 'User',
                "ip_address": '17.43.64.353'
            };
            this.presentLoading();
            this.authService.open_R_and_A_Portal(postData).then(function (result) {
                if (result.success == true) {
                    _this.loadingController.dismiss();
                    if (result.token != '') {
                        var browser = _this.iab.create('http://i2talent.org:8083/user-dashboard?token=' + result.token + '&&src=app', '_blank', _this.options);
                        browser.on('exit').subscribe(function (result) {
                            console.log('Browser closed');
                        }, function (error) {
                            alert("Error in browser" + JSON.stringify(error));
                        });
                    }
                }
                else {
                    _this.loadingController.dismiss();
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log('Error in login: ' + JSON.stringify(error));
            });
        }
        else {
            this.presentAlert('Please add your contact details on my profile.', '');
        }
    };
    dashboardjobseekerPage.prototype.searchJobs = function () {
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
    };
    dashboardjobseekerPage.prototype.recommendedJobs = function () {
        this.router.navigate(['/recommendedjobs', { count: this.total_recommended_job_count }]);
    };
    dashboardjobseekerPage.prototype.savedJobs = function () {
        this.router.navigate(['/savedjobs', { count: this.total_save_job_count }]);
    };
    dashboardjobseekerPage.prototype.getJobsCount = function (users_id) {
        var _this = this;
        // this.presentLoading();
        this.dataServices.getJobsCountData(users_id).then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                // this.loadingController.dismiss();
                var total_count_data = _this.resultData.total_count_data;
                if (total_count_data == null) {
                    return;
                }
                else {
                    _this.total_save_job_count = _this.resultData.total_count_data.total_save_job_count;
                    _this.total_recommended_job_count = _this.resultData.total_count_data.total_recommended_job_count;
                }
            }
            else {
                // this.loadingController.dismiss();
                _this.presentAlert('', _this.resultData.message);
            }
        }, function (error) {
            // this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    dashboardjobseekerPage.prototype.getNotificationBadgeCount = function () {
        var _this = this;
        // this.presentLoading();
        this.dataServices.getNotificationBadgeCount().then(function (result) {
            console.log(result);
            _this.badgeResultData = result;
            if (_this.badgeResultData.status == 1) {
                // this.loadingController.dismiss();
                _this.badgecount = _this.badgeResultData.total_notification_count;
            }
            else {
                // this.loadingController.dismiss();
            }
        }, function (error) {
            // this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    dashboardjobseekerPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    dashboardjobseekerPage.prototype.getCountryArray = function () {
        var _this = this;
        this.resultData = [];
        this.dataServices.getCountryArrayAPI().then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                localStorage.setItem("countryArray", JSON.stringify(_this.resultData));
            }
            else {
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Display loader 
    dashboardjobseekerPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
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
    dashboardjobseekerPage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: ['OK']
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
    dashboardjobseekerPage = tslib_1.__decorate([
        Component({
            selector: 'app-dashboardjobseeker',
            templateUrl: './dashboardjobseeker.page.html',
            styleUrls: ['./dashboardjobseeker.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController,
            Events,
            Router,
            AlertController,
            DataservicesService,
            LoadingController,
            AuthservicesService,
            InAppBrowser,
            TextToSpeech,
            MobileAccessibility])
    ], dashboardjobseekerPage);
    return dashboardjobseekerPage;
}());
export { dashboardjobseekerPage };
//# sourceMappingURL=dashboardjobseeker.page.js.map