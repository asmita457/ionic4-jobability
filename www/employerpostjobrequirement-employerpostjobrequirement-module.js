(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employerpostjobrequirement-employerpostjobrequirement-module"],{

/***/ "./src/app/employerpostjobrequirement/employerpostjobrequirement.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/employerpostjobrequirement/employerpostjobrequirement.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployerpostjobrequirementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerpostjobrequirementPageModule", function() { return EmployerpostjobrequirementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employerpostjobrequirement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employerpostjobrequirement.page */ "./src/app/employerpostjobrequirement/employerpostjobrequirement.page.ts");







var routes = [
    {
        path: '',
        component: _employerpostjobrequirement_page__WEBPACK_IMPORTED_MODULE_6__["EmployerpostjobrequirementPage"]
    }
];
var EmployerpostjobrequirementPageModule = /** @class */ (function () {
    function EmployerpostjobrequirementPageModule() {
    }
    EmployerpostjobrequirementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employerpostjobrequirement_page__WEBPACK_IMPORTED_MODULE_6__["EmployerpostjobrequirementPage"]]
        })
    ], EmployerpostjobrequirementPageModule);
    return EmployerpostjobrequirementPageModule;
}());



/***/ }),

/***/ "./src/app/employerpostjobrequirement/employerpostjobrequirement.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/employerpostjobrequirement/employerpostjobrequirement.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <!-- <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\" color: #2b0c43\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color: #2b0c43\">Post Job</ion-title>\n  </ion-item> -->\n\n<ion-row>\n    <ion-col size=\"2\" (click)=\"goBack()\">\n        <ion-img src=\"../../assets/img/backnavigation.png\" style=\"padding: 20% 25% 25% 25%;\">\n        </ion-img>\n      </ion-col>\n  <ion-col size=\"10\">\n    <ion-title class=\"titlecss\" style=\"margin-top:4px\">Post Job</ion-title>\n  </ion-col>\n</ion-row>\n</ion-toolbar>\n\n<ion-content>\n    <div class=\"inputDiv\">\n\n  <h5 align=\"center\" style=\"color:#2b0c43\">Job Requirements</h5>\n  <ion-item class=\"inoItem headerNameCss\" lines=\"none\"  style=\"margin-top:5%\">\n      <ion-grid fixed>\n              <ion-row>\n                      <ion-col size=\"12\">\n                        <ion-label class=\"headerNameCss\" [ngClass]=\"{'redlabel' : isIndustrySelected == true, 'blacklabel' : isIndustrySelected == false}\">\n                        Industry Type:\n                      </ion-label>\n                      </ion-col>\n              </ion-row>\n      </ion-grid>\n  </ion-item>\n  \n    <ion-select class=\"headerNameCss\" [(ngModel)]=\"industryId\"  style=\" border-bottom: 1px solid lightgray\" placeholder=\"Select Industry Type\" (ionChange)=\"selectedIndustryTypeValue($event)\">\n      <ion-select-option *ngFor=\"let item of industryArray;\" [value]=\"item.id\">\n        {{item.name}}</ion-select-option>\n    </ion-select>\n\n\n    <ion-item class=\"inoItem headerNameCss\" lines=\"none\">\n        <ion-grid fixed>\n                <ion-row>\n                        <ion-col size=\"12\">\n                          <ion-label class=\"headerNameCss\" [ngClass]=\"{'redlabel' : isFunctionalAreaSelected == true, 'blacklabel' : isFunctionalAreaSelected == false}\">\n                              Functional Area:\n                        </ion-label>\n                        </ion-col>\n                </ion-row>\n        </ion-grid>\n    </ion-item>\n    \n      <ion-select class=\"headerNameCss\" [(ngModel)]=\"functionalAreaId\"  style=\" border-bottom: 1px solid lightgray\" placeholder=\"Functional Area\" (ionChange)=\"onFunctionalAreaSelect($event)\">\n        <ion-select-option *ngFor=\"let item of functionalArea;\" [value]=\"item.id\">\n          {{item.name}}</ion-select-option>\n      </ion-select>\n  \n    <ion-item class=\"headerNameCss inoItem\">\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"10\">\n              <ion-label position=\"floating\" [ngClass]=\"{'redlabel' : showJobRoleErrorMsg == true, 'blacklabel' : showJobRoleErrorMsg == false}\">\n                  Job Role\n              </ion-label>\n              <ion-input type=\"text\" name=\"jobrole\" [(ngModel)]=\"jobrole\" (ionChange)=\"employeeJobRoleValidator()\" required></ion-input>\n            </ion-col>\n            <ion-col size=\"2\" *ngIf=\"showJobRoleErrorMsg\">\n              <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n              </ion-img>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"10\">\n          <p class=\"errorMsg \" *ngIf=\"showJobRoleErrorMsg\">{{jobRoleErrorMsg}}</p>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-item class=\"inoItem headerNameCss\" lines=\"none\">\n          <ion-grid fixed>\n                  <ion-row>\n                          <ion-col size=\"12\">\n                            <ion-label class=\"headerNameCss\" [ngClass]=\"{'redlabel' : isQualificationSelected == true, 'blacklabel' : isQualificationSelected == false}\">\n                                Qualification:\n                          </ion-label>\n                          </ion-col>\n                  </ion-row>\n          </ion-grid>\n      </ion-item>\n      \n        <ion-select class=\"headerNameCss\" [(ngModel)]=\"qualificationId\"  multiple=\"true\" style=\" border-bottom: 1px solid lightgray\" placeholder=\"Select Qualification\" (ionChange)=\"selectedQualificationTypeValue($event)\">\n          <ion-select-option *ngFor=\"let item of qualificationArray;\" [value]=\"item.id\">\n            {{item.name}}</ion-select-option>\n        </ion-select>\n\n  \n\n        <ion-item class=\"headerNameCss inoItem\">\n            <ion-grid fixed>\n              <ion-row>\n                <ion-col size=\"10\">\n                  <ion-label position=\"floating\" [ngClass]=\"{'redlabel' : showSkillsErrorMsg == true, 'blacklabel' : showSkillsErrorMsg == false}\">\n                      Skills (Enter your skills separated by comma)\n                  </ion-label>\n                  <ion-input type=\"text\" name=\"skills\" [(ngModel)]=\"skills\" (ionChange)=\"employeeSkillsValidator()\" required\n                    ></ion-input>\n                </ion-col>\n                <ion-col size=\"2\" *ngIf=\"showSkillsErrorMsg\">\n                  <ion-img class=\"errorimg\" src=\"assets/img/error.png\">\n                  </ion-img>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <ion-row>\n            <ion-col size=\"10\">\n              <p class=\"errorMsg \" *ngIf=\"showSkillsErrorMsg\">{{skillsErrorMsg}}</p>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-item class=\"headerNameCss inoItem\">\n            <ion-grid fixed>\n            <ion-row>\n                <ion-col size=\"12\">\n                  <ion-label position=\"floating\" >\n                    Reference Code (Optional)\n                  </ion-label>\n                  <ion-input type=\"text\" name=\"referancecode\" [(ngModel)]=\"referancecode\"\n                   ></ion-input>\n                </ion-col>\n                <ion-col size=\"2\">\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n              </ion-item>\n\n    \n\n    <ion-item class=\"inoItem headerNameCss\">\n      <ion-grid fixed>\n      <ion-row>      \n            <ion-col size=\"10\">\n            <ion-label position=\"floating\" >\n              Candidate Profile (Optional)\n            </ion-label>\n            <ion-input type=\"text\" name=\"candidateprofile\" [(ngModel)]=\"candidateprofile\" ></ion-input>\n          </ion-col>\n          <ion-col size=\"2\">\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    </div>\n  <div class=\"saveButtonPadding\">\n    <button class=\"buttonfont\" (click)=\"nextPage()\">CONTINUE</button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/employerpostjobrequirement/employerpostjobrequirement.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/employerpostjobrequirement/employerpostjobrequirement.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVycG9zdGpvYnJlcXVpcmVtZW50L2VtcGxveWVycG9zdGpvYnJlcXVpcmVtZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/employerpostjobrequirement/employerpostjobrequirement.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/employerpostjobrequirement/employerpostjobrequirement.page.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployerpostjobrequirementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerpostjobrequirementPage", function() { return EmployerpostjobrequirementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EmployerpostjobrequirementPage = /** @class */ (function () {
    function EmployerpostjobrequirementPage(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.postJobDetailArray = [];
        this.functionalArea = [];
        this.industryArray = [];
        this.qualificationArray = [];
        this.qualificationName = [];
        this.functional_area_id = "";
        this.isIndustrySelected = false;
        this.showJobRoleErrorMsg = false;
        this.showSkillsErrorMsg = false;
        // showReferanceCodeErrorMsg= false
        // referanceCodeErrorMsg: any
        this.isQualificationSelected = false;
        this.isFunctionalAreaSelected = false;
        // showCandidateProfileErrorMsg = false
        // candidateProfileErrorMsg: any
        this.postJobRequirementArray = [];
        this.backwardJobRequirementFlag = "";
        this.backPostJobRequirement = [];
    }
    EmployerpostjobrequirementPage.prototype.ngOnInit = function () {
    };
    EmployerpostjobrequirementPage.prototype.ionViewWillEnter = function () {
        this.DDlListArray = JSON.parse(localStorage.getItem('employerDDLResponse'));
        this.functionalArea = this.DDlListArray.functional_area_list;
        this.industryArray = this.DDlListArray.industry_list;
        this.qualificationArray = this.DDlListArray.qualification_list;
        this.backPostJobRequirement = [];
        this.backwardJobRequirementFlag = localStorage.getItem('backwardJobRequirementFlag');
        if (this.backwardJobRequirementFlag == "1") {
            this.backPostJobRequirement = JSON.parse(localStorage.getItem('backPostJobRequirement'));
            console.log('post Job Requirement LocalStorage :', this.backPostJobRequirement);
            this.industryId = this.backPostJobRequirement[0].industryType;
            this.functionalAreaId = this.backPostJobRequirement[0].functionalArea;
            this.qualificationId = this.backPostJobRequirement[0].qualification;
            this.skills = this.backPostJobRequirement[0].skills;
            this.jobrole = this.backPostJobRequirement[0].jobRole;
            this.referancecode = this.backPostJobRequirement[0].reference_code;
            this.candidateprofile = this.backPostJobRequirement[0].candidate_profile;
            // this.skills = this.backPostJobRequirement[0].skills
        }
        // this.postJobRequirementArray = JSON.parse(localStorage.getItem('postJobRequirementArray'))
        // console.log("postJobRequirementArray:",this.postJobRequirementArray)
        //DDL List response
        var contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
        this.postJobDetailArray = JSON.parse(contactInfo);
        console.log("postJobDetailArray :: " + JSON.stringify(this.postJobDetailArray));
    };
    // nIndustrySelect(item) {
    //   this.industryId = JSON.stringify(item.detail.value.id);
    //   console.log('Industry Type :: ' + JSON.stringify(item.detail.value.id))
    // }
    EmployerpostjobrequirementPage.prototype.onFunctionalAreaSelect = function (item) {
        this.functionalAreaId = [];
        this.functionalAreaId = item.detail.value;
        console.log("Functional Area Id:: ", this.functionalAreaId);
        for (var i = 0; i < this.functionalArea.length; i++) {
            if (this.functionalAreaId == "" || this.functionalAreaId == null || this.functionalAreaId == "0" || this.functionalAreaId == undefined) {
                this.isFunctionalAreaSelected = true;
            }
            else {
                this.isFunctionalAreaSelected = false;
            }
        }
        this.functional_area_id = JSON.stringify(item.detail.value.id);
        console.log('Fuctional Area :: ' + JSON.stringify(item.detail.value.id));
    };
    EmployerpostjobrequirementPage.prototype.selectedIndustryTypeValue = function (item) {
        this.industryId = item.detail.value;
        console.log("industry id:: ", this.industryId);
        for (var i = 0; i < this.industryArray.length; i++) {
            if (this.industryId == "" || this.industryId == null || this.industryId == "0" || this.industryId == undefined) {
                this.isIndustrySelected = true;
            }
            else {
                this.isIndustrySelected = false;
            }
        }
    };
    EmployerpostjobrequirementPage.prototype.goBack = function () {
        localStorage.setItem('backwardJobLocationFlag', '1');
        // this.location.back();
        this.router.navigate(['/employerpostjoblocation']);
    };
    EmployerpostjobrequirementPage.prototype.employeeJobRoleValidator = function () {
        if (this.jobrole == "" || this.jobrole == null || this.jobrole == undefined) {
            this.showJobRoleErrorMsg = true;
            this.jobRoleErrorMsg = "Please enter job role";
        }
        else {
            this.showJobRoleErrorMsg = false;
        }
    };
    // employeeReferanceCodeValidator(){
    //   if (this.referancecode == "" || this.referancecode == null || this.referancecode == undefined) {
    //     this.showReferanceCodeErrorMsg = true
    //     this.referanceCodeErrorMsg = "Please enter referance code"
    //   } else {
    //     this.showReferanceCodeErrorMsg = false
    //   }
    // }
    // employeeCandidateProfileValidator(){
    //   if (this.candidateprofile == "" || this.candidateprofile == null || this.candidateprofile == undefined) {
    //     this.showCandidateProfileErrorMsg = true
    //     this.candidateProfileErrorMsg = "Please enter candidate profile"
    //   } else {
    //     this.showCandidateProfileErrorMsg = false
    //   }
    // }
    EmployerpostjobrequirementPage.prototype.employeeSkillsValidator = function () {
        if (this.skills == "" || this.skills == null || this.skills == undefined) {
            this.showSkillsErrorMsg = true;
            this.skillsErrorMsg = "Please enter skills";
        }
        else {
            this.showSkillsErrorMsg = false;
        }
    };
    EmployerpostjobrequirementPage.prototype.selectedQualificationTypeValue = function (item) {
        var arrayLength = item.detail.value.length;
        this.qualificationId = [];
        this.qualificationId = item.detail.value;
        //   for (let i = 0; i < arrayLength; i++) {
        // this.qualificationId = []
        // this.qualificationId = item.detail.value;
        //   }
        // this.qualificationId.push(item.detail.value[i].id);
        // this.qualificationName.push(item.detail.value[i].name)
        if (this.qualificationId == "" || this.qualificationId == null || this.qualificationId == "0" || this.qualificationId == undefined) {
            this.isQualificationSelected = true;
        }
        else {
            this.isQualificationSelected = false;
        }
        console.log('Qualification Type :: ' + this.qualificationId);
    };
    EmployerpostjobrequirementPage.prototype.closePage = function () {
        this.router.navigate(['/dashboardemployer']);
    };
    EmployerpostjobrequirementPage.prototype.nextPage = function () {
        if ((this.industryId == "" || this.industryId == null || this.industryId == "0" || this.industryId == undefined) &&
            (this.qualificationId == "" || this.qualificationId == null || this.qualificationId == "0" || this.qualificationId == undefined) &&
            (this.functionalAreaId == "" || this.functionalAreaId == null || this.functionalAreaId == "0" || this.functionalAreaId == undefined) &&
            (this.jobrole == "" || this.jobrole == null || this.jobrole == undefined) &&
            (this.referancecode == "" || this.referancecode == null || this.referancecode == undefined) &&
            (this.skills == "" || this.skills == null || this.skills == undefined) &&
            (this.candidateprofile == "" || this.candidateprofile == null || this.candidateprofile == undefined)) {
            this.isIndustrySelected = true;
            this.isFunctionalAreaSelected = true;
            this.isQualificationSelected = true;
            // this.showCandidateProfileErrorMsg = true
            this.showJobRoleErrorMsg = true;
            // this.showReferanceCodeErrorMsg = true
            this.showSkillsErrorMsg = true;
            // this.candidateProfileErrorMsg = "Please enter candidate profile"
            this.jobRoleErrorMsg = "Please enter job role";
            // this.referanceCodeErrorMsg = "Please enter referance code"
            this.skillsErrorMsg = "Please enter skills";
        }
        else {
            this.isIndustrySelected = false;
            this.isFunctionalAreaSelected = false;
            this.isQualificationSelected = false;
            // this.showCandidateProfileErrorMsg = false
            this.showJobRoleErrorMsg = false;
            // this.showReferanceCodeErrorMsg = false
            this.showSkillsErrorMsg = false;
        }
        this.employeeJobRoleValidator();
        // this.employeeReferanceCodeValidator();
        this.employeeSkillsValidator();
        // this.employeeCandidateProfileValidator();
        if (this.functionalAreaId == "" || this.functionalAreaId == null || this.functionalAreaId == "0" || this.functionalAreaId == undefined) {
            this.isFunctionalAreaSelected = true;
        }
        else {
            this.isFunctionalAreaSelected = false;
        }
        if (this.qualificationId == "" || this.qualificationId == null || this.qualificationId == "0" || this.qualificationId == undefined) {
            this.isQualificationSelected = true;
        }
        else {
            this.isQualificationSelected = false;
        }
        if (this.industryId == "" || this.industryId == null || this.industryId == "0" || this.industryId == undefined) {
            this.isIndustrySelected = true;
        }
        else {
            this.isIndustrySelected = false;
        }
        if (this.isIndustrySelected == false &&
            this.isFunctionalAreaSelected == false &&
            this.isQualificationSelected == false &&
            // this.showCandidateProfileErrorMsg == false &&
            this.showJobRoleErrorMsg == false &&
            // this.showReferanceCodeErrorMsg == false &&
            this.showSkillsErrorMsg == false) {
            this.postJobRequirementArray.push({
                industryType: this.industryId,
                functionalArea: this.functionalAreaId,
                jobRole: this.jobrole,
                qualification: this.qualificationId,
                skills: this.skills,
                reference_code: this.referancecode,
                candidate_profile: this.candidateprofile
            });
            localStorage.setItem('backPostJobRequirement', JSON.stringify(this.postJobRequirementArray));
            // this.postJobRequirementArray = this.postJobRequirementArray.concat(this.postJobDetailArray)
            // console.log("post job Requirement array:",this.postJobRequirementArray)
            // localStorage.setItem("JobPostLocalStorageData",JSON.stringify(this.postJobRequirementArray))
            this.router.navigate(['/employerpostjobmanagerresponses']);
        }
        // this.router.navigate(['/employerpostjobmanagerresponses', { item : JSON.stringify(this.postJobRequirementArray)}])
    };
    EmployerpostjobrequirementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employerpostjobrequirement',
            template: __webpack_require__(/*! ./employerpostjobrequirement.page.html */ "./src/app/employerpostjobrequirement/employerpostjobrequirement.page.html"),
            styles: [__webpack_require__(/*! ./employerpostjobrequirement.page.scss */ "./src/app/employerpostjobrequirement/employerpostjobrequirement.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EmployerpostjobrequirementPage);
    return EmployerpostjobrequirementPage;
}());



/***/ })

}]);
//# sourceMappingURL=employerpostjobrequirement-employerpostjobrequirement-module.js.map