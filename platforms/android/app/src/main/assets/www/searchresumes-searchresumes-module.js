(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchresumes-searchresumes-module"],{

/***/ "./src/app/searchresumes/searchresumes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/searchresumes/searchresumes.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchresumesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresumesPageModule", function() { return SearchresumesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchresumes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchresumes.page */ "./src/app/searchresumes/searchresumes.page.ts");







var routes = [
    {
        path: '',
        component: _searchresumes_page__WEBPACK_IMPORTED_MODULE_6__["SearchresumesPage"]
    }
];
var SearchresumesPageModule = /** @class */ (function () {
    function SearchresumesPageModule() {
    }
    SearchresumesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchresumes_page__WEBPACK_IMPORTED_MODULE_6__["SearchresumesPage"]]
        })
    ], SearchresumesPageModule);
    return SearchresumesPageModule;
}());



/***/ }),

/***/ "./src/app/searchresumes/searchresumes.page.html":
/*!*******************************************************!*\
  !*** ./src/app/searchresumes/searchresumes.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #2b0c43\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\" color: #2b0c43\">Search Resumes</ion-title>\n    <ion-icon name=\"notifications\"></ion-icon>\n\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n\n    <h5 align=\"center\" style=\"margin-top:50%\">Coming Soon...!</h5>\n\n<!--   \n  <div class=\"inputDiv\">\n\n    <ion-item class=\"inoItem\" style=\"margin-top:20px\">\n      <ion-label position=\"floating\">\n        JobTitle / Skill\n      </ion-label>\n      <ion-input type=\"text\" name=\"jobtitle\" [(ngModel)]=\"jobtitle\"></ion-input>\n    </ion-item>\n\n\n    <ion-item class=\"inoItem\">\n      <ion-label position=\"floating\">\n        Location\n      </ion-label>\n      <ion-input type=\"text\" name=\"location\" [(ngModel)]=\"location\"></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-select placeholder=\"Min Experience\" class=\"ionSelectBorder inoItem\" (ionChange)=\"selectedGenderValue($event)\">\n          <ion-select-option *ngFor=\"let item of contactGenderArray; let i = index\" [selected]=\"i == selectedGenderIndex\" [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-select placeholder=\"Max Experience\" class=\"ionSelectBorder inoItem\" (ionChange)=\"selectedGenderValue($event)\">\n          <ion-select-option *ngFor=\"let item of contactGenderArray; let i = index\" [selected]=\"i == selectedGenderIndex\" [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-select placeholder=\"Min Salary\" class=\"ionSelectBorder inoItem custom-placeholder\" (ionChange)=\"selectedGenderValue($event)\">\n          <ion-select-option *ngFor=\"let item of contactGenderArray; let i = index\" [selected]=\"i == selectedGenderIndex\" [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-select placeholder=\"Max Salary\" class=\"ionSelectBorder inoItem custom-placeholder\" (ionChange)=\"selectedGenderValue($event)\">\n          <ion-select-option *ngFor=\"let item of contactGenderArray; let i = index\" [selected]=\"i == selectedGenderIndex\" [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-select placeholder=\"Disability Accepted\" class=\"ionSelectBorder inoItem\" (ionChange)=\"selectedGenderValue($event)\">\n      <ion-select-option *ngFor=\"let item of contactGenderArray; let i = index\" [selected]=\"i == selectedGenderIndex\" [value]=\"item\">\n        {{item}}</ion-select-option>\n    </ion-select>\n\n  </div>\n  <div class=\"saveButtonPadding\">\n    <button class=\"buttonfont\">Search</button>\n  </div> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/searchresumes/searchresumes.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/searchresumes/searchresumes.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaHJlc3VtZXMvc2VhcmNocmVzdW1lcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/searchresumes/searchresumes.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/searchresumes/searchresumes.page.ts ***!
  \*****************************************************/
/*! exports provided: SearchresumesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresumesPage", function() { return SearchresumesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchresumesPage = /** @class */ (function () {
    function SearchresumesPage() {
    }
    SearchresumesPage.prototype.ngOnInit = function () {
    };
    SearchresumesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchresumes',
            template: __webpack_require__(/*! ./searchresumes.page.html */ "./src/app/searchresumes/searchresumes.page.html"),
            styles: [__webpack_require__(/*! ./searchresumes.page.scss */ "./src/app/searchresumes/searchresumes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchresumesPage);
    return SearchresumesPage;
}());



/***/ })

}]);
//# sourceMappingURL=searchresumes-searchresumes-module.js.map