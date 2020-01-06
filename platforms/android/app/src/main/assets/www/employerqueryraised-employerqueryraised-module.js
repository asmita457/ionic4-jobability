(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employerqueryraised-employerqueryraised-module"],{

/***/ "./src/app/employerqueryraised/employerqueryraised.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employerqueryraised/employerqueryraised.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmployerqueryraisedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerqueryraisedPageModule", function() { return EmployerqueryraisedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employerqueryraised_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employerqueryraised.page */ "./src/app/employerqueryraised/employerqueryraised.page.ts");







var routes = [
    {
        path: '',
        component: _employerqueryraised_page__WEBPACK_IMPORTED_MODULE_6__["EmployerqueryraisedPage"]
    }
];
var EmployerqueryraisedPageModule = /** @class */ (function () {
    function EmployerqueryraisedPageModule() {
    }
    EmployerqueryraisedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employerqueryraised_page__WEBPACK_IMPORTED_MODULE_6__["EmployerqueryraisedPage"]]
        })
    ], EmployerqueryraisedPageModule);
    return EmployerqueryraisedPageModule;
}());



/***/ }),

/***/ "./src/app/employerqueryraised/employerqueryraised.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/employerqueryraised/employerqueryraised.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar class=\"new-background-color\">\n    <ion-item lines=\"none\" class=\"new-background-color\">\n      <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n      <ion-title style=\"margin-left: 5%; color: #2b0c43\">Query Raised</ion-title>\n    </ion-item>\n  </ion-toolbar>\n  <div class=\"divPadding\" style=\"padding:3% 5% 0% 1%\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label style=\"color:#2b0c43\">{{queryListingLength}} Query Raised</ion-label>\n        </ion-col>\n       \n      </ion-row>\n    </div>\n  </ion-header>\n  \n\n<ion-content>\n<ion-card class=\"cardMargins\" *ngFor=\"let item of employerQueryListingArray\">\n  \n    <ion-card-content class=\"cardPadding\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"\">\n              <ion-label class=\"headingLabel\">Seeker Name:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{item.seeker_name}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Email:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{item.seeker_email}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Comment:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{item.comment}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\"><i>Posted Age:</i></ion-label>\n              <br>\n              <i><ion-label class=\"contentInfo\">{{item.posted_age}}</ion-label>\n              </i> <br>\n               </ion-col>\n          \n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n    <br>\n    <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/employerqueryraised/employerqueryraised.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/employerqueryraised/employerqueryraised.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9lbXBsb3llcnF1ZXJ5cmFpc2VkL2VtcGxveWVycXVlcnlyYWlzZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGVBQWM7RUFDZCxpQkFBZ0IsRUFBQTs7QUFHaEI7RUFDQSxlQUFjO0VBQ2QsY0FBYTtFQUNiLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZXJxdWVyeXJhaXNlZC9lbXBsb3llcnF1ZXJ5cmFpc2VkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nTGFiZWx7XG4gICAgY29sb3I6IzJiMGM0MztcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIH1cbiAgICBcbiAgICAuY29udGVudEluZm97XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgY29sb3I6IzJiMGM0MztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/employerqueryraised/employerqueryraised.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/employerqueryraised/employerqueryraised.page.ts ***!
  \*****************************************************************/
/*! exports provided: EmployerqueryraisedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerqueryraisedPage", function() { return EmployerqueryraisedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EmployerqueryraisedPage = /** @class */ (function () {
    function EmployerqueryraisedPage(location, loadingController, dataServices, activatedRoute) {
        this.location = location;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.offset = 0;
        this.employerQueryListingArray = [];
    }
    EmployerqueryraisedPage.prototype.ngOnInit = function () {
    };
    EmployerqueryraisedPage.prototype.ionViewWillEnter = function () {
        this.employerQueryListingArray = [];
        this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getQueryRaisedData();
    };
    EmployerqueryraisedPage.prototype.closePage = function () {
        this.location.back();
    };
    EmployerqueryraisedPage.prototype.getQueryRaisedData = function () {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getQueryRaisedDataAPI(this.id, this.offset).then(function (result) {
            _this.queryListingResponse = result;
            if (_this.queryListingResponse.status == 1) {
                _this.employerQueryListingArray = _this.employerQueryListingArray.concat(_this.queryListingResponse.seeker_raised_query_list);
                _this.queryListingLength = _this.queryListingResponse.total_seeker_raised_query;
                console.log('search resume data:', _this.queryListingResponse);
                if (_this.offset == 0 && _this.queryListingLength > 20) {
                    _this.loadingController.dismiss();
                    // this.offset = 1
                }
                if (_this.queryListingLength < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
            }
            else {
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                alert(_this.queryListingResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function For Load Data While Scrolling
    EmployerqueryraisedPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            // event.target.disabled = false;
            // this.infiniteScroll.disabled = false;
            if (_this.offset > _this.queryListingLength) {
                // event.target.disabled = true;
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getQueryRaisedData();
                event.target.complete();
            }
        }, 100);
    }; //loadData Function Eds Here.
    //Display loader 
    EmployerqueryraisedPage.prototype.presentLoading = function () {
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
    EmployerqueryraisedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employerqueryraised',
            template: __webpack_require__(/*! ./employerqueryraised.page.html */ "./src/app/employerqueryraised/employerqueryraised.page.html"),
            styles: [__webpack_require__(/*! ./employerqueryraised.page.scss */ "./src/app/employerqueryraised/employerqueryraised.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EmployerqueryraisedPage);
    return EmployerqueryraisedPage;
}());



/***/ })

}]);
//# sourceMappingURL=employerqueryraised-employerqueryraised-module.js.map