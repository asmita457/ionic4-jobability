(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updatecontact-updatecontact-module"],{

/***/ "./src/app/updatecontact/updatecontact.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/updatecontact/updatecontact.module.ts ***!
  \*******************************************************/
/*! exports provided: UpdatecontactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecontactPageModule", function() { return UpdatecontactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updatecontact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updatecontact.page */ "./src/app/updatecontact/updatecontact.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _updatecontact_page__WEBPACK_IMPORTED_MODULE_6__["UpdatecontactPage"]
    }
];
var UpdatecontactPageModule = /** @class */ (function () {
    function UpdatecontactPageModule() {
    }
    UpdatecontactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                // ReactiveFormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updatecontact_page__WEBPACK_IMPORTED_MODULE_6__["UpdatecontactPage"]]
        })
    ], UpdatecontactPageModule);
    return UpdatecontactPageModule;
}());



/***/ }),

/***/ "./src/app/updatecontact/updatecontact.page.html":
/*!*******************************************************!*\
  !*** ./src/app/updatecontact/updatecontact.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Contact Information</ion-title>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n\n  <!-- <div class=\"cameraBacground\">\n    <ion-icon class=\"cameraIcon\" ios=\"ios-camera\" md=\"md-camera\"></ion-icon>\n  </div> -->\n  <ion-card class=\"cardMargins\">\n    <ion-card-content>\n      <div class=\"formPadding\">\n        <form [formGroup]=\"updateContactDetailsForm\" (ngSubmit)=\"updateContactDetail(updateContactDetailsForm.value)\">\n\n          <mat-form-field class=\"inputFields\">\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"dataArray.name\" formControlName=\"name\"\n              [errorStateMatcher]=\"esMatcher\" pattern=\"^[a-zA-Z]+[\\-'\\s]?[a-zA-Z ]+$\">\n            <mat-icon matSuffix color=\"warn\"\n              *ngIf=\"(updateContactDetailsForm.controls.name.invalid && updateContactDetailsForm.controls.name.touched) || (updateContactDetailsForm.controls.name.invalid && showErrorIcon && !updateContactDetailsForm.controls.name.touched)\">\n              error\n            </mat-icon>\n            <mat-error>\n              <span *ngIf=\"updateContactDetailsForm.controls.name.errors?.required\">Name is required.</span>\n              <span *ngIf=\"updateContactDetailsForm.controls.name.errors?.pattern\">Please enter valid name.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <input matInput placeholder=\"Email\" [(ngModel)]=\"dataArray.email\" formControlName=\"email\"\n              [errorStateMatcher]=\"esMatcher\" pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,}$\">\n            <mat-icon matSuffix color=\"warn\"\n              *ngIf=\"(updateContactDetailsForm.controls.email.invalid && updateContactDetailsForm.controls.email.touched) || (updateContactDetailsForm.controls.email.invalid && showErrorIcon && !updateContactDetailsForm.controls.email.touched)\">\n              error\n            </mat-icon>\n            <mat-error>\n              <span *ngIf=\"updateContactDetailsForm.controls.email.errors?.required\">Email is required.</span>\n              <span *ngIf=\"updateContactDetailsForm.controls.email.errors?.pattern\">Please enter valid email\n                address.</span>\n            </mat-error>\n          </mat-form-field>\n\n\n          <mat-form-field class=\"inputFields\">\n            <input type=\"tel\" matInput placeholder=\"Mobile\" [(ngModel)]=\"dataArray.mobile\" formControlName=\"mobile\"\n              [errorStateMatcher]=\"esMatcher\" pattern=\"^[0-9]{10}$\">\n            <mat-icon matSuffix color=\"warn\"\n              *ngIf=\"(updateContactDetailsForm.controls.mobile.invalid && updateContactDetailsForm.controls.mobile.touched) || (updateContactDetailsForm.controls.mobile.invalid  && showErrorIcon && !updateContactDetailsForm.controls.mobile.touched)\">\n              error</mat-icon>\n            <mat-error>\n              <span *ngIf=\"updateContactDetailsForm.controls.mobile.errors?.required\">Mobile number is required.</span>\n              <span\n                *ngIf=\"updateContactDetailsForm.controls.mobile.errors?.minlength || updateContactDetailsForm.controls.mobile.errors?.maxlength\">Please\n                enter valid mobile number.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <mat-label>Gender</mat-label>\n            <mat-select formControlName=\"gender\" [errorStateMatcher]=\"esMatcher\" [(ngModel)]=\"dataArray.gender\"\n              (selectionChange)=\"selectedGender($event.value)\" [aria-label]=\"readGender\">\n              <mat-option *ngFor=\"let item of contactGenderArray;\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"updateContactDetailsForm.controls.gender.errors?.required\">Gender is required.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <mat-label>Marital Status</mat-label>\n            <mat-select formControlName=\"maritalStatus\" [errorStateMatcher]=\"esMatcher\"\n              [(ngModel)]=\"dataArray.marritalStatus\" (selectionChange)=\"selectedMaritalStatus($event.value)\"\n              [aria-label]=\"readMaritalStatus\">\n              <mat-option *ngFor=\"let item of contactMaritalStatusArray\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"updateContactDetailsForm.controls.maritalStatus.errors?.required\">Marital status is\n                required.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <mat-label>Disability Type</mat-label>\n            <mat-select role=\"listbox\" formControlName=\"disability\" [errorStateMatcher]=\"esMatcher\"\n              [(ngModel)]=\"dataArray.disability_id\" multiple (selectionChange)=\"selectedDisabilities($event.value)\"\n              [aria-label]=\"readDisabilityType\">\n              <mat-option role=\"option\" *ngFor=\"let item of disability_list\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"updateContactDetailsForm.controls.disability.errors?.required\">Please select at least one\n                disability type.</span>\n            </mat-error>\n          </mat-form-field>\n\n        \n          <mat-form-field class=\"inputFields\">\n            <textarea matInput placeholder=\"Address\" [(ngModel)]=\"dataArray.address\" formControlName=\"address\"\n              [errorStateMatcher]=\"esMatcher\" pattern=\".*[^ ].*\"></textarea>\n            <mat-icon matSuffix color=\"warn\"\n              *ngIf=\"(updateContactDetailsForm.controls.address.invalid && updateContactDetailsForm.controls.address.touched) || (updateContactDetailsForm.controls.address.invalid && showErrorIcon && !updateContactDetailsForm.controls.address.touched)\">\n              error\n            </mat-icon>\n            <mat-error>\n              <span *ngIf=\"updateContactDetailsForm.controls.address.errors?.required\">Address is required.</span>\n              <span *ngIf=\"updateContactDetailsForm.controls.address.errors?.pattern\">Please enter valid address.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <mat-label>Country</mat-label>\n            <mat-select formControlName=\"country\" [errorStateMatcher]=\"esMatcher\"\n              (selectionChange)=\"selectedCountryValue($event.value)\" [(ngModel)]=\"dataArray.country\"\n              [aria-label]=\"readCountry\">\n              <mat-option *ngFor=\"let item of countryArrayFromLocalStorage\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"updateContactDetailsForm.controls.country.errors?.required\">Country is\n                required.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <mat-label>State</mat-label>\n            <mat-select formControlName=\"state\" [errorStateMatcher]=\"esMatcher\"\n              (selectionChange)=\"selectedStatesValue($event.value)\" [(ngModel)]=\"dataArray.state\"\n              [aria-label]=\"readState\">\n              <mat-option *ngFor=\"let item of cityAndStateArrayFromLocalStorage\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"updateContactDetailsForm.controls.state.errors?.required\">State is\n                required.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <mat-label>City</mat-label>\n            <mat-select formControlName=\"city\" [errorStateMatcher]=\"esMatcher\" [(ngModel)]=\"dataArray.city\"\n              (selectionChange)=\"selectedCityValue($event.value)\" [aria-label]=\"readCity\">\n              <mat-option *ngFor=\"let item of cityNameArray\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"updateContactDetailsForm.controls.city.errors?.required\">City is\n                required.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <button type=\"submit\" class=\"buttonfont selector loginButton\">SAVE</button>\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/updatecontact/updatecontact.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/updatecontact/updatecontact.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-picture {\n  padding: 3px;\n  border-radius: 100%;\n  box-sizing: content-box;\n  margin: 5% auto;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  background: #d6d1c3; }\n\n.ionSelect {\n  min-width: 100%;\n  --padding-start: 0%; }\n\n.itemPadding {\n  --padding-start: 0%; }\n\n.redlabel {\n  color: red; }\n\n.blacklabel {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC91cGRhdGVjb250YWN0L3VwZGF0ZWNvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUduQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNJLGVBQWU7RUFDakIsbUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlY29udGFjdC91cGRhdGVjb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBpY3R1cmUge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBtYXJnaW46IDUlIGF1dG87XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogI2Q2ZDFjMztcblxuICB9XG4gIFxuICAuaW9uU2VsZWN0e1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIC0tcGFkZGluZy1zdGFydDogMCU7XG4gIH1cblxuICAuaXRlbVBhZGRpbmd7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwJTtcbiAgfVxuICAucmVkbGFiZWx7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5ibGFja2xhYmVse1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG5cbi8vICAgLmNhbWVyYUJhY2dyb3VuZHtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmNlZmVmZTc7XG4vLyAgICAgcGFkZGluZzogMTBweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4vLyAgICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbi8vICAgICB3aWR0aDogMTVweDtcbi8vICAgICBoZWlnaHQ6IDE1cHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZDZkMWMzO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiA1MyU7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB9XG5cbi8vIC5jYW1lcmFJY29ue1xuLy8gICAgIHpvb206IDIuMDtcbi8vICAgICBkaXNwbGF5OiBjb250ZW50cztcbi8vICAgfVxuXG4vLyA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtY29udGVudHtcbi8vICAgd2lkdGg6MjAwMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vLyAgIGZvbnQtc2l6ZTogMTBweDsgICBcbi8vIH0iXX0= */"

/***/ }),

/***/ "./src/app/updatecontact/updatecontact.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/updatecontact/updatecontact.page.ts ***!
  \*****************************************************/
/*! exports provided: UpdatecontactPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecontactPage", function() { return UpdatecontactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var UpdatecontactPage = /** @class */ (function () {
    function UpdatecontactPage(dataServices, alertCtrl, activatedRoute, router, loadingController, formBuilder, navCtrl) {
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.showErrorIcon = false;
        this.disability_list = [];
        this.cityNameArray = [];
        this.readGender = 'Please select gender';
        this.readMaritalStatus = 'Please select marital status';
        this.readDisabilityType = 'Please select disability type';
        this.readCountry = 'Please select country';
        this.readState = 'Please select state';
        this.readCity = 'Please select city';
        this.disabilityNameArray = [];
        // Forms declaration
        this.updateContactDetailsForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)])],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            maritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            disability: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.contactGenderArray = [
            { id: 'm', name: 'Male' },
            { id: 'f', name: 'Female' },
            { id: 't', name: 'Transgender' },
        ];
        this.contactMaritalStatusArray = [
            { id: '1', name: 'Single' },
            { id: '2', name: 'Married' },
            { id: '3', name: 'Divorced' },
            { id: '4', name: 'Widowed' },
            { id: '5', name: 'Separated' },
        ];
        this.onPageLoad();
    }
    UpdatecontactPage.prototype.ionViewWillEnter = function () {
    };
    UpdatecontactPage.prototype.ngOnInit = function () {
    };
    UpdatecontactPage.prototype.onPageLoad = function () {
        var contactInfo = (this.activatedRoute.snapshot.paramMap.get('seekerContactInfo'));
        this.dataArray = JSON.parse(contactInfo);
        this.uacc_id = localStorage.getItem("users_id");
        this.countryArray = localStorage.getItem("countryArray");
        this.stateAndCityArray = localStorage.getItem("stateAndCityArray");
        if (this.dataArray.disability_id != '') {
            this.dataArray.disability_id = this.dataArray.disability_id.split(",");
        }
        if ((this.countryArray != '' || this.countryArray != null || this.countryArray != undefined) &&
            (this.stateAndCityArray != '' || this.stateAndCityArray != null || this.stateAndCityArray != undefined)) {
            this.setDefaultCity(this.countryArray, this.stateAndCityArray);
        }
        this.getStringDataForAccessability();
    };
    UpdatecontactPage.prototype.getStringDataForAccessability = function () {
        for (var i = 0; i < this.contactGenderArray.length; i++) {
            if (this.contactGenderArray[i].id == this.dataArray.gender) {
                this.readGender = this.contactGenderArray[i].name;
            }
        }
        for (var i = 0; i < this.contactMaritalStatusArray.length; i++) {
            if (this.contactMaritalStatusArray[i].id == this.dataArray.marritalStatus) {
                this.readMaritalStatus = this.contactMaritalStatusArray[i].name;
            }
        }
        this.disabilityNameArray = [];
        for (var i = 0; i < this.dataArray.disability_id.length; i++) {
            for (var j = 0; j < this.disability_list.length; j++) {
                if (this.disability_list[j].id == this.dataArray.disability_id[i]) {
                    this.disabilityNameArray.push(this.disability_list[j].name);
                }
            }
        }
        this.readDisabilityType = this.disabilityNameArray.toString();
    };
    //OnChange Functions for DropDowns
    // Function for showing selected value city.
    UpdatecontactPage.prototype.selectedGender = function (gender) {
        for (var i = 0; i < this.contactGenderArray.length; i++) {
            if (this.contactGenderArray[i].id == gender) {
                this.readGender = this.contactGenderArray[i].name;
            }
        }
    };
    UpdatecontactPage.prototype.selectedMaritalStatus = function (status) {
        for (var i = 0; i < this.contactMaritalStatusArray.length; i++) {
            if (this.contactMaritalStatusArray[i].id == status) {
                this.readMaritalStatus = this.contactMaritalStatusArray[i].name;
            }
        }
    };
    UpdatecontactPage.prototype.selectedDisabilities = function (id) {
        this.disabilityNameArray = [];
        if (id.length > 0) {
            this.showErrorIcon = false;
            for (var i = 0; i < id.length; i++) {
                for (var j = 0; j < this.disability_list.length; j++) {
                    if (this.disability_list[j].id == id[i]) {
                        this.disabilityNameArray.push(this.disability_list[j].name);
                    }
                }
            }
        }
        this.readDisabilityType = this.disabilityNameArray.toString();
    };
    UpdatecontactPage.prototype.setDefaultCity = function (countryArray, stateAndCityArray) {
        this.disability_list = JSON.parse(stateAndCityArray).ddl_list.disability_list;
        this.countryArrayFromLocalStorage = JSON.parse(countryArray).country_list;
        for (var i = 0; i < this.countryArrayFromLocalStorage.length; i++) {
            if (this.countryArrayFromLocalStorage[i].id == this.dataArray.country) {
                this.readCountry = this.countryArrayFromLocalStorage[i].name;
            }
        }
        if (this.dataArray.state != 0) {
            this.cityAndStateArrayFromLocalStorage = JSON.parse(stateAndCityArray).ddl_list.state_list;
            for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
                if (this.cityAndStateArrayFromLocalStorage[i].id == this.dataArray.state) {
                    this.readState = this.cityAndStateArrayFromLocalStorage[i].name;
                    this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
                }
            }
            for (var i = 0; i < this.cityNameArray.length; i++) {
                if (this.cityNameArray[i].id == this.dataArray.city) {
                    this.readCity = this.cityNameArray[i].name;
                }
            }
        }
    }; //setDefaultCity Ends Here;
    UpdatecontactPage.prototype.selectedCountryValue = function (countryId) {
        this.dataArray.state = '';
        this.dataArray.city = '';
        this.readState = 'Please select state';
        this.readCity = 'Please select city';
        this.getDDLAPI(countryId);
        for (var i = 0; i < this.countryArrayFromLocalStorage.length; i++) {
            if (this.countryArrayFromLocalStorage[i].id == this.dataArray.country) {
                this.readCountry = this.countryArrayFromLocalStorage[i].name;
            }
        }
    };
    UpdatecontactPage.prototype.selectedStatesValue = function (stateId) {
        this.dataArray.city = '';
        this.readCity = 'Please select city';
        for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
            if (this.cityAndStateArrayFromLocalStorage[i].id == stateId) {
                this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
                this.readState = this.cityAndStateArrayFromLocalStorage[i].name;
            }
        }
    };
    UpdatecontactPage.prototype.selectedCityValue = function (city) {
        for (var i = 0; i < this.cityNameArray.length; i++) {
            if (this.cityNameArray[i].id == city) {
                this.readCity = this.cityNameArray[i].name;
            }
        }
    };
    //OnChange Functions For DropDowns Ends Here.
    UpdatecontactPage.prototype.getDDLAPI = function (CountryID) {
        var _this = this;
        this.dataServices.getDDLAPI(CountryID).then(function (res) {
            if (res.status == 1) {
                _this.cityAndStateArrayFromLocalStorage = [];
                localStorage.setItem("stateAndCityArray", JSON.stringify(res));
                _this.dataArray.country = CountryID;
                _this.cityAndStateArrayFromLocalStorage = res.ddl_list.state_list;
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    UpdatecontactPage.prototype.updateContactDetail = function (formDeatails) {
        var _this = this;
        if (this.updateContactDetailsForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.showErrorIcon = false;
            this.dataServices.updateContactInfoAPI(formDeatails, this.uacc_id).then(function (res) {
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
    UpdatecontactPage.prototype.closePage = function () {
        // this.router.navigate(['/profile'])
        this.navCtrl.navigateRoot('/profile');
    };
    UpdatecontactPage.prototype.presentAlert = function (title, message) {
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
    UpdatecontactPage.prototype.presentLoading = function () {
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
    UpdatecontactPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    UpdatecontactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updatecontact',
            template: __webpack_require__(/*! ./updatecontact.page.html */ "./src/app/updatecontact/updatecontact.page.html"),
            styles: [__webpack_require__(/*! ./updatecontact.page.scss */ "./src/app/updatecontact/updatecontact.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_2__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], UpdatecontactPage);
    return UpdatecontactPage;
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
//# sourceMappingURL=updatecontact-updatecontact-module.js.map