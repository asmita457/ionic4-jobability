import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
var UpdateemployeeemployerinfoPage = /** @class */ (function () {
    function UpdateemployeeemployerinfoPage(router, alertCtrl, activatedRoute, loadingController, dataServices) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.industryTypeArray = [];
        this.industryIdArray = [];
        this.companyTypeArray = [];
        this.companyIdArray = [];
        this.dataArray = [];
        this.isIndustrySelected = false;
        this.isCompanySelected = false;
        this.showCompanyNameErrorMsg = false;
        this.showYearErrorMsg = false;
        this.showUrlErrorMsg = false;
        this.showCompanyProfileErrorMsg = false;
        this.yearArray = [];
        this.companyTypeArray = [];
        this.ddl_list = JSON.parse(localStorage.getItem("ddl_list"));
        this.companyTypeArray = this.ddl_list.ddl_list.company_type_list;
        this.industryTypeArray = this.ddl_list.ddl_list.industry_list;
        var currentYear = new Date().getFullYear();
        for (var i = currentYear; i >= 1965; i--) {
            this.yearArray.push(i);
        }
        var contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
        this.dataArray = JSON.parse(contactInfo);
        this.companyname = this.dataArray.empInfo.compnayName;
        this.yrestablishment = this.dataArray.empInfo.year_establishment;
        this.weburl = this.dataArray.empInfo.website_url;
        this.companyprofile = this.dataArray.empInfo.company_description;
        this.selectedIndustryType = this.dataArray.empInfo.industry;
        this.companytype_id = this.dataArray.empInfo.companytype_id;
        this.industry_id = this.dataArray.empInfo.industry_id;
        this.selectedCompanyTypeIndex = this.dataArray.empInfo.companyTypeIndex;
        this.users_id = localStorage.getItem('users_id');
        this.country_id = this.dataArray.country;
    }
    UpdateemployeeemployerinfoPage.prototype.ionViewWillEnter = function () {
    };
    UpdateemployeeemployerinfoPage.prototype.ngOnInit = function () {
    };
    UpdateemployeeemployerinfoPage.prototype.closePage = function () {
        this.router.navigate(['/employerprofile']);
    };
    UpdateemployeeemployerinfoPage.prototype.selectyearestablishment = function (item) {
        this.yrestablishment = item.detail.value;
        console.log('year::', this.yrestablishment);
    };
    UpdateemployeeemployerinfoPage.prototype.selectedIndustryTypeValue = function (item) {
        this.industry_id = item.detail.value.id;
        console.log('Selected Industry : ' + this.selectedIndustryType);
        for (var i = 0; i < this.industryTypeArray.length; i++) {
            if (this.industry_id == "" || this.industry_id == null) {
                this.isIndustrySelected = true;
            }
            else {
                this.isIndustrySelected = false;
            }
        }
    };
    UpdateemployeeemployerinfoPage.prototype.selectedCompanyTypeValue = function (item) {
        this.companytype_id = item.detail.value.id;
        if (this.companytype_id == "" || this.companytype_id == null || this.companytype_id == "0") {
            this.isCompanySelected = true;
        }
        else {
            this.isCompanySelected = false;
        }
    };
    UpdateemployeeemployerinfoPage.prototype.employeeCompanyNameValidator = function () {
        if (this.companyname == "" || this.companyname == undefined || this.companyname == null) {
            this.showCompanyNameErrorMsg = true;
            this.companyNameErrorMsg = "Please enter company name";
        }
        else {
            this.showCompanyNameErrorMsg = false;
        }
    };
    UpdateemployeeemployerinfoPage.prototype.employeeCompanyProfileValidator = function () {
        if (this.companyprofile == "" || this.companyprofile == undefined || this.companyprofile == null) {
            this.showCompanyProfileErrorMsg = true;
            this.companyProfileErrorMsg = "Please enter company description";
        }
        else {
            this.showCompanyProfileErrorMsg = false;
        }
    };
    UpdateemployeeemployerinfoPage.prototype.employeeCompanyYearValidator = function (item) {
        this.yrestablishment = item.detail.value;
        console.log('year::', this.yrestablishment);
        if (this.yrestablishment == "" || this.yrestablishment == undefined || this.yrestablishment == null) {
            this.showYearErrorMsg = true;
            // this.yearErrorMsg = "Please enter year";
        }
        else {
            this.showYearErrorMsg = false;
        }
    };
    UpdateemployeeemployerinfoPage.prototype.employeeCompanyUrlValidator = function () {
        if (this.weburl == '' || this.weburl == undefined || this.weburl == null) {
            this.showUrlErrorMsg = true;
            this.urlErrorMsg = "Please enter website URL";
        }
        else {
            this.showUrlErrorMsg = false;
        }
        if (this.showUrlErrorMsg != true) {
            if (/^((https?|ftp|smtp):\/\/)?[a-zA-Z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(this.weburl) == false) {
                this.showUrlErrorMsg = true;
                this.urlErrorMsg = 'Please enter valid website URL';
            }
            else {
                this.showUrlErrorMsg = false;
            }
        }
    };
    UpdateemployeeemployerinfoPage.prototype.updateEmployerDetail = function () {
        var _this = this;
        if ((this.companyname == "" || this.companyname == null || this.companyname == undefined) &&
            (this.yrestablishment == "" || this.yrestablishment == null || this.yrestablishment == undefined || this.yrestablishment == 0) &&
            (this.weburl == "" || this.weburl == null || this.weburl == undefined) &&
            (this.industry_id == "0" || this.industry_id == null || this.industry_id == undefined) &&
            (this.companytype_id == "0" || this.companytype_id == null || this.companytype_id == undefined) &&
            (this.companyprofile == "" || this.companyprofile == null || this.companyprofile == undefined)) {
            this.showCompanyNameErrorMsg = true;
            this.companyNameErrorMsg = "Please enter name";
            this.isCompanySelected = true;
            this.showYearErrorMsg = true;
            this.isIndustrySelected = true;
            this.showUrlErrorMsg = true;
            this.urlErrorMsg = "Please enter website URL";
            this.showCompanyProfileErrorMsg = true;
            this.companyProfileErrorMsg = "Please enter company description";
        }
        else {
            this.showCompanyNameErrorMsg = false;
            this.isCompanySelected = false;
            this.isIndustrySelected = false;
            this.showUrlErrorMsg = false;
            this.showYearErrorMsg = false;
            this.showCompanyProfileErrorMsg = false;
        }
        if (this.industry_id == "" || this.industry_id == null || this.industry_id == "0") {
            this.isIndustrySelected = true;
        }
        else {
            this.isIndustrySelected = false;
        }
        if (this.companytype_id == "" || this.companytype_id == "" || this.companytype_id == "0") {
            this.isCompanySelected = true;
        }
        else {
            this.isCompanySelected = false;
        }
        if (this.companyname == "" || this.companyname == undefined || this.companyname == null) {
            this.showCompanyNameErrorMsg = true;
            this.companyNameErrorMsg = "Please enter company name";
        }
        else {
            this.showCompanyNameErrorMsg = false;
        }
        if (this.yrestablishment == "" || this.yrestablishment == undefined || this.yrestablishment == null || this.yrestablishment == 0) {
            this.showYearErrorMsg = true;
            // this.yearErrorMsg = "Please enter year";
        }
        else {
            this.showYearErrorMsg = false;
        }
        // if (this.weburl == "" || this.weburl == undefined || this.weburl == null) {
        //   this.showUrlErrorMsg = true;
        //   this.urlErrorMsg = "Please enter website url";
        // } else {
        //   this.showUrlErrorMsg = false;
        // }
        this.employeeCompanyUrlValidator();
        if (this.companyprofile == "" || this.companyprofile == undefined || this.companyprofile == null) {
            this.showCompanyProfileErrorMsg = true;
            this.companyProfileErrorMsg = "Please enter company description";
        }
        else {
            this.showCompanyProfileErrorMsg = false;
        }
        if (this.showCompanyProfileErrorMsg == false &&
            this.isIndustrySelected == false &&
            this.isCompanySelected == false &&
            this.showCompanyNameErrorMsg == false &&
            this.showYearErrorMsg == false &&
            this.showUrlErrorMsg == false) {
            this.presentLoading();
            this.dataServices.updateEmployeeEmployerInfoAPI(this.companyname, this.companytype_id, this.yrestablishment, this.industry_id, this.weburl, this.companyprofile, this.users_id).then(function (res) {
                _this.existingDataResponse = res;
                console.log('responsre::: ' + _this.existingDataResponse);
                if (_this.existingDataResponse.status == 1) {
                    console.log('Update Employer Information :: ' + _this.existingDataResponse);
                    _this.presentAlert(_this.existingDataResponse.message, '');
                    // this.closePage()
                }
                else {
                    _this.presentAlert(_this.existingDataResponse.message, '');
                }
            }, function (error) {
                alert(error);
            });
        }
    };
    UpdateemployeeemployerinfoPage.prototype.presentAlert = function (title, message) {
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
    UpdateemployeeemployerinfoPage.prototype.presentLoading = function () {
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
                        setTimeout(function () {
                            loading.dismiss();
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    UpdateemployeeemployerinfoPage = tslib_1.__decorate([
        Component({
            selector: 'app-updateemployeeemployerinfo',
            templateUrl: './updateemployeeemployerinfo.page.html',
            styleUrls: ['./updateemployeeemployerinfo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AlertController,
            ActivatedRoute,
            LoadingController,
            DataservicesService])
    ], UpdateemployeeemployerinfoPage);
    return UpdateemployeeemployerinfoPage;
}());
export { UpdateemployeeemployerinfoPage };
//# sourceMappingURL=updateemployeeemployerinfo.page.js.map