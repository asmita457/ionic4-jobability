import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
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
    EmployerpostjobmanagerresponsesPage = tslib_1.__decorate([
        Component({
            selector: 'app-employerpostjobmanagerresponses',
            templateUrl: './employerpostjobmanagerresponses.page.html',
            styleUrls: ['./employerpostjobmanagerresponses.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            LoadingController,
            DataservicesService,
            AlertController,
            NavController])
    ], EmployerpostjobmanagerresponsesPage);
    return EmployerpostjobmanagerresponsesPage;
}());
export { EmployerpostjobmanagerresponsesPage };
//# sourceMappingURL=employerpostjobmanagerresponses.page.js.map