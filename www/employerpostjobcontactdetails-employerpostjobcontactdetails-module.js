(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employerpostjobcontactdetails-employerpostjobcontactdetails-module"],{

/***/ "./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EmployerpostjobcontactdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerpostjobcontactdetailsPageModule", function() { return EmployerpostjobcontactdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employerpostjobcontactdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employerpostjobcontactdetails.page */ "./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.page.ts");







var routes = [
    {
        path: '',
        component: _employerpostjobcontactdetails_page__WEBPACK_IMPORTED_MODULE_6__["EmployerpostjobcontactdetailsPage"]
    }
];
var EmployerpostjobcontactdetailsPageModule = /** @class */ (function () {
    function EmployerpostjobcontactdetailsPageModule() {
    }
    EmployerpostjobcontactdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employerpostjobcontactdetails_page__WEBPACK_IMPORTED_MODULE_6__["EmployerpostjobcontactdetailsPage"]]
        })
    ], EmployerpostjobcontactdetailsPageModule);
    return EmployerpostjobcontactdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Post Job</ion-title>\n  </ion-item>\n</ion-toolbar>\n<ion-content>\n\n  <div class=\"saveButtonPadding bottomposition\">\n    <button class=\"buttonfont\" (click)=\"nextPage()\">CONTINUE</button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVycG9zdGpvYmNvbnRhY3RkZXRhaWxzL2VtcGxveWVycG9zdGpvYmNvbnRhY3RkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.page.ts ***!
  \*************************************************************************************/
/*! exports provided: EmployerpostjobcontactdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerpostjobcontactdetailsPage", function() { return EmployerpostjobcontactdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EmployerpostjobcontactdetailsPage = /** @class */ (function () {
    function EmployerpostjobcontactdetailsPage(router) {
        this.router = router;
    }
    EmployerpostjobcontactdetailsPage.prototype.ngOnInit = function () {
    };
    EmployerpostjobcontactdetailsPage.prototype.closePage = function () {
        this.router.navigate(['/dashboardemployer']);
    };
    EmployerpostjobcontactdetailsPage.prototype.nextPage = function () {
        this.router.navigate(['/employerpostjobjoblocation']);
    };
    EmployerpostjobcontactdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employerpostjobcontactdetails',
            template: __webpack_require__(/*! ./employerpostjobcontactdetails.page.html */ "./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.page.html"),
            styles: [__webpack_require__(/*! ./employerpostjobcontactdetails.page.scss */ "./src/app/employerpostjobcontactdetails/employerpostjobcontactdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployerpostjobcontactdetailsPage);
    return EmployerpostjobcontactdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employerpostjobcontactdetails-employerpostjobcontactdetails-module.js.map