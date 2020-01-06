import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { ActivatedRoute } from '@angular/router';
var EmployerqueryraisedPage = /** @class */ (function () {
    function EmployerqueryraisedPage(location, loadingController, dataServices, activatedRoute) {
        this.location = location;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.activatedRoute = activatedRoute;
        this.offset = 0;
        this.employerQueryListingArray = [];
    }
    EmployerqueryraisedPage.prototype.ngOnInit = function () {
    };
    EmployerqueryraisedPage.prototype.ionViewWillEnter = function () {
        this.employerQueryListingArray = [];
        this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getQueryRaisedData();
    };
    EmployerqueryraisedPage.prototype.closePage = function () {
        this.location.back();
    };
    EmployerqueryraisedPage.prototype.getQueryRaisedData = function () {
        var _this = this;
        if (this.offset == 0) {
            this.presentLoading();
        }
        this.dataServices.getQueryRaisedDataAPI(this.id, this.offset).then(function (result) {
            _this.queryListingResponse = result;
            if (_this.queryListingResponse.status == 1) {
                _this.employerQueryListingArray = _this.employerQueryListingArray.concat(_this.queryListingResponse.seeker_raised_query_list);
                _this.queryListingLength = _this.queryListingResponse.total_seeker_raised_query;
                console.log('search resume data:', _this.queryListingResponse);
                if (_this.offset == 0 && _this.queryListingLength > 20) {
                    _this.loadingController.dismiss();
                    // this.offset = 1
                }
                if (_this.queryListingLength < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
            }
            else {
                if (_this.offset == 0) {
                    _this.loadingController.dismiss();
                }
                alert(_this.queryListingResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function For Load Data While Scrolling
    EmployerqueryraisedPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            // event.target.disabled = false;
            // this.infiniteScroll.disabled = false;
            if (_this.offset > _this.queryListingLength) {
                // event.target.disabled = true;
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.getQueryRaisedData();
                event.target.complete();
            }
        }, 100);
    }; //loadData Function Eds Here.
    //Display loader 
    EmployerqueryraisedPage.prototype.presentLoading = function () {
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
                        setTimeout(function () {
                            loading.dismiss();
                        }, 6000);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!' + role + ' Data: ' + data);
                        return [2 /*return*/];
                }
            });
        });
    }; //Display Function Ends Here 
    EmployerqueryraisedPage = tslib_1.__decorate([
        Component({
            selector: 'app-employerqueryraised',
            templateUrl: './employerqueryraised.page.html',
            styleUrls: ['./employerqueryraised.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            LoadingController,
            DataservicesService,
            ActivatedRoute])
    ], EmployerqueryraisedPage);
    return EmployerqueryraisedPage;
}());
export { EmployerqueryraisedPage };
//# sourceMappingURL=employerqueryraised.page.js.map