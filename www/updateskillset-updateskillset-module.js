(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateskillset-updateskillset-module"],{

/***/ "./src/app/updateskillset/updateskillset.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/updateskillset/updateskillset.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdateskillsetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateskillsetPageModule", function() { return UpdateskillsetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateskillset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateskillset.page */ "./src/app/updateskillset/updateskillset.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _updateskillset_page__WEBPACK_IMPORTED_MODULE_6__["UpdateskillsetPage"]
    }
];
var UpdateskillsetPageModule = /** @class */ (function () {
    function UpdateskillsetPageModule() {
    }
    UpdateskillsetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updateskillset_page__WEBPACK_IMPORTED_MODULE_6__["UpdateskillsetPage"]]
        })
    ], UpdateskillsetPageModule);
    return UpdateskillsetPageModule;
}());



/***/ }),

/***/ "./src/app/updateskillset/updateskillset.page.html":
/*!*********************************************************!*\
  !*** ./src/app/updateskillset/updateskillset.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Present Skillsets</ion-title>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n  <ion-card class=\"cardMargins boxShadow\">\n    <ion-card-content>\n      <div class=\"formPadding\">\n        <form [formGroup]=\"updateSkillsetDetailsForm\"\n          (ngSubmit)=\"updateSkillsetDetail(updateSkillsetDetailsForm.value)\">\n          <mat-form-field class=\"inputFields\">\n            <mat-label>Industry</mat-label>\n            <mat-select  formControlName=\"industry\" [errorStateMatcher]=\"esMatcher\"\n              [(ngModel)]=\"dataArray.industryId == 0 ? '' : dataArray.industryId\"\n              (selectionChange)=\"selectedIndustry($event.value)\" [aria-label]=\"readIndustry\">\n              <mat-option *ngFor=\"let item of industryTypeArray\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"updateSkillsetDetailsForm.controls.industry.errors?.required\">Industry is required.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <mat-label>Functional Area</mat-label>\n            <mat-select formControlName=\"functionalArea\" [errorStateMatcher]=\"esMatcher\"\n              [(ngModel)]=\"dataArray.functionalAreaId == 0 ? '' : dataArray.functionalAreaId\" (selectionChange)=\"selectedFunctionalArea($event.value)\" [aria-label]=\"readFunctionalArea\">\n              <mat-option *ngFor=\"let item of functionAreaList\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"updateSkillsetDetailsForm.controls.functionalArea.errors?.required\">Functional area is\n                required.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <ion-label>Total Experience:</ion-label>\n          <ion-row>\n            <ion-col size=\"6\">\n              <mat-form-field class=\"inputFields\">\n                <mat-label>Year</mat-label>\n                <mat-select formControlName=\"year\" [errorStateMatcher]=\"esMatcher\"\n                  [(ngModel)]=\"dataArray.totalYearExperience\"  (selectionChange)=\"selectedYear($event.value)\" [aria-label]=\"readYear\">\n                  <mat-option *ngFor=\"let item of yearExperianceArray\" [value]=\"item\">\n                    {{item}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <mat-form-field class=\"inputFields\">\n                <mat-label>Month</mat-label>\n                <mat-select formControlName=\"month\" [errorStateMatcher]=\"esMatcher\"\n                  [(ngModel)]=\"dataArray.totalMonthExperience\" (selectionChange)=\"selectedMonth($event.value)\" [aria-label]=\"readMonth\">\n                  <mat-option *ngFor=\"let item of monthExperianceArray\" [value]=\"item\">\n                    {{item}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </ion-col>\n          </ion-row>\n\n\n          <mat-form-field class=\"inputFields\">\n            <input matInput placeholder=\"Key Skills\" formControlName=\"KeySkills\" [(ngModel)]=\"dataArray.KeySkills\"\n              [errorStateMatcher]=\"esMatcher\" pattern=\"^[a-zA-Z]+[\\-'\\s\\]?[a-zA-Z,. ]+$\">\n            <mat-icon matSuffix color=\"warn\"\n              *ngIf=\"(updateSkillsetDetailsForm.controls.KeySkills.invalid && updateSkillsetDetailsForm.controls.KeySkills.touched) || (updateSkillsetDetailsForm.controls.KeySkills.invalid && showErrorIcon && !updateSkillsetDetailsForm.controls.KeySkills.touched)\">\n              error\n            </mat-icon>\n            <mat-error>\n              <span *ngIf=\"updateSkillsetDetailsForm.controls.KeySkills.errors?.required\">Key skills is required.</span>\n              <span *ngIf=\"updateSkillsetDetailsForm.controls.KeySkills.errors?.pattern\">Please enter valid Key\n                skills.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <p style=\"color: gray;\">Note: You can add multiple skills seperated by comma.</p>\n          <br>\n          <button type=\"submit\" class=\"buttonfont selector loginButton\">SAVE</button>\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/updateskillset/updateskillset.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/updateskillset/updateskillset.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sc-ion-alert-md-h {\n  --min-width: 100% !important; }\n\n.boxShadow {\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC91cGRhdGVza2lsbHNldC91cGRhdGVza2lsbHNldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw0QkFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlc2tpbGxzZXQvdXBkYXRlc2tpbGxzZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2MtaW9uLWFsZXJ0LW1kLWgge1xuICAgIC0tbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3hTaGFkb3d7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/updateskillset/updateskillset.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/updateskillset/updateskillset.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdateskillsetPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateskillsetPage", function() { return UpdateskillsetPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var UpdateskillsetPage = /** @class */ (function () {
    function UpdateskillsetPage(router, activatedRoute, dataServices, alertCtrl, loadingController, formBuilder, navCtrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.yearExperianceArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
        this.monthExperianceArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
        this.showErrorIcon = false;
        this.readIndustry = 'Please select industry';
        this.readFunctionalArea = 'Please select functional area';
        this.readYear = 'Please select year';
        this.readMonth = 'Please select month';
        // Forms declaration
        this.updateSkillsetDetailsForm = this.formBuilder.group({
            industry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            functionalArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            year: [''],
            month: [''],
            KeySkills: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.onPageLoad();
    }
    UpdateskillsetPage.prototype.ngOnInit = function () {
        // this.getDropDownListArray();
    };
    UpdateskillsetPage.prototype.onPageLoad = function () {
        var contactInfo = (this.activatedRoute.snapshot.paramMap.get('seekerSkillSetInfo'));
        this.dataArray = JSON.parse(contactInfo);
        this.functionalAreaName = this.dataArray.functionalAreaName;
        this.industryName = this.dataArray.industryName;
        this.readIndustry = this.industryName;
        this.readFunctionalArea = this.dataArray.functionalAreaName;
        this.readYear = this.dataArray.totalYearExperience;
        this.readMonth = this.dataArray.totalMonthExperience;
        this.seekerInfo = localStorage.getItem("stateAndCityArray");
        this.functionAreaList = JSON.parse(this.seekerInfo).ddl_list.functional_area_list;
        this.industryTypeArray = JSON.parse(this.seekerInfo).ddl_list.industry_list;
    };
    UpdateskillsetPage.prototype.closePage = function () {
        // this.router.navigate(['/profile'])
        this.navCtrl.navigateRoot('/profile');
    };
    //On change Functions
    UpdateskillsetPage.prototype.selectedIndustry = function (industryId) {
        for (var i = 0; i <= this.industryTypeArray.length; i++) {
            if (this.industryTypeArray[i].id == industryId) {
                this.industryName = this.industryTypeArray[i].name;
                this.readIndustry = this.industryName;
                return;
            }
        }
    };
    UpdateskillsetPage.prototype.selectedFunctionalArea = function (functionalAreaId) {
        for (var i = 0; i <= this.functionAreaList.length; i++) {
            if (this.functionAreaList[i].id == functionalAreaId) {
                this.functionalAreaName = this.functionAreaList[i].name;
                this.readFunctionalArea = this.functionalAreaName;
                return;
            }
        }
    };
    UpdateskillsetPage.prototype.selectedYear = function (year) {
        this.readYear = year;
    };
    UpdateskillsetPage.prototype.selectedMonth = function (month) {
        this.readMonth = month;
    };
    // onChange Functions Ends Here.
    UpdateskillsetPage.prototype.updateSkillsetDetail = function (form) {
        var _this = this;
        if (this.updateSkillsetDetailsForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.dataServices.updatePresentSkillSetAPI(form, this.industryName, this.functionalAreaName).then(function (res) {
                _this.loadingController.dismiss();
                if (res.status == 1) {
                    _this.presentAlert(res.message, '');
                }
                else {
                    _this.presentAlert(res.message, '');
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log(error);
            });
        }
    };
    UpdateskillsetPage.prototype.presentAlert = function (title, message) {
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
    UpdateskillsetPage.prototype.presentLoading = function () {
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
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    UpdateskillsetPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    UpdateskillsetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateskillset',
            template: __webpack_require__(/*! ./updateskillset.page.html */ "./src/app/updateskillset/updateskillset.page.html"),
            styles: [__webpack_require__(/*! ./updateskillset.page.scss */ "./src/app/updateskillset/updateskillset.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], UpdateskillsetPage);
    return UpdateskillsetPage;
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
//# sourceMappingURL=updateskillset-updateskillset-module.js.map