import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder } from '@angular/forms';
var EditservicesPage = /** @class */ (function () {
    function EditservicesPage(router, location, activatedRoute, dataServices, loadingController, alertCtrl, formBuilder) {
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.editServiceDetails = [];
        this.categoryArray = [];
    }
    EditservicesPage.prototype.ngOnInit = function () {
        this.buildForm();
        this.editServiceDetails = JSON.parse((this.activatedRoute.snapshot.paramMap.get('item')));
        this.categoryArray = this.editServiceDetails.Service_Category_list;
        this.disabilityArray = this.editServiceDetails.Disability_Served_list;
    };
    EditservicesPage.prototype.ionViewWillEnter = function () {
    };
    // Forms declaration
    EditservicesPage.prototype.buildForm = function () {
        this.editServiceForm = this.formBuilder.group({
            serviceTitle: ['', Validators.required],
            serviceCategory: ['', Validators.required],
            disability: ['', Validators.required],
            brief: ['', Validators.required],
            description: ['', Validators.required],
        });
    };
    EditservicesPage.prototype.closePage = function () {
        this.location.back();
    };
    EditservicesPage.prototype.updateServiceDetail = function (form) {
        var _this = this;
        if (this.editServiceForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        else {
            this.presentLoading();
            this.showErrorIcon = false;
            var postData = {
                "service_name": form.serviceTitle,
                "servicetype_id": form.serviceCategory,
                "disability_id": form.disability,
                "brife": form.brief,
                "service_description": form.description,
                "id": this.editServiceDetails.Service_id,
            };
            this.dataServices.updateServicesDetail(postData).then(function (res) {
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
    EditservicesPage.prototype.presentLoading = function () {
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
    };
    EditservicesPage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            // buttons: ['OK']
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        _this.closePage();
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
    EditservicesPage = tslib_1.__decorate([
        Component({
            selector: 'app-editservices',
            templateUrl: './editservices.page.html',
            styleUrls: ['./editservices.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location,
            ActivatedRoute,
            DataservicesService,
            LoadingController,
            AlertController,
            FormBuilder])
    ], EditservicesPage);
    return EditservicesPage;
}());
export { EditservicesPage };
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
//# sourceMappingURL=editservices.page.js.map