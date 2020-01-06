(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicesdetailinfo-servicesdetailinfo-module"],{

/***/ "./src/app/servicesdetailinfo/servicesdetailinfo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/servicesdetailinfo/servicesdetailinfo.module.ts ***!
  \*****************************************************************/
/*! exports provided: ServicesdetailinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesdetailinfoPageModule", function() { return ServicesdetailinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicesdetailinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicesdetailinfo.page */ "./src/app/servicesdetailinfo/servicesdetailinfo.page.ts");







var routes = [
    {
        path: '',
        component: _servicesdetailinfo_page__WEBPACK_IMPORTED_MODULE_6__["ServicesdetailinfoPage"]
    }
];
var ServicesdetailinfoPageModule = /** @class */ (function () {
    function ServicesdetailinfoPageModule() {
    }
    ServicesdetailinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_servicesdetailinfo_page__WEBPACK_IMPORTED_MODULE_6__["ServicesdetailinfoPage"]]
        })
    ], ServicesdetailinfoPageModule);
    return ServicesdetailinfoPageModule;
}());



/***/ }),

/***/ "./src/app/servicesdetailinfo/servicesdetailinfo.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/servicesdetailinfo/servicesdetailinfo.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header color=\"medium\"> -->\n<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-img src=\"../../assets/img/backnavigation.png\" (click)=\"goBack()\" style=\"height:30px;width: 10%;\">\n    </ion-img>\n    <ion-title style=\" color: #2b0c43\">Service Details</ion-title>\n    <ion-icon ios=\"ios-trash\" md=\"md-trash\" (click)=\"DeleteServices()\"></ion-icon>\n  </ion-item>\n</ion-toolbar>\n\n<!-- </ion-header> -->\n<!-- Default Segment -->\n<ion-segment (ionChange)=\"segmentChanged($event)\">\n  <ion-segment-button value=\"details\" checked>\n    <ion-label>Details</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"review\">\n    <ion-label>Review</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"rating\">\n    <ion-label>Rating</ion-label>\n  </ion-segment-button>\n</ion-segment>\n<ion-content>\n  <!-- Details -->\n  <div *ngIf=\"selectedTab == 'details'\">\n    <ion-card class=\"cardMargins\">\n      <ion-card-header class=\"profileCardHeader\">\n        <ion-grid class=\"cardPadding\">\n          <ion-row class=\"profilePageHeaderrow\">\n            <ion-col size=\"10\">\n              <ion-label class=\"profilePageHeaderStripSection1\">SERVICE DETAIL</ion-label>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-label class=\"profilePageHeaderStripSection2\" (click)=\"editService()\">EDIT</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n\n      <ion-card-content class=\"cardPadding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"headingLabel\">Service Title:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{title}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Service Category:</ion-label>\n              <br>\n              <!-- <ion-label class=\"contentInfo\">{{category.name}}</ion-label> -->\n              <ion-list *ngFor=\"let item of category\">\n                <ion-label class=\"contentInfo\">{{item.name}}</ion-label>\n              </ion-list>\n              <ion-label class=\"headingLabel\">Disability Served:</ion-label>\n              <br>\n              <ion-list *ngFor=\"let item of disability\">\n                <ion-label class=\"contentInfo\">{{item.name}}</ion-label>\n              </ion-list>\n              <ion-label class=\"headingLabel\">Brief:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{brief}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Description:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{description}}</ion-label>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"cardMargins\">\n      <ion-card-header class=\"profileCardHeader\">\n        <ion-grid class=\"cardPadding\">\n          <ion-row class=\"profilePageHeaderrow\">\n            <ion-col size=\"10\">\n              <ion-label class=\"profilePageHeaderStripSection1\">SERVICE LOCATION</ion-label>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-label class=\"profilePageHeaderStripSection2\" (click)=\"editServiceLocationNavigate()\">EDIT</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n\n      <ion-card-content class=\"cardPadding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label class=\"headingLabel\">Country:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{country}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Preferred State/City:</ion-label>\n              <br>\n              <ion-list *ngFor=\"let item of preferredStateCity\">\n                <ion-label class=\"contentInfo\">{{item.name}}</ion-label>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card class=\"cardMargins\">\n      <ion-card-header class=\"profileCardHeader\">\n        <ion-grid class=\"cardPadding\">\n          <ion-row class=\"profilePageHeaderrow\">\n            <ion-col size=\"10\">\n              <ion-label class=\"profilePageHeaderStripSection1\">CONTACT INFORMATION</ion-label>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-label class=\"profilePageHeaderStripSection2\" (click)=\"editServiceContactInfoNavigate()\">EDIT\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n\n      <ion-card-content class=\"cardPadding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <!-- <ion-label class=\"headingLabel\">Upload File:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{Filename}}</ion-label>\n              <br> -->\n              <ion-label class=\"headingLabel\">Status:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{Status}}</ion-label>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Review -->\n  <div *ngIf=\"selectedTab == 'review'\">\n    <ion-card *ngIf=\"spReviewCommentsList.length == 0\">\n      <ion-card-content>\n        No Reviews Available\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngFor=\"let item of spReviewCommentsList; let j = index\" class=\"cardMargins\">\n      <ion-card-header>\n        <ion-card-title>{{item.name}}</ion-card-title>\n        <ion-card-subtitle><i><a href=\"mailto:{{item.email}}\">{{item.email}}</a></i></ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-label style=\"font-size: 16px; color:#2b0c43;\">{{item.comment}}</ion-label>\n        <i>\n          <div style=\"padding-top: 10px;\">\n            <ion-label style=\"font-size: 15px; color:#2b0c43;\">Posted:\n              {{item.posted_age}}</ion-label><br>\n          </div>\n        </i>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Rating -->\n  <div *ngIf=\"selectedTab == 'rating'\">\n    <ion-card *ngIf=\"spRatingList.length == 0\">\n      <ion-card-content>\n        No Rating Available\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngIf=\"spRatingList.length != 0\">\n      <ion-card-header class=\"avgHeaderTitle\">\n        <ion-card-title>Overall rating for this service</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <div text-center>\n          <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\" [ngStyle]=\"{'color':getColor(num)}\"\n            style=\"font-size: -webkit-xxx-large;\"></ion-icon>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card *ngFor=\"let item of spRatingList; let j = index\" class=\"cardMargins\">\n      <ion-card-header>\n        <ion-card-title>{{item.first_name}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-label style=\"font-size: 16px; color:#2b0c43;\">Rating: {{item.service_star_rate}} out of 5</ion-label>\n        <i>\n          <div>\n            <ion-label style=\"font-size: 15px; color:#2b0c43;\">Posted:\n              {{item.posted_age}}</ion-label><br>\n          </div>\n        </i>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/servicesdetailinfo/servicesdetailinfo.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/servicesdetailinfo/servicesdetailinfo.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n.avgHeaderTitle {\n  display: flex;\n  justify-content: center; }\n\n.sc-ion-segment-md-h {\n  --color-checked: #2b0c33;\n  --color-checked-disabled: var(--color-checked);\n  --indicator-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9zZXJ2aWNlc2RldGFpbGluZm8vc2VydmljZXNkZXRhaWxpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQWE7RUFDYixlQUFjO0VBQ2QsaUJBQWdCLEVBQUE7O0FBR2hCO0VBQ0EsZUFBYztFQUNkLGNBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBR3ZCO0VBQ0Esd0JBQWdCO0VBQ2hCLDhDQUF5QjtFQUN6Qiw4QkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzZGV0YWlsaW5mby9zZXJ2aWNlc2RldGFpbGluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5oZWFkaW5nTGFiZWx7XG4gICAgY29sb3I6IzJiMGM0MztcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIH1cbiAgICBcbiAgICAuY29udGVudEluZm97XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgY29sb3I6IzJiMGM0MztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIFxuICAuYXZnSGVhZGVyVGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5zYy1pb24tc2VnbWVudC1tZC1oIHtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICMyYjBjMzM7XG4gICAgLS1jb2xvci1jaGVja2VkLWRpc2FibGVkOiB2YXIoLS1jb2xvci1jaGVja2VkKTtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/servicesdetailinfo/servicesdetailinfo.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/servicesdetailinfo/servicesdetailinfo.page.ts ***!
  \***************************************************************/
/*! exports provided: COLORS, ServicesdetailinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesdetailinfoPage", function() { return ServicesdetailinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");






var COLORS;
(function (COLORS) {
    COLORS["GREY"] = "#E0E0E0";
    COLORS["BLUE"] = "#2b0c43";
})(COLORS || (COLORS = {}));
var ServicesdetailinfoPage = /** @class */ (function () {
    function ServicesdetailinfoPage(router, location, activatedRoute, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.category = [];
        this.disability = [];
        this.editServiceDetails = [];
        this.editServiceLocation = [];
        this.editServiceContactInfo = [];
        this.selectedTab = 'details';
        this.spReviewCommentsList = [];
        this.spRatingList = [];
        this.offset = 0;
        // this.getServiceProviderIndividualDetail()
        this.serviceid = (this.activatedRoute.snapshot.paramMap.get('item'));
        localStorage.setItem('serviceid', this.serviceid);
    }
    ServicesdetailinfoPage.prototype.ionViewWillEnter = function () {
        this.getServiceProviderIndividualDetail();
        this.offset = 0;
    };
    ServicesdetailinfoPage.prototype.ngOnInit = function () {
    };
    ServicesdetailinfoPage.prototype.segmentChanged = function (event) {
        if (event.detail.value == 'details') {
            this.selectedTab = 'details';
        }
        else if (event.detail.value == 'review') {
            this.selectedTab = 'review';
            this.offset = 0;
            this.spReviewCommentsList = [];
            this.moreDataAvailable = true;
            this.reviewCommentsList(this.serviceid, this.offset);
        }
        else if (event.detail.value == 'rating') {
            this.selectedTab = 'rating';
            this.offset = 0;
            this.spRatingList = [];
            this.moreDataAvailable = true;
            this.ratingList(this.serviceid, this.offset);
        }
    };
    ServicesdetailinfoPage.prototype.getServiceProviderIndividualDetail = function () {
        var _this = this;
        this.presentLoading();
        this.serviceid = localStorage.getItem('serviceid');
        this.dataServices.getSPIndividualDetails(this.serviceid).then(function (result) {
            _this.resultData = result.my_services_details[0];
            if (_this.resultData.status == 1) {
                _this.title = _this.resultData.name;
                _this.category = _this.resultData.service_type_list;
                _this.disability = _this.resultData.disability_list;
                _this.brief = _this.resultData.brife;
                _this.description = _this.resultData.description;
                _this.country = _this.resultData.country_name;
                _this.preferredStateCity = _this.resultData.state_city_list;
                if (_this.resultData.upload_file == '' || _this.resultData.upload_file == null || _this.resultData.upload_file == undefined) {
                    _this.Filename = 'File not available';
                }
                else {
                    _this.Filename = _this.resultData.upload_file;
                }
                _this.Status = _this.resultData.status_name;
                var preselectionCategory = [];
                var preselectionDisability = [];
                var Service_Category_list = [];
                var Disability_Served_list = [];
                var state_city_list = [];
                for (var i = 0; i < _this.resultData.service_type_master_list.length; i++) {
                    Service_Category_list.push(_this.resultData.service_type_master_list[i].name);
                }
                for (var i = 0; i < _this.resultData.disability_master_list.length; i++) {
                    Disability_Served_list.push(_this.resultData.disability_master_list[i].name);
                }
                for (var i = 0; i < _this.resultData.service_type_list.length; i++) {
                    preselectionCategory.push(_this.resultData.service_type_list[i].id);
                }
                for (var i = 0; i < _this.resultData.disability_list.length; i++) {
                    preselectionDisability.push(_this.resultData.disability_list[i].id);
                }
                _this.editServiceDetails = [];
                _this.editServiceDetails.push({
                    Service_id: _this.resultData.id,
                    Service_Title: _this.resultData.name,
                    Service_Category: preselectionCategory,
                    Disability_Served: preselectionDisability,
                    Brief: _this.resultData.brife,
                    Description: _this.resultData.description,
                    Service_Category_list: _this.resultData.service_type_master_list,
                    Disability_Served_list: _this.resultData.disability_master_list
                });
                _this.editServiceLocation = [];
                _this.editServiceLocation.push({
                    Service_id: _this.resultData.id,
                    Country: _this.resultData.country,
                    Preferred_StateCity: _this.resultData.state_city_list
                });
                _this.editServiceContactInfo = [];
                _this.editServiceContactInfo.push({
                    Service_id: _this.resultData.id,
                    upload_filename: _this.Filename,
                    upload_filelink: _this.resultData.upload_file_path,
                    show_contact: _this.resultData.show_contact,
                    Status: _this.resultData.status,
                    Status_name: _this.resultData.status_name
                });
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.temAlert("", _this.resultData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    ServicesdetailinfoPage.prototype.goBack = function () {
        // this.location.back();
        localStorage.removeItem('serviceid');
        this.router.navigate(['/dashboardserviceprovider']);
    };
    //Display loader 
    ServicesdetailinfoPage.prototype.presentLoading = function () {
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
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    ServicesdetailinfoPage.prototype.editService = function () {
        this.router.navigate(['/editservices', { item: JSON.stringify(this.editServiceDetails[0]) }]);
    };
    ServicesdetailinfoPage.prototype.editServiceLocationNavigate = function () {
        this.router.navigate(['/updateserviceproviderservicelocation', { item: JSON.stringify(this.editServiceLocation[0]) }]);
    };
    ServicesdetailinfoPage.prototype.editServiceContactInfoNavigate = function () {
        this.router.navigate(['/updateserviceproviderpostservicecontactinfo', { item: JSON.stringify(this.editServiceContactInfo[0]) }]);
    };
    ServicesdetailinfoPage.prototype.DeleteServices = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteService(this.serviceid).then(function (result) {
            console.log(result);
            _this.deleteResultData = result;
            if (_this.deleteResultData.status == 1) {
                console.log('Delete Response:', _this.deleteResultData);
                _this.loadingController.dismiss();
                _this.presentAlert(_this.deleteResultData.message, '');
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert(_this.deleteResultData.message, '');
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    ServicesdetailinfoPage.prototype.reviewCommentsList = function (id, offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.postSPReviewCommentsList(id, offset).then(function (result) {
            if (result.status == 1) {
                var totalCommentsCount = result.total_seeker_service_comment;
                _this.spReviewCommentsList = _this.spReviewCommentsList.concat(result.seeker_service_comment_list);
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (totalCommentsCount < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
            }
        }).catch(function (error) {
            _this.loadingController.dismiss();
            console.log('Error: ' + error);
        });
    };
    ServicesdetailinfoPage.prototype.ratingList = function (id, offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.postSPRatingList(id, offset).then(function (result) {
            if (result.status == 1) {
                var totalRatingCount = result.total_seeker_service_rating;
                _this.ratingCount = result.average_rating;
                _this.spRatingList = _this.spRatingList.concat(result.seeker_service_rating_list);
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (totalRatingCount > _this.spRatingList.length) {
                    //call again
                    _this.moreDataAvailable = true;
                }
                else {
                    //stop call
                    _this.moreDataAvailable = false;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
            }
        }).catch(function (error) {
            _this.loadingController.dismiss();
            console.log('Error: ' + error);
        });
    };
    ServicesdetailinfoPage.prototype.getColor = function (index) {
        if (this.isAboveRating(index)) {
            return COLORS.GREY;
        }
        switch (index) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                return COLORS.BLUE;
        }
    };
    ServicesdetailinfoPage.prototype.isAboveRating = function (index) {
        return index > this.ratingCount;
    };
    // Function For Load Data While Scrolling
    ServicesdetailinfoPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.selectedTab == 'review') {
                _this.reviewCommentsList(_this.serviceid, _this.offset);
            }
            else if (_this.selectedTab == 'rating') {
                _this.ratingList(_this.serviceid, _this.offset);
            }
            event.target.complete();
        }, 500);
    }; //loadData Function Eds Here.
    ServicesdetailinfoPage.prototype.presentAlert = function (title, message) {
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
                                        _this.goBack();
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
    ServicesdetailinfoPage.prototype.temAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
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
    ServicesdetailinfoPage.prototype.loadMore = function () {
        this.offset += 10;
        this.reviewCommentsList(this.serviceid, this.offset);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ServicesdetailinfoPage.prototype, "ratingCount", void 0);
    ServicesdetailinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicesdetailinfo',
            template: __webpack_require__(/*! ./servicesdetailinfo.page.html */ "./src/app/servicesdetailinfo/servicesdetailinfo.page.html"),
            styles: [__webpack_require__(/*! ./servicesdetailinfo.page.scss */ "./src/app/servicesdetailinfo/servicesdetailinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_5__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], ServicesdetailinfoPage);
    return ServicesdetailinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicesdetailinfo-servicesdetailinfo-module.js.map