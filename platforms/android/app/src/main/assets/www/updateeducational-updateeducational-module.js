(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateeducational-updateeducational-module"],{

/***/ "./src/app/updateeducational/updateeducational.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/updateeducational/updateeducational.module.ts ***!
  \***************************************************************/
/*! exports provided: UpdateeducationalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateeducationalPageModule", function() { return UpdateeducationalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateeducational_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateeducational.page */ "./src/app/updateeducational/updateeducational.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _updateeducational_page__WEBPACK_IMPORTED_MODULE_6__["UpdateeducationalPage"]
    }
];
var UpdateeducationalPageModule = /** @class */ (function () {
    function UpdateeducationalPageModule() {
    }
    UpdateeducationalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updateeducational_page__WEBPACK_IMPORTED_MODULE_6__["UpdateeducationalPage"]]
        })
    ], UpdateeducationalPageModule);
    return UpdateeducationalPageModule;
}());



/***/ }),

/***/ "./src/app/updateeducational/updateeducational.page.html":
/*!***************************************************************!*\
  !*** ./src/app/updateeducational/updateeducational.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Educational Information</ion-title>\n  </ion-item>\n</ion-toolbar>\n<ion-content padding>\n\n\n  <div class=\"formPadding\">\n    <form [formGroup]=\"updateEducationalDetailsForm\"\n      (ngSubmit)=\"updateEducationalDetail(updateEducationalDetailsForm.value)\">\n\n      <label id=\"selectEducationalType\">Select Educational Type</label>\n      <mat-radio-group aria-label=\"selectEducationalType\" (change)=\"onSelect($event.value)\" class=\"radioButtonGroup\"\n        formControlName=\"educationtype\" [(ngModel)]=\"educationType\">\n        <div *ngIf=\"showEducationTypes\">\n          <mat-radio-button class=\"radioButton\" value=\"1\">No Schooling</mat-radio-button><br>\n          <mat-radio-button class=\"radioButton\" value=\"2\">Pre-Primary</mat-radio-button><br>\n          <mat-radio-button class=\"radioButton\" value=\"3\">Primary</mat-radio-button><br>\n        </div>\n        <mat-radio-button class=\"radioButton\" value=\"4\">Secondary and above</mat-radio-button>\n        <mat-error>\n          <span\n            *ngIf=\"updateEducationalDetailsForm.controls.educationtype.errors?.required && showErrorIcon\">Educational\n            type is required.</span>\n        </mat-error>\n      </mat-radio-group>\n\n      <div class=\"inputDiv\" *ngIf=\"showDiv\">\n        <mat-form-field class=\"inputFields\">\n          <mat-label>Qualification</mat-label>\n          <mat-select formControlName=\"qualification\" [(ngModel)]=\"qualificationId\"\n            (selectionChange)=\"selectedQualification($event.value)\" [aria-label]=\"readQualification\">\n            <mat-option *ngFor=\"let item of qualificationList\" [value]=\"item.id\">\n              {{item.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <span *ngIf=\"updateEducationalDetailsForm.controls.qualification.errors?.required\">Qualification is\n              required.</span>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"inputFields\">\n          <input matInput placeholder=\"Specialization\" [(ngModel)]=\"specialization\" formControlName=\"specialization\"\n            [errorStateMatcher]=\"esMatcher\" pattern=\"^[a-zA-Z]+[\\-'\\s]?[a-zA-Z. ]+$\">\n          <mat-icon matSuffix color=\"warn\"\n            *ngIf=\"(updateEducationalDetailsForm.controls.specialization.invalid && updateEducationalDetailsForm.controls.specialization.touched) || (updateEducationalDetailsForm.controls.specialization.invalid && showErrorIcon && !updateEducationalDetailsForm.controls.specialization.touched)\">\n            error\n          </mat-icon>\n          <mat-error>\n            <span *ngIf=\"updateEducationalDetailsForm.controls.specialization.errors?.required\">Specialization is\n              required.</span>\n            <span *ngIf=\"updateEducationalDetailsForm.controls.specialization.errors?.pattern\">Please enter valid\n              specialization.</span>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"inputFields\">\n          <mat-label>University / Board</mat-label>\n          <mat-select formControlName=\"university\" [(ngModel)]=\"instituteUniversityId\"\n            (selectionChange)=\"selectedUniversity($event.value)\" [aria-label]=\"readUniversity\">\n            <mat-option *ngFor=\"let item of universityList\" [value]=\"item.id\">\n              {{item.name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <span *ngIf=\"updateEducationalDetailsForm.controls.university.errors?.required\">University / board is\n              required.</span>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"inputFields\">\n          <mat-label>Passing Year</mat-label>\n          <mat-select formControlName=\"passingYear\" [(ngModel)]=\"yearOfPassing\" (selectionChange)=\"selectedPassingYear($event.value)\" [aria-label]=\"readPassingYear\">\n            <mat-option *ngFor=\"let item of passingYear\" [value]=\"item\">\n              {{item}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <span *ngIf=\"updateEducationalDetailsForm.controls.university.errors?.required\">Passing year is\n              required.</span>\n          </mat-error>\n        </mat-form-field>\n\n        <label id=\"typeOfCourse\">Type of\n          Course</label>\n        <mat-radio-group aria-label=\"typeOfCourse\" class=\"radioButtonGroup\" [(ngModel)]=\"typeOfCourse\"\n          formControlName=\"typeOfCourse\">\n          <mat-radio-button class=\"radioButton\" value=\"part_time\">Part Time</mat-radio-button>\n          <mat-radio-button class=\"radioButton\" value=\"full_time\">Full Time</mat-radio-button>\n          <mat-radio-button class=\"radioButton\" value=\"correspondence\">Correspondence</mat-radio-button>\n          <mat-error>\n            <span *ngIf=\"updateEducationalDetailsForm.controls.typeOfCourse.errors?.required && showErrorIcon\">Type of\n              course is required.</span>\n          </mat-error>\n        </mat-radio-group>\n        <br>\n      </div>\n      <button type=\"submit\" class=\"buttonfont selector loginButton\">SAVE</button>\n    </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/updateeducational/updateeducational.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/updateeducational/updateeducational.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZWVkdWNhdGlvbmFsL3VwZGF0ZWVkdWNhdGlvbmFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/updateeducational/updateeducational.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/updateeducational/updateeducational.page.ts ***!
  \*************************************************************/
/*! exports provided: UpdateeducationalPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateeducationalPage", function() { return UpdateeducationalPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







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
            educationtype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            qualification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            specialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            university: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            passingYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            typeOfCourse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
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
                specialization.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                university.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                passingYear.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                typeOfCourse.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
                qualification.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    UpdateeducationalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateeducational',
            template: __webpack_require__(/*! ./updateeducational.page.html */ "./src/app/updateeducational/updateeducational.page.html"),
            styles: [__webpack_require__(/*! ./updateeducational.page.scss */ "./src/app/updateeducational/updateeducational.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], UpdateeducationalPage);
    return UpdateeducationalPage;
}());

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



/***/ })

}]);
//# sourceMappingURL=updateeducational-updateeducational-module.js.map