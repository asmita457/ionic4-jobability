import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
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
            companyOrganisation: ['', Validators.required],
            designation: ['', Validators.required],
            fromYear: ['', Validators.required],
            fromMonth: ['', Validators.required],
            toYear: ['', Validators.required],
            toMonth: ['', Validators.required],
            reasonForLeaving: ['', Validators.required],
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
                toYear.setValidators([Validators.required]);
                toMonth.setValidators([Validators.required]);
                reasonForLeaving.setValidators([Validators.required]);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
    UpdateworkexperiencePage = tslib_1.__decorate([
        Component({
            selector: 'app-updateworkexperience',
            templateUrl: './updateworkexperience.page.html',
            styleUrls: ['./updateworkexperience.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AlertController,
            DataservicesService,
            ActivatedRoute,
            LoadingController,
            FormBuilder,
            NavController])
    ], UpdateworkexperiencePage);
    return UpdateworkexperiencePage;
}());
export { UpdateworkexperiencePage };
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
export { MyErrorStateMatcher };
//# sourceMappingURL=updateworkexperience.page.js.map