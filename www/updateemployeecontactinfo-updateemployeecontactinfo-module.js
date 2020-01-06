(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateemployeecontactinfo-updateemployeecontactinfo-module"],{

/***/ "./src/app/updateemployeecontactinfo/updateemployeecontactinfo.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/updateemployeecontactinfo/updateemployeecontactinfo.module.ts ***!
  \*******************************************************************************/
/*! exports provided: UpdateemployeecontactinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateemployeecontactinfoPageModule", function() { return UpdateemployeecontactinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateemployeecontactinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateemployeecontactinfo.page */ "./src/app/updateemployeecontactinfo/updateemployeecontactinfo.page.ts");







var routes = [
    {
        path: '',
        component: _updateemployeecontactinfo_page__WEBPACK_IMPORTED_MODULE_6__["UpdateemployeecontactinfoPage"]
    }
];
var UpdateemployeecontactinfoPageModule = /** @class */ (function () {
    function UpdateemployeecontactinfoPageModule() {
    }
    UpdateemployeecontactinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updateemployeecontactinfo_page__WEBPACK_IMPORTED_MODULE_6__["UpdateemployeecontactinfoPage"]]
        })
    ], UpdateemployeecontactinfoPageModule);
    return UpdateemployeecontactinfoPageModule;
}());



/***/ }),

/***/ "./src/app/updateemployeecontactinfo/updateemployeecontactinfo.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/updateemployeecontactinfo/updateemployeecontactinfo.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n        <ion-item lines=\"none\" class=\"new-background-color\">\n                <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n                <ion-title style=\"margin-left: 5%; color: #2b0c43\">Contact Information</ion-title>\n        </ion-item>\n</ion-toolbar>\n<ion-content>\n        <div class=\"inputDiv\">\n                <ion-item class=\"inoItem headerNameCss\" style=\"margin-top:5%\">\n                        <ion-grid fixed>\n                                <ion-row>\n                                        <ion-col size=\"10\">\n                                                <ion-label position=\"floating\"\n                                                        [ngClass]=\"{'redlabel' : showNameErrorMsg == true, 'blacklabel' : showNameErrorMsg == false}\">\n                                                        Name\n                                                </ion-label>\n                                                <ion-input type=\"text\" name=\"first_name\" [(ngModel)]=\"first_name\"\n                                                        (ionChange)=\"employeeNameValidator()\" required\n                                                        pattern=\"[a-zA-Z0-9\\s]{1,}\"></ion-input>\n                                        </ion-col>\n                                        <ion-col size=\"2\" *ngIf=\"showNameErrorMsg\">\n                                                <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n                                                </ion-img>\n                                        </ion-col>\n                                </ion-row>\n                        </ion-grid>\n                </ion-item>\n                <ion-row>\n                        <ion-col size=\"10\">\n                                <p class=\"errorMsg\" *ngIf=\"showNameErrorMsg\">{{nameErrorMsg}}</p>\n                        </ion-col>\n                </ion-row>\n\n                <ion-item class=\"inoItem headerNameCss\" style=\"margin-top:-9px\">\n                        <ion-grid fixed>\n                                <ion-row>\n                                        <ion-col size=\"10\">\n                                                <ion-label position=\"floating\"\n                                                        [ngClass]=\"{'redlabel' : showDesignationErrorMsg == true, 'blacklabel' : showDesignationErrorMsg == false}\">\n                                                        Designation\n                                                </ion-label>\n                                                <ion-input type=\"text\" name=\"designation\" [(ngModel)]=\"designation\"\n                                                        (ionChange)=\"employeeDesignationValidator()\" required\n                                                        pattern=\"[a-zA-Z0-9\\s]{1,}\">\n                                                </ion-input>\n                                        </ion-col>\n                                        <ion-col size=\"2\" *ngIf=\"showDesignationErrorMsg\">\n                                                <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n                                                </ion-img>\n                                        </ion-col>\n                                </ion-row>\n                        </ion-grid>\n                </ion-item>\n                <ion-row>\n                        <ion-col size=\"10\">\n                                <p class=\"errorMsg\" *ngIf=\"showDesignationErrorMsg\">{{designationErrorMsg}}</p>\n                        </ion-col>\n                </ion-row>\n\n\n                <ion-item class=\"inoItem headerNameCss\" style=\"margin-top:-9px\">\n                        <ion-grid fixed>\n                                <ion-row>\n                                        <ion-col size=\"10\">\n                                                <ion-label position=\"floating\"\n                                                        [ngClass]=\"{'redlabel' : showEmailErrorMsg == true, 'blacklabel' : showEmailErrorMsg == false}\">\n                                                        Email\n                                                </ion-label>\n                                                <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"email\"\n                                                        (ionChange)=\"employeeEmailValidator()\" required\n                                                        pattern=\"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,}$\">\n                                                </ion-input>\n                                        </ion-col>\n                                        <ion-col size=\"2\" *ngIf=\"showEmailErrorMsg\">\n                                                <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n                                                </ion-img>\n                                        </ion-col>\n                                </ion-row>\n                        </ion-grid>\n                </ion-item>\n                <ion-row>\n                        <ion-col size=\"10\">\n                                <p class=\"errorMsg\" *ngIf=\"showEmailErrorMsg\">{{emailErrorMsg}}</p>\n                        </ion-col>\n                </ion-row>\n\n                <ion-item class=\"inoItem headerNameCss\" style=\"margin-top:-9px\">\n                        <ion-grid fixed>\n                                <ion-row>\n                                        <ion-col size=\"10\">\n                                                <ion-label position=\"floating\"\n                                                        [ngClass]=\"{'redlabel' : showAltEmailErrorMsg == true, 'blacklabel' : showAltEmailErrorMsg == false}\">\n                                                        Alternate Email (Optional)\n                                                </ion-label>\n                                                <ion-input type=\"email\" name=\"business_email\"\n                                                        [(ngModel)]=\"business_email\"\n                                                        (ionChange)=\"employeeAltEmailValidator()\">\n                                                </ion-input>\n                                        </ion-col>\n                                        <ion-col size=\"2\" *ngIf=\"showAltEmailErrorMsg\">\n                                                <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n                                                </ion-img>\n                                        </ion-col>\n                                </ion-row>\n                        </ion-grid>\n                </ion-item>\n                <ion-row>\n                        <ion-col size=\"10\">\n                                <p class=\"errorMsg\" *ngIf=\"showAltEmailErrorMsg\">{{altEmailErrorMsg}}</p>\n                        </ion-col>\n                </ion-row>\n\n                <ion-item class=\"inoItem headerNameCss\">\n                        <ion-grid fixed>\n                                <ion-row>\n                                        <ion-col size=\"10\">\n                                                <ion-label position=\"floating\"\n                                                        [ngClass]=\"{'redlabel' : showPhoneErrorMsg == true, 'blacklabel' : showPhoneErrorMsg == false}\">\n                                                        Phone (Optional)\n                                                </ion-label>\n                                                <ion-input type=\"number\" name=\"phone\" [(ngModel)]=\"phone\"></ion-input>\n                                        </ion-col>\n                                        <ion-col size=\"2\" *ngIf=\"showPhoneErrorMsg\">\n                                                <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n                                                </ion-img>\n                                        </ion-col>\n                                </ion-row>\n                        </ion-grid>\n                </ion-item>\n                <ion-row>\n                        <ion-col size=\"10\">\n                                <p class=\"errorMsg\" *ngIf=\"showPhoneErrorMsg\">{{phoneErrorMsg}}</p>\n                        </ion-col>\n                </ion-row>\n\n\n\n                <ion-item class=\"inoItem headerNameCss\">\n                        <ion-grid fixed>\n                                <ion-row>\n                                        <ion-col size=\"10\">\n                                                <ion-label position=\"floating\"\n                                                        [ngClass]=\"{'redlabel' : showMobileErrorMsg == true, 'blacklabel' : showMobileErrorMsg == false}\">\n                                                        Mobile\n                                                </ion-label>\n                                                <ion-input type=\"number\" name=\"mobile\" [(ngModel)]=\"mobile\"\n                                                        (ionChange)=\"employeeMobileValidator()\" required\n                                                        pattern=\"^[0-9]{10}$\"></ion-input>\n                                        </ion-col>\n                                        <ion-col size=\"2\" *ngIf=\"showMobileErrorMsg\">\n                                                <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n                                                </ion-img>\n                                        </ion-col>\n                                </ion-row>\n                        </ion-grid>\n                </ion-item>\n                <ion-row>\n                        <ion-col size=\"10\">\n                                <p class=\"errorMsg\" *ngIf=\"showMobileErrorMsg\">{{mobileErrorMsg}}</p>\n                        </ion-col>\n                </ion-row>\n\n\n                <ion-item class=\"inoItem headerNameCss\">\n                        <ion-grid fixed>\n                                <ion-row>\n                                        <ion-col size=\"10\">\n                                                <ion-label position=\"floating\" style=\"\n                margin-top:-9px\" [ngClass]=\"{'redlabel' :\n                showAddressErrorMsg==true, 'blacklabel' :\n                showAddressErrorMsg==false}\">\n                                                        Address\n                                                </ion-label>\n                                                <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"address\"\n                                                        (ionChange)=\"employeeAddressValidator()\" required\n                                                        pattern=\".*[^ ].*\">\n                                                </ion-input>\n                                        </ion-col>\n                                        <ion-col size=\"2\" *ngIf=\"showAddressErrorMsg\">\n                                                <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n                                                </ion-img>\n                                        </ion-col>\n                                </ion-row>\n                        </ion-grid>\n                </ion-item>\n                <ion-row>\n                        <ion-col size=\"10\">\n                                <p class=\"errorMsg\" *ngIf=\"showAddressErrorMsg\">{{addressErrorMsg}}</p>\n                        </ion-col>\n                </ion-row>\n                <ion-label class=\"headerNameCss\"\n                        [ngClass]=\"{'redlabel' : isCountrySelected == true, 'blacklabel' : isCountrySelected == false}\">\n                        Country:</ion-label>\n                <ion-select class=\"ionSelectBorder headerNameCss\" (ionChange)=\"selectedCountryValue($event)\"\n                        placeholder=\"Select Country\">\n                        <ion-select-option *ngFor=\"let item of countryArrayFromLocalStorage;\"\n                                [selected]=\"item.id == country\" [value]=\"item\">\n                                {{item.name}}</ion-select-option>\n                </ion-select>\n                <br>\n                <ion-label *ngIf=\"selectCountry\" style=\"color: red\">Please select Country</ion-label>\n\n                <div *ngIf=\"enableStateField == false\">\n\n                        <br>\n                        <ion-label class=\"headerNameCss\"\n                                [ngClass]=\"{'redlabel' : isStateSelected == true, 'blacklabel' : isStateSelected == false}\">\n                                State:\n                        </ion-label>\n                        <ion-select class=\"ionSelectBorder headerNameCss\" (ionChange)=\"selectedStatesValue($event)\"\n                                placeholder=\"Select State\">\n                                <ion-select-option *ngFor=\"let item of cityAndStateArrayFromLocalStorage;\"\n                                        [selected]=\"item.id == state_id\" [value]=\"item\">\n                                        {{item.name}}</ion-select-option>\n                        </ion-select>\n                        <br>\n                        <ion-label *ngIf=\"selectState\" style=\"color: red\">Please select State</ion-label>\n\n                </div>\n                <div *ngIf=\"enableCityField == false\">\n                        <br>\n                        <ion-label class=\"headerNameCss\"\n                                [ngClass]=\"{'redlabel' : isCitySelected == true, 'blacklabel' : isCitySelected == false}\">\n                                City:\n                        </ion-label>\n                        <ion-select class=\"ionSelectBorder headerNameCss\" (ionChange)=\"selectedCityValue($event)\"\n                                placeholder=\"Select City\">\n                                <ion-select-option *ngFor=\"let item of cityNameArray;\" [selected]=\"item.id == city\"\n                                        [value]=\"item\">\n                                        {{item.name}}</ion-select-option>\n                        </ion-select>\n                        <br>\n                        <ion-label *ngIf=\"selectCity\" style=\"color: red\">Please select City</ion-label>\n                </div>\n\n                <ion-item class=\"inoItem headerNameCss\">\n                        <ion-grid fixed>\n                                <ion-row>\n                                        <ion-col size=\"10\">\n                                                <ion-label position=\"floating\"\n                                                        [ngClass]=\"{'redlabel' : showZipcodeErrorMsg == true, 'blacklabel' : showZipcodeErrorMsg == false}\">\n                                                        ZIP / PIN Code\n                                                </ion-label>\n                                                <ion-input type=\"number\" name=\"zip_code\" [(ngModel)]=\"zip_code\"\n                                                        (ionChange)=\"employeeZipcodeValidator()\" required\n                                                        pattern=\"[0-9]{6,}\">\n                                                </ion-input>\n                                        </ion-col>\n                                        <ion-col size=\"2\" *ngIf=\"showZipcodeErrorMsg\">\n                                                <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n                                                </ion-img>\n                                        </ion-col>\n                                </ion-row>\n                        </ion-grid>\n                </ion-item>\n                <ion-row>\n                        <ion-col size=\"10\">\n                                <p class=\"errorMsg\" *ngIf=\"showZipcodeErrorMsg\">{{zipcodeErrorMsg}}</p>\n                        </ion-col>\n                </ion-row>\n\n        </div>\n\n        <div class=\"saveButtonPadding\">\n                <button class=\"buttonfont\" (click)=\"updateEmployerContactDetail()\">SAVE</button>\n        </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/updateemployeecontactinfo/updateemployeecontactinfo.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/updateemployeecontactinfo/updateemployeecontactinfo.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floatingcss {\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n  font-size: 14px; }\n\n.labelcss {\n  margin-top: 5%;\n  width: 90%;\n  margin-left: 10%;\n  margin-right: 10%;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC91cGRhdGVlbXBsb3llZWNvbnRhY3RpbmZvL3VwZGF0ZWVtcGxveWVlY29udGFjdGluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBYyxFQUFBOztBQUdsQjtFQUNJLGNBQWE7RUFDYixVQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91cGRhdGVlbXBsb3llZWNvbnRhY3RpbmZvL3VwZGF0ZWVtcGxveWVlY29udGFjdGluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb2F0aW5nY3Nze1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBmb250LXNpemU6MTRweDtcbn1cblxuLmxhYmVsY3Nze1xuICAgIG1hcmdpbi10b3A6NSU7XG4gICAgd2lkdGg6OTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgZm9udC1zaXplOjE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/updateemployeecontactinfo/updateemployeecontactinfo.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/updateemployeecontactinfo/updateemployeecontactinfo.page.ts ***!
  \*****************************************************************************/
/*! exports provided: UpdateemployeecontactinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateemployeecontactinfoPage", function() { return UpdateemployeecontactinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var UpdateemployeecontactinfoPage = /** @class */ (function () {
    function UpdateemployeecontactinfoPage(router, dataServices, alertCtrl, loadingController, activatedRoute) {
        this.router = router;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.showNameErrorMsg = false;
        this.showDesignationErrorMsg = false;
        this.showMobileErrorMsg = false;
        this.showAddressErrorMsg = false;
        this.showEmailErrorMsg = false;
        this.showZipcodeErrorMsg = false;
        this.showAltEmailErrorMsg = false;
        this.cityNameArray = [];
        this.isCountrySelected = false;
        this.isStateSelected = false;
        this.isCitySelected = false;
        this.showPhoneErrorMsg = false;
        this.selectCountry = false;
        this.selectState = false;
        this.selectCity = false;
        this.enableStateField = true;
        this.enableCityField = true;
        //Temp var
        this.tempState_id = "";
        this.tempCity_id = "";
        this.users_id = localStorage.getItem('users_id');
        this.countryArray = localStorage.getItem("countryArray");
        var contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
        this.dataArray = JSON.parse(contactInfo);
        this.first_name = this.dataArray.first_name;
        this.designation = this.dataArray.designation;
        this.email = this.dataArray.email;
        this.phone = this.dataArray.phone;
        this.mobile = this.dataArray.mobile;
        this.address = this.dataArray.address;
        this.zip_code = this.dataArray.zip_code;
        this.country = this.dataArray.country;
        this.city = this.dataArray.city;
        this.state_id = this.dataArray.state;
        this.business_email = this.dataArray.business_email;
        //temp var value
        this.tempState_id = this.dataArray.state;
        this.tempCity_id = this.dataArray.city;
        if (this.country != "0") {
            this.checkForEnableState();
            this.stateAndCityArray = localStorage.getItem("ddl_list");
        }
        if (this.state_id != "0") {
            this.checkForEnableCity();
        }
        if ((this.countryArray != '' || this.countryArray != null || this.countryArray != undefined) &&
            (this.stateAndCityArray != '' || this.stateAndCityArray != null || this.stateAndCityArray != undefined)) {
            this.setDefaultCity(this.countryArray, this.stateAndCityArray);
        }
    }
    UpdateemployeecontactinfoPage.prototype.getDDLAPI = function (country) {
        var _this = this;
        this.dataServices.getDDLAPI(country).then(function (result) {
            console.log(result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.cityAndStateArrayFromLocalStorage = [];
                localStorage.setItem("stateAndCityArray", JSON.stringify(_this.resultData));
                _this.country = country;
                _this.isCountrySelected = false;
                _this.cityAndStateArrayFromLocalStorage = _this.resultData.ddl_list.state_list;
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function for showing selected value city.
    UpdateemployeecontactinfoPage.prototype.setDefaultCity = function (countryArray, stateAndCityArray) {
        this.countryArrayFromLocalStorage = JSON.parse(countryArray).country_list;
        if (this.state_id != 0) {
            this.cityAndStateArrayFromLocalStorage = JSON.parse(stateAndCityArray).ddl_list.state_list;
            for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
                if (this.cityAndStateArrayFromLocalStorage[i].id == this.state_id) {
                    this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
                }
            }
        }
    }; //setDefaultCity Ends Here;
    UpdateemployeecontactinfoPage.prototype.ngOnInit = function () {
    };
    UpdateemployeecontactinfoPage.prototype.closePage = function () {
        this.router.navigate(['/employerprofile']);
    };
    UpdateemployeecontactinfoPage.prototype.selectedCountryValue = function (item) {
        this.state_id = 0;
        this.city = 0;
        this.country = item.detail.value.id;
        this.getDDLAPI(item.detail.value.id);
        if (this.country != undefined) {
            this.state_id = 0;
            this.city = 0;
            this.isCountrySelected == false;
            this.checkForEnableState();
        }
        else {
            this.isCountrySelected == true;
        }
        if (this.country == "0") {
            this.isCountrySelected = true;
            this.selectState = true;
        }
        else {
            this.selectCountry = false;
            this.isCountrySelected = false;
            this.isStateSelected = false;
            this.selectState = false;
        }
    };
    UpdateemployeecontactinfoPage.prototype.selectedStatesValue = function (item) {
        this.city = null;
        this.state_id = null;
        this.state_id = item.detail.value.id;
        if (this.tempState_id == this.state_id) {
            this.city = this.tempCity_id;
        }
        if (this.state_id == "0") {
            this.isStateSelected = true;
            this.selectState = true;
            this.selectCity = true;
            this.isCitySelected = true;
        }
        else {
            this.isStateSelected = false;
            this.selectState = false;
            this.selectCity = false;
            this.isCitySelected = false;
            this.checkForEnableCity();
        }
        for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
            if (this.cityAndStateArrayFromLocalStorage[i].id == this.state_id) {
                this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
            }
        }
    };
    UpdateemployeecontactinfoPage.prototype.selectedCityValue = function (item) {
        this.city = item.detail.value.id;
        this.tempCity_id = this.city;
        if (this.city == "0") {
            this.isCitySelected = true;
            this.selectCity = true;
        }
        else {
            this.isCitySelected = false;
            this.selectCity = false;
        }
    };
    UpdateemployeecontactinfoPage.prototype.presentAlert = function (title, message) {
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
    UpdateemployeecontactinfoPage.prototype.employeeNameValidator = function () {
        if (this.first_name == '' || this.first_name == undefined || this.first_name == null) {
            this.showNameErrorMsg = true;
            this.nameErrorMsg = "Please enter name";
        }
        else {
            this.showNameErrorMsg = false;
        }
    };
    UpdateemployeecontactinfoPage.prototype.checkForEnableState = function () {
        if (this.country != "0") {
            this.enableStateField = false;
        }
        else {
            this.enableStateField = true;
        }
    };
    UpdateemployeecontactinfoPage.prototype.checkForEnableCity = function () {
        if (this.state_id != "0") {
            this.enableCityField = false;
        }
        else {
            this.enableCityField = true;
        }
    };
    UpdateemployeecontactinfoPage.prototype.employeeAltEmailValidator = function () {
        if (this.business_email == '' || this.business_email == undefined || this.business_email == null) {
            this.showAltEmailErrorMsg = false;
        }
        else {
            if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(this.business_email) == false) {
                this.showAltEmailErrorMsg = true;
                this.altEmailErrorMsg = 'Please enter valid email address';
            }
            else {
                this.showAltEmailErrorMsg = false;
            }
        }
    };
    UpdateemployeecontactinfoPage.prototype.employeeEmailValidator = function () {
        if (this.email == '' || this.email == undefined || this.email == null) {
            this.showEmailErrorMsg = true;
            this.emailErrorMsg = "Please enter email address";
        }
        else {
            this.showEmailErrorMsg = false;
        }
        if (this.showEmailErrorMsg != true) {
            if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(this.email) == false) {
                this.showEmailErrorMsg = true;
                this.emailErrorMsg = 'Please enter valid email address';
            }
            else {
                this.showEmailErrorMsg = false;
            }
        }
    };
    UpdateemployeecontactinfoPage.prototype.employeeDesignationValidator = function () {
        if (this.designation == '' || this.designation == undefined || this.designation == null) {
            this.showDesignationErrorMsg = true;
            this.designationErrorMsg = "Please enter designation";
        }
        else {
            this.showDesignationErrorMsg = false;
        }
    };
    UpdateemployeecontactinfoPage.prototype.employeeAddressValidator = function () {
        if (this.address == '' || this.address == undefined || this.address == null) {
            this.showAddressErrorMsg = true;
            this.addressErrorMsg = "Please enter address";
        }
        else {
            this.showAddressErrorMsg = false;
        }
    };
    UpdateemployeecontactinfoPage.prototype.employeeMobileValidator = function () {
        if (this.mobile == '' || this.mobile == undefined || this.mobile == null) {
            this.showMobileErrorMsg = true;
            this.mobileErrorMsg = "Please enter mobile no.";
        }
        else {
            this.showMobileErrorMsg = false;
        }
    };
    // employeePhoneValidator() {
    // if (this.phone == '' || this.phone == undefined || this.phone == null) {
    // this.showPhoneErrorMsg = true;
    // this.phoneErrorMsg = 'Please enter valid Phone number'
    // }
    // else
    // {
    // this.showPhoneErrorMsg = false;
    // }
    // }
    UpdateemployeecontactinfoPage.prototype.updateEmployerContactDetail = function () {
        var _this = this;
        if (this.city != null) {
            this.tempState_id = this.state_id;
        }
        if ((this.first_name == '' || this.first_name == null || this.first_name == undefined) &&
            (this.designation == '' || this.designation == null || this.designation == undefined) &&
            (this.address == '' || this.address == null || this.address == undefined) &&
            (this.city == null || this.city == undefined || this.city == "") &&
            (this.state_id == null || this.state_id == undefined || this.state_id == "") &&
            (this.country == null || this.country == undefined || this.country == "") &&
            (this.zip_code == '' || this.zip_code == null || this.zip_code == undefined) &&
            (this.email == '' || this.email == null || this.email == undefined) &&
            (this.mobile == '' || this.mobile == null || this.mobile == undefined)) {
            this.showNameErrorMsg = true;
            this.nameErrorMsg = "Please enter name";
            this.showDesignationErrorMsg = true;
            this.designationErrorMsg = "Please enter designation";
            this.showEmailErrorMsg = true;
            this.emailErrorMsg = "Please enter name";
            this.showMobileErrorMsg = true;
            this.mobileErrorMsg = "Please enter mobile number";
            this.showAddressErrorMsg = true;
            this.addressErrorMsg = "Please enter address";
            this.isCountrySelected = true;
            this.isStateSelected = true;
            this.isCitySelected = true;
            this.showZipcodeErrorMsg = true;
            this.zipcodeErrorMsg = "Please enter zip code";
        }
        else {
            this.showEmailErrorMsg = false;
            this.showNameErrorMsg = false;
            this.showDesignationErrorMsg = false;
            this.showMobileErrorMsg = false;
            this.showAddressErrorMsg = false;
            this.showZipcodeErrorMsg = false;
            this.isCountrySelected = false;
            this.isStateSelected = false;
            this.isCitySelected = false;
        }
        this.employeeMobileValidator();
        this.employeeDesignationValidator();
        this.employeeNameValidator();
        this.employeeAddressValidator();
        this.employeeEmailValidator();
        this.employeeZipcodeValidator();
        if (this.country == "0") {
            this.isCountrySelected = true;
            this.selectCountry = true;
        }
        else {
            this.isCountrySelected = false;
            this.selectCountry = false;
        }
        if (this.state_id == "0") {
            this.isStateSelected = true;
            this.selectState = true;
        }
        else {
            this.isStateSelected = false;
            this.selectState = false;
        }
        if (this.city == "0" || this.city == null) {
            this.isCitySelected = true;
            this.selectCity = true;
        }
        else {
            this.isCitySelected = false;
            this.selectCity = false;
        }
        if (this.showNameErrorMsg == false &&
            this.showDesignationErrorMsg == false &&
            this.showEmailErrorMsg == false &&
            this.showMobileErrorMsg == false &&
            this.showAddressErrorMsg == false &&
            this.isCountrySelected == false &&
            this.isStateSelected == false &&
            this.showZipcodeErrorMsg == false &&
            this.isCitySelected == false) {
            this.presentLoading();
            //employer contact info API.
            this.dataServices.updateEmployeeContactInfoAPI(this.first_name, this.designation, this.business_email, this.phone, this.mobile, this.address, this.city, this.state_id, this.country, this.zip_code, this.email, this.users_id).then(function (res) {
                _this.existingDataResponse = res;
                console.log('responsre::: ' + _this.existingDataResponse);
                if (_this.existingDataResponse.status == 1) {
                    console.log('Update Employer Information :: ' + _this.existingDataResponse);
                    _this.presentAlert(_this.existingDataResponse.message, '');
                    localStorage.setItem('email', _this.email);
                    localStorage.setItem('busciness_email', _this.business_email);
                    // this.closePage()
                    _this.loadingController.dismiss();
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert(_this.existingDataResponse.message, '');
                }
            }, function (error) {
                alert(error);
            });
        }
    };
    //Display loader 
    UpdateemployeecontactinfoPage.prototype.presentLoading = function () {
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
    UpdateemployeecontactinfoPage.prototype.employeeZipcodeValidator = function () {
        if (this.zip_code == '' || this.zip_code == undefined || this.zip_code == null) {
            this.showZipcodeErrorMsg = true;
            this.zipcodeErrorMsg = "Please enter zip code";
        }
        else {
            this.showZipcodeErrorMsg = false;
        }
        if (this.zip_code != undefined) {
            if (this.zip_code.toString().length != 6) {
                this.showZipcodeErrorMsg = true;
                this.zipcodeErrorMsg = 'Please enter valid zip code';
            }
            else {
                this.showZipcodeErrorMsg = false;
            }
        }
    };
    UpdateemployeecontactinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateemployeecontactinfo',
            template: __webpack_require__(/*! ./updateemployeecontactinfo.page.html */ "./src/app/updateemployeecontactinfo/updateemployeecontactinfo.page.html"),
            styles: [__webpack_require__(/*! ./updateemployeecontactinfo.page.scss */ "./src/app/updateemployeecontactinfo/updateemployeecontactinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UpdateemployeecontactinfoPage);
    return UpdateemployeecontactinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=updateemployeecontactinfo-updateemployeecontactinfo-module.js.map