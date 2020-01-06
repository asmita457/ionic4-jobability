(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employerpostjobmanagerresponses-employerpostjobmanagerresponses-module"],{

/***/ "./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EmployerpostjobmanagerresponsesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerpostjobmanagerresponsesPageModule", function() { return EmployerpostjobmanagerresponsesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employerpostjobmanagerresponses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employerpostjobmanagerresponses.page */ "./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.page.ts");







var routes = [
    {
        path: '',
        component: _employerpostjobmanagerresponses_page__WEBPACK_IMPORTED_MODULE_6__["EmployerpostjobmanagerresponsesPage"]
    }
];
var EmployerpostjobmanagerresponsesPageModule = /** @class */ (function () {
    function EmployerpostjobmanagerresponsesPageModule() {
    }
    EmployerpostjobmanagerresponsesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employerpostjobmanagerresponses_page__WEBPACK_IMPORTED_MODULE_6__["EmployerpostjobmanagerresponsesPage"]]
        })
    ], EmployerpostjobmanagerresponsesPageModule);
    return EmployerpostjobmanagerresponsesPageModule;
}());



/***/ }),

/***/ "./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.page.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-row>\n    <ion-col size=\"2\" (click)=\"goBack()\">\n      <ion-img src=\"../../assets/img/backnavigation.png\" style=\"padding: 20% 25% 25% 25%;\">\n      </ion-img>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-title class=\"titlecss\" style=\"margin-top:4px\">Post Job</ion-title>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>\n\n\n<ion-content>\n  <h5 align=\"center\" style=\"color:#2b0c43\">Manage Responses</h5>\n\n  <ion-grid style=\"margin-top:5%\">\n    <ion-row>\n      <ion-col size=\"6\" *ngIf=\"emailNonSelected\">\n        <button (click)=\"jobPostResponsesWithEmail()\" type=\"submit\"\n          class=\"postjobbuttonfont selector loginWithOtpButton\">EMAIL</button>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"emailSelected\">\n        <button type=\"submit\" class=\"postjobbuttonafterclick selector loginWithOtpButton\">EMAIL</button>\n      </ion-col>\n\n\n      <ion-col size=\"6\" *ngIf=\"walkinNonSelected\">\n        <button (click)=\"jobPostResponsesWithWalkin()\" type=\"submit\"\n          class=\"postjobbuttonfont selector loginWithOtpButton\">WALK-IN</button>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"walkinSelected\">\n        <button type=\"submit\" class=\"postjobbuttonafterclick selector loginWithOtpButton\">WALK-IN</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"inputDiv\" *ngIf=\"showEmailSection\">\n\n    <ion-item class=\"inoItem headerNameCss\" lines=\"none\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label>\n              Email1:\n            </ion-label>\n            <ion-label name=\"email1\">{{email1}}</ion-label>\n            <!-- <ion-input class=\"headerNameCss\" type=\"email\" name=\"email1\" [(ngModel)]=\"email1\"\n  (ionChange)=\"emailValidator()\" required pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$\">\n  </ion-input> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item class=\"inoItem headerNameCss\" lines=\"none\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label>\n              Email2:\n            </ion-label>\n            <ion-label name=\"email2\">{{email2}}</ion-label>\n            <!-- <ion-input class=\"headerNameCss\" type=\"email\" name=\"email1\" [(ngModel)]=\"email1\"\n  (ionChange)=\"emailValidator()\" required pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$\">\n  </ion-input> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-checkbox [(ngModel)]=\"emailIdDisplay\" clalabelss=\"checkBoxBorder\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"11\">\n        <ion-label class=\"headerNameCss\">Do not display this email Id to applicants </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"inputDiv\" *ngIf=\"showWalkinSection\">\n\n\n    <ion-item class=\"inoItem headerNameCss\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showFromDateErrorMsg == true, 'blacklabel' : showFromDateErrorMsg == false}\">\n              From Date\n            </ion-label>\n            <ion-datetime #myPicker style=\"height: 30px\" align=\"start\" (ionChange)=\"fromDateValidator($event)\"\n              displayFormat=\"DD-MM-YYYY\" name=\"fromDate\" [(ngModel)]=\"fromDate\" min=\"{{startFromDate}}\"\n              max=\"2050-12-30\">\n            </ion-datetime>\n            <!-- <ion-input class=\"headerNameCss\" type=\"email\" name=\"email1\" [(ngModel)]=\"email1\" (ionChange)=\"fromDateValidator()\" required pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$\">\n  </ion-input> -->\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showFromDateErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <p class=\"errorMsg\" *ngIf=\"showFromDateErrorMsg\">{{fromDateErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-item class=\"inoItem headerNameCss\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showToDateErrorMsg == true, 'blacklabel' : showToDateErrorMsg == false}\">\n              To Date\n            </ion-label>\n\n            <ion-datetime #myPicker style=\"height: 30px\" align=\"start\" min=\"{{startToDate}}\" max=\"2050-12-30\"\n              displayFormat=\"DD-MM-YYYY\" name=\"toDate\" (ionChange)=\"toDateValidator()\" [(ngModel)]=\"toDate\">\n            </ion-datetime>\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showToDateErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <p class=\"errorMsg\" *ngIf=\"showToDateErrorMsg\">{{toDateErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-item class=\"inoItem headerNameCss\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showStartTimeErrorMsg == true, 'blacklabel' : showStartTimeErrorMsg == false}\">\n              Starting Time\n            </ion-label>\n            <ion-datetime [(ngModel)]=\"StartTime\" displayFormat=\"HH:mm\" (ionChange)=\"startTimeValidator($event)\">\n            </ion-datetime>\n\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showStartTimeErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <p class=\"errorMsg\" *ngIf=\"showStartTimeErrorMsg\">{{startTimeErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-item class=\"inoItem headerNameCss\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\"\n              [ngClass]=\"{'redlabel' : showEndTimeErrorMsg == true, 'blacklabel' : showEndTimeErrorMsg == false}\">\n              End Time\n            </ion-label>\n            <ion-datetime [(ngModel)]=\"EndTime\" displayFormat=\"HH:mm\" min=\"{{StartTime}}\"\n              (ionChange)=\"endTimeValidator()\"></ion-datetime>\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showEndTimeErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <p class=\"errorMsg\" *ngIf=\"showEndTimeErrorMsg\">{{endTimeErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"inputDiv\">\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-checkbox [(ngModel)]=\"show_contact\" clalabelss=\"checkBoxBorder\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"11\">\n        <ion-label class=\"headerNameCss\"> Do not display this contact details to applicants </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"saveButtonPadding\">\n    <button class=\"buttonfont\" (click)=\"nextPage()\">POST JOB</button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".postjobbuttonfont {\n  border: 0.5px solid black;\n  border-radius: 4px;\n  padding: 5px !important;\n  background: #2b0c43;\n  color: white;\n  height: 32px;\n  width: 100%;\n  font-size: 15px; }\n\n.postjobbuttonafterclick {\n  border: 0.5px solid black;\n  border-radius: 4px;\n  padding: 5px !important;\n  background: #614278;\n  color: white;\n  height: 32px;\n  width: 100%;\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBsb3llcnBvc3Rqb2JtYW5hZ2VycmVzcG9uc2VzL2VtcGxveWVycG9zdGpvYm1hbmFnZXJyZXNwb25zZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFXO0VBQ1gsV0FBVTtFQUNWLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVc7RUFDWCxXQUFVO0VBQ1YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZXJwb3N0am9ibWFuYWdlcnJlc3BvbnNlcy9lbXBsb3llcnBvc3Rqb2JtYW5hZ2VycmVzcG9uc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0am9iYnV0dG9uZm9udHtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiMyYjBjNDM7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDozMnB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIFxuICAucG9zdGpvYmJ1dHRvbmFmdGVyY2xpY2t7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDojNjE0Mjc4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6MzJweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: EmployerpostjobmanagerresponsesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerpostjobmanagerresponsesPage", function() { return EmployerpostjobmanagerresponsesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");





var EmployerpostjobmanagerresponsesPage = /** @class */ (function () {
    // applicantId: boolean
    function EmployerpostjobmanagerresponsesPage(router, activatedRoute, loadingController, dataServices, alertCtrl, navController) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.toDate = "";
        this.tab_show = "1";
        this.StartTime = "";
        this.EndTime = "";
        this.fromDate = "";
        this.showEmailSection = true;
        this.showWalkinSection = false;
        this.postJobManageResponsesArray = [];
        this.showFromDateErrorMsg = false;
        this.showToDateErrorMsg = false;
        this.showStartTimeErrorMsg = false;
        this.showEndTimeErrorMsg = false;
        this.emailNonSelected = false;
        this.emailSelected = true;
        this.walkinNonSelected = true;
        this.walkinSelected = false;
        this.FROMDATE = "";
        this.TODATE = "";
        this.LASTDATE = "";
        this.postJobRequirementArray = [];
        this.postJobDetail = [];
        this.backPostJobLocation = [];
        this.backPostJobRequirement = [];
        this.checklastdate = '';
        this.ALLPOSTDATA = {
            job_name: "", job_description: "", disability_id: [], min_experience: "", max_experience: "", ctc_currency: "", annual_ctc_from: "", annual_ctc_to: "", hide_salary: "", number_of_vacancies: "",
            last_date_apply: "", country_id: "", state_city_id: [], industry_id: "", functional_area_id: "", job_role: "", qualification_id: [],
            key_skills: "", applicants_display: "", tab_show: "", from_date: "", to_date: "", start_time: "", end_time: "",
            show_contact: "", reference_code: "", candidate_profile: "", uacc_id: ""
        };
        // this.fromDate = new Date();
        // this.toDate = new Date();
        // this.StartTime = new Date();
        // this.EndTime = new Date();
    }
    EmployerpostjobmanagerresponsesPage.prototype.ngOnInit = function () {
    };
    EmployerpostjobmanagerresponsesPage.prototype.ionViewWillEnter = function () {
        this.startFromDate = new Date().toISOString().slice(0, 10);
        this.uacc_id = localStorage.getItem('users_id');
        this.email1 = localStorage.getItem('email');
        this.email2 = localStorage.getItem('business_email');
        this.postJobDetail = JSON.parse(localStorage.getItem('postJobDetail'));
        this.backPostJobLocation = JSON.parse(localStorage.getItem('backPostJobLocation'));
        this.backPostJobRequirement = JSON.parse(localStorage.getItem('backPostJobRequirement'));
        this.checklastdate = this.postJobDetail[0].lastdate;
        // this.getAllPostJobData();
        var contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
        this.postJobManageResponsesArray = JSON.parse(contactInfo);
        console.log("postJobManageResponsesArray :: " + JSON.stringify(this.postJobManageResponsesArray));
    };
    EmployerpostjobmanagerresponsesPage.prototype.closePage = function () {
        this.router.navigate(['/dashboardemployer']);
    };
    EmployerpostjobmanagerresponsesPage.prototype.fromDateValidator = function (event) {
        console.log('event date:', event.detail.value);
        this.startToDate = event.detail.value;
        this.toDate = "";
        this.fromDateValidate();
    };
    EmployerpostjobmanagerresponsesPage.prototype.fromDateValidate = function () {
        if (this.fromDate == "" || this.fromDate == null || this.fromDate == undefined) {
            this.showFromDateErrorMsg = true;
            this.fromDateErrorMsg = "Please enter from date";
        }
        else {
            this.showFromDateErrorMsg = false;
        }
    };
    EmployerpostjobmanagerresponsesPage.prototype.toDateValidator = function () {
        if (this.toDate == "" || this.toDate == null || this.toDate == undefined) {
            this.showToDateErrorMsg = true;
            this.toDateErrorMsg = "Please enter to date";
        }
        else {
            this.showToDateErrorMsg = false;
        }
    };
    EmployerpostjobmanagerresponsesPage.prototype.startTimeValidator = function (event) {
        console.log('event date:', event.detail.value);
        this.StartTime = event.detail.value;
        this.EndTime = "";
        this.startTimeValidate();
    };
    EmployerpostjobmanagerresponsesPage.prototype.startTimeValidate = function () {
        if (this.StartTime == "" || this.StartTime == null || this.StartTime == undefined) {
            this.showStartTimeErrorMsg = true;
            this.startTimeErrorMsg = "Please enter start time";
        }
        else {
            this.showStartTimeErrorMsg = false;
        }
    };
    EmployerpostjobmanagerresponsesPage.prototype.endTimeValidator = function () {
        if (this.EndTime == "" || this.EndTime == null || this.EndTime == undefined) {
            this.showEndTimeErrorMsg = true;
            this.endTimeErrorMsg = "Please enter end time";
        }
        else {
            this.showEndTimeErrorMsg = false;
        }
    };
    EmployerpostjobmanagerresponsesPage.prototype.getAllPostJobData = function () {
        this.ALLPOSTDATA.job_name = this.postJobDetail[0].jobtitle;
        this.ALLPOSTDATA.job_description = this.postJobDetail[0].jobdescription;
        this.ALLPOSTDATA.disability_id = this.postJobDetail[0].disabilityType;
        this.ALLPOSTDATA.min_experience = this.postJobDetail[0].selectedMinExperienceValue;
        this.ALLPOSTDATA.max_experience = this.postJobDetail[0].selectedMaxExperienceValue;
        this.ALLPOSTDATA.ctc_currency = this.postJobDetail[0].Currency_id;
        this.ALLPOSTDATA.annual_ctc_from = this.postJobDetail[0].ctcFrom;
        this.ALLPOSTDATA.annual_ctc_to = this.postJobDetail[0].ctcTo;
        this.ALLPOSTDATA.hide_salary = this.postJobDetail[0].salaryHideShow;
        this.ALLPOSTDATA.number_of_vacancies = this.postJobDetail[0].vacancies;
        this.ALLPOSTDATA.last_date_apply = this.postJobDetail[0].lastdate;
        this.ALLPOSTDATA.country_id = this.backPostJobLocation[0].countryId;
        this.ALLPOSTDATA.state_city_id = this.backPostJobLocation[0].stateCityId;
        this.ALLPOSTDATA.industry_id = this.backPostJobRequirement[0].industryType;
        this.ALLPOSTDATA.functional_area_id = this.backPostJobRequirement[0].functionalArea;
        this.ALLPOSTDATA.job_role = this.backPostJobRequirement[0].jobRole;
        this.ALLPOSTDATA.qualification_id = this.backPostJobRequirement[0].qualification;
        this.ALLPOSTDATA.key_skills = this.backPostJobRequirement[0].skills;
        this.ALLPOSTDATA.applicants_display = this.applicants_display;
        this.ALLPOSTDATA.tab_show = this.tab_show;
        this.ALLPOSTDATA.from_date = this.postJobManageResponsesArray[0].finalFromDate;
        this.ALLPOSTDATA.to_date = this.postJobManageResponsesArray[0].finalToDate;
        this.ALLPOSTDATA.start_time = this.postJobManageResponsesArray[0].finalStartTime;
        this.ALLPOSTDATA.end_time = this.postJobManageResponsesArray[0].finalEndTime;
        this.ALLPOSTDATA.show_contact = this.showcontact;
        this.ALLPOSTDATA.candidate_profile = this.backPostJobRequirement[0].reference_code;
        this.ALLPOSTDATA.reference_code = this.backPostJobRequirement[0].candidate_profile;
        this.ALLPOSTDATA.uacc_id = this.uacc_id;
        // }
        // console.log("JobPostLocalStorageData length::", this.postJobFormAllData.length)
    };
    EmployerpostjobmanagerresponsesPage.prototype.postJobAPI = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.postJobDataAPI(this.ALLPOSTDATA.job_name, this.ALLPOSTDATA.job_description, this.ALLPOSTDATA.disability_id, this.ALLPOSTDATA.min_experience, this.ALLPOSTDATA.max_experience, this.ALLPOSTDATA.ctc_currency, this.ALLPOSTDATA.annual_ctc_from, this.ALLPOSTDATA.annual_ctc_to, this.ALLPOSTDATA.hide_salary, this.ALLPOSTDATA.number_of_vacancies, this.ALLPOSTDATA.last_date_apply, this.ALLPOSTDATA.country_id, this.ALLPOSTDATA.state_city_id, this.ALLPOSTDATA.industry_id, this.ALLPOSTDATA.functional_area_id, this.ALLPOSTDATA.job_role, this.ALLPOSTDATA.qualification_id, this.ALLPOSTDATA.key_skills, this.ALLPOSTDATA.applicants_display, this.ALLPOSTDATA.tab_show, this.ALLPOSTDATA.from_date, this.ALLPOSTDATA.to_date, this.ALLPOSTDATA.start_time, this.ALLPOSTDATA.end_time, this.ALLPOSTDATA.show_contact, this.ALLPOSTDATA.reference_code, this.ALLPOSTDATA.candidate_profile, this.ALLPOSTDATA.uacc_id).then(function (res) {
            _this.existingDataResponse = res;
            console.log('response::: ' + _this.existingDataResponse);
            if (_this.existingDataResponse.status == 1) {
                console.log('post job response :: ' + _this.existingDataResponse);
                _this.presentAlert(_this.existingDataResponse.message, '');
                localStorage.removeItem('postJobDetail');
                localStorage.removeItem('backPostJobLocation');
                localStorage.removeItem('backPostJobRequirement');
                localStorage.removeItem('JobPostLocalStorageData');
                localStorage.removeItem('backwardJobDetailFlag');
                localStorage.removeItem('backwardJobLocationFlag');
                localStorage.removeItem('backwardJobRequirementFlag');
                // this.closePage()
            }
            else {
                _this.presentAlert(_this.existingDataResponse.message, '');
            }
        }, function (error) {
            // alert(error);
            console.log('Error: ' + error);
            // });
        });
    };
    EmployerpostjobmanagerresponsesPage.prototype.nextPage = function () {
        var date = new Date(this.fromDate);
        var month = String(date.getMonth() + 1);
        var day = String(date.getDate());
        var year = String(date.getFullYear());
        if (day.length < 2) {
            day = '0' + day;
        }
        if (month.length < 2) {
            month = '0' + month;
        }
        this.FROMDATE = day + '-' + month + '-' + year;
        var date = new Date(this.toDate);
        var toMonth = String(date.getMonth() + 1);
        var toDay = String(date.getDate());
        var toYear = String(date.getFullYear());
        if (toDay.length < 2) {
            toDay = '0' + toDay;
        }
        if (toMonth.length < 2) {
            toMonth = '0' + toMonth;
        }
        this.TODATE = toDay + '-' + toMonth + '-' + toYear;
        var splitToDate = this.TODATE.split("-");
        if (this.checklastdate != "") {
            var splitLastDate = this.checklastdate.split("-");
            var checkDateStatus = new Date(parseInt(splitToDate[2]), parseInt(splitToDate[1]), parseInt(splitToDate[0])) > new Date(parseInt(splitLastDate[2]), parseInt(splitLastDate[1]), parseInt(splitLastDate[0]));
            if (checkDateStatus == true) {
                alert('To date should not be greater than last date.');
                return;
            }
        }
        if (this.show_contact == true) {
            this.showcontact = 1;
        }
        else {
            this.showcontact = 0;
        }
        this.postJobManageResponsesArray = [];
        if (this.tab_show == "1") {
            if (this.emailIdDisplay == true) {
                this.applicants_display = 1;
            }
            else {
                this.applicants_display = 0;
            }
            this.postJobManageResponsesArray.push({
                email1: this.email1,
                email2: this.email2,
                tab_show: this.tab_show,
                emailIdDisplay: this.applicants_display,
                finalFromDate: "",
                finalToDate: "",
                finalStartTime: "",
                finalEndTime: ""
            });
            // if (this.showEmailErrorMsg == false) {
            if (this.postJobManageResponsesArray.length != 0 || this.postJobManageResponsesArray.length != null) {
                this.getAllPostJobData();
                this.postJobAPI();
            }
            // }
        }
        else {
            this.postJobManageResponsesArray = [];
            var startHours = '';
            if (String(new Date(this.StartTime).getHours()).length == 1) {
                startHours = '0' + String(new Date(this.StartTime).getHours());
            }
            else {
                startHours = String(new Date(this.StartTime).getHours());
            }
            var startMinutes = '';
            if (String(new Date(this.StartTime).getMinutes()).length == 1) {
                startMinutes = '0' + String(new Date(this.StartTime).getMinutes());
            }
            else {
                startMinutes = String(new Date(this.StartTime).getMinutes());
            }
            var endtHours = '';
            if (String(new Date(this.EndTime).getHours()).length == 1) {
                endtHours = '0' + String(new Date(this.EndTime).getHours());
            }
            else {
                endtHours = String(new Date(this.EndTime).getHours());
            }
            var endMinutes = '';
            if (String(new Date(this.EndTime).getMinutes()).length == 1) {
                endMinutes = '0' + String(new Date(this.EndTime).getMinutes());
            }
            else {
                endMinutes = String(new Date(this.EndTime).getMinutes());
            }
            var checkStatusOfTime = (startHours + ":" + startMinutes) <= (endtHours + ":" + endMinutes);
            if (checkStatusOfTime == false) {
                this.presentAlertForCheckDate('', 'start time should be smaller than end time!');
                return;
            }
            if ((this.fromDate == "" || this.fromDate == null || this.fromDate == undefined) &&
                (this.toDate == "" || this.toDate == null || this.toDate == undefined) &&
                (this.StartTime == undefined || this.StartTime == null || this.StartTime == undefined) &&
                (this.EndTime == "" || this.EndTime == null || this.EndTime == undefined)) {
                this.showFromDateErrorMsg = true;
                this.fromDateErrorMsg = "Please enter from date";
                this.showToDateErrorMsg = true;
                this.toDateErrorMsg = "Please enter to date";
                this.showStartTimeErrorMsg = true;
                this.startTimeErrorMsg = "Please enter start time";
                this.showEndTimeErrorMsg = true;
                this.endTimeErrorMsg = "Please enter end time";
            }
            else {
                this.showFromDateErrorMsg = false;
                this.showToDateErrorMsg = false;
                this.showStartTimeErrorMsg = false;
                this.showEndTimeErrorMsg = false;
            }
            this.fromDateValidate();
            this.toDateValidator();
            this.startTimeValidate();
            this.endTimeValidator();
            this.postJobManageResponsesArray.push({
                finalFromDate: this.FROMDATE,
                finalToDate: this.TODATE,
                finalStartTime: startHours + ":" + startMinutes,
                finalEndTime: endtHours + ":" + endMinutes,
                tab_show: this.tab_show,
            });
            this.getAllPostJobData();
            if (this.showFromDateErrorMsg == false &&
                this.showToDateErrorMsg == false &&
                this.showStartTimeErrorMsg == false &&
                this.showEndTimeErrorMsg == false) {
                this.postJobAPI();
            }
        }
        // this.router.navigate(['/employerpostjoblocation'])
    };
    EmployerpostjobmanagerresponsesPage.prototype.jobPostResponsesWithWalkin = function () {
        this.tab_show = "2";
        this.showEmailSection = false;
        this.showWalkinSection = true;
        this.emailNonSelected = true;
        this.emailSelected = false;
        this.walkinNonSelected = false;
        this.walkinSelected = true;
        this.showFromDateErrorMsg = false;
        this.showToDateErrorMsg = false;
        this.showStartTimeErrorMsg = false;
        this.showEndTimeErrorMsg = false;
    };
    EmployerpostjobmanagerresponsesPage.prototype.jobPostResponsesWithEmail = function () {
        this.showEmailSection = true;
        this.tab_show = "1";
        this.showWalkinSection = false;
        // this.showEmailErrorMsg = false
        this.emailNonSelected = false;
        this.emailSelected = true;
        this.walkinNonSelected = true;
        this.walkinSelected = false;
    };
    EmployerpostjobmanagerresponsesPage.prototype.goBack = function () {
        localStorage.setItem('backwardJobRequirementFlag', '1');
        // this.location.back();
        this.router.navigate(['/employerpostjobrequirement']);
    };
    //Display loader 
    EmployerpostjobmanagerresponsesPage.prototype.presentLoading = function () {
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
                        setTimeout(function () {
                            loading.dismiss();
                        }, 5000);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    EmployerpostjobmanagerresponsesPage.prototype.presentAlertForCheckDate = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: ['OK']
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
    EmployerpostjobmanagerresponsesPage.prototype.presentAlert = function (title, message) {
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
                                        _this.navController.navigateRoot(['/dashboardemployer']).then(function () {
                                        });
                                        // this.router.navigate(['/dashboardemployer'])
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
    EmployerpostjobmanagerresponsesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employerpostjobmanagerresponses',
            template: __webpack_require__(/*! ./employerpostjobmanagerresponses.page.html */ "./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.page.html"),
            styles: [__webpack_require__(/*! ./employerpostjobmanagerresponses.page.scss */ "./src/app/employerpostjobmanagerresponses/employerpostjobmanagerresponses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], EmployerpostjobmanagerresponsesPage);
    return EmployerpostjobmanagerresponsesPage;
}());



/***/ })

}]);
//# sourceMappingURL=employerpostjobmanagerresponses-employerpostjobmanagerresponses-module.js.map