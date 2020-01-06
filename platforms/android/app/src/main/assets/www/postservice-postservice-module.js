(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postservice-postservice-module"],{

/***/ "./src/app/postservice/postservice.module.ts":
/*!***************************************************!*\
  !*** ./src/app/postservice/postservice.module.ts ***!
  \***************************************************/
/*! exports provided: PostservicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostservicePageModule", function() { return PostservicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _postservice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postservice.page */ "./src/app/postservice/postservice.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");









var routes = [
    {
        path: '',
        component: _postservice_page__WEBPACK_IMPORTED_MODULE_6__["PostservicePage"]
    }
];
var PostservicePageModule = /** @class */ (function () {
    function PostservicePageModule() {
    }
    PostservicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_postservice_page__WEBPACK_IMPORTED_MODULE_6__["PostservicePage"]]
        })
    ], PostservicePageModule);
    return PostservicePageModule;
}());



/***/ }),

/***/ "./src/app/postservice/postservice.page.html":
/*!***************************************************!*\
  !*** ./src/app/postservice/postservice.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Post Service</ion-title>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n\n  <div class=\"formPadding\">\n    <form [formGroup]=\"postServiceDetailsForm\" (ngSubmit)=\"postServiceDetails(postServiceDetailsForm.value)\">\n      <mat-label class=\"header\">Service Details</mat-label>\n      <mat-form-field class=\"inputFields\">\n        <input matInput placeholder=\"Service Title\" formControlName=\"serviceTitle\" [errorStateMatcher]=\"esMatcher\"\n          pattern=\"^[a-zA-Z]+[\\-'\\s]?[a-zA-Z ]+$\">\n        <mat-icon matSuffix color=\"warn\"\n          *ngIf=\"(postServiceDetailsForm.controls.serviceTitle.invalid && postServiceDetailsForm.controls.serviceTitle.touched) || (postServiceDetailsForm.controls.serviceTitle.invalid && showErrorIcon && !postServiceDetailsForm.controls.serviceTitle.touched)\">\n          error\n        </mat-icon>\n        <mat-error>\n          <span *ngIf=\"postServiceDetailsForm.controls.serviceTitle.errors?.required\">Service title is required.</span>\n          <span *ngIf=\"postServiceDetailsForm.controls.serviceTitle.errors?.pattern\">Please enter valid service\n            title.</span>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"inputFields\">\n        <mat-label>Category Type</mat-label>\n        <mat-select formControlName=\"serviceoffered\" [errorStateMatcher]=\"esMatcher\" multiple>\n          <mat-option *ngFor=\"let item of Serviceofferedlist\" [value]=\"item.id\">\n            {{item.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <span *ngIf=\"postServiceDetailsForm.controls.serviceoffered.errors?.required\">Category type is\n            required.</span>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"inputFields\">\n        <mat-label>Disability Type</mat-label>\n        <mat-select formControlName=\"disability\" [errorStateMatcher]=\"esMatcher\" multiple>\n          <mat-option *ngFor=\"let item of disabilitylist\" [value]=\"item.id\">\n            {{item.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <span *ngIf=\"postServiceDetailsForm.controls.disability.errors?.required\">Please select at least one\n            disability type.</span>\n        </mat-error>\n      </mat-form-field>\n\n\n      <mat-form-field class=\"inputFields\">\n        <input matInput placeholder=\"Brief\" formControlName=\"brief\" pattern=\".*[^ ].*\">\n        <mat-icon matSuffix color=\"warn\"\n          *ngIf=\"(postServiceDetailsForm.controls.brief.invalid && postServiceDetailsForm.controls.brief.touched) || (postServiceDetailsForm.controls.brief.invalid && showErrorIcon && !postServiceDetailsForm.controls.brief.touched)\">\n          error\n        </mat-icon>\n        <mat-error>\n          <span *ngIf=\"postServiceDetailsForm.controls.brief.errors?.required\">Brief is required.</span>\n          <span *ngIf=\"postServiceDetailsForm.controls.brief.errors?.pattern\">Please enter valid\n            brief.</span>\n        </mat-error>\n      </mat-form-field>\n\n\n      <mat-form-field class=\"inputFields\">\n        <input matInput placeholder=\"Description\" formControlName=\"description\" [errorStateMatcher]=\"esMatcher\"\n          pattern=\".*[^ ].*\">\n        <mat-icon matSuffix color=\"warn\"\n          *ngIf=\"(postServiceDetailsForm.controls.description.invalid && postServiceDetailsForm.controls.description.touched) || (postServiceDetailsForm.controls.description.invalid && showErrorIcon && !postServiceDetailsForm.controls.description.touched)\">\n          error\n        </mat-icon>\n        <mat-error>\n          <span *ngIf=\"postServiceDetailsForm.controls.description.errors?.required\">Description is required.</span>\n          <span *ngIf=\"postServiceDetailsForm.controls.description.errors?.pattern\">Please enter valid\n            description.</span>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-label class=\"header\">Service Location</mat-label>\n      <mat-form-field class=\"inputFields\">\n        <mat-label>Country</mat-label>\n        <mat-select formControlName=\"country\" [errorStateMatcher]=\"esMatcher\"\n          (selectionChange)=\"selectedCountryValue($event.value)\">\n          <mat-option *ngFor=\"let item of countryList\" [value]=\"item.id\">\n            {{item.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <span *ngIf=\"postServiceDetailsForm.controls.country.errors?.required\">Country is\n            required.</span>\n        </mat-error>\n      </mat-form-field>\n\n\n      <mat-form-field class=\"inputFields\">\n        <mat-label> Preferred State/City</mat-label>\n        <mat-select #shoes formControlName=\"preferredStateCity\" [errorStateMatcher]=\"esMatcher\" multiple>\n          <mat-option  #shoe *ngFor=\"let item of stateCityList\" [disabled]=\"selectedCount >= maxCount && !shoe.selected\" (click)=\"updateSelectedCount(shoes.value.length)\" [value]=\"item.id\">\n            {{item.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <span *ngIf=\"postServiceDetailsForm.controls.preferredStateCity.errors?.required\">Preferred state / city is\n            required.</span>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-label class=\"header\">Contact Information</mat-label>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-checkbox formControlName=\"showDetailsToApplicants\"  class=\"checkBoxBorder\" [(ngModel)]=\"showDetailsToApplicants\">\n          </ion-checkbox>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"headerNameCss\">Do not display this contact detail to Applicants.</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <label id=\"status\">Status</label>\n      <mat-radio-group aria-label=\"status\" class=\"radioButtonGroup\" formControlName=\"status\"\n        [(ngModel)]=\"SelectedStatus\">\n        <mat-radio-button class=\"radioButton\" value=\"1\">Active</mat-radio-button>\n        <mat-radio-button class=\"radioButton\" value=\"0\">Inactive</mat-radio-button>\n      </mat-radio-group>\n      <br>\n      <button type=\"submit\" class=\"buttonfont selector\">SAVE</button>\n    </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/postservice/postservice.page.scss":
/*!***************************************************!*\
  !*** ./src/app/postservice/postservice.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-outline {\n  --border-color: gray !important; }\n\n.note {\n  color: gray;\n  text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9wb3N0c2VydmljZS9wb3N0c2VydmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBZSxFQUFBOztBQUVqQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzZXJ2aWNlL3Bvc3RzZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tb3V0bGluZXtcbiAgICAtLWJvcmRlci1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICB9XG4gIC5ub3Rle1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgLy8gcGFkZGluZzogMCUgNSUgMCUgNCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/postservice/postservice.page.ts":
/*!*************************************************!*\
  !*** ./src/app/postservice/postservice.page.ts ***!
  \*************************************************/
/*! exports provided: PostservicePage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostservicePage", function() { return PostservicePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var PostservicePage = /** @class */ (function () {
    function PostservicePage(router, menuCtrl, fileChooser, transfer, dataServices, loadingController, alertCtrl, location, filePath, formBuilder) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.location = location;
        this.filePath = filePath;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.Serviceofferedlist = [];
        this.disabilitylist = [];
        this.countryList = [];
        this.stateCityList = [];
        this.selectedCount = 0;
        this.maxCount = 3;
    }
    PostservicePage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    PostservicePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
        this.getServiceProviderDropDownList();
        this.getCountryListInformation();
    };
    PostservicePage.prototype.buildForm = function () {
        this.postServiceDetailsForm = this.formBuilder.group({
            serviceTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            serviceoffered: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            disability: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            brief: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            preferredStateCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            status: [''],
            showDetailsToApplicants: ['']
        });
    };
    PostservicePage.prototype.updateSelectedCount = function (count) {
        this.selectedCount = count;
        // if (count === this.maxCount) {
        //   this.showAlert('You should not select Preferred State/City more than 3','')
        // }
    };
    PostservicePage.prototype.getServiceProviderDropDownList = function () {
        var _this = this;
        this.dataServices.getDDLAPI(0).then(function (result) {
            if (result.status == 1) {
                _this.Serviceofferedlist = result.ddl_list.service_offered_list;
                _this.disabilitylist = result.ddl_list.disability_list;
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    PostservicePage.prototype.getCountryListInformation = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getCountryArrayAPI().then(function (result) {
            if (result.status == 1) {
                _this.countryList = result.country_list;
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in postservice: ' + JSON.stringify(error));
        });
    };
    PostservicePage.prototype.selectedCountryValue = function (countryId) {
        this.getStateCityListInformation(countryId);
    };
    PostservicePage.prototype.getStateCityListInformation = function (country_id) {
        var _this = this;
        this.presentLoading();
        this.dataServices.getStateCountryList(country_id).then(function (result) {
            if (result.status == 1) {
                _this.stateCityList = result.state_city_list;
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
    PostservicePage.prototype.postServiceDetails = function (formDeatails) {
        var _this = this;
        if (this.postServiceDetailsForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.showErrorIcon = false;
            formDeatails.showDetailsToApplicants = formDeatails.showDetailsToApplicants == false ? '0' : '1';
            var postData = {
                "service_name": formDeatails.serviceTitle,
                "service_description": formDeatails.description,
                "brife": formDeatails.brief,
                "status": formDeatails.status,
                "show_contact": formDeatails.showDetailsToApplicants,
                "upload_file": [],
                "country_id": formDeatails.country,
                "state_city_id": formDeatails.preferredStateCity.toString(),
                "servicetype_id": formDeatails.serviceoffered.toString(),
                "disability_id": formDeatails.disability.toString(),
                "verify_email": "1",
                "uacc_id": localStorage.getItem('users_id')
            };
            this.dataServices.postServices(postData).then(function (result) {
                if (result.status == 1) {
                    _this.loadingController.dismiss();
                    _this.presentAlert(result.message, '');
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert(result.message, '');
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log('Error in login: ' + JSON.stringify(error));
            });
        }
    };
    PostservicePage.prototype.closePage = function () {
        this.location.back();
    };
    PostservicePage.prototype.postServicesAPI = function (postData) {
        var _this = this;
        this.presentLoading();
        this.dataServices.postServices(postData).then(function (result) {
            console.log(result);
            if (result.status == 1) {
                console.log('Country List', result);
                _this.loadingController.dismiss();
                _this.presentAlert(result.message, '');
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert(result.message, '');
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    PostservicePage.prototype.presentLoading = function () {
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
    };
    PostservicePage.prototype.presentAlert = function (title, message) {
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
                                        if (title != 'File Type')
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
    };
    PostservicePage.prototype.showAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
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
    PostservicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postservice',
            template: __webpack_require__(/*! ./postservice.page.html */ "./src/app/postservice/postservice.page.html"),
            styles: [__webpack_require__(/*! ./postservice.page.scss */ "./src/app/postservice/postservice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_4__["FileChooser"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_6__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
    ], PostservicePage);
    return PostservicePage;
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
//# sourceMappingURL=postservice-postservice-module.js.map