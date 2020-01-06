(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcomescreen-welcomescreen-module"],{

/***/ "./src/app/welcomescreen/welcomescreen.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/welcomescreen/welcomescreen.module.ts ***!
  \*******************************************************/
/*! exports provided: WelcomescreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomescreenPageModule", function() { return WelcomescreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcomescreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcomescreen.page */ "./src/app/welcomescreen/welcomescreen.page.ts");







var routes = [
    {
        path: '',
        component: _welcomescreen_page__WEBPACK_IMPORTED_MODULE_6__["WelcomescreenPage"]
    }
];
var WelcomescreenPageModule = /** @class */ (function () {
    function WelcomescreenPageModule() {
    }
    WelcomescreenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_welcomescreen_page__WEBPACK_IMPORTED_MODULE_6__["WelcomescreenPage"]]
        })
    ], WelcomescreenPageModule);
    return WelcomescreenPageModule;
}());



/***/ }),

/***/ "./src/app/welcomescreen/welcomescreen.page.html":
/*!*******************************************************!*\
  !*** ./src/app/welcomescreen/welcomescreen.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"welcomescreenbackground\">\n\n    <!-- <img class=\"jobabilitylogo\" src=\"../../assets/img/jobabilitylogo_color.png\" /> -->\n    <img class=\"jobabilitylogo\" aria-label=\"i2talent logo\" alt=\"i2talent logo\"\n        src=\"../../assets/img/jobabilitylogo_color.png\">\n\n    <!-- <div text-center class=\"jobcounttextcss\">\n        20,000+\n    </div>\n    <div text-center class=\"welcometext\">\n        Jobs for people with disabilities\n    </div> -->\n\n    <div text-center style=\"margin-top: 45%\" aria-label=\"20,000+ Jobs available for people with disabilities\">\n        <span class=\"jobcounttextcss\">20,000+</span><br>\n        <span class=\"welcometext\">Jobs available for people with disabilities</span>\n    </div>\n\n\n    <ion-grid class=\"bottomposition\">\n        <ion-row class=\"rowcss topmargin\">\n            <ion-col>\n                <button class=\"buttonfont selector\" (click)=\"jobSearchFunction()\">FREE JOB SEARCH</button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"rowcss topmargin\">\n            <ion-col>\n                <button class=\"buttoncss\" (click)=\"signUp()\">SIGN UP</button>\n            </ion-col>\n            <ion-col>\n                <button class=\"buttoncss\" (click)=\"signIn()\">LOGIN</button>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/welcomescreen/welcomescreen.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/welcomescreen/welcomescreen.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcomescreenbackground {\n  --background: url('bg.png') 0 0/100% 100% no-repeat; }\n\n.singInSingup {\n  color: #2b0c43;\n  background: lightgrey; }\n\n.jobabilitylogo {\n  margin-top: 10%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60%; }\n\n.welcometext {\n  color: white;\n  font-size: 18px;\n  margin-top: 4%; }\n\n.jobcounttextcss {\n  color: white;\n  font-size: 30px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC93ZWxjb21lc2NyZWVuL3dlbGNvbWVzY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbURBQWEsRUFBQTs7QUFJakI7RUFDSSxjQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBY3pCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVk7RUFDWixlQUFjO0VBQ2QsY0FBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFFWixlQUFjO0VBQ2QsaUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lc2NyZWVuL3dlbGNvbWVzY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWVzY3JlZW5iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmcucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuXG4uc2luZ0luU2luZ3Vwe1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xufVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgICAgZGl2IHtcbi8vICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuLy8gICAgICAgICBtYXJnaW4tdG9wOjYwJTtcbi8vICAgICAgIGNvbG9yOndoaXRlO1xuLy8gICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICB9XG4vLyAgICB9XG5cbi5qb2JhYmlsaXR5bG9nb3tcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cblxuLndlbGNvbWV0ZXh0e1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgZm9udC1zaXplOjE4cHg7XG4gICAgbWFyZ2luLXRvcDo0JTtcbn1cblxuLmpvYmNvdW50dGV4dGNzc3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8gbWFyZ2luLXRvcDo0NSU7XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/welcomescreen/welcomescreen.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/welcomescreen/welcomescreen.page.ts ***!
  \*****************************************************/
/*! exports provided: WelcomescreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomescreenPage", function() { return WelcomescreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");







var WelcomescreenPage = /** @class */ (function () {
    function WelcomescreenPage(router, menuCtrl, titleService, tts, mobileAccessibility, loadingController, navctrl, platform) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.titleService = titleService;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.loadingController = loadingController;
        this.navctrl = navctrl;
        this.platform = platform;
        this.jobtitle = "";
        this.location = "";
        this.post = { color: 'primary' };
    }
    WelcomescreenPage.prototype.ngOnInit = function () {
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
    };
    //Function for drawer disabled on launch
    WelcomescreenPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
        var loginSession = localStorage.getItem('login');
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
        }
        else {
            this.loadingController.dismiss();
            localStorage.clear();
        }
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
    WelcomescreenPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'circles'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WelcomescreenPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    WelcomescreenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcomescreen',
            template: __webpack_require__(/*! ./welcomescreen.page.html */ "./src/app/welcomescreen/welcomescreen.page.html"),
            styles: [__webpack_require__(/*! ./welcomescreen.page.scss */ "./src/app/welcomescreen/welcomescreen.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_5__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__["MobileAccessibility"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], WelcomescreenPage);
    return WelcomescreenPage;
}());



/***/ })

}]);
//# sourceMappingURL=welcomescreen-welcomescreen-module.js.map