import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Location } from '@angular/common';
import { IonInfiniteScroll } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';
var SearchjobsPage = /** @class */ (function () {
    function SearchjobsPage(router, Location, dataServices, activatedRoute, loadingController, alertCtrl, platform) {
        // this.platform.backButton.subscribeWithPriority(0, () => {
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
        //   //this.router.navigate(['/welcomescreen']);
        //   // this does work
        //   if (this.freeSearch == null || this.freeSearch == undefined || this.freeSearch == "") {
        //     this.router.navigate(['/dashboardjobseeker']);
        //     localStorage.removeItem("advanceFilter");
        //   }
        //   else {
        //     this.router.navigate(['/welcomescreen']);
        //     localStorage.setItem('freeSearch', "")
        //     localStorage.removeItem("advanceFilter");
        //   }
        // });
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
    tslib_1.__decorate([
        ViewChild(IonInfiniteScroll),
        tslib_1.__metadata("design:type", IonInfiniteScroll)
    ], SearchjobsPage.prototype, "infiniteScroll", void 0);
    SearchjobsPage = tslib_1.__decorate([
        Component({
            selector: 'app-searchjobs',
            templateUrl: './searchjobs.page.html',
            styleUrls: ['./searchjobs.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location,
            DataservicesService,
            ActivatedRoute,
            LoadingController,
            AlertController,
            Platform])
    ], SearchjobsPage);
    return SearchjobsPage;
}());
export { SearchjobsPage };
//# sourceMappingURL=searchjobs.page.js.map