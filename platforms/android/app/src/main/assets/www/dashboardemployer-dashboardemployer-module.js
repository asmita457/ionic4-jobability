(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboardemployer-dashboardemployer-module"],{

/***/ "./src/app/dashboardemployer/dashboardemployer.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboardemployer/dashboardemployer.module.ts ***!
  \***************************************************************/
/*! exports provided: dashboardemployerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardemployerPageModule", function() { return dashboardemployerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboardemployer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboardemployer.page */ "./src/app/dashboardemployer/dashboardemployer.page.ts");







var routes = [
    {
        path: '',
        component: _dashboardemployer_page__WEBPACK_IMPORTED_MODULE_6__["dashboardemployerPage"]
    }
];
var dashboardemployerPageModule = /** @class */ (function () {
    function dashboardemployerPageModule() {
    }
    dashboardemployerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboardemployer_page__WEBPACK_IMPORTED_MODULE_6__["dashboardemployerPage"]]
        })
    ], dashboardemployerPageModule);
    return dashboardemployerPageModule;
}());



/***/ }),

/***/ "./src/app/dashboardemployer/dashboardemployer.page.html":
/*!***************************************************************!*\
  !*** ./src/app/dashboardemployer/dashboardemployer.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar class=\"new-background-color\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-item lines=\"none\" class=\"new-background-color\">\n            <ion-title class=\"headerNameCss\">\n                Home\n            </ion-title>\n            <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\"></ion-icon>\n            <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n        </ion-item>\n    </ion-toolbar>\n\n    <div class=\"divPadding\">\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-label class=\"countFontSize\">{{totalJobPost}}</ion-label>\n                <br>\n                <ion-label class=\"labelFontSize\">Job Posted</ion-label>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label class=\"countFontSize\">{{totalApplication}}</ion-label>\n                <br>\n                <ion-label class=\"labelFontSize\">Application Received</ion-label>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-header>\n<ion-content class=\"bacgroundColor\">\n\n    <ion-card *ngFor=\"let item of applicationData\" (click)=\"applicationsDetails(item.id)\">\n        <ion-card-content>\n            <ion-label class=\"countFontSize\">{{item.name}}</ion-label>\n            <br>\n            <ion-label class=\"countFontSize\">{{item.total_application}}</ion-label>\n            <ion-label class=\"labelFontSize\">Applications</ion-label>\n        </ion-card-content>\n    </ion-card>\n    <br>\n    <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/dashboardemployer/dashboardemployer.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/dashboardemployer/dashboardemployer.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardcss {\n  margin-top: -38%;\n  height: 30% !important;\n  line-height: 80px;\n  padding: 5%; }\n\n.searchbar-input {\n  border: 0 !important;\n  box-shadow: none !important; }\n\n.searchbar-search-icon {\n  display: none;\n  width: 0;\n  height: 0; }\n\n.postjobbutton {\n  border: 0.5px solid black;\n  border-radius: 4px;\n  padding: 5px !important;\n  background: #2b0c43;\n  color: white;\n  margin-top: 5%;\n  height: 52px;\n  width: 60% !important;\n  margin-left: 20%;\n  margin-right: 20%;\n  font-size: 15px; }\n\n.searchbar-input.sc-ion-searchbar-md {\n  line-height: 60px !important;\n  padding: 5px !important;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n  border-radius: 5px; }\n\n.searchbar-search-icon.sc-ion-searchbar-md {\n  width: 0px !important;\n  height: 0px !important; }\n\n.searchcard {\n  background: white; }\n\n.labelFontSize {\n  color: #2b0c43;\n  font-size: 15px; }\n\n.countFontSize {\n  font-size: 18px;\n  color: #2b0c43;\n  padding-right: 5%; }\n\n.bacgroundColor {\n  --background: #f6f6ee; }\n\n.divPadding {\n  padding: 2% 5% 2% 5%;\n  border-bottom: 1px solid #807b7b5e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9kYXNoYm9hcmRlbXBsb3llci9kYXNoYm9hcmRlbXBsb3llci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxvQkFBb0I7RUFDcEIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBRUssYUFBWTtFQUNaLFFBQU87RUFDTixTQUFRLEVBQUE7O0FBS1Y7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWE7RUFDYixZQUFXO0VBQ1gscUJBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQVl2QjtFQUNJLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYTtFQUNiLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxlQUFlO0VBQ2YsY0FBYTtFQUNiLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLHFCQUFhLEVBQUE7O0FBRWY7RUFDRSxvQkFBb0I7RUFDcEIsa0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmRlbXBsb3llci9kYXNoYm9hcmRlbXBsb3llci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZGNzc3tcbiAgICBtYXJnaW4tdG9wOiAtMzglO1xuICAgIGhlaWdodDogMzAlICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZzogNSU7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQge1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaGJhci1zZWFyY2gtaWNvblxuIHsgXG4gICAgIGRpc3BsYXk6bm9uZTsgXG4gICAgIHdpZHRoOjA7XG4gICAgICBoZWlnaHQ6MDtcbiAgICBcbiAgICB9XG4gICAgXG5cbiAgICAucG9zdGpvYmJ1dHRvbntcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDojMmIwYzQzO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6NSU7XG4gICAgICAgIGhlaWdodDo1MnB4O1xuICAgICAgICB3aWR0aDo2MCUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjIwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuLy8gLmNhcmRjc3N7XG4vLyAgICAgYmFja2dyb3VuZDp3aGl0ZTtcbi8vICAgICB3aWR0aDogOTYlO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgICBoZWlnaHQ6MTElO1xuLy8gICAgIG1hcmdpbi10b3A6LTI5JTtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAyJTtcbi8vICAgICAvLyBtYXJnaW4tdG9wOiAxNSU7XG4vLyB9XG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWQge1xuICAgIHdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuLnNlYXJjaGNhcmR7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICAubGFiZWxGb250U2l6ZXtcbiAgICBjb2xvcjojMmIwYzQzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuY291bnRGb250U2l6ZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IzJiMGM0MztcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgfVxuICAuYmFjZ3JvdW5kQ29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjZmNmVlO1xuICB9XG4gIC5kaXZQYWRkaW5ne1xuICAgIHBhZGRpbmc6IDIlIDUlIDIlIDUlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA3YjdiNWU7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboardemployer/dashboardemployer.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboardemployer/dashboardemployer.page.ts ***!
  \*************************************************************/
/*! exports provided: dashboardemployerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardemployerPage", function() { return dashboardemployerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");







var dashboardemployerPage = /** @class */ (function () {
    function dashboardemployerPage(router, menuCtrl, activatedRoute, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.countryId = 0;
        this.applicationData = [];
        this.applicationDetails = [];
        this.offset = 0;
        this.onPageLoad();
        this.getAllDDLAPI(this.countryId);
        this.getCountryDDlAPI();
    }
    dashboardemployerPage.prototype.ngOnInit = function () {
    };
    dashboardemployerPage.prototype.ionViewWillEnter = function () {
        // localStorage.clear();
        this.offset = 0;
        this.menuCtrl.enable(true);
        this.getNotificationBadgeCount();
    };
    //function for get all required data for employer dashboard when page is load
    dashboardemployerPage.prototype.onPageLoad = function () {
        this.getEmployerDashBoardDetails(this.offset);
    };
    dashboardemployerPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            // if (this.offset > this.totalApplication) {
            //   this.moreDataAvailable = false
            // } else {
            //   this.moreDataAvailable = true
            _this.getEmployerDashBoardDetails(_this.offset);
            event.target.complete();
            // }
        }, 500);
    };
    dashboardemployerPage.prototype.getCountryDDlAPI = function () {
        var _this = this;
        this.resultData = [];
        this.dataServices.getCountryArrayAPI().then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                localStorage.setItem("countryArray", JSON.stringify(_this.resultData));
            }
            else {
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    dashboardemployerPage.prototype.getAllDDLAPI = function (countryId) {
        var _this = this;
        this.dataServices.getDDLAPI(countryId).then(function (result) {
            _this.getDLLAPIData = result;
            if (_this.getDLLAPIData.status == 1) {
                localStorage.setItem("employerDDLResponse", JSON.stringify(_this.getDLLAPIData.ddl_list));
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //get Employer Dashboard Details
    dashboardemployerPage.prototype.getEmployerDashBoardDetails = function (offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getEmployerDashBoardDetails(offset).then(function (result) {
            _this.getEmpDashBoardResponse = result;
            if (_this.getEmpDashBoardResponse.status == 1) {
                if (_this.offset == 0) {
                    // this.offset = 1
                    _this.loadingController.dismiss();
                }
                _this.totalJobPost = _this.getEmpDashBoardResponse.dashboard_count_data.total_job_post;
                _this.totalApplication = _this.getEmpDashBoardResponse.dashboard_count_data.total_application;
                _this.applicationData = _this.applicationData.concat(_this.getEmpDashBoardResponse.dashboard_application_data);
                localStorage.setItem("applicationData", JSON.stringify(_this.applicationData));
                if (_this.totalJobPost > _this.applicationData.length) {
                    _this.moreDataAvailable = true;
                }
                else {
                    _this.moreDataAvailable = false;
                }
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
    //Function For Applications Details
    dashboardemployerPage.prototype.applicationsDetails = function (id, offset) {
        var _this = this;
        this.presentLoading();
        this.dataServices.applicationDetails(id, offset).then(function (result) {
            _this.aplicationsResponse = result;
            if (_this.aplicationsResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.applicationDetailsResponse = _this.aplicationsResponse.application_apply_data;
                localStorage.setItem("jobApplications", JSON.stringify(_this.applicationDetailsResponse));
                localStorage.setItem("applicationId", id);
                // this.router.navigate(['/employerjobapplications', { jobApplications: JSON.stringify(this.applicationDetailsResponse), applicationId: id }]);
                _this.router.navigate(['/employerjobapplications', { applicationId: id }]);
            }
            else {
                _this.loadingController.dismiss();
                // this.presentAlert('', this.applicationDetailsResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    dashboardemployerPage.prototype.getNotificationBadgeCount = function () {
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
    dashboardemployerPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    //Display loader 
    dashboardemployerPage.prototype.presentLoading = function () {
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
    dashboardemployerPage.prototype.presentAlert = function (title, message) {
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
    dashboardemployerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardemployer',
            template: __webpack_require__(/*! ./dashboardemployer.page.html */ "./src/app/dashboardemployer/dashboardemployer.page.html"),
            styles: [__webpack_require__(/*! ./dashboardemployer.page.scss */ "./src/app/dashboardemployer/dashboardemployer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], dashboardemployerPage);
    return dashboardemployerPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboardemployer-dashboardemployer-module.js.map