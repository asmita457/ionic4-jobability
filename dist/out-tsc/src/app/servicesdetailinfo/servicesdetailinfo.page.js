import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
export var COLORS;
(function (COLORS) {
    COLORS["GREY"] = "#E0E0E0";
    COLORS["BLUE"] = "#2b0c43";
})(COLORS || (COLORS = {}));
var ServicesdetailinfoPage = /** @class */ (function () {
    function ServicesdetailinfoPage(router, location, activatedRoute, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.category = [];
        this.disability = [];
        this.editServiceDetails = [];
        this.editServiceLocation = [];
        this.editServiceContactInfo = [];
        this.selectedTab = 'details';
        this.spReviewCommentsList = [];
        this.spRatingList = [];
        this.offset = 0;
        // this.getServiceProviderIndividualDetail()
        this.serviceid = (this.activatedRoute.snapshot.paramMap.get('item'));
        localStorage.setItem('serviceid', this.serviceid);
    }
    ServicesdetailinfoPage.prototype.ionViewWillEnter = function () {
        this.getServiceProviderIndividualDetail();
        this.offset = 0;
    };
    ServicesdetailinfoPage.prototype.ngOnInit = function () {
    };
    ServicesdetailinfoPage.prototype.segmentChanged = function (event) {
        if (event.detail.value == 'details') {
            this.selectedTab = 'details';
        }
        else if (event.detail.value == 'review') {
            this.selectedTab = 'review';
            this.offset = 0;
            this.spReviewCommentsList = [];
            this.moreDataAvailable = true;
            this.reviewCommentsList(this.serviceid, this.offset);
        }
        else if (event.detail.value == 'rating') {
            this.selectedTab = 'rating';
            this.offset = 0;
            this.spRatingList = [];
            this.moreDataAvailable = true;
            this.ratingList(this.serviceid, this.offset);
        }
    };
    ServicesdetailinfoPage.prototype.getServiceProviderIndividualDetail = function () {
        var _this = this;
        this.presentLoading();
        this.serviceid = localStorage.getItem('serviceid');
        this.dataServices.getSPIndividualDetails(this.serviceid).then(function (result) {
            _this.resultData = result.my_services_details[0];
            if (_this.resultData.status == 1) {
                _this.title = _this.resultData.name;
                _this.category = _this.resultData.service_type_list;
                _this.disability = _this.resultData.disability_list;
                _this.brief = _this.resultData.brife;
                _this.description = _this.resultData.description;
                _this.country = _this.resultData.country_name;
                _this.preferredStateCity = _this.resultData.state_city_list;
                if (_this.resultData.upload_file == '' || _this.resultData.upload_file == null || _this.resultData.upload_file == undefined) {
                    _this.Filename = 'File not available';
                }
                else {
                    _this.Filename = _this.resultData.upload_file;
                }
                _this.Status = _this.resultData.status_name;
                var preselectionCategory = [];
                var preselectionDisability = [];
                var Service_Category_list = [];
                var Disability_Served_list = [];
                var state_city_list = [];
                for (var i = 0; i < _this.resultData.service_type_master_list.length; i++) {
                    Service_Category_list.push(_this.resultData.service_type_master_list[i].name);
                }
                for (var i = 0; i < _this.resultData.disability_master_list.length; i++) {
                    Disability_Served_list.push(_this.resultData.disability_master_list[i].name);
                }
                for (var i = 0; i < _this.resultData.service_type_list.length; i++) {
                    preselectionCategory.push(_this.resultData.service_type_list[i].id);
                }
                for (var i = 0; i < _this.resultData.disability_list.length; i++) {
                    preselectionDisability.push(_this.resultData.disability_list[i].id);
                }
                _this.editServiceDetails = [];
                _this.editServiceDetails.push({
                    Service_id: _this.resultData.id,
                    Service_Title: _this.resultData.name,
                    Service_Category: preselectionCategory,
                    Disability_Served: preselectionDisability,
                    Brief: _this.resultData.brife,
                    Description: _this.resultData.description,
                    Service_Category_list: _this.resultData.service_type_master_list,
                    Disability_Served_list: _this.resultData.disability_master_list
                });
                _this.editServiceLocation = [];
                _this.editServiceLocation.push({
                    Service_id: _this.resultData.id,
                    Country: _this.resultData.country,
                    Preferred_StateCity: _this.resultData.state_city_list
                });
                _this.editServiceContactInfo = [];
                _this.editServiceContactInfo.push({
                    Service_id: _this.resultData.id,
                    upload_filename: _this.Filename,
                    upload_filelink: _this.resultData.upload_file_path,
                    show_contact: _this.resultData.show_contact,
                    Status: _this.resultData.status,
                    Status_name: _this.resultData.status_name
                });
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.temAlert("", _this.resultData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    ServicesdetailinfoPage.prototype.goBack = function () {
        // this.location.back();
        localStorage.removeItem('serviceid');
        this.router.navigate(['/dashboardserviceprovider']);
    };
    //Display loader 
    ServicesdetailinfoPage.prototype.presentLoading = function () {
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
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    ServicesdetailinfoPage.prototype.editService = function () {
        this.router.navigate(['/editservices', { item: JSON.stringify(this.editServiceDetails[0]) }]);
    };
    ServicesdetailinfoPage.prototype.editServiceLocationNavigate = function () {
        this.router.navigate(['/updateserviceproviderservicelocation', { item: JSON.stringify(this.editServiceLocation[0]) }]);
    };
    ServicesdetailinfoPage.prototype.editServiceContactInfoNavigate = function () {
        this.router.navigate(['/updateserviceproviderpostservicecontactinfo', { item: JSON.stringify(this.editServiceContactInfo[0]) }]);
    };
    ServicesdetailinfoPage.prototype.DeleteServices = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteService(this.serviceid).then(function (result) {
            console.log(result);
            _this.deleteResultData = result;
            if (_this.deleteResultData.status == 1) {
                console.log('Delete Response:', _this.deleteResultData);
                _this.loadingController.dismiss();
                _this.presentAlert(_this.deleteResultData.message, '');
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert(_this.deleteResultData.message, '');
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    ServicesdetailinfoPage.prototype.reviewCommentsList = function (id, offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.postSPReviewCommentsList(id, offset).then(function (result) {
            if (result.status == 1) {
                var totalCommentsCount = result.total_seeker_service_comment;
                _this.spReviewCommentsList = _this.spReviewCommentsList.concat(result.seeker_service_comment_list);
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (totalCommentsCount < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
            }
        }).catch(function (error) {
            _this.loadingController.dismiss();
            console.log('Error: ' + error);
        });
    };
    ServicesdetailinfoPage.prototype.ratingList = function (id, offset) {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.postSPRatingList(id, offset).then(function (result) {
            if (result.status == 1) {
                var totalRatingCount = result.total_seeker_service_rating;
                _this.ratingCount = result.average_rating;
                _this.spRatingList = _this.spRatingList.concat(result.seeker_service_rating_list);
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                if (totalRatingCount > _this.spRatingList.length) {
                    //call again
                    _this.moreDataAvailable = true;
                }
                else {
                    //stop call
                    _this.moreDataAvailable = false;
                }
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', result.message);
            }
        }).catch(function (error) {
            _this.loadingController.dismiss();
            console.log('Error: ' + error);
        });
    };
    ServicesdetailinfoPage.prototype.getColor = function (index) {
        if (this.isAboveRating(index)) {
            return COLORS.GREY;
        }
        switch (index) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                return COLORS.BLUE;
        }
    };
    ServicesdetailinfoPage.prototype.isAboveRating = function (index) {
        return index > this.ratingCount;
    };
    // Function For Load Data While Scrolling
    ServicesdetailinfoPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.selectedTab == 'review') {
                _this.reviewCommentsList(_this.serviceid, _this.offset);
            }
            else if (_this.selectedTab == 'rating') {
                _this.ratingList(_this.serviceid, _this.offset);
            }
            event.target.complete();
        }, 500);
    }; //loadData Function Eds Here.
    ServicesdetailinfoPage.prototype.presentAlert = function (title, message) {
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
                                        _this.goBack();
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
    ServicesdetailinfoPage.prototype.temAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
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
    ServicesdetailinfoPage.prototype.loadMore = function () {
        this.offset += 10;
        this.reviewCommentsList(this.serviceid, this.offset);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ServicesdetailinfoPage.prototype, "ratingCount", void 0);
    ServicesdetailinfoPage = tslib_1.__decorate([
        Component({
            selector: 'app-servicesdetailinfo',
            templateUrl: './servicesdetailinfo.page.html',
            styleUrls: ['./servicesdetailinfo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location,
            ActivatedRoute,
            LoadingController,
            DataservicesService,
            AlertController])
    ], ServicesdetailinfoPage);
    return ServicesdetailinfoPage;
}());
export { ServicesdetailinfoPage };
//# sourceMappingURL=servicesdetailinfo.page.js.map