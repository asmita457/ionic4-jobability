(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicedetails-servicedetails-module"],{

/***/ "./src/app/servicedetails/servicedetails.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/servicedetails/servicedetails.module.ts ***!
  \*********************************************************/
/*! exports provided: ServicedetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicedetailsPageModule", function() { return ServicedetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicedetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicedetails.page */ "./src/app/servicedetails/servicedetails.page.ts");







var routes = [
    {
        path: '',
        component: _servicedetails_page__WEBPACK_IMPORTED_MODULE_6__["ServicedetailsPage"]
    }
];
var ServicedetailsPageModule = /** @class */ (function () {
    function ServicedetailsPageModule() {
    }
    ServicedetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_servicedetails_page__WEBPACK_IMPORTED_MODULE_6__["ServicedetailsPage"]]
        })
    ], ServicedetailsPageModule);
    return ServicedetailsPageModule;
}());



/***/ }),

/***/ "./src/app/servicedetails/servicedetails.page.html":
/*!*********************************************************!*\
  !*** ./src/app/servicedetails/servicedetails.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\" (click)=\"goBack()\">\n        <ion-img src=\"../../assets/img/backnavigation.png\" style=\"padding: 0% 20% 0% 20%;\">\n        </ion-img>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-title style=\"margin-left: 5%; margin-top: 2%; color: #2b0c43\">Service Details</ion-title>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon class=\"iconcss\" aria-label=\"comment for service\" ios=\"ios-text\" md=\"md-text\" (click)=\"comment()\"\n          style=\"float:right;color:#2b0c43; padding: 5% 20% 5% 20%;\"></ion-icon>\n      </ion-col>\n\n      <ion-col size=\"2\" (click)=\"ratings()\" >\n        <ion-icon aria-label=\"rate for service\" ios=\"ios-star\" md=\"md-star\" style=\"color: #2b0c43;font-size: x-large;padding: 2% 0% 0% 20%;\">\n        </ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <div *ngIf=\"showServiceDetails\"> -->\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col>\n\n            <ion-label class=\"profilePageHeaderStripSection1 cardContents\">SERVICE DETAILS</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding cardLeftPadding\">\n      <ion-grid> </ion-grid>\n\n      <ion-label class=\"cardHeadings\">Service Title:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{serviceDetails.name}}</ion-label>\n      <br>\n      <ion-label class=\"cardHeadings\">Location:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{serviceDetails.location_list}}</ion-label>\n      <br>\n\n      <ion-label class=\"cardHeadings\">Disability Accepted:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{serviceDetails.disability_list}}</ion-label>\n      <br>\n\n      <ion-label class=\"cardHeadings\">Service Category:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{serviceDetails.service_type_list}}</ion-label>\n      <br>\n\n      <ion-label class=\"cardHeadings\">Service Description:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{serviceDetails.description}}</ion-label>\n      <br>\n\n      <ion-label class=\"cardHeadings\">Posted by:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{serviceDetails.contact_person}}, {{serviceDetails.posted_age}}</ion-label>\n      <br>\n      <br>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col>\n\n            <ion-label class=\"profilePageHeaderStripSection1 cardContents\">CONTACT INFORMATION</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid> </ion-grid>\n\n      <div class=\"cardPaddingLeft\" *ngIf=\"serviceDetails.show_contact == 0\">\n        <div *ngIf=\"serviceDetails.organization_name != ''\">\n          <ion-label class=\"cardHeadings\">Organization Name:</ion-label>\n          <br>\n          <ion-label class=\"cardContents\">\n            {{serviceDetails.organization_name}}</ion-label>\n          <br>\n        </div>\n        <ion-label class=\"cardHeadings\">Email:</ion-label>\n        <br>\n        <ion-label class=\"cardContents\">{{serviceDetails.contact_email}}</ion-label>\n        <br>\n\n        <!-- <ion-label class=\"cardHeadings\">Disability Accepted:</ion-label>\n          <br>\n          <ion-label class=\"cardContents\">{{serviceDetails.disability_list}}</ion-label>\n          <br> -->\n\n        <ion-label class=\"cardHeadings\">Website:</ion-label>\n        <br>\n        <ion-label class=\"cardContents\">{{serviceDetails.organization_website_url}}</ion-label>\n        <br>\n\n        <ion-label class=\"cardHeadings\">Person:</ion-label>\n        <br>\n        <ion-label class=\"cardContents\">{{serviceDetails.contact_person}}</ion-label>\n        <br>\n\n        <ion-label class=\"cardHeadings\">Mobile:</ion-label>\n        <br>\n        <a href=\"tel:{{serviceDetails.mobile}}\" [attr.aria-label]=\"splitMobile\">{{serviceDetails.contact_mobile}}</a>\n\n        <br>\n\n        <ion-label class=\"cardHeadings\">Phone:</ion-label>\n        <br>\n        <a href=\"tel:{{serviceDetails.contact_phone}}\"\n          [attr.aria-label]=\"splitPhone\">{{serviceDetails.contact_phone}}</a>\n\n        <br>\n        <!-- </ion-row> -->\n      </div>\n      <ion-grid>\n      </ion-grid>\n      <div *ngIf=\"serviceDetails.show_contact == 1\" style=\"padding: 5%\">\n        The service provider has not shared their contact details.\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <!-- </div> -->\n\n\n  <br>\n  <br>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/servicedetails/servicedetails.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/servicedetails/servicedetails.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardHeadings {\n  font-size: 16px;\n  color: #2b0c43;\n  font-weight: bold; }\n\n.cardContents {\n  font-size: 16px;\n  color: #2b0c43;\n  padding-bottom: 3%; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9zZXJ2aWNlZGV0YWlscy9zZXJ2aWNlZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsY0FBYTtFQUNmLGlCQUFnQixFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VkZXRhaWxzL3NlcnZpY2VkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkSGVhZGluZ3N7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiMyYjBjNDM7IFxuICBmb250LXdlaWdodDpib2xkO1xuICB9XG4gIC5jYXJkQ29udGVudHN7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiMyYjBjNDM7IFxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcblxuICB9XG5cbiAgLmNvbnRlbnRJbmZve1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAiXX0= */"

/***/ }),

/***/ "./src/app/servicedetails/servicedetails.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/servicedetails/servicedetails.page.ts ***!
  \*******************************************************/
/*! exports provided: ServicedetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicedetailsPage", function() { return ServicedetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");








var ServicedetailsPage = /** @class */ (function () {
    // showServiceDetails: boolean = true
    // showContact: boolean = false
    // showRating: boolean = false
    // ratingButton: boolean = false
    function ServicedetailsPage(location, router, activatedRoute, dataServices, loadingController, alertCtrl, modalCtrl, tts, mobileAccessibility) {
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        this.serviceDetails = {
            contact_email: "",
            contact_mobile: "",
            contact_person: "",
            description: "",
            disability_id: "",
            disability_list: "",
            id: "",
            location_list: "",
            name: "",
            organization_name: "",
            organization_website_url: "",
            posted_age: "",
            service_star_rate: 0,
            service_type_list: "",
            serviceprovider_id: "",
            total_service_contact: 0
        };
    }
    ServicedetailsPage.prototype.ngOnInit = function () {
    };
    ServicedetailsPage.prototype.ionViewWillEnter = function () {
        this.serviceId = (this.activatedRoute.snapshot.paramMap.get('serviceId'));
        this.userId = localStorage.getItem('users_id');
        this.getserviceDetails();
    };
    ServicedetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('Service Details Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    ServicedetailsPage.prototype.getserviceDetails = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getJobSeekerServiceDetails(this.serviceId, this.userId).then(function (result) {
            _this.serviceDetailsResponse = result;
            if (_this.serviceDetailsResponse.status == 1) {
                _this.serviceDetails = _this.serviceDetailsResponse.services_details[0];
                _this.splitMobile = _this.serviceDetailsResponse.services_details[0].contact_mobile.split('').join(' ').replace(/0/g, 'zero');
                _this.splitPhone = _this.serviceDetailsResponse.services_details[0].contact_phone.split('').join(' ').replace(/0/g, 'zero');
                _this.serviceProviderId = _this.serviceDetailsResponse.services_details[0].serviceprovider_id;
                _this.rating = _this.serviceDetailsResponse.services_details[0].service_star_rate == 0 ? 'null' : _this.serviceDetailsResponse.services_details[0].service_star_rate;
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert("", _this.serviceDetailsResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error at service details: ' + JSON.stringify(error));
        });
    };
    //Function for back navigate user
    ServicedetailsPage.prototype.goBack = function () {
        // this.router.navigate(['/searchservices']);
        this.location.back();
    }; //goBack Function Ends Here. 
    ServicedetailsPage.prototype.comment = function () {
        if (this.serviceDetails.total_service_contact != 0) {
            this.presentAlert('', 'You have already commented for this service');
            return;
        }
        else {
            this.router.navigate(['/servicereview', { serviceId: this.serviceId, showCommnet: "true", navFromServiceDetails: true }]);
        }
    }; //Display loader 
    ServicedetailsPage.prototype.ratings = function () {
        this.router.navigate(['/servicereview', { serviceProviderId: this.serviceProviderId, ratingCount: this.rating, serviceId: this.serviceId, navFromServiceDetails: true }]);
    };
    ServicedetailsPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    ServicedetailsPage.prototype.presentAlert = function (title, message) {
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
                                        // this.router.navigate(['/searchservices'])
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
    ServicedetailsPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    ServicedetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicedetails',
            template: __webpack_require__(/*! ./servicedetails.page.html */ "./src/app/servicedetails/servicedetails.page.html"),
            styles: [__webpack_require__(/*! ./servicedetails.page.scss */ "./src/app/servicedetails/servicedetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_7__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_6__["MobileAccessibility"]])
    ], ServicedetailsPage);
    return ServicedetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicedetails-servicedetails-module.js.map