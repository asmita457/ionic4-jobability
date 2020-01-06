(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["joblistingemployee-joblistingemployee-module"],{

/***/ "./src/app/joblistingemployee/joblistingemployee.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/joblistingemployee/joblistingemployee.module.ts ***!
  \*****************************************************************/
/*! exports provided: JoblistingemployeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistingemployeePageModule", function() { return JoblistingemployeePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _joblistingemployee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joblistingemployee.page */ "./src/app/joblistingemployee/joblistingemployee.page.ts");







var routes = [
    {
        path: '',
        component: _joblistingemployee_page__WEBPACK_IMPORTED_MODULE_6__["JoblistingemployeePage"]
    }
];
var JoblistingemployeePageModule = /** @class */ (function () {
    function JoblistingemployeePageModule() {
    }
    JoblistingemployeePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_joblistingemployee_page__WEBPACK_IMPORTED_MODULE_6__["JoblistingemployeePage"]]
        })
    ], JoblistingemployeePageModule);
    return JoblistingemployeePageModule;
}());



/***/ }),

/***/ "./src/app/joblistingemployee/joblistingemployee.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/joblistingemployee/joblistingemployee.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n  <ion-buttons slot=\"start\">\n  <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n  <ion-item lines=\"none\" class=\"new-background-color\">\n  <ion-title>\n  Job Listings\n  </ion-title>\n  <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\"></ion-icon>\n  <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>  </ion-item>\n  </ion-toolbar>\n  \n  <div class=\"divPadding\" style=\"padding:3% 5% 0% 1%\">\n  <ion-row>\n  <ion-col size=\"12\">\n  <ion-label style=\"color:#2b0c43\">{{jobListingLength}} Jobs</ion-label>\n  </ion-col>\n  </ion-row>\n  </div>\n  </ion-header>\n  \n  \n  \n  <ion-content class=\"viewpost\">\n  \n  \n  <div *ngIf=\"showPostJobList\" class=\"headerNameCss\">\n  <ion-card class=\"cardMargins\" *ngFor=\"let item of employerJobListingArray\" style=\"margin-top:5px\">\n  <ion-card-content>\n  <ion-row>\n  <ion-col size=\"9\" (click)=\"employerJobDetail(item.id)\">\n  <ion-label class=\"headingLabel\">Job Title:</ion-label><br>\n  <ion-label class=\"contentInfo\">{{item.name}}</ion-label>\n  <br>\n  <ion-label class=\"headingLabel\">Company Name:</ion-label><br>\n  <ion-label class=\"contentInfo\">{{item.company_name}}</ion-label><br>\n  \n  <ion-row lines=\"none\" class=\"inoItem\">\n  <ion-img src=\"../../assets/img/experience.png\"\n  style=\"width:15px; height:15px;margin-right:10px; margin-top:3px\">\n  </ion-img>\n  <ion-label class=\"ionimgcss contentInfo\">{{item.min_experience}} - {{item.max_experience}} years</ion-label>\n  </ion-row>\n  \n  <ion-row lines=\"none\" class=\"inoItem\">\n  <ion-img src=\"../../assets/img/location.png\"\n  style=\"width:15px; height:15px;margin-right:10px; margin-top:3px\"></ion-img>\n  <ion-label class=\"contentInfo\">{{item.location_name}}</ion-label>\n  </ion-row>\n  <ion-row>\n  <ion-label class=\"headingLabel\">Posted Age:</ion-label>\n  </ion-row>\n  <ion-row>\n  <i>\n  <ion-label style=\"margin-top:-5px;\" class=\"contentInfo\">{{item.posted_age}}</ion-label>\n  </i>\n  </ion-row>\n  \n  \n  </ion-col>\n  <ion-col size=\"3\">\n  <br>\n  <br><br>\n  <ion-label class=\"rightposition contentInfo\" style=\"color:#2b0c43\"\n  (click)=\"queryRaised(item.id, item.total_raised_query_count)\"><u>{{item.total_raised_query_count}} Query\n  Raised</u></ion-label>\n  </ion-col>\n  \n  </ion-row>\n  \n  </ion-card-content>\n  </ion-card>\n  </div>\n  \n  <ion-card class=\"cardMargins\" *ngIf=\"!showPostJobList\">\n  <ion-card-content>\n  <span class=\"ion-text-center\" style=\"font-size: x-large;color:#2b0c43;\">Oops! No Post Jobs Available.</span>\n  </ion-card-content>\n  </ion-card>\n\n  <br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/joblistingemployee/joblistingemployee.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/joblistingemployee/joblistingemployee.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rightposition {\n  left: 0px; }\n\n.headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9qb2JsaXN0aW5nZW1wbG95ZWUvam9ibGlzdGluZ2VtcGxveWVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUVJLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGNBQWE7RUFDYixlQUFjO0VBQ2QsaUJBQWdCLEVBQUE7O0FBR2hCO0VBQ0EsZUFBYztFQUNkLGNBQWE7RUFDYixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2pvYmxpc3RpbmdlbXBsb3llZS9qb2JsaXN0aW5nZW1wbG95ZWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAuYm90dG9tcG9zaXRpb257XG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgIGxlZnQ6IDEwcHg7XG4vLyAgICAgYm90dG9tOiAwO1xuLy8gICAgIHJpZ2h0OiAxMHB4O1xuLy8gfVxuXG4ucmlnaHRwb3NpdGlvbntcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xufVxuXG4uaGVhZGluZ0xhYmVse1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRlbnRJbmZve1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/joblistingemployee/joblistingemployee.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/joblistingemployee/joblistingemployee.page.ts ***!
  \***************************************************************/
/*! exports provided: JoblistingemployeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistingemployeePage", function() { return JoblistingemployeePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");





var JoblistingemployeePage = /** @class */ (function () {
    function JoblistingemployeePage(router, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.employerJobListingArray = [];
        this.showPostJobList = true;
        this.disability_id = [];
        this.offset = 0;
    }
    JoblistingemployeePage.prototype.ngOnInit = function () {
        // this.getJobListingResult();
    };
    JoblistingemployeePage.prototype.ionViewWillEnter = function () {
        this.presentLoading();
        this.employerJobListingArray = [];
        this.getJobListingResult();
        this.offset = 0;
        this.getNotificationBadgeCount();
    };
    JoblistingemployeePage.prototype.getNotificationBadgeCount = function () {
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
    JoblistingemployeePage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    JoblistingemployeePage.prototype.getJobListingResult = function () {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.uacc_id = localStorage.getItem('users_id');
        // this.presentLoading();
        this.dataServices.getJobListingAPI(this.uacc_id, this.offset).then(function (result) {
            _this.jobListingResponse = result;
            if (_this.jobListingResponse.status == 1) {
                _this.employerJobListingArray = _this.employerJobListingArray.concat(_this.jobListingResponse.job_list);
                _this.jobListingLength = _this.jobListingResponse.job_total_count;
                console.log('search resume data:', _this.jobListingResponse);
                if (_this.offset == 0 && _this.jobListingLength > _this.dataServices.globalOffset()) {
                    _this.loadingController.dismiss();
                    // this.offset = 1
                }
                if (_this.jobListingLength < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.jobApplicationCount != 0) {
                    _this.showPostJobList = true;
                }
                else {
                    _this.showPostJobList = false;
                }
            }
            else {
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                alert(_this.jobListingResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Function for show detail of employer post job
    JoblistingemployeePage.prototype.employerJobDetail = function (id) {
        this.router.navigate(['/employerjobdetail', { jobId: id }]);
    }; //employerJobDetail Function Eds Here.
    // Function For Load Data While Scrolling
    JoblistingemployeePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            // event.target.disabled = false;
            // this.infiniteScroll.disabled = false;
            if (_this.offset > _this.jobListingLength) {
                // event.target.disabled = true;
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getJobListingResult();
                event.target.complete();
            }
        }, 100);
    }; //loadData Function Eds Here.
    //Display loader 
    JoblistingemployeePage.prototype.presentLoading = function () {
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
    JoblistingemployeePage.prototype.queryRaised = function (id, total_raised_query_count) {
        console.log('id', id);
        console.log('total_raised_query_count', total_raised_query_count);
        if (total_raised_query_count == 0) {
            this.presentAlert('No query raised', '');
        }
        else {
            this.router.navigate(['/employerqueryraised', { id: id }]);
        }
    };
    JoblistingemployeePage.prototype.presentAlert = function (title, message) {
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
    JoblistingemployeePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joblistingemployee',
            template: __webpack_require__(/*! ./joblistingemployee.page.html */ "./src/app/joblistingemployee/joblistingemployee.page.html"),
            styles: [__webpack_require__(/*! ./joblistingemployee.page.scss */ "./src/app/joblistingemployee/joblistingemployee.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], JoblistingemployeePage);
    return JoblistingemployeePage;
}());



/***/ })

}]);
//# sourceMappingURL=joblistingemployee-joblistingemployee-module.js.map