import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router } from '@angular/router';
var SearchservicesPage = /** @class */ (function () {
    function SearchservicesPage(loadingController, alertCtrl, dataServices, router) {
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.dataServices = dataServices;
        this.router = router;
        this.offset = 0;
        this.serviceListArray = [];
        this.disabilityListArray = [];
        this.serviceAvailable = true;
        this.readDisability = '';
    }
    SearchservicesPage.prototype.ngOnInit = function () {
    };
    SearchservicesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.searchTitle != '' || this.searchTitle != undefined) {
            this.keywords = this.searchTitle;
        }
        // this.disability_id = ''
        this.offset = 0;
        this.serviceListArray = [];
        this.disability_id = localStorage.getItem('disabilityID');
        if (this.disability_id == 'null') {
            this.disability_id = '';
        }
        this.getServiceListForJobSeeker(this.keywords, this.disability_id, this.offset);
        this.getDisabilityList();
        this.getNotificationBadgeCount();
        if (this.disability_id != "") {
            this.readDisability = this.disabilityListArray[this.disabilityListArray.findIndex(function (id) { return id.id === _this.disability_id; })].name;
        }
    };
    SearchservicesPage.prototype.getNotificationBadgeCount = function () {
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
    SearchservicesPage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    // Function For get service list
    SearchservicesPage.prototype.getServiceListForJobSeeker = function (keywords, disability_id, offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getServiceListForJobSeeker(keywords, disability_id, offset).then(function (result) {
            _this.serviceApiResponse = result;
            if (_this.serviceApiResponse.status == 1) {
                _this.serviceListArray = _this.serviceListArray.concat(_this.serviceApiResponse.services_list);
                _this.servicesTotalCount = _this.serviceApiResponse.services_total_count;
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (_this.servicesTotalCount < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.servicesTotalCount == 0) {
                    _this.serviceAvailable = false;
                }
                else {
                    _this.serviceAvailable = true;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert("", _this.serviceApiResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function for to get disability type
    SearchservicesPage.prototype.getDisabilityList = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getDisabilityList().then(function (result) {
            _this.disabilityApiResponse = result;
            if (_this.disabilityApiResponse.status == 1) {
                _this.disabilityListArray = [];
                _this.disabilityListArray = [{ id: "allDisabilities", name: "All Disabilities" }];
                _this.disabilityListArray = _this.disabilityListArray.concat(_this.disabilityApiResponse.disability_list);
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.disabilityApiResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // getDisabilityList Function Ends Here
    // Function For Load Data While Scrolling
    SearchservicesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.servicesTotalCount) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getServiceListForJobSeeker(_this.keywords, _this.disability_id, _this.offset);
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    // On Select of Disability type
    SearchservicesPage.prototype.onSelectDisability = function (disabilityId) {
        this.readDisability = this.disabilityListArray[this.disabilityListArray.findIndex(function (id) { return id.id === disabilityId; })].name;
        this.offset = 0;
        this.disability_id = disabilityId;
        // this.disability_id = item
        if (this.disability_id == "allDisabilities") {
            this.disability_id = '';
        }
        localStorage.setItem("disabilityID", this.disability_id);
        this.serviceListArray = [];
        this.getServiceListForJobSeeker(this.keywords, this.disability_id, this.offset);
    };
    SearchservicesPage.prototype.search = function (keywords) {
        this.offset = 0;
        this.serviceListArray = [];
        this.getServiceListForJobSeeker(keywords, this.disability_id, this.offset);
    };
    SearchservicesPage.prototype.serviceDetails = function (item) {
        this.router.navigate(['/servicedetails', { serviceId: item }]);
    };
    //Display loader 
    SearchservicesPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        // setTimeout(() => {
                        loading.dismiss();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    SearchservicesPage.prototype.presentAlert = function (title, message) {
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
    SearchservicesPage = tslib_1.__decorate([
        Component({
            selector: 'app-searchservices',
            templateUrl: './searchservices.page.html',
            styleUrls: ['./searchservices.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController,
            AlertController,
            DataservicesService,
            Router])
    ], SearchservicesPage);
    return SearchservicesPage;
}());
export { SearchservicesPage };
//# sourceMappingURL=searchservices.page.js.map