import * as tslib_1 from "tslib";
// import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    EmployerpostjobdetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-employerpostjobdetails',
            templateUrl: './employerpostjobdetails.page.html',
            styleUrls: ['./employerpostjobdetails.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ChangeDetectorRef,
            ActivatedRoute,
            NavController])
    ], EmployerpostjobdetailsPage);
    return EmployerpostjobdetailsPage;
}());
export { EmployerpostjobdetailsPage };
//# sourceMappingURL=employerpostjobdetails.page.js.map