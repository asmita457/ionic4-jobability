import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Location } from '@angular/common';
var ServicedetailsPage = /** @class */ (function () {
    // showServiceDetails: boolean = true
    // showContact: boolean = false
    // showRating: boolean = false
    // ratingButton: boolean = false
    function ServicedetailsPage(location, router, activatedRoute, dataServices, loadingController, alertCtrl, modalCtrl) {
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
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
                _this.rating = _this.serviceDetailsResponse.services_details[0].service_star_rate;
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
    ServicedetailsPage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
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
    ServicedetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-servicedetails',
            templateUrl: './servicedetails.page.html',
            styleUrls: ['./servicedetails.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            Router,
            ActivatedRoute,
            DataservicesService,
            LoadingController,
            AlertController,
            ModalController])
    ], ServicedetailsPage);
    return ServicedetailsPage;
}());
export { ServicedetailsPage };
//# sourceMappingURL=servicedetails.page.js.map