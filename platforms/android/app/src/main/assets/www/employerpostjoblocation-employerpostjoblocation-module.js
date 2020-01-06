(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employerpostjoblocation-employerpostjoblocation-module"],{

/***/ "./src/app/employerpostjoblocation/employerpostjoblocation.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/employerpostjoblocation/employerpostjoblocation.module.ts ***!
  \***************************************************************************/
/*! exports provided: EmployerpostjoblocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerpostjoblocationPageModule", function() { return EmployerpostjoblocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employerpostjoblocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employerpostjoblocation.page */ "./src/app/employerpostjoblocation/employerpostjoblocation.page.ts");







var routes = [
    {
        path: '',
        component: _employerpostjoblocation_page__WEBPACK_IMPORTED_MODULE_6__["EmployerpostjoblocationPage"]
    }
];
var EmployerpostjoblocationPageModule = /** @class */ (function () {
    function EmployerpostjoblocationPageModule() {
    }
    EmployerpostjoblocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employerpostjoblocation_page__WEBPACK_IMPORTED_MODULE_6__["EmployerpostjoblocationPage"]]
        })
    ], EmployerpostjoblocationPageModule);
    return EmployerpostjoblocationPageModule;
}());



/***/ }),

/***/ "./src/app/employerpostjoblocation/employerpostjoblocation.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/employerpostjoblocation/employerpostjoblocation.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n    <ion-row>\n        <ion-col size=\"2\" (click)=\"goBack()\">\n            <ion-img src=\"../../assets/img/backnavigation.png\" style=\"padding: 20% 25% 25% 25%;\">\n            </ion-img>\n          </ion-col>\n      <ion-col size=\"10\">\n        <ion-title class=\"titlecss\" style=\"margin-top:4px\">Post Job</ion-title>\n      </ion-col>\n    </ion-row>\n  \n</ion-toolbar>\n<ion-content>\n  <h5 align=\"center\" style=\"color:#2b0c43\">Job Location</h5>\n\n  <div class=\"inputDiv\" style=\"margin-top:15%\">\n\n    <ion-label class=\"headerNameCss\"\n      [ngClass]=\"{'redlabel' : isCountrySelected == true, 'blacklabel' : isCountrySelected == false}\">\n      Job in Country:</ion-label>\n    <ion-select class=\"ionSelectBorder headerNameCss\" (ionChange)=\"selectedCountryValue($event)\"\n      placeholder=\"Select Country\" [(ngModel)]=\"countryID\">\n      <ion-select-option *ngFor=\"let item of countryArrayFromLocalStorage;\"\n        [value]=\"item.id\">{{item.name}}</ion-select-option>\n    </ion-select>\n    <br>\n    <ion-label *ngIf=\"selectCountry\" style=\"color: red\">Please select Country</ion-label>\n\n    <div *ngIf=\"enableStateCityField == false\">\n      <ion-label class=\"headerNameCss\"\n        [ngClass]=\"{'redlabel' : isStateCitySelected == true, 'blacklabel' : isStateCitySelected == false}\">\n        Job State / City:</ion-label>\n      <br>\n      <ion-select class=\"ionSelectBorder ionselectcss\"  [(ngModel)]=\"stateCityId\"  multiple=\"true\" (ionChange)=\"selectedStateCityValue($event)\" placeholder=\"Select State / City\">\n        <ion-select-option *ngFor=\"let item of cityAndStateArrayFromLocalStorage;\"  [value]=\"item.id\">{{item.name}}</ion-select-option>\n      </ion-select>\n      <br>\n      <ion-label *ngIf=\"selectCountry\" style=\"color: red\">Please select State / City</ion-label>\n  </div>\n\n  </div>\n  <div class=\"saveButtonPadding bottomposition\">\n    <button class=\"buttonfont\" (click)=\"nextPage()\">CONTINUE</button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employerpostjoblocation/employerpostjoblocation.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/employerpostjoblocation/employerpostjoblocation.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVycG9zdGpvYmxvY2F0aW9uL2VtcGxveWVycG9zdGpvYmxvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employerpostjoblocation/employerpostjoblocation.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employerpostjoblocation/employerpostjoblocation.page.ts ***!
  \*************************************************************************/
/*! exports provided: EmployerpostjoblocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerpostjoblocationPage", function() { return EmployerpostjoblocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EmployerpostjoblocationPage = /** @class */ (function () {
    function EmployerpostjoblocationPage(router, activatedRoute, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.isStateCitySelected = false;
        this.isCountrySelected = false;
        this.countryID = "0";
        this.stateCityId = [];
        this.enableStateCityField = true;
        this.selectCountry = false;
        this.selectState = false;
        this.selectCity = false;
        this.disabilityList = [];
        this.countryArrayFromLocalStorage = [];
        // postJobDetailArray = []
        this.postJobLocationArray = [];
        this.countryId = [];
        this.countryName = [];
        this.stateCity_id = [];
        this.stateCity_name = [];
        this.backwardJobLocationFlag = "";
        this.backPostJobLocation = [];
        // onStateCityStatusSelect = false
        this.onCountryStatusSelect = false;
    }
    EmployerpostjoblocationPage.prototype.ngOnInit = function () {
    };
    EmployerpostjoblocationPage.prototype.checkForEnableState = function () {
        if (this.countryID != "0") {
            this.isStateCitySelected = false;
            this.enableStateCityField = false;
        }
        else {
            this.enableStateCityField = true;
        }
    };
    EmployerpostjoblocationPage.prototype.getStateCityDDLAPI = function (countryID) {
        var _this = this;
        this.uacc_id = localStorage.getItem('users_id');
        this.dataServices.getStateAndCityDDLAPI(this.uacc_id, countryID).then(function (result) {
            console.log(result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.cityAndStateArrayFromLocalStorage = [];
                console.log('combine response :: ', _this.resultData.state_city_list);
                localStorage.setItem("stateAndCityArray", JSON.stringify(_this.resultData.state_city_list));
                // this.countryID = CountryID;
                _this.cityAndStateArrayFromLocalStorage = _this.resultData.state_city_list;
                if (_this.backwardJobLocationFlag == "1") {
                    _this.stateCityId = _this.backPostJobLocation[0].stateCityId;
                }
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployerpostjoblocationPage.prototype.goBack = function () {
        localStorage.setItem('backwardJobDetailFlag', '1');
        // this.router.navigate(['/employerpostjobdetails', {currencyPreselection : "INR" }]);
        this.router.navigate(['/employerpostjobdetails']);
    };
    EmployerpostjoblocationPage.prototype.selectedStateCityValue = function (item) {
        var arrayLength = item.detail.value.length;
        this.isStateCitySelected = false;
        if (arrayLength > 3) {
            this.stateCityId = [];
            this.isStateCitySelected = true;
            item.detail.value.length = 0;
            item.detail.value = [];
            this.presentAlert('', 'You should not select Preferred State/City more than 3');
            return;
        }
        else {
            console.log('Selected State_City:', item.detail.value);
            for (var i = 0; i < arrayLength; i++) {
                this.stateCityId = [];
                this.stateCityId = item.detail.value;
                // this.stateCityId.push(item.detail.value);
                // this.stateCity_name.push(item.detail.value[i].name)
                // this.onStateCityStatusSelect = false
                this.isStateCitySelected = false;
                console.log("state city id :: ", this.stateCityId);
                return;
            }
        }
    };
    EmployerpostjoblocationPage.prototype.selectedCountryValue = function (item) {
        this.countryID = item.detail.value;
        this.stateCityId = [];
        console.log("Country id :: ", this.countryID);
        this.getStateCityDDLAPI(this.countryID);
        if (this.countryID != undefined) {
            // this.stateCityId = 0
            this.isCountrySelected == false;
            this.presentLoading();
            this.checkForEnableState();
        }
        else {
            this.isCountrySelected == true;
        }
        if (this.countryID == "0") {
            this.isCountrySelected = true;
            // this.selectState = true
        }
        else {
            this.selectCountry = false;
            this.isCountrySelected = false;
            // this.isStateCitySelected = false
            // this.selectState = false
        }
    };
    EmployerpostjoblocationPage.prototype.presentLoading = function () {
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
                        setTimeout(function () {
                            loading.dismiss();
                        }, 6000);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    EmployerpostjoblocationPage.prototype.ionViewWillEnter = function () {
        // this.enableStateCityField = true
        this.postJobLocationArray = [];
        // this.postJobDetailArray = []
        this.backwardJobLocationFlag = localStorage.getItem('backwardJobLocationFlag');
        if (this.backwardJobLocationFlag == "1") {
            this.presentLoading();
            this.stateCityId = [];
            this.backPostJobLocation = JSON.parse(localStorage.getItem('backPostJobLocation'));
            console.log('post Job Location LocalStorage :', this.backPostJobLocation);
            this.countryID = this.backPostJobLocation[0].countryId;
            this.stateCityId = this.backPostJobLocation[0].stateCityId;
            this.enableStateCityField = false;
        }
        this.DdlResponseArray = JSON.parse(localStorage.getItem('employerDDLResponse'));
        this.disabilityList = this.DdlResponseArray.disability_list;
        this.countryArrayResponse = JSON.parse(localStorage.getItem('countryArray'));
        this.countryArrayFromLocalStorage = this.countryArrayResponse.country_list;
        console.log('countryArray :: ', this.countryArrayFromLocalStorage);
        // const contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
        // this.postJobDetailArray = JSON.parse(contactInfo);
        // console.log("postJobDetailArray :: " + JSON.stringify(this.postJobDetailArray))
        this.getStateCityDDLAPI(this.countryID);
    };
    EmployerpostjoblocationPage.prototype.closePage = function () {
        this.router.navigate(['/dashboardemployer']);
    };
    EmployerpostjoblocationPage.prototype.nextPage = function () {
        if (this.countryID == "0" || this.countryID == undefined || this.countryID == null || this.countryID == "") {
            this.isCountrySelected = true;
            // this.selectState = true
        }
        else {
            this.selectCountry = false;
            this.isCountrySelected = false;
            // this.isStateCitySelected = false
            // this.selectState = false
        }
        var stateCityLength = this.stateCityId.length;
        if (stateCityLength == 0) {
            this.isStateCitySelected = true;
        }
        else {
            this.isStateCitySelected = false;
        }
        // if (this.stateCityId == null || this.stateCityId == undefined  || this.stateCityId == []) {
        //   this.isStateCitySelected = true
        // }
        // else {
        //   this.isStateCitySelected = false
        // }
        if (this.isCountrySelected == false &&
            this.isStateCitySelected == false) {
            this.postJobLocationArray.push({
                countryId: this.countryID,
                stateCityId: this.stateCityId,
            });
            localStorage.setItem('backPostJobLocation', JSON.stringify(this.postJobLocationArray));
            // this.postJobLocationArray = this.postJobLocationArray.concat(this.postJobDetailArray)
            this.router.navigate(['/employerpostjobrequirement', { item: JSON.stringify(this.postJobLocationArray) }]);
        }
    };
    EmployerpostjoblocationPage.prototype.presentAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // this.closePage();
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
    EmployerpostjoblocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employerpostjoblocation',
            template: __webpack_require__(/*! ./employerpostjoblocation.page.html */ "./src/app/employerpostjoblocation/employerpostjoblocation.page.html"),
            styles: [__webpack_require__(/*! ./employerpostjoblocation.page.scss */ "./src/app/employerpostjoblocation/employerpostjoblocation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], EmployerpostjoblocationPage);
    return EmployerpostjoblocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=employerpostjoblocation-employerpostjoblocation-module.js.map