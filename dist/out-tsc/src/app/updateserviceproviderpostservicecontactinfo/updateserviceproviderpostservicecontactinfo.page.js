import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FormBuilder } from '@angular/forms';
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
            fileTransfer.upload(this.filePathURI, 'http://www.jobtest.jobability.org/api/post_functionality/update_service_post_contact', options)
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
    UpdateserviceproviderpostservicecontactinfoPage.prototype.presentAlert = function (title, message, status) {
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
    UpdateserviceproviderpostservicecontactinfoPage = tslib_1.__decorate([
        Component({
            selector: 'app-updateserviceproviderpostservicecontactinfo',
            templateUrl: './updateserviceproviderpostservicecontactinfo.page.html',
            styleUrls: ['./updateserviceproviderpostservicecontactinfo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            ActivatedRoute,
            DataservicesService,
            FileChooser,
            FileTransfer,
            LoadingController,
            AlertController,
            FilePath,
            FormBuilder])
    ], UpdateserviceproviderpostservicecontactinfoPage);
    return UpdateserviceproviderpostservicecontactinfoPage;
}());
export { UpdateserviceproviderpostservicecontactinfoPage };
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
//# sourceMappingURL=updateserviceproviderpostservicecontactinfo.page.js.map