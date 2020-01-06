(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empsearchjobdetail-empsearchjobdetail-module"],{

/***/ "./src/app/empsearchjobdetail/empsearchjobdetail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/empsearchjobdetail/empsearchjobdetail.module.ts ***!
  \*****************************************************************/
/*! exports provided: EmpsearchjobdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpsearchjobdetailPageModule", function() { return EmpsearchjobdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _empsearchjobdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empsearchjobdetail.page */ "./src/app/empsearchjobdetail/empsearchjobdetail.page.ts");







var routes = [
    {
        path: '',
        component: _empsearchjobdetail_page__WEBPACK_IMPORTED_MODULE_6__["EmpsearchjobdetailPage"]
    }
];
var EmpsearchjobdetailPageModule = /** @class */ (function () {
    function EmpsearchjobdetailPageModule() {
    }
    EmpsearchjobdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_empsearchjobdetail_page__WEBPACK_IMPORTED_MODULE_6__["EmpsearchjobdetailPage"]]
        })
    ], EmpsearchjobdetailPageModule);
    return EmpsearchjobdetailPageModule;
}());



/***/ }),

/***/ "./src/app/empsearchjobdetail/empsearchjobdetail.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/empsearchjobdetail/empsearchjobdetail.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n    <ion-item lines=\"none\" class=\"new-background-color\">\n      <ion-img src=\"../../assets/img/backnavigation.png\" (click)=\"goBack()\" style=\"width:20px; height:20px;\">\n      </ion-img>\n      <ion-title>Job Details</ion-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-icon name=\"heart-empty\"></ion-icon>\n      <ion-icon name=\"share\"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n  <ion-content>\n    <ion-card class=\"cardmargincss\">\n      <ion-card-content>\n        <ion-list>\n          <ion-row>\n            <ion-col size=\"10\">\n              <ion-label style=\"font-size: 18px;color:black; \">Accountant Manager</ion-label>\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-icon name=\"heart-empty\" style=\"margin-top: 6px; height: 20px; width : 20px\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-label style=\"font-size: 16px;color:black; padding :5px;margin-top:-10px\">Inceptive</ion-label>\n          </ion-row>\n          <ion-row style=\"padding:5px\">\n            <ion-img src=\"../../assets/img/experience.png\" style=\"width:15px; height:15px;;\"></ion-img>&nbsp;&nbsp;\n            <ion-label style=\"font-size: 15px;color:black; margin-top:-1px;\">0 - </ion-label>\n            <ion-label style=\"font-size: 15px;color:black; margin-top:-1px\">2 years</ion-label>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <ion-img src=\"../../assets/img/location.png\" style=\"width:15px; height:15px; \"></ion-img>&nbsp;&nbsp;\n            <ion-label style=\"font-size: 15px;color:black ; margin-top:-3px\">Pune</ion-label><br>\n          </ion-row>\n          <i><ion-label style=\"font-size: 15px;color:black; padding :5px; font-weight:italic\">Posted: 1 days ago\n            </ion-label><br></i>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  \n  \n  \n    <ion-card class=\"cardMargins\">\n      <ion-card-header class=\"profileCardHeader\">\n        <ion-grid class=\"cardPadding\">\n          <ion-row class=\"profilePageHeaderrow\">\n            <ion-col size=\"10\">\n              <ion-label style=\"font-size:15px; color:black\" class=\"profilePageHeaderStripSection1\">JOB DESCRIPTION\n              </ion-label>\n            </ion-col>\n            <ion-col size=\"2\">\n                <ion-label (click)=\"updateJobDescription()\" class=\"profilePageHeaderStripSection2\">EDIT</ion-label>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n  \n      <ion-card-content class=\"cardPadding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"headingLabel\">Industry:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{industry}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Functional Area:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{functionalarea}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Description</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{description}}</ion-label>\n              <br>\n            </ion-col>\n  \n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  \n  \n  \n    <ion-card class=\"cardMargins\">\n      <ion-card-header class=\"profileCardHeader\">\n        <ion-grid class=\"cardPadding\">\n          <ion-row class=\"profilePageHeaderrow\">\n            <ion-col size=\"10\">\n              <ion-label style=\"font-size:15px; color:black\" class=\"profilePageHeaderStripSection1\">DESIRED CANDIDATE\n                PROFILE</ion-label>\n            </ion-col>\n            <ion-col size=\"2\">\n                <ion-label class=\"profilePageHeaderStripSection2\">EDIT</ion-label>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n  \n      <ion-card-content class=\"cardPadding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"headingLabel\">Key Skills:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{keyskills}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Qualification:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{qualification}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Company Description</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{companydesc}}</ion-label>\n              <br>\n            </ion-col>\n  \n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card class=\"cardMargins\">\n      <ion-card-header class=\"profileCardHeader\">\n        <ion-grid class=\"cardPadding\">\n          <ion-row class=\"profilePageHeaderrow\">\n            <ion-col size=\"12\">\n              <ion-label style=\"font-size:15px; color:black\" class=\"profilePageHeaderStripSection1\">CONTACT INFORMATION\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n  \n      <ion-card-content class=\"cardPadding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"headingLabel\">Key Skills:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{keyskills}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Qualification:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{qualification}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Company Description</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{companydesc}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Contact Person Name:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{keyskills}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Company Address:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{qualification}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Country:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{companydesc}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">State/Province:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{companydesc}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">District/City:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{keyskills}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Mobile:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{qualification}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Disability Accepted Types</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{companydesc}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Vacancies:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{companydesc}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Walkin Interview Dates:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{keyskills}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Annual Salary:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{qualification}}</ion-label>\n              <br>\n  \n            </ion-col>\n  \n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  \n    <div class=\"bottomposition\">\n      <button class=\"buttonfont\" >APPLY</button>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/empsearchjobdetail/empsearchjobdetail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/empsearchjobdetail/empsearchjobdetail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardmargincss {\n  margin-bottom: 5px;\n  border-radius: 0px;\n  width: 100%;\n  -webkit-margin-start: 0px;\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBzZWFyY2hqb2JkZXRhaWwvZW1wc2VhcmNoam9iZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLHlCQUF5QjtFQUN6QixnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wc2VhcmNoam9iZGV0YWlsL2VtcHNlYXJjaGpvYmRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmNhcmRtYXJnaW5jc3N7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogMHB4O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/empsearchjobdetail/empsearchjobdetail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/empsearchjobdetail/empsearchjobdetail.page.ts ***!
  \***************************************************************/
/*! exports provided: EmpsearchjobdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpsearchjobdetailPage", function() { return EmpsearchjobdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var EmpsearchjobdetailPage = /** @class */ (function () {
    function EmpsearchjobdetailPage(router, Location) {
        this.router = router;
        this.Location = Location;
    }
    EmpsearchjobdetailPage.prototype.ngOnInit = function () {
    };
    EmpsearchjobdetailPage.prototype.updateJobDescription = function () {
    };
    EmpsearchjobdetailPage.prototype.goBack = function () {
        this.Location.back();
        // this.routera   .navigate(['/empsearchjobs']);
    };
    EmpsearchjobdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empsearchjobdetail',
            template: __webpack_require__(/*! ./empsearchjobdetail.page.html */ "./src/app/empsearchjobdetail/empsearchjobdetail.page.html"),
            styles: [__webpack_require__(/*! ./empsearchjobdetail.page.scss */ "./src/app/empsearchjobdetail/empsearchjobdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], EmpsearchjobdetailPage);
    return EmpsearchjobdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=empsearchjobdetail-empsearchjobdetail-module.js.map