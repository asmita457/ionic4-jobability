import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
var UpdateeducationalPage = /** @class */ (function () {
    function UpdateeducationalPage(router, dataServices, alertCtrl, activatedRoute, loadingController, formBuilder, navCtrl) {
        this.router = router;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.showErrorIcon = false;
        this.passingYear = [];
        this.showDiv = false;
        this.readQualification = 'Please select qualification';
        this.readUniversity = 'Please select university / board';
        this.readPassingYear = 'Please select passing year';
        this.onPageLoad();
    }
    UpdateeducationalPage.prototype.ngOnInit = function () {
        this.buildForm();
        this.setCurrentEmployerValidators();
    };
    // Forms declaration
    UpdateeducationalPage.prototype.buildForm = function () {
        this.updateEducationalDetailsForm = this.formBuilder.group({
            educationtype: ['', Validators.required],
            qualification: ['', Validators.required],
            specialization: ['', Validators.required],
            university: ['', Validators.required],
            passingYear: ['', Validators.required],
            typeOfCourse: ['', Validators.required]
        });
    };
    UpdateeducationalPage.prototype.setCurrentEmployerValidators = function () {
        var qualification = this.updateEducationalDetailsForm.get('qualification');
        var specialization = this.updateEducationalDetailsForm.get('specialization');
        var university = this.updateEducationalDetailsForm.get('university');
        var passingYear = this.updateEducationalDetailsForm.get('passingYear');
        var typeOfCourse = this.updateEducationalDetailsForm.get('typeOfCourse');
        this.updateEducationalDetailsForm.get('educationtype').valueChanges
            .subscribe(function (educationType) {
            if (educationType == '4') {
                specialization.setValidators([Validators.required]);
                university.setValidators([Validators.required]);
                passingYear.setValidators([Validators.required]);
                typeOfCourse.setValidators([Validators.required]);
                qualification.setValidators([Validators.required]);
            }
            if (educationType != '4') {
                specialization.setValidators(null);
                university.setValidators(null);
                passingYear.setValidators(null);
                typeOfCourse.setValidators(null);
                qualification.setValidators(null);
            }
            specialization.updateValueAndValidity();
            university.updateValueAndValidity();
            passingYear.updateValueAndValidity();
            typeOfCourse.updateValueAndValidity();
            qualification.updateValueAndValidity();
        });
    };
    // This Function Call when Page is load
    UpdateeducationalPage.prototype.onPageLoad = function () {
        var currentYear = new Date().getFullYear();
        for (var i = currentYear; i >= 1965; i--) {
            this.passingYear.push(i.toString());
        }
        this.educationalDetails = localStorage.getItem("stateAndCityArray");
        this.qualificationList = JSON.parse(this.educationalDetails).ddl_list.qualification_list;
        this.universityList = JSON.parse(this.educationalDetails).ddl_list.university_list;
        this.addEducation = (this.activatedRoute.snapshot.paramMap.get('addEducation'));
        this.educationType = (this.activatedRoute.snapshot.paramMap.get('education_type'));
        this.cardLength = (this.activatedRoute.snapshot.paramMap.get('cardLength'));
        if (this.addEducation != null || this.addEducation != undefined && this.addEducation != '') {
            // this.educationType = '';
            if (this.cardLength == 0) {
                this.educationType = '';
                this.showEducationTypes = true;
            }
            else if (this.cardLength >= 1 && this.educationType == 4) {
                this.showDiv = true;
                this.educationType = '4';
            }
        }
        else {
            var contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
            this.seekerInfoArray = JSON.parse(contactInfo);
            this.qualificationId = this.seekerInfoArray.qualificationId == '0' ? '' : this.seekerInfoArray.qualificationId;
            this.qualificationName = this.seekerInfoArray.qualificationName;
            this.readQualification = this.qualificationName;
            this.instituteUniversityId = this.seekerInfoArray.instituteUniversityId == '0' ? '' : this.seekerInfoArray.instituteUniversityId;
            this.instituteUniversityName = this.seekerInfoArray.instituteUniversityName;
            this.readUniversity = this.instituteUniversityName;
            this.yearOfPassing = this.seekerInfoArray.yearOfPassing;
            this.readPassingYear = this.yearOfPassing;
            this.typeOfCourse = this.seekerInfoArray.typeOfCourse;
            this.specialization = this.seekerInfoArray.specialisation;
            this.educationType = this.seekerInfoArray.educationType;
            this.cardLength = this.seekerInfoArray.cardLength;
            if (this.cardLength == 1 && this.educationType == '4') {
                this.showEducationTypes = true;
                this.showDiv = true;
            }
            else if (this.cardLength > 1 && this.educationType == '4') {
                this.showEducationTypes = false;
                this.showDiv = true;
            }
            else if (this.cardLength == 1 && this.educationType != '4') {
                this.showEducationTypes = true;
            }
        } //Seeker Info Ends Here.
        // To Creat Year Array Function Ends Here.
        // this.educationTypeValidation()
    }; // onPageLoad Function Ends Here.
    UpdateeducationalPage.prototype.closePage = function () {
        // this.router.navigate(['/profile'])
        this.navCtrl.navigateRoot('/profile');
    };
    UpdateeducationalPage.prototype.ionViewWillEnter = function () {
        // this.onPageLoad();
    };
    UpdateeducationalPage.prototype.onSelect = function (educationType) {
        if ("4" == educationType) {
            this.showDiv = true;
        }
        else {
            this.showDiv = false;
        }
    };
    UpdateeducationalPage.prototype.selectedQualification = function (qualificationId) {
        for (var i = 0; i <= this.qualificationList.length; i++) {
            if (this.qualificationList[i].id == qualificationId) {
                this.qualificationName = this.qualificationList[i].name;
                this.readQualification = this.qualificationName;
                return;
            }
        }
    };
    UpdateeducationalPage.prototype.selectedUniversity = function (UniversityId) {
        for (var i = 0; i <= this.universityList.length; i++) {
            if (this.universityList[i].id == UniversityId) {
                this.instituteUniversityName = this.universityList[i].name;
                this.readUniversity = this.instituteUniversityName;
                return;
            }
        }
    };
    UpdateeducationalPage.prototype.selectedPassingYear = function (passingYear) {
        this.readPassingYear = passingYear;
    };
    UpdateeducationalPage.prototype.updateEducationalDetail = function (educationForm) {
        var _this = this;
        if (this.updateEducationalDetailsForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            if (educationForm.educationtype != '4') {
                educationForm.qualification = '';
                this.qualificationName = '';
                educationForm.specialization = '';
                educationForm.university = '';
                this.instituteUniversityName = '';
                educationForm.passingYear = '';
                educationForm.typeOfCourse = '';
            }
            // if (this.showDiv) {
            if (this.addEducation != null || this.addEducation != undefined && this.addEducation != '') {
                this.presentLoading();
                this.dataServices.addEducationInfoAPI(educationForm, this.qualificationName, this.instituteUniversityName).then(function (result) {
                    _this.loadingController.dismiss();
                    if (result.status == 1) {
                        _this.presentAlert(result.message, '');
                        // this.closePage()
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
                this.dataServices.updateEducationInfoAPI(educationForm, this.qualificationName, this.instituteUniversityName, this.seekerInfoArray.id).then(function (result) {
                    _this.loadingController.dismiss();
                    if (result.status == 1) {
                        _this.presentAlert(result.message, '');
                        // this.closePage()
                    }
                    else {
                        _this.presentAlert(result.message, '');
                    }
                }, function (error) {
                    _this.loadingController.dismiss();
                    console.log(error);
                });
            }
            // }
            // else {
            //   if (this.addEducation != null || this.addEducation != undefined && this.addEducation != '') {
            //     this.presentLoading();
            //     this.dataServices.addEducationInfoAPI(educationForm, this.qualificationName, this.instituteUniversityName).then((result: any) => {
            //       this.loadingController.dismiss();
            //       if (result.status == 1) {
            //         this.presentAlert(result.message, '');
            //         // this.closePage()
            //       }
            //       else {
            //         this.presentAlert(result.message, '');
            //       }
            //     }, (error) => {
            //       alert(error);
            //     });
            //   } else {
            //     this.presentLoading();
            //     this.dataServices.updateEducationInfoAPI(educationForm, this.qualificationName, this.instituteUniversityName, this.id).then((result: any) => {
            //       this.loadingController.dismiss();
            //       if (result.status == 1) {
            //         this.presentAlert(result.message, '');
            //         // this.closePage()
            //       }
            //       else {
            //         this.presentAlert(result.message, '');
            //       }
            //     }, (error) => {
            //       alert(error);
            //     });
            //   }
            // }
            // console.log('validation success.')
        }
    };
    UpdateeducationalPage.prototype.presentAlert = function (title, message) {
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
    UpdateeducationalPage.prototype.presentLoading = function () {
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
    UpdateeducationalPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    UpdateeducationalPage = tslib_1.__decorate([
        Component({
            selector: 'app-updateeducational',
            templateUrl: './updateeducational.page.html',
            styleUrls: ['./updateeducational.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataservicesService,
            AlertController,
            ActivatedRoute,
            LoadingController,
            FormBuilder,
            NavController])
    ], UpdateeducationalPage);
    return UpdateeducationalPage;
}());
export { UpdateeducationalPage };
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
//# sourceMappingURL=updateeducational.page.js.map