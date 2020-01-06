(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editservices-editservices-module"],{

/***/ "./src/app/editservices/editservices.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/editservices/editservices.module.ts ***!
  \*****************************************************/
/*! exports provided: EditservicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditservicesPageModule", function() { return EditservicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editservices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editservices.page */ "./src/app/editservices/editservices.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _editservices_page__WEBPACK_IMPORTED_MODULE_6__["EditservicesPage"]
    }
];
var EditservicesPageModule = /** @class */ (function () {
    function EditservicesPageModule() {
    }
    EditservicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_editservices_page__WEBPACK_IMPORTED_MODULE_6__["EditservicesPage"]]
        })
    ], EditservicesPageModule);
    return EditservicesPageModule;
}());



/***/ }),

/***/ "./src/app/editservices/editservices.page.html":
/*!*****************************************************!*\
  !*** ./src/app/editservices/editservices.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Edit Service Detail</ion-title>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n  <ion-card class=\"cardMargins boxShadow\">\n    <ion-card-content>\n      <div class=\"formPadding\">\n        <form [formGroup]=\"editServiceForm\" (ngSubmit)=\"updateServiceDetail(editServiceForm.value)\">\n          <mat-form-field class=\"inputFields\">\n            <input matInput placeholder=\"Service Title\" [(ngModel)]=\"editServiceDetails.Service_Title\"\n              formControlName=\"serviceTitle\" [errorStateMatcher]=\"esMatcher\" pattern=\".*[^ ].*\">\n            <mat-icon matSuffix color=\"warn\"\n              *ngIf=\"(editServiceForm.controls.serviceTitle.invalid && editServiceForm.controls.serviceTitle.touched) || (editServiceForm.controls.serviceTitle.invalid && showErrorIcon && !editServiceForm.controls.serviceTitle.touched)\">\n              error\n            </mat-icon>\n            <mat-error>\n              <span *ngIf=\"editServiceForm.controls.serviceTitle.errors?.required\">Service title is required.</span>\n              <span *ngIf=\"editServiceForm.controls.serviceTitle.errors?.pattern\">Please enter valid service\n                title.</span>\n\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <mat-label>Service Category</mat-label>\n            <mat-select formControlName=\"serviceCategory\" [errorStateMatcher]=\"esMatcher\"\n              [(ngModel)]=\"editServiceDetails.Service_Category\" multiple>\n              <mat-option *ngFor=\"let item of categoryArray\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"editServiceForm.controls.serviceCategory.errors?.required\">Service category is\n                required.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <mat-label>Disability Type</mat-label>\n            <mat-select formControlName=\"disability\" [errorStateMatcher]=\"esMatcher\"\n              [(ngModel)]=\"editServiceDetails.Disability_Served\" multiple>\n              <mat-option *ngFor=\"let item of disabilityArray\" [value]=\"item.id\">\n                {{item.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error>\n              <span *ngIf=\"editServiceForm.controls.disability.errors?.required\">Please select at least one\n                disability type.</span>\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <input matInput placeholder=\"Brief\" [(ngModel)]=\"editServiceDetails.Brief\" formControlName=\"brief\"\n              [errorStateMatcher]=\"esMatcher\" pattern=\".*[^ ].*\">\n            <mat-icon matSuffix color=\"warn\"\n              *ngIf=\"(editServiceForm.controls.brief.invalid && editServiceForm.controls.brief.touched) || (editServiceForm.controls.brief.invalid && showErrorIcon && !editServiceForm.controls.brief.touched)\">\n              error\n            </mat-icon>\n            <mat-error>\n              <span *ngIf=\"editServiceForm.controls.brief.errors?.required\">\n                Brief is required.</span>\n              <span *ngIf=\"editServiceForm.controls.brief.errors?.pattern\">Please enter valid brief.</span>\n\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"inputFields\">\n            <input matInput placeholder=\"Description\" [(ngModel)]=\"editServiceDetails.Description\"  formControlName=\"description\"\n              [errorStateMatcher]=\"esMatcher\" pattern=\".*[^ ].*\">\n            <mat-icon matSuffix color=\"warn\"\n              *ngIf=\"(editServiceForm.controls.description.invalid && editServiceForm.controls.description.touched) || (editServiceForm.controls.description.invalid && showErrorIcon && !editServiceForm.controls.description.touched)\">\n              error\n            </mat-icon>\n            <mat-error>\n              <span *ngIf=\"editServiceForm.controls.description.errors?.required\">\n                Description is required.</span>\n              <span *ngIf=\"editServiceForm.controls.description.errors?.pattern\">Please enter valid description.</span>\n\n            </mat-error>\n          </mat-form-field>\n          <br>\n          <button type=\"submit\" class=\"buttonfont selector\">SAVE</button>\n        </form>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/editservices/editservices.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/editservices/editservices.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itemmargins {\n  margin-left: 10%;\n  margin-right: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lZGl0c2VydmljZXMvZWRpdHNlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0c2VydmljZXMvZWRpdHNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtbWFyZ2luc3tcbiAgICBtYXJnaW4tbGVmdDoxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/editservices/editservices.page.ts":
/*!***************************************************!*\
  !*** ./src/app/editservices/editservices.page.ts ***!
  \***************************************************/
/*! exports provided: EditservicesPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditservicesPage", function() { return EditservicesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var EditservicesPage = /** @class */ (function () {
    function EditservicesPage(router, location, activatedRoute, dataServices, loadingController, alertCtrl, formBuilder) {
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.editServiceDetails = [];
        this.categoryArray = [];
    }
    EditservicesPage.prototype.ngOnInit = function () {
        this.buildForm();
        this.editServiceDetails = JSON.parse((this.activatedRoute.snapshot.paramMap.get('item')));
        this.categoryArray = this.editServiceDetails.Service_Category_list;
        this.disabilityArray = this.editServiceDetails.Disability_Served_list;
    };
    EditservicesPage.prototype.ionViewWillEnter = function () {
    };
    // Forms declaration
    EditservicesPage.prototype.buildForm = function () {
        this.editServiceForm = this.formBuilder.group({
            serviceTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            serviceCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            disability: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            brief: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    EditservicesPage.prototype.closePage = function () {
        this.location.back();
    };
    EditservicesPage.prototype.updateServiceDetail = function (form) {
        var _this = this;
        if (this.editServiceForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.showErrorIcon = false;
            var postData = {
                "service_name": form.serviceTitle,
                "servicetype_id": form.serviceCategory,
                "disability_id": form.disability,
                "brife": form.brief,
                "service_description": form.description,
                "id": this.editServiceDetails.Service_id,
            };
            this.dataServices.updateServicesDetail(postData).then(function (res) {
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
    EditservicesPage.prototype.presentLoading = function () {
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
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    EditservicesPage.prototype.presentAlert = function (title, message) {
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
    };
    EditservicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editservices',
            template: __webpack_require__(/*! ./editservices.page.html */ "./src/app/editservices/editservices.page.html"),
            styles: [__webpack_require__(/*! ./editservices.page.scss */ "./src/app/editservices/editservices.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], EditservicesPage);
    return EditservicesPage;
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
//# sourceMappingURL=editservices-editservices-module.js.map