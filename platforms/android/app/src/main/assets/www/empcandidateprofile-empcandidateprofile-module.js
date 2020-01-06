(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empcandidateprofile-empcandidateprofile-module"],{

/***/ "./src/app/empcandidateprofile/empcandidateprofile.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/empcandidateprofile/empcandidateprofile.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmpcandidateprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpcandidateprofilePageModule", function() { return EmpcandidateprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _empcandidateprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empcandidateprofile.page */ "./src/app/empcandidateprofile/empcandidateprofile.page.ts");







var routes = [
    {
        path: '',
        component: _empcandidateprofile_page__WEBPACK_IMPORTED_MODULE_6__["EmpcandidateprofilePage"]
    }
];
var EmpcandidateprofilePageModule = /** @class */ (function () {
    function EmpcandidateprofilePageModule() {
    }
    EmpcandidateprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_empcandidateprofile_page__WEBPACK_IMPORTED_MODULE_6__["EmpcandidateprofilePage"]]
        })
    ], EmpcandidateprofilePageModule);
    return EmpcandidateprofilePageModule;
}());



/***/ }),

/***/ "./src/app/empcandidateprofile/empcandidateprofile.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/empcandidateprofile/empcandidateprofile.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-row>\n    <ion-col size=\"2\" (click)=\"goBack()\">\n      <ion-img src=\"../../assets/img/backnavigation.png\" style=\"padding: 20% 25% 25% 25%;\">\n      </ion-img>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-title class=\"titlecss\" style=\"margin-top:10px\">Candidate Profile</ion-title>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>\n\n<ion-content>\n  <!-- <h5 align=\"center\" style=\"margin-top:50%\">Coming Soon...!</h5> -->\n\n  <div class=\"headerNameCss\">\n    <ion-card class=\"cardMargins\" style=\"margin-top:5px\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"9\">\n            <ion-label class=\"headingLabel\">Name:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{firstname}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Company Name:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{getSeekerData.company_name}}</ion-label><br>\n            <ion-label class=\"headingLabel\">Designation:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{getSeekerData.designation}}</ion-label><br>\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <div class=\"profile-picture big-profile-picture\">\n              <img *ngIf=\"getSeekerData.profile_photo_path!=''\" aria-label=\"profile picture\"\n                src=\"{{getSeekerData.profile_photo_path}}\">\n              <img *ngIf=\"getSeekerData.profile_photo_path==''\" aria-label=\"profile picture\"\n                src=\"../../assets/img/profileimage.png\">\n            </div>\n          </ion-col>\n          <ion-item lines=\"none\" class=\"inoItem\" style=\"margin-top: -9px\">\n            <ion-img src=\"../../assets/img/experience.png\" style=\"width: 20px;\"></ion-img>\n            <ion-label style=\"padding-left: 6px\" class=\"contentInfo\">{{getSeekerData.years_total_experience}} years\n            </ion-label>\n\n          </ion-item>\n\n          <ion-item lines=\"none\" class=\"inoItem\" style=\"margin-top: -9px\">\n            <ion-img src=\"../../assets/img/location.png\" style=\"width: 20px;\"></ion-img>\n            <ion-label style=\"padding-left: 3px\" class=\"contentInfo\">{{getSeekerData.location_name}}</ion-label>\n\n          </ion-item>\n\n\n\n          <!-- \n  <ion-row lines=\"none\" class=\"inoItem itemcss\">\n  <ion-img src=\"../../assets/img/experience.png\" class=\"imagecss\">\n  </ion-img>\n  <ion-label class=\"ionimgcss itemcss\">{{getSeekerData.years_total_experience}} years</ion-label>\n  </ion-row>\n  \n  <ion-row lines=\"none\" class=\"inoItem itemcss\">\n  <ion-img src=\"../../assets/img/location.png\" class=\"imagecss\"></ion-img>\n  <ion-label class=\"itemcss\">{{getSeekerData.location_name}}</ion-label>\n  </ion-row> -->\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"headingLabel\">Disability Type:</ion-label><br>\n        </ion-row>\n        <ion-row>\n          <ion-label style=\"margin-top:-5px;\" class=\"contentInfo\">{{getSeekerData.disability_name}}\n          </ion-label>\n        </ion-row>\n\n\n        <!-- </ion-row> -->\n\n\n        <!-- <a href=\"tel:+1-1800-555-5555\" class=\"button button-positive\"><ion-icon name=\"call\"></ion-icon></a> -->\n\n\n\n\n        <ion-grid fixed>\n          <ion-row style=\"margin-left: 5%; margin-right: 5%\">\n\n            <ion-col size=\"3\">\n              <a href=\"tel:{{mobile}}\" class=\"button button-positive\">\n                <div class=\"candidateProfileBackground\">\n                  <ion-icon class=\"candidateProfileIcon\" name=\"call\"></ion-icon>\n                </div>\n              </a>\n            </ion-col>\n\n            <!-- <ion-col size=\"2\" style=\"margin-left:5%\">\n  <a href=\"tel:+1-1800-555-5555\" class=\"button button-positive\"><div class=\"candidateProfileBackground\">\n  <ion-icon class=\"candidateProfileIcon\" name=\"call\"></ion-icon>\n  </div></a>\n  </ion-col> -->\n\n            <ion-col size=\"3\" (click)=\"emailComposerOpen()\">\n              <div class=\"candidateProfileBackground\">\n                <ion-icon class=\"candidateProfileIcon\" name=\"mail\"></ion-icon>\n              </div>\n            </ion-col>\n\n            <ion-col size=\"3\" (click)=\"saveRemoveResume()\">\n              <div class=\"candidateProfileBackground\" *ngIf=\"resume_saved_flag == 0\">\n                <ion-icon class=\"candidateProfileIcon\" aria-label=\"bookmarked\" name=\"star-outline\"></ion-icon>\n              </div>\n\n              <div class=\"candidateProfileBackground\" *ngIf=\"resume_saved_flag == 1\">\n                <ion-icon class=\"candidateProfileIcon\" aria-label=\"bookmark\" name=\"star\"></ion-icon>\n              </div>\n            </ion-col>\n\n            <ion-col size=\"3\" (click)=\"download()\">\n              <div class=\"candidateProfileBackground\">\n                <ion-icon class=\"candidateProfileIcon\" aria-label=\"download\" ios=\"ios-download\" md=\"md-download\">\n                </ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <br>\n        <br>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"profilePageHeaderStripSection1\">EXPERIENCE</ion-label>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\" *ngFor=\"let item of experience_details_array\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headingLabel\">Company Name:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.company_name}}</ion-label><br>\n\n            <ion-label class=\"headingLabel\">Designation:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.designation}}</ion-label><br>\n\n            <ion-label class=\"headingLabel\">Duration:</ion-label><br>\n            <ion-label class=\"contentInfo\">{{item.duration}}</ion-label><br>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"profilePageHeaderStripSection1\">PRESENT SKILLSET</ion-label>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headingLabel\">Industry:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{getSeekerData.industry_name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Functional Area:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{getSeekerData.functional_area}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Total Experience:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{getSeekerData.total_experience_year_month}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Key Skills:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{getSeekerData.key_skill}}</ion-label>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"profilePageHeaderStripSection1\">EDUCATIONAL INFORMATION</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n    <div>\n      <ion-card-content class=\"cardPadding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n\n              <ion-row style=\"margin-left: -1%;\">\n                <ion-col size=\"12\">\n                  <ion-label class=\"headingLabel\">Qualification:</ion-label>\n                  <br>\n                  <ion-label class=\"contentInfo\">{{qualificationArray.qualification_name}}</ion-label>\n                </ion-col>\n              </ion-row>\n\n              <ion-label class=\"headingLabel\">Specialization:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{qualificationArray.specialisation}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Passing Year:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{qualificationArray.year_of_passing}}</ion-label>\n              <br>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </div>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/empcandidateprofile/empcandidateprofile.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/empcandidateprofile/empcandidateprofile.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n.candidateProfileIcon {\n  color: #2b0c43;\n  width: 25px;\n  height: 25px; }\n\n.imagecss {\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n  margin-top: 3px; }\n\n.inoItem {\n  --padding-start: 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBjYW5kaWRhdGVwcm9maWxlL2VtcGNhbmRpZGF0ZXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGVBQWM7RUFDZCxpQkFBZ0IsRUFBQTs7QUFHaEI7RUFDQSxlQUFjO0VBQ2QsY0FBYTtFQUNiLHFCQUFxQixFQUFBOztBQUdyQjtFQUNBLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdaO0VBQ0EsV0FBVTtFQUNWLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsZUFBYyxFQUFBOztBQUdkO0VBQ0EsbUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbXBjYW5kaWRhdGVwcm9maWxlL2VtcGNhbmRpZGF0ZXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdMYWJlbHtcbiAgICBjb2xvcjojMmIwYzQzO1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgfVxuICAgIFxuICAgIC5jb250ZW50SW5mb3tcbiAgICBmb250LXNpemU6MTVweDtcbiAgICBjb2xvcjojMmIwYzQzO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgXG4gICAgLmNhbmRpZGF0ZVByb2ZpbGVJY29ue1xuICAgIGNvbG9yOiAjMmIwYzQzO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gICAgXG4gICAgLmltYWdlY3Nze1xuICAgIHdpZHRoOjE1cHg7IFxuICAgIGhlaWdodDoxNXB4O1xuICAgIG1hcmdpbi1yaWdodDoxMHB4OyBcbiAgICBtYXJnaW4tdG9wOjNweDtcbiAgICB9XG4gICAgXG4gICAgLmlub0l0ZW17XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwJTtcbiAgICBcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/empcandidateprofile/empcandidateprofile.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/empcandidateprofile/empcandidateprofile.page.ts ***!
  \*****************************************************************/
/*! exports provided: EmpcandidateprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpcandidateprofilePage", function() { return EmpcandidateprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");









var EmpcandidateprofilePage = /** @class */ (function () {
    function EmpcandidateprofilePage(router, location, activatedRoute, loadingController, dataServices, alertCtrl, transfer, file, emailComposer) {
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.file = file;
        this.emailComposer = emailComposer;
        this.getSeekerData = [];
        this.qualificationArray = [];
        this.experience_details_array = [];
    }
    EmpcandidateprofilePage.prototype.ionViewWillEnter = function () {
        this.resumeId = (this.activatedRoute.snapshot.paramMap.get('resumeId'));
        console.log('resumeId:', this.resumeId);
        this.getResumeDetailsData();
    };
    //Display loader 
    EmpcandidateprofilePage.prototype.presentLoading = function () {
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
    EmpcandidateprofilePage.prototype.getResumeDetailsData = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.resumeDetailAPI(this.resumeId).then(function (result) {
            _this.ResumeDetailResponse = result;
            if (_this.ResumeDetailResponse.status == 1) {
                _this.getSeekerData = _this.ResumeDetailResponse.seeker_details;
                _this.mobile = _this.ResumeDetailResponse.seeker_details.mobile;
                _this.resume_saved_flag = _this.ResumeDetailResponse.seeker_details.resume_saved_flag;
                _this.resume_download_url = _this.ResumeDetailResponse.seeker_details.resume_download_url;
                _this.verify_email = _this.ResumeDetailResponse.seeker_details.verify_email;
                _this.email = _this.ResumeDetailResponse.seeker_details.email;
                _this.firstname = _this.ResumeDetailResponse.seeker_details.first_name;
                _this.profile_photo_path = _this.ResumeDetailResponse.seeker_details.profile_photo_path;
                _this.experience_details_array = _this.ResumeDetailResponse.seeker_details.experience_details_array;
                _this.qualificationArray = _this.ResumeDetailResponse.seeker_details.qulification_details_array[0];
                _this.loadingController.dismiss();
                // this.router.navigate(['/employerjobapplications', { jobApplication : this.jobApplication}]);
                if (_this.applicants_display == 0) {
                }
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmpcandidateprofilePage.prototype.ngOnInit = function () {
    };
    EmpcandidateprofilePage.prototype.goBack = function () {
        this.location.back();
        // this.router.navigate(['/employerjobapplications'])
    };
    //save and remove resume 
    EmpcandidateprofilePage.prototype.saveRemoveResume = function () {
        var _this = this;
        this.uacc_id = localStorage.getItem('users_id');
        this.presentLoading();
        this.dataServices.saveRemoveResumeAPI(this.uacc_id, this.resumeId).then(function (result) {
            _this.saveRemoveResumeResponse = result;
            if (_this.saveRemoveResumeResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.saveRemoveResumeResponse.message);
                if (_this.saveRemoveResumeResponse.check_flag == 1) {
                    _this.resume_saved_flag = 1;
                }
                else if (_this.saveRemoveResumeResponse.check_flag == 2) {
                    _this.resume_saved_flag = 0;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.saveRemoveResumeResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmpcandidateprofilePage.prototype.presentAlert = function (title, message) {
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
    EmpcandidateprofilePage.prototype.emailComposerOpen = function () {
        if (this.verify_email == 0) {
            this.presentAlert('', 'Email address is not verified.');
        }
        else {
            this.emailComposer.isAvailable().then(function (available) {
                if (available) {
                    console.log('emailComposer available');
                }
            });
            var employerEmail = localStorage.getItem("email");
            var email = {
                to: this.email,
                subject: 'Jobability',
                body: 'You have been contacted.',
                isHtml: true
            };
            this.emailComposer.open(email);
        }
    };
    //download Resume 
    EmpcandidateprofilePage.prototype.download = function () {
        var _this = this;
        this.presentLoading();
        var url = this.resume_download_url;
        this.fileName = url.substring(url.lastIndexOf("/") + 1);
        var fileTransfer = this.transfer.create();
        fileTransfer.download(url, this.file.externalRootDirectory +
            '/Download/' + this.fileName)
            .then(function (entry) {
            _this.loadingController.dismiss();
            _this.presentAlert('File', 'File has been downloaded to the Downloads folder');
        }, function (error) {
            // handle error
            _this.loadingController.dismiss();
            console.log('download failed: ' + error);
        });
    }; //download Rresume.
    EmpcandidateprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empcandidateprofile',
            template: __webpack_require__(/*! ./empcandidateprofile.page.html */ "./src/app/empcandidateprofile/empcandidateprofile.page.html"),
            styles: [__webpack_require__(/*! ./empcandidateprofile.page.scss */ "./src/app/empcandidateprofile/empcandidateprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_5__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__["EmailComposer"]])
    ], EmpcandidateprofilePage);
    return EmpcandidateprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=empcandidateprofile-empcandidateprofile-module.js.map