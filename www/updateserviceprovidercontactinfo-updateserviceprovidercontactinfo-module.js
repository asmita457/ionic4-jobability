(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateserviceprovidercontactinfo-updateserviceprovidercontactinfo-module"],{

/***/ "./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: UpdateserviceprovidercontactinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateserviceprovidercontactinfoPageModule", function() { return UpdateserviceprovidercontactinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateserviceprovidercontactinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateserviceprovidercontactinfo.page */ "./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _updateserviceprovidercontactinfo_page__WEBPACK_IMPORTED_MODULE_6__["UpdateserviceprovidercontactinfoPage"]
    }
];
var UpdateserviceprovidercontactinfoPageModule = /** @class */ (function () {
    function UpdateserviceprovidercontactinfoPageModule() {
    }
    UpdateserviceprovidercontactinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updateserviceprovidercontactinfo_page__WEBPACK_IMPORTED_MODULE_6__["UpdateserviceprovidercontactinfoPage"]]
        })
    ], UpdateserviceprovidercontactinfoPageModule);
    return UpdateserviceprovidercontactinfoPageModule;
}());



/***/ }),

/***/ "./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.page.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n    <ion-item lines=\"none\" class=\"new-background-color\">\n        <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n        <ion-title style=\"margin-left: 5%; color: #2b0c43\">Contact Information</ion-title>\n    </ion-item>\n</ion-toolbar>\n<ion-content>\n    <ion-card class=\"cardMargins\">\n        <ion-card-content>\n            <div class=\"formPadding\">\n                <form [formGroup]=\"updateContactDetailsForm\"\n                    (ngSubmit)=\"updateServiceProviderContactDetail(updateContactDetailsForm.value)\">\n                    <mat-form-field class=\"inputFields\">\n                        <input matInput placeholder=\"Name\" [(ngModel)]=\"dataArray.first_name\" formControlName=\"name\"\n                            [errorStateMatcher]=\"esMatcher\" pattern=\"^[a-zA-Z]+[\\-'\\s]?[a-zA-Z ]+$\">\n                        <mat-icon matSuffix color=\"warn\"\n                            *ngIf=\"(updateContactDetailsForm.controls.name.invalid && updateContactDetailsForm.controls.name.touched) || (updateContactDetailsForm.controls.name.invalid && showErrorIcon && !updateContactDetailsForm.controls.name.touched)\">\n                            error\n                        </mat-icon>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.name.errors?.required\">Name is\n                                required.</span>\n                            <span *ngIf=\"updateContactDetailsForm.controls.name.errors?.pattern\">Please enter valid\n                                name.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputFields\">\n                        <input matInput placeholder=\"Designation\" [(ngModel)]=\"dataArray.designation\"\n                            formControlName=\"designation\" [errorStateMatcher]=\"esMatcher\"\n                            pattern=\"^[a-zA-Z]+[\\-'\\s]?[a-zA-Z. ]+$\">\n                        <mat-icon matSuffix color=\"warn\"\n                            *ngIf=\"(updateContactDetailsForm.controls.designation.invalid && updateContactDetailsForm.controls.designation.touched) || (updateContactDetailsForm.controls.designation.invalid && showErrorIcon && !updateContactDetailsForm.controls.designation.touched)\">\n                            error\n                        </mat-icon>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.designation.errors?.required\">Designation is\n                                required.</span>\n                            <span *ngIf=\"updateContactDetailsForm.controls.designation.errors?.pattern\">Please enter\n                                valid\n                                designation.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputFields\">\n                        <input matInput placeholder=\"Email\" [(ngModel)]=\"dataArray.email\" formControlName=\"email\"\n                            [errorStateMatcher]=\"esMatcher\" pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$\">\n                        <mat-icon matSuffix color=\"warn\"\n                            *ngIf=\"(updateContactDetailsForm.controls.email.invalid && updateContactDetailsForm.controls.email.touched) || (updateContactDetailsForm.controls.email.invalid && showErrorIcon && !updateContactDetailsForm.controls.email.touched)\">\n                            error\n                        </mat-icon>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.email.errors?.required\">Email is\n                                required.</span>\n                            <span *ngIf=\"updateContactDetailsForm.controls.email.errors?.pattern\">Please enter valid\n                                email\n                                address.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputFields\">\n                        <input matInput placeholder=\"Alternative Email(optional)\" [(ngModel)]=\"dataArray.business_email\"\n                            formControlName=\"businessEmail\" [errorStateMatcher]=\"esMatcher\"\n                            pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$\">\n                        <mat-icon matSuffix color=\"warn\"\n                            *ngIf=\"(updateContactDetailsForm.controls.businessEmail.invalid && updateContactDetailsForm.controls.businessEmail.touched) || (updateContactDetailsForm.controls.businessEmail.invalid && showErrorIcon && !updateContactDetailsForm.controls.businessEmail.touched)\">\n                            error\n                        </mat-icon>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.businessEmail.errors?.pattern\">Please enter\n                                valid\n                                alternative email\n                                address.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputFields\">\n                        <input type=\"tel\" matInput placeholder=\"Phone(optional)\" [(ngModel)]=\"dataArray.phone\"\n                            formControlName=\"phone\" [errorStateMatcher]=\"esMatcher\">\n                        <mat-icon matSuffix color=\"warn\"\n                            *ngIf=\"(updateContactDetailsForm.controls.phone.invalid && updateContactDetailsForm.controls.phone.touched) || (updateContactDetailsForm.controls.phone.invalid  && showErrorIcon && !updateContactDetailsForm.controls.phone.touched)\">\n                            error</mat-icon>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.phone.errors?.maxlength\">Please\n                                enter valid phone number.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputFields\">\n                        <input type=\"tel\" matInput placeholder=\"Mobile\" [(ngModel)]=\"dataArray.mobile\"\n                            formControlName=\"mobile\" [errorStateMatcher]=\"esMatcher\" pattern=\"^[0-9]{10}$\">\n                        <mat-icon matSuffix color=\"warn\"\n                            *ngIf=\"(updateContactDetailsForm.controls.mobile.invalid && updateContactDetailsForm.controls.mobile.touched) || (updateContactDetailsForm.controls.mobile.invalid  && showErrorIcon && !updateContactDetailsForm.controls.mobile.touched)\">\n                            error</mat-icon>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.mobile.errors?.required\">Mobile number is\n                                required.</span>\n                            <span\n                                *ngIf=\"updateContactDetailsForm.controls.mobile.errors?.minlength || updateContactDetailsForm.controls.mobile.errors?.maxlength\">Please\n                                enter valid mobile number.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputFields\">\n                        <textarea matInput placeholder=\"Address\" [(ngModel)]=\"dataArray.address\"\n                            formControlName=\"address\" [errorStateMatcher]=\"esMatcher\"\n                            pattern=\".*[^ ].*\"></textarea>\n                        <mat-icon matSuffix color=\"warn\"\n                            *ngIf=\"(updateContactDetailsForm.controls.address.invalid && updateContactDetailsForm.controls.address.touched) || (updateContactDetailsForm.controls.address.invalid && showErrorIcon && !updateContactDetailsForm.controls.address.touched)\">\n                            error\n                        </mat-icon>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.address.errors?.required\">Address is\n                                required.</span>\n                            <span *ngIf=\"updateContactDetailsForm.controls.address.errors?.pattern\">Please enter valid\n                                address.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputFields\">\n                        <mat-label>Country</mat-label>\n                        <mat-select formControlName=\"country\" [errorStateMatcher]=\"esMatcher\"\n                            (selectionChange)=\"selectedCountryValue($event.value)\" [(ngModel)]=\"dataArray.country\">\n                            <mat-option *ngFor=\"let item of countryArrayFromLocalStorage\" [value]=\"item.id\">\n                                {{item.name}}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.country.errors?.required\">Country is\n                                required.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputFields\">\n                        <mat-label>State</mat-label>\n                        <mat-select formControlName=\"state\" [errorStateMatcher]=\"esMatcher\"\n                            (selectionChange)=\"selectedStatesValue($event.value)\" [(ngModel)]=\"dataArray.state\">\n                            <mat-option *ngFor=\"let item of cityAndStateArrayFromLocalStorage\" [value]=\"item.id\">\n                                {{item.name}}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.state.errors?.required\">State is\n                                required.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputFields\">\n                        <mat-label>City</mat-label>\n                        <mat-select formControlName=\"city\" [errorStateMatcher]=\"esMatcher\" [(ngModel)]=\"dataArray.city\">\n                            <mat-option *ngFor=\"let item of cityNameArray\" [value]=\"item.id\">\n                                {{item.name}}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.city.errors?.required\">City is\n                                required.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"inputFields\">\n                        <input type=\"tel\" matInput placeholder=\"ZIP / PIN Code\" [(ngModel)]=\"dataArray.zip_code\"\n                            formControlName=\"zipCode\" [errorStateMatcher]=\"esMatcher\">\n                        <mat-icon matSuffix color=\"warn\"\n                            *ngIf=\"(updateContactDetailsForm.controls.zipCode.invalid && updateContactDetailsForm.controls.zipCode.touched) || (updateContactDetailsForm.controls.zipCode.invalid  && showErrorIcon && !updateContactDetailsForm.controls.zipCode.touched)\">\n                            error</mat-icon>\n                        <mat-error>\n                            <span *ngIf=\"updateContactDetailsForm.controls.zipCode.errors?.required\">Zip / pin code is\n                                required.</span>\n                            <span\n                                *ngIf=\"updateContactDetailsForm.controls.zipCode.errors?.minlength || updateContactDetailsForm.controls.zipCode.errors?.maxlength\">Please\n                                enter valid zip / pin code.</span>\n                        </mat-error>\n                    </mat-form-field>\n\n                    <button type=\"submit\" class=\"buttonfont selector loginButton\">SAVE</button>\n\n                </form>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floatingcss {\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC91cGRhdGVzZXJ2aWNlcHJvdmlkZXJjb250YWN0aW5mby91cGRhdGVzZXJ2aWNlcHJvdmlkZXJjb250YWN0aW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91cGRhdGVzZXJ2aWNlcHJvdmlkZXJjb250YWN0aW5mby91cGRhdGVzZXJ2aWNlcHJvdmlkZXJjb250YWN0aW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXRpbmdjc3N7XG4gICAgd2lkdGg6OTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: UpdateserviceprovidercontactinfoPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateserviceprovidercontactinfoPage", function() { return UpdateserviceprovidercontactinfoPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var UpdateserviceprovidercontactinfoPage = /** @class */ (function () {
    function UpdateserviceprovidercontactinfoPage(router, dataServices, alertCtrl, activatedRoute, loadingController, formBuilder) {
        this.router = router;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.cityNameArray = [];
        this.stateAndCityArray = localStorage.getItem("stateAndCityArray");
        this.countryArray = localStorage.getItem("countryArray");
        this.dataArray = JSON.parse((this.activatedRoute.snapshot.paramMap.get('serviceProviderInfo')));
        if ((this.countryArray != '' || this.countryArray != null || this.countryArray != undefined) &&
            (this.stateAndCityArray != '' || this.stateAndCityArray != null || this.stateAndCityArray != undefined)) {
            this.setDefaultCity(this.countryArray, this.stateAndCityArray);
        }
        else {
            this.countryArrayFromLocalStorage = JSON.parse(this.countryArray).country_list;
        }
    }
    UpdateserviceprovidercontactinfoPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UpdateserviceprovidercontactinfoPage.prototype.buildForm = function () {
        this.updateContactDetailsForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            businessEmail: [''],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)])],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)])],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(6)])],
        });
    };
    UpdateserviceprovidercontactinfoPage.prototype.getDDLAPI = function (country) {
        var _this = this;
        this.dataServices.getDDLAPI(country).then(function (res) {
            if (res.status == 1) {
                _this.cityAndStateArrayFromLocalStorage = [];
                localStorage.setItem("stateAndCityArray", JSON.stringify(res));
                _this.cityAndStateArrayFromLocalStorage = res.ddl_list.state_list;
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function for showing selected value city.
    UpdateserviceprovidercontactinfoPage.prototype.setDefaultCity = function (countryArray, stateAndCityArray) {
        this.countryArrayFromLocalStorage = JSON.parse(countryArray).country_list;
        if (this.dataArray.state != 0) {
            this.cityAndStateArrayFromLocalStorage = JSON.parse(stateAndCityArray).ddl_list.state_list;
            for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
                if (this.cityAndStateArrayFromLocalStorage[i].id == this.dataArray.state) {
                    this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
                }
            }
        }
    }; //setDefaultCity Ends Here;
    // Function To show Alert
    UpdateserviceprovidercontactinfoPage.prototype.presentAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            // buttons: ['OK']
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        _this.closePage();
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
    }; // presentAlert Function Ends Here
    UpdateserviceprovidercontactinfoPage.prototype.closePage = function () {
        this.router.navigate(['/serviceproviderprofile']);
    };
    UpdateserviceprovidercontactinfoPage.prototype.selectedCountryValue = function (countryId) {
        this.dataArray.state = '';
        this.dataArray.city = '';
        this.getDDLAPI(countryId);
    };
    UpdateserviceprovidercontactinfoPage.prototype.selectedStatesValue = function (stateId) {
        this.dataArray.city = '';
        for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
            if (this.cityAndStateArrayFromLocalStorage[i].id == stateId) {
                this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
            }
        }
    };
    UpdateserviceprovidercontactinfoPage.prototype.updateServiceProviderContactDetail = function (contactDetailsform) {
        var _this = this;
        if (this.updateContactDetailsForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.dataServices.updateServiceproviderContactInfoAPI(contactDetailsform).then(function (res) {
                if (res.status == 1) {
                    _this.loadingController.dismiss();
                    _this.presentAlert(res.message, '');
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert(res.message, '');
                }
            }, function (error) {
                alert(error);
            });
        }
    };
    //Display loader 
    UpdateserviceprovidercontactinfoPage.prototype.presentLoading = function () {
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
    UpdateserviceprovidercontactinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateserviceprovidercontactinfo',
            template: __webpack_require__(/*! ./updateserviceprovidercontactinfo.page.html */ "./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.page.html"),
            styles: [__webpack_require__(/*! ./updateserviceprovidercontactinfo.page.scss */ "./src/app/updateserviceprovidercontactinfo/updateserviceprovidercontactinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], UpdateserviceprovidercontactinfoPage);
    return UpdateserviceprovidercontactinfoPage;
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
//# sourceMappingURL=updateserviceprovidercontactinfo-updateserviceprovidercontactinfo-module.js.map