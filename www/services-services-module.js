(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services.page */ "./src/app/services/services.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]
    }
];
var ServicesPageModule = /** @class */ (function () {
    function ServicesPageModule() {
    }
    ServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]]
        })
    ], ServicesPageModule);
    return ServicesPageModule;
}());



/***/ }),

/***/ "./src/app/services/services.page.html":
/*!*********************************************!*\
  !*** ./src/app/services/services.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-title>\n      My Services\n    </ion-title>\n    <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\" aria-label=\"notifications button\" alt=\"notifications button\"></ion-icon>\n    <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n  </ion-item>\n</ion-toolbar>\n<ion-content>\n\n  <!-- <h5 align=\"center\" style=\"margin-top:50%\">Coming Soon...!</h5> -->\n\n  <ion-card *ngFor=\"let item of servicesArray; let j = index\" class=\"cardMargins\">\n    <ion-card-content>\n      <ion-list>\n        <ion-grid (click)=\"servicesDetail(j)\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label style=\"font-size: 18px;color:#2b0c43;font-weight: 600;\">{{item.name}}</ion-label>\n\n            </ion-col>\n          </ion-row>\n\n          <ion-row style=\"padding:5px\">\n            <ion-col size=\"1\">\n              <ion-img src=\"../../assets/img/location.png\" style=\"width:15px; height:15px; \"></ion-img>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label style=\"font-size: 15px;color:#2b0c43 ; margin-top:-3px\">{{item.service_location_name}}\n              </ion-label>\n            </ion-col>\n            <br>\n          </ion-row>\n\n          <i>\n            <div *ngIf=\"item.posted_age == 0\">\n              <ion-label style=\"font-size: 15px;color:#2b0c43; padding :5px; font-weight:italic\">Posted: Today\n              </ion-label><br>\n            </div>\n            <div *ngIf=\"item.posted_age != 0\">\n              <ion-label style=\"font-size: 15px;color:#2b0c43; padding :5px; font-weight:italic\">Posted:\n                {{item.posted_age}}\n              </ion-label><br>\n            </div>\n          </i>\n        </ion-grid>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab  aria-label=\"post service\" ion-fab color=#2b0c43 vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"navigateToPostServices()\">\n    <ion-fab-button  aria-label=\"post service\">\n      <ion-icon name=\"add\"  aria-label=\"post service\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/services/services.page.scss":
/*!*********************************************!*\
  !*** ./src/app/services/services.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/services/services.page.ts":
/*!*******************************************!*\
  !*** ./src/app/services/services.page.ts ***!
  \*******************************************/
/*! exports provided: ServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");





var ServicesPage = /** @class */ (function () {
    function ServicesPage(router, menuCtrl, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.applicationData = [];
        this.applicationDetails = [];
        this.offset = 0;
        this.servicesArray = [];
        this.postedAge = [];
    }
    ServicesPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.onPageLoad();
        this.servicesArray = [];
        this.getNotificationBadgeCount();
    };
    ServicesPage.prototype.servicesDetail = function (index) {
        console.log('Selected item:', this.servicesArray[index]);
        // this.router.navigate(['/servicesdetailinfo'])
        this.router.navigate(['/servicesdetailinfo', { item: this.servicesArray[index].id }]);
    };
    ServicesPage.prototype.ngOnInit = function () {
    };
    ServicesPage.prototype.onPageLoad = function () {
        this.offset = 0;
        this.servicesArray = [];
        this.getSPDetails(this.offset);
    };
    ServicesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.totalApplication) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getSPDetails(_this.offset);
                event.target.complete();
            }
        }, 500);
    };
    ServicesPage.prototype.navigateToPostServices = function () {
        this.getServiceProviderInformation();
    };
    ServicesPage.prototype.getServiceProviderInformation = function () {
        var _this = this;
        this.uacc_id = localStorage.getItem("users_id");
        console.log('id::' + this.uacc_id);
        this.presentLoading();
        this.dataServices.getServiceProviderData().then(function (result) {
            console.log(result);
            if (result.status == 1) {
                _this.verify_email = result.service_provider_details[0].verify_email;
                if (_this.verify_email == 0) {
                    _this.loadingController.dismiss();
                    _this.presentAlert('', "Email address is not verified.");
                }
                else {
                    _this.loadingController.dismiss();
                    _this.router.navigate(['/postservice']);
                }
            }
            else {
                _this.loadingController.dismiss();
                console.log(result.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //get Employer Dashboard Details
    ServicesPage.prototype.getSPDetails = function (offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getSPDashBoardDetails(offset).then(function (result) {
            _this.getSPResponse = result;
            if (_this.getSPResponse.status == 1) {
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                console.log('Services Response:', JSON.stringify(_this.getSPResponse));
                // this.loadingController.dismiss();
                _this.totalApplication = _this.getSPResponse.my_services_total_count;
                _this.servicesArray = _this.servicesArray.concat(_this.getSPResponse.my_services_list);
                if (_this.totalApplication < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                // this.totalJobPost = this.getSPResponse.dashboard_count_data.total_job_post;
                // this.totalApplication = this.getSPResponse.dashboard_count_data.total_application;
                // this.applicationData = this.applicationData.concat(this.getSPResponse.dashboard_application_data);
                // this.postedAge = this.getSPResponse.
                // localStorage.setItem("applicationData", JSON.stringify(this.applicationData));
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                // this.presentAlert('', this.applicationDetailsResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // getEmployerDashBoardDetails Function Ends Here.
    //Display loader 
    ServicesPage.prototype.presentLoading = function () {
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
                        }, 500);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    ServicesPage.prototype.presentAlert = function (title, message) {
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
    ServicesPage.prototype.getNotificationBadgeCount = function () {
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
            // this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    ServicesPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    ServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.page.html */ "./src/app/services/services.page.html"),
            styles: [__webpack_require__(/*! ./services.page.scss */ "./src/app/services/services.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ServicesPage);
    return ServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=services-services-module.js.map