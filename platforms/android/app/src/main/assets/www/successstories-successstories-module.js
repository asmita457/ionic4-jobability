(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["successstories-successstories-module"],{

/***/ "./src/app/successstories/successstories.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/successstories/successstories.module.ts ***!
  \*********************************************************/
/*! exports provided: SuccessstoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessstoriesPageModule", function() { return SuccessstoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _successstories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./successstories.page */ "./src/app/successstories/successstories.page.ts");







var routes = [
    {
        path: '',
        component: _successstories_page__WEBPACK_IMPORTED_MODULE_6__["SuccessstoriesPage"]
    }
];
var SuccessstoriesPageModule = /** @class */ (function () {
    function SuccessstoriesPageModule() {
    }
    SuccessstoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_successstories_page__WEBPACK_IMPORTED_MODULE_6__["SuccessstoriesPage"]]
        })
    ], SuccessstoriesPageModule);
    return SuccessstoriesPageModule;
}());



/***/ }),

/***/ "./src/app/successstories/successstories.page.html":
/*!*********************************************************!*\
  !*** ./src/app/successstories/successstories.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n        <ion-menu-button class=\"headerNameCss\"></ion-menu-button>\n    </ion-buttons>\n    <ion-row>\n        <ion-col size=\"8\">\n            <!-- <ion-title style=\"margin-left: 5%; color: #2b0c43;padding: 7% 0% 0% 0%;\">Job Details</ion-title> -->\n            <ion-title class=\"headerTitle\">\n                Success Stories\n            </ion-title>\n        </ion-col>\n\n        <ion-col size=\"2\" class=\"ionCol\">\n            <ion-icon name=\"notifications\" class=\"iconcss\" style=\"color: #2b0c43 !important; margin-left: -25%;\"\n                (click)=\"navigateToNotification()\" aria-label=\"notifications button\" alt=\"notifications button\"></ion-icon>\n            <!-- <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\"></ion-icon> -->\n            <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge-success\" class=\"notifications-badge-success\"\n                color=\"danger\">{{badgecount}}</ion-badge>\n        </ion-col>\n\n        <ion-col size=\"2\" class=\"ionCol\" (click)=\"navToSuccessStories()\">\n            <ion-icon aria-label=\"Add Success Stories\" style=\"color: rgba(var(--ion-text-color-rgb,43,12,67),.54);\" class=\"iconcss\" name=\"md-add-circle\">\n            </ion-icon>\n        </ion-col>\n    </ion-row>\n</ion-toolbar>\n\n<ion-content>\n    <div *ngIf=\"successStoriesList.length !=0\">\n        <ion-card *ngFor=\"let item of successStoriesList\">\n            <ion-card-header class=\"profileCardHeader\" *ngIf=\"uacc_id == item.partner_id\">\n                <ion-grid class=\"cardPadding\">\n                    <ion-row class=\"profilePageHeaderrow\">\n                        <ion-col size=\"10\">\n                        </ion-col>\n                        <ion-col size=\"2\">\n                            <ion-icon class=\"deleteStory\" ios=\"ios-create\" md=\"md-trash\"\n                                (click)=\"deleteSuccessStoryConfirm(item.resource_id)\"></ion-icon>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-header>\n            <ion-card-content><br>\n                <ion-avatar class=\"avatar-border-color\">\n                    <img aria-label=\"profile pic\" src=\"{{item.image_path}}\">\n                </ion-avatar><br>\n                <div class=\"centerAlign\">\n                    <ion-label class=\"cardHeading\">{{item.name}}</ion-label>\n                </div>\n                <br>\n                <div class=\"centerAlign\">\n                    <div style=\"color: #4d4d4d\"\n                        [innerHTML]=\"item.brief.length > 200 ? item.brief.substring (0,200)+'...':item.brief \"></div>\n                </div>\n                <br>\n                <div class=\"centerAlign\" (click)=\"navToSuccessStoryDetails(item.resource_id)\">\n                    <ion-label class=\"labelReadMore\">READ MORE</ion-label>\n                </div>\n            </ion-card-content>\n        </ion-card>\n        <br>\n        <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n    <div *ngIf=\"successStoriesList.length == 0\">\n        <h5 align=\"center\">No Success Storys</h5>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/successstories/successstories.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/successstories/successstories.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardMargins {\n  margin-bottom: 0px;\n  border-radius: 0px;\n  width: 100%;\n  -webkit-margin-start: 0px;\n  margin-top: 0px; }\n\n.centerAlign {\n  text-align: center; }\n\n.cardHeading {\n  color: #2b0c43;\n  font-size: 16px;\n  font-weight: bold; }\n\n.avatar-border-color {\n  margin: auto;\n  height: 75px;\n  width: 75px; }\n\n.avatar-border-color img {\n    border: solid 2px #2b0c43; }\n\n.headerTitle {\n  margin-left: 10%;\n  color: #2b0c43;\n  padding: 5% 0% 0% 0%; }\n\n.ionCol {\n  padding: 4% 5% 4% 4%; }\n\n.labelReadMore {\n  font-size: 16px;\n  color: #4a90e2; }\n\n.deleteStory {\n  font-size: x-large;\n  padding: 5%;\n  float: right; }\n\n#notifications-badge-success {\n  background-color: red;\n  position: absolute;\n  top: 12%;\n  right: 30%;\n  width: 35%;\n  height: 30%;\n  border-radius: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9zdWNjZXNzc3Rvcmllcy9zdWNjZXNzc3Rvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVix5QkFBeUI7RUFDekIsZUFBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUNKLEVBQUE7O0FBRUE7RUFDSSxjQUFhO0VBQ2IsZUFBYztFQUNkLGlCQUFnQixFQUFBOztBQUdwQjtFQUlJLFlBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQU5mO0lBRVEseUJBQXdCLEVBQUE7O0FBT2hDO0VBQ0ksZ0JBQWdCO0VBQUUsY0FBYztFQUNoQyxvQkFDSixFQUFBOztBQUVBO0VBQ0ksb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDUSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3NzdG9yaWVzL3N1Y2Nlc3NzdG9yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmRNYXJnaW5ze1xuICAgIG1hcmdpbi1ib3R0b206IDBweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOjBweDtcbn1cblxuLmNlbnRlckFsaWdue1xuICAgIHRleHQtYWxpZ24gOiBjZW50ZXJcbn1cblxuLmNhcmRIZWFkaW5ne1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLmF2YXRhci1ib3JkZXItY29sb3J7XG4gICAgaW1neyBcbiAgICAgICAgYm9yZGVyOnNvbGlkIDJweCAjMmIwYzQzO1xuICAgIH1cbiAgICBtYXJnaW46YXV0bztcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG59XG5cbi5oZWFkZXJUaXRsZXtcbiAgICBtYXJnaW4tbGVmdDogMTAlOyBjb2xvcjogIzJiMGM0MztcbiAgICBwYWRkaW5nOiA1JSAwJSAwJSAwJVxufVxuXG4uaW9uQ29se1xuICAgIHBhZGRpbmc6IDQlIDUlIDQlIDQlO1xufVxuXG4ubGFiZWxSZWFkTW9yZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM0YTkwZTI7XG59XG5cbi5kZWxldGVTdG9yeXtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcGFkZGluZzogNSU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuICAgIFxuI25vdGlmaWNhdGlvbnMtYmFkZ2Utc3VjY2Vzc3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTIlO1xuICAgICAgICByaWdodDogMzAlO1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/successstories/successstories.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/successstories/successstories.page.ts ***!
  \*******************************************************/
/*! exports provided: SuccessstoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessstoriesPage", function() { return SuccessstoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");







var SuccessstoriesPage = /** @class */ (function () {
    function SuccessstoriesPage(router, dataServices, loadingController, alertCtrl, tts, mobileAccessibility) {
        this.router = router;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.offset = 0;
        this.successStoriesList = [];
        this.uacc_id = localStorage.getItem("users_id");
    }
    SuccessstoriesPage.prototype.ngOnInit = function () {
    };
    SuccessstoriesPage.prototype.ionViewWillEnter = function () {
        this.offset = 0;
        this.successStoriesList = [];
        this.getSuccessStorys(this.offset);
        this.getNotificationBadgeCount();
    };
    SuccessstoriesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Success Stories Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    SuccessstoriesPage.prototype.navToSuccessStories = function () {
        if (this.verifyEmail == '1') {
            this.router.navigate(['/addsuccessstories']);
        }
        else {
            this.presentAlert('', 'Please verify your email address to add success story.');
        }
    };
    SuccessstoriesPage.prototype.navToSuccessStoryDetails = function (successStoryId) {
        this.router.navigate(['/successstorydetails', { successStoryId: successStoryId }]);
    };
    SuccessstoriesPage.prototype.getNotificationBadgeCount = function () {
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
    SuccessstoriesPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    SuccessstoriesPage.prototype.getSuccessStorys = function (offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getsuccessStory(offset, this.uacc_id).then(function (result) {
            if (result.status == 1) {
                _this.verifyEmail = result.verify_email;
                _this.successStoriesList = _this.successStoriesList.concat(result.success_stories_list);
                // this.savedJobListLength = this.resultData.save_job_total_count
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (result.total_stroy_count > _this.successStoriesList.length) {
                    _this.moreDataAvailable = true;
                }
                else {
                    _this.moreDataAvailable = false;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    SuccessstoriesPage.prototype.deleteSuccessStoryConfirm = function (id) {
        this.deleteSuccesssStoryFunction(id);
    };
    SuccessstoriesPage.prototype.deleteSuccessStory = function (successStoryId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteSuccessStory(successStoryId).then(function (result) {
            if (result.status == 1) {
                var index = _this.successStoriesList.findIndex(function (item, i) {
                    return item.resource_id === successStoryId;
                });
                if (index > -1) {
                    _this.successStoriesList.splice(index, 1);
                }
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function For Load Data While Scrolling
    SuccessstoriesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            _this.getSuccessStorys(_this.offset);
            event.target.complete();
        }, 500);
    }; //loadData Function Eds Here.
    //Display loader 
    SuccessstoriesPage.prototype.presentLoading = function () {
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
    SuccessstoriesPage.prototype.presentAlert = function (title, message) {
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
    SuccessstoriesPage.prototype.deleteSuccesssStoryFunction = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm',
                            subHeader: 'Are you sure? Do you want to delete?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        // this.router.navigate(['/login']);
                                        _this.deleteSuccessStory(id);
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
    SuccessstoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successstories',
            template: __webpack_require__(/*! ./successstories.page.html */ "./src/app/successstories/successstories.page.html"),
            styles: [__webpack_require__(/*! ./successstories.page.scss */ "./src/app/successstories/successstories.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_5__["MobileAccessibility"]])
    ], SuccessstoriesPage);
    return SuccessstoriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=successstories-successstories-module.js.map