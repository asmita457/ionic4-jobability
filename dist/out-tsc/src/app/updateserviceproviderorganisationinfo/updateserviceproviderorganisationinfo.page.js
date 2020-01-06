import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, MenuController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
var UpdateserviceproviderorganisationinfoPage = /** @class */ (function () {
    function UpdateserviceproviderorganisationinfoPage(router, activatedRoute, alertCtrl, dataServices, menuCtrl, loadingController, formBuilder) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertCtrl = alertCtrl;
        this.dataServices = dataServices;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.disabilityArray = [];
        this.organizationTypeList = [];
        this.serviceOfferedList = [];
        this.organisationTypeList = [];
        this.show = false;
        this.yearArray = [];
        this.serviceProviderArray = [{ name: 'Organization', id: '1' }, { name: 'Service Professional', id: '2' },];
        this.onPageLoad();
    }
    UpdateserviceproviderorganisationinfoPage.prototype.ngOnInit = function () {
        this.buildForm();
        this.setOrganizationValdators();
    };
    UpdateserviceproviderorganisationinfoPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    UpdateserviceproviderorganisationinfoPage.prototype.buildForm = function () {
        this.updateOrgInfoForm = this.formBuilder.group({
            serviceProviderType: ['', Validators.required],
            serviceProviderCategory: ['', Validators.required],
            organisatioName: ['', Validators.required],
            disability: ['', Validators.required],
            serviceOffered: ['', Validators.required],
            yearOfEstablishment: ['', Validators.required],
            websiteURL: ['', Validators.required]
        });
    };
    UpdateserviceproviderorganisationinfoPage.prototype.onPageLoad = function () {
        var dropData = localStorage.getItem('stateAndCityArray');
        var dropDownLists = JSON.parse(dropData).ddl_list;
        this.disabilityArray = dropDownLists.disability_list;
        this.organizationTypeList = dropDownLists.organization_type_list;
        this.serviceOfferedList = dropDownLists.service_offered_list;
        this.organisationTypeList = dropDownLists.organization_type_list;
        this.preSelectionData = JSON.parse((this.activatedRoute.snapshot.paramMap.get('serviceProviderOrgInfo')));
        this.show = this.preSelectionData.organizationtype == '1' ? true : false;
        // if (this.organizationtype == "1") {
        //     this.show = true;
        // } else if (this.organizationtype == "2") {
        //     this.show = false;
        // }
        var currentYear = new Date().getFullYear();
        for (var i = currentYear; i >= 1965; i--) {
            this.yearArray.push(i.toString());
        }
    };
    UpdateserviceproviderorganisationinfoPage.prototype.setOrganizationValdators = function () {
        var serviceProviderCategory = this.updateOrgInfoForm.get('serviceProviderCategory');
        var organisatioName = this.updateOrgInfoForm.get('organisatioName');
        this.updateOrgInfoForm.get('serviceProviderType').valueChanges
            .subscribe(function (serviceProviderType) {
            if (serviceProviderType == '1') {
                serviceProviderCategory.setValidators([Validators.required]);
                organisatioName.setValidators([Validators.required]);
            }
            else {
                serviceProviderCategory.setValidators(null);
                organisatioName.setValidators(null);
            }
            serviceProviderCategory.updateValueAndValidity();
            organisatioName.updateValueAndValidity();
        });
    };
    UpdateserviceproviderorganisationinfoPage.prototype.selectedServiceProviderValue = function (serviceType) {
        this.show = serviceType == '1' ? true : false;
    };
    UpdateserviceproviderorganisationinfoPage.prototype.closePage = function () {
        this.router.navigate(['/serviceproviderprofile']);
    };
    UpdateserviceproviderorganisationinfoPage.prototype.updateOrgInfoDetails = function (orgInfoForm) {
        var _this = this;
        if (this.updateOrgInfoForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            var postData = {
                "organizationtype": orgInfoForm.serviceProviderType,
                "organization_type_id": orgInfoForm.serviceProviderType == '2' ? '' : orgInfoForm.serviceProviderCategory,
                "year_establishment": orgInfoForm.yearOfEstablishment,
                "website_url": orgInfoForm.websiteURL,
                "organisation_name": orgInfoForm.serviceProviderType == '2' ? '' : orgInfoForm.organisatioName,
                "disability_id": orgInfoForm.disability,
                "servicetype_id": orgInfoForm.serviceOffered,
                "uacc_id": localStorage.getItem('users_id')
            };
            this.dataServices.updateServiceproviderOrganisationInfoAPI(postData).then(function (res) {
                if (res.status == 1) {
                    _this.loadingController.dismiss();
                    _this.presentAlert('', res.message);
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert('', res.message);
                }
            }, function (error) {
                alert(error);
            });
        }
    };
    UpdateserviceproviderorganisationinfoPage.prototype.presentAlert = function (title, message) {
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
    UpdateserviceproviderorganisationinfoPage.prototype.presentLoading = function () {
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
    UpdateserviceproviderorganisationinfoPage = tslib_1.__decorate([
        Component({
            selector: 'app-updateserviceproviderorganisationinfo',
            templateUrl: './updateserviceproviderorganisationinfo.page.html',
            styleUrls: ['./updateserviceproviderorganisationinfo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            AlertController,
            DataservicesService,
            MenuController,
            LoadingController,
            FormBuilder])
    ], UpdateserviceproviderorganisationinfoPage);
    return UpdateserviceproviderorganisationinfoPage;
}());
export { UpdateserviceproviderorganisationinfoPage };
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
//# sourceMappingURL=updateserviceproviderorganisationinfo.page.js.map