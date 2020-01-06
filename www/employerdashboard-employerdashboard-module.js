(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboardjobseeker-dashboardjobseeker-module"],{

/***/ "./src/app/dashboardjobseeker/dashboardjobseeker.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboardjobseeker/dashboardjobseeker.module.ts ***!
  \***************************************************************/
/*! exports provided: dashboardjobseekerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardjobseekerPageModule", function() { return dashboardjobseekerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboardjobseeker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboardjobseeker.page */ "./src/app/dashboardjobseeker/dashboardjobseeker.page.ts");







var routes = [
    {
        path: '',
        component: _dashboardjobseeker_page__WEBPACK_IMPORTED_MODULE_6__["dashboardjobseekerPage"]
    }
];
var dashboardjobseekerPageModule = /** @class */ (function () {
    function dashboardjobseekerPageModule() {
    }
    dashboardjobseekerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboardjobseeker_page__WEBPACK_IMPORTED_MODULE_6__["dashboardjobseekerPage"]]
        })
    ], dashboardjobseekerPageModule);
    return dashboardjobseekerPageModule;
}());



/***/ }),

/***/ "./src/app/dashboardjobseeker/dashboardjobseeker.page.html":
/*!***************************************************************!*\
  !*** ./src/app/dashboardjobseeker/dashboardjobseeker.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header> -->\n<ion-toolbar class=\"new-background-color\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-icon name=\"notifications\"></ion-icon>\n  </ion-item>\n\n</ion-toolbar>\n<!-- </ion-header> -->\n\n<ion-content>\n\n  <ion-card style=\"background-color:#F5F3F3;margin-top: 20px; padding-bottom:20px \">\n    <ion-card-content>\n\n      <ion-label style=\"color: black \">Search Jobs</ion-label>\n\n      <ion-item class=\"ionitemcss\">\n        <ion-label position=\"floating\">Jobtitle, Skill or Company</ion-label>\n        <ion-input clear-on-edit=\"true\" type=\"text\" name=\"jobtitle\" [(ngModel)]=\"jobtitle\" ></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ionitemcss\" >\n        <ion-label position=\"floating\">Location</ion-label>\n        <ion-input clear-on-edit=\"true\" type=\"text\" name=\"location\" [(ngModel)]=\"location\" ></ion-input>\n      </ion-item>\n\n\n      <button class=\"buttonfont selector inputTextbox\" (click)=\"searchJobs()\" style=\"width:80% !important\">FIND JOBS</button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card style=\"background-color:#F5F3F3; \">\n    <ion-card-content style=\"background-color:#F5F3F3; \">\n\n      <ion-label style=\"background-color:#F5F3F3;color: black \">Recommended Jobs</ion-label>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card style=\"background-color:#F5F3F3; \">\n    <ion-card-content>\n\n      <ion-label style=\"background-color:#F5F3F3;color: black\">My Saved Jobs</ion-label>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboardjobseeker/dashboardjobseeker.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/dashboardjobseeker/dashboardjobseeker.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionitemcss {\n  margin-left: 10%;\n  margin-right: 10%;\n  --background: var(--ion-item-background,var(--ion-background-color,#F5F3F3)) !important ; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luY2VwdGl2ZS9Eb2N1bWVudHMvZ2l0bGFiL2F0aW4tam9iYWJpbGl0eS1hbmRyb2lkL3NyYy9hcHAvZW1wbG95ZXJkYXNoYm9hcmQvZW1wbG95ZXJkYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsd0ZBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyZGFzaGJvYXJkL2VtcGxveWVyZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb25pdGVtY3Nze1xuICAgIG1hcmdpbi1sZWZ0OjEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6MTAlO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwjRjVGM0YzKSkgIWltcG9ydGFudCA7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboardjobseeker/dashboardjobseeker.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboardjobseeker/dashboardjobseeker.page.ts ***!
  \*************************************************************/
/*! exports provided: dashboardjobseekerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardjobseekerPage", function() { return dashboardjobseekerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var dashboardjobseekerPage = /** @class */ (function () {
    function dashboardjobseekerPage(menuCtrl, events, router, alertCtrl, dataServices) {
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.dataServices = dataServices;
        this.contactCountryArray = [];
        this.resultData = [];
        this.contactCountryIdArray = [];
        this.selectedCountryName = [];
    }
    dashboardjobseekerPage.prototype.ngOnInit = function () {
    };
    dashboardjobseekerPage.prototype.ionViewWillEnter = function () {
        this.jobtitle = "";
        this.location = "";
        this.menuCtrl.enable(true);
        this.getCountryArray();
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
    dashboardjobseekerPage.prototype.presentAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
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
    dashboardjobseekerPage.prototype.searchJobs = function () {
        if ((this.jobtitle == "" || this.jobtitle == undefined) && (this.location == "" || this.location == undefined)) {
            console.log('jobtitle :: ' + this.jobtitle);
            console.log('location:: ' + this.location);
            this.presentAlert('Please fill-up at least one field', '');
            return;
        }
        var jobTitle = this.jobtitle;
        var loction = this.location;
        this.router.navigate(['/searchjobs', { jobTitle: jobTitle, location: loction }]);
    };
    dashboardjobseekerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardjobseeker',
            template: __webpack_require__(/*! ./dashboardjobseeker.page.html */ "./src/app/dashboardjobseeker/dashboardjobseeker.page.html"),
            styles: [__webpack_require__(/*! ./dashboardjobseeker.page.scss */ "./src/app/dashboardjobseeker/dashboardjobseeker.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"]])
    ], dashboardjobseekerPage);
    return dashboardjobseekerPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboardjobseeker-dashboardjobseeker-module.js.map