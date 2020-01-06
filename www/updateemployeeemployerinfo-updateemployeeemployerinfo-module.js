(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateemployeeemployerinfo-updateemployeeemployerinfo-module"],{

/***/ "./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdateemployeeemployerinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateemployeeemployerinfoPageModule", function() { return UpdateemployeeemployerinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateemployeeemployerinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateemployeeemployerinfo.page */ "./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.page.ts");







var routes = [
    {
        path: '',
        component: _updateemployeeemployerinfo_page__WEBPACK_IMPORTED_MODULE_6__["UpdateemployeeemployerinfoPage"]
    }
];
var UpdateemployeeemployerinfoPageModule = /** @class */ (function () {
    function UpdateemployeeemployerinfoPageModule() {
    }
    UpdateemployeeemployerinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updateemployeeemployerinfo_page__WEBPACK_IMPORTED_MODULE_6__["UpdateemployeeemployerinfoPage"]]
        })
    ], UpdateemployeeemployerinfoPageModule);
    return UpdateemployeeemployerinfoPageModule;
}());



/***/ }),

/***/ "./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Employer Information</ion-title>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n  <div class=\"inputDiv\">\n    <ion-item class=\"headerNameCss inoItem\" style=\"margin-top:10%\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\" [ngClass]=\"{'redlabel' : showCompanyNameErrorMsg == true, 'blacklabel' : showCompanyNameErrorMsg == false}\">\n              Company Name\n            </ion-label>\n            <ion-input type=\"text\" name=\"companyname\" [(ngModel)]=\"companyname\" (ionChange)=\"employeeCompanyNameValidator()\" required\n              pattern=\"[a-zA-Z0-9\\s]{1,}\"></ion-input>\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showCompanyNameErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p class=\"errorMsg \" *ngIf=\"showCompanyNameErrorMsg\">{{companyNameErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-item class=\"inoItem headerNameCss\" lines=\"none\" style=\"margin-top:-9px\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headerNameCss\" [ngClass]=\"{'redlabel' : isIndustrySelected == true, 'blacklabel' : isIndustrySelected == false}\">\n              Company Type:\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  \n    <ion-select class=\"headerNameCss\" style=\"border-bottom: 1px solid lightgray\" (ionChange)=\"selectedCompanyTypeValue($event)\" placeholder=\"Select Company Type\">\n      <ion-select-option *ngFor=\"let item of companyTypeArray;\" [selected]=\"item.id == companytype_id\" [value]=\"item\">\n        {{item.name}}</ion-select-option>\n    </ion-select>\n    <br>\n\n\n    <ion-item class=\"inoItem headerNameCss\" lines=\"none\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headerNameCss\" [ngClass]=\"{'redlabel' : isIndustrySelected == true, 'blacklabel' : isIndustrySelected == false}\">\n              Year of Establishment:\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <!-- <ion-label class=\"labelcss headerNameCss\" style=\"margin-top:10px\" [ngClass]=\"{'redlabel' : showYearErrorMsg == true, 'blacklabel' : showYearErrorMsg == false}\"\n  color=\"#2b0c43\" style=\"font-size: 16x\">\n  Year of Establishment:\n  </ion-label> -->\n    <ion-select class=\"headerNameCss\" style=\" border-bottom: 1px solid lightgray\" placeholder=\"Select Year\" (ionChange)=\"employeeCompanyYearValidator($event)\">\n      <ion-select-option *ngFor=\"let item of yearArray;\" [selected]=\"item == yrestablishment\" [value]=\"item\">\n        {{item}}</ion-select-option>\n    </ion-select>\n    <br>\n\n    <ion-item class=\"inoItem headerNameCss\" lines=\"none\" style=\"margin-top:-9px\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headerNameCss\" [ngClass]=\"{'redlabel' : isIndustrySelected == true, 'blacklabel' : isIndustrySelected == false}\">\n              Industry Type:\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-select class=\"headerNameCss\" style=\" border-bottom: 1px solid lightgray\" placeholder=\"Select Industry Type\" (ionChange)=\"selectedIndustryTypeValue($event)\">\n      <ion-select-option *ngFor=\"let item of industryTypeArray;\" [selected]=\"item.id == industry_id\" [value]=\"item\">\n        {{item.name}}</ion-select-option>\n    </ion-select>\n\n    <ion-item class=\"headerNameCss inoItem\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\" [ngClass]=\"{'redlabel' : showUrlErrorMsg == true, 'blacklabel' : showUrlErrorMsg == false}\">Website URL\n            </ion-label>\n            <ion-input type=\"text\" name=\"weburl\" [(ngModel)]=\"weburl\" (ionChange)=\"employeeCompanyUrlValidator()\" required pattern=\"^((https?|ftp|smtp):\\/\\/)?[a-zA-Z0-9]+(\\.[a-z]{2,}){1,3}(#?\\/?[a-zA-Z0-9#]+)*\\/?(\\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$\"></ion-input>\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showUrlErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p class=\"errorMsg\" *ngIf=\"showUrlErrorMsg\">{{urlErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-item class=\" headerNameCss inoItem\" style=\"margin-top:-9px\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-label position=\"floating\" [ngClass]=\"{'redlabel' : showCompanyProfileErrorMsg == true, 'blacklabel' : showCompanyProfileErrorMsg == false}\">\n              Company Description\n            </ion-label>\n            <ion-input type=\"text\" name=\"companyprofile\" [(ngModel)]=\"companyprofile\" (ionChange)=\"employeeCompanyProfileValidator()\"\n              required pattern=\"[a-zA-Z0-9\\s]{1,}\"></ion-input>\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"showCompanyProfileErrorMsg\">\n            <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n            </ion-img>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"10\">\n        <p class=\"errorMsg \" *ngIf=\"showCompanyProfileErrorMsg\">{{companyProfileErrorMsg}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"saveButtonPadding\">\n    <button class=\"buttonfont\" (click)=\"updateEmployerDetail()\">SAVE</button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floatingcss {\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 5%;\n  font-size: 14px; }\n\n.labelcss {\n  margin-top: 5%;\n  width: 90%;\n  margin-left: 10%;\n  margin-right: 10%;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC91cGRhdGVlbXBsb3llZWVtcGxveWVyaW5mby91cGRhdGVlbXBsb3llZWVtcGxveWVyaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYTtFQUNiLFVBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZWVtcGxveWVlZW1wbG95ZXJpbmZvL3VwZGF0ZWVtcGxveWVlZW1wbG95ZXJpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdGluZ2Nzc3tcbiAgICB3aWR0aDo5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgZm9udC1zaXplOjE0cHg7XG59XG5cbi5sYWJlbGNzc3tcbiAgICBtYXJnaW4tdG9wOjUlO1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIGZvbnQtc2l6ZToxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.page.ts ***!
  \*******************************************************************************/
/*! exports provided: UpdateemployeeemployerinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateemployeeemployerinfoPage", function() { return UpdateemployeeemployerinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var UpdateemployeeemployerinfoPage = /** @class */ (function () {
    function UpdateemployeeemployerinfoPage(router, alertCtrl, activatedRoute, loadingController, dataServices) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.industryTypeArray = [];
        this.industryIdArray = [];
        this.companyTypeArray = [];
        this.companyIdArray = [];
        this.dataArray = [];
        this.isIndustrySelected = false;
        this.isCompanySelected = false;
        this.showCompanyNameErrorMsg = false;
        this.showYearErrorMsg = false;
        this.showUrlErrorMsg = false;
        this.showCompanyProfileErrorMsg = false;
        this.yearArray = [];
        this.companyTypeArray = [];
        this.ddl_list = JSON.parse(localStorage.getItem("ddl_list"));
        this.companyTypeArray = this.ddl_list.ddl_list.company_type_list;
        this.industryTypeArray = this.ddl_list.ddl_list.industry_list;
        var currentYear = new Date().getFullYear();
        for (var i = currentYear; i >= 1965; i--) {
            this.yearArray.push(i);
        }
        var contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
        this.dataArray = JSON.parse(contactInfo);
        this.companyname = this.dataArray.empInfo.compnayName;
        this.yrestablishment = this.dataArray.empInfo.year_establishment;
        this.weburl = this.dataArray.empInfo.website_url;
        this.companyprofile = this.dataArray.empInfo.company_description;
        this.selectedIndustryType = this.dataArray.empInfo.industry;
        this.companytype_id = this.dataArray.empInfo.companytype_id;
        this.industry_id = this.dataArray.empInfo.industry_id;
        this.selectedCompanyTypeIndex = this.dataArray.empInfo.companyTypeIndex;
        this.users_id = localStorage.getItem('users_id');
        this.country_id = this.dataArray.country;
    }
    UpdateemployeeemployerinfoPage.prototype.ionViewWillEnter = function () {
    };
    UpdateemployeeemployerinfoPage.prototype.ngOnInit = function () {
    };
    UpdateemployeeemployerinfoPage.prototype.closePage = function () {
        this.router.navigate(['/employerprofile']);
    };
    UpdateemployeeemployerinfoPage.prototype.selectyearestablishment = function (item) {
        this.yrestablishment = item.detail.value;
        console.log('year::', this.yrestablishment);
    };
    UpdateemployeeemployerinfoPage.prototype.selectedIndustryTypeValue = function (item) {
        this.industry_id = item.detail.value.id;
        console.log('Selected Industry : ' + this.selectedIndustryType);
        for (var i = 0; i < this.industryTypeArray.length; i++) {
            if (this.industry_id == "" || this.industry_id == null) {
                this.isIndustrySelected = true;
            }
            else {
                this.isIndustrySelected = false;
            }
        }
    };
    UpdateemployeeemployerinfoPage.prototype.selectedCompanyTypeValue = function (item) {
        this.companytype_id = item.detail.value.id;
        if (this.companytype_id == "" || this.companytype_id == null || this.companytype_id == "0") {
            this.isCompanySelected = true;
        }
        else {
            this.isCompanySelected = false;
        }
    };
    UpdateemployeeemployerinfoPage.prototype.employeeCompanyNameValidator = function () {
        if (this.companyname == "" || this.companyname == undefined || this.companyname == null) {
            this.showCompanyNameErrorMsg = true;
            this.companyNameErrorMsg = "Please enter company name";
        }
        else {
            this.showCompanyNameErrorMsg = false;
        }
    };
    UpdateemployeeemployerinfoPage.prototype.employeeCompanyProfileValidator = function () {
        if (this.companyprofile == "" || this.companyprofile == undefined || this.companyprofile == null) {
            this.showCompanyProfileErrorMsg = true;
            this.companyProfileErrorMsg = "Please enter company description";
        }
        else {
            this.showCompanyProfileErrorMsg = false;
        }
    };
    UpdateemployeeemployerinfoPage.prototype.employeeCompanyYearValidator = function (item) {
        this.yrestablishment = item.detail.value;
        console.log('year::', this.yrestablishment);
        if (this.yrestablishment == "" || this.yrestablishment == undefined || this.yrestablishment == null) {
            this.showYearErrorMsg = true;
            // this.yearErrorMsg = "Please enter year";
        }
        else {
            this.showYearErrorMsg = false;
        }
    };
    UpdateemployeeemployerinfoPage.prototype.employeeCompanyUrlValidator = function () {
        if (this.weburl == '' || this.weburl == undefined || this.weburl == null) {
            this.showUrlErrorMsg = true;
            this.urlErrorMsg = "Please enter website URL";
        }
        else {
            this.showUrlErrorMsg = false;
        }
        if (this.showUrlErrorMsg != true) {
            if (/^((https?|ftp|smtp):\/\/)?[a-zA-Z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(this.weburl) == false) {
                this.showUrlErrorMsg = true;
                this.urlErrorMsg = 'Please enter valid website URL';
            }
            else {
                this.showUrlErrorMsg = false;
            }
        }
    };
    UpdateemployeeemployerinfoPage.prototype.updateEmployerDetail = function () {
        var _this = this;
        if ((this.companyname == "" || this.companyname == null || this.companyname == undefined) &&
            (this.yrestablishment == "" || this.yrestablishment == null || this.yrestablishment == undefined || this.yrestablishment == 0) &&
            (this.weburl == "" || this.weburl == null || this.weburl == undefined) &&
            (this.industry_id == "0" || this.industry_id == null || this.industry_id == undefined) &&
            (this.companytype_id == "0" || this.companytype_id == null || this.companytype_id == undefined) &&
            (this.companyprofile == "" || this.companyprofile == null || this.companyprofile == undefined)) {
            this.showCompanyNameErrorMsg = true;
            this.companyNameErrorMsg = "Please enter name";
            this.isCompanySelected = true;
            this.showYearErrorMsg = true;
            this.isIndustrySelected = true;
            this.showUrlErrorMsg = true;
            this.urlErrorMsg = "Please enter website URL";
            this.showCompanyProfileErrorMsg = true;
            this.companyProfileErrorMsg = "Please enter company description";
        }
        else {
            this.showCompanyNameErrorMsg = false;
            this.isCompanySelected = false;
            this.isIndustrySelected = false;
            this.showUrlErrorMsg = false;
            this.showYearErrorMsg = false;
            this.showCompanyProfileErrorMsg = false;
        }
        if (this.industry_id == "" || this.industry_id == null || this.industry_id == "0") {
            this.isIndustrySelected = true;
        }
        else {
            this.isIndustrySelected = false;
        }
        if (this.companytype_id == "" || this.companytype_id == "" || this.companytype_id == "0") {
            this.isCompanySelected = true;
        }
        else {
            this.isCompanySelected = false;
        }
        if (this.companyname == "" || this.companyname == undefined || this.companyname == null) {
            this.showCompanyNameErrorMsg = true;
            this.companyNameErrorMsg = "Please enter company name";
        }
        else {
            this.showCompanyNameErrorMsg = false;
        }
        if (this.yrestablishment == "" || this.yrestablishment == undefined || this.yrestablishment == null || this.yrestablishment == 0) {
            this.showYearErrorMsg = true;
            // this.yearErrorMsg = "Please enter year";
        }
        else {
            this.showYearErrorMsg = false;
        }
        // if (this.weburl == "" || this.weburl == undefined || this.weburl == null) {
        //   this.showUrlErrorMsg = true;
        //   this.urlErrorMsg = "Please enter website url";
        // } else {
        //   this.showUrlErrorMsg = false;
        // }
        this.employeeCompanyUrlValidator();
        if (this.companyprofile == "" || this.companyprofile == undefined || this.companyprofile == null) {
            this.showCompanyProfileErrorMsg = true;
            this.companyProfileErrorMsg = "Please enter company description";
        }
        else {
            this.showCompanyProfileErrorMsg = false;
        }
        if (this.showCompanyProfileErrorMsg == false &&
            this.isIndustrySelected == false &&
            this.isCompanySelected == false &&
            this.showCompanyNameErrorMsg == false &&
            this.showYearErrorMsg == false &&
            this.showUrlErrorMsg == false) {
            this.presentLoading();
            this.dataServices.updateEmployeeEmployerInfoAPI(this.companyname, this.companytype_id, this.yrestablishment, this.industry_id, this.weburl, this.companyprofile, this.users_id).then(function (res) {
                _this.existingDataResponse = res;
                console.log('responsre::: ' + _this.existingDataResponse);
                if (_this.existingDataResponse.status == 1) {
                    console.log('Update Employer Information :: ' + _this.existingDataResponse);
                    _this.presentAlert(_this.existingDataResponse.message, '');
                    // this.closePage()
                }
                else {
                    _this.presentAlert(_this.existingDataResponse.message, '');
                }
            }, function (error) {
                alert(error);
            });
        }
    };
    UpdateemployeeemployerinfoPage.prototype.presentAlert = function (title, message) {
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
    UpdateemployeeemployerinfoPage.prototype.presentLoading = function () {
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
    }; //Display Function Ends Here 
    UpdateemployeeemployerinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateemployeeemployerinfo',
            template: __webpack_require__(/*! ./updateemployeeemployerinfo.page.html */ "./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.page.html"),
            styles: [__webpack_require__(/*! ./updateemployeeemployerinfo.page.scss */ "./src/app/updateemployeeemployerinfo/updateemployeeemployerinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"]])
    ], UpdateemployeeemployerinfoPage);
    return UpdateemployeeemployerinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=updateemployeeemployerinfo-updateemployeeemployerinfo-module.js.map