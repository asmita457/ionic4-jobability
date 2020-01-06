(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employerpostjobdetails-employerpostjobdetails-module"],{

/***/ "./src/app/employerpostjobdetails/employerpostjobdetails.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employerpostjobdetails/employerpostjobdetails.module.ts ***!
  \*************************************************************************/
/*! exports provided: EmployerpostjobdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerpostjobdetailsPageModule", function() { return EmployerpostjobdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employerpostjobdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employerpostjobdetails.page */ "./src/app/employerpostjobdetails/employerpostjobdetails.page.ts");







var routes = [
    {
        path: '',
        component: _employerpostjobdetails_page__WEBPACK_IMPORTED_MODULE_6__["EmployerpostjobdetailsPage"]
    }
];
var EmployerpostjobdetailsPageModule = /** @class */ (function () {
    function EmployerpostjobdetailsPageModule() {
    }
    EmployerpostjobdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employerpostjobdetails_page__WEBPACK_IMPORTED_MODULE_6__["EmployerpostjobdetailsPage"]]
        })
    ], EmployerpostjobdetailsPageModule);
    return EmployerpostjobdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/employerpostjobdetails/employerpostjobdetails.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/employerpostjobdetails/employerpostjobdetails.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Post Job</ion-title>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n  <h5 align=\"center\" style=\"color:#2b0c43\">Job Detail</h5>\n  <div class=\"inputDiv\" style=\"margin-top:10px\">\n\n\n    <ion-item class=\"inoItem headerNameCss\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showJobTitleErrorMsg == true, 'blacklabel' : showJobTitleErrorMsg == false}\">\n              Job Title\n            </ion-label>\n            <ion-input type=\"text\" name=\"jobtitle\" [(ngModel)]=\"jobtitle\" (ionChange)=\"jobTitleValidator()\" required>\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showJobTitleErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p class=\"errorMsg\" *ngIf=\"showJobTitleErrorMsg\">{{jobTitleErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-item class=\"inoItem headerNameCss\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showJobDescriptionErrorMsg == true, 'blacklabel' : showJobDescriptionErrorMsg == false}\">\n              Job Description\n            </ion-label>\n            <ion-input class=\"headerNameCss\" type=\"email\" name=\"jobdescription\" [(ngModel)]=\"jobdescription\"\n              (ionChange)=\"jobDescriptionValidator()\" required>\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showJobDescriptionErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <p class=\"errorMsg\" *ngIf=\"showJobDescriptionErrorMsg\">{{jobDescriptionErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-label class=\"headerNameCss\"\n      [ngClass]=\"{'redlabel' : onDisabilityStatusSelect == true, 'blacklabel' : onDisabilityStatusSelect == false}\">\n      Disability Type:</ion-label>\n    <ion-select class=\"ionSelectBorder ionselectcss\" multiple=\"true\" (ionChange)=\"onDisabilitySelect($event)\"\n      placeholder=\"Disability\" [(ngModel)]=\"disability_id\">\n      <ion-select-option *ngFor=\"let item of disabilityArray;\"\n        [value]=\"item.id\">{{item.name}}</ion-select-option>\n    </ion-select>\n    <ion-label *ngIf=\"onDisabilityStatusSelect\" style=\"color: red\">Please select atleast one disability type</ion-label> <br>\n\n\n    <ion-label class=\"headerNameCss\">Work Experience:</ion-label>\n    <br>\n    <ion-row class=\"ionselectcss\">\n\n      <ion-col size=\"6\">\n        <ion-label class=\"headerNameCss\"\n          [ngClass]=\"{'redlabel' : onMinExperienceStatusSelect == true, 'blacklabel' : onMinExperienceStatusSelect == false}\">\n          Min Experience:</ion-label>\n        <ion-select class=\"ionSelectBorder headerNameCss\" [(ngModel)]=\"selectedMinExperienceValue\"\n          (ionChange)=\"selecteMinExperienceValue($event)\" placeholder=\"Min Experience\">\n          <ion-select-option *ngFor=\"let item of min_experience; let i = index\"\n            [value]=\"item\" >\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label class=\"headerNameCss\"\n          [ngClass]=\"{'redlabel' : onMaxExperienceStatusSelect == true, 'blacklabel' : onMaxExperienceStatusSelect == false}\">\n          Max Experience:</ion-label>\n        <ion-select class=\"ionSelectBorder headerNameCss\" [(ngModel)]=\"selectedMaxExperienceValue\"\n          (ionChange)=\"selecteMaxExperienceValue($event)\"  placeholder=\"Max Experience\" >\n          <ion-select-option *ngFor=\"let item of max_experience; let i = index\"\n            [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <br>\n\n    <ion-label class=\"headerNameCss\">Annual Salary:</ion-label>\n    <br>\n    <ion-row class=\"ionselectcss\">\n      <ion-col size=\"4\">\n        <ion-label class=\"headerNameCss\"\n          [ngClass]=\"{'redlabel' : onCurrencyStatusSelect == true, 'blacklabel' : onCurrencyStatusSelect == false}\">\n          Currency:</ion-label>\n        <!-- <ion-select class=\"ionSelectBorder\" [(ngModel)]=\"clearCurrency\" (ionChange)=\"onChangeCurrency($event)\"\n          placeholder=\"Currency\">\n          <ion-select-option *ngFor=\"let item of currencyArray; let i = index\"\n            [selected]=\"item.currency == currencyPreselection\" [value]=\"item\">\n            {{item.currency}}</ion-select-option>\n        </ion-select> -->\n\n        <ion-select class=\"ionSelectBorder\" (ionChange)=\"onChangeCurrency($event)\"\n        placeholder=\"Currency\" [(ngModel)]=\"Currency_id\">\n        <ion-select-option *ngFor=\"let item of currencyArray; let i = index\"\n          [selected]=\"item.currency==INR\" [value]=\"item.currency\">\n          {{item.currency}}</ion-select-option>\n      </ion-select>\n      </ion-col>\n\n      <ion-col size=\"4\">\n        <ion-label class=\"headerNameCss\"\n          [ngClass]=\"{'redlabel' : onMinSalaryStatusSelect == true, 'blacklabel' : onMinSalaryStatusSelect == false}\">\n          Min Salary:</ion-label>\n        <ion-select class=\"ionSelectBorder\" [(ngModel)]=\"ctcFrom\" (ionChange)=\"selectedMinSalaryValue($event)\"\n          placeholder=\"Min Salary\">\n          <ion-select-option *ngFor=\"let item of annual_ctc_from; let i = index\" \n            [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n\n\n      <ion-col size=\"4\">\n        <ion-label class=\"headerNameCss\"\n          [ngClass]=\"{'redlabel' : onMaxSalaryStatusSelect == true, 'blacklabel' : onMaxSalaryStatusSelect == false}\">\n          Max Salary:</ion-label>\n        <ion-select class=\"ionSelectBorder\" [(ngModel)]=\"ctcTo\" (ionChange)=\"selectedMaxSalaryValue($event)\"\n          placeholder=\"Max Salary\">\n          <ion-select-option *ngFor=\"let item of annual_ctc_to; let i = index\"\n            [value]=\"item\">\n            {{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-checkbox [(ngModel)]=\"salaryHideShow\" clalabelss=\"checkBoxBorder\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"11\">\n        <ion-label class=\"headerNameCss\">Hide Salary from Jobseekers</ion-label>\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-item class=\"inoItem headerNameCss\" style=\"margin-top:-9px\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showJobVacanciesErrorMsg == true, 'blacklabel' : showJobVacanciesErrorMsg == false}\">\n              Vacancies\n            </ion-label>\n            <ion-input type=\"number\" name=\"vacancies\" [(ngModel)]=\"vacancies\" (ionChange)=\"jobVacancyValidator()\" required pattern=\"^[0-9]{10}$\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showJobVacanciesErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p class=\"errorMsg\" *ngIf=\"showJobVacanciesErrorMsg\">{{jobVacanciErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-item class=\"inoItem headerNameCss\" style=\"margin-top:-9px\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showJobLastDateErrorMsg == true, 'blacklabel' : showJobLastDateErrorMsg == false}\">\n              Last date for applying\n            </ion-label>\n\n            <ion-datetime #myPicker style=\"height: 30px\" align=\"start\" (ionChange)=\"jobLastDateValidator()\"\n              displayFormat=\"YYYY-MM-DD\" name=\"lastdate\" [(ngModel)]=\"lastdate\" min=\"{{startLastDate}}\" max=\"2050-12-30\">\n            </ion-datetime>\n\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showJobLastDateErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p class=\"errorMsg\" *ngIf=\"showJobLastDateErrorMsg\">{{jobLastDateErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n  <div class=\"saveButtonPadding\">\n    <button class=\"buttonfont\" (click)=\"nextPage()\">CONTINUE</button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employerpostjobdetails/employerpostjobdetails.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/employerpostjobdetails/employerpostjobdetails.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-button-group .sc-ion-alert-md {\n  height: 50px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBsb3llcnBvc3Rqb2JkZXRhaWxzL2VtcGxveWVycG9zdGpvYmRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llcnBvc3Rqb2JkZXRhaWxzL2VtcGxveWVycG9zdGpvYmRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYWxlcnQtYnV0dG9uLWdyb3VwIC5zYy1pb24tYWxlcnQtbWQge1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/employerpostjobdetails/employerpostjobdetails.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/employerpostjobdetails/employerpostjobdetails.page.ts ***!
  \***********************************************************************/
/*! exports provided: EmployerpostjobdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerpostjobdetailsPage", function() { return EmployerpostjobdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");

// import { Component, OnInit } from '@angular/core';



var EmployerpostjobdetailsPage = /** @class */ (function () {
    function EmployerpostjobdetailsPage(router, changeRef, activatedRoute, navController) {
        this.router = router;
        this.changeRef = changeRef;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.disabilityArray = [];
        this.currencyArray = [];
        this.ctcFrom = "";
        this.ctcTo = "";
        this.currency_list = [];
        this.disability_id = [];
        this.min_experience = [];
        this.max_experience = [];
        this.annual_ctc_from = [];
        this.annual_ctc_to = [];
        this.jobtitle = "";
        this.vacancies = "";
        this.hide_salary = 0;
        this.lastdate = "";
        this.postJobDetail = [];
        this.getPrePopulatedDataArray = [];
        this.jobdescription = "";
        this.disability_name = [];
        this.prePopulateDisabilityType = [];
        this.backwardJobDetailFlag = "";
        this.showJobLastDateErrorMsg = false;
        this.showJobVacanciesErrorMsg = false;
        this.onCurrencyStatusSelect = false;
        this.onMaxSalaryStatusSelect = false;
        this.onMinSalaryStatusSelect = false;
        this.onMaxExperienceStatusSelect = false;
        this.onMinExperienceStatusSelect = false;
        this.onDisabilityStatusSelect = false;
        this.showJobDescriptionErrorMsg = false;
        this.showJobTitleErrorMsg = false;
        this.backPostJobDetail = [];
    }
    EmployerpostjobdetailsPage.prototype.ngOnInit = function () {
    };
    EmployerpostjobdetailsPage.prototype.selectedDisabilityServedValue = function (item) {
        this.disabilityPreselection = item.detail.value;
        console.log('Selected Disability Type ::' + this.disabilityPreselection);
    };
    EmployerpostjobdetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.myDate = new Date();
        this.salaryHideShow = false;
        this.startLastDate = new Date().toISOString().slice(0, 10);
        this.DDlListArray = JSON.parse(localStorage.getItem('employerDDLResponse'));
        var jobdetaildata = JSON.parse(localStorage.getItem('postJobDetail'));
        console.log('test detail data:', jobdetaildata);
        this.currencyArray = this.DDlListArray.currency_list;
        this.backPostJobDetail = [];
        this.backwardJobDetailFlag = localStorage.getItem('backwardJobDetailFlag');
        if (this.backwardJobDetailFlag == "1") {
            this.backPostJobDetail = JSON.parse(localStorage.getItem('postJobDetail'));
            console.log('post Job Detail LocalStorage :', this.backPostJobDetail);
            this.disability_id = this.backPostJobDetail[0].disabilityType;
        }
        else {
            this.backPostJobDetail = [];
            localStorage.removeItem('postJobDetail');
        }
        this.disabilityArray = this.DDlListArray.disability_list;
        //this.changeRef.detectChanges();
        setTimeout(function () {
            _this.showJobTitleErrorMsg = false;
        }, 500);
        for (var i = 0; i <= 40; i++) {
            this.min_experience.push(i);
            this.max_experience.push(i);
        }
        for (var i = 10000; i <= 2000000; i = i + 10000) {
            this.annual_ctc_from.push(i);
            this.annual_ctc_to.push(i);
        }
    };
    EmployerpostjobdetailsPage.prototype.onChangeCurrency = function (item) {
        this.Currency_id = item.detail.value;
        if (this.Currency_id == "" || this.Currency_id == undefined || this.Currency_id == null) {
            this.onCurrencyStatusSelect = true;
        }
        else {
            this.onCurrencyStatusSelect = false;
        }
        console.log('Currency :: ' + this.Currency_id);
    };
    EmployerpostjobdetailsPage.prototype.selecteMinExperienceValue = function (item) {
        this.selectedMinExperienceValue = item.detail.value;
        if (this.selectedMinExperienceValue == 0) {
            this.onMinExperienceStatusSelect = false;
        }
        if (this.selectedMinExperienceValue == undefined || this.selectedMinExperienceValue == null) {
            this.onMinExperienceStatusSelect = true;
        }
        else {
            this.onMinExperienceStatusSelect = false;
        }
        this.max_experience = [];
        for (var i = item.detail.value; i <= 40; i++) {
            this.max_experience.push(i);
            this.changeRef.detectChanges();
        }
        console.log('Min Experience :: ' + JSON.stringify(item.detail.value));
    };
    EmployerpostjobdetailsPage.prototype.selecteMaxExperienceValue = function (item) {
        this.selectedMaxExperienceValue = item.detail.value;
        console.log('Max Experience:: ' + JSON.stringify(item.detail.value));
        if (this.selectedMaxExperienceValue == 0) {
            this.onMaxExperienceStatusSelect = false;
        }
        if (this.selectedMaxExperienceValue == undefined || this.selectedMaxExperienceValue == null) {
            this.onMaxExperienceStatusSelect = true;
        }
        else {
            this.onMaxExperienceStatusSelect = false;
        }
    };
    EmployerpostjobdetailsPage.prototype.selectedMinSalaryValue = function (item) {
        this.ctcFrom = item.detail.value;
        if (this.ctcFrom == "" || this.ctcFrom == undefined || this.ctcFrom == null) {
            this.onMinSalaryStatusSelect = true;
        }
        else {
            this.onMinSalaryStatusSelect = false;
        }
        this.annual_ctc_to = [];
        for (var i = item.detail.value; i <= 2000000; i = i + 10000) {
            this.annual_ctc_to.push(i);
            this.changeRef.detectChanges();
        }
        console.log('Min Salary :: ' + this.ctcFrom);
    };
    EmployerpostjobdetailsPage.prototype.selectedMaxSalaryValue = function (item) {
        this.ctcTo = item.detail.value;
        if (this.ctcTo == "" || this.ctcTo == undefined || this.ctcTo == null) {
            this.onMaxSalaryStatusSelect = true;
        }
        else {
            this.onMaxSalaryStatusSelect = false;
        }
        console.log('Max Salary :: ' + this.ctcTo);
    };
    EmployerpostjobdetailsPage.prototype.jobDescriptionValidator = function () {
        if (this.jobdescription == "" || this.jobdescription == null || this.jobdescription == undefined) {
            this.showJobDescriptionErrorMsg = true;
            this.jobDescriptionErrorMsg = "Please enter job description";
        }
        else {
            this.showJobDescriptionErrorMsg = false;
        }
    };
    EmployerpostjobdetailsPage.prototype.jobTitleValidator = function () {
        // if(this.backPostJobDetail != null){
        // if(this.backwardJobDetailFlag != "1")
        // {
        if (this.jobtitle == "" || this.jobtitle == null || this.jobtitle == undefined) {
            this.showJobTitleErrorMsg = true;
            this.jobTitleErrorMsg = "Please enter job title";
        }
        else {
            this.showJobTitleErrorMsg = false;
        }
        // }
        // else{
        // event.stop();
        // }
    };
    EmployerpostjobdetailsPage.prototype.jobLastDateValidator = function () {
        // if (this.lastdate == "" || this.lastdate == null || this.lastdate == undefined) {
        // this.showJobLastDateErrorMsg = true
        // this.jobLastDateErrorMsg = "Please enter last date for applying"
        // } else {
        // this.showJobLastDateErrorMsg = false
        // }
    };
    EmployerpostjobdetailsPage.prototype.jobVacancyValidator = function () {
        if (this.vacancies == "" || this.vacancies == null || this.vacancies == undefined) {
            this.showJobVacanciesErrorMsg = true;
            this.jobVacanciErrorMsg = "Please enter no. of vacancies";
        }
        else {
            this.showJobVacanciesErrorMsg = false;
        }
    };
    EmployerpostjobdetailsPage.prototype.onDisabilitySelect = function (item) {
        this.onDisabilityStatusSelect = false;
        if (this.disability_id.length == 0) {
            this.onDisabilityStatusSelect = true;
            return;
        }
        else {
            this.disability_id = [];
            this.disability_id = item.detail.value;
            this.onDisabilityStatusSelect = false;
            return;
        }
        //code update by sujit
        //for (let i = 0; i < arrayLength; i++) {
        //this.disability_id.push(item.detail.value[i].id);
        //this.disability_name.push(item.detail.value[i].name)
        // this.onDisabilityStatusSelect = false
        // //}
        // if (this.disability_id.length == 0) {
        // this.onDisabilityStatusSelect = true
        // } else {
        // this.onDisabilityStatusSelect = false
        // }
        // this.disability_id =item.detail.value.id;
        //console.log('Disability Type :: ' + this.disability_id)
    };
    EmployerpostjobdetailsPage.prototype.closePage = function () {
        this.navController.navigateRoot(['/dashboardemployer']).then(function () {
        });
    };
    EmployerpostjobdetailsPage.prototype.nextPage = function () {
        if (this.salaryHideShow == true) {
            this.hide_salary = 1;
        }
        else {
            this.hide_salary = 0;
        }
        if ((this.jobtitle == "" || this.jobtitle == null) &&
            (this.jobdescription == "" || this.jobdescription == null) &&
            (this.disability_id == undefined || this.disability_id == null || this.disability_id == []) &&
            (this.selectedMinExperienceValue == null || this.selectedMinExperienceValue == undefined) &&
            (this.selectedMaxExperienceValue == null || this.selectedMaxExperienceValue == undefined) &&
            (this.Currency_id == "" || this.Currency_id == null || this.Currency_id == undefined) &&
            (this.ctcFrom == "" || this.ctcFrom == null || this.ctcFrom == undefined) &&
            (this.ctcTo == "" || this.ctcTo == null || this.ctcTo == undefined) &&
            (this.vacancies == "" || this.vacancies == null || this.vacancies == undefined) &&
            // (this.lastdate == "" || this.lastdate == null || this.lastdate == undefined) &&
            (this.disability_id.length == 0)) {
            // this.presentAlert('All fields are mandatory', '')
            // return
            this.showJobTitleErrorMsg = true;
            this.jobTitleErrorMsg = "Please enter job title";
            this.showJobDescriptionErrorMsg = true;
            this.jobDescriptionErrorMsg = "Please enter job description";
            this.onDisabilityStatusSelect = true;
            this.onMinExperienceStatusSelect = true;
            this.onMaxExperienceStatusSelect = true;
            this.onMinSalaryStatusSelect = true;
            this.onMaxSalaryStatusSelect = true;
            this.showJobVacanciesErrorMsg = true;
            this.onCurrencyStatusSelect = true;
            this.jobVacanciErrorMsg = "Please enter no. of vacancies";
            // this.showJobLastDateErrorMsg = true
            // this.jobLastDateErrorMsg = "Please enter last date for applying"
            this.onDisabilityStatusSelect = true;
        }
        else {
            this.showJobTitleErrorMsg = false;
            this.showJobDescriptionErrorMsg = false;
            this.onDisabilityStatusSelect = false;
            this.onMinExperienceStatusSelect = false;
            this.onMaxExperienceStatusSelect = false;
            this.onMinSalaryStatusSelect = false;
            this.onMaxSalaryStatusSelect = false;
            this.showJobVacanciesErrorMsg = false;
            // this.showJobLastDateErrorMsg = false
            this.onCurrencyStatusSelect = false;
        }
        this.jobVacancyValidator();
        this.jobTitleValidator();
        this.jobDescriptionValidator();
        this.jobLastDateValidator();
        if (this.selectedMaxExperienceValue == undefined || this.selectedMaxExperienceValue == null) {
            this.onMaxExperienceStatusSelect = true;
        }
        else {
            this.onMaxExperienceStatusSelect = false;
        }
        if (this.selectedMinExperienceValue == undefined || this.selectedMinExperienceValue == null) {
            this.onMinExperienceStatusSelect = true;
        }
        else {
            this.onMinExperienceStatusSelect = false;
        }
        if (this.ctcFrom == "" || this.ctcFrom == undefined || this.ctcFrom == null) {
            this.onMinSalaryStatusSelect = true;
        }
        else {
            this.onMinSalaryStatusSelect = false;
        }
        if (this.ctcTo == "" || this.ctcTo == undefined || this.ctcTo == null) {
            this.onMaxSalaryStatusSelect = true;
        }
        else {
            this.onMaxSalaryStatusSelect = false;
        }
        if (this.disability_id.length == 0) {
            this.onDisabilityStatusSelect = true;
        }
        else {
            this.onDisabilityStatusSelect = false;
        }
        if (this.Currency_id == "" || this.Currency_id == undefined || this.Currency_id == null) {
            this.onCurrencyStatusSelect = true;
        }
        else {
            this.onCurrencyStatusSelect = false;
        }
        var LASTDATE = "";
        if (this.lastdate != "") {
            var date = new Date(this.lastdate);
            var month = String(date.getMonth() + 1);
            var day = String(date.getDate());
            var year = String(date.getFullYear());
            if (day.length < 2) {
                day = '0' + day;
            }
            if (month.length < 2) {
                month = '0' + month;
            }
            LASTDATE = day + '-' + month + '-' + year;
            console.log('Full selected date:-' + day + '-' + month + '-' + year);
        }
        if (this.showJobTitleErrorMsg == false &&
            this.showJobDescriptionErrorMsg == false &&
            this.onDisabilityStatusSelect == false &&
            this.onMinExperienceStatusSelect == false &&
            this.onMaxExperienceStatusSelect == false &&
            this.onMinSalaryStatusSelect == false &&
            this.onMaxSalaryStatusSelect == false &&
            this.showJobVacanciesErrorMsg == false &&
            // this.showJobLastDateErrorMsg == false &&
            this.onCurrencyStatusSelect == false) {
            // let LASTDATE = this.lastdate.split('T')[0].split('-')[2] + '-' + this.lastdate.split('T')[0].split('-')[1] + '-' + this.lastdate.split('T')[0].split('-')[0]
            this.postJobDetail.push({
                jobtitle: this.jobtitle,
                jobdescription: this.jobdescription,
                disabilityType: this.disability_id,
                selectedMinExperienceValue: this.selectedMinExperienceValue,
                selectedMaxExperienceValue: this.selectedMaxExperienceValue,
                Currency_id: this.Currency_id,
                ctcFrom: this.ctcFrom,
                ctcTo: this.ctcTo,
                salaryHideShow: this.hide_salary,
                vacancies: this.vacancies,
                lastdate: LASTDATE
            });
            localStorage.setItem('postJobDetail', JSON.stringify(this.postJobDetail));
            this.router.navigate(['/employerpostjoblocation']);
            // this.router.navigate(['/employerpostjoblocation', { item: JSON.stringify(this.postJobDetail) }])
        }
    };
    EmployerpostjobdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-employerpostjobdetails',
            template: __webpack_require__(/*! ./employerpostjobdetails.page.html */ "./src/app/employerpostjobdetails/employerpostjobdetails.page.html"),
            styles: [__webpack_require__(/*! ./employerpostjobdetails.page.scss */ "./src/app/employerpostjobdetails/employerpostjobdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], EmployerpostjobdetailsPage);
    return EmployerpostjobdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employerpostjobdetails-employerpostjobdetails-module.js.map