(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employershortlistedcandidates-employershortlistedcandidates-module"],{

/***/ "./src/app/employershortlistedcandidates/employershortlistedcandidates.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/employershortlistedcandidates/employershortlistedcandidates.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EmployershortlistedcandidatesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployershortlistedcandidatesPageModule", function() { return EmployershortlistedcandidatesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employershortlistedcandidates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employershortlistedcandidates.page */ "./src/app/employershortlistedcandidates/employershortlistedcandidates.page.ts");







var routes = [
    {
        path: '',
        component: _employershortlistedcandidates_page__WEBPACK_IMPORTED_MODULE_6__["EmployershortlistedcandidatesPage"]
    }
];
var EmployershortlistedcandidatesPageModule = /** @class */ (function () {
    function EmployershortlistedcandidatesPageModule() {
    }
    EmployershortlistedcandidatesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employershortlistedcandidates_page__WEBPACK_IMPORTED_MODULE_6__["EmployershortlistedcandidatesPage"]]
        })
    ], EmployershortlistedcandidatesPageModule);
    return EmployershortlistedcandidatesPageModule;
}());



/***/ }),

/***/ "./src/app/employershortlistedcandidates/employershortlistedcandidates.page.html":
/*!***************************************************************************************!*\
  !*** ./src/app/employershortlistedcandidates/employershortlistedcandidates.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #2b0c43\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\" color: #2b0c43\">Shortlisted Candidates</ion-title>\n    <ion-icon name=\"notifications\"></ion-icon>\n\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n\n  <h5 align=\"center\" style=\"margin-top:50%\">Coming Soon...!</h5>\n</ion-content>"

/***/ }),

/***/ "./src/app/employershortlistedcandidates/employershortlistedcandidates.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/employershortlistedcandidates/employershortlistedcandidates.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyc2hvcnRsaXN0ZWRjYW5kaWRhdGVzL2VtcGxveWVyc2hvcnRsaXN0ZWRjYW5kaWRhdGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employershortlistedcandidates/employershortlistedcandidates.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/employershortlistedcandidates/employershortlistedcandidates.page.ts ***!
  \*************************************************************************************/
/*! exports provided: EmployershortlistedcandidatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployershortlistedcandidatesPage", function() { return EmployershortlistedcandidatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployershortlistedcandidatesPage = /** @class */ (function () {
    function EmployershortlistedcandidatesPage() {
    }
    EmployershortlistedcandidatesPage.prototype.ngOnInit = function () {
    };
    EmployershortlistedcandidatesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employershortlistedcandidates',
            template: __webpack_require__(/*! ./employershortlistedcandidates.page.html */ "./src/app/employershortlistedcandidates/employershortlistedcandidates.page.html"),
            styles: [__webpack_require__(/*! ./employershortlistedcandidates.page.scss */ "./src/app/employershortlistedcandidates/employershortlistedcandidates.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployershortlistedcandidatesPage);
    return EmployershortlistedcandidatesPage;
}());



/***/ })

}]);
//# sourceMappingURL=employershortlistedcandidates-employershortlistedcandidates-module.js.map