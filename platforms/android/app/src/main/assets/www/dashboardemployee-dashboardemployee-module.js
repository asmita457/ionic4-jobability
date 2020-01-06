(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboardemployer-dashboardemployer-module"],{

/***/ "./src/app/dashboardemployer/dashboardemployer.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboardemployer/dashboardemployer.module.ts ***!
  \***************************************************************/
/*! exports provided: dashboardemployerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardemployerPageModule", function() { return dashboardemployerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboardemployer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboardemployer.page */ "./src/app/dashboardemployer/dashboardemployer.page.ts");







var routes = [
    {
        path: '',
        component: _dashboardemployer_page__WEBPACK_IMPORTED_MODULE_6__["dashboardemployerPage"]
    }
];
var dashboardemployerPageModule = /** @class */ (function () {
    function dashboardemployerPageModule() {
    }
    dashboardemployerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboardemployer_page__WEBPACK_IMPORTED_MODULE_6__["dashboardemployerPage"]]
        })
    ], dashboardemployerPageModule);
    return dashboardemployerPageModule;
}());



/***/ }),

/***/ "./src/app/dashboardemployer/dashboardemployer.page.html":
/*!***************************************************************!*\
  !*** ./src/app/dashboardemployer/dashboardemployer.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-icon name=\"notifications\"></ion-icon>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content style=\"background:#f6f6ee\" >\n  <ion-item lines=\"none\" style=\"height:20%\" class=\"new-background-color\">\n   \n  </ion-item>\n  <ion-card style=\"margin-top: -34%;\" class=\"searchcard\">\n      <ion-card-content>\n        <ion-item >\n        <ion-input placeholder=\"Search Candidates by jobtitle, skill\" style=\"font-size: 18px; \"></ion-input>\n      </ion-item>\n      </ion-card-content>\n    </ion-card>\n  <!-- <ion-searchbar style=\"margin-top: -34%;\"  placeholder=\"Search Candidates by jobtitle, skill\" [(ngModel)]=\"searchBar\">\n  <hr></ion-searchbar> -->\n  <div text-center style=\"font-size: 16px;margin-top:40%\">\n      You have not posted any jobs\n  </div>\n\n  <hr>\n  <button class=\"postjobbutton\">POST A JOB</button>\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboardemployer/dashboardemployer.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/dashboardemployer/dashboardemployer.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardcss {\n  margin-top: -38%;\n  height: 30% !important;\n  line-height: 80px;\n  padding: 5%; }\n\n.searchbar-input {\n  border: 0 !important;\n  box-shadow: none !important; }\n\n.searchbar-search-icon {\n  display: none;\n  width: 0;\n  height: 0; }\n\n.postjobbutton {\n  border: 0.5px solid black;\n  border-radius: 4px;\n  padding: 5px !important;\n  background: #2b0c43;\n  color: white;\n  margin-top: 5%;\n  height: 52px;\n  width: 60% !important;\n  margin-left: 20%;\n  margin-right: 20%;\n  font-size: 15px; }\n\n.searchbar-input.sc-ion-searchbar-md {\n  line-height: 60px !important;\n  padding: 5px !important;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n  border-radius: 5px; }\n\n.searchbar-search-icon.sc-ion-searchbar-md {\n  width: 0px !important;\n  height: 0px !important; }\n\n.searchcard {\n  background: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2luY2VwdGl2ZS9Eb2N1bWVudHMvZ2l0bGFiL2F0aW4tam9iYWJpbGl0eS1hbmRyb2lkL3NyYy9hcHAvZGFzaGJvYXJkZW1wbG95ZWUvZGFzaGJvYXJkZW1wbG95ZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksb0JBQW9CO0VBQ3BCLDJCQUEyQixFQUFBOztBQUcvQjtFQUVLLGFBQVk7RUFDWixRQUFPO0VBQ04sU0FBUSxFQUFBOztBQUtWO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFhO0VBQ2IsWUFBVztFQUNYLHFCQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFZdkI7RUFDSSw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkZW1wbG95ZWUvZGFzaGJvYXJkZW1wbG95ZWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRjc3N7XG4gICAgbWFyZ2luLXRvcDogLTM4JTtcbiAgICBoZWlnaHQ6IDMwJSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIHBhZGRpbmc6IDUlO1xufVxuXG4uc2VhcmNoYmFyLWlucHV0IHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hiYXItc2VhcmNoLWljb25cbiB7IFxuICAgICBkaXNwbGF5Om5vbmU7IFxuICAgICB3aWR0aDowO1xuICAgICAgaGVpZ2h0OjA7XG4gICAgXG4gICAgfVxuICAgIFxuXG4gICAgLnBvc3Rqb2JidXR0b257XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IzJiMGM0MztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOjUlO1xuICAgICAgICBoZWlnaHQ6NTJweDtcbiAgICAgICAgd2lkdGg6NjAlICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDoyMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbi8vIC5jYXJkY3Nze1xuLy8gICAgIGJhY2tncm91bmQ6d2hpdGU7XG4vLyAgICAgd2lkdGg6IDk2JTtcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgICAgaGVpZ2h0OjExJTtcbi8vICAgICBtYXJnaW4tdG9wOi0yOSU7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcbi8vICAgICBtYXJnaW4tbGVmdDogMiU7XG4vLyAgICAgLy8gbWFyZ2luLXRvcDogMTUlO1xuLy8gfVxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgICBsaW5lLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cbi5zZWFyY2hjYXJke1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboardemployer/dashboardemployer.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboardemployer/dashboardemployer.page.ts ***!
  \*************************************************************/
/*! exports provided: dashboardemployerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardemployerPage", function() { return dashboardemployerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var dashboardemployerPage = /** @class */ (function () {
    function dashboardemployerPage(router, menuCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    dashboardemployerPage.prototype.ngOnInit = function () {
    };
    dashboardemployerPage.prototype.ionViewWillEnter = function () {
        // localStorage.clear();
        this.menuCtrl.enable(true);
    };
    dashboardemployerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardemployer',
            template: __webpack_require__(/*! ./dashboardemployer.page.html */ "./src/app/dashboardemployer/dashboardemployer.page.html"),
            styles: [__webpack_require__(/*! ./dashboardemployer.page.scss */ "./src/app/dashboardemployer/dashboardemployer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], dashboardemployerPage);
    return dashboardemployerPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboardemployer-dashboardemployer-module.js.map