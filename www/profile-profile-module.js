(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header color=\"medium\"> -->\n<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"headerNameCss\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"headerNameCss\">My Profile</ion-title>\n    <ion-icon class=\"headerNameCss\" name=\"notifications\" (click)=\"navigateToNotification()\" aria-label=\"notifications button\" alt=\"notifications button\"></ion-icon>\n    <ion-badge *ngIf=\"badgecount != 0\" id=\"notifications-badge\" color=\"danger\">{{badgecount}}</ion-badge>\n  </ion-item>\n</ion-toolbar>\n<!-- </ion-header> -->\n\n<ion-content>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"10\">\n            <ion-label class=\"profilePageHeaderStripSection1\">RESUME</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <!-- <ion-icon class=\"editContact\" style=\"padding: 0% 22% 0% 0%;\" ios=\"ios-add-circle\" md=\"md-add-circle\"></ion-icon> -->\n            <span style=\"padding-left:5%\" (click)=\"uploadResume()\" class=\"profilePageHeaderStripSection2\"\n              aria-label=\"Upload resume button\">UPLOAD</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <h3 *ngIf=\"fileName == null\" style=\"padding-left:5%\" class=\"fileName\">No File Uploaded</h3>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row *ngIf=\"showResume\">\n          <ion-col size=\"1\">\n            <ion-icon class=\"editContact\" ios=\"ios-document\" md=\"md-document\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-label class=\"fileName\">{{fileName}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\" (click)=\"download()\" style=\"padding-left:5%\">\n            <!-- <ion-label class=\"fileName\">\n              <u style=\"padding-left:25%\">Download</u>\n            </ion-label> -->\n            <!-- <div class=\"candidateProfileBackground\"> -->\n            <ion-icon class=\"candidateProfileIcon\" style=\"font-size: x-large\" ios=\"ios-download\" md=\"md-download\">\n            </ion-icon>\n            <!-- </div> -->\n          </ion-col>\n        </ion-row>\n        <p class=\"contentInfo\" style=\"padding-left:2%\" aria-label=\"* Supported File Type: PDF, DOC, DOC X\">*Supported\n          File Type: PDF, DOC, DOCX</p>\n\n      </ion-grid>\n    </ion-card-content>\n\n    <!-- <ion-grid>\n      <ion-col size=\"12\">\n      </ion-col>\n    </ion-grid> -->\n\n  </ion-card>\n\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"10\">\n            <ion-label class=\"profilePageHeaderStripSection1\">CONTACT INFORMATION</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label (click)=\"updateContactInfo()\" class=\"profilePageHeaderStripSection2\">EDIT</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-label class=\"headingLabel\">Name:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{name}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Email:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{email}}</ion-label>\n            <br>\n            <div *ngIf=\"showVerifyButton\">\n              <ion-button class=\"verifyEmail\" size=\"small\" shape=\"round\" fill=\"outline\" style=\"color:red\"\n                (click)=\"emailVerification()\">Verify</ion-button>\n              <br>\n            </div>\n            <div *ngIf=\"showVerifiedButton\">\n              <ion-button class=\"verifiedEmail\" size=\"small\" shape=\"round\" fill=\"outline\" style=\"color: #2b0c43\">\n                Verified</ion-button>\n              <br>\n            </div>\n\n            <ion-label class=\"headingLabel\">Mobile:</ion-label>\n            <br>\n            <!-- <ion-label class=\"contentInfo\">{{mobile}}</ion-label> -->\n            <a href=\"tel:{{mobile}}\" [attr.aria-label]=\"splitMobile\">{{mobile}}</a>\n            <br>\n          </ion-col>\n          <ion-col size=\"4\">\n            <!-- <div class=\"profile-picture big-profile-picture\"></div> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"10\">\n            <ion-label class=\"profilePageHeaderStripSection1\">PRESENT SKILLSET</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label (click)=\"updatePresentSkillsets()\" class=\"profilePageHeaderStripSection2\">EDIT</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"headingLabel\">Industry:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{industry}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Functional Area:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{functionalArea}}</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Total Experience:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{totalYearExperience}} Years, {{totalMonthExperience}} Months</ion-label>\n            <br>\n            <ion-label class=\"headingLabel\">Key Skills:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{KeySkills}}</ion-label>\n\n          </ion-col>\n          <ion-col size=\"4\">\n            <!-- <div class=\"profile-picture big-profile-picture\"></div> -->\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"10\">\n            <ion-label class=\"profilePageHeaderStripSection1\">EXPERIENCE</ion-label>\n          </ion-col>\n          <ion-col size=\"2\" (click)=\"addExperience()\">\n            <ion-label class=\"profilePageHeaderStripSection2\">ADD</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding\" *ngFor=\"let item of seekerExperienceDetails\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n\n            <ion-row style=\"margin-left: -1%;\">\n              <ion-col size=\"10\">\n                <ion-label class=\"headingLabel\">Company:</ion-label>\n                <br>\n                <ion-label class=\"contentInfo\">{{item.company_organisation}}</ion-label>\n              </ion-col>\n\n              <ion-col size=\"1\" (click)=\"updateWorkExperience(item.id)\">\n                <ion-icon aria-label=\"edit\" class=\"editContact\" ios=\"ios-create\" md=\"md-create\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"1\" (click)=\"deleteWorkExperience(item.id)\">\n                <ion-icon aria-label=\"delete\" class=\"editContact\" ios=\"ios-create\" md=\"md-trash\"></ion-icon>\n              </ion-col>\n            </ion-row>\n            <ion-label class=\"headingLabel\">Designation:</ion-label>\n            <br>\n            <ion-label class=\"contentInfo\">{{item.designation}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"10\">\n            <ion-label class=\"profilePageHeaderStripSection1\">EDUCATIONAL INFORMATION</ion-label>\n          </ion-col>\n\n          <ion-col *ngIf=\"education_type == 4\" size=\"2\" (click)=\"addEducation()\">\n            <ion-label class=\"profilePageHeaderStripSection2\">ADD</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n    <div *ngIf=\"education_type == 4\">\n      <ion-card-content class=\"cardPadding\" *ngFor=\"let item of seekerQualificationInfo\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n\n              <ion-row style=\"margin-left: -1%;\">\n                <ion-col size=\"10\">\n                  <ion-label class=\"headingLabel\">Qualification:</ion-label>\n                  <br>\n                  <ion-label class=\"contentInfo\">{{item.qualification_name}}</ion-label>\n                </ion-col>\n\n                <ion-col size=\"1\" (click)=\"updateEducation(item.id)\">\n                  <ion-icon aria-label=\"edit\" class=\"editContact\" ios=\"ios-create\" md=\"md-create\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"1\" (click)=\"deleteEducation(item.id)\">\n                  <ion-icon aria-label=\"delete\" class=\"editContact\" ios=\"ios-create\" md=\"md-trash\"></ion-icon>\n                </ion-col>\n              </ion-row>\n\n              <!-- <ion-label class=\"headingLabel\">Qualification:</ion-label>\n                <br>\n                <ion-label class=\"contentInfo\">{{qualification_name}}</ion-label>\n                <br> -->\n              <ion-label class=\"headingLabel\">Specialization:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{item.specialisation}}</ion-label>\n              <br>\n              <ion-label class=\"headingLabel\">Passing Year:</ion-label>\n              <br>\n              <ion-label class=\"contentInfo\">{{item.year_of_passing}}</ion-label>\n              <br>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </div>\n    <div *ngIf=\"education_type != 4\">\n      <ion-card-content class=\"cardPadding\" *ngFor=\"let item of seekerQualificationInfo\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <!-- <span style=\"color: #2b0c43\">{{educationName}}</span> -->\n              <ion-row style=\"margin-left: -1%;\">\n                <ion-col size=\"10\">\n                  <ion-label class=\"contentInfo\">{{educationName}}</ion-label>\n                </ion-col>\n                <ion-col size=\"1\" (click)=\"updateEducation(item.id)\">\n                  <ion-icon class=\"editContact\" ios=\"ios-create\" md=\"md-create\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"1\" (click)=\"deleteEducation(item.id)\">\n                  <ion-icon class=\"editContact\" ios=\"ios-create\" md=\"md-trash\"></ion-icon>\n                </ion-col>\n              </ion-row>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </div>\n  </ion-card>\n  <br>\n  <br>\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n.profile-picture {\n  padding: 3px;\n  border-radius: 100%;\n  box-sizing: content-box;\n  margin: 5% auto;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  background: #dedede; }\n\n.editContact {\n  font-size: x-large;\n  float: right;\n  color: #2b0c43; }\n\n.fileName {\n  font-size: 15px;\n  color: #2b0c43; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLGVBQWM7RUFDZCxpQkFBZ0IsRUFBQTs7QUFHaEI7RUFDQSxlQUFjO0VBQ2QsY0FBYTtFQUNiLHFCQUFxQixFQUFBOztBQUdyQjtFQUNBLFlBQVk7RUFDWixtQkFBbUI7RUFHbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBVztFQUNYLGNBQWMsRUFBQTs7QUFLaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nTGFiZWx7XG4gIGNvbG9yOiMyYjBjNDM7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBmb250LXdlaWdodDpib2xkO1xuICB9XG4gIFxuICAuY29udGVudEluZm97XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBjb2xvcjojMmIwYzQzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC5wcm9maWxlLXBpY3R1cmUge1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBtYXJnaW46IDUlIGF1dG87XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gIH1cblxuICAuZWRpdENvbnRhY3R7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGNvbG9yOiAjMmIwYzQzO1xuICB9XG5cbiAgXG5cbiAgLmZpbGVOYW1le1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzJiMGM0MztcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/mobile-accessibility/ngx */ "./node_modules/@ionic-native/mobile-accessibility/ngx/index.js");







// import { File } from '@ionic-native/file';
// import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';






var ProfilePage = /** @class */ (function () {
    function ProfilePage(router, dataServices, events, loadingController, alertCtrl, fileChooser, http, transfer, file, 
    // private transfer: FileTransfer,
    // private file: File,
    // private transfer: FileTransfer,
    filePath, tts, mobileAccessibility) {
        this.router = router;
        this.dataServices = dataServices;
        this.events = events;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.fileChooser = fileChooser;
        this.http = http;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        //Arrays for push neccessory information on next page.
        this.seekerContactInfoArray = [];
        this.seekerPresentSkillsetArray = [];
        this.seekerWorkExperienceArray = [];
        this.seekerQualificationInfoArray = [];
        this.employerStaus = true;
        this.showResume = false;
        this.fileUrl = '';
        this.KeySkills = '';
        this.uacc_id = localStorage.getItem("users_id");
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.getSeekerInformation();
        this.getNotificationBadgeCount();
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('My Profile Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    ProfilePage.prototype.getNotificationBadgeCount = function () {
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
    ProfilePage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    // Function For Get Seeker Infromation
    ProfilePage.prototype.getSeekerInformation = function () {
        var _this = this;
        // this.uacc_id = localStorage.getItem("users_id");
        this.seekerContactInfoArray = [];
        this.seekerPresentSkillsetArray = [];
        this.presentLoading();
        this.dataServices.getSeekerData(this.uacc_id).then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                // Seeker Details
                _this.name = _this.resultData.seeker_details[0].first_name;
                _this.email = _this.resultData.seeker_details[0].email;
                _this.mobile = _this.resultData.seeker_details[0].mobile;
                _this.splitMobile = _this.mobile.split('').join(' ').replace(/0/g, 'zero');
                _this.education_type = _this.resultData.seeker_details[0].education_type;
                _this.country = _this.resultData.seeker_details[0].country == 0 ? '' : _this.resultData.seeker_details[0].country;
                _this.state = _this.resultData.seeker_details[0].state == 0 ? '' : _this.resultData.seeker_details[0].state;
                _this.city = _this.resultData.seeker_details[0].city == 0 ? '' : _this.resultData.seeker_details[0].city;
                _this.verify_email = _this.resultData.seeker_details[0].verify_email;
                _this.fileName = _this.resultData.seeker_details[0].attach_cv;
                _this.fileUrl = _this.resultData.seeker_details[0].file_path;
                if (_this.fileName != null) {
                    _this.showResume = true;
                }
                if (_this.verify_email == 0) {
                    _this.showVerifyButton = true;
                    _this.showVerifiedButton = false;
                }
                else {
                    _this.showVerifiedButton = true;
                    _this.showVerifyButton = false;
                }
                _this.seekerContactInfoArray.push({
                    name: _this.name,
                    email: _this.email,
                    mobile: _this.mobile,
                    address: _this.resultData.seeker_details[0].address,
                    gender: _this.resultData.seeker_details[0].gender,
                    marritalStatus: _this.resultData.seeker_details[0].marital_status,
                    country: _this.country,
                    state: _this.state,
                    city: _this.city,
                    disability_id: _this.resultData.seeker_details[0].disability_id,
                });
                _this.industry = _this.resultData.seeker_details[0].industry_name;
                _this.functionalArea = _this.resultData.seeker_details[0].functional_area;
                _this.totalYearExperience = _this.resultData.seeker_details[0].years_total_experience;
                _this.totalMonthExperience = _this.resultData.seeker_details[0].months_total_experience;
                _this.KeySkills = _this.resultData.seeker_details[0].key_skill;
                _this.seekerPresentSkillsetArray.push({
                    industryId: _this.resultData.seeker_details[0].industry_id,
                    industryName: _this.resultData.seeker_details[0].industry_name,
                    functionalAreaId: _this.resultData.seeker_details[0].functional_area_id,
                    functionalAreaName: _this.resultData.seeker_details[0].functional_area,
                    totalMonthExperience: _this.resultData.seeker_details[0].months_total_experience,
                    totalYearExperience: _this.resultData.seeker_details[0].years_total_experience,
                    KeySkills: _this.resultData.seeker_details[0].key_skill
                });
                // Work Experience Of Seeker
                _this.seekerExperienceDetails = _this.resultData.seeker_experience_details;
                _this.experienceDetailscardLength = _this.seekerExperienceDetails.length;
                if (_this.seekerExperienceDetails.length != 0) {
                    _this.currentEmployerStatus = _this.seekerExperienceDetails[0].current_employer == 0 ? false : true;
                }
                // Seeker Educational information
                _this.seekerQualificationInfo = _this.resultData.seeker_qualification_details;
                _this.cardLength = _this.seekerQualificationInfo.length;
                _this.hideAndShowForEducationInfo(_this.seekerQualificationInfo);
                _this.setDefaultEducation(_this.education_type);
                localStorage.setItem('userName', _this.name);
                _this.events.publish('Event-UserName');
                if (_this.country != null || _this.country != undefined || _this.country != '') {
                    _this.getDDLAPI(_this.country);
                }
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.resultData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // Function For Get Seeker Infromation Ends Here.
    //Function For Uplaod Resume
    ProfilePage.prototype.uploadResume = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            var filePathURI = uri;
            _this.filePath.resolveNativePath(uri)
                .then(function (url) {
                var choosedFileName = url.substring(url.lastIndexOf("/") + 1);
                var fileExtension = choosedFileName.split('.');
                if (fileExtension[1] == 'pdf' || fileExtension[1] == 'PDF' || fileExtension[1] == 'doc' || fileExtension[1] == 'DOC' || fileExtension[1] == 'docx' || fileExtension[1] == 'DOCX') {
                    _this.fileName = url.substring(url.lastIndexOf("/") + 1);
                    var fileTransfer = _this.transfer.create();
                    var headers = new Headers();
                    // headers.append('Content-Type', 'multipart/form-data' );
                    headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    headers.append('Access-Control-Allow-Origin', '*');
                    var options = {
                        headers: headers,
                        fileKey: 'attach_cv',
                        fileName: _this.fileName.split(" ").join("%20"),
                        chunkedMode: false,
                        params: {
                            'uacc_id': localStorage.getItem("users_id")
                        }
                    };
                    _this.presentLoading();
                    var fileURL = url.split(" ").join("%20");
                    fileTransfer.upload(filePathURI, 'http://www.jobability.org/api/profile/update_seeker_resume', options)
                        .then(function (data) {
                        _this.fileUploadResponse = data;
                        _this.loadingController.dismiss();
                        _this.showResume = true;
                        if (_this.fileUploadResponse.responseCode == 200) {
                            _this.getSeekerInformation();
                            _this.presentAlert("", JSON.parse(_this.fileUploadResponse.response).message);
                        }
                        else {
                            _this.presentAlert("", "Upload Failed");
                        }
                    }, function (err) {
                        // error
                        console.log('error: ' + err);
                        _this.loadingController.dismiss();
                        _this.presentAlert("", "Upload Failed");
                    });
                }
                else {
                    _this.loadingController.dismiss();
                    // this.showResume = false;
                    // this.fileName = '';
                    _this.presentAlert('File Type', 'You can choose only .pdf, .doc or .docx types of file');
                }
            });
        }).catch(function (e) { return console.log(e); });
    }; // uploadResume Fnction Ends Here.
    //download Resume 
    ProfilePage.prototype.download = function () {
        var _this = this;
        this.presentLoading();
        var url = this.fileUrl;
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
    //Function For Send Seeker Data to Update Contact 
    ProfilePage.prototype.updateContactInfo = function () {
        // this.router.navigate(['/updatecontact'])
        this.router.navigate(['/updatecontact', { seekerContactInfo: JSON.stringify(this.seekerContactInfoArray[0]) }]);
    };
    // Function For Send Data to Update Contact Ends Here.
    // Function For Send Seeker Data To Presend Skill Set UI
    ProfilePage.prototype.updatePresentSkillsets = function () {
        this.router.navigate(['/updateskillset', { seekerSkillSetInfo: JSON.stringify(this.seekerPresentSkillsetArray[0]) }]);
    }; // Function For Send Seeker Data To Presend SkillSet UI Ends Here
    // Function For Send Seeker Data To Work Experience UI
    ProfilePage.prototype.updateWorkExperience = function (id) {
        this.seekerWorkExperienceArray = [];
        for (var i = 0; i < this.seekerExperienceDetails.length; i++) {
            if (this.seekerExperienceDetails[i].id == id) {
                if (this.seekerExperienceDetails[i].current_employer == 1) {
                    this.employerStaus = true;
                }
                else {
                    this.employerStaus = true;
                }
                this.seekerWorkExperienceArray.push({
                    // id: this.seekerExperienceDetails[i].id,
                    id: id,
                    currentEmployer: this.seekerExperienceDetails[i].current_employer,
                    company: this.seekerExperienceDetails[i].company_organisation,
                    designation: this.seekerExperienceDetails[i].designation,
                    fromYearStartDate: this.seekerExperienceDetails[i].start_year,
                    fromMonthStartDate: this.seekerExperienceDetails[i].start_month,
                    toYearEndDate: this.seekerExperienceDetails[i].end_year,
                    toMonthEndDate: this.seekerExperienceDetails[i].end_month,
                    reasonForLeaving: this.seekerExperienceDetails[i].reason_for_leaving,
                    employerStaus: this.seekerExperienceDetails[0].current_employer,
                });
            }
        }
        this.router.navigate(['/updateworkexperience', { seekerExperienceInfo: JSON.stringify(this.seekerWorkExperienceArray[0]) }]);
    }; // Function For Send Seeker Data To Work Experience UI Ends Here.
    //Function For Delete Work Experience 
    ProfilePage.prototype.deleteWorkExperience = function (id) {
        this.deleteEducationAlertFunction(id, 'DeleteExperiance');
    }; // deleteWorkExperience Function Ends Here.
    ProfilePage.prototype.deleteWorkExperienceWithID = function (id) {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteWorkExperience(id).then(function (result) {
            _this.emailVerificatonResponse = result;
            _this.loadingController.dismiss();
            if (_this.emailVerificatonResponse.status == 1) {
                _this.getSeekerInformation();
                _this.presentAlert('', _this.emailVerificatonResponse.message);
            }
            else {
                _this.presentAlert('', _this.emailVerificatonResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Function For Delete Work Experience 
    ProfilePage.prototype.deleteEducation = function (id) {
        this.deleteEducationAlertFunction(id, 'DeleteEducation');
    }; // deleteEducation Function  Ends Here.
    ProfilePage.prototype.deleteEducationWithID = function (id) {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteEducation(id).then(function (result) {
            _this.emailVerificatonResponse = result;
            if (_this.emailVerificatonResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.getSeekerInformation();
                _this.presentAlert('', _this.emailVerificatonResponse.message);
            }
            else {
                _this.presentAlert('', _this.emailVerificatonResponse.message);
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    ProfilePage.prototype.updateEducation = function (id) {
        this.seekerQualificationInfoArray = [];
        for (var i = 0; i < this.seekerQualificationInfo.length; i++) {
            if (this.seekerQualificationInfo[i].id == id) {
                this.seekerQualificationInfoArray.push({
                    id: this.seekerQualificationInfo[i].id,
                    educationType: this.education_type,
                    qualificationId: this.seekerQualificationInfo[i].qualification_id,
                    qualificationName: this.seekerQualificationInfo[i].qualification_name,
                    specialisation: this.seekerQualificationInfo[i].specialisation,
                    instituteUniversityId: this.seekerQualificationInfo[i].institute_university,
                    instituteUniversityName: this.seekerQualificationInfo[i].institute_university_name,
                    yearOfPassing: this.seekerQualificationInfo[i].year_of_passing,
                    typeOfCourse: this.seekerQualificationInfo[i].edu_type,
                    cardLength: this.seekerQualificationInfo.length
                });
            }
        }
        this.router.navigate(['/updateeducational', { item: JSON.stringify(this.seekerQualificationInfoArray[0]) }]);
    };
    //Display loader 
    ProfilePage.prototype.presentLoading = function () {
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
    // // Function For Get All Countrys
    // getCountryArray() {
    //   this.resultData = [];
    //   this.dataServices.getCountryArrayAPI().then((result) => {
    //     this.resultData = result
    //     if (this.resultData.status == 1) {
    //       localStorage.setItem("countryArray", JSON.stringify(this.resultData));
    //     } else {
    //     }
    //   }, error => {
    //     console.log('Error in login: ' + JSON.stringify(error))
    //   })
    // } // Function For Get All Countrys Ends Here.
    // Function For Get All States and Citys of According to Country
    ProfilePage.prototype.getDDLAPI = function (countryId) {
        var _this = this;
        this.dataServices.getDDLAPI(countryId).then(function (result) {
            _this.getDLLAPIData = result;
            if (_this.getDLLAPIData.status == 1) {
                localStorage.setItem("stateAndCityArray", JSON.stringify(_this.getDLLAPIData));
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // getDDLAPI Function Ends Here.
    // Function For Email Verification
    ProfilePage.prototype.emailVerification = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.emailVerification().then(function (result) {
            _this.emailVerificatonResponse = result;
            if (_this.emailVerificatonResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert('Email', _this.emailVerificatonResponse.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('Email', _this.emailVerificatonResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // Function emailVerification Ends Here.
    //Function For Verified Email
    // emailVerified(){
    //   this.presentAlert('Email','This email address is already verified');
    // }
    ProfilePage.prototype.presentAlert = function (title, message) {
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
                        alert.setAttribute('role', 'alert');
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.addExperience = function () {
        this.router.navigate(['/updateworkexperience', { addExperience: 'addExperience', currentEmployer: this.currentEmployerStatus, cardLength: this.experienceDetailscardLength }]);
    };
    ProfilePage.prototype.addEducation = function () {
        this.router.navigate(['/updateeducational', { addEducation: 'addEducation', education_type: this.education_type, cardLength: this.cardLength }]);
    };
    ProfilePage.prototype.setDefaultEducation = function (educationType) {
        if (educationType == '1') {
            this.educationName = 'No Schooling';
        }
        else if (educationType == '2') {
            this.educationName = 'Pre-Primary';
        }
        else if (educationType == '3') {
            this.educationName = 'Primary';
        }
        else if (educationType == '0') {
            this.educationName = 'Education information not available';
        }
    };
    ProfilePage.prototype.hideAndShowForEducationInfo = function (seekerQualificationInfo) {
        if (seekerQualificationInfo.length == 0) {
            this.education_type = '4';
        }
    };
    ProfilePage.prototype.deleteEducationAlertFunction = function (id, deleteAction) {
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
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        // this.router.navigate(['/login']);
                                        if (deleteAction == 'DeleteEducation') {
                                            _this.deleteEducationWithID(id);
                                        }
                                        else {
                                            _this.deleteWorkExperienceWithID(id);
                                        }
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
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["FileChooser"],
            _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_10__["TextToSpeech"],
            _ionic_native_mobile_accessibility_ngx__WEBPACK_IMPORTED_MODULE_11__["MobileAccessibility"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map