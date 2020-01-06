(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employersearchresumesfilter-employersearchresumesfilter-module"],{

/***/ "./src/app/employersearchresumesfilter/employersearchresumesfilter.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/employersearchresumesfilter/employersearchresumesfilter.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EmployersearchresumesfilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployersearchresumesfilterPageModule", function() { return EmployersearchresumesfilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employersearchresumesfilter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employersearchresumesfilter.page */ "./src/app/employersearchresumesfilter/employersearchresumesfilter.page.ts");







var routes = [
    {
        path: '',
        component: _employersearchresumesfilter_page__WEBPACK_IMPORTED_MODULE_6__["EmployersearchresumesfilterPage"]
    }
];
var EmployersearchresumesfilterPageModule = /** @class */ (function () {
    function EmployersearchresumesfilterPageModule() {
    }
    EmployersearchresumesfilterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employersearchresumesfilter_page__WEBPACK_IMPORTED_MODULE_6__["EmployersearchresumesfilterPage"]]
        })
    ], EmployersearchresumesfilterPageModule);
    return EmployersearchresumesfilterPageModule;
}());



/***/ }),

/***/ "./src/app/employersearchresumesfilter/employersearchresumesfilter.page.html":
/*!***********************************************************************************!*\
  !*** ./src/app/employersearchresumesfilter/employersearchresumesfilter.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-grid>\n  <ion-row>\n    <!-- <ion-col (click)=\"closePage()\" size=\"2\" style=\"padding: 1% 0% 0% 5%;\">\n      <ion-icon name=\"close\" style=\" color: #2b0c43;font-size: x-large;\"></ion-icon>\n\n    </ion-col> -->\n    <ion-col size=\"7\">\n      <ion-title style=\"color: #2b0c43;margin-top: -2px\">Filter</ion-title>\n\n    </ion-col>\n    <ion-col size=\"5\" (click)=\"clearFilterData()\">\n      <ion-label style=\"color: #2b0c43;\">CLEAR FILTERS</ion-label>\n\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-toolbar>\n\n<ion-content>\n  <br>\n  <div class=\"inputDiv\">\n    <ion-item class=\"inoItem\">\n      <ion-label position=\"floating\" class=\"blacklabel\">Keywords (Skills)</ion-label>\n      <ion-input class=\"headerNameCss\" clear-on-edit=\"true\" type=\"text\" name=\"jobtitle\" [(ngModel)]=\"jobtitle\"></ion-input>\n    </ion-item>\n    <ion-item class=\"inoItem\">\n        <ion-label position=\"floating\" class=\"blacklabel\">Designation</ion-label>\n        <ion-input class=\"headerNameCss\" clear-on-edit=\"true\" type=\"text\" name=\"designation\" [(ngModel)]=\"designation\"></ion-input>\n        </ion-item>\n    <ion-item class=\"inoItem\">\n      <ion-label position=\"floating\" class=\"blacklabel\">Location</ion-label>\n      <ion-input class=\"headerNameCss\" clear-on-edit=\"true\" type=\"text\" name=\"location\" [(ngModel)]=\"location\"></ion-input>\n    </ion-item>\n\n    <br>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label class=\"headerNameCss\">Min Experience:</ion-label>\n        <ion-select class=\"ionSelectBorder headerNameCss\" [(ngModel)]=\"minExperience\" (ionChange)=\"onChangeMinExperience($event)\"\n          placeholder=\"Select Min Experience\">\n          <ion-select-option *ngFor=\"let item of min_experience; \" [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-label class=\"headerNameCss\">Max Experience:</ion-label>\n        <ion-select class=\"ionSelectBorder headingLabel\" [(ngModel)]=\"maxExperience\" (ionChange)=\"onChangeMaxExperience($event)\"\n          placeholder=\"Select Max Experience\">\n          <ion-select-option *ngFor=\"let item of max_experience;\" [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <br>\n\n\n    <!-- <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"headerNameCss\">Currency:</ion-label>\n\n\n      <ion-select class=\"ionSelectBorder\" (ionChange)=\"onChangeCurrency($event)\"\n      placeholder=\"Currency\" [(ngModel)]=\"currency\">\n      <ion-select-option *ngFor=\"let item of currncy_list; let i = index\"\n        [selected]=\"item.currency==INR\" [value]=\"item.currency\">\n        {{item.currency}}</ion-select-option>\n    </ion-select>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-label class=\"headerNameCss\">Min Salary:</ion-label>\n        <ion-select class=\"ionSelectBorder headingLabel\" [(ngModel)]=\"CtcFrom\" (ionChange)=\"onChangeMinSalary($event)\" placeholder=\"Min Salary\"\n          placeholder=\"Select Max Experience\">\n          <ion-select-option *ngFor=\"let item of annual_ctc_to;\" [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-label class=\"headerNameCss\">Max Salary:</ion-label>\n        <ion-select class=\"ionSelectBorder headingLabel\" [(ngModel)]=\"CtcTo\" (ionChange)=\"onChangeMaxSalary($event)\" placeholder=\"Max Salary\">\n          <ion-select-option *ngFor=\"let item of annual_ctc_to; \" [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <br> -->\n\n\n    <ion-label class=\"headerNameCss\">Disability Type:</ion-label>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-select class=\"ionSelectBorder\" [(ngModel)]=\"disability_id\" multiple=\"true\" (ionChange)=\"onChangeDisability($event)\" placeholder=\"Select Disability\">\n          <ion-select-option *ngFor=\"let item of disability_list; \"  [value]=\"item.id\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <br>\n   \n    <br>\n  </div>\n  <div class=\"saveButtonPadding\">\n    <button class=\"buttonfont\" (click)=\"updateResumeFilterDetail()\">APPLY</button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employersearchresumesfilter/employersearchresumesfilter.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/employersearchresumesfilter/employersearchresumesfilter.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyc2VhcmNocmVzdW1lc2ZpbHRlci9lbXBsb3llcnNlYXJjaHJlc3VtZXNmaWx0ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/employersearchresumesfilter/employersearchresumesfilter.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/employersearchresumesfilter/employersearchresumesfilter.page.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployersearchresumesfilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployersearchresumesfilterPage", function() { return EmployersearchresumesfilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EmployersearchresumesfilterPage = /** @class */ (function () {
    function EmployersearchresumesfilterPage(router, changeRef) {
        this.router = router;
        this.changeRef = changeRef;
        this.jobtitle = "";
        this.location = "";
        this.designation = '';
        this.minExperience = null;
        this.maxExperience = null;
        this.currency = "";
        this.CtcFrom = null;
        this.CtcTo = null;
        this.Disability = [];
        this.currncy_list = [];
        this.disability_list = [];
        this.min_experience = [];
        this.max_experience = [];
        this.annual_ctc_from = [];
        this.annual_ctc_to = [];
        this.disability_id = [];
        // Currency_id = 
        this.advancedFilterSearch = [];
    }
    EmployersearchresumesfilterPage.prototype.ngOnInit = function () {
    };
    EmployersearchresumesfilterPage.prototype.ionViewWillEnter = function () {
        for (var i = 0; i <= 40; i++) {
            this.min_experience.push(i);
            this.max_experience.push(i);
        }
        for (var i = 10000; i <= 2000000; i = i + 10000) {
            this.annual_ctc_from.push(i);
            this.annual_ctc_to.push(i);
        }
        this.uacc_id = localStorage.getItem('users_id');
        this.ddlListResponse = JSON.parse(localStorage.getItem('employerDDLResponse'));
        console.log('ddl lidt:', this.ddlListResponse);
        this.currncy_list = this.ddlListResponse.currency_list;
        this.disability_list = this.ddlListResponse.disability_list;
        console.log('Disability list:', this.disability_list);
        console.log('Currency list:', this.currncy_list);
    };
    // Funtoion For Clear Fill Fields
    EmployersearchresumesfilterPage.prototype.clearFilterData = function () {
        this.jobtitle = "";
        this.location = "";
        this.minExperience = "";
        this.maxExperience = "";
        this.currency = "";
        this.CtcFrom = "";
        this.CtcTo = "";
        this.disability_id = [];
        this.designation = '';
    }; // clearFilterData Ends Here
    EmployersearchresumesfilterPage.prototype.closePage = function () {
        this.router.navigate(['/employersearchresumes']);
    };
    //On Change Methods
    EmployersearchresumesfilterPage.prototype.onChangeMinExperience = function (item) {
        this.minExperience = item.detail.value;
        this.max_experience = [];
        for (var i = item.detail.value; i <= 40; i++) {
            this.max_experience.push(i);
            this.changeRef.detectChanges();
        }
    };
    EmployersearchresumesfilterPage.prototype.onChangeMaxExperience = function (item) {
        console.log('Max Experience:: ' + JSON.stringify(item.detail.value));
        this.maxExperience = item.detail.value;
    };
    EmployersearchresumesfilterPage.prototype.onChangeCurrency = function (item) {
        this.currency = item.detail.value;
    };
    EmployersearchresumesfilterPage.prototype.onChangeMinSalary = function (item) {
        this.CtcFrom = item.detail.value;
        this.annual_ctc_to = [];
        for (var i = item.detail.value; i <= 2000000; i = i + 10000) {
            this.annual_ctc_to.push(i);
            this.changeRef.detectChanges();
        }
    };
    EmployersearchresumesfilterPage.prototype.onChangeMaxSalary = function (item) {
        this.CtcTo = item.detail.value;
    };
    EmployersearchresumesfilterPage.prototype.onChangeDisability = function (item) {
        this.disability_id = [];
        this.disability_id = item.detail.value;
        console.log('disability id', this.disability_id);
        // let disability_Array = item.detail.value
        // for (let i = 0; i < disability_Array.length; i++) {
        //   this.disability_id.push(disability_Array[i])
        // }
    };
    // on change functions ends here.
    EmployersearchresumesfilterPage.prototype.updateResumeFilterDetail = function () {
        localStorage.setItem('searchResumeDataFlag', '2');
        this.advancedFilterSearch = [];
        this.advancedFilterSearch.push({
            jobTitle: this.jobtitle,
            location: this.location,
            minExperience: this.minExperience,
            maxExperience: this.maxExperience,
            Currency: this.currency,
            CtcFrom: this.CtcFrom,
            CtcTo: this.CtcTo,
            disability_id: this.disability_id,
            uacc_id: this.uacc_id,
            designation: this.designation
        });
        localStorage.setItem('advancedFilterSearch', JSON.stringify(this.advancedFilterSearch));
        // this.router.navigate(['/employersearchresumes'])
        this.router.navigate(['/employersearchresumes', { advancedFilterSearch: JSON.stringify(this.advancedFilterSearch[0]) }]);
    };
    EmployersearchresumesfilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employersearchresumesfilter',
            template: __webpack_require__(/*! ./employersearchresumesfilter.page.html */ "./src/app/employersearchresumesfilter/employersearchresumesfilter.page.html"),
            styles: [__webpack_require__(/*! ./employersearchresumesfilter.page.scss */ "./src/app/employersearchresumesfilter/employersearchresumesfilter.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], EmployersearchresumesfilterPage);
    return EmployersearchresumesfilterPage;
}());



/***/ })

}]);
//# sourceMappingURL=employersearchresumesfilter-employersearchresumesfilter-module.js.map