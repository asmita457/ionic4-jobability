(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updateserviceproviderpostservicecontactinfo-updateserviceproviderpostservicecontactinfo-module"],{

/***/ "./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.module.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: UpdateserviceproviderpostservicecontactinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateserviceproviderpostservicecontactinfoPageModule", function() { return UpdateserviceproviderpostservicecontactinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateserviceproviderpostservicecontactinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateserviceproviderpostservicecontactinfo.page */ "./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _updateserviceproviderpostservicecontactinfo_page__WEBPACK_IMPORTED_MODULE_6__["UpdateserviceproviderpostservicecontactinfoPage"]
    }
];
var UpdateserviceproviderpostservicecontactinfoPageModule = /** @class */ (function () {
    function UpdateserviceproviderpostservicecontactinfoPageModule() {
    }
    UpdateserviceproviderpostservicecontactinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updateserviceproviderpostservicecontactinfo_page__WEBPACK_IMPORTED_MODULE_6__["UpdateserviceproviderpostservicecontactinfoPage"]]
        })
    ], UpdateserviceproviderpostservicecontactinfoPageModule);
    return UpdateserviceproviderpostservicecontactinfoPageModule;
}());



/***/ }),

/***/ "./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar class=\"new-background-color\">\n  <ion-item lines=\"none\" class=\"new-background-color\">\n    <ion-icon (click)=\"closePage()\" name=\"close\" style=\"color: #2b0c43;\"></ion-icon>\n    <ion-title style=\"margin-left: 5%; color:#2b0c43;\">Edit Contact Information</ion-title>\n  </ion-item>\n</ion-toolbar>\n\n<ion-content>\n  <ion-card class=\"cardMargins boxShadow\">\n    <ion-card-content>\n        <form [formGroup]=\"updateContactInfoForm\" (ngSubmit)=\"updateContactInfo(updateContactInfoForm.value)\">\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-checkbox formControlName=\"checkStatus\" [(ngModel)]=\"checkStatus\" class=\"checkBoxBorder\">\n              </ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label class=\"headerNameCss\"> Do not display this contact detail to Applicants</ion-label>\n            </ion-col>\n          </ion-row>\n\n          <label id=\"status\">Status</label>\n          <mat-radio-group aria-label=\"status\" class=\"radioButtonGroup\"\n            [(ngModel)]=\"editServiceContactInformationDetails.Status\" formControlName=\"status\">\n            <mat-radio-button class=\"radioButton\" value=\"1\">Active</mat-radio-button>\n            <mat-radio-button class=\"radioButton\" value=\"0\">Inactive</mat-radio-button>\n          </mat-radio-group>\n\n          <button type=\"submit\" class=\"buttonfont selector\">SAVE</button>\n        </form>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-col size=\"4\">\n      <ion-label style=\"margin-left: 6%;\" style=\"color: #2b0c43;\">Upload File:</ion-label>\n    </ion-col> -->\n  <!-- <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\" >\n          <ion-button class=\"uploadfilebtn button-outline\" style=\"margin-left: 16%;\" fill=\"outline\"\n            (click)=\"uploadFile()\">Choose file\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label style=\"color: #2b0c43;\">{{fileName}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.page.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.page.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-outline {\n  --border-color: gray !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWpheV9tYWNib29rYWlyL0RvY3VtZW50cy9naXRsYWIvYXRpbi1qb2JhYmlsaXR5LWFuZHJvaWQvc3JjL2FwcC91cGRhdGVzZXJ2aWNlcHJvdmlkZXJwb3N0c2VydmljZWNvbnRhY3RpbmZvL3VwZGF0ZXNlcnZpY2Vwcm92aWRlcnBvc3RzZXJ2aWNlY29udGFjdGluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXNlcnZpY2Vwcm92aWRlcnBvc3RzZXJ2aWNlY29udGFjdGluZm8vdXBkYXRlc2VydmljZXByb3ZpZGVycG9zdHNlcnZpY2Vjb250YWN0aW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLW91dGxpbmV7XG4gICAgLS1ib3JkZXItY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.page.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.page.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: UpdateserviceproviderpostservicecontactinfoPage, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateserviceproviderpostservicecontactinfoPage", function() { return UpdateserviceproviderpostservicecontactinfoPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/dataservices/dataservices.service */ "./src/app/providers/dataservices/dataservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var UpdateserviceproviderpostservicecontactinfoPage = /** @class */ (function () {
    function UpdateserviceproviderpostservicecontactinfoPage(location, activatedRoute, dataServices, fileChooser, transfer, loadingController, alertCtrl, filePath, formBuilder) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.dataServices = dataServices;
        this.fileChooser = fileChooser;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.filePath = filePath;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.editServiceContactInformationDetails = [];
        this.isFileSelected = false;
        this.editServiceContactInformationDetails = [];
        this.editServiceContactInformationDetails = JSON.parse((this.activatedRoute.snapshot.paramMap.get('item')));
        this.checkStatus = this.editServiceContactInformationDetails.show_contact == 0 ? false : true;
        this.fileName = this.editServiceContactInformationDetails.upload_filename;
    }
    UpdateserviceproviderpostservicecontactinfoPage.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UpdateserviceproviderpostservicecontactinfoPage.prototype.buildForm = function () {
        this.updateContactInfoForm = this.formBuilder.group({
            checkStatus: [''],
            status: ['']
        });
    };
    UpdateserviceproviderpostservicecontactinfoPage.prototype.uploadFile = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            _this.filePathURI = uri;
            _this.filePath.resolveNativePath(uri)
                .then(function (url) {
                var choosedFileName = url.substring(url.lastIndexOf("/") + 1);
                var fileExtension = choosedFileName.split('.');
                if (fileExtension[1] == 'pdf' || fileExtension[1] == 'PDF' || fileExtension[1] == 'doc' || fileExtension[1] == 'DOC' || fileExtension[1] == 'docx' || fileExtension[1] == 'DOCX') {
                    _this.fileName = url.substring(url.lastIndexOf("/") + 1);
                    var fileURL = url.split(" ").join("%20");
                    _this.isFileSelected = true;
                }
                else {
                    _this.loadingController.dismiss();
                    // this.showResume = false;
                    // this.fileName = '';
                    _this.presentAlert('File Type', 'You can choose only .pdf, .doc or .docx types of file', '');
                }
            });
        }).catch(function (e) { return console.log(e); });
    };
    UpdateserviceproviderpostservicecontactinfoPage.prototype.updateContactInfo = function (form) {
        var _this = this;
        if (this.isFileSelected) {
            var headers = new Headers();
            // headers.append('Content-Type', 'multipart/form-data' );
            headers.append('Access-Control-Allow-Headers', 'Content-Type');
            headers.append('Access-Control-Allow-Origin', '*');
            var options = {
                headers: headers,
                fileKey: 'upload_file',
                fileName: this.fileName.split(" ").join("%20"),
                chunkedMode: false,
                params: {
                    "id": this.editServiceContactInformationDetails.Service_id,
                    "status": form.status,
                    "show_contact": form.checkStatus == true ? 1 : 0,
                }
            };
            this.presentLoading();
            var fileTransfer = this.transfer.create();
            fileTransfer.upload(this.filePathURI, 'http://www.jobability.org/api/post_functionality/update_service_post_contact', options)
                .then(function (data) {
                _this.fileUploadResponse = data;
                _this.loadingController.dismiss();
                if (JSON.parse(_this.fileUploadResponse.response).status == 1) {
                    _this.presentAlert(JSON.parse(_this.fileUploadResponse.response).message, '', 'Success');
                }
                else {
                    _this.presentAlert(JSON.parse(_this.fileUploadResponse.response).message, '', '');
                }
            }, function (err) {
                // error
                console.log('error: ' + err);
                _this.loadingController.dismiss();
                _this.presentAlert("", "Upload Failed", '');
            });
        }
        else {
            var postData = {
                "id": this.editServiceContactInformationDetails.Service_id,
                "status": form.status,
                "show_contact": form.checkStatus == true ? 1 : 0,
                "upload_file": []
            };
            this.updateContactInfoAPI(postData);
        }
    };
    UpdateserviceproviderpostservicecontactinfoPage.prototype.updateContactInfoAPI = function (postData) {
        var _this = this;
        this.presentLoading();
        this.dataServices.updateServicesContactinfo(postData).then(function (result) {
            console.log(result);
            result = result;
            if (result.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert(result.message, '', 'Success');
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert(result.message, '', '');
            }
        }, function (error) {
            _this.loadingController.dismiss();
        });
    };
    UpdateserviceproviderpostservicecontactinfoPage.prototype.closePage = function () {
        this.location.back();
    };
    UpdateserviceproviderpostservicecontactinfoPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    UpdateserviceproviderpostservicecontactinfoPage.prototype.presentAlert = function (title, message, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            // buttons: ['OK']
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        if (status == 'Success') {
                                            _this.closePage();
                                        }
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
    UpdateserviceproviderpostservicecontactinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateserviceproviderpostservicecontactinfo',
            template: __webpack_require__(/*! ./updateserviceproviderpostservicecontactinfo.page.html */ "./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.page.html"),
            styles: [__webpack_require__(/*! ./updateserviceproviderpostservicecontactinfo.page.scss */ "./src/app/updateserviceproviderpostservicecontactinfo/updateserviceproviderpostservicecontactinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_dataservices_dataservices_service__WEBPACK_IMPORTED_MODULE_3__["DataservicesService"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
    ], UpdateserviceproviderpostservicecontactinfoPage);
    return UpdateserviceproviderpostservicecontactinfoPage;
}());

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



/***/ })

}]);
//# sourceMappingURL=updateserviceproviderpostservicecontactinfo-updateserviceproviderpostservicecontactinfo-module.js.map