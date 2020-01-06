(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchservices-searchservices-module"],{

/***/ "./src/app/searchservices/searchservices.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/searchservices/searchservices.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchservicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchservicesPageModule", function() { return SearchservicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchservices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchservices.page */ "./src/app/searchservices/searchservices.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _searchservices_page__WEBPACK_IMPORTED_MODULE_6__["SearchservicesPage"]
    }
];
var SearchservicesPageModule = /** @class */ (function () {
    function SearchservicesPageModule() {
    }
    SearchservicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchservices_page__WEBPACK_IMPORTED_MODULE_6__["SearchservicesPage"]]
        })
    ], SearchservicesPageModule);
    return SearchservicesPageModule;
}());



/***/ }),

/***/ "./src/app/searchservices/searchservices.page.html":
/*!*********************************************************!*\
  !*** ./src/app/searchservices/searchservices.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-item lines=\"none\" class=\"new-background-color\">\n      <ion-title class=\"headerNameCss\">\n        Services\n      </ion-title>\n      <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\"></ion-icon>\n      <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n    </ion-item>\n  </ion-toolbar>\n\n  <div class=\"divPadding\">\n    <ion-searchbar style=\"background: #ffef2e\" #q [(ngModel)]=\"searchTitle\" (keyup.enter)=\"search(q.value)\"\n      placeholder=\"Search by Keyword\"></ion-searchbar>\n  </div>\n  <div class=\"dropDown\">\n    <!-- <ion-select class=\"headerNameCss \" (ionChange)=\"onSelectDisability($event)\" placeholder=\"All Disabilities\">\n      <ion-select-option *ngFor=\"let item of disabilityListArray;\" [selected]=\"item.id == disability_id\"\n        [value]=\"item.id\">\n        {{item.name}}</ion-select-option>\n    </ion-select> -->\n\n    <mat-select [(ngModel)]=\"disability_id\" placeholder=\"All Disabilities\"\n      (selectionChange)=\"onSelectDisability($event.value)\"  [aria-label]=\"readDisability\">\n      <mat-option *ngFor=\"let item of disabilityListArray\" [value]=\"item.id\">\n        {{item.name}}\n      </mat-option>\n    </mat-select>\n  </div>\n\n  <!-- <div class=\"dropDown dropDownBorder\">\n    <mat-form-field class=\"inputFields\">\n      <mat-label>All Disabilities</mat-label>\n      <mat-select [(ngModel)]=\"disability_id\" (selectionChange)=\"onSelectDisability($event.value)\">\n        <mat-option *ngFor=\"let item of disabilityListArray\" [value]=\"item.id\">\n          {{item.name}}\n        </mat-option>\n      </mat-select>\n\n    </mat-form-field>\n  </div> -->\n\n</ion-header>\n<ion-content>\n  <div *ngIf=\"serviceAvailable\">\n    <ion-card *ngFor=\"let item of serviceListArray;\" class=\"cardMargins\" (click)=\"serviceDetails(item.id)\">\n      <ion-card-content>\n        <ion-list>\n          <!-- <ion-row> -->\n          <!-- <ion-col size=\"10\" (click)=\"jobDescription(item.id)\"> -->\n          <ion-row>\n            <!-- <ion-col size=\"11\"> -->\n            <ion-label class=\"jobNameCss\">{{item.name}}</ion-label>\n            <!-- </ion-col> -->\n          </ion-row>\n          <ion-row>\n            <ion-label class=\"companyNameCss\">{{item.organization_name}}\n            </ion-label>\n          </ion-row>\n          <!-- <ion-row>\n                    <ion-col size=\"1\">\n                      <ion-img src=\"../../assets/img/experience.png\" class=\"experienceAndLocationPng\">\n                      </ion-img>\n                    </ion-col>\n                    <ion-col size=\"11\">\n                      <ion-label>{{item.min_experience}} - {{item.max_experience}} years</ion-label>\n                    </ion-col>\n                  </ion-row> -->\n\n          <ion-row>\n            <ion-col size=\"1\" style=\"padding: 2% 0% 0% 0%;\">\n              <ion-img src=\"../../assets/img/location.png\" class=\"locationPng\">\n              </ion-img>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label>{{item.service_location_name}}</ion-label>\n              <br>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-label><i>Posted: {{item.posted_age}}</i></ion-label>\n          </ion-row>\n\n\n          <!-- </ion-col> -->\n          <!-- <ion-col size=\"2\">\n                  <ion-icon ios=\"ios-heart\" md=\"md-heart\" class=\"iconcss\" style=\"float:right;color:#2b0c43;\"></ion-icon>\n                </ion-col> -->\n\n          <!-- </ion-row> -->\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"!serviceAvailable\">\n    <h5 align=\"center\">No result for search service</h5>\n  </div>\n  <br>\n  <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/searchservices/searchservices.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/searchservices/searchservices.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jobNameCss {\n  font-size: 18px;\n  color: #2b0c43; }\n\n.dropDown {\n  padding: 3% 7% 3% 3%; }\n\n.dropDownBorder {\n  border-bottom: 1px solid lightgray; }\n\n.locationPng {\n  width: 20px;\n  height: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9zZWFyY2hzZXJ2aWNlcy9zZWFyY2hzZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsY0FBYSxFQUFBOztBQUVqQjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGtDQUFrQyxFQUFBOztBQUdwQztFQUNNLFdBQVU7RUFDVixZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hzZXJ2aWNlcy9zZWFyY2hzZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9iTmFtZUNzc3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IzJiMGM0Mztcbn1cbi5kcm9wRG93bntcbiAgICBwYWRkaW5nOiAzJSA3JSAzJSAzJTtcbn1cblxuLmRyb3BEb3duQm9yZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5OyBcbiAgfVxuXG4gIC5sb2NhdGlvblBuZ3tcbiAgICAgICAgd2lkdGg6MjBweDtcbiAgICAgICAgaGVpZ2h0OjIwcHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/searchservices/searchservices.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/searchservices/searchservices.page.ts ***!
  \*******************************************************/
/*! exports provided: SearchservicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchservicesPage", function() { return SearchservicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");







var SearchservicesPage = /** @class */ (function () {
    function SearchservicesPage(loadingController, alertCtrl, dataServices, router, tts, mobileAccessibility) {
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.dataServices = dataServices;
        this.router = router;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.offset = 0;
        this.serviceListArray = [];
        this.disabilityListArray = [];
        this.serviceAvailable = true;
        this.readDisability = '';
    }
    SearchservicesPage.prototype.ngOnInit = function () {
    };
    SearchservicesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.searchTitle != '' || this.searchTitle != undefined) {
            this.keywords = this.searchTitle;
        }
        // this.disability_id = ''
        this.offset = 0;
        this.serviceListArray = [];
        this.disability_id = localStorage.getItem('disabilityID');
        if (this.disability_id == 'null') {
            this.disability_id = '';
        }
        this.getServiceListForJobSeeker(this.keywords, this.disability_id, this.offset);
        this.getDisabilityList();
        this.getNotificationBadgeCount();
        if (this.disability_id != "") {
            this.readDisability = this.disabilityListArray[this.disabilityListArray.findIndex(function (id) { return id.id === _this.disability_id; })].name;
        }
    };
    SearchservicesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Services Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    SearchservicesPage.prototype.getNotificationBadgeCount = function () {
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
    SearchservicesPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    // Function For get service list
    SearchservicesPage.prototype.getServiceListForJobSeeker = function (keywords, disability_id, offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getServiceListForJobSeeker(keywords, disability_id, offset).then(function (result) {
            _this.serviceApiResponse = result;
            if (_this.serviceApiResponse.status == 1) {
                _this.serviceListArray = _this.serviceListArray.concat(_this.serviceApiResponse.services_list);
                _this.servicesTotalCount = _this.serviceApiResponse.services_total_count;
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (_this.servicesTotalCount < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.servicesTotalCount == 0) {
                    _this.serviceAvailable = false;
                }
                else {
                    _this.serviceAvailable = true;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert("", _this.serviceApiResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function for to get disability type
    SearchservicesPage.prototype.getDisabilityList = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getDisabilityList().then(function (result) {
            _this.disabilityApiResponse = result;
            if (_this.disabilityApiResponse.status == 1) {
                _this.disabilityListArray = [];
                _this.disabilityListArray = [{ id: "allDisabilities", name: "All Disabilities" }];
                _this.disabilityListArray = _this.disabilityListArray.concat(_this.disabilityApiResponse.disability_list);
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.disabilityApiResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // getDisabilityList Function Ends Here
    // Function For Load Data While Scrolling
    SearchservicesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.servicesTotalCount) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getServiceListForJobSeeker(_this.keywords, _this.disability_id, _this.offset);
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    // On Select of Disability type
    SearchservicesPage.prototype.onSelectDisability = function (disabilityId) {
        this.readDisability = this.disabilityListArray[this.disabilityListArray.findIndex(function (id) { return id.id === disabilityId; })].name;
        this.offset = 0;
        this.disability_id = disabilityId;
        // this.disability_id = item
        if (this.disability_id == "allDisabilities") {
            this.disability_id = '';
        }
        localStorage.setItem("disabilityID", this.disability_id);
        this.serviceListArray = [];
        this.getServiceListForJobSeeker(this.keywords, this.disability_id, this.offset);
    };
    SearchservicesPage.prototype.search = function (keywords) {
        this.offset = 0;
        this.serviceListArray = [];
        this.getServiceListForJobSeeker(keywords, this.disability_id, this.offset);
    };
    SearchservicesPage.prototype.serviceDetails = function (item) {
        this.router.navigate(['/servicedetails', { serviceId: item }]);
    };
    //Display loader 
    SearchservicesPage.prototype.presentLoading = function () {
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
                        // setTimeout(() => {
                        loading.dismiss();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    SearchservicesPage.prototype.presentAlert = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // this.closePage();
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
    SearchservicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchservices',
            template: __webpack_require__(/*! ./searchservices.page.html */ "./src/app/searchservices/searchservices.page.html"),
            styles: [__webpack_require__(/*! ./searchservices.page.scss */ "./src/app/searchservices/searchservices.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_5__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__["MobileAccessibility"]])
    ], SearchservicesPage);
    return SearchservicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=searchservices-searchservices-module.js.map