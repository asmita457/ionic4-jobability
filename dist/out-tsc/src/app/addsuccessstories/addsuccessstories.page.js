import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ActionSheetController, LoadingController, AlertController, Platform } from '@ionic/angular';
import * as Quill from 'quill';
import { Base64 } from '@ionic-native/base64/ngx';
import { Validators, FormBuilder } from '@angular/forms';
var AddsuccessstoriesPage = /** @class */ (function () {
    function AddsuccessstoriesPage(location, actionSheetController, camera, file, filePath, transfer, loadingController, base64, alertCtrl, platform, formBuilder) {
        this.location = location;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.base64 = base64;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.showErrorIcon = false;
        this.title = '';
        this.brief = '';
        this.description = '';
        this.subTitle = '';
        this.titleErrorMsg = '';
        this.showTitleErrorMsg = false;
        this.showBriefErrorMsg = false;
        this.showDescriptionErrorMsg = false;
        this.imageData = '';
        this.choosedFileName = '';
    }
    AddsuccessstoriesPage.prototype.ngOnInit = function () {
        this.quill = new Quill('#editor-container', {
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    ['blockquote', 'code-block'],
                    [{ list: 'ordered' }],
                    [{ list: 'bullet' }],
                    [{ header: 1 }],
                    [{ header: 2 }],
                    [{ color: ["#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"] }],
                    [{ background: ["#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"] }],
                    [{ script: 'sub' }],
                    [{ script: 'super' }],
                    [{ indent: '-1' }],
                    [{ indent: '+1' }],
                    [{ align: [false, 'center', 'right', 'justify'] }],
                    [{ header: [1, 2, false] }],
                    [{ size: ['small', false, 'large', 'huge'] }],
                ]
            },
            placeholder: 'Type a desription...',
            theme: 'snow' // or 'bubble'
        });
        this.buildForm();
    };
    // Forms declaration
    AddsuccessstoriesPage.prototype.buildForm = function () {
        this.addSuccessstoriesForm = this.formBuilder.group({
            title: ['', Validators.required],
            subTitle: [''],
            brief: ['', Validators.required],
        });
    };
    AddsuccessstoriesPage.prototype.ionViewWillEnter = function () {
        this.imageData = 'assets/img/upload.png';
    };
    AddsuccessstoriesPage.prototype.takePhoto = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.filePath.resolveNativePath(imagePath)
                .then(function (filePath) {
                console.log(filePath);
                _this.base64.encodeFile(filePath).then(function (base64File) {
                    _this.imageData = base64File;
                }, function (err) {
                    console.log(err);
                });
            });
            _this.imageData = '';
            _this.choosedFileName = '';
            _this.choosedFileName = imagePath;
        }, function (err) {
            console.log(err);
            //this.presentToast(err);
        }).catch(function (err) {
            console.log('Error in catch: ' + err);
        });
    };
    AddsuccessstoriesPage.prototype.addSuccessStories = function (storyDetials) {
        var _this = this;
        if (this.choosedFileName == "" || this.choosedFileName == "fileNotSelected") {
            // this.presentAlert('','Please select image.')
            this.choosedFileName = "fileNotSelected";
            return;
        }
        if (this.addSuccessstoriesForm.invalid) {
            this.showErrorIcon = true;
            return;
        }
        if (this.quill.container.innerHTML.length == 447) {
            this.presentAlert('', 'Please insert description');
            return;
        }
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'image_name',
            fileName: this.createFileName(),
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            params: {
                'title': storyDetials.title,
                'sub_title': storyDetials.subTitle,
                'brife': storyDetials.brief,
                'description': this.quill.container.innerHTML.replace('<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action">', ''),
                "uacc_id": localStorage.getItem('users_id')
            }
        };
        this.presentLoading();
        fileTransfer.upload(this.choosedFileName, 'http://www.jobtest.jobability.org/api/resource/add_success_stories', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            _this.loadingController.dismiss();
            var ResultData = JSON.parse(data.response);
            if (ResultData.status == 1) {
                // this.photos = ResultData.photo_path
                _this.sucessAlert('', ResultData.message);
            }
            else {
                _this.presentAlert('', ResultData.message);
            }
        }, function (err) {
            _this.loadingController.dismiss();
            console.log(err);
        });
    };
    // Create a new name for the image
    AddsuccessstoriesPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    AddsuccessstoriesPage.prototype.closePage = function () {
        this.location.back();
    };
    //Validation on fileds
    // Create a new name for the image
    // private createFileName() {
    // var d = new Date(),
    // n = d.getTime(),
    // newFileName = n + ".jpg";
    // return newFileName;
    // }
    AddsuccessstoriesPage.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Choose Your Action',
                            buttons: [{
                                    text: 'Camera',
                                    handler: function () {
                                        // this.openCamera();
                                        _this.takePhoto(_this.camera.PictureSourceType.CAMERA);
                                    }
                                }, {
                                    text: 'Gallery',
                                    handler: function () {
                                        // this.OpenGallery();
                                        _this.takePhoto(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                        // this.takePhoto(this.camera.PictureSourceType.SAVEDPHOTOALBUM);
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'destructive',
                                    // role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddsuccessstoriesPage.prototype.presentLoading = function () {
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
    };
    AddsuccessstoriesPage.prototype.presentAlert = function (title, message) {
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
    AddsuccessstoriesPage.prototype.sucessAlert = function (title, message) {
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
    AddsuccessstoriesPage = tslib_1.__decorate([
        Component({
            selector: 'app-addsuccessstories',
            templateUrl: './addsuccessstories.page.html',
            styleUrls: ['./addsuccessstories.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            ActionSheetController,
            Camera,
            File,
            FilePath,
            FileTransfer,
            LoadingController,
            Base64,
            AlertController,
            Platform,
            FormBuilder])
    ], AddsuccessstoriesPage);
    return AddsuccessstoriesPage;
}());
export { AddsuccessstoriesPage };
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
//# sourceMappingURL=addsuccessstories.page.js.map