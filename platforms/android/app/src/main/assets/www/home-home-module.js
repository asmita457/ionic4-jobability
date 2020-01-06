(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"SplashScreenOnWelcomeScreen\">\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.SplashScreenOnWelcomeScreen {\n  --background: url('splashscreen.png') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDZEQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLlNwbGFzaFNjcmVlbk9uV2VsY29tZVNjcmVlbntcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9zcGxhc2hzY3JlZW4ucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");





var HomePage = /** @class */ (function () {
    function HomePage(navctrl, router, events, dataServices, platform) {
        this.navctrl = navctrl;
        this.router = router;
        this.events = events;
        this.dataServices = dataServices;
        this.platform = platform;
    }
    HomePage.prototype.ngOnInit = function () {
        // this.platform.ready().then(() => {
        this.loginSession();
        // })
    };
    HomePage.prototype.ionViewWillEnter = function () {
    };
    HomePage.prototype.loginSession = function () {
        this.userstype = localStorage.getItem('userstype');
        var loginSession = localStorage.getItem('login');
        if (loginSession == 'yes') {
            this.login();
            this.events.publish('Event-UserName');
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
    HomePage.prototype.login = function () {
        if (this.userstype == "4" || this.userstype == "Employer") {
            var appPages = [
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
            this.dataServices.setSideMenuItems(appPages);
            return;
        }
        else if (this.userstype == "5" || this.userstype == "Job Seeker") {
            var appPages = [
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
            this.dataServices.setSideMenuItems(appPages);
            return;
        }
        else if (this.userstype == "8" || this.userstype == "Service Provider") {
            var appPages = [
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
            this.dataServices.setSideMenuItems(appPages);
            return;
        }
        else if (this.userstype == "0") {
            var appPages = [
                {
                    title: 'Log Out',
                    url: '/welcomescreen',
                    icon: 'log-out'
                }
            ];
            this.dataServices.setSideMenuItems(appPages);
            return;
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map