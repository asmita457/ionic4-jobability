(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateserviceproviderservicelocation-updateserviceproviderservicelocation-module"],{

/***/ "./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UpdateserviceproviderservicelocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateserviceproviderservicelocationPageModule", function() { return UpdateserviceproviderservicelocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateserviceproviderservicelocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateserviceproviderservicelocation.page */ "./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _updateserviceproviderservicelocation_page__WEBPACK_IMPORTED_MODULE_6__["UpdateserviceproviderservicelocationPage"]
    }
];
var UpdateserviceproviderservicelocationPageModule = /** @class */ (function () {
    function UpdateserviceproviderservicelocationPageModule() {
    }
    UpdateserviceproviderservicelocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updateserviceproviderservicelocation_page__WEBPACK_IMPORTED_MODULE_6__["UpdateserviceproviderservicelocationPage"]]
        })
    ], UpdateserviceproviderservicelocationPageModule);
    return UpdateserviceproviderservicelocationPageModule;
}());



/***/ }),

/***/ "./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.page.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\"color: #2b0c43;\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Edit Service Location</ion-title>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n  <ion-card class=\"cardMargins boxShadow\">\n    <ion-card-content>\n      <div class=\"formPadding\">\n        <form [formGroup]=\"updateServiceLocationForm\"\n          (ngSubmit)=\"updateServiceLocation(updateServiceLocationForm.value)\">\n          <mat-form-field class=\"inputFields\">\n            <mat-label>Country</mat-label>\n            <mat-select formControlName=\"country\" [errorStateMatcher]=\"esMatcher\"\n              (selectionChange)=\"selectedCountryValue($event.value)\" [(ngModel)]=\"editServiceLocationDetails.Country\">\n              <mat-option *ngFor=\"let item of countryArray\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"updateServiceLocationForm.controls.country.errors?.required\">Country is\n                required.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <!-- <div *ngIf=\"showPreferredStateCity\"> -->\n          <mat-form-field class=\"inputFields\">\n            <mat-label> Preferred State/City</mat-label>\n            <mat-select formControlName=\"stateCity\" [errorStateMatcher]=\"esMatcher\"\n              (selectionChange)=\"selectedStateAndCityValue($event.value)\" [(ngModel)]=\"stateAndCityIds\" multiple>\n              <mat-option *ngFor=\"let item of stateAndCityArray\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"updateServiceLocationForm.controls.stateCity.errors?.required\">Please select at least one\n                preferred state/city.</span>\n            </mat-error>\n          </mat-form-field>\n          <!-- </div> -->\n          <br>\n          <button type=\"submit\" class=\"buttonfont selector\">SAVE</button>\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <!-- <div style=\"margin-top:10%;color:#2b0c43;\" class=\"inputDiv\">\n    <ion-label class=\"labelclass\"\n      [ngClass]=\"{'redlabel' : isCountrySelected == true, 'blacklabel' : isCountrySelected == false}\">Country\n    </ion-label>\n    <ion-select class=\"ionSelectBorder\" (ionChange)=\"selectedCountryValue($event)\" [(ngModel)]='preselectedCountry'\n      placeholder=\"Select Country\">\n      <ion-select-option *ngFor=\"let item of countryList;\" [value]=\"item\">\n        {{item}}</ion-select-option>\n    </ion-select>\n\n    <div *ngIf=\"showPreferredStateCity\">\n      <ion-label class=\"labelclass\"\n        [ngClass]=\"{'redlabel' : isPreferredStateCitySelected == true, 'blacklabel' : isPreferredStateCitySelected == false}\"\n        style=\"color:#2b0c43;\">\n        Preferred\n        State/City\n      </ion-label>\n      <ion-select class=\"ionSelectBorder\" [(ngModel)]=\"option\" (ionChange)=\"selectedStateCityValue($event)\"\n        placeholder=\"Select Preferred State/City\" multiple=\"true\">\n        <ion-select-option *ngFor=\"let item of stateCityList;\" [value]=\"item\">\n          {{item}}</ion-select-option>\n      </ion-select>\n    </div>\n  </div>\n\n  <div class=\"saveButtonPadding\">\n    <button class=\"buttonfont\" (click)=\"updateServiceLocation()\">SAVE</button>\n  </div> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.page.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXNlcnZpY2Vwcm92aWRlcnNlcnZpY2Vsb2NhdGlvbi91cGRhdGVzZXJ2aWNlcHJvdmlkZXJzZXJ2aWNlbG9jYXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: UpdateserviceproviderservicelocationPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateserviceproviderservicelocationPage", function() { return UpdateserviceproviderservicelocationPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var UpdateserviceproviderservicelocationPage = /** @class */ (function () {
    function UpdateserviceproviderservicelocationPage(location, dataServices, loadingController, alertCtrl, activatedRoute, formBuilder) {
        this.location = location;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.stateAndCityIds = [];
        this.editServiceLocationDetails = [];
    }
    UpdateserviceproviderservicelocationPage.prototype.ngOnInit = function () {
        this.buildForm();
        this.onPageLoad();
    };
    UpdateserviceproviderservicelocationPage.prototype.buildForm = function () {
        this.updateServiceLocationForm = this.formBuilder.group({
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            stateCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    UpdateserviceproviderservicelocationPage.prototype.onPageLoad = function () {
        this.editServiceLocationDetails = JSON.parse((this.activatedRoute.snapshot.paramMap.get('item')));
        this.getCountry();
        this.getStateCityListInformation(this.editServiceLocationDetails.Country);
        for (var i = 0; i < this.editServiceLocationDetails.Preferred_StateCity.length; i++) {
            this.stateAndCityIds.push(this.editServiceLocationDetails.Preferred_StateCity[i].id);
        }
    };
    // Forms declaration
    UpdateserviceproviderservicelocationPage.prototype.selectedStateAndCityValue = function (item) {
        if (item.length > 3) {
            item = [];
            this.stateAndCityIds = [];
            this.presentAlert('You should not select Preferred State/City more than 3', '', 'success');
        }
    };
    UpdateserviceproviderservicelocationPage.prototype.selectedCountryValue = function (countryId) {
        this.editServiceLocationDetails.Country = '';
        this.stateAndCityIds = [];
        this.stateAndCityArray = [];
        this.getCountry();
        this.getStateCityListInformation(countryId);
    };
    UpdateserviceproviderservicelocationPage.prototype.getCountry = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getCountryArrayAPI().then(function (result) {
            if (result.status == 1) {
                _this.countryArray = result.country_list;
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    UpdateserviceproviderservicelocationPage.prototype.getStateCityListInformation = function (countryId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.getStateCountryList(countryId).then(function (result) {
            if (result.status == 1) {
                _this.stateAndCityArray = result.state_city_list;
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in updateServiceProviderServiceLocation: ' + JSON.stringify(error));
        });
    };
    UpdateserviceproviderservicelocationPage.prototype.closePage = function () {
        this.location.back();
    };
    UpdateserviceproviderservicelocationPage.prototype.updateServiceLocation = function (formDetails) {
        var _this = this;
        if (this.updateServiceLocationForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.showErrorIcon = false;
            var post = {
                "id": this.editServiceLocationDetails.Service_id,
                "country_id": formDetails.country,
                "state_city_id": formDetails.stateCity
            };
            this.presentLoading();
            this.dataServices.updateServicesLocation(post).then(function (result) {
                if (result.status == 1) {
                    _this.loadingController.dismiss();
                    _this.presentAlert(result.message, '', '');
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert(result.message, '', '');
                }
            }, function (error) {
                _this.loadingController.dismiss();
            });
        }
    };
    UpdateserviceproviderservicelocationPage.prototype.presentLoading = function () {
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
                        setTimeout(function () {
                            loading.dismiss();
                        }, 800);
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateserviceproviderservicelocationPage.prototype.presentAlert = function (title, message, status) {
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
                                        if (status != 'success') {
                                            _this.closePage();
                                        }
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
    };
    UpdateserviceproviderservicelocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateserviceproviderservicelocation',
            template: __webpack_require__(/*! ./updateserviceproviderservicelocation.page.html */ "./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.page.html"),
            styles: [__webpack_require__(/*! ./updateserviceproviderservicelocation.page.scss */ "./src/app/updateserviceproviderservicelocation/updateserviceproviderservicelocation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], UpdateserviceproviderservicelocationPage);
    return UpdateserviceproviderservicelocationPage;
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
//# sourceMappingURL=updateserviceproviderservicelocation-updateserviceproviderservicelocation-module.js.map