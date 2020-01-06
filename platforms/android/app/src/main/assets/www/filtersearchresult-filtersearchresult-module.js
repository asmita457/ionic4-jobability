(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filtersearchresult-filtersearchresult-module"],{

/***/ "./src/app/filtersearchresult/filtersearchresult.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/filtersearchresult/filtersearchresult.module.ts ***!
  \*****************************************************************/
/*! exports provided: FiltersearchresultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersearchresultPageModule", function() { return FiltersearchresultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filtersearchresult_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filtersearchresult.page */ "./src/app/filtersearchresult/filtersearchresult.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _filtersearchresult_page__WEBPACK_IMPORTED_MODULE_6__["FiltersearchresultPage"]
    }
];
var FiltersearchresultPageModule = /** @class */ (function () {
    function FiltersearchresultPageModule() {
    }
    FiltersearchresultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_filtersearchresult_page__WEBPACK_IMPORTED_MODULE_6__["FiltersearchresultPage"]]
        })
    ], FiltersearchresultPageModule);
    return FiltersearchresultPageModule;
}());



/***/ }),

/***/ "./src/app/filtersearchresult/filtersearchresult.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/filtersearchresult/filtersearchresult.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <!-- <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Filter</ion-title>\n    <ion-label (click)=\"clearFilterData()\">CLEAR FILTERS</ion-label>\n  </ion-item> -->\n\n\n  <ion-row>\n    <!-- <ion-col (click)=\"closePage()\" size=\"2\" style=\"padding: 1% 0% 0% 5%;\">\n      <ion-icon name=\"close\" style=\" color: #2b0c43;font-size: x-large;\"></ion-icon>\n\n    </ion-col> -->\n    <ion-col size=\"6\">\n      <ion-title style=\"color: #2b0c43\">Filter</ion-title>\n\n    </ion-col>\n    <ion-col size=\"6\" (click)=\"clearFilterData()\">\n      <ion-label style=\"color: #2b0c43;float: right;padding: 2% 10% 0% 0%;\">CLEAR FILTERS</ion-label>\n\n    </ion-col>\n  </ion-row>\n</ion-toolbar>\n\n\n<ion-content>\n  <ion-card class=\"cardMargins\">\n    <ion-card-content>\n      <div class=\"formPadding\">\n        <mat-form-field class=\"inputFields\">\n          <input matInput placeholder=\"Keywords (Jobs title, Skill or Company)\" clear-on-edit=\"true\" type=\"text\"\n            name=\"jobTitle\" [(ngModel)]=\"jobTitle\">\n        </mat-form-field>\n\n        <mat-form-field class=\"inputFields\">\n          <input matInput placeholder=\"Location\" clear-on-edit=\"true\" type=\"text\" name=\"location\"\n            [(ngModel)]=\"location\">\n        </mat-form-field>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Min Experience</mat-label>\n              <mat-select [(ngModel)]=\"minExperience\" (selectionChange)=\"onChangeMinExperience($event.value)\">\n                <mat-option *ngFor=\"let item of min_experience\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Max Experience</mat-label>\n              <mat-select [(ngModel)]=\"maxExperience\">\n                <mat-option *ngFor=\"let item of max_experience\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col size=\"4\">\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Currency</mat-label>\n              <mat-select [(ngModel)]=\"Currency_id\">\n                <mat-option *ngFor=\"let item of currency_list\" [value]=\"item.currency\">\n                  {{item.currency}} </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </ion-col>\n\n          <ion-col size=\"4\">\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Min Salary</mat-label>\n              <mat-select [(ngModel)]=\"CtcFrom\" (selectionChange)=\"onChangeMinSalary($event.value)\">\n                <mat-option *ngFor=\"let item of annual_ctc_from\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </ion-col>\n\n          <ion-col size=\"4\">\n            <mat-form-field class=\"inputFields\">\n              <mat-label>Max Salary</mat-label>\n              <mat-select [(ngModel)]=\"CtcTo\">\n                <mat-option *ngFor=\"let item of annual_ctc_to\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n\n        <mat-form-field class=\"inputFields\">\n          <mat-label>Disability Type</mat-label>\n          <mat-select [(ngModel)]=\"disability_id\" multiple>\n            <mat-option *ngFor=\"let item of disability_list\" [value]=\"item.id\">\n              {{item.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"inputFields\">\n          <mat-label>Industry</mat-label>\n          <mat-select [(ngModel)]=\"industry_id\">\n            <mat-option *ngFor=\"let item of industry_list\" [value]=\"item.id\">\n              {{item.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"inputFields\">\n          <mat-label>Functional Area</mat-label>\n          <mat-select [(ngModel)]=\"functional_area_id\">\n            <mat-option *ngFor=\"let item of functional_area_list\" [value]=\"item.id\">\n              {{item.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <div class=\"saveButtonPadding\">\n          <button class=\"buttonfont\" (click)=\"updateFilterDetail()\">APPLY</button>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <!-- <div class=\"inputDiv\">\n    <!-- <ion-item class=\"inoItem\">\n      <ion-label position=\"floating\" class=\"blacklabel\">Keywords (Jobs title, Skill or Company)</ion-label>\n      <ion-input class=\"headerNameCss\" clear-on-edit=\"true\" type=\"text\" name=\"jobTitle\" [(ngModel)]=\"jobTitle\">\n      </ion-input>\n    </ion-item>\n    <ion-item class=\"inoItem\">\n      <ion-label position=\"floating\" class=\"blacklabel\">Location</ion-label>\n      <ion-input class=\"headerNameCss\" clear-on-edit=\"true\" type=\"text\" name=\"location\" [(ngModel)]=\"location\">\n      </ion-input>\n    </ion-item>\n    <br>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label class=\"headerNameCss\">Min Experience:</ion-label>\n        <ion-select class=\"ionSelectBorder headerNameCss\" [(ngModel)]=\"minExperience\"\n          (ionChange)=\"onChangeMinExperience($event)\" placeholder=\"Select Min Experience\">\n          <ion-select-option *ngFor=\"let item of min_experience; let i = index\" [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-label class=\"headerNameCss\">Max Experience:</ion-label>\n        <ion-select class=\"ionSelectBorder headingLabel\" [(ngModel)]=\"maxExperience\"\n          (ionChange)=\"onChangeMaxExperience($event)\" placeholder=\"Select Max Experience\">\n          <ion-select-option *ngFor=\"let item of max_experience; let i = index\"\n            [selected]=\"i == selectedMaxExperienceValue\" [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <br> -->\n\n  <!-- \n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"headerNameCss\">Currency:</ion-label>\n        <ion-select class=\"ionSelectBorder headerNameCss\" [(ngModel)]=\"currency\" (ionChange)=\"onChangeCurrency($event)\"\n          placeholder=\"Currency\">\n          <ion-select-option *ngFor=\"let item of currency_list; let i = index\" [selected]=\"item.currency == 'INR'\"\n            [value]=\"item\">\n            {{item.currency}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-label class=\"headerNameCss\">Min Salary:</ion-label>\n        <ion-select class=\"ionSelectBorder headingLabel\" [(ngModel)]=\"CtcFrom\" (ionChange)=\"onChangeMinSalary($event)\"\n          placeholder=\"Min Salary\" placeholder=\"Min Salary\">\n          <ion-select-option *ngFor=\"let item of annual_ctc_from; let i = index\" [selected]=\"i == selectedCtcToIndex\"\n            [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-label class=\"headerNameCss\">Max Salary:</ion-label>\n        <ion-select class=\"ionSelectBorder headingLabel\" [(ngModel)]=\"CtcTo\" (ionChange)=\"onChangeMaxSalary($event)\"\n          placeholder=\"Max Salary\">\n          <ion-select-option *ngFor=\"let item of annual_ctc_to; let i = index\" [selected]=\"i == selectedCtcToIndex\"\n            [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <br> -->\n\n  <!-- \n    <ion-label class=\"headerNameCss\">Disability Type:</ion-label>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-select class=\"ionSelectBorder\" [(ngModel)]=\"Disability\" multiple=\"true\"\n          (ionChange)=\"onChangeDisability($event)\" placeholder=\"Disability\">\n          <ion-select-option *ngFor=\"let item of disability_list; let i = index\"\n            [selected]=\"disability_id.indexOf(item.id) > -1\" [value]=\"item\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-label class=\"headerNameCss\">Industry:</ion-label>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-select class=\"ionSelectBorder\" [(ngModel)]=\"Industry\" (ionChange)=\"onChangeIndustry($event)\"\n          placeholder=\"Industry\">\n          <ion-select-option *ngFor=\"let item of industry_list; let i = index\" [selected]=\"item.id == industry_id\"\n            [value]=\"item\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-label class=\"headerNameCss\">Functional Area:</ion-label>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-select class=\"ionSelectBorder\" [(ngModel)]=\"FunctionalArea\" (ionChange)=\"onChangeFunctionalArea($event)\"\n          placeholder=\"Functional Area\">\n          <ion-select-option *ngFor=\"let item of functional_area_list; let i = index\"\n            [selected]=\"item.id == 'functional_area_id'\" [value]=\"item\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <br> -->\n  <!-- </div>  -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/filtersearchresult/filtersearchresult.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/filtersearchresult/filtersearchresult.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionselectcss {\n  margin-left: 5%;\n  margin-right: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9maWx0ZXJzZWFyY2hyZXN1bHQvZmlsdGVyc2VhcmNocmVzdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyc2VhcmNocmVzdWx0L2ZpbHRlcnNlYXJjaHJlc3VsdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uc2VsZWN0Y3Nze1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6NSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/filtersearchresult/filtersearchresult.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/filtersearchresult/filtersearchresult.page.ts ***!
  \***************************************************************/
/*! exports provided: FiltersearchresultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersearchresultPage", function() { return FiltersearchresultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var FiltersearchresultPage = /** @class */ (function () {
    function FiltersearchresultPage(router, Location, loadingController, alertCtrl, navController) {
        this.router = router;
        this.Location = Location;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.currency_list = [];
        this.disability_list = [];
        this.functional_area_list = [];
        this.industry_list = [];
        this.disability_id = [];
        this.min_experience = [];
        this.max_experience = [];
        this.annual_ctc_from = [];
        this.annual_ctc_to = [];
        this.advancedFilterSearch = [];
        this.onPageLoad();
    }
    // Loaads Data When Page is called
    FiltersearchresultPage.prototype.onPageLoad = function () {
        this.dlllist = JSON.parse(localStorage.getItem('dllLIsts'));
        // this.avdvanceSearchFields = JSON.parse(localStorage.getItem('advanceFilter'))
        this.jobTitle = localStorage.getItem('jobtitle') == '' ? '' : localStorage.getItem('jobtitle');
        this.location = localStorage.getItem('location') == '' ? '' : localStorage.getItem('location');
        this.currency_list = this.dlllist.currency_list;
        this.disability_list = this.dlllist.disability_list;
        this.functional_area_list = this.dlllist.functional_area_list;
        this.industry_list = this.dlllist.industry_list;
        // if (this.avdvanceSearchFields != null) {
        //   if (this.avdvanceSearchFields[0] != undefined) {
        //     this.jobTitle = this.avdvanceSearchFields[0].jobTitle == '' ? this.jobTitle : this.avdvanceSearchFields[0].jobTitle
        //     this.location = this.avdvanceSearchFields[0].location
        //     this.minExperience = this.avdvanceSearchFields[0].minExperience
        //     this.maxExperience = this.avdvanceSearchFields[0].maxExperience
        //     this.Currency_id = this.avdvanceSearchFields[0].Currency
        //     this.CtcFrom = this.avdvanceSearchFields[0].CtcFrom
        //     this.CtcTo = this.avdvanceSearchFields[0].CtcTo
        //     this.disability_id = this.avdvanceSearchFields[0].disability_id
        //     // if (this.avdvanceSearchFields[0].disability_id.length != 0) {
        //     //   this.disability_id = this.avdvanceSearchFields[0].disability_id.split(",");
        //     // }
        //     this.functional_area_id = this.avdvanceSearchFields[0].functional_area_id
        //     this.industry_id = this.avdvanceSearchFields[0].industryId
        //   }
        // }
        for (var i = 0; i <= 35; i++) {
            this.min_experience.push(i);
            this.max_experience.push(i);
        }
        for (var i = 10000; i <= 2000000; i = i + 10000) {
            this.annual_ctc_from.push(i);
            this.annual_ctc_to.push(i);
        }
    };
    // Funtoion For Clear Fill Fields
    FiltersearchresultPage.prototype.clearFilterData = function () {
        this.jobTitle = "";
        this.location = "";
        this.minExperience = "";
        this.maxExperience = "";
        this.Currency_id = "";
        this.CtcFrom = "";
        this.CtcTo = "";
        this.disability_id = [];
        this.industry_id = "";
        this.functional_area_id = "";
        localStorage.removeItem("advanceFilter");
    }; // clearFilterData Ends Here
    FiltersearchresultPage.prototype.ngOnInit = function () {
    };
    FiltersearchresultPage.prototype.closePage = function () {
        localStorage.setItem('filterClosed', 'true');
        this.clearFilterData();
        this.Location.back();
    };
    FiltersearchresultPage.prototype.updateFilterDetail = function () {
        this.advancedFilterSearch = [];
        this.advancedFilterSearch.push({
            jobTitle: this.jobTitle,
            location: this.location,
            minExperience: this.minExperience,
            maxExperience: this.maxExperience,
            Currency: this.Currency_id,
            CtcFrom: this.CtcFrom,
            CtcTo: this.CtcTo,
            disability_id: this.disability_id,
            industryId: this.industry_id,
            functional_area_id: this.functional_area_id,
        });
        localStorage.setItem("advanceFilter", JSON.stringify(this.advancedFilterSearch));
        localStorage.setItem('filterClosed', 'false');
        this.router.navigate(['/searchjobs', { advancedFilterSearch: JSON.stringify(this.advancedFilterSearch[0]) }]);
        // this.navController.navigateRoot(['/searchjobs',{advancedFilterSearch: JSON.stringify(this.advancedFilterSearch[0]) }]).then(() => {
        // }); 
    };
    //On Change Methods
    FiltersearchresultPage.prototype.onChangeMinExperience = function (minYear) {
        if (minYear == 35) {
            minYear = minYear - 1;
        }
        this.minExperience = minYear;
        this.max_experience = [];
        for (var i = this.minExperience + 1; i <= 35; i++) {
            this.max_experience.push(i);
            // this.changeRef.detectChanges();
        }
    };
    FiltersearchresultPage.prototype.onChangeMinSalary = function (minSalary) {
        this.annual_ctc_to = [];
        if (minSalary == 2000000) {
            minSalary = minSalary - 10000;
        }
        this.CtcFrom = minSalary;
        for (var i = this.CtcFrom + 10000; i <= 2000000; i = i + 10000) {
            this.annual_ctc_to.push(i);
            // this.changeRef.detectChanges();
        }
    };
    // on change functions ends here.
    FiltersearchresultPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    FiltersearchresultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filtersearchresult',
            template: __webpack_require__(/*! ./filtersearchresult.page.html */ "./src/app/filtersearchresult/filtersearchresult.page.html"),
            styles: [__webpack_require__(/*! ./filtersearchresult.page.scss */ "./src/app/filtersearchresult/filtersearchresult.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], FiltersearchresultPage);
    return FiltersearchresultPage;
}());



/***/ })

}]);
//# sourceMappingURL=filtersearchresult-filtersearchresult-module.js.map