import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController, AlertController } from '@ionic/angular';
var EmployerpostjoblocationPage = /** @class */ (function () {
    function EmployerpostjoblocationPage(router, activatedRoute, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.isStateCitySelected = false;
        this.isCountrySelected = false;
        this.countryID = "0";
        this.stateCityId = [];
        this.enableStateCityField = true;
        this.selectCountry = false;
        this.selectState = false;
        this.selectCity = false;
        this.disabilityList = [];
        this.countryArrayFromLocalStorage = [];
        // postJobDetailArray = []
        this.postJobLocationArray = [];
        this.countryId = [];
        this.countryName = [];
        this.stateCity_id = [];
        this.stateCity_name = [];
        this.backwardJobLocationFlag = "";
        this.backPostJobLocation = [];
        // onStateCityStatusSelect = false
        this.onCountryStatusSelect = false;
    }
    EmployerpostjoblocationPage.prototype.ngOnInit = function () {
    };
    EmployerpostjoblocationPage.prototype.checkForEnableState = function () {
        if (this.countryID != "0") {
            this.isStateCitySelected = false;
            this.enableStateCityField = false;
        }
        else {
            this.enableStateCityField = true;
        }
    };
    EmployerpostjoblocationPage.prototype.getStateCityDDLAPI = function (countryID) {
        var _this = this;
        this.uacc_id = localStorage.getItem('users_id');
        this.dataServices.getStateAndCityDDLAPI(this.uacc_id, countryID).then(function (result) {
            console.log(result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.cityAndStateArrayFromLocalStorage = [];
                console.log('combine response :: ', _this.resultData.state_city_list);
                localStorage.setItem("stateAndCityArray", JSON.stringify(_this.resultData.state_city_list));
                // this.countryID = CountryID;
                _this.cityAndStateArrayFromLocalStorage = _this.resultData.state_city_list;
                if (_this.backwardJobLocationFlag == "1") {
                    _this.stateCityId = _this.backPostJobLocation[0].stateCityId;
                }
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    EmployerpostjoblocationPage.prototype.goBack = function () {
        localStorage.setItem('backwardJobDetailFlag', '1');
        // this.router.navigate(['/employerpostjobdetails', {currencyPreselection : "INR" }]);
        this.router.navigate(['/employerpostjobdetails']);
    };
    EmployerpostjoblocationPage.prototype.selectedStateCityValue = function (item) {
        var arrayLength = item.detail.value.length;
        this.isStateCitySelected = false;
        if (arrayLength > 3) {
            this.stateCityId = [];
            this.isStateCitySelected = true;
            item.detail.value.length = 0;
            item.detail.value = [];
            this.presentAlert('', 'You should not select Preferred State/City more than 3');
            return;
        }
        else {
            console.log('Selected State_City:', item.detail.value);
            for (var i = 0; i < arrayLength; i++) {
                this.stateCityId = [];
                this.stateCityId = item.detail.value;
                // this.stateCityId.push(item.detail.value);
                // this.stateCity_name.push(item.detail.value[i].name)
                // this.onStateCityStatusSelect = false
                this.isStateCitySelected = false;
                console.log("state city id :: ", this.stateCityId);
                return;
            }
        }
    };
    EmployerpostjoblocationPage.prototype.selectedCountryValue = function (item) {
        this.countryID = item.detail.value;
        this.stateCityId = [];
        console.log("Country id :: ", this.countryID);
        this.getStateCityDDLAPI(this.countryID);
        if (this.countryID != undefined) {
            // this.stateCityId = 0
            this.isCountrySelected == false;
            this.presentLoading();
            this.checkForEnableState();
        }
        else {
            this.isCountrySelected == true;
        }
        if (this.countryID == "0") {
            this.isCountrySelected = true;
            // this.selectState = true
        }
        else {
            this.selectCountry = false;
            this.isCountrySelected = false;
            // this.isStateCitySelected = false
            // this.selectState = false
        }
    };
    EmployerpostjoblocationPage.prototype.presentLoading = function () {
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
    EmployerpostjoblocationPage.prototype.ionViewWillEnter = function () {
        // this.enableStateCityField = true
        this.postJobLocationArray = [];
        // this.postJobDetailArray = []
        this.backwardJobLocationFlag = localStorage.getItem('backwardJobLocationFlag');
        if (this.backwardJobLocationFlag == "1") {
            this.presentLoading();
            this.stateCityId = [];
            this.backPostJobLocation = JSON.parse(localStorage.getItem('backPostJobLocation'));
            console.log('post Job Location LocalStorage :', this.backPostJobLocation);
            this.countryID = this.backPostJobLocation[0].countryId;
            this.stateCityId = this.backPostJobLocation[0].stateCityId;
            this.enableStateCityField = false;
        }
        this.DdlResponseArray = JSON.parse(localStorage.getItem('employerDDLResponse'));
        this.disabilityList = this.DdlResponseArray.disability_list;
        this.countryArrayResponse = JSON.parse(localStorage.getItem('countryArray'));
        this.countryArrayFromLocalStorage = this.countryArrayResponse.country_list;
        console.log('countryArray :: ', this.countryArrayFromLocalStorage);
        // const contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
        // this.postJobDetailArray = JSON.parse(contactInfo);
        // console.log("postJobDetailArray :: " + JSON.stringify(this.postJobDetailArray))
        this.getStateCityDDLAPI(this.countryID);
    };
    EmployerpostjoblocationPage.prototype.closePage = function () {
        this.router.navigate(['/dashboardemployer']);
    };
    EmployerpostjoblocationPage.prototype.nextPage = function () {
        if (this.countryID == "0" || this.countryID == undefined || this.countryID == null || this.countryID == "") {
            this.isCountrySelected = true;
            // this.selectState = true
        }
        else {
            this.selectCountry = false;
            this.isCountrySelected = false;
            // this.isStateCitySelected = false
            // this.selectState = false
        }
        var stateCityLength = this.stateCityId.length;
        if (stateCityLength == 0) {
            this.isStateCitySelected = true;
        }
        else {
            this.isStateCitySelected = false;
        }
        // if (this.stateCityId == null || this.stateCityId == undefined  || this.stateCityId == []) {
        //   this.isStateCitySelected = true
        // }
        // else {
        //   this.isStateCitySelected = false
        // }
        if (this.isCountrySelected == false &&
            this.isStateCitySelected == false) {
            this.postJobLocationArray.push({
                countryId: this.countryID,
                stateCityId: this.stateCityId,
            });
            localStorage.setItem('backPostJobLocation', JSON.stringify(this.postJobLocationArray));
            // this.postJobLocationArray = this.postJobLocationArray.concat(this.postJobDetailArray)
            this.router.navigate(['/employerpostjobrequirement', { item: JSON.stringify(this.postJobLocationArray) }]);
        }
    };
    EmployerpostjoblocationPage.prototype.presentAlert = function (title, message) {
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
    EmployerpostjoblocationPage = tslib_1.__decorate([
        Component({
            selector: 'app-employerpostjoblocation',
            templateUrl: './employerpostjoblocation.page.html',
            styleUrls: ['./employerpostjoblocation.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            LoadingController,
            DataservicesService,
            AlertController])
    ], EmployerpostjoblocationPage);
    return EmployerpostjoblocationPage;
}());
export { EmployerpostjoblocationPage };
//# sourceMappingURL=employerpostjoblocation.page.js.map