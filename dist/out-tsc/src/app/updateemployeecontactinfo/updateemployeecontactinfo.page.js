import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';
var UpdateemployeecontactinfoPage = /** @class */ (function () {
    function UpdateemployeecontactinfoPage(router, dataServices, alertCtrl, loadingController, activatedRoute) {
        this.router = router;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.showNameErrorMsg = false;
        this.showDesignationErrorMsg = false;
        this.showMobileErrorMsg = false;
        this.showAddressErrorMsg = false;
        this.showEmailErrorMsg = false;
        this.showZipcodeErrorMsg = false;
        this.showAltEmailErrorMsg = false;
        this.cityNameArray = [];
        this.isCountrySelected = false;
        this.isStateSelected = false;
        this.isCitySelected = false;
        this.showPhoneErrorMsg = false;
        this.selectCountry = false;
        this.selectState = false;
        this.selectCity = false;
        this.enableStateField = true;
        this.enableCityField = true;
        //Temp var
        this.tempState_id = "";
        this.tempCity_id = "";
        this.users_id = localStorage.getItem('users_id');
        this.countryArray = localStorage.getItem("countryArray");
        var contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
        this.dataArray = JSON.parse(contactInfo);
        this.first_name = this.dataArray.first_name;
        this.designation = this.dataArray.designation;
        this.email = this.dataArray.email;
        this.phone = this.dataArray.phone;
        this.mobile = this.dataArray.mobile;
        this.address = this.dataArray.address;
        this.zip_code = this.dataArray.zip_code;
        this.country = this.dataArray.country;
        this.city = this.dataArray.city;
        this.state_id = this.dataArray.state;
        this.business_email = this.dataArray.business_email;
        //temp var value
        this.tempState_id = this.dataArray.state;
        this.tempCity_id = this.dataArray.city;
        if (this.country != "0") {
            this.checkForEnableState();
            this.stateAndCityArray = localStorage.getItem("ddl_list");
        }
        if (this.state_id != "0") {
            this.checkForEnableCity();
        }
        if ((this.countryArray != '' || this.countryArray != null || this.countryArray != undefined) &&
            (this.stateAndCityArray != '' || this.stateAndCityArray != null || this.stateAndCityArray != undefined)) {
            this.setDefaultCity(this.countryArray, this.stateAndCityArray);
        }
    }
    UpdateemployeecontactinfoPage.prototype.getDDLAPI = function (country) {
        var _this = this;
        this.dataServices.getDDLAPI(country).then(function (result) {
            console.log(result);
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                _this.cityAndStateArrayFromLocalStorage = [];
                localStorage.setItem("stateAndCityArray", JSON.stringify(_this.resultData));
                _this.country = country;
                _this.isCountrySelected = false;
                _this.cityAndStateArrayFromLocalStorage = _this.resultData.ddl_list.state_list;
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    // Function for showing selected value city.
    UpdateemployeecontactinfoPage.prototype.setDefaultCity = function (countryArray, stateAndCityArray) {
        this.countryArrayFromLocalStorage = JSON.parse(countryArray).country_list;
        if (this.state_id != 0) {
            this.cityAndStateArrayFromLocalStorage = JSON.parse(stateAndCityArray).ddl_list.state_list;
            for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
                if (this.cityAndStateArrayFromLocalStorage[i].id == this.state_id) {
                    this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
                }
            }
        }
    }; //setDefaultCity Ends Here;
    UpdateemployeecontactinfoPage.prototype.ngOnInit = function () {
    };
    UpdateemployeecontactinfoPage.prototype.closePage = function () {
        this.router.navigate(['/employerprofile']);
    };
    UpdateemployeecontactinfoPage.prototype.selectedCountryValue = function (item) {
        this.state_id = 0;
        this.city = 0;
        this.country = item.detail.value.id;
        this.getDDLAPI(item.detail.value.id);
        if (this.country != undefined) {
            this.state_id = 0;
            this.city = 0;
            this.isCountrySelected == false;
            this.checkForEnableState();
        }
        else {
            this.isCountrySelected == true;
        }
        if (this.country == "0") {
            this.isCountrySelected = true;
            this.selectState = true;
        }
        else {
            this.selectCountry = false;
            this.isCountrySelected = false;
            this.isStateSelected = false;
            this.selectState = false;
        }
    };
    UpdateemployeecontactinfoPage.prototype.selectedStatesValue = function (item) {
        this.city = null;
        this.state_id = null;
        this.state_id = item.detail.value.id;
        if (this.tempState_id == this.state_id) {
            this.city = this.tempCity_id;
        }
        if (this.state_id == "0") {
            this.isStateSelected = true;
            this.selectState = true;
            this.selectCity = true;
            this.isCitySelected = true;
        }
        else {
            this.isStateSelected = false;
            this.selectState = false;
            this.selectCity = false;
            this.isCitySelected = false;
            this.checkForEnableCity();
        }
        for (var i = 0; i < this.cityAndStateArrayFromLocalStorage.length; i++) {
            if (this.cityAndStateArrayFromLocalStorage[i].id == this.state_id) {
                this.cityNameArray = this.cityAndStateArrayFromLocalStorage[i].city;
            }
        }
    };
    UpdateemployeecontactinfoPage.prototype.selectedCityValue = function (item) {
        this.city = item.detail.value.id;
        this.tempCity_id = this.city;
        if (this.city == "0") {
            this.isCitySelected = true;
            this.selectCity = true;
        }
        else {
            this.isCitySelected = false;
            this.selectCity = false;
        }
    };
    UpdateemployeecontactinfoPage.prototype.presentAlert = function (title, message) {
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
    UpdateemployeecontactinfoPage.prototype.employeeNameValidator = function () {
        if (this.first_name == '' || this.first_name == undefined || this.first_name == null) {
            this.showNameErrorMsg = true;
            this.nameErrorMsg = "Please enter name";
        }
        else {
            this.showNameErrorMsg = false;
        }
    };
    UpdateemployeecontactinfoPage.prototype.checkForEnableState = function () {
        if (this.country != "0") {
            this.enableStateField = false;
        }
        else {
            this.enableStateField = true;
        }
    };
    UpdateemployeecontactinfoPage.prototype.checkForEnableCity = function () {
        if (this.state_id != "0") {
            this.enableCityField = false;
        }
        else {
            this.enableCityField = true;
        }
    };
    UpdateemployeecontactinfoPage.prototype.employeeAltEmailValidator = function () {
        if (this.business_email == '' || this.business_email == undefined || this.business_email == null) {
            this.showAltEmailErrorMsg = false;
        }
        else {
            if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(this.business_email) == false) {
                this.showAltEmailErrorMsg = true;
                this.altEmailErrorMsg = 'Please enter valid email address';
            }
            else {
                this.showAltEmailErrorMsg = false;
            }
        }
    };
    UpdateemployeecontactinfoPage.prototype.employeeEmailValidator = function () {
        if (this.email == '' || this.email == undefined || this.email == null) {
            this.showEmailErrorMsg = true;
            this.emailErrorMsg = "Please enter email address";
        }
        else {
            this.showEmailErrorMsg = false;
        }
        if (this.showEmailErrorMsg != true) {
            if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(this.email) == false) {
                this.showEmailErrorMsg = true;
                this.emailErrorMsg = 'Please enter valid email address';
            }
            else {
                this.showEmailErrorMsg = false;
            }
        }
    };
    UpdateemployeecontactinfoPage.prototype.employeeDesignationValidator = function () {
        if (this.designation == '' || this.designation == undefined || this.designation == null) {
            this.showDesignationErrorMsg = true;
            this.designationErrorMsg = "Please enter designation";
        }
        else {
            this.showDesignationErrorMsg = false;
        }
    };
    UpdateemployeecontactinfoPage.prototype.employeeAddressValidator = function () {
        if (this.address == '' || this.address == undefined || this.address == null) {
            this.showAddressErrorMsg = true;
            this.addressErrorMsg = "Please enter address";
        }
        else {
            this.showAddressErrorMsg = false;
        }
    };
    UpdateemployeecontactinfoPage.prototype.employeeMobileValidator = function () {
        if (this.mobile == '' || this.mobile == undefined || this.mobile == null) {
            this.showMobileErrorMsg = true;
            this.mobileErrorMsg = "Please enter mobile no.";
        }
        else {
            this.showMobileErrorMsg = false;
        }
    };
    // employeePhoneValidator() {
    // if (this.phone == '' || this.phone == undefined || this.phone == null) {
    // this.showPhoneErrorMsg = true;
    // this.phoneErrorMsg = 'Please enter valid Phone number'
    // }
    // else
    // {
    // this.showPhoneErrorMsg = false;
    // }
    // }
    UpdateemployeecontactinfoPage.prototype.updateEmployerContactDetail = function () {
        var _this = this;
        if (this.city != null) {
            this.tempState_id = this.state_id;
        }
        if ((this.first_name == '' || this.first_name == null || this.first_name == undefined) &&
            (this.designation == '' || this.designation == null || this.designation == undefined) &&
            (this.address == '' || this.address == null || this.address == undefined) &&
            (this.city == null || this.city == undefined || this.city == "") &&
            (this.state_id == null || this.state_id == undefined || this.state_id == "") &&
            (this.country == null || this.country == undefined || this.country == "") &&
            (this.zip_code == '' || this.zip_code == null || this.zip_code == undefined) &&
            (this.email == '' || this.email == null || this.email == undefined) &&
            (this.mobile == '' || this.mobile == null || this.mobile == undefined)) {
            this.showNameErrorMsg = true;
            this.nameErrorMsg = "Please enter name";
            this.showDesignationErrorMsg = true;
            this.designationErrorMsg = "Please enter designation";
            this.showEmailErrorMsg = true;
            this.emailErrorMsg = "Please enter name";
            this.showMobileErrorMsg = true;
            this.mobileErrorMsg = "Please enter mobile number";
            this.showAddressErrorMsg = true;
            this.addressErrorMsg = "Please enter address";
            this.isCountrySelected = true;
            this.isStateSelected = true;
            this.isCitySelected = true;
            this.showZipcodeErrorMsg = true;
            this.zipcodeErrorMsg = "Please enter zip code";
        }
        else {
            this.showEmailErrorMsg = false;
            this.showNameErrorMsg = false;
            this.showDesignationErrorMsg = false;
            this.showMobileErrorMsg = false;
            this.showAddressErrorMsg = false;
            this.showZipcodeErrorMsg = false;
            this.isCountrySelected = false;
            this.isStateSelected = false;
            this.isCitySelected = false;
        }
        this.employeeMobileValidator();
        this.employeeDesignationValidator();
        this.employeeNameValidator();
        this.employeeAddressValidator();
        this.employeeEmailValidator();
        this.employeeZipcodeValidator();
        if (this.country == "0") {
            this.isCountrySelected = true;
            this.selectCountry = true;
        }
        else {
            this.isCountrySelected = false;
            this.selectCountry = false;
        }
        if (this.state_id == "0") {
            this.isStateSelected = true;
            this.selectState = true;
        }
        else {
            this.isStateSelected = false;
            this.selectState = false;
        }
        if (this.city == "0" || this.city == null) {
            this.isCitySelected = true;
            this.selectCity = true;
        }
        else {
            this.isCitySelected = false;
            this.selectCity = false;
        }
        if (this.showNameErrorMsg == false &&
            this.showDesignationErrorMsg == false &&
            this.showEmailErrorMsg == false &&
            this.showMobileErrorMsg == false &&
            this.showAddressErrorMsg == false &&
            this.isCountrySelected == false &&
            this.isStateSelected == false &&
            this.showZipcodeErrorMsg == false &&
            this.isCitySelected == false) {
            this.presentLoading();
            //employer contact info API.
            this.dataServices.updateEmployeeContactInfoAPI(this.first_name, this.designation, this.business_email, this.phone, this.mobile, this.address, this.city, this.state_id, this.country, this.zip_code, this.email, this.users_id).then(function (res) {
                _this.existingDataResponse = res;
                console.log('responsre::: ' + _this.existingDataResponse);
                if (_this.existingDataResponse.status == 1) {
                    console.log('Update Employer Information :: ' + _this.existingDataResponse);
                    _this.presentAlert(_this.existingDataResponse.message, '');
                    localStorage.setItem('email', _this.email);
                    localStorage.setItem('busciness_email', _this.business_email);
                    // this.closePage()
                    _this.loadingController.dismiss();
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentAlert(_this.existingDataResponse.message, '');
                }
            }, function (error) {
                alert(error);
            });
        }
    };
    //Display loader 
    UpdateemployeecontactinfoPage.prototype.presentLoading = function () {
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
    UpdateemployeecontactinfoPage.prototype.employeeZipcodeValidator = function () {
        if (this.zip_code == '' || this.zip_code == undefined || this.zip_code == null) {
            this.showZipcodeErrorMsg = true;
            this.zipcodeErrorMsg = "Please enter zip code";
        }
        else {
            this.showZipcodeErrorMsg = false;
        }
        if (this.zip_code != undefined) {
            if (this.zip_code.toString().length != 6) {
                this.showZipcodeErrorMsg = true;
                this.zipcodeErrorMsg = 'Please enter valid zip code';
            }
            else {
                this.showZipcodeErrorMsg = false;
            }
        }
    };
    UpdateemployeecontactinfoPage = tslib_1.__decorate([
        Component({
            selector: 'app-updateemployeecontactinfo',
            templateUrl: './updateemployeecontactinfo.page.html',
            styleUrls: ['./updateemployeecontactinfo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataservicesService,
            AlertController,
            LoadingController,
            ActivatedRoute])
    ], UpdateemployeecontactinfoPage);
    return UpdateemployeecontactinfoPage;
}());
export { UpdateemployeecontactinfoPage };
//# sourceMappingURL=updateemployeecontactinfo.page.js.map