(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateworkexperience-updateworkexperience-module"],{

/***/ "./src/app/updateworkexperience/updateworkexperience.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/updateworkexperience/updateworkexperience.module.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateworkexperiencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateworkexperiencePageModule", function() { return UpdateworkexperiencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateworkexperience_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateworkexperience.page */ "./src/app/updateworkexperience/updateworkexperience.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _updateworkexperience_page__WEBPACK_IMPORTED_MODULE_6__["UpdateworkexperiencePage"]
    }
];
var UpdateworkexperiencePageModule = /** @class */ (function () {
    function UpdateworkexperiencePageModule() {
    }
    UpdateworkexperiencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updateworkexperience_page__WEBPACK_IMPORTED_MODULE_6__["UpdateworkexperiencePage"]]
        })
    ], UpdateworkexperiencePageModule);
    return UpdateworkexperiencePageModule;
}());



/***/ }),

/***/ "./src/app/updateworkexperience/updateworkexperience.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/updateworkexperience/updateworkexperience.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"new-background-color\"> -->\n<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\"color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Work Experience</ion-title>\n  </ion-item>\n</ion-toolbar>\n<!-- </ion-header> -->\n\n<ion-content>\n\n  <ion-card class=\"cardMargins boxShadow\">\n    <ion-card-content>\n      <div class=\"formPadding\">\n        <form [formGroup]=\"updateWorkExperienceForm\"\n          (ngSubmit)=\"updateWorkExperienceDetail(updateWorkExperienceForm.value)\">\n\n          <div *ngIf=\"employerStaus\">\n            <ion-row>\n              <ion-col size=\"1\">\n                <ion-checkbox formControlName=\"currentEmployer\" [(ngModel)]=\"currentEmployer\" class=\"checkBoxBorder\">\n                </ion-checkbox>\n              </ion-col>\n              <ion-col size=\"11\">\n                <ion-label class=\"headerNameCss\">Current Employer</ion-label>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <mat-form-field class=\"inputFields\">\n            <input matInput placeholder=\"Company / Organisation\" [(ngModel)]=\"companyOrganisation\"\n              formControlName=\"companyOrganisation\" [errorStateMatcher]=\"esMatcher\"\n              pattern=\"^[a-zA-Z]+[\\-'\\s]?[a-zA-Z ]+$\">\n\n            <mat-icon matSuffix color=\"warn\"\n              *ngIf=\"(updateWorkExperienceForm.controls.companyOrganisation.invalid && updateWorkExperienceForm.controls.companyOrganisation.touched) || (updateWorkExperienceForm.controls.companyOrganisation.invalid && showErrorIcon && !updateWorkExperienceForm.controls.companyOrganisation.touched)\">\n              error\n            </mat-icon>\n            <mat-error>\n              <span *ngIf=\"updateWorkExperienceForm.controls.companyOrganisation.errors?.required\">Company /\n                Organisation is required.</span>\n              <span *ngIf=\"updateWorkExperienceForm.controls.companyOrganisation.errors?.pattern\">Please enter valid\n                company / organisation.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <input matInput placeholder=\"Designation\" [(ngModel)]=\"designation\" formControlName=\"designation\"\n              [errorStateMatcher]=\"esMatcher\" pattern=\"^[a-zA-Z]+[\\-'\\s]?[a-zA-Z. ]+$\">\n            <mat-icon matSuffix color=\"warn\"\n              *ngIf=\"(updateWorkExperienceForm.controls.designation.invalid && updateWorkExperienceForm.controls.designation.touched) || (updateWorkExperienceForm.controls.designation.invalid && showErrorIcon && !updateWorkExperienceForm.controls.designation.touched)\">\n              error\n            </mat-icon>\n            <mat-error>\n              <span *ngIf=\"updateWorkExperienceForm.controls.designation.errors?.required\">Designation is\n                required.</span>\n              <span *ngIf=\"updateWorkExperienceForm.controls.designation.errors?.pattern\">Please enter valid\n                designation.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <ion-label>From</ion-label>\n          <ion-row>\n            <ion-col size=\"6\">\n              <mat-form-field class=\"inputFields\">\n                <mat-label>Select Year</mat-label>\n                <mat-select formControlName=\"fromYear\" [errorStateMatcher]=\"esMatcher\" [(ngModel)]=\"selectedYearFrom\"\n                  (selectionChange)=\"selectedFromYear($event.value)\" [aria-label]=\"readFromYear\">\n                  <mat-option *ngFor=\"let item of yearExperianceFromArray\" [value]=\"item\">\n                    {{item}}\n                  </mat-option>\n                </mat-select>\n                <mat-error>\n                  <span *ngIf=\"updateWorkExperienceForm.controls.fromYear.errors?.required\">Year is\n                    required.</span>\n                </mat-error>\n              </mat-form-field>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <mat-form-field class=\"inputFields\">\n                <mat-label>Select Month</mat-label>\n                <mat-select formControlName=\"fromMonth\" [errorStateMatcher]=\"esMatcher\"\n                  (selectionChange)=\"selectedFromMonth($event.value)\" [(ngModel)]=\"fromYearStartMonth\"\n                  [disabled]=\"isFromMonthDisabled\" [aria-label]=\"readFromMonth\">\n                  <mat-option *ngFor=\"let item of monthExperianceArray\" [value]=\"item.id\">\n                    {{item.name}}\n                  </mat-option>\n                </mat-select>\n                <mat-error>\n                  <span *ngIf=\"updateWorkExperienceForm.controls.fromMonth.errors?.required\">Month is\n                    required.</span>\n                </mat-error>\n              </mat-form-field>\n            </ion-col>\n          </ion-row>\n\n          <div *ngIf=\"!currentEmployer\">\n            <ion-label>To</ion-label>\n            <ion-row>\n              <ion-col size=\"6\">\n                <mat-form-field class=\"inputFields\">\n                  <mat-label>Select Year</mat-label>\n                  <mat-select formControlName=\"toYear\" [errorStateMatcher]=\"esMatcher\" [(ngModel)]=\"toYearEndYear\"\n                    (selectionChange)=\"selectedToYear($event.value)\" [aria-label]=\"readToYear\">\n                    <mat-option *ngFor=\"let item of yearExperianceToArray\" [value]=\"item\">\n                      {{item}}\n                    </mat-option>\n                  </mat-select>\n                  <mat-error>\n                    <span *ngIf=\"updateWorkExperienceForm.controls.toYear.errors?.required\">Year is\n                      required.</span>\n                  </mat-error>\n                </mat-form-field>\n              </ion-col>\n\n              <ion-col size=\"6\">\n                <mat-form-field class=\"inputFields\">\n                  <mat-label>Select Month</mat-label>\n                  <mat-select formControlName=\"toMonth\" [errorStateMatcher]=\"esMatcher\" [(ngModel)]=\"toYearEndMonth\"\n                    [disabled]=\"isToMonthDisabled\" (selectionChange)=\"selectedToMonth($event.value)\"\n                    [aria-label]=\"readToMonth\">\n                    <mat-option *ngFor=\"let item of monthExperianceToArray\" [value]=\"item.id\">\n                      {{item.name}}\n                    </mat-option>\n                  </mat-select>\n                  <mat-error>\n                    <span *ngIf=\"updateWorkExperienceForm.controls.toMonth.errors?.required\">Month is\n                      required.</span>\n                  </mat-error>\n                </mat-form-field>\n              </ion-col>\n            </ion-row>\n\n\n\n            <mat-form-field class=\"inputFields\">\n              <input matInput placeholder=\"Reason For Leaving\" [(ngModel)]=\"reasonForLeaving\"\n                formControlName=\"reasonForLeaving\" [errorStateMatcher]=\"esMatcher\"\n                pattern=\"^[a-zA-Z0-9]+[\\-'\\s]?[a-zA-Z0-9 ]+$\">\n              <mat-icon matSuffix color=\"warn\"\n                *ngIf=\"(updateWorkExperienceForm.controls.reasonForLeaving.invalid && updateWorkExperienceForm.controls.reasonForLeaving.touched) || (updateWorkExperienceForm.controls.reasonForLeaving.invalid && showErrorIcon && !updateWorkExperienceForm.controls.reasonForLeaving.touched)\">\n                error\n              </mat-icon>\n              <mat-error>\n                <span *ngIf=\"updateWorkExperienceForm.controls.reasonForLeaving.errors?.required\">\n                  Reason for leaving is required.</span>\n                <span *ngIf=\"updateWorkExperienceForm.controls.reasonForLeaving.errors?.pattern\">Please enter\n                  valid reason for leaving.</span>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div *ngIf=\"currentEmployer\">\n            <p style=\"text-align: center\" class=\"headerNameCss\">To Till Now</p>\n          </div>\n\n          <button type=\"submit\" class=\"buttonfont selector loginButton\">SAVE</button>\n\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <br>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/updateworkexperience/updateworkexperience.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/updateworkexperience/updateworkexperience.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bordertask {\n  border: 0px black;\n  /* border-radius: 4px; */\n  /* padding: 5px !important; */\n  /* height: 52px; */ }\n\n.boxShadow {\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC91cGRhdGV3b3JrZXhwZXJpZW5jZS91cGRhdGV3b3JrZXhwZXJpZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBLEVBQW1COztBQVl2QjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRld29ya2V4cGVyaWVuY2UvdXBkYXRld29ya2V4cGVyaWVuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcnRhc2sge1xuICAgIGJvcmRlcjogMHB4IGJsYWNrO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cbiAgICAvKiBwYWRkaW5nOiA1cHggIWltcG9ydGFudDsgKi9cbiAgICAvKiBoZWlnaHQ6IDUycHg7ICovXG59XG5cbi8vIGVsZW1lbnQuc3R5bGUge1xuLy8gICAgIC8vIGZsZXg6IDAgMCBjYWxjKGNhbGMoMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKTtcbi8vICAgICAvLyB3aWR0aDogY2FsYyhjYWxjKDIgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSk7XG4vLyAgICAgLy8gbWF4LXdpZHRoOiBjYWxjKGNhbGMoMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKTtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIH1cblxuXG5cbi5ib3hTaGFkb3d7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/updateworkexperience/updateworkexperience.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/updateworkexperience/updateworkexperience.page.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateworkexperiencePage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateworkexperiencePage", function() { return UpdateworkexperiencePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var UpdateworkexperiencePage = /** @class */ (function () {
    // isFromBothSelected = false
    // isToBothSelected = false
    // toBothErrorMsg: any
    function UpdateworkexperiencePage(router, alertCtrl, dataServices, activatedRoute, loadingController, formBuilder, navCtrl) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.yearExperianceFromArray = [];
        this.yearExperianceToArray = [];
        this.monthIndex = 0;
        this.isFromMonthDisabled = true;
        this.isToMonthDisabled = true;
        this.monthExperianceArray = [{ name: 'Jan', id: '1' },
            { name: 'Feb', id: '2' }, { name: 'Mar', id: '3' }, { name: 'Apr', id: '4' }, { name: 'May', id: '5' },
            { name: 'Jun', id: '6' }, { name: 'Jul', id: '7' }, { name: 'Aug', id: '8' }, { name: 'Sep', id: '9' },
            { name: 'Oct', id: '10' }, { name: 'Nov', id: '11' }, { name: 'Dec', id: '12' }];
        this.monthExperianceToArray = [{ name: 'Jan', id: '1' },
            { name: 'Feb', id: '2' }, { name: 'Mar', id: '3' }, { name: 'Apr', id: '4' }, { name: 'May', id: '5' },
            { name: 'Jun', id: '6' }, { name: 'Jul', id: '7' }, { name: 'Aug', id: '8' }, { name: 'Sep', id: '9' },
            { name: 'Oct', id: '10' }, { name: 'Nov', id: '11' }, { name: 'Dec', id: '12' }];
        this.showErrorIcon = false;
        this.readFromYear = 'Please select from year';
        this.readToYear = 'Please select to year';
        this.readFromMonth = 'Please select from month';
        this.readToMonth = 'Please select to month';
        this.onPageLoad();
    }
    UpdateworkexperiencePage.prototype.ngOnInit = function () {
        this.buildForm();
        this.setCurrentEmployerValidators();
    };
    // Forms declaration
    UpdateworkexperiencePage.prototype.buildForm = function () {
        this.updateWorkExperienceForm = this.formBuilder.group({
            currentEmployer: [''],
            companyOrganisation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fromYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fromMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            toYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            toMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            reasonForLeaving: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    UpdateworkexperiencePage.prototype.setCurrentEmployerValidators = function () {
        var toYear = this.updateWorkExperienceForm.get('toYear');
        var toMonth = this.updateWorkExperienceForm.get('toMonth');
        var reasonForLeaving = this.updateWorkExperienceForm.get('reasonForLeaving');
        this.updateWorkExperienceForm.get('currentEmployer').valueChanges
            .subscribe(function (currentEmployer) {
            if (currentEmployer === true) {
                toYear.setValidators(null);
                toMonth.setValidators(null);
                reasonForLeaving.setValidators(null);
            }
            if (currentEmployer === false) {
                toYear.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                toMonth.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                reasonForLeaving.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
            }
            toYear.updateValueAndValidity();
            toMonth.updateValueAndValidity();
            reasonForLeaving.updateValueAndValidity();
        });
    };
    UpdateworkexperiencePage.prototype.onPageLoad = function () {
        this.addExperience = (this.activatedRoute.snapshot.paramMap.get('addExperience'));
        this.cardLength = (this.activatedRoute.snapshot.paramMap.get('cardLength'));
        if (this.addExperience != null || this.addExperience != undefined && this.addExperience != '') {
            this.currentEmployer = (this.activatedRoute.snapshot.paramMap.get('currentEmployer'));
            if (this.currentEmployer == "undefined" || this.currentEmployer == "null" || this.currentEmployer == '' || this.cardLength == 0) {
                this.employerStaus = true;
                this.currentEmployer = false;
            }
            else if (this.cardLength >= 1 && this.currentEmployer != 'true') {
                this.employerStaus = true;
                this.currentEmployer = false;
            }
            else if (this.cardLength >= 1 && this.currentEmployer == 'true') {
                this.employerStaus = false;
                this.currentEmployer = false;
            }
        }
        else {
            var contactInfo = (this.activatedRoute.snapshot.paramMap.get('seekerExperienceInfo'));
            this.dataArray = JSON.parse(contactInfo);
            this.id = this.dataArray.id == null ? '' : this.dataArray.id;
            this.currentEmployer = this.dataArray.currentEmployer == 0 ? false : true;
            this.companyOrganisation = this.dataArray.company == null ? '' : this.dataArray.company;
            this.designation = this.dataArray.designation == null ? '' : this.dataArray.designation;
            this.selectedYearFrom = this.dataArray.fromYearStartDate == null ? '' : this.dataArray.fromYearStartDate;
            this.readFromYear = this.selectedYearFrom;
            this.fromYearStartMonth = this.dataArray.fromMonthStartDate == null ? '' : this.dataArray.fromMonthStartDate;
            if (this.fromYearStartMonth != '') {
                this.readFromMonth = this.monthExperianceArray[this.fromYearStartMonth - 1].name;
            }
            this.toYearEndYear = this.dataArray.toYearEndDate == 0 ? '' : this.dataArray.toYearEndDate;
            this.readToYear = this.toYearEndYear;
            this.toYearEndMonth = this.dataArray.toMonthEndDate == 0 ? '' : this.dataArray.toMonthEndDate;
            if (this.toYearEndMonth != '') {
                this.readToMonth = this.monthExperianceToArray[this.toYearEndMonth - 1].name;
            }
            this.reasonForLeaving = this.dataArray.reasonForLeaving == null ? '' : this.dataArray.reasonForLeaving;
            this.employerStaus = this.dataArray.currentEmployer == 0 ? false : true; //this.dataArray.employerStaus;
            this.firstCardEmployerStatus = this.dataArray.employerStaus;
            if (this.selectedYearFrom != '') {
                this.isFromMonthDisabled = false;
            }
            if (this.toYearEndYear != '') {
                this.isToMonthDisabled = false;
            }
            if (this.firstCardEmployerStatus == 0) {
                this.employerStaus = true;
            }
        }
        var currentYear = new Date().getFullYear();
        for (var i = currentYear; i >= 1965; i--) {
            this.yearExperianceFromArray.push(i.toString());
            this.yearExperianceToArray.push(i.toString());
        }
    };
    UpdateworkexperiencePage.prototype.selectedFromYear = function (year) {
        this.readFromYear = year;
        this.isFromMonthDisabled = false;
        this.monthExperianceToArray = [{ name: 'Jan', id: '1' },
            { name: 'Feb', id: '2' }, { name: 'Mar', id: '3' }, { name: 'Apr', id: '4' }, { name: 'May', id: '5' },
            { name: 'Jun', id: '6' }, { name: 'Jul', id: '7' }, { name: 'Aug', id: '8' }, { name: 'Sep', id: '9' },
            { name: 'Oct', id: '10' }, { name: 'Nov', id: '11' }, { name: 'Dec', id: '12' }];
        if (year > this.toYearEndYear) {
            this.toYearEndYear = undefined;
        }
        else if (year == this.toYearEndYear) {
            this.toYearEndMonth = undefined;
            for (var i = 0; i < this.fromYearStartMonth - 1; i++) {
                this.monthExperianceToArray.splice(0, 1);
            }
        }
        // this.fromYearStartMonth = undefined
        // this.toYearEndMonth = undefined
        this.monthExperianceArray;
        var currentYear = new Date().getFullYear();
        this.yearExperianceToArray = [];
        for (var i = currentYear; i >= year; i--) {
            this.yearExperianceToArray.push(i.toString());
        }
    };
    UpdateworkexperiencePage.prototype.selectedFromMonth = function (month) {
        this.readFromMonth = this.monthExperianceArray[month - 1].name;
        this.monthExperianceToArray = [{ name: 'Jan', id: '1' },
            { name: 'Feb', id: '2' }, { name: 'Mar', id: '3' }, { name: 'Apr', id: '4' }, { name: 'May', id: '5' },
            { name: 'Jun', id: '6' }, { name: 'Jul', id: '7' }, { name: 'Aug', id: '8' }, { name: 'Sep', id: '9' },
            { name: 'Oct', id: '10' }, { name: 'Nov', id: '11' }, { name: 'Dec', id: '12' }];
        if (this.toYearEndYear == this.selectedYearFrom) {
            this.toYearEndMonth = undefined;
            for (var i = 0; i < month - 1; i++) {
                this.monthExperianceToArray.splice(0, 1);
            }
        }
    };
    // fromYearStartMonth
    // selectedToMonth(month) {
    //   this.isToMonthDisabled = false
    // }
    UpdateworkexperiencePage.prototype.selectedToYear = function (year) {
        this.readToYear = year;
        this.monthExperianceToArray = [{ name: 'Jan', id: '1' },
            { name: 'Feb', id: '2' }, { name: 'Mar', id: '3' }, { name: 'Apr', id: '4' }, { name: 'May', id: '5' },
            { name: 'Jun', id: '6' }, { name: 'Jul', id: '7' }, { name: 'Aug', id: '8' }, { name: 'Sep', id: '9' },
            { name: 'Oct', id: '10' }, { name: 'Nov', id: '11' }, { name: 'Dec', id: '12' }];
        this.isToMonthDisabled = false;
        if (this.toYearEndYear == this.selectedYearFrom) {
            // this.fromYearStartMonth = undefined
            if (this.fromYearStartMonth != undefined) {
                for (var i = 0; i < this.fromYearStartMonth - 1; i++) {
                    this.monthExperianceToArray.splice(0, 1);
                }
            }
            this.toYearEndMonth = undefined;
        }
    };
    UpdateworkexperiencePage.prototype.selectedToMonth = function (month) {
        this.readToMonth = this.monthExperianceToArray[month - 1].name;
    };
    UpdateworkexperiencePage.prototype.updateWorkExperienceDetail = function (form) {
        var _this = this;
        var current_employer;
        if (form.fromYear > form.toYear) {
            this.toYearEndYear = undefined;
        }
        if (this.updateWorkExperienceForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.showErrorIcon = false;
            if (!this.currentEmployer) {
                current_employer = '0';
                if (this.addExperience != null || this.addExperience != undefined && this.addExperience != '') {
                    this.presentLoading();
                    this.dataServices.addWorkExperienceInfoAPI(current_employer, form.companyOrganisation, form.designation, form.fromMonth, form.fromYear, form.toMonth, form.toYear, form.reasonForLeaving).then(function (result) {
                        _this.loadingController.dismiss();
                        if (result.status == 1) {
                            console.log('Update Information :: ' + result);
                            _this.presentAlert(result.message, '');
                        }
                        else {
                            _this.presentAlert(result.message, '');
                        }
                    }, function (error) {
                        _this.loadingController.dismiss();
                        console.log(error);
                    });
                }
                else {
                    this.presentLoading();
                    this.dataServices.updateWorkExperienceInfoAPI(current_employer, form.companyOrganisation, form.designation, form.fromMonth, form.fromYear, form.toMonth, form.toYear, form.reasonForLeaving, this.id).then(function (result) {
                        _this.loadingController.dismiss();
                        if (result.status == 1) {
                            console.log('Update Information :: ' + result);
                            _this.presentAlert(result.message, '');
                        }
                        else {
                            _this.presentAlert(result.message, '');
                        }
                    }, function (error) {
                        _this.loadingController.dismiss();
                        console.log(error);
                    });
                }
            }
            else {
                current_employer = '1';
                form.toYear = '';
                form.toMonth = '';
                form.reasonForLeaving = '';
                if (this.addExperience != null || this.addExperience != undefined && this.addExperience != '') {
                    this.presentLoading();
                    this.dataServices.addWorkExperienceInfoAPI(current_employer, form.companyOrganisation, form.designation, form.fromMonth, form.fromYear, form.toMonth, form.toYear, form.reasonForLeaving).then(function (result) {
                        _this.loadingController.dismiss();
                        if (result.status == 1) {
                            _this.presentAlert(result.message, '');
                        }
                        else {
                            _this.presentAlert(result.message, '');
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    this.presentLoading();
                    this.dataServices.updateWorkExperienceInfoAPI(current_employer, form.companyOrganisation, form.designation, form.fromMonth, form.fromYear, form.toMonth, form.toYear, form.reasonForLeaving, this.id).then(function (result) {
                        _this.loadingController.dismiss();
                        if (result.status == 1) {
                            _this.presentAlert(result.message, '');
                        }
                        else {
                            _this.presentAlert(result.message, '');
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        }
    };
    UpdateworkexperiencePage.prototype.closePage = function () {
        // this.router.navigate(['/profile'])
        this.navCtrl.navigateRoot('/profile');
    };
    // onChange Functions 
    //onChange Functions Ends Here
    UpdateworkexperiencePage.prototype.presentAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.closePage();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Display loader 
    UpdateworkexperiencePage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    UpdateworkexperiencePage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    UpdateworkexperiencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateworkexperience',
            template: __webpack_require__(/*! ./updateworkexperience.page.html */ "./src/app/updateworkexperience/updateworkexperience.page.html"),
            styles: [__webpack_require__(/*! ./updateworkexperience.page.scss */ "./src/app/updateworkexperience/updateworkexperience.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], UpdateworkexperiencePage);
    return UpdateworkexperiencePage;
}());

/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ })

}]);
//# sourceMappingURL=updateworkexperience-updateworkexperience-module.js.map