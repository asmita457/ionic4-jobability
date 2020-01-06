(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboardserviceprovider-dashboardserviceprovider-module"],{

/***/ "./src/app/dashboardserviceprovider/dashboardserviceprovider.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboardserviceprovider/dashboardserviceprovider.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardserviceproviderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardserviceproviderPageModule", function() { return DashboardserviceproviderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboardserviceprovider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboardserviceprovider.page */ "./src/app/dashboardserviceprovider/dashboardserviceprovider.page.ts");







var routes = [
    {
        path: '',
        component: _dashboardserviceprovider_page__WEBPACK_IMPORTED_MODULE_6__["DashboardserviceproviderPage"]
    }
];
var DashboardserviceproviderPageModule = /** @class */ (function () {
    function DashboardserviceproviderPageModule() {
    }
    DashboardserviceproviderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot({
                    mode: 'ios',
                    scrollAssist: false,
                    scrollPadding: false
                }),
            ],
            declarations: [_dashboardserviceprovider_page__WEBPACK_IMPORTED_MODULE_6__["DashboardserviceproviderPage"]]
        })
    ], DashboardserviceproviderPageModule);
    return DashboardserviceproviderPageModule;
}());



/***/ }),

/***/ "./src/app/dashboardserviceprovider/dashboardserviceprovider.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboardserviceprovider/dashboardserviceprovider.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-toolbar class=\"new-background-color\">\n <ion-buttons slot=\"start\">\n <ion-menu-button></ion-menu-button>\n </ion-buttons>\n <ion-item lines=\"none\" class=\"new-background-color\">\n <ion-title>\n Home\n </ion-title>\n <ion-icon name=\"notifications\"></ion-icon>\n </ion-item>\n</ion-toolbar> -->\n\n<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" class=\"new-background-color\">\n      <ion-title class=\"headerNameCss\">\n        Home\n      </ion-title>\n      <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\"></ion-icon>\n      <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>    </ion-item>\n  </ion-toolbar>\n\n  <div class=\"divPadding\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label class=\"countFontSize\">{{totalApplication}}</ion-label>\n        <ion-label class=\"labelFontSize\">Services Posted</ion-label>\n      </ion-col>\n\n    </ion-row>\n  </div>\n</ion-header>\n\n<ion-content class=\"bacgroundColor\">\n\n  <ion-card *ngFor=\"let item of servicesArray; let j = index\" class=\"cardMargins\">\n    <ion-card-content style=\"background-color: white;\">\n      <ion-list>\n        <ion-grid (click)=\"servicesDetail(item.id)\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label style=\"font-size: 18px;color:#2b0c43;font-weight: 600;\">{{item.name}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"padding:5px\">\n            <ion-col size=\"1\">\n              <ion-img src=\"../../assets/img/location.png\" style=\"width:15px; height:15px; \"></ion-img>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label style=\"font-size: 15px;color:#2b0c43 ; margin-top:-3px\">{{item.service_location_name}}\n              </ion-label>\n            </ion-col>\n            <br>\n          </ion-row>\n          <i>\n            <div *ngIf=\"item.posted_age == 0\">\n              <ion-label style=\"font-size: 15px;color:#2b0c43; padding :5px; font-weight:italic\">Posted: Today\n              </ion-label><br>\n            </div>\n            <div *ngIf=\"item.posted_age != 0\">\n              <ion-label style=\"font-size: 15px;color:#2b0c43; padding :5px; font-weight:italic\">Posted:\n                {{item.posted_age}}</ion-label><br>\n            </div>\n          </i>\n        </ion-grid>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <br> <br><br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  <button class=\"postjobbutton bottomposition\" (click)=\"navToPostService()\">POST SERVICE</button>\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboardserviceprovider/dashboardserviceprovider.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboardserviceprovider/dashboardserviceprovider.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".postjobbutton {\n  border: 0.5px solid black;\n  background: #2b0c43;\n  color: white;\n  height: 52px;\n  width: 100% !important;\n  font-size: 15px; }\n\n.searchcard {\n  background: white;\n  margin-top: -34px;\n  height: 60px; }\n\n.SearchInput {\n  font-size: 18px !important;\n  overflow-y: scroll !important;\n  border-bottom: 1px solid #c8c7cc !important;\n  width: 90% !important;\n  margin-left: 5% !important; }\n\n.bottomposition {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0; }\n\n.labelFontSize {\n  color: #2b0c43;\n  font-size: 15px; }\n\n.countFontSize {\n  font-size: 18px;\n  color: #2b0c43;\n  padding-right: 5%; }\n\n.divPadding {\n  padding: 2% 5% 2% 5%;\n  border-bottom: 1px solid #807b7b5e; }\n\n.bacgroundColor {\n  --background: #f6f6ee; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9kYXNoYm9hcmRzZXJ2aWNlcHJvdmlkZXIvZGFzaGJvYXJkc2VydmljZXByb3ZpZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUV6QixtQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVc7RUFDWCxzQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUdmO0VBQ0EsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2I7RUFDQywwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLDJDQUEyQztFQUMzQyxxQkFBcUI7RUFDckIsMEJBQTBCLEVBQUE7O0FBRTNCO0VBQ0MsZUFBZTtFQUNmLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUSxFQUFBOztBQUdUO0VBQ0MsY0FBYTtFQUNiLGVBQWUsRUFBQTs7QUFFaEI7RUFDQyxlQUFlO0VBQ2YsY0FBYTtFQUNiLGlCQUFpQixFQUFBOztBQUVsQjtFQUNDLG9CQUFvQjtFQUNwQixrQ0FBa0MsRUFBQTs7QUFFbkM7RUFDQyxxQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkc2VydmljZXByb3ZpZGVyL2Rhc2hib2FyZHNlcnZpY2Vwcm92aWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdGpvYmJ1dHRvbntcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiMyYjBjNDM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OjUycHg7XG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIFxuICAuc2VhcmNoY2FyZHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IC0zNHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIH1cbiBcbiAuU2VhcmNoSW5wdXR7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcbiB9XG4gLmJvdHRvbXBvc2l0aW9ue1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMDtcbiB9XG4gXG4gLmxhYmVsRm9udFNpemV7XG4gIGNvbG9yOiMyYjBjNDM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiB9XG4gLmNvdW50Rm9udFNpemV7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IzJiMGM0MztcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gfVxuIC5kaXZQYWRkaW5ne1xuICBwYWRkaW5nOiAyJSA1JSAyJSA1JTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDdiN2I1ZTtcbiB9XG4gLmJhY2dyb3VuZENvbG9ye1xuICAtLWJhY2tncm91bmQ6ICNmNmY2ZWU7XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboardserviceprovider/dashboardserviceprovider.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboardserviceprovider/dashboardserviceprovider.page.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardserviceproviderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardserviceproviderPage", function() { return DashboardserviceproviderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");





var DashboardserviceproviderPage = /** @class */ (function () {
    function DashboardserviceproviderPage(menuCtrl, router, loadingController, dataServices, alertController) {
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertController = alertController;
        this.offset = 0;
        this.servicesArray = [];
    }
    DashboardserviceproviderPage.prototype.ngOnInit = function () {
    };
    DashboardserviceproviderPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.getNotificationBadgeCount();
        this.offset = 0;
        this.servicesArray = [];
        this.getSPDetails(this.offset);
    };
    //get Employer Dashboard Details
    DashboardserviceproviderPage.prototype.getSPDetails = function (offset) {
        var _this = this;
        this.presentLoading();
        this.dataServices.getSPDashBoardDetails(offset).then(function (result) {
            if (result.status == 1) {
                _this.totalApplication = result.my_services_total_count;
                _this.servicesArray = _this.servicesArray.concat(result.my_services_list);
                if (_this.totalApplication < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // getEmployerDashBoardDetails Function Ends Here.
    DashboardserviceproviderPage.prototype.getNotificationBadgeCount = function () {
        var _this = this;
        this.dataServices.getNotificationBadgeCount().then(function (result) {
            if (result.status == 1) {
                _this.badgecount = result.total_notification_count;
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    DashboardserviceproviderPage.prototype.navToPostService = function () {
        this.getServiceProviderInformation();
    };
    DashboardserviceproviderPage.prototype.servicesDetail = function (serviceId) {
        this.router.navigate(['/servicesdetailinfo', { item: serviceId }]);
    };
    DashboardserviceproviderPage.prototype.getServiceProviderInformation = function () {
        var _this = this;
        this.uacc_id = localStorage.getItem("users_id");
        this.presentLoading();
        this.dataServices.getServiceProviderData().then(function (result) {
            if (result.status == 1) {
                _this.verify_email = result.service_provider_details[0].verify_email;
                if (_this.verify_email == 0) {
                    _this.loadingController.dismiss();
                    _this.presentAlertCtrl('', 'Email address is not verified.');
                }
                else {
                    _this.loadingController.dismiss();
                    _this.router.navigate(['/postservice']);
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlertCtrl('', result.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    DashboardserviceproviderPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.totalApplication) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getSPDetails(_this.offset);
            }
        }, 500);
    };
    DashboardserviceproviderPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    //Display loader 
    DashboardserviceproviderPage.prototype.presentLoading = function () {
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
    DashboardserviceproviderPage.prototype.presentAlertCtrl = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
    DashboardserviceproviderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardserviceprovider',
            template: __webpack_require__(/*! ./dashboardserviceprovider.page.html */ "./src/app/dashboardserviceprovider/dashboardserviceprovider.page.html"),
            styles: [__webpack_require__(/*! ./dashboardserviceprovider.page.scss */ "./src/app/dashboardserviceprovider/dashboardserviceprovider.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], DashboardserviceproviderPage);
    return DashboardserviceproviderPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboardserviceprovider-dashboardserviceprovider-module.js.map