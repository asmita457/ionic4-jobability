(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./src/app/notification/notification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/notification/notification.page.ts");







var routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]
    }
];
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());



/***/ }),

/***/ "./src/app/notification/notification.page.html":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n    <ion-item lines=\"none\" class=\"new-background-color\">\n        <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n        <ion-title style=\"margin-left: 5%; color: #2b0c43\">Notifications</ion-title>\n    </ion-item>\n</ion-toolbar>\n\n<ion-content>\n    <div *ngIf=\"notificationCount != 0\">\n        <ion-card *ngFor=\"let item of notificationDataArray; let j = index\" class=\"cardMargins\">\n            <ion-card-content>\n                <ion-list>\n                    <ion-grid (click)=\"servicesDetail(j)\">\n                        <ion-row>\n                            <ion-col size=\"12\">\n                                <ion-label style=\"font-size: 18px;color:#2b0c43;font-weight: 600;\">{{item.title}}\n                                </ion-label>\n                            </ion-col>\n                        </ion-row>\n\n                        <ion-row style=\"padding:5px\">\n                            <ion-col size=\"12\">\n                                <ion-label style=\"font-size: 15px;color:#2b0c43 ; margin-top:-3px\">{{item.message}}\n                                </ion-label>\n                            </ion-col>\n                            <br>\n                        </ion-row>\n                        <i>\n                            <ion-label style=\"font-size: 15px;color:#2b0c43; padding :5px; font-weight:italic\">Time:\n                                {{item.create_date}}</ion-label><br>\n                        </i>\n                    </ion-grid>\n                </ion-list>\n            </ion-card-content>\n        </ion-card>\n        <br>\n        <ion-infinite-scroll [disabled]=\"!moreDataAvailable\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n\n    <div *ngIf=\"notificationCount == 0\" class=\"noNotification\">\n        <br>\n        <p [attr.role]=\"role\">Currently there is no notification received</p>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/notification/notification.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noNotification {\n  text-align: center;\n  font-size: larger; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vTm90aWZpY2F0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/notification/notification.page.ts":
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");








var NotificationPage = /** @class */ (function () {
    function NotificationPage(location, dataServices, router, alertCtrl, loadingController, events, tts, mobileAccessibility) {
        this.location = location;
        this.dataServices = dataServices;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.events = events;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.offset = 0;
        this.notificationDataArray = [];
        this.notificationCount = 0;
        this.role = "role";
    }
    NotificationPage.prototype.ngOnInit = function () {
    };
    NotificationPage.prototype.ionViewWillEnter = function () {
        this.notificationDataArray = [];
        this.onPageLoad();
    };
    NotificationPage.prototype.onPageLoad = function () {
        localStorage.setItem('badge', '0');
        this.offset = 0;
        this.notificationDataArray = [];
        this.getNotificationsListData(this.offset);
    };
    NotificationPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Notification Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 500);
            }
        });
    };
    NotificationPage.prototype.closePage = function () {
        this.location.back();
    };
    NotificationPage.prototype.getNotificationsListData = function (offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.uacc_id = localStorage.getItem('users_id');
        this.dataServices.getNotificationListData(offset, this.uacc_id).then(function (result) {
            if (result.status == 1 && result.total_notification_count > 0) {
                _this.notificationCount = result.total_notification_count;
                _this.notificationDataArray = _this.notificationDataArray.concat(result.notification_list);
                if (_this.notificationCount < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                _this.loadingController.dismiss();
            }
            else {
                setTimeout(function () {
                    _this.role = "alertdialog";
                }, 3000);
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
        });
    };
    NotificationPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.notificationCount) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getNotificationsListData(_this.offset);
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    //Display loader 
    NotificationPage.prototype.presentLoading = function () {
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
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.page.html */ "./src/app/notification/notification.page.html"),
            styles: [__webpack_require__(/*! ./notification.page.scss */ "./src/app/notification/notification.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_7__["MobileAccessibility"]])
    ], NotificationPage);
    return NotificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=notification-notification-module.js.map