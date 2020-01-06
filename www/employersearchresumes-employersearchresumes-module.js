(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employersearchresumes-employersearchresumes-module"],{

/***/ "./src/app/employersearchresumes/employersearchresumes.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/employersearchresumes/employersearchresumes.module.ts ***!
  \***********************************************************************/
/*! exports provided: EmployersearchresumesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployersearchresumesPageModule", function() { return EmployersearchresumesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employersearchresumes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employersearchresumes.page */ "./src/app/employersearchresumes/employersearchresumes.page.ts");







var routes = [
    {
        path: '',
        component: _employersearchresumes_page__WEBPACK_IMPORTED_MODULE_6__["EmployersearchresumesPage"]
    }
];
var EmployersearchresumesPageModule = /** @class */ (function () {
    function EmployersearchresumesPageModule() {
    }
    EmployersearchresumesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employersearchresumes_page__WEBPACK_IMPORTED_MODULE_6__["EmployersearchresumesPage"]]
        })
    ], EmployersearchresumesPageModule);
    return EmployersearchresumesPageModule;
}());



/***/ }),

/***/ "./src/app/employersearchresumes/employersearchresumes.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/employersearchresumes/employersearchresumes.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <!-- <ion-row>\n      <ion-col size=\"2\" (click)=\"goBack()\">\n        <ion-img src=\"../../assets/img/backnavigation.png\" style=\"padding: 30% 25% 25% 25%;\">\n        </ion-img>\n      </ion-col> -->\n    <!-- <ion-col size=\"9.5\"> -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"headerNameCss\"></ion-menu-button>\n    </ion-buttons>\n    <ion-searchbar #q [(ngModel)]=\"searchTitle\" (keyup.enter)=\"search(q.value)\" placeholder=\"Skills\"></ion-searchbar>\n    <!-- </ion-col>\n    </ion-row> -->\n\n  </ion-toolbar>\n\n  <div class=\"divPadding\" style=\"padding:3% 5% 0% 1%\">\n    <ion-row>\n      <ion-col size=\"9\">\n        <ion-label style=\"color:#2b0c43;\">{{searchResumeLength}} Resumes</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"filterSearchResumesResult()\">\n        <ion-icon name=\"funnel\" class=\"icon\"></ion-icon>\n        <ion-label style=\"color:#2b0c43; padding-left:10% !important;position: absolute;\">Filter</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n\n\n<ion-content class=\"viewpost\">\n\n\n  <div *ngIf=\"showJobApplications\" class=\"headerNameCss\">\n    <ion-card class=\"cardMargins\" *ngFor=\"let item of empSearchResumesArray\" (click)=\"candidateProfileDetails(item)\"\n      style=\"margin-top:5px\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-label class=\"headingLabel\">Name:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.first_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Company Name:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.company_name}}</ion-label><br>\n\n            <ion-label class=\"headingLabel\">Designation:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.designation}}</ion-label><br>\n\n\n            <ion-row lines=\"none\" class=\"inoItem itemcss\">\n              <ion-img src=\"../../assets/img/experience.png\"\n                style=\"width:15px; height:15px;margin-right:10px; margin-top:3px\">\n              </ion-img>\n              <ion-label class=\"ionimgcss itemcss\">{{item.years_total_experience}} years</ion-label>\n            </ion-row>\n\n            <ion-row lines=\"none\" class=\"inoItem itemcss\">\n              <ion-img src=\"../../assets/img/location.png\"\n                style=\"width:15px; height:15px;margin-right:10px; margin-top:3px\"></ion-img>\n              <ion-label class=\"itemcss\">{{item.location_name}}</ion-label>\n            </ion-row>\n\n            <ion-label class=\"headingLabel\">Disability Type:</ion-label><br>\n            <ion-label style=\"margin-top:-5px;\" class=\"itemcss\">{{item.disability_name}}</ion-label>\n\n          </ion-col>\n\n\n          <ion-col size=\"3\">\n            <div class=\"profile-picture big-profile-picture\">\n              <img *ngIf=\"item.profile_photo_path!=''\" aria-label=\"profile picture\" src=\"{{item.profile_photo_path}}\">\n              <img *ngIf=\"item.profile_photo_path==''\" aria-label=\"profile picture\" src=\"../../assets/img/profileimage.png\">\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-card class=\"cardMargins\" *ngIf=\"!showJobApplications\">\n    <ion-card-content>\n      <span class=\"ion-text-center\" style=\"color:#2b0c43;\">Oops! No Serach Resumes.</span>\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/employersearchresumes/employersearchresumes.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/employersearchresumes/employersearchresumes.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBsb3llcnNlYXJjaHJlc3VtZXMvZW1wbG95ZXJzZWFyY2hyZXN1bWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNjLGNBQWE7RUFDYixlQUFjO0VBQ2QsaUJBQWdCLEVBQUE7O0FBR2hCO0VBQ0EsZUFBYztFQUNkLGNBQWE7RUFDYixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVyc2VhcmNocmVzdW1lcy9lbXBsb3llcnNlYXJjaHJlc3VtZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdMYWJlbHtcbiAgICAgICAgICAgICAgY29sb3I6IzJiMGM0MztcbiAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5jb250ZW50SW5mb3tcbiAgICAgICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIl19 */"

/***/ }),

/***/ "./src/app/employersearchresumes/employersearchresumes.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/employersearchresumes/employersearchresumes.page.ts ***!
  \*********************************************************************/
/*! exports provided: EmployersearchresumesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployersearchresumesPage", function() { return EmployersearchresumesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EmployersearchresumesPage = /** @class */ (function () {
    function EmployersearchresumesPage(loadingController, dataServices, router, activatedRoute) {
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.empSearchResumesArray = [];
        this.showJobApplications = true;
        this.disability_id = [];
        this.offset = 0;
    }
    EmployersearchresumesPage.prototype.ngOnInit = function () {
    };
    EmployersearchresumesPage.prototype.ionViewWillEnter = function () {
        this.uacc_id = localStorage.getItem('users_id');
        this.checkSearchData();
    };
    EmployersearchresumesPage.prototype.checkSearchData = function () {
        this.searchResumeDataFlag = localStorage.getItem('searchResumeDataFlag');
        this.resumeFilterSearch = JSON.parse(this.activatedRoute.snapshot.paramMap.get('advancedFilterSearch'));
        if (this.resumeFilterSearch != null || this.resumeFilterSearch != undefined || this.searchResumeDataFlag == '2') {
            this.searchTitle = this.resumeFilterSearch.jobTitle;
            this.designation = this.resumeFilterSearch.designation;
            this.minExperience = this.resumeFilterSearch.minExperience;
            this.maxExperience = this.resumeFilterSearch.maxExperience;
            this.currency = this.resumeFilterSearch.Currency;
            this.annual_ctc_from = this.resumeFilterSearch.CtcFrom;
            this.annual_ctc_to = this.resumeFilterSearch.CtcTo;
            this.disability_id = this.resumeFilterSearch.disability_id;
            this.location = this.resumeFilterSearch.location;
            this.offset = 0;
            this.uacc_id = this.resumeFilterSearch.uacc_id;
            this.empSearchResumesArray = [];
            this.getSearchResumesResult(this.searchTitle, this.designation, this.minExperience, this.maxExperience, this.currency, this.annual_ctc_from, this.annual_ctc_to, this.disability_id, this.location, this.offset, this.uacc_id);
        }
        if (this.searchResumeDataFlag == '0') {
            this.searchTitle = "";
            this.designation = "";
            this.minExperience = null;
            this.maxExperience = null;
            this.currency = "";
            this.annual_ctc_from = null;
            this.annual_ctc_to = null;
            this.disability_id = [];
            this.location = "";
            this.offset = 0;
            this.uacc_id = this.uacc_id;
            this.empSearchResumesArray = [];
            if (this.minExperience == null && this.maxExperience == null && this.annual_ctc_from == null && this.annual_ctc_to == null) {
                this.MinExp = "";
                this.MaxExp = "";
                this.MaxSal = "";
                this.MinSal = "";
                this.getSearchResumesResult(this.searchTitle, this.designation, this.MinExp, this.MaxExp, this.currency, this.MinSal, this.MaxSal, this.disability_id, this.location, this.offset, this.uacc_id);
            }
            else {
                this.getSearchResumesResult(this.searchTitle, this.designation, this.minExperience, this.maxExperience, this.currency, this.annual_ctc_from, this.annual_ctc_to, this.disability_id, this.location, this.offset, this.uacc_id);
            }
        }
        if (this.searchResumeDataFlag == '1') {
            this.searchTitle = localStorage.getItem('jobtitle');
            this.empSearchResumesArray = [];
            this.search(this.searchTitle);
        }
    };
    EmployersearchresumesPage.prototype.search = function (searchTitle) {
        this.empSearchResumesArray = [];
        localStorage.setItem('searchResumeDataFlag', '1');
        localStorage.setItem('jobtitle', searchTitle);
        this.searchTitle = searchTitle;
        this.designation = "";
        this.minExperience = null;
        this.maxExperience = null;
        this.currency = "";
        this.annual_ctc_from = null;
        this.annual_ctc_to = null;
        this.disability_id = [];
        this.location = "";
        this.offset = 0;
        this.uacc_id = this.uacc_id;
        if (this.minExperience == null && this.maxExperience == null && this.annual_ctc_from == null && this.annual_ctc_to == null) {
            this.MinExp = "";
            this.MaxExp = "";
            this.MaxSal = "";
            this.MinSal = "";
            this.getSearchResumesResult(this.searchTitle, this.designation, this.MinExp, this.MaxExp, this.currency, this.MinSal, this.MaxSal, this.disability_id, this.location, this.offset, this.uacc_id);
        }
        else {
            this.getSearchResumesResult(this.searchTitle, this.designation, this.minExperience, this.maxExperience, this.currency, this.annual_ctc_from, this.annual_ctc_to, this.disability_id, this.location, this.offset, this.uacc_id);
        }
        localStorage.setItem('jobtitle', searchTitle);
        // this.searchJob(item, searchBarLocation);
    }; //search Function Ends Here.
    EmployersearchresumesPage.prototype.goBack = function () {
        this.router.navigate(['/dashboardemployer']);
    };
    EmployersearchresumesPage.prototype.filterSearchResumesResult = function () {
        this.router.navigate(['/employersearchresumesfilter']);
    };
    EmployersearchresumesPage.prototype.getSearchResumesResult = function (keywords, designation, min_experience, max_experience, currency, annual_ctc_from, annual_ctc_to, disability_id, location, offset, uacc_id) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        // this.empSearchResumesArray = []
        // this.presentLoading();
        this.dataServices.searchResumesResultAPI(keywords, designation, min_experience, max_experience, currency, annual_ctc_from, annual_ctc_to, disability_id, location, offset, uacc_id).then(function (result) {
            _this.searchResumesResponse = result;
            if (_this.searchResumesResponse.status == 1) {
                _this.empSearchResumesArray = _this.empSearchResumesArray.concat(_this.searchResumesResponse.candidate_list);
                _this.searchResumeLength = _this.searchResumesResponse.total_candidate_count;
                console.log('search resume data:', _this.searchResumesResponse);
                if (_this.offset == 0 && _this.searchResumeLength > _this.dataServices.globalOffset()) {
                    _this.loadingController.dismiss();
                    // this.offset = 1
                }
                if (_this.searchResumeLength < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.searchResumeLength != 0) {
                    _this.showJobApplications = true;
                }
                else {
                    _this.showJobApplications = false;
                }
            }
            else {
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                alert(_this.searchResumesResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function For Load Data While Scrolling
    EmployersearchresumesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.searchResumeLength) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                if (_this.minExperience == null && _this.maxExperience == null && _this.annual_ctc_from == null && _this.annual_ctc_to == null) {
                    _this.MinExp = "";
                    _this.MaxExp = "";
                    _this.MaxSal = "";
                    _this.MinSal = "";
                    _this.getSearchResumesResult(_this.searchTitle, _this.designation, _this.MinExp, _this.MaxExp, _this.currency, _this.MinSal, _this.MaxSal, _this.disability_id, _this.location, _this.offset, _this.uacc_id);
                }
                else {
                    _this.getSearchResumesResult(_this.searchTitle, _this.designation, _this.minExperience, _this.maxExperience, _this.currency, _this.annual_ctc_from, _this.annual_ctc_to, _this.disability_id, _this.location, _this.offset, _this.uacc_id);
                }
                event.target.complete();
                // this.checkSearchData();
            }
        }, 100);
    }; //loadData Function Eds Here.
    //Display loader 
    EmployersearchresumesPage.prototype.presentLoading = function () {
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
                        }, 500);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    EmployersearchresumesPage.prototype.candidateProfileDetails = function (item) {
        var resumeId = item.id;
        this.router.navigate(['/empcandidateprofile', { resumeId: resumeId }]);
    };
    EmployersearchresumesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employersearchresumes',
            template: __webpack_require__(/*! ./employersearchresumes.page.html */ "./src/app/employersearchresumes/employersearchresumes.page.html"),
            styles: [__webpack_require__(/*! ./employersearchresumes.page.scss */ "./src/app/employersearchresumes/employersearchresumes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EmployersearchresumesPage);
    return EmployersearchresumesPage;
}());



/***/ })

}]);
//# sourceMappingURL=employersearchresumes-employersearchresumes-module.js.map