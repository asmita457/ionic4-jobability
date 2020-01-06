import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
var EmployersearchresumesfilterPage = /** @class */ (function () {
    function EmployersearchresumesfilterPage(router, changeRef) {
        this.router = router;
        this.changeRef = changeRef;
        this.jobtitle = "";
        this.location = "";
        this.designation = '';
        this.minExperience = null;
        this.maxExperience = null;
        this.currency = "";
        this.CtcFrom = null;
        this.CtcTo = null;
        this.Disability = [];
        this.currncy_list = [];
        this.disability_list = [];
        this.min_experience = [];
        this.max_experience = [];
        this.annual_ctc_from = [];
        this.annual_ctc_to = [];
        this.disability_id = [];
        // Currency_id = 
        this.advancedFilterSearch = [];
    }
    EmployersearchresumesfilterPage.prototype.ngOnInit = function () {
    };
    EmployersearchresumesfilterPage.prototype.ionViewWillEnter = function () {
        for (var i = 0; i <= 40; i++) {
            this.min_experience.push(i);
            this.max_experience.push(i);
        }
        for (var i = 10000; i <= 2000000; i = i + 10000) {
            this.annual_ctc_from.push(i);
            this.annual_ctc_to.push(i);
        }
        this.uacc_id = localStorage.getItem('users_id');
        this.ddlListResponse = JSON.parse(localStorage.getItem('employerDDLResponse'));
        console.log('ddl lidt:', this.ddlListResponse);
        this.currncy_list = this.ddlListResponse.currency_list;
        this.disability_list = this.ddlListResponse.disability_list;
        console.log('Disability list:', this.disability_list);
        console.log('Currency list:', this.currncy_list);
    };
    // Funtoion For Clear Fill Fields
    EmployersearchresumesfilterPage.prototype.clearFilterData = function () {
        this.jobtitle = "";
        this.location = "";
        this.minExperience = "";
        this.maxExperience = "";
        this.currency = "";
        this.CtcFrom = "";
        this.CtcTo = "";
        this.disability_id = [];
        this.designation = '';
    }; // clearFilterData Ends Here
    EmployersearchresumesfilterPage.prototype.closePage = function () {
        this.router.navigate(['/employersearchresumes']);
    };
    //On Change Methods
    EmployersearchresumesfilterPage.prototype.onChangeMinExperience = function (item) {
        this.minExperience = item.detail.value;
        this.max_experience = [];
        for (var i = item.detail.value; i <= 40; i++) {
            this.max_experience.push(i);
            this.changeRef.detectChanges();
        }
    };
    EmployersearchresumesfilterPage.prototype.onChangeMaxExperience = function (item) {
        console.log('Max Experience:: ' + JSON.stringify(item.detail.value));
        this.maxExperience = item.detail.value;
    };
    EmployersearchresumesfilterPage.prototype.onChangeCurrency = function (item) {
        this.currency = item.detail.value;
    };
    EmployersearchresumesfilterPage.prototype.onChangeMinSalary = function (item) {
        this.CtcFrom = item.detail.value;
        this.annual_ctc_to = [];
        for (var i = item.detail.value; i <= 2000000; i = i + 10000) {
            this.annual_ctc_to.push(i);
            this.changeRef.detectChanges();
        }
    };
    EmployersearchresumesfilterPage.prototype.onChangeMaxSalary = function (item) {
        this.CtcTo = item.detail.value;
    };
    EmployersearchresumesfilterPage.prototype.onChangeDisability = function (item) {
        this.disability_id = [];
        this.disability_id = item.detail.value;
        console.log('disability id', this.disability_id);
        // let disability_Array = item.detail.value
        // for (let i = 0; i < disability_Array.length; i++) {
        //   this.disability_id.push(disability_Array[i])
        // }
    };
    // on change functions ends here.
    EmployersearchresumesfilterPage.prototype.updateResumeFilterDetail = function () {
        localStorage.setItem('searchResumeDataFlag', '2');
        this.advancedFilterSearch = [];
        this.advancedFilterSearch.push({
            jobTitle: this.jobtitle,
            location: this.location,
            minExperience: this.minExperience,
            maxExperience: this.maxExperience,
            Currency: this.currency,
            CtcFrom: this.CtcFrom,
            CtcTo: this.CtcTo,
            disability_id: this.disability_id,
            uacc_id: this.uacc_id,
            designation: this.designation
        });
        localStorage.setItem('advancedFilterSearch', JSON.stringify(this.advancedFilterSearch));
        // this.router.navigate(['/employersearchresumes'])
        this.router.navigate(['/employersearchresumes', { advancedFilterSearch: JSON.stringify(this.advancedFilterSearch[0]) }]);
    };
    EmployersearchresumesfilterPage = tslib_1.__decorate([
        Component({
            selector: 'app-employersearchresumesfilter',
            templateUrl: './employersearchresumesfilter.page.html',
            styleUrls: ['./employersearchresumesfilter.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ChangeDetectorRef])
    ], EmployersearchresumesfilterPage);
    return EmployersearchresumesfilterPage;
}());
export { EmployersearchresumesfilterPage };
//# sourceMappingURL=employersearchresumesfilter.page.js.map