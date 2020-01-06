(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchjobdetail-searchjobdetail-module"],{

/***/ "./src/app/searchjobdetail/searchjobdetail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/searchjobdetail/searchjobdetail.module.ts ***!
  \***********************************************************/
/*! exports provided: SearchjobdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchjobdetailPageModule", function() { return SearchjobdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchjobdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchjobdetail.page */ "./src/app/searchjobdetail/searchjobdetail.page.ts");







var routes = [
    {
        path: '',
        component: _searchjobdetail_page__WEBPACK_IMPORTED_MODULE_6__["SearchjobdetailPage"]
    }
];
var SearchjobdetailPageModule = /** @class */ (function () {
    function SearchjobdetailPageModule() {
    }
    SearchjobdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchjobdetail_page__WEBPACK_IMPORTED_MODULE_6__["SearchjobdetailPage"]]
        })
    ], SearchjobdetailPageModule);
    return SearchjobdetailPageModule;
}());



/***/ }),

/***/ "./src/app/searchjobdetail/searchjobdetail.page.html":
/*!***********************************************************!*\
  !*** ./src/app/searchjobdetail/searchjobdetail.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n\n  <ion-row>\n    <ion-col size=\"2\" (click)=\"goBack()\">\n      <ion-img src=\"../../assets/img/backnavigation.png\" style=\"padding: 20% 25% 25% 25%;\">\n      </ion-img>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-title style=\"margin-left: 5%; color: #2b0c43;padding: 7% 0% 0% 0%;\">Job Details</ion-title>\n    </ion-col>\n\n\n    <ion-col size=\"2\">\n      <ion-icon *ngIf=\"jobSaveFlag != 1\" (click)=\"saveJob(jobId)\" aria-label=\"save job\" name=\"heart-empty\"\n        style=\"float:right;padding: 20%;\" class=\"iconcss \"></ion-icon>\n      <ion-icon *ngIf=\"jobSaveFlag == 1\" (click)=\"saveJob(jobId)\" aria-label=\"job saved\" ios=\"ios-heart\" md=\"md-heart\"\n        style=\"float:right;color:#2b0c43;padding: 20%;\" class=\"iconcss\"></ion-icon>\n    </ion-col>\n\n    <ion-col size=\"2\" (click)=\"shareSocialMedia()\" style=\"padding: 4% 5% 4% 4%;\">\n      <ion-icon style=\"color: rgba(var(--ion-text-color-rgb,43,12,67),.54);\" class=\"iconcss\" name=\"share\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>\n\n<ion-content>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n\n    </ion-card-header>\n    <ion-card-content class=\"cardPadding cardLeftPadding\">\n      <ion-grid> </ion-grid>\n      <br>\n      <ion-label class=\"cardHeadings\">Job Title:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.name}}</ion-label>\n      <br>\n\n      <ion-label class=\"cardHeadings\">Company Name:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.company_name}}</ion-label>\n      <br>\n\n      <ion-label class=\"cardHeadings\">Experience:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.min_experience}} - {{jobDetailsArray.max_experience}}\n        years\n      </ion-label>\n      <br>\n\n      <ion-label class=\"cardHeadings\">Location:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.location_name}}</ion-label>\n      <br>\n\n      <ion-label class=\"cardHeadings\">Annual Salary:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\" *ngIf=\"jobDetailsArray.hide_salary == 0\" [attr.aria-label]=\"salary\">\n        {{jobDetailsArray.ctc_currency}}\n        {{jobDetailsArray.annual_ctc_from}} -\n        {{jobDetailsArray.annual_ctc_to}}\n      </ion-label>\n      <ion-label class=\"cardContents\" *ngIf=\"jobDetailsArray.hide_salary != 0\"> Not Disclosed</ion-label>\n      <br>\n\n\n      <ion-label class=\"cardHeadings\">Disability Types: </ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.disability_name}}</ion-label>\n      <br>\n\n      <ion-label class=\"cardHeadings\">Vacancies:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.number_of_vacancies}}</ion-label>\n      <br>\n\n      <div\n        *ngIf=\"(jobDetailsArray.walkin_from_date != 0 || jobDetailsArray.walkin_to_date != 0 || jobDetailsArray.applicants_display != 1) && (jobDetailsArray.tab_show != 1)\">\n        <ion-label class=\"cardHeadings\">Walkin Interview: </ion-label>\n        <br>\n        <ion-label class=\"cardContents\">{{jobDetailsArray.walkin_from_date}} - {{jobDetailsArray.walkin_to_date}},\n          {{jobDetailsArray.walkin_from_time}}\n          - {{jobDetailsArray.walkin_to_time}}</ion-label>\n        <br>\n      </div>\n\n      <ion-label class=\"cardHeadings\"> <i>Posted by:</i> </ion-label>\n      <br>\n      <ion-label class=\"cardContents\"><i>{{jobDetailsArray.person_name}}, {{jobDetailsArray.posted_age}} </i>\n      </ion-label>\n      <br>\n      <br>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"headerTitle\">JOB DESCRIPTION</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding cardLeftPadding\">\n      <ion-grid> </ion-grid>\n      <ion-label class=\"cardHeadings\">Industry:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.industry_name}}</ion-label>\n      <br>\n      <ion-label class=\"cardHeadings\">Functional Area:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.functional_area}}</ion-label>\n      <br>\n      <ion-label class=\"cardHeadings\">Job Role:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.job_role}}</ion-label>\n      <br>\n      <ion-label class=\"cardHeadings\">Job Description:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.job_desciption}}</ion-label>\n      <br>\n      <br>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"headerTitle\">DESIRED CANDIDATE PROFILE</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding cardLeftPadding\">\n      <ion-grid> </ion-grid>\n      <ion-label class=\"cardHeadings\">Key Skills:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.key_skills}}</ion-label>\n      <br>\n      <ion-label class=\"cardHeadings\">Qualification:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.qualification_name}}</ion-label>\n      <br>\n      <br>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"headerTitle\" aria-label=\"Company Profile\">COMPNAY PROFILE</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding cardLeftPadding\">\n      <ion-grid> </ion-grid>\n      <ion-label class=\"cardHeadings\">Company Name:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.company_name}}</ion-label>\n      <br>\n      <ion-label class=\"cardHeadings\">Company Description:</ion-label>\n      <br>\n      <ion-label class=\"cardContents\">{{jobDetailsArray.company_description}}</ion-label>\n      <br>\n      <br>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"cardMargins\">\n    <ion-card-header class=\"profileCardHeader\">\n      <ion-grid class=\"cardPadding\">\n        <ion-row class=\"profilePageHeaderrow\">\n          <ion-col size=\"12\">\n            <ion-label class=\"headerTitle\">CONTACT INFORMATION</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n\n    <ion-card-content class=\"cardPadding cardLeftPadding\">\n      <ion-grid> </ion-grid>\n      <ion-row *ngIf=\"jobDetailsArray.show_contact == 0\">\n        <ion-col size=\"12\">\n          <ion-label class=\"cardHeadings\">Contact Person:</ion-label>\n          <br>\n          <ion-label class=\"cardContents\">{{jobDetailsArray.person_name}}</ion-label>\n          <br>\n          <ion-label class=\"cardHeadings\">Company Address:</ion-label>\n          <br>\n          <ion-label class=\"cardContents\">{{jobDetailsArray.company_address}}</ion-label>\n          <br>\n          <ion-label class=\"cardHeadings\">Country:</ion-label>\n          <br>\n          <ion-label class=\"cardContents\">{{jobDetailsArray.country_name}}</ion-label>\n          <br>\n          <ion-label class=\"cardHeadings\">State / Province:</ion-label>\n          <br>\n          <ion-label class=\"cardContents\">{{jobDetailsArray.state_name}}</ion-label>\n          <br>\n          <ion-label class=\"cardHeadings\">District / City:</ion-label>\n          <br>\n          <ion-label class=\"cardContents\">{{jobDetailsArray.city_name}}</ion-label>\n          <br>\n          <ion-label class=\"cardHeadings\">Mobile:</ion-label>\n          <br>\n          <a href=\"tel:{{jobDetailsArray.mobile}}\" [attr.aria-label]=\"splitMobile\">{{jobDetailsArray.mobile}}</a>\n\n          <br>\n          <br>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"jobDetailsArray.show_contact != 0\">\n        <ion-col size=\"12\">\n          <ion-label class=\"cardContents\">The employer has not shared their contact details</ion-label>\n          <br>\n          <ion-label class=\"cardHeadings\">Email:</ion-label>\n          <ion-label class=\"cardContents\">{{jobDetailsArray.email}}</ion-label>\n          <br>\n\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab *ngIf=\"!freeSearch\" aria-label=\"raise job query\" (click)=\"comment()\" color=\"dark\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"\n    style=\"margin-bottom: 50px;\">\n    <ion-fab-button>\n      <ion-icon name=\"send\" aria-label=\"raise job query\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n  <!-- <div *ngIf=\"!freeSearch\" (click)=\"comment()\">\n    <i class=\"fa fa-commenting\" aria-hidden=\"true\"></i>\n  </div> -->\n\n\n  <!-- <div class=\"bottomposition\" *ngIf = \"hideApplied\">\n      <button (click)=\"applyJob()\" class=\"buttonfont\">APPLY</button>\n    </div>\n  \n    <div class=\"bottomposition\" *ngIf = \"showApplied\">\n      <button  class=\"buttonfont\">APPLIED</button>\n    </div> -->\n\n\n</ion-content>\n\n<br>\n<br>\n<br>\n<ion-footer>\n  <div class=\"bottomposition\" *ngIf=\"jobStatus == 1 && freeSearch == false\">\n    <button class=\"buttonfont\">APPLIED</button>\n  </div>\n  <div class=\"bottomposition\" *ngIf=\"jobStatus != 1 && freeSearch == false\">\n    <button (click)=\"applyJob()\" class=\"buttonfont\">APPLY</button>\n  </div>\n  <div class=\"bottomposition\" *ngIf=\"freeSearch\">\n    <button (click)=\"freeSearchUser()\" class=\"buttonfont\">LOGIN TO APPLY</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/searchjobdetail/searchjobdetail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/searchjobdetail/searchjobdetail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backnavigation {\n  width: 25px;\n  height: 15px;\n  margin-top: 12.5px; }\n\n.searchcard {\n  background: white; }\n\n.contentcss {\n  font-size: 15px;\n  color: black;\n  padding: 5px; }\n\n.ionimgcss {\n  width: 15px;\n  height: 15px; }\n\n.cardContents {\n  font-size: 16px;\n  color: #2b0c43; }\n\n.cardHeadings {\n  font-size: 16px;\n  color: #2b0c43;\n  font-weight: bold; }\n\n.cardmargincss {\n  margin-bottom: 5px;\n  border-radius: 0px;\n  width: 100%;\n  -webkit-margin-start: 0px;\n  margin-top: 15px; }\n\n.headingLabel {\n  color: #2b0c43;\n  font-size: 12px;\n  font-weight: bold; }\n\n.contentInfo {\n  font-size: 15px;\n  color: #2b0c43;\n  display: inline-block; }\n\n.bottomposition {\n  position: fixed;\n  left: 0;\n  bottom: 0px;\n  right: 0; }\n\nion-fab ion-fab-button {\n  --background: #2b0c43 !important; }\n\n.headerTitle {\n  font-size: small;\n  color: #2b0c43; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC9zZWFyY2hqb2JkZXRhaWwvc2VhcmNoam9iZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixZQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLFlBQVc7RUFDVixZQUFZLEVBQUE7O0FBR2Y7RUFDRSxXQUFVO0VBQ1YsWUFBVyxFQUFBOztBQUdiO0VBQ0UsZUFBZTtFQUNmLGNBQWEsRUFBQTs7QUFJZjtFQUNFLGVBQWU7RUFDZixjQUFhO0VBQ2YsaUJBQWdCLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGdCQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYTtFQUNiLGVBQWM7RUFDZCxpQkFBZ0IsRUFBQTs7QUFHaEI7RUFDQSxlQUFjO0VBQ2QsY0FBYTtFQUNiLHFCQUFxQixFQUFBOztBQUdyQjtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsV0FBVztFQUNYLFFBQVEsRUFBQTs7QUFHWjtFQUVVLGdDQUFhLEVBQUE7O0FBS3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGpvYmRldGFpbC9zZWFyY2hqb2JkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tuYXZpZ2F0aW9ue1xuICAgIHdpZHRoOjI1cHg7IFxuICAgIGhlaWdodDoxNXB4OyBcbiAgICBtYXJnaW4tdG9wOiAxMi41cHg7XG4gIH1cbiAgLnNlYXJjaGNhcmR7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICAuY29udGVudGNzc3tcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgIHBhZGRpbmcgOjVweDtcbiAgfVxuXG4gIC5pb25pbWdjc3N7XG4gICAgd2lkdGg6MTVweDsgXG4gICAgaGVpZ2h0OjE1cHg7XG4gIH1cblxuICAuY2FyZENvbnRlbnRze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjojMmIwYzQzOyBcbiAgXG4gIH1cblxuICAuY2FyZEhlYWRpbmdze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjojMmIwYzQzOyBcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgfVxuXG4gIC5jYXJkbWFyZ2luY3Nze1xuICAgIG1hcmdpbi1ib3R0b206IDVweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gIH1cblxuICAuaGVhZGluZ0xhYmVse1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRlbnRJbmZve1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIGNvbG9yOiMyYjBjNDM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5ib3R0b21wb3NpdGlvbntcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgaW9uLWZhYntcbiAgICBpb24tZmFiLWJ1dHRvbntcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzJiMGM0MyAhaW1wb3J0YW50O1xuICAgICAgfVxuICB9XG5cbiAgXG4gIC5oZWFkZXJUaXRsZXtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiAjMmIwYzQzO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/searchjobdetail/searchjobdetail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/searchjobdetail/searchjobdetail.page.ts ***!
  \*********************************************************/
/*! exports provided: SearchjobdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchjobdetailPage", function() { return SearchjobdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");








var SearchjobdetailPage = /** @class */ (function () {
    function SearchjobdetailPage(router, location, activatedRoute, dataServices, loadingController, alertCtrl, platform, socialSharing) {
        // this.jobDetails();
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.jobDetailsArray = [];
        this.freeSearch = false;
        this.showWalkin = false;
        this.hideApplied = true;
        this.showApplied = false;
        // this.platform.backButton.subscribe(() => {
        //   // this does work
        //   // alert('Back btn pressed')
        //   this.location.back()
        // });
    }
    SearchjobdetailPage.prototype.ionViewWillEnter = function () {
        this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'));
        this.userId = localStorage.getItem('users_id');
        if (this.userId == '' || this.userId == null || this.userId == undefined || this.userId == 0) {
            this.freeSearch = true;
            this.userId = 0;
        }
        this.jobDetails(this.jobId, this.userId);
    };
    SearchjobdetailPage.prototype.jobDetails = function (jobID, userId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.getDetailInfoOfJob(jobID, userId).then(function (result) {
            _this.detailData = result;
            if (_this.detailData.status == 1) {
                _this.jobDetailsArray = _this.detailData.job_details_data[0];
                _this.jobDetailsLink = _this.detailData.job_details_data[0].job_details_link;
                _this.splitMobile = _this.detailData.job_details_data[0].mobile.split('').join(' ').replace(/0/g, 'zero');
                _this.jobSaveFlag = _this.detailData.job_details_data[0].job_saved_flag;
                _this.jobStatus = _this.detailData.job_details_data[0].job_applied_flag;
                _this.jobCommentFlag = _this.detailData.job_details_data[0].job_comment_flag;
                _this.verifyEmailStatus = _this.detailData.job_details_data[0].verify_email;
                _this.salary = _this.detailData.job_details_data[0].ctc_currency + ' ' + _this.detailData.job_details_data[0].annual_ctc_from + ' ' + 'to' + ' ' + _this.detailData.job_details_data[0].annual_ctc_to;
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.detailData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    SearchjobdetailPage.prototype.shareSocialMedia = function () {
        var shareURL = this.jobDetailsLink;
        console.log('shareURL: ' + shareURL);
        this.socialSharing.share('Refer this job', 'Refer this job', '', shareURL).then(function (success) {
            console.log('Success: ' + success);
        }, function (error) {
            console.log('Failed: ' + error);
        }).catch(function (err) {
            console.log('error: ' + err);
        });
    };
    SearchjobdetailPage.prototype.applyJob = function () {
        this.login_status = localStorage.getItem('login');
        if (this.login_status == 'yes') {
            this.applyJobAPI();
        }
        else {
            this.presentAlert('', "Please login to apply the job.");
            // this.router.navigate(['/welcomescreen'])
            return;
        }
    };
    //Save Job
    SearchjobdetailPage.prototype.saveJob = function (jobId) {
        if (this.userId == 0) {
            this.confirmAction('save');
        }
        else {
            this.saveOrRemoveJob(jobId);
        }
    };
    //Save Job and Remove Job
    SearchjobdetailPage.prototype.saveOrRemoveJob = function (jobId) {
        var _this = this;
        this.presentLoading();
        this.dataServices.saveOrRemoveJob(jobId, this.userId).then(function (res) {
            _this.saveJObResponse = res;
            _this.loadingController.dismiss();
            if (_this.saveJObResponse.status == 1) {
                if (_this.saveJObResponse.check_flag == 1) {
                    _this.jobSaveFlag = 1;
                }
                else {
                    _this.jobSaveFlag = 0;
                }
                _this.presentAlert("", _this.saveJObResponse.message);
            }
            else {
                _this.presentAlert("", _this.saveJObResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log(error);
        });
    }; // Save and Remove Job Functon Ends Here.
    SearchjobdetailPage.prototype.confirmAction = function (action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var subHeader, subHeader, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (action == 'applay') {
                            subHeader = 'If you want to apply for job you have to "Register" or "Login" first.';
                        }
                        else {
                            subHeader = 'If you want to save job you have to "Register" or "Login" first.';
                        }
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: '',
                                subHeader: subHeader,
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
                                            localStorage.clear();
                                            localStorage.setItem('users_id', '0');
                                            _this.router.navigate(['/welcomescreen']);
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
    SearchjobdetailPage.prototype.applyJobAPI = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.jobApplyAPI(this.userId, this.jobId).then(function (result) {
            if (result.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
                // this.hideApplied = false
                // this.showApplied = true;
                _this.jobStatus = 1;
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
                if (result.message == "You have already applied this job.") {
                    _this.hideApplied = false;
                    _this.showApplied = true;
                }
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    SearchjobdetailPage.prototype.freeSearchUser = function () {
        this.confirmAction('applay');
    };
    SearchjobdetailPage.prototype.ngOnInit = function () {
    };
    SearchjobdetailPage.prototype.goBack = function () {
        this.location.back();
        // this.router.navigate(['/searchjobs']);
    };
    SearchjobdetailPage.prototype.comment = function () {
        if (this.jobCommentFlag == 0 && this.verifyEmailStatus == '1') {
            this.personeName = this.detailData.job_details_data[0].person_name;
            this.emailId = this.detailData.job_details_data[0].email;
            this.jobTitle = this.detailData.job_details_data[0].name;
            this.router.navigate(['/servicereview', { jobId: this.jobId, personeName: this.personeName, emailId: this.emailId, jobTitle: this.jobTitle, navFromServiceDetails: false }]);
        }
        else if (this.jobCommentFlag == 0 && this.verifyEmailStatus == '0') {
            this.presentAlert('', 'Please verify your email address to comment on the job.');
        }
        else {
            this.presentAlert('', 'You have already commented for this job.');
            return;
        }
        // }
    }; //Display loader 
    //Display loader 
    SearchjobdetailPage.prototype.presentLoading = function () {
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
    SearchjobdetailPage.prototype.presentAlert = function (title, message) {
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
    SearchjobdetailPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    SearchjobdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchjobdetail',
            template: __webpack_require__(/*! ./searchjobdetail.page.html */ "./src/app/searchjobdetail/searchjobdetail.page.html"),
            styles: [__webpack_require__(/*! ./searchjobdetail.page.scss */ "./src/app/searchjobdetail/searchjobdetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_4__["DataservicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]])
    ], SearchjobdetailPage);
    return SearchjobdetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=searchjobdetail-searchjobdetail-module.js.map