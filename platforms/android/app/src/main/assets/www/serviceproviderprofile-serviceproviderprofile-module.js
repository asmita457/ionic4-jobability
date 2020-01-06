(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serviceproviderprofile-serviceproviderprofile-module"],{

/***/ "./src/app/serviceproviderprofile/serviceproviderprofile.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/serviceproviderprofile/serviceproviderprofile.module.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceproviderprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceproviderprofilePageModule", function() { return ServiceproviderprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _serviceproviderprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceproviderprofile.page */ "./src/app/serviceproviderprofile/serviceproviderprofile.page.ts");







var routes = [
    {
        path: '',
        component: _serviceproviderprofile_page__WEBPACK_IMPORTED_MODULE_6__["ServiceproviderprofilePage"]
    }
];
var ServiceproviderprofilePageModule = /** @class */ (function () {
    function ServiceproviderprofilePageModule() {
    }
    ServiceproviderprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_serviceproviderprofile_page__WEBPACK_IMPORTED_MODULE_6__["ServiceproviderprofilePage"]]
        })
    ], ServiceproviderprofilePageModule);
    return ServiceproviderprofilePageModule;
}());



/***/ }),

/***/ "./src/app/serviceproviderprofile/serviceproviderprofile.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/serviceproviderprofile/serviceproviderprofile.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- - <ion-header color=\"medium\"> -->\n<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #2b0c43\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\" color: #2b0c43\">My Profile</ion-title>\n    <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\"></ion-icon>\n    <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n  </ion-item>\n</ion-toolbar>\n<!-- </ion-header> -->\n\n<ion-content>\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"10\">\n            <ion-label class=\"profilePageHeaderStripSection1\">CONTACT INFORMATION</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label (click)=\"updateServiceproviderContactInfo()\" class=\"profilePageHeaderStripSection2\">EDIT\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-label class=\"headingLabel\">Name:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{serviceProviderDetials.first_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Email:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{serviceProviderDetials.email}}</ion-label>\n            <br>\n            <div *ngIf=\"serviceProviderDetials.verify_email == 0\">\n              <ion-button class=\"verifyEmail\" size=\"small\" shape=\"round\" fill=\"outline\" style=\"color:red\"\n                (click)=\"emailVerification()\">Verify</ion-button>\n              <br>\n            </div>\n            <div *ngIf=\"serviceProviderDetials.verify_email == 1\">\n              <ion-button class=\"verifiedEmail\" size=\"small\" shape=\"round\" fill=\"outline\" style=\"color: #2b0c43\">\n                Verified</ion-button>\n              <br>\n            </div>\n            <ion-label class=\"headingLabel\">Mobile:</ion-label>\n            <br>\n            <a href=\"tel:{{serviceProviderDetials.mobile}}\" [attr.aria-label]=\"splitMobile\">{{serviceProviderDetials.mobile}}</a>\n\n            <br>\n\n          </ion-col>\n          <ion-col size=\"4\">\n            <!-- <div class=\"profile-picture big-profile-picture\"></div> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"10\">\n            <ion-label class=\"profilePageHeaderStripSection1\">ORGANIZATION INFORMATION</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label (click)=\"updateServiceProviderOrganisationInfo()\" class=\"profilePageHeaderStripSection2\">EDIT\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headingLabel\">Service Provider Type:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{organizationtype}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Disability served:</ion-label>\n            <br>\n            <ion-list *ngFor=\"let item of disabilitys\">\n              <ion-label class=\"contentInfo\">{{item.name}}</ion-label>\n            </ion-list>\n            <ion-label class=\"headingLabel\">Services Offered:</ion-label>\n            <br>\n            <ion-list *ngFor=\"let item of serviceType\">\n              <ion-label class=\"contentInfo\">{{item.name}}</ion-label>\n            </ion-list>\n            <ion-label class=\"headingLabel\">Year of Establishment:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{serviceProviderDetials.year_establishment}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Website URL:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{serviceProviderDetials.website_url}}</ion-label>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/serviceproviderprofile/serviceproviderprofile.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/serviceproviderprofile/serviceproviderprofile.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9zZXJ2aWNlcHJvdmlkZXJwcm9maWxlL3NlcnZpY2Vwcm92aWRlcnByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGVBQWM7RUFDZCxpQkFBZ0IsRUFBQTs7QUFHaEI7RUFDQSxlQUFjO0VBQ2QsY0FBYTtFQUNiLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXByb3ZpZGVycHJvZmlsZS9zZXJ2aWNlcHJvdmlkZXJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nTGFiZWx7XG4gICAgY29sb3I6IzJiMGM0MztcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIH1cbiAgICBcbiAgICAuY29udGVudEluZm97XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgY29sb3I6IzJiMGM0MztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/serviceproviderprofile/serviceproviderprofile.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/serviceproviderprofile/serviceproviderprofile.page.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceproviderprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceproviderprofilePage", function() { return ServiceproviderprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ServiceproviderprofilePage = /** @class */ (function () {
    function ServiceproviderprofilePage(loadingController, dataServices, router, alertCtrl, events, menuCtrl) {
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.serviceProviderDetials = {
            first_name: "",
            email: "",
            mobile: "",
            address: "",
            organizationtype: "",
            year_establishment: "",
            disability_id: "",
            website_url: "",
            country: "",
            verify_email: "",
            business_email: "",
            phone: "",
            designation: "",
            organisation_name: "",
            zip_code: "",
            state: "",
            city: "",
            message: ''
        };
        this.serviceProviderCategory = [];
        this.serviceProviderInfo = [];
        this.serviceProviderOrgInfo = [];
        this.disabilityIds = [];
        this.servicetype_id = [];
    }
    ServiceproviderprofilePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.getServiceProviderInformation();
        this.getCountryArray();
        this.getNotificationBadgeCount();
    };
    ServiceproviderprofilePage.prototype.ngOnInit = function () {
    };
    ServiceproviderprofilePage.prototype.getServiceProviderInformation = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getServiceProviderData().then(function (result) {
            if (result.status == 1) {
                _this.serviceProviderDetials = result.service_provider_details[0];
                _this.disabilitys = result.service_provider_disability_details;
                _this.serviceType = result.service_provider_servicetype_details;
                _this.splitMobile = _this.serviceProviderDetials.mobile.split('').join(' ').replace(/0/g, 'zero');
                if (_this.serviceProviderDetials.organizationtype == '1') {
                    _this.organizationtype = 'Organization';
                }
                else if (_this.serviceProviderDetials.organizationtype == '2') {
                    _this.organizationtype = 'Service Professional';
                }
                else {
                    _this.organizationtype = '';
                }
                localStorage.setItem('userName', _this.serviceProviderDetials.first_name);
                _this.events.publish('Event-UserName');
                _this.serviceProviderInfo = [];
                _this.serviceProviderInfo.push({
                    first_name: _this.serviceProviderDetials.first_name,
                    designation: _this.serviceProviderDetials.designation,
                    email: _this.serviceProviderDetials.email,
                    business_email: _this.serviceProviderDetials.business_email,
                    mobile: _this.serviceProviderDetials.mobile,
                    phone: _this.serviceProviderDetials.phone,
                    address: _this.serviceProviderDetials.address,
                    country: _this.serviceProviderDetials.country == '0' ? '' : _this.serviceProviderDetials.country,
                    state: _this.serviceProviderDetials.state == '0' ? '' : _this.serviceProviderDetials.state,
                    city: _this.serviceProviderDetials.city == '0' ? '' : _this.serviceProviderDetials.city,
                    zip_code: _this.serviceProviderDetials.zip_code,
                });
                _this.disabilityIds = [];
                for (var m = 0; m < _this.disabilitys.length; m++) {
                    _this.disabilityIds.push(_this.disabilitys[m].id);
                }
                _this.servicetype_id = [];
                for (var m = 0; m < _this.serviceType.length; m++) {
                    _this.servicetype_id.push(_this.serviceType[m].id);
                }
                _this.serviceProviderCategory = [];
                if (_this.serviceProviderDetials.organizationtype == '1') {
                    for (var m = 0; m < result.service_provider_organization_details.length; m++) {
                        _this.serviceProviderCategory.push(result.service_provider_organization_details[m].id);
                    }
                }
                _this.serviceProviderOrgInfo = [];
                _this.serviceProviderOrgInfo.push({
                    organisation_name: _this.serviceProviderDetials.organisation_name,
                    organizationtype: _this.serviceProviderDetials.organizationtype,
                    disabilityIds: _this.disabilityIds,
                    servicetype_id: _this.servicetype_id,
                    serviceProviderCategory: _this.serviceProviderCategory,
                    year_establishment: _this.serviceProviderDetials.year_establishment == '0' ? '' : _this.serviceProviderDetials.year_establishment,
                    website_url: _this.serviceProviderDetials.website_url,
                });
                _this.getServiceProviderDDL(_this.serviceProviderDetials.country);
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.serviceProviderDetials.message);
            }
        }, function (error) {
            console.log('Error in service provider profile: ' + JSON.stringify(error));
        });
    };
    ServiceproviderprofilePage.prototype.getCountryArray = function () {
        this.dataServices.getCountryArrayAPI().then(function (result) {
            if (result.status == 1) {
                localStorage.setItem("countryArray", JSON.stringify(result));
            }
        }, function (error) {
            console.log('Error in service provider profile: ' + JSON.stringify(error));
        });
    };
    ServiceproviderprofilePage.prototype.getNotificationBadgeCount = function () {
        var _this = this;
        this.dataServices.getNotificationBadgeCount().then(function (result) {
            if (result.status == 1) {
                _this.badgecount = result.total_notification_count;
            }
        }, function (error) {
            console.log('Error in service provider profile: ' + JSON.stringify(error));
        });
    };
    ServiceproviderprofilePage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    ServiceproviderprofilePage.prototype.getServiceProviderDDL = function (countryId) {
        var _this = this;
        this.dataServices.getDDLAPI(countryId).then(function (result) {
            if (result.status == 1) {
                localStorage.setItem("stateAndCityArray", JSON.stringify(result));
                _this.loadingController.dismiss();
            }
        }, function (error) {
            console.log('Error in service provider profile: ' + JSON.stringify(error));
        });
    };
    ServiceproviderprofilePage.prototype.updateServiceproviderContactInfo = function () {
        this.router.navigate(['/updateserviceprovidercontactinfo', { serviceProviderInfo: JSON.stringify(this.serviceProviderInfo[0]) }]);
    };
    ServiceproviderprofilePage.prototype.updateServiceProviderOrganisationInfo = function () {
        this.router.navigate(['/updateserviceproviderorganisationinfo', { serviceProviderOrgInfo: JSON.stringify(this.serviceProviderOrgInfo[0]) }]);
    };
    //Display loader 
    ServiceproviderprofilePage.prototype.presentLoading = function () {
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
    // Function For Email Verification
    ServiceproviderprofilePage.prototype.emailVerification = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.emailVerification().then(function (result) {
            if (result.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert('Email', result.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('Email', result.message);
            }
        }, function (error) {
            console.log('Error in service provider profile: ' + JSON.stringify(error));
        });
    }; // Function emailVerification Ends Here.
    ServiceproviderprofilePage.prototype.presentAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
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
    ServiceproviderprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-serviceproviderprofile',
            template: __webpack_require__(/*! ./serviceproviderprofile.page.html */ "./src/app/serviceproviderprofile/serviceproviderprofile.page.html"),
            styles: [__webpack_require__(/*! ./serviceproviderprofile.page.scss */ "./src/app/serviceproviderprofile/serviceproviderprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], ServiceproviderprofilePage);
    return ServiceproviderprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=serviceproviderprofile-serviceproviderprofile-module.js.map