import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router, ActivatedRoute } from '@angular/router';
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib_1.__generator(this, function (_b) {
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
    EmployersearchresumesPage = tslib_1.__decorate([
        Component({
            selector: 'app-employersearchresumes',
            templateUrl: './employersearchresumes.page.html',
            styleUrls: ['./employersearchresumes.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController,
            DataservicesService,
            Router,
            ActivatedRoute])
    ], EmployersearchresumesPage);
    return EmployersearchresumesPage;
}());
export { EmployersearchresumesPage };
//# sourceMappingURL=employersearchresumes.page.js.map