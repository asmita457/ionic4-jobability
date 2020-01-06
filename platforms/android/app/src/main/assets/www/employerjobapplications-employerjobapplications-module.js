(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employerjobapplications-employerjobapplications-module"],{

/***/ "./src/app/employerjobapplications/employerjobapplications.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/employerjobapplications/employerjobapplications.module.ts ***!
  \***************************************************************************/
/*! exports provided: EmployerjobapplicationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerjobapplicationsPageModule", function() { return EmployerjobapplicationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employerjobapplications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employerjobapplications.page */ "./src/app/employerjobapplications/employerjobapplications.page.ts");







var routes = [
    {
        path: '',
        component: _employerjobapplications_page__WEBPACK_IMPORTED_MODULE_6__["EmployerjobapplicationsPage"]
    }
];
var EmployerjobapplicationsPageModule = /** @class */ (function () {
    function EmployerjobapplicationsPageModule() {
    }
    EmployerjobapplicationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employerjobapplications_page__WEBPACK_IMPORTED_MODULE_6__["EmployerjobapplicationsPage"]]
        })
    ], EmployerjobapplicationsPageModule);
    return EmployerjobapplicationsPageModule;
}());



/***/ }),

/***/ "./src/app/employerjobapplications/employerjobapplications.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/employerjobapplications/employerjobapplications.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n\n  <ion-row>\n    <ion-col size=\"2\" (click)=\"goBack()\">\n      <ion-img src=\"../../assets/img/backnavigation.png\" style=\"padding: 18% 25% 25% 25%;\">\n      </ion-img>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-select class=\"headerNameCss\" style=\"width: 100%;margin-top:-1px\" interface=\"popover\"\n        (ionChange)=\"jobApplications($event)\" placeholder=\"Select Application\">\n        <ion-select-option *ngFor=\"let item of applicationData;\" [selected]=\"item.id == applicationId\" [value]=\"item\">\n          {{item.name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>\n\n<ion-content class=\"viewpost\">\n  <div class=\"divPadding\">\n    <ion-row>\n      <ion-label class=\"countFontSize\">{{jobApplicationCount}} Applications</ion-label>\n    </ion-row>\n  </div>\n  <div *ngIf=\"showJobApplications\">\n    <ion-card class=\"cardMargins\" *ngFor=\"let item of jobApplication\" (click)=\"candidateProfileDetails(item.id)\"\n      style=\"margin-top:5px\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-label class=\"headingLabel\">Name:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.first_name}}</ion-label> <br>\n\n            <ion-label class=\"headingLabel\">Company Name:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.company_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Designation:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.designation}}</ion-label>\n          </ion-col>\n\n          <ion-col size=\"3\">\n            <div class=\"profile-picture big-profile-picture\">\n              <!-- <ion-img *ngIf=\"item.profile_photo_path!=''\" src=\"{{item.profile_photo_path}}\"></ion-img> -->\n              <img *ngIf=\"item.profile_photo_path!=''\" src=\"{{item.profile_photo_path}}\" aria-label=\"profile picture\">\n              <img *ngIf=\"item.profile_photo_path==''\" src=\"../../assets/img/profileimage.png\" aria-label=\"profile picture\">\n              <!-- <ion-img *ngIf=\"item.profile_photo_path==''\" src=\"../../assets/img/profileimage.png\"></ion-img> -->\n            </div>\n\n            <!-- <img class=\"circle-pic\" src=\"http://www.jobtest.jobability.org/assets/uploads/images/seekerphoto/thumb/2019/nature12.jpg\"/> -->\n\n          </ion-col>\n          <ion-item lines=\"none\" class=\"inoItem\" style=\"margin-top: -9px\">\n            <ion-img src=\"../../assets/img/experience.png\" style=\"width: 20px;\"></ion-img>\n            <ion-label style=\"padding-left: 6px\" class=\"contentInfo\">{{item.years_total_experience}} years</ion-label>\n\n          </ion-item>\n\n          <ion-item lines=\"none\" class=\"inoItem\" style=\"margin-top: -9px\">\n            <ion-img src=\"../../assets/img/location.png\" style=\"width: 20px;\"></ion-img>\n            <ion-label style=\"padding-left: 3px\" class=\"contentInfo\">{{item.location_name}}</ion-label>\n\n          </ion-item>\n          <!-- <ion-row>\n  <ion-col size=\"1\">\n  <ion-img src=\"../../assets/img/experience.png\" style=\"width: 20px;\"></ion-img>\n  </ion-col>\n  <ion-label>{{item.years_total_experience}} years</ion-label>\n  <ion-col size=\"11\" class=\"headerNameCss\" style=\"padding-left: 5%;\">{{item.years_total_experience}} years</ion-col>\n  </ion-row> -->\n          <!-- <ion-row>\n  <ion-col size=\"1\">\n  <ion-img src=\"../../assets/img/location.png\" style=\"width: 20px;\"></ion-img>\n  </ion-col>\n  <ion-col size=\"11\" class=\"headerNameCss\" style=\"padding-left: 5%;\">{{item.location_name}}</ion-col>\n  </ion-row> -->\n\n\n        </ion-row>\n        <ion-label class=\"headingLabel\">Disability Type:</ion-label><br>\n        <ion-label class=\"contentInfo\">{{item.disability_name}}</ion-label>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-card class=\"cardMargins\" *ngIf=\"!showJobApplications\">\n    <ion-card-content>\n      <span class=\"ion-text-center\" style=\"font-size: x-large;color:#2b0c43;\">Oops! No Job Applications.</span>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/employerjobapplications/employerjobapplications.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/employerjobapplications/employerjobapplications.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ionSelect {\n  --background: var(--ion-item-background,var(--ion-background-color)); }\n\n.select-text {\n  color: #2b0c43 !important; }\n\n.divPadding {\n  padding: 5% 5% 5% 5%;\n  border-bottom: 1px solid #807b7b5e; }\n\n.countFontSize {\n  font-size: 18px;\n  color: #2b0c43;\n  padding-right: 5%; }\n\n.labelFontSize {\n  color: #2b0c43;\n  font-size: 15px; }\n\n.noApplicationForJob {\n  width: 80%;\n  height: 10%;\n  overflow: auto;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.circle-pic {\n  width: 60px;\n  height: 50px;\n  border-radius: 50%; }\n\n.headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n.inoItem {\n  --padding-start: 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBsb3llcmpvYmFwcGxpY2F0aW9ucy9lbXBsb3llcmpvYmFwcGxpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvRUFBYSxFQUFBOztBQUdiO0VBQ0EseUJBQXlCLEVBQUE7O0FBR3pCO0VBQ0Esb0JBQW9CO0VBQ3BCLGtDQUFrQyxFQUFBOztBQUVsQztFQUNBLGVBQWU7RUFDZixjQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBRWpCO0VBQ0EsY0FBYTtFQUNiLGVBQWUsRUFBQTs7QUFHZjtFQUNBLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUlSO0VBQ0EsV0FBVTtFQUNWLFlBQVc7RUFFWCxrQkFBa0IsRUFBQTs7QUFHbEI7RUFDQSxjQUFhO0VBQ2IsZUFBYztFQUNkLGlCQUFnQixFQUFBOztBQUdoQjtFQUNBLGVBQWM7RUFDZCxjQUFhO0VBQ2IscUJBQXFCLEVBQUE7O0FBR3JCO0VBQ0EsbUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llcmpvYmFwcGxpY2F0aW9ucy9lbXBsb3llcmpvYmFwcGxpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uU2VsZWN0e1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCx2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcikpO1xuICAgIH1cbiAgICBcbiAgICAuc2VsZWN0LXRleHQge1xuICAgIGNvbG9yOiAjMmIwYzQzICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5kaXZQYWRkaW5ne1xuICAgIHBhZGRpbmc6IDUlIDUlIDUlIDUlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODA3YjdiNWU7XG4gICAgfVxuICAgIC5jb3VudEZvbnRTaXple1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjojMmIwYzQzO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIH1cbiAgICAubGFiZWxGb250U2l6ZXtcbiAgICBjb2xvcjojMmIwYzQzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgXG4gICAgLm5vQXBwbGljYXRpb25Gb3JKb2J7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLmNpcmNsZS1waWN7XG4gICAgd2lkdGg6NjBweDtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIFxuICAgIC5oZWFkaW5nTGFiZWx7XG4gICAgY29sb3I6IzJiMGM0MztcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIH1cbiAgICBcbiAgICAuY29udGVudEluZm97XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgY29sb3I6IzJiMGM0MztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIFxuICAgIC5pbm9JdGVte1xuICAgIC0tcGFkZGluZy1zdGFydDogMCU7XG4gICAgXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/employerjobapplications/employerjobapplications.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employerjobapplications/employerjobapplications.page.ts ***!
  \*************************************************************************/
/*! exports provided: EmployerjobapplicationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerjobapplicationsPage", function() { return EmployerjobapplicationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");







var EmployerjobapplicationsPage = /** @class */ (function () {
    function EmployerjobapplicationsPage(router, location, activatedRoute, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.results = [];
        this.applicationDetails = [];
        this.offset = 0;
        this.onPageLoad();
    }
    EmployerjobapplicationsPage.prototype.ngOnInit = function () {
    };
    EmployerjobapplicationsPage.prototype.goBack = function () {
        // this.location.back();
        this.router.navigate(['/dashboardemployer']);
    };
    //onPageLoad function call when page is load
    EmployerjobapplicationsPage.prototype.onPageLoad = function () {
        this.offset = 0;
        this.jobApplication = [];
        this.applicationData = JSON.parse(localStorage.getItem("applicationData"));
        // this.jobApplication = JSON.parse((this.activatedRoute.snapshot.paramMap.get('jobApplications')));
        // this.jobApplication = JSON.parse(localStorage.getItem("jobApplications"))
        this.jobApplicationCount = this.jobApplication.length;
        if (this.jobApplicationCount > 0) {
            this.profile_photo_path = this.jobApplication[0].profile_photo_path;
        }
        this.applicationId = localStorage.getItem("applicationId");
        this.filterApplications(this.applicationId, this.offset);
        // this.applicationId = JSON.parse((this.activatedRoute.snapshot.paramMap.get('applicationId')));
        this.jobApplicationCount = this.jobApplication.length;
        if (this.jobApplicationCount != 0) {
            this.showJobApplications = true;
        }
        else {
            this.showJobApplications = false;
        }
    }; //onPageLoad function ends here.
    //navigate user to prvious page on clicked of back arrow
    //On change Function when drop down is changed
    EmployerjobapplicationsPage.prototype.jobApplications = function (item) {
        this.jobApplication = [];
        this.applicationId = item.detail.value.id;
        this.filterApplications(this.applicationId, this.offset);
    };
    //Functino For get job applications 
    EmployerjobapplicationsPage.prototype.filterApplications = function (id, offset) {
        var _this = this;
        this.presentLoading();
        this.dataServices.applicationDetails(id, offset).then(function (result) {
            _this.aplicationsResponse = result;
            if (_this.aplicationsResponse.status == 1) {
                _this.jobApplication = _this.aplicationsResponse.application_apply_data;
                _this.jobApplicationCount = _this.aplicationsResponse.total_application_apply_data;
                if (_this.jobApplicationCount > 0) {
                    _this.profile_photo_path = _this.aplicationsResponse.application_apply_data.profile_photo_path;
                }
                if (_this.jobApplicationCount < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.jobApplicationCount != 0) {
                    _this.showJobApplications = true;
                }
                else {
                    _this.showJobApplications = false;
                }
                _this.loadingController.dismiss();
                localStorage.setItem('jobApplication', _this.jobApplication);
                // this.router.navigate(['/employerjobapplications', { jobApplication : this.jobApplication}]);
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; //jobApplications function ends here. 
    // Function For Load Data While Scrolling
    EmployerjobapplicationsPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.jobApplicationCount) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.filterApplications(_this.applicationId, _this.offset);
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    //Function for show cadidate profile 
    EmployerjobapplicationsPage.prototype.candidateProfileDetails = function (item) {
        var resumeId = item;
        this.router.navigate(['/empcandidateprofile', { resumeId: resumeId }]);
    };
    //candidateProfileDetails ends here
    //Display loader 
    EmployerjobapplicationsPage.prototype.presentLoading = function () {
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
                        }, 600);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    //Function For show alert
    EmployerjobapplicationsPage.prototype.presentAlert = function (title, message) {
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
    EmployerjobapplicationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employerjobapplications',
            template: __webpack_require__(/*! ./employerjobapplications.page.html */ "./src/app/employerjobapplications/employerjobapplications.page.html"),
            styles: [__webpack_require__(/*! ./employerjobapplications.page.scss */ "./src/app/employerjobapplications/employerjobapplications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_5__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], EmployerjobapplicationsPage);
    return EmployerjobapplicationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=employerjobapplications-employerjobapplications-module.js.map