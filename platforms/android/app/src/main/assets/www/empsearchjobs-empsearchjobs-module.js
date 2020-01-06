(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empsearchjobs-empsearchjobs-module"],{

/***/ "./src/app/empsearchjobs/empsearchjobs.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/empsearchjobs/empsearchjobs.module.ts ***!
  \*******************************************************/
/*! exports provided: EmpsearchjobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpsearchjobsPageModule", function() { return EmpsearchjobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _empsearchjobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empsearchjobs.page */ "./src/app/empsearchjobs/empsearchjobs.page.ts");







var routes = [
    {
        path: '',
        component: _empsearchjobs_page__WEBPACK_IMPORTED_MODULE_6__["EmpsearchjobsPage"]
    }
];
var EmpsearchjobsPageModule = /** @class */ (function () {
    function EmpsearchjobsPageModule() {
    }
    EmpsearchjobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_empsearchjobs_page__WEBPACK_IMPORTED_MODULE_6__["EmpsearchjobsPage"]]
        })
    ], EmpsearchjobsPageModule);
    return EmpsearchjobsPageModule;
}());



/***/ }),

/***/ "./src/app/empsearchjobs/empsearchjobs.page.html":
/*!*******************************************************!*\
  !*** ./src/app/empsearchjobs/empsearchjobs.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-img src=\"../../assets/img/backnavigation.png\" (click)=\"goBack()\" style=\"width:20px; height:20px;\">\n    </ion-img>\n    <ion-searchbar [(ngModel)]=\"searchBar\" style=\"margin:5px\"></ion-searchbar>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n  <ion-card style=\"height:8%\" class=\"cardMargins\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"9\">\n          <ion-label style=\"color:black\">20 Resumes</ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-row>\n            <ion-icon name=\"funnel\" style=\"height:20px; width: 20px\"></ion-icon>\n            <ion-label (click)=\"filterEmpSearchResult()\" style=\"color:black; padding-left:5px !important\">Filter\n            </ion-label>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card *ngFor=\"let item of empSearchResultsArray; let j = index\" class=\"cardMargins\">\n    <ion-card-content>\n      <ion-list>\n        <ion-row>\n          <ion-col size=\"9\">\n        <ion-label style=\"font-size: 17px;color:black;\">{{item.name}}</ion-label>\n\n            <ion-row (click)=\"empSearchJobDetail()\">\n              <ion-col size=\"8\">\n                <ion-label style=\"font-size: 15px;color:black;\">{{item.title}}</ion-label>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-label style=\"font-size: 15px;color:black; padding :5px\">{{item.company}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n          <ion-row style=\"padding:5px; margin-top: -29px\">\n            <ion-img src=\"../../assets/img/experience.png\" style=\"width:15px; height:15px;;\"></ion-img>&nbsp;&nbsp;\n            <ion-label style=\"font-size: 15px;color:black; margin-top:-1px;\">{{item.minexp}} - </ion-label>\n            <ion-label style=\"font-size: 15px;color:black; margin-top:-1px\">{{item.maxexp}} years</ion-label>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <ion-img src=\"../../assets/img/location.png\" style=\"width:15px; height:15px; \"></ion-img>&nbsp;&nbsp;\n            <ion-label style=\"font-size: 15px;color:black ; margin-top:-3px\">{{item.location}}</ion-label><br>\n          </ion-row>\n          <i>\n            <ion-label style=\"font-size: 15px;color:black; padding :5px; font-weight:italic\">Posted: {{item.postdate}}\n              days ago</ion-label><br>\n          </i>\n          </ion-col>\n          <ion-col size=\"3\">\n            <div class=\"profile-picture big-profile-picture\"></div>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/empsearchjobs/empsearchjobs.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/empsearchjobs/empsearchjobs.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-picture {\n  padding: 3px;\n  border-radius: 100%;\n  box-sizing: content-box;\n  margin: 5% auto;\n  width: 45px;\n  height: 45px;\n  overflow: hidden;\n  background: #dedede; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBzZWFyY2hqb2JzL2VtcHNlYXJjaGpvYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUduQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wc2VhcmNoam9icy9lbXBzZWFyY2hqb2JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBpY3R1cmUge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBtYXJnaW46IDUlIGF1dG87XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogI2RlZGVkZTtcbiAgICB9XG4gICAgIl19 */"

/***/ }),

/***/ "./src/app/empsearchjobs/empsearchjobs.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/empsearchjobs/empsearchjobs.page.ts ***!
  \*****************************************************/
/*! exports provided: EmpsearchjobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpsearchjobsPage", function() { return EmpsearchjobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var EmpsearchjobsPage = /** @class */ (function () {
    function EmpsearchjobsPage(router, location) {
        this.router = router;
        this.location = location;
        this.empSearchResultsArray = [
            {
                name: 'UBA RAJU',
                title: 'Accountant Manager',
                company: 'Wipro',
                minexp: '0',
                maxexp: '3',
                location: 'pune',
                postdate: '3'
            },
            {
                name: 'UBA RAJU',
                title: 'Accountant Manager',
                company: 'Wipro',
                minexp: '0',
                maxexp: '3',
                location: 'chennai',
                postdate: '3'
            },
            {
                name: 'UBA RAJU',
                title: 'Accountant Manager',
                company: 'Wipro',
                minexp: '0',
                maxexp: '3',
                location: 'mumbai',
                postdate: '3'
            },
            {
                name: 'UBA RAJU',
                title: 'Accountant Manager',
                company: 'Wipro',
                minexp: '0',
                maxexp: '3',
                location: 'pune',
                postdate: '3'
            }
        ];
    }
    EmpsearchjobsPage.prototype.ngOnInit = function () {
    };
    EmpsearchjobsPage.prototype.empSearchJobDetail = function () {
        this.router.navigate(['/empsearchjobdetail']);
    };
    EmpsearchjobsPage.prototype.filterEmpSearchResult = function () {
        this.router.navigate(['/empsearchfilter']);
    };
    EmpsearchjobsPage.prototype.goBack = function () {
        this.location.back();
        // this.router.navigate(['/dashboardemployer']);
    };
    EmpsearchjobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empsearchjobs',
            template: __webpack_require__(/*! ./empsearchjobs.page.html */ "./src/app/empsearchjobs/empsearchjobs.page.html"),
            styles: [__webpack_require__(/*! ./empsearchjobs.page.scss */ "./src/app/empsearchjobs/empsearchjobs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], EmpsearchjobsPage);
    return EmpsearchjobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=empsearchjobs-empsearchjobs-module.js.map