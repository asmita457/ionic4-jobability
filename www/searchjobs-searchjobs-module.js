(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchjobs-searchjobs-module"],{

/***/ "./src/app/searchjobs/searchjobs.module.ts":
/*!*************************************************!*\
  !*** ./src/app/searchjobs/searchjobs.module.ts ***!
  \*************************************************/
/*! exports provided: SearchjobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchjobsPageModule", function() { return SearchjobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchjobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchjobs.page */ "./src/app/searchjobs/searchjobs.page.ts");







var routes = [
    {
        path: '',
        component: _searchjobs_page__WEBPACK_IMPORTED_MODULE_6__["SearchjobsPage"]
    }
];
var SearchjobsPageModule = /** @class */ (function () {
    function SearchjobsPageModule() {
    }
    SearchjobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchjobs_page__WEBPACK_IMPORTED_MODULE_6__["SearchjobsPage"]]
        })
    ], SearchjobsPageModule);
    return SearchjobsPageModule;
}());



/***/ }),

/***/ "./src/app/searchjobs/searchjobs.page.html":
/*!*************************************************!*\
  !*** ./src/app/searchjobs/searchjobs.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\" (click)=\"goBack()\">\n        <!-- <ion-img src=\"../../assets/img/backnavigation.png\" style=\"padding: 25% 25% 25% 25%;\">\n        </ion-img> -->\n\n        <img aria-label=\"Back navigation button\" alt=\"Back navigation button\" src=\"../../assets/img/backnavigation.png\"\n          style=\"padding: 25% 25% 25% 25%;\">\n      </ion-col>\n      <ion-col size=\"9.5\">\n        <ion-searchbar #q [(ngModel)]=\"searchTitle\" (keyup.enter)=\"search(q.value)\"\n          placeholder=\"Jobtitle, Skill or Company\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n\n  <div class=\"divPadding\">\n    <ion-row>\n      <ion-col size=\"9\">\n        <ion-label style=\"color:#2b0c43\">{{searchResultLength}} Jobs</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" (click)=\"filterSearchResult()\">\n        <ion-icon name=\"funnel\" style=\"margin-top:-3px\" class=\"icon\" aria-label=\"filter\"></ion-icon>\n        <ion-label style=\"color:#2b0c43; padding-left:10% !important;position: absolute;\">Filter</ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"showSearchData\">\n    <ion-card *ngFor=\"let item of filterSearchArray; let j = index\" class=\"cardMargins\">\n      <ion-card-content>\n        <ion-list>\n          <ion-row>\n            <ion-col size=\"10\" (click)=\"jobDescription(item)\">\n              <ion-row>\n                <!-- <ion-col size=\"11\"> -->\n                <ion-label style=\"font-size: 18px;color:#2b0c43;\">{{item.name}}</ion-label>\n                <!-- </ion-col> -->\n\n              </ion-row>\n              <ion-row>\n                <ion-label class=\"companyCss\">{{item.company_name}}</ion-label>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-img src=\"../../assets/img/experience.png\" class=\"experienceAndLocationPng\">\n                  </ion-img>\n                </ion-col>\n                <ion-col size=\"11\">\n                  <ion-label class=\"ionimgcss\">{{item.min_experience}} - {{item.max_experience}} years</ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-img src=\"../../assets/img/location.png\" class=\"experienceAndLocationPng\">\n                  </ion-img>\n                </ion-col>\n                <ion-col size=\"11\">\n                  <ion-label class=\"ionimgcss\">{{item.location_name}}</ion-label>\n                  <br>\n                </ion-col>\n              </ion-row>\n              <!-- <ion-row>\n                    <ion-col size=\"4\">\n                      <ion-row>\n                        <ion-img src=\"../../assets/img/experience.png\" class=\"locationCss\" style=\"margin-right:5px\"></ion-img>\n                        <ion-label class=\"experienceCss\">{{item.min_experience}} - </ion-label>\n                        <ion-label class=\"experienceCss\">{{item.max_experience}} years</ion-label>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col size=\"8\">\n                      <ion-row>\n                        <ion-img src=\"../../assets/img/location.png\" class=\"locationCss\"></ion-img>&nbsp;&nbsp;\n                        <ion-label class=\"locationNameCss\" style=\"margin-top:1px\">{{item.location_name}}</ion-label><br>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row> -->\n              <ion-row>\n                <ion-label class=\"postedDaysCss\"><i>Posted: {{item.posted_age}}</i></ion-label>\n              </ion-row>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-icon *ngIf=\"item.job_saved_flag != 1\" (click)=\"saveJob(item.id)\" aria-label=\"save job\"\n                name=\"heart-empty\" class=\"iconcss emptyHeart\"></ion-icon>\n              <ion-icon *ngIf=\"item.job_saved_flag == 1\" (click)=\"saveJob(item.id)\" aria-label=\"job saved\"\n                ios=\"ios-heart\" md=\"md-heart\" class=\"iconcss fillHeart\"></ion-icon>\n            </ion-col>\n\n\n            <!-- <ion-col size=\"2\">\n                <ion-icon *ngIf=\"item.job_saved_flag != 1 || (saveFlag == false && item.id == flagId)\" (click)=\"saveJob(item.id)\" name=\"heart-empty\"\n                  style=\"float:right;padding: 10%;\" class=\"iconcss\"></ion-icon>\n                <ion-icon *ngIf=\"item.job_saved_flag == 1 || (saveFlag == true && item.id == flagId)\" (click)=\"saveJob(item.id)\" ios=\"ios-heart\"\n                  md=\"md-heart\" style=\"float:right;color:#2b0c43;padding: 10%;\" class=\"iconcss\"></ion-icon>\n              </ion-col> -->\n          </ion-row>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- <ion-label style=\"font-size: 15px;color:black ; margin-top:-3px\">{{item.location_name}}</ion-label> -->\n  <div *ngIf=\"!showSearchData\" class=\"noSearchResult\">\n    <!-- <h5 align=\"center\">No search results</h5> -->\n    No search results\n  </div>\n\n  <br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/searchjobs/searchjobs.page.scss":
/*!*************************************************!*\
  !*** ./src/app/searchjobs/searchjobs.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionimgcss {\n  color: #2b0c43;\n  font-size: 15px; }\n\n.locationNameCss {\n  font-size: 15px;\n  color: #2b0c43;\n  margin-top: -5px; }\n\n.locationCss {\n  color: #2b0c43;\n  padding-right: 2px;\n  width: 20px;\n  height: 20px; }\n\n.experienceCss {\n  font-size: 15px;\n  color: #2b0c43;\n  margin-top: 1px; }\n\n.postedDaysCss {\n  font-size: 15px;\n  color: #2b0c43;\n  padding: 5px; }\n\n.divPadding {\n  padding: 3% 5% 0% 5%;\n  border-bottom: 1px solid #807b7b5e; }\n\n.icon {\n  font-size: larger; }\n\n.noSearchResult {\n  text-align: center;\n  padding: 10%;\n  font-size: larger; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9zZWFyY2hqb2JzL3NlYXJjaGpvYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVFO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFLakI7RUFDRSxlQUFlO0VBQ2YsY0FBYTtFQUNiLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYztFQUNkLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFBVyxFQUFBOztBQUliO0VBQ0UsZUFBZTtFQUNmLGNBQWE7RUFDYixlQUFjLEVBQUE7O0FBS2hCO0VBQ0UsZUFBZTtFQUNmLGNBQWE7RUFDWixZQUFZLEVBQUE7O0FBR2Y7RUFDRSxvQkFBb0I7RUFDcEIsa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGpvYnMvc2VhcmNoam9icy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYmFja25hdmlnYXRpb257XG4vLyAgICAgd2lkdGg6MjVweDsgXG4vLyAgICAgaGVpZ2h0OjE1cHg7IFxuLy8gICAgIG1hcmdpbi10b3A6IDEyLjVweDtcbi8vICAgfVxuICAvLyAuc2VhcmNoY2FyZHtcbiAgLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLy8gfVxuXG4gIC8vIC5jb250ZW50Y3Nze1xuICAvLyAgIGZvbnQtc2l6ZTogMTVweDtcbiAgLy8gICBjb2xvcjojMmIwYzQzO1xuICAvLyAgICBwYWRkaW5nIDo1cHg7XG4gIC8vIH1cblxuICAuaW9uaW1nY3Nze1xuICAgIGNvbG9yOiAjMmIwYzQzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAvLyB3aWR0aDoxNXB4OyBcbiAgICAvLyBoZWlnaHQ6MTVweDtcbiAgfVxuXG4gIC5sb2NhdGlvbk5hbWVDc3N7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgbWFyZ2luLXRvcDotNXB4O1xuICB9XG5cbiAgLmxvY2F0aW9uQ3Nze1xuICAgIGNvbG9yOiAjMmIwYzQzO1xuICAgIHBhZGRpbmctcmlnaHQ6MnB4O1xuICAgIHdpZHRoOjIwcHg7IFxuICAgIGhlaWdodDoyMHB4O1xuICAvLyAgZm9udC1zaXplOiAxNXB4XG4gIH1cblxuICAuZXhwZXJpZW5jZUNzc3tcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IzJiMGM0MztcbiAgICBtYXJnaW4tdG9wOjFweDtcbiAgfVxuXG4gIFxuXG4gIC5wb3N0ZWREYXlzQ3Nze1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjojMmIwYzQzO1xuICAgICBwYWRkaW5nIDo1cHg7IFxuICB9XG5cbiAgLmRpdlBhZGRpbmd7XG4gICAgcGFkZGluZzogMyUgNSUgMCUgNSU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDdiN2I1ZTtcbiAgfVxuXG4gIC5pY29ue1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICB9XG5cbiAgLm5vU2VhcmNoUmVzdWx0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMCU7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gIH1cblxuXG5cbiAgXG4gIl19 */"

/***/ }),

/***/ "./src/app/searchjobs/searchjobs.page.ts":
/*!***********************************************!*\
  !*** ./src/app/searchjobs/searchjobs.page.ts ***!
  \***********************************************/
/*! exports provided: SearchjobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchjobsPage", function() { return SearchjobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var SearchjobsPage = /** @class */ (function () {
    function SearchjobsPage(router, Location, dataServices, activatedRoute, loadingController, alertCtrl, platform) {
        this.router = router;
        this.Location = Location;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.offset = 0;
        this.disability_id = [];
        this.functional_area_id = "";
        this.industry_id = "";
        this.currency = "";
        this.annual_ctc_from = "";
        this.annual_ctc_to = "";
        this.min_experience = "";
        this.max_experience = "";
        this.currency_list = [];
        this.disability_list = [];
        this.functional_area_list = [];
        this.industry_list = [];
        this.dropDownList = [];
        this.seekerPresentSkillsetArray = [];
        this.showSearchData = true;
        this.filterSearchArray = [];
    }
    SearchjobsPage.prototype.ngOnInit = function () {
    };
    SearchjobsPage.prototype.ionViewWillEnter = function () {
        this.presentLoading();
        this.filterSearchArray = [];
        var jobFilterSearch = (this.activatedRoute.snapshot.paramMap.get('advancedFilterSearch'));
        this.freeSearch = localStorage.getItem('freeSearch');
        this.uacc_id = localStorage.getItem('users_id');
        this.filterClosed = localStorage.getItem('filterClosed');
        this.getDDLAPI();
        if (this.uacc_id == '' || this.uacc_id == null || this.uacc_id == undefined || this.uacc_id == 0) {
            this.uacc_id = 0;
        }
        if (jobFilterSearch == null || jobFilterSearch == 'undefined') {
            this.searchTitle = localStorage.getItem('jobtitle');
            this.location = localStorage.getItem('location');
            this.offset = 0;
            this.searchJob(this.searchTitle, this.location, this.disability_id, this.functional_area_id, this.industry_id, this.currency, this.annual_ctc_from, this.annual_ctc_to, this.min_experience, this.max_experience, this.offset);
        }
        else if (this.filterClosed == 'true') {
            this.searchJob(this.searchTitle, this.location, this.disability_id, this.functional_area_id, this.industry_id, this.currency, this.annual_ctc_from, this.annual_ctc_to, this.min_experience, this.max_experience, this.offset);
        }
        else {
            this.jobFilterSearch = JSON.parse(jobFilterSearch);
            this.searchTitle = this.jobFilterSearch.jobTitle;
            this.location = this.jobFilterSearch.location;
            this.disability_id = this.jobFilterSearch.disability_id;
            this.functional_area_id = this.jobFilterSearch.functional_area_id;
            this.industry_id = this.jobFilterSearch.industryId;
            this.currency = this.jobFilterSearch.Currency;
            this.annual_ctc_from = this.jobFilterSearch.CtcFrom;
            this.annual_ctc_to = this.jobFilterSearch.CtcTo;
            this.min_experience = this.jobFilterSearch.minExperience;
            this.max_experience = this.jobFilterSearch.maxExperience;
            this.offset = 0;
            this.searchJob(this.searchTitle, this.location, this.disability_id, this.functional_area_id, this.industry_id, this.currency, this.annual_ctc_from, this.annual_ctc_to, this.min_experience, this.max_experience, this.offset);
        }
    };
    // Function For Load Data While Scrolling
    SearchjobsPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.searchResultLength) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.searchJob(_this.searchTitle, _this.location, _this.disability_id, _this.functional_area_id, _this.industry_id, _this.currency, _this.annual_ctc_from, _this.annual_ctc_to, _this.min_experience, _this.max_experience, _this.offset);
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    // Function For Job Search
    SearchjobsPage.prototype.search = function (searchTitle) {
        this.location = "";
        this.disability_id = [];
        this.functional_area_id = "";
        this.industry_id = "";
        this.currency = "";
        this.annual_ctc_from = "";
        this.annual_ctc_to = "";
        this.min_experience = "";
        this.max_experience = "";
        this.filterSearchArray = [];
        this.offset = 0;
        localStorage.setItem('jobtitle', searchTitle);
        this.searchJob(searchTitle, this.location, this.disability_id, this.functional_area_id, this.industry_id, this.currency, this.annual_ctc_from, this.annual_ctc_to, this.min_experience, this.max_experience, this.offset);
        // this.searchJob(item, searchBarLocation);
    }; //search Function Ends Here.
    // Function For Navigation
    SearchjobsPage.prototype.goBack = function () {
        if (this.freeSearch == null || this.freeSearch == undefined || this.freeSearch == "") {
            this.router.navigate(['/dashboardjobseeker']);
            localStorage.removeItem("advanceFilter");
        }
        else {
            this.router.navigate(['/welcomescreen']);
            localStorage.setItem('freeSearch', "");
            localStorage.removeItem("advanceFilter");
        }
    }; //goBack Function Ends Here.
    // This Function Navigate User to job deials page
    SearchjobsPage.prototype.jobDescription = function (item) {
        this.router.navigate(['/searchjobdetail', { jobId: item.id }]);
    }; //jobDescription Ends Here.
    // Function For Get Dll 
    SearchjobsPage.prototype.getDDLAPI = function () {
        var _this = this;
        this.dataServices.getSearchFilterDDLAPI().then(function (result) {
            _this.getDLLAPIData = result;
            localStorage.setItem('dllLIsts', JSON.stringify(_this.getDLLAPIData));
            _this.currency_list = _this.getDLLAPIData.currency_list;
            _this.disability_list = _this.getDLLAPIData.disability_list;
            _this.functional_area_list = _this.getDLLAPIData.functional_area_list;
            _this.industry_list = _this.getDLLAPIData.industry_list;
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // getDDLAPI function Ends Here.
    SearchjobsPage.prototype.filterSearchResult = function () {
        this.router.navigate(['/filtersearchresult']);
    };
    SearchjobsPage.prototype.searchJob = function (jobTitle, location, disability_id, functional_area_id, industry_id, currency, annual_ctc_from, annual_ctc_to, min_experience, max_experience, offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getSearchResultData(jobTitle, location, disability_id, functional_area_id, industry_id, currency, annual_ctc_from, annual_ctc_to, min_experience, max_experience, offset, this.uacc_id).then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                _this.filterSearchArray = _this.filterSearchArray.concat(_this.resultData.search_result_data);
                _this.searchResultLength = _this.resultData.search_result_data_total_count;
                if (_this.searchResultLength < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.searchResultLength == 0) {
                    _this.showSearchData = false;
                }
                else {
                    _this.showSearchData = true;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.resultData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Save Job
    SearchjobsPage.prototype.saveJob = function (jobId) {
        if (this.uacc_id == 0) {
            this.confirmAction();
        }
        else {
            this.saveOrRemoveJob(jobId);
        }
    };
    //Save Job and Remove Job
    SearchjobsPage.prototype.saveOrRemoveJob = function (jobId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.saveOrRemoveJob(jobId, this.uacc_id).then(function (res) {
            _this.resultData = res;
            _this.loadingController.dismiss();
            if (_this.resultData.status == 1) {
                if (_this.resultData.check_flag == 1) {
                    for (var i = 0; i < _this.filterSearchArray.length; i++) {
                        if (_this.filterSearchArray[i].id == jobId) {
                            _this.filterSearchArray[i].job_saved_flag = 1;
                        }
                    }
                }
                else {
                    for (var i = 0; i < _this.filterSearchArray.length; i++) {
                        if (_this.filterSearchArray[i].id == jobId) {
                            _this.filterSearchArray[i].job_saved_flag = 0;
                        }
                    }
                }
                _this.presentAlert("", _this.resultData.message);
            }
            else {
                _this.presentAlert("", _this.resultData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log(error);
        });
    }; // Save and Remove Job Functon Ends Here.
    //Display loader 
    SearchjobsPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        setTimeout(function () {
                            loading.dismiss();
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    SearchjobsPage.prototype.presentAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // this.closePage();
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
    SearchjobsPage.prototype.confirmAction = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: '',
                            subHeader: 'If you want to save job you have to "Register" or "Login" first.',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        localStorage.clear();
                                        localStorage.setItem('users_id', '0');
                                        _this.router.navigate(['/welcomescreen']);
                                    }
                                }
                            ]
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
    SearchjobsPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], SearchjobsPage.prototype, "infiniteScroll", void 0);
    SearchjobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchjobs',
            template: __webpack_require__(/*! ./searchjobs.page.html */ "./src/app/searchjobs/searchjobs.page.html"),
            styles: [__webpack_require__(/*! ./searchjobs.page.scss */ "./src/app/searchjobs/searchjobs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], SearchjobsPage);
    return SearchjobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=searchjobs-searchjobs-module.js.map