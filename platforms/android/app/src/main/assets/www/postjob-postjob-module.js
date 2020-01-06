(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postjob-postjob-module"],{

/***/ "./src/app/postjob/postjob.module.ts":
/*!*******************************************!*\
  !*** ./src/app/postjob/postjob.module.ts ***!
  \*******************************************/
/*! exports provided: PostjobPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostjobPageModule", function() { return PostjobPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _postjob_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postjob.page */ "./src/app/postjob/postjob.page.ts");







var routes = [
    {
        path: '',
        component: _postjob_page__WEBPACK_IMPORTED_MODULE_6__["PostjobPage"]
    }
];
var PostjobPageModule = /** @class */ (function () {
    function PostjobPageModule() {
    }
    PostjobPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_postjob_page__WEBPACK_IMPORTED_MODULE_6__["PostjobPage"]]
        })
    ], PostjobPageModule);
    return PostjobPageModule;
}());



/***/ }),

/***/ "./src/app/postjob/postjob.page.html":
/*!*******************************************!*\
  !*** ./src/app/postjob/postjob.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n    <ion-item lines=\"none\" class=\"new-background-color\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n    <!-- <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon> -->\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Post Job</ion-title>\n    </ion-item>\n   </ion-toolbar>\n   \n<ion-content>\n    <h5 align=\"center\" style=\"margin-top:50%\">Coming Soon...!</h5>\n\n<!-- \n  <ion-item class=\"itemmargin\" style=\"margin-top:20px\">\n    <ion-label position=\"floating\">\n      Job Title\n    </ion-label>\n    <ion-input type=\"text\" name=\"jobtitle\" [(ngModel)]=\"jobtitle\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"itemmargin\">\n    <ion-label position=\"floating\">\n      Description\n    </ion-label>\n    <ion-input type=\"text\" name=\"description\" [(ngModel)]=\"description\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"itemmargin\">\n    <ion-label position=\"floating\">\n      Disability\n    </ion-label>\n    <ion-input type=\"text\" name=\"disability\" [(ngModel)]=\"disability\"></ion-input>\n  </ion-item>\n\n  <ion-item class=\"itemmargin\">\n    <ion-label position=\"floating\">\n      Salary\n    </ion-label>\n    <ion-input type=\"text\" name=\"salary\" [(ngModel)]=\"salary\"></ion-input>\n  </ion-item>\n\n  <ion-row>\n    <ion-col size=\"5\">\n  <ion-item class=\"itemmargin\">\n    <ion-label position=\"floating\">\n      Vacancies\n    </ion-label>\n    <ion-input type=\"text\" name=\"vacancies\" [(ngModel)]=\"vacancies\" ></ion-input>\n  </ion-item>\n</ion-col>\n  <ion-col size=\"7\">\n\n  <ion-item class=\"itemmargin\">\n    <ion-label position=\"floating\">\n      Last date for applying\n    </ion-label>\n    <ion-input type=\"text\" name=\"lastdate\" [(ngModel)]=\"lastdate\" ></ion-input>\n  </ion-item>\n</ion-col>\n</ion-row>\n\n<div class=\"saveButtonPadding bottomposition\">\n    <button class=\"buttonfont\" (click)=\"postJob()\">Post</button>\n  </div> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/postjob/postjob.page.scss":
/*!*******************************************!*\
  !*** ./src/app/postjob/postjob.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itemmargin {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.bottomposition {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luY2VwdGl2ZS9Eb2N1bWVudHMvZ2l0bGFiL2F0aW4tam9iYWJpbGl0eS1hbmRyb2lkL3NyYy9hcHAvcG9zdGpvYi9wb3N0am9iLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlO0VBQ2YsT0FBTztFQUNQLFlBQVk7RUFDWixRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3N0am9iL3Bvc3Rqb2IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1tYXJnaW57XG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcbn1cblxuLmJvdHRvbXBvc2l0aW9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/postjob/postjob.page.ts":
/*!*****************************************!*\
  !*** ./src/app/postjob/postjob.page.ts ***!
  \*****************************************/
/*! exports provided: PostjobPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostjobPage", function() { return PostjobPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PostjobPage = /** @class */ (function () {
    function PostjobPage(router) {
        this.router = router;
    }
    PostjobPage.prototype.ngOnInit = function () {
    };
    PostjobPage.prototype.closePage = function () {
        this.router.navigate(['/dashboardemployer']);
    };
    PostjobPage.prototype.postJob = function () {
    };
    PostjobPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postjob',
            template: __webpack_require__(/*! ./postjob.page.html */ "./src/app/postjob/postjob.page.html"),
            styles: [__webpack_require__(/*! ./postjob.page.scss */ "./src/app/postjob/postjob.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostjobPage);
    return PostjobPage;
}());



/***/ })

}]);
//# sourceMappingURL=postjob-postjob-module.js.map