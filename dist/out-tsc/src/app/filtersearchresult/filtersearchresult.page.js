import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
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
    FiltersearchresultPage = tslib_1.__decorate([
        Component({
            selector: 'app-filtersearchresult',
            templateUrl: './filtersearchresult.page.html',
            styleUrls: ['./filtersearchresult.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location,
            LoadingController,
            AlertController,
            NavController])
    ], FiltersearchresultPage);
    return FiltersearchresultPage;
}());
export { FiltersearchresultPage };
//# sourceMappingURL=filtersearchresult.page.js.map