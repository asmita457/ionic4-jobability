(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["successstorydetails-successstorydetails-module"],{

/***/ "./src/app/successstorydetails/successstorydetails.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/successstorydetails/successstorydetails.module.ts ***!
  \*******************************************************************/
/*! exports provided: SuccessstorydetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessstorydetailsPageModule", function() { return SuccessstorydetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _successstorydetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./successstorydetails.page */ "./src/app/successstorydetails/successstorydetails.page.ts");







var routes = [
    {
        path: '',
        component: _successstorydetails_page__WEBPACK_IMPORTED_MODULE_6__["SuccessstorydetailsPage"]
    }
];
var SuccessstorydetailsPageModule = /** @class */ (function () {
    function SuccessstorydetailsPageModule() {
    }
    SuccessstorydetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_successstorydetails_page__WEBPACK_IMPORTED_MODULE_6__["SuccessstorydetailsPage"]]
        })
    ], SuccessstorydetailsPageModule);
    return SuccessstorydetailsPageModule;
}());



/***/ }),

/***/ "./src/app/successstorydetails/successstorydetails.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/successstorydetails/successstorydetails.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n\n  <ion-row>\n    <ion-col size=\"2\" (click)=\"closePage()\" style=\"padding: 4% 5% 4% 5%\">\n      <ion-icon name=\"close\" style=\" color: #2b0c43;font-size:x-large\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-title style=\"margin-left: 5%; color: #2b0c43;padding: 4% 0% 0% 0%;\">Story Details</ion-title>\n    </ion-col>\n\n    <ion-col size=\"2\" (click)=\"shareSocialMedia()\" style=\"padding: 4% 5% 4% 4%;\">\n      <ion-icon style=\"color: rgba(var(--ion-text-color-rgb,43,12,67),.54);\" class=\"iconcss\" name=\"share\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>\n\n<ion-content>\n  <br>\n  <div *ngFor=\"let item of successStoriesDetails\">\n\n    <div class=\"centerAlign\">\n      <label style=\"color: #2b0c43\">\n        <b>{{item.title}}</b>\n      </label>\n    </div>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-avatar class=\"avatar-border-color\">\n          <img aria-label=\"profile pic\"  src=\"{{item.image_path}}\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\" style=\"margin:auto\">\n        <ion-label class=\"cardHeading\"><b>{{item.name}}</b></ion-label><br><br>\n        <ion-label class=\"cardHeading\" style=\"color: #4d4d4d !important\">{{item.posted_date}}</ion-label><br>\n\n      </ion-col>\n      <div class=\"contentsAlign\">\n        <label style=\"color: #4d4d4d\" [innerHTML]=\"item.brief\">\n\n        </label>\n        <br><br>\n        <label style=\"color: #4d4d4d\" [innerHTML]=\"item.description\">\n        </label>\n      </div>\n    </ion-row>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/successstorydetails/successstorydetails.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/successstorydetails/successstorydetails.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centerAlign {\n  text-align: justify;\n  padding: 5%;\n  font-size: 18px; }\n\n.contentsAlign {\n  text-align: justify;\n  padding: 5%; }\n\n.cardHeading {\n  color: #2b0c43;\n  font-size: 16px;\n  font-weight: bold; }\n\n.avatar-border-color {\n  margin: auto;\n  height: 75px;\n  width: 75px; }\n\n.avatar-border-color img {\n    border: solid 2px #2b0c43; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9zdWNjZXNzc3RvcnlkZXRhaWxzL3N1Y2Nlc3NzdG9yeWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRWY7RUFFQSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdYO0VBRUEsY0FBYTtFQUNiLGVBQWM7RUFDZCxpQkFBZ0IsRUFBQTs7QUFHaEI7RUFJSSxZQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFOZjtJQUVjLHlCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3VjY2Vzc3N0b3J5ZGV0YWlscy9zdWNjZXNzc3RvcnlkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJBbGlnblxue1xudGV4dC1hbGlnbjoganVzdGlmeTtcbnBhZGRpbmc6IDUlO1xuZm9udC1zaXplOiAxOHB4O1xufVxuLmNvbnRlbnRzQWxpZ25cbntcbnRleHQtYWxpZ246IGp1c3RpZnk7XG5wYWRkaW5nOiA1JTtcbn1cblxuLmNhcmRIZWFkaW5nXG57XG5jb2xvcjojMmIwYzQzO1xuZm9udC1zaXplOjE2cHg7XG5mb250LXdlaWdodDpib2xkO1xufVxuXG4uYXZhdGFyLWJvcmRlci1jb2xvcntcbiAgICAgICAgICAgICAgaW1neyBcbiAgICAgICAgICAgICAgYm9yZGVyOnNvbGlkIDJweCAjMmIwYzQzO1xuICAgICAgICAgICAgICB9IFxuICAgIG1hcmdpbjphdXRvO1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aWR0aDogNzVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/successstorydetails/successstorydetails.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/successstorydetails/successstorydetails.page.ts ***!
  \*****************************************************************/
/*! exports provided: SuccessstorydetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessstorydetailsPage", function() { return SuccessstorydetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");









var SuccessstorydetailsPage = /** @class */ (function () {
    function SuccessstorydetailsPage(location, activatedRoute, dataServices, loadingController, alertCtrl, socialSharing, tts, mobileAccessibility) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        var successStoryId = (this.activatedRoute.snapshot.paramMap.get('successStoryId'));
        this.successStorysDetails(successStoryId);
    }
    SuccessstorydetailsPage.prototype.ngOnInit = function () {
    };
    SuccessstorydetailsPage.prototype.closePage = function () {
        this.location.back();
    };
    SuccessstorydetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Success Stories Details Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    SuccessstorydetailsPage.prototype.successStorysDetails = function (successStoryId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.successStorysDetails(successStoryId).then(function (result) {
            _this.loadingController.dismiss();
            if (result.status == 1) {
                _this.successStoriesDetails = result.success_stories_details;
                // this.savedJobListLength = this.resultData.save_job_total_count
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
    SuccessstorydetailsPage.prototype.shareSocialMedia = function () {
        var shareURL = this.successStoriesDetails[0].success_story_details_link;
        console.log('shareURL: ' + shareURL);
        this.socialSharing.share('Refer this job', 'Refer this job', '', shareURL).then(function (success) {
            console.log('Success: ' + success);
        }, function (error) {
            console.log('Failed: ' + error);
        }).catch(function (err) {
            console.log('error: ' + err);
        });
    };
    //Display loader 
    SuccessstorydetailsPage.prototype.presentLoading = function () {
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
    SuccessstorydetailsPage.prototype.presentAlert = function (title, message) {
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
    SuccessstorydetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successstorydetails',
            template: __webpack_require__(/*! ./successstorydetails.page.html */ "./src/app/successstorydetails/successstorydetails.page.html"),
            styles: [__webpack_require__(/*! ./successstorydetails.page.scss */ "./src/app/successstorydetails/successstorydetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_8__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_7__["MobileAccessibility"]])
    ], SuccessstorydetailsPage);
    return SuccessstorydetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=successstorydetails-successstorydetails-module.js.map