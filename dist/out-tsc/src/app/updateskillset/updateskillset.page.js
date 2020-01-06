import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
var UpdateskillsetPage = /** @class */ (function () {
    function UpdateskillsetPage(router, activatedRoute, dataServices, alertCtrl, loadingController, formBuilder, navCtrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.yearExperianceArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
        this.monthExperianceArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
        this.showErrorIcon = false;
        this.readIndustry = 'Please select industry';
        this.readFunctionalArea = 'Please select functional area';
        this.readYear = 'Please select year';
        this.readMonth = 'Please select month';
        // Forms declaration
        this.updateSkillsetDetailsForm = this.formBuilder.group({
            industry: ['', Validators.required],
            functionalArea: ['', Validators.required],
            year: [''],
            month: [''],
            KeySkills: ['', Validators.required],
        });
        this.onPageLoad();
    }
    UpdateskillsetPage.prototype.ngOnInit = function () {
        // this.getDropDownListArray();
    };
    UpdateskillsetPage.prototype.onPageLoad = function () {
        var contactInfo = (this.activatedRoute.snapshot.paramMap.get('seekerSkillSetInfo'));
        this.dataArray = JSON.parse(contactInfo);
        this.functionalAreaName = this.dataArray.functionalAreaName;
        this.industryName = this.dataArray.industryName;
        this.readIndustry = this.industryName;
        this.readFunctionalArea = this.dataArray.functionalAreaName;
        this.readYear = this.dataArray.totalYearExperience;
        this.readMonth = this.dataArray.totalMonthExperience;
        this.seekerInfo = localStorage.getItem("stateAndCityArray");
        this.functionAreaList = JSON.parse(this.seekerInfo).ddl_list.functional_area_list;
        this.industryTypeArray = JSON.parse(this.seekerInfo).ddl_list.industry_list;
    };
    UpdateskillsetPage.prototype.closePage = function () {
        // this.router.navigate(['/profile'])
        this.navCtrl.navigateRoot('/profile');
    };
    //On change Functions
    UpdateskillsetPage.prototype.selectedIndustry = function (industryId) {
        for (var i = 0; i <= this.industryTypeArray.length; i++) {
            if (this.industryTypeArray[i].id == industryId) {
                this.industryName = this.industryTypeArray[i].name;
                this.readIndustry = this.industryName;
                return;
            }
        }
    };
    UpdateskillsetPage.prototype.selectedFunctionalArea = function (functionalAreaId) {
        for (var i = 0; i <= this.functionAreaList.length; i++) {
            if (this.functionAreaList[i].id == functionalAreaId) {
                this.functionalAreaName = this.functionAreaList[i].name;
                this.readFunctionalArea = this.functionalAreaName;
                return;
            }
        }
    };
    UpdateskillsetPage.prototype.selectedYear = function (year) {
        this.readYear = year;
    };
    UpdateskillsetPage.prototype.selectedMonth = function (month) {
        this.readMonth = month;
    };
    // onChange Functions Ends Here.
    UpdateskillsetPage.prototype.updateSkillsetDetail = function (form) {
        var _this = this;
        if (this.updateSkillsetDetailsForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.dataServices.updatePresentSkillSetAPI(form, this.industryName, this.functionalAreaName).then(function (res) {
                _this.loadingController.dismiss();
                if (res.status == 1) {
                    _this.presentAlert(res.message, '');
                }
                else {
                    _this.presentAlert(res.message, '');
                }
            }, function (error) {
                _this.loadingController.dismiss();
                console.log(error);
            });
        }
    };
    UpdateskillsetPage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: [{
                                    text: 'OK',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.closePage();
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
    //Display loader 
    UpdateskillsetPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
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
    UpdateskillsetPage.prototype.ionViewWillLeave = function () {
        this.loadingController.dismiss();
    };
    UpdateskillsetPage = tslib_1.__decorate([
        Component({
            selector: 'app-updateskillset',
            templateUrl: './updateskillset.page.html',
            styleUrls: ['./updateskillset.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            DataservicesService,
            AlertController,
            LoadingController,
            FormBuilder,
            NavController])
    ], UpdateskillsetPage);
    return UpdateskillsetPage;
}());
export { UpdateskillsetPage };
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
export { MyErrorStateMatcher };
//# sourceMappingURL=updateskillset.page.js.map