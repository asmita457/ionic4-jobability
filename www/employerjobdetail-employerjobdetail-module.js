(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employerjobdetail-employerjobdetail-module"],{

/***/ "./src/app/employerjobdetail/employerjobdetail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/employerjobdetail/employerjobdetail.module.ts ***!
  \***************************************************************/
/*! exports provided: EmployerjobdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerjobdetailPageModule", function() { return EmployerjobdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employerjobdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employerjobdetail.page */ "./src/app/employerjobdetail/employerjobdetail.page.ts");







var routes = [
    {
        path: '',
        component: _employerjobdetail_page__WEBPACK_IMPORTED_MODULE_6__["EmployerjobdetailPage"]
    }
];
var EmployerjobdetailPageModule = /** @class */ (function () {
    function EmployerjobdetailPageModule() {
    }
    EmployerjobdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employerjobdetail_page__WEBPACK_IMPORTED_MODULE_6__["EmployerjobdetailPage"]]
        })
    ], EmployerjobdetailPageModule);
    return EmployerjobdetailPageModule;
}());



/***/ }),

/***/ "./src/app/employerjobdetail/employerjobdetail.page.html":
/*!***************************************************************!*\
  !*** ./src/app/employerjobdetail/employerjobdetail.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Job Detail</ion-title>\n    <ion-icon ios=\"ios-trash\" md=\"md-trash\" (click)=\"presentAlertForDelete()\"></ion-icon>\n  </ion-item>\n</ion-toolbar>\n\n\n<ion-content>\n\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"profilePageHeaderStripSection1\">JOB DETAIL</ion-label>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"\">\n            <ion-label class=\"headingLabel\">Job Title:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Job Description:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.job_desciption}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Disability Accepted:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.disability_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Work Experience:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.min_experience}} - {{employerJobDetailArray.max_experience}} years</ion-label>\n            <br>\n            <div *ngIf=\"hideSalary\">\n            <ion-label class=\"headingLabel\">Annual Salary:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.annual_ctc_to}} - {{employerJobDetailArray.annual_ctc_to}}</ion-label>\n            <br></div>\n            <!-- <ion-label class=\"headingLabel\">Hide Salary from Jobseekers:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.hide_salary}}</ion-label>\n            <br> -->\n            <ion-label class=\"headingLabel\">Number of Vacancies:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.number_of_vacancies}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Last date for Applying:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.expiry_date}}</ion-label>\n          </ion-col>\n        \n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"profilePageHeaderStripSection1\">JOB LOCATION</ion-label>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headingLabel\">Job in Country:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.country_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Job District/City:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.location_name}}</ion-label>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"profilePageHeaderStripSection1\">JOB REQUIREMENT</ion-label>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headingLabel\">Industry:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.industry_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Functional Area:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.functional_area}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Job Role:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.job_role}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Qualification:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.qualification_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Skills:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.key_skills}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Reference Code:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.reference_code}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Candidate Profile:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.candidate_profile}}</ion-label>\n            <br>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"profilePageHeaderStripSection1\">RECEIVE RESPONSES ON: EMAIL/WALK-IN</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row>\n\n            <ion-col size=\"12\" *ngIf=\"manageResponsesEmail\">    \n                <ion-label class=\"headingLabel\">Email1:</ion-label>\n                <br>\n                <ion-label class=\"contentInfo\">{{employerJobDetailArray.email}}</ion-label>\n                <br>\n                <ion-label class=\"headingLabel\">Email2:</ion-label>\n                <br>\n                <ion-label class=\"contentInfo\">{{employerJobDetailArray.business_email}}</ion-label>\n                <br>\n                <ion-label class=\"headingLabel\">display this email Id to applicant:</ion-label>\n                <br>\n                <ion-label class=\"contentInfo\">{{applicantDisaply}}</ion-label>\n                <br>\n              </ion-col>\n\n          <ion-col size=\"12\" *ngIf=\"manageResponsesWalkin\">\n\n            <ion-label class=\"headingLabel\">Walk-In</ion-label><br>\n\n            <ion-label class=\"headingLabel\">From Date:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.walkin_from_date}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">To Date:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.walkin_to_date}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Start Time:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.walkin_from_time}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">End Time:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.walkin_to_time}}</ion-label>\n            <br>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"profilePageHeaderStripSection1\">CONTACT DETAIL</ion-label>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" *ngIf=\"contactDetailShow\">\n\n            <ion-label class=\"headingLabel\">Company Name:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.company_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">About Company:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.company_description}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Company Website:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.company_website}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Contact Person:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.person_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Address:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.company_address}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Country:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.country_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">State/Province:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.state_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">District/City:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.city_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">ZIP/PIN Code:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.company_pincode}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Mobile:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.mobile}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Phone:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{employerJobDetailArray.phone}}</ion-label>\n          </ion-col>\n\n          <ion-col size=\"12\" *ngIf=\"contactDetailHide\">\n            <ion-label>The employer has not shared their contact details</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/employerjobdetail/employerjobdetail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/employerjobdetail/employerjobdetail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBsb3llcmpvYmRldGFpbC9lbXBsb3llcmpvYmRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsZUFBYztFQUNkLGlCQUFnQixFQUFBOztBQUdoQjtFQUNBLGVBQWM7RUFDZCxjQUFhO0VBQ2IscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llcmpvYmRldGFpbC9lbXBsb3llcmpvYmRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ0xhYmVse1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRlbnRJbmZve1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/employerjobdetail/employerjobdetail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/employerjobdetail/employerjobdetail.page.ts ***!
  \*************************************************************/
/*! exports provided: EmployerjobdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerjobdetailPage", function() { return EmployerjobdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EmployerjobdetailPage = /** @class */ (function () {
    function EmployerjobdetailPage(location, loadingController, dataServices, alertCtrl, activatedRoute, router) {
        this.location = location;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.employerJobDetailArray = [];
        this.manageResponsesWalkin = false;
        this.manageResponsesEmail = false;
        this.hideSalary = true;
        this.contactDetailShow = true;
        this.contactDetailHide = false;
    }
    EmployerjobdetailPage.prototype.ngOnInit = function () {
        // this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'));
        // console.log('resumeId:', this.jobId)
        // this.getJobDetail();
    };
    EmployerjobdetailPage.prototype.ionViewWillEnter = function () {
        this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'));
        console.log('resumeId:', this.jobId);
        this.getJobDetail();
    };
    EmployerjobdetailPage.prototype.getJobDetail = function () {
        var _this = this;
        this.uacc_id = 0;
        this.presentLoading();
        this.dataServices.getEmployerJobDetailAPI(this.jobId, this.uacc_id).then(function (result) {
            _this.employerJobDetailResponse = result;
            if (_this.employerJobDetailResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.employerJobDetailArray = _this.employerJobDetailResponse.job_details_data[0];
                _this.walkinFromDate = _this.employerJobDetailResponse.job_details_data[0].walkin_from_date;
                _this.walkin_to_date = _this.employerJobDetailResponse.job_details_data[0].walkin_to_date;
                _this.applicants_display = _this.employerJobDetailResponse.job_details_data[0].applicants_display;
                _this.hide_salary = _this.employerJobDetailResponse.job_details_data[0].hide_salary;
                _this.show_contact = _this.employerJobDetailResponse.job_details_data[0].show_contact;
                if ((_this.walkinFromDate == 0 && _this.walkin_to_date == 0) || _this.applicants_display == 1) {
                    _this.manageResponsesEmail = true;
                    _this.manageResponsesWalkin = false;
                }
                else {
                    _this.manageResponsesEmail = false;
                    _this.manageResponsesWalkin = true;
                }
                if (_this.applicants_display == 0) {
                    _this.applicantDisaply = "Show";
                }
                else {
                    _this.applicantDisaply = "Hide";
                }
                if (_this.hide_salary == 1) {
                    _this.hideSalary = false;
                }
                if (_this.show_contact == 1) {
                    _this.contactDetailHide = true;
                    _this.contactDetailShow = false;
                }
                else {
                    _this.contactDetailHide = false;
                    _this.contactDetailShow = true;
                }
                // this.presentAlert('', this.employerJobDetailResponse.message);
            }
            else {
                _this.loadingController.dismiss();
                // this.presentAlert('', this.employerJobDetailResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployerjobdetailPage.prototype.deleteJobDetail = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteEmployerJobDetailAPI(this.jobId).then(function (result) {
            _this.employerJobDeleteAPIResponse = result;
            if (_this.employerJobDeleteAPIResponse.status == 1) {
                _this.loadingController.dismiss();
                // this.employerJobDetailArray = this.employerJobDeleteAPIResponse
                _this.presentAlert('', _this.employerJobDeleteAPIResponse.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.employerJobDeleteAPIResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployerjobdetailPage.prototype.presentAlert = function (title, message) {
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
                                        _this.router.navigate(['/joblistingemployee']);
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
    EmployerjobdetailPage.prototype.presentAlertForDelete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            subHeader: "Are you sure you want to delete?",
                            buttons: [{
                                    text: 'Cancel',
                                    cssClass: 'secondary',
                                    role: 'cancel'
                                },
                                {
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (_) {
                                        //api call
                                        _this.deleteAPICall();
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
    EmployerjobdetailPage.prototype.deleteAPICall = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteEmployerJobDetailAPI(this.jobId).then(function (result) {
            _this.employerJobDeleteAPIResponse = result;
            if (_this.employerJobDeleteAPIResponse.status == 1) {
                _this.loadingController.dismiss();
                // this.employerJobDetailArray = this.employerJobDeleteAPIResponse
                _this.presentAlert('', _this.employerJobDeleteAPIResponse.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.employerJobDeleteAPIResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Display loader 
    EmployerjobdetailPage.prototype.presentLoading = function () {
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
                        }, 6000);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    EmployerjobdetailPage.prototype.closePage = function () {
        this.location.back();
        // this.router.navigate(['/'])
    };
    EmployerjobdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employerjobdetail',
            template: __webpack_require__(/*! ./employerjobdetail.page.html */ "./src/app/employerjobdetail/employerjobdetail.page.html"),
            styles: [__webpack_require__(/*! ./employerjobdetail.page.scss */ "./src/app/employerjobdetail/employerjobdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EmployerjobdetailPage);
    return EmployerjobdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=employerjobdetail-employerjobdetail-module.js.map