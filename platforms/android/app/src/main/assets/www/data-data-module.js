(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-data-module"],{

/***/ "./src/app/data/data.module.ts":
/*!*************************************!*\
  !*** ./src/app/data/data.module.ts ***!
  \*************************************/
/*! exports provided: DataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPageModule", function() { return DataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.page */ "./src/app/data/data.page.ts");







var routes = [
    {
        path: '',
        component: _data_page__WEBPACK_IMPORTED_MODULE_6__["DataPage"]
    }
];
var DataPageModule = /** @class */ (function () {
    function DataPageModule() {
    }
    DataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_data_page__WEBPACK_IMPORTED_MODULE_6__["DataPage"]]
        })
    ], DataPageModule);
    return DataPageModule;
}());



/***/ }),

/***/ "./src/app/data/data.page.html":
/*!*************************************!*\
  !*** ./src/app/data/data.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Data</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/data/data.page.scss":
/*!*************************************!*\
  !*** ./src/app/data/data.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEvZGF0YS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/data/data.page.ts":
/*!***********************************!*\
  !*** ./src/app/data/data.page.ts ***!
  \***********************************/
/*! exports provided: DataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPage", function() { return DataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataPage = /** @class */ (function () {
    function DataPage() {
    }
    DataPage.prototype.ngOnInit = function () {
    };
    DataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data',
            template: __webpack_require__(/*! ./data.page.html */ "./src/app/data/data.page.html"),
            styles: [__webpack_require__(/*! ./data.page.scss */ "./src/app/data/data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataPage);
    return DataPage;
}());



/***/ })

}]);
//# sourceMappingURL=data-data-module.js.map