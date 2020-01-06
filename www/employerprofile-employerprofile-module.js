(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employerprofile-employerprofile-module"],{

/***/ "./src/app/employerprofile/employerprofile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/employerprofile/employerprofile.module.ts ***!
  \***********************************************************/
/*! exports provided: EmployerprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerprofilePageModule", function() { return EmployerprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employerprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employerprofile.page */ "./src/app/employerprofile/employerprofile.page.ts");







var routes = [
    {
        path: '',
        component: _employerprofile_page__WEBPACK_IMPORTED_MODULE_6__["EmployerprofilePage"]
    }
];
var EmployerprofilePageModule = /** @class */ (function () {
    function EmployerprofilePageModule() {
    }
    EmployerprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employerprofile_page__WEBPACK_IMPORTED_MODULE_6__["EmployerprofilePage"]]
        })
    ], EmployerprofilePageModule);
    return EmployerprofilePageModule;
}());



/***/ }),

/***/ "./src/app/employerprofile/employerprofile.page.html":
/*!***********************************************************!*\
  !*** ./src/app/employerprofile/employerprofile.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- - <ion-header color=\"medium\"> -->\n<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #2b0c43\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\" color: #2b0c43\">My Profile</ion-title>\n    <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\"></ion-icon>\n    <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>  </ion-item>\n</ion-toolbar>\n<!-- </ion-header> -->\n\n<ion-content *ngFor=\"let item of employerInformation\">\n  <ion-card class=\"cardMargins headerNameCss\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"10\">\n            <ion-label class=\"profilePageHeaderStripSection1 headerNameCss\">CONTACT INFORMATION</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label (click)=\"updateContactInfo()\" class=\"profilePageHeaderStripSection2\">EDIT</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding headerNameCss\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headingLabel\">Name:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{item.first_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Designation:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{item.designation}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Email:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{item.email}}</ion-label>\n            <br>\n            <div *ngIf=\"showVerifyButton\">\n              <ion-button class=\"verifyEmail\" size=\"small\" shape=\"round\" fill=\"outline\" style=\"color:red\" (click)=\"emailVerification()\">Verify</ion-button>\n              <br>\n            </div>\n            <div *ngIf=\"!showVerifyButton\">\n              <ion-button class=\"verifiedEmail\" size=\"small\" shape=\"round\" fill=\"outline\" style=\"color: #2b0c43\">\n                Verified</ion-button>\n              <br>\n            </div>\n            <ion-label class=\"headingLabel\">Mobile:</ion-label>\n            <br>\n            <a href=\"tel:{{item.mobile}}\" [attr.aria-label]=\"splitMobile\">{{item.mobile}}</a>\n\n            <br>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"cardMargins headerNameCss\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"10\">\n            <ion-label class=\"profilePageHeaderStripSection1\">EMPLOYER INFORMATION</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label (click)=\"updateEmployerInfo()\" class=\"profilePageHeaderStripSection2\">EDIT</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding headerNameCss\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headingLabel\">Company Name:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{item.company_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Company Type:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{item.company_type_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Year of Establishment:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{item.year_establishment}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Industry:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{item.industry_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Website URL:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{item.website_url}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Company Description:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{item.company_description}}</ion-label>\n            <br>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/employerprofile/employerprofile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/employerprofile/employerprofile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold !important; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBsb3llcnByb2ZpbGUvZW1wbG95ZXJwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixlQUFjO0VBQ2QsNEJBQTJCLEVBQUE7O0FBRzNCO0VBQ0EsZUFBYztFQUNkLGNBQWE7RUFDYixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVycHJvZmlsZS9lbXBsb3llcnByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdMYWJlbHtcbiAgICBjb2xvcjojMmIwYzQzO1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRlbnRJbmZve1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/employerprofile/employerprofile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/employerprofile/employerprofile.page.ts ***!
  \*********************************************************/
/*! exports provided: EmployerprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerprofilePage", function() { return EmployerprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EmployerprofilePage = /** @class */ (function () {
    function EmployerprofilePage(router, events, dataServices, loadingController, alertCtrl) {
        this.router = router;
        this.events = events;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.companyTypeArray = [];
        this.industryTypeArray = [];
        this.companyIdArray = [];
        this.industryIdArray = [];
        this.results = [];
        this.uacc_id = localStorage.getItem('users_id');
    }
    EmployerprofilePage.prototype.ngOnInit = function () {
    };
    EmployerprofilePage.prototype.ionViewWillEnter = function () {
        this.getEmployerInformation();
        this.getCountryArray();
        this.getNotificationBadgeCount();
    };
    EmployerprofilePage.prototype.getNotificationBadgeCount = function () {
        var _this = this;
        // this.presentLoading();
        this.dataServices.getNotificationBadgeCount().then(function (result) {
            console.log(result);
            _this.badgeResultData = result;
            if (_this.badgeResultData.status == 1) {
                // this.loadingController.dismiss();
                _this.badgecount = _this.badgeResultData.total_notification_count;
            }
            else {
                // this.loadingController.dismiss();
            }
        }, function (error) {
            //   this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployerprofilePage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    EmployerprofilePage.prototype.getCountryArray = function () {
        var _this = this;
        this.countryData = [];
        this.dataServices.getCountryArrayAPI().then(function (result) {
            _this.countryData = result;
            if (_this.countryData.status == 1) {
                localStorage.setItem("countryArray", JSON.stringify(_this.countryData));
            }
            else {
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Display loader 
    EmployerprofilePage.prototype.presentLoading = function () {
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
    EmployerprofilePage.prototype.updateEmployerInfo = function () {
        var info = {
            empInfo: this.results[0],
        };
        this.router.navigate(['/updateemployeeemployerinfo', { item: JSON.stringify(info) }]);
    };
    EmployerprofilePage.prototype.updateContactInfo = function () {
        this.router.navigate(['/updateemployeecontactinfo', { item: JSON.stringify(this.results[0]) }]);
    };
    EmployerprofilePage.prototype.getEmployerDDL = function (country) {
        var _this = this;
        console.log("country id: " + country);
        this.dataServices.getDDLAPI(country).then(function (result) {
            console.log(result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                localStorage.setItem("ddl_list", JSON.stringify(_this.resultData));
            }
            else {
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function For Email Verification
    EmployerprofilePage.prototype.emailVerification = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.emailVerification().then(function (result) {
            _this.emailVerificatonResponse = result;
            if (_this.emailVerificatonResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.emailVerificatonResponse.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.emailVerificatonResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // Function emailVerification Ends Here.
    EmployerprofilePage.prototype.presentAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: ['OK']
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
    EmployerprofilePage.prototype.getEmployerInformation = function () {
        var _this = this;
        // this.uacc_id = localStorage.getItem("users_id");
        this.presentLoading();
        this.dataServices.getEmployerData(this.uacc_id).then(function (result) {
            console.log('employer details :: ' + result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.employerInformation = _this.resultData.employer_details;
                _this.first_name = _this.resultData.employer_details[0].first_name;
                _this.country = _this.resultData.employer_details[0].country;
                _this.verify_email = _this.resultData.employer_details[0].verify_email;
                _this.splitMobile = _this.resultData.employer_details[0].mobile.split('').join(' ').replace(/0/g, 'zero');
                console.log("show Verify email: " + _this.verify_email);
                localStorage.setItem('userName', _this.first_name);
                if (_this.verify_email == 0) {
                    _this.showVerifyButton = true;
                }
                else {
                    _this.showVerifyButton = false;
                }
                _this.getEmployerDDL(_this.country);
                _this.events.publish('Event-UserName');
                _this.results = [];
                _this.results.push({
                    compnayName: _this.resultData.employer_details[0].company_name,
                    company_type_name: _this.resultData.employer_details[0].company_type_name,
                    companytype_id: _this.resultData.employer_details[0].companytype_id,
                    year_establishment: _this.resultData.employer_details[0].year_establishment,
                    industry: _this.resultData.employer_details[0].industry,
                    company_description: _this.resultData.employer_details[0].company_description,
                    industry_name: _this.resultData.employer_details[0].industry_name,
                    industry_id: _this.resultData.employer_details[0].industry_id,
                    website_url: _this.resultData.employer_details[0].website_url,
                    first_name: _this.resultData.employer_details[0].first_name,
                    designation: _this.resultData.employer_details[0].designation,
                    email: _this.resultData.employer_details[0].email,
                    phone: _this.resultData.employer_details[0].phone,
                    mobile: _this.resultData.employer_details[0].mobile,
                    address: _this.resultData.employer_details[0].address,
                    zip_code: _this.resultData.employer_details[0].zip_code,
                    companyTypeIndex: _this.companyTypeIndex,
                    country: _this.resultData.employer_details[0].country,
                    state: _this.resultData.employer_details[0].state,
                    city: _this.resultData.employer_details[0].city,
                    business_email: _this.resultData.employer_details[0].business_email
                });
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                alert(_this.resultData.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployerprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employerprofile',
            template: __webpack_require__(/*! ./employerprofile.page.html */ "./src/app/employerprofile/employerprofile.page.html"),
            styles: [__webpack_require__(/*! ./employerprofile.page.scss */ "./src/app/employerprofile/employerprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], EmployerprofilePage);
    return EmployerprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=employerprofile-employerprofile-module.js.map