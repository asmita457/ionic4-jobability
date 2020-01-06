(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shortlistedcandidates-shortlistedcandidates-module"],{

/***/ "./src/app/shortlistedcandidates/shortlistedcandidates.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shortlistedcandidates/shortlistedcandidates.module.ts ***!
  \***********************************************************************/
/*! exports provided: ShortlistedcandidatesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortlistedcandidatesPageModule", function() { return ShortlistedcandidatesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shortlistedcandidates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shortlistedcandidates.page */ "./src/app/shortlistedcandidates/shortlistedcandidates.page.ts");







var routes = [
    {
        path: '',
        component: _shortlistedcandidates_page__WEBPACK_IMPORTED_MODULE_6__["ShortlistedcandidatesPage"]
    }
];
var ShortlistedcandidatesPageModule = /** @class */ (function () {
    function ShortlistedcandidatesPageModule() {
    }
    ShortlistedcandidatesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shortlistedcandidates_page__WEBPACK_IMPORTED_MODULE_6__["ShortlistedcandidatesPage"]]
        })
    ], ShortlistedcandidatesPageModule);
    return ShortlistedcandidatesPageModule;
}());



/***/ }),

/***/ "./src/app/shortlistedcandidates/shortlistedcandidates.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/shortlistedcandidates/shortlistedcandidates.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-title>\n      Shortlisted Candidates\n    </ion-title>\n    <ion-icon name=\"notifications\"></ion-icon>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n  <h5 align=\"center\" style=\"margin-top:50%\">Coming Soon...!</h5>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shortlistedcandidates/shortlistedcandidates.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shortlistedcandidates/shortlistedcandidates.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3J0bGlzdGVkY2FuZGlkYXRlcy9zaG9ydGxpc3RlZGNhbmRpZGF0ZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shortlistedcandidates/shortlistedcandidates.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shortlistedcandidates/shortlistedcandidates.page.ts ***!
  \*********************************************************************/
/*! exports provided: ShortlistedcandidatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortlistedcandidatesPage", function() { return ShortlistedcandidatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShortlistedcandidatesPage = /** @class */ (function () {
    function ShortlistedcandidatesPage() {
    }
    ShortlistedcandidatesPage.prototype.ngOnInit = function () {
    };
    ShortlistedcandidatesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shortlistedcandidates',
            template: __webpack_require__(/*! ./shortlistedcandidates.page.html */ "./src/app/shortlistedcandidates/shortlistedcandidates.page.html"),
            styles: [__webpack_require__(/*! ./shortlistedcandidates.page.scss */ "./src/app/shortlistedcandidates/shortlistedcandidates.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShortlistedcandidatesPage);
    return ShortlistedcandidatesPage;
}());



/***/ })

}]);
//# sourceMappingURL=shortlistedcandidates-shortlistedcandidates-module.js.map