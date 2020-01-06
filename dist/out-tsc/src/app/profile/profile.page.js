import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Events, LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
// import { File } from '@ionic-native/file';
// import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Http } from '@angular/http';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(router, dataServices, events, loadingController, alertCtrl, fileChooser, http, transfer, file, 
    // private transfer: FileTransfer,
    // private file: File,
    // private transfer: FileTransfer,
    filePath, tts, mobileAccessibility) {
        this.router = router;
        this.dataServices = dataServices;
        this.events = events;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.fileChooser = fileChooser;
        this.http = http;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.tts = tts;
        this.mobileAccessibility = mobileAccessibility;
        //Arrays for push neccessory information on next page.
        this.seekerContactInfoArray = [];
        this.seekerPresentSkillsetArray = [];
        this.seekerWorkExperienceArray = [];
        this.seekerQualificationInfoArray = [];
        this.employerStaus = true;
        this.showResume = false;
        this.fileUrl = '';
        this.KeySkills = '';
        this.uacc_id = localStorage.getItem("users_id");
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.getSeekerInformation();
        this.getNotificationBadgeCount();
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mobileAccessibility.isScreenReaderRunning().then(function (bool) {
            if (bool) {
                setTimeout(function () {
                    _this.tts.speak('My Profile Screen')
                        .then(function () { return console.log('Success'); })
                        .catch(function (reason) { return console.log(reason); });
                }, 1000);
            }
        });
    };
    ProfilePage.prototype.getNotificationBadgeCount = function () {
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
    ProfilePage.prototype.navigateToNotification = function () {
        this.router.navigate(['/notification']);
    };
    // Function For Get Seeker Infromation
    ProfilePage.prototype.getSeekerInformation = function () {
        var _this = this;
        // this.uacc_id = localStorage.getItem("users_id");
        this.seekerContactInfoArray = [];
        this.seekerPresentSkillsetArray = [];
        this.presentLoading();
        this.dataServices.getSeekerData(this.uacc_id).then(function (result) {
            _this.resultData = result;
            if (_this.resultData.status == 1) {
                // Seeker Details
                _this.name = _this.resultData.seeker_details[0].first_name;
                _this.email = _this.resultData.seeker_details[0].email;
                _this.mobile = _this.resultData.seeker_details[0].mobile;
                _this.splitMobile = _this.mobile.split('').join(' ').replace(/0/g, 'zero');
                _this.education_type = _this.resultData.seeker_details[0].education_type;
                _this.country = _this.resultData.seeker_details[0].country == 0 ? '' : _this.resultData.seeker_details[0].country;
                _this.state = _this.resultData.seeker_details[0].state == 0 ? '' : _this.resultData.seeker_details[0].state;
                _this.city = _this.resultData.seeker_details[0].city == 0 ? '' : _this.resultData.seeker_details[0].city;
                _this.verify_email = _this.resultData.seeker_details[0].verify_email;
                _this.fileName = _this.resultData.seeker_details[0].attach_cv;
                _this.fileUrl = _this.resultData.seeker_details[0].file_path;
                if (_this.fileName != null) {
                    _this.showResume = true;
                }
                if (_this.verify_email == 0) {
                    _this.showVerifyButton = true;
                }
                else {
                    _this.showVerifiedButton = true;
                }
                _this.seekerContactInfoArray.push({
                    name: _this.name,
                    email: _this.email,
                    mobile: _this.mobile,
                    address: _this.resultData.seeker_details[0].address,
                    gender: _this.resultData.seeker_details[0].gender,
                    marritalStatus: _this.resultData.seeker_details[0].marital_status,
                    country: _this.country,
                    state: _this.state,
                    city: _this.city,
                    disability_id: _this.resultData.seeker_details[0].disability_id,
                });
                _this.industry = _this.resultData.seeker_details[0].industry_name;
                _this.functionalArea = _this.resultData.seeker_details[0].functional_area;
                _this.totalYearExperience = _this.resultData.seeker_details[0].years_total_experience;
                _this.totalMonthExperience = _this.resultData.seeker_details[0].months_total_experience;
                _this.KeySkills = _this.resultData.seeker_details[0].key_skill;
                _this.seekerPresentSkillsetArray.push({
                    industryId: _this.resultData.seeker_details[0].industry_id,
                    industryName: _this.resultData.seeker_details[0].industry_name,
                    functionalAreaId: _this.resultData.seeker_details[0].functional_area_id,
                    functionalAreaName: _this.resultData.seeker_details[0].functional_area,
                    totalMonthExperience: _this.resultData.seeker_details[0].months_total_experience,
                    totalYearExperience: _this.resultData.seeker_details[0].years_total_experience,
                    KeySkills: _this.resultData.seeker_details[0].key_skill
                });
                // Work Experience Of Seeker
                _this.seekerExperienceDetails = _this.resultData.seeker_experience_details;
                _this.experienceDetailscardLength = _this.seekerExperienceDetails.length;
                if (_this.seekerExperienceDetails.length != 0) {
                    _this.currentEmployerStatus = _this.seekerExperienceDetails[0].current_employer == 0 ? false : true;
                }
                // Seeker Educational information
                _this.seekerQualificationInfo = _this.resultData.seeker_qualification_details;
                _this.cardLength = _this.seekerQualificationInfo.length;
                _this.hideAndShowForEducationInfo(_this.seekerQualificationInfo);
                _this.setDefaultEducation(_this.education_type);
                localStorage.setItem('userName', _this.name);
                _this.events.publish('Event-UserName');
                if (_this.country != null || _this.country != undefined || _this.country != '') {
                    _this.getDDLAPI(_this.country);
                }
                _this.loadingController.dismiss();
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('', _this.resultData.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // Function For Get Seeker Infromation Ends Here.
    //Function For Uplaod Resume
    ProfilePage.prototype.uploadResume = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            var filePathURI = uri;
            _this.filePath.resolveNativePath(uri)
                .then(function (url) {
                var choosedFileName = url.substring(url.lastIndexOf("/") + 1);
                var fileExtension = choosedFileName.split('.');
                if (fileExtension[1] == 'pdf' || fileExtension[1] == 'PDF' || fileExtension[1] == 'doc' || fileExtension[1] == 'DOC' || fileExtension[1] == 'docx' || fileExtension[1] == 'DOCX') {
                    _this.fileName = url.substring(url.lastIndexOf("/") + 1);
                    var fileTransfer = _this.transfer.create();
                    var headers = new Headers();
                    // headers.append('Content-Type', 'multipart/form-data' );
                    headers.append('Access-Control-Allow-Headers', 'Content-Type');
                    headers.append('Access-Control-Allow-Origin', '*');
                    var options = {
                        headers: headers,
                        fileKey: 'attach_cv',
                        fileName: _this.fileName.split(" ").join("%20"),
                        chunkedMode: false,
                        params: {
                            'uacc_id': localStorage.getItem("users_id")
                        }
                    };
                    _this.presentLoading();
                    var fileURL = url.split(" ").join("%20");
                    fileTransfer.upload(filePathURI, 'http://www.jobtest.jobability.org/api/profile/update_seeker_resume', options)
                        .then(function (data) {
                        _this.fileUploadResponse = data;
                        _this.loadingController.dismiss();
                        _this.showResume = true;
                        if (_this.fileUploadResponse.responseCode == 200) {
                            _this.getSeekerInformation();
                            _this.presentAlert("", JSON.parse(_this.fileUploadResponse.response).message);
                        }
                        else {
                            _this.presentAlert("", "Upload Failed");
                        }
                    }, function (err) {
                        // error
                        console.log('error: ' + err);
                        _this.loadingController.dismiss();
                        _this.presentAlert("", "Upload Failed");
                    });
                }
                else {
                    _this.loadingController.dismiss();
                    // this.showResume = false;
                    // this.fileName = '';
                    _this.presentAlert('File Type', 'You can choose only .pdf, .doc or .docx types of file');
                }
            });
        }).catch(function (e) { return console.log(e); });
    }; // uploadResume Fnction Ends Here.
    //download Resume 
    ProfilePage.prototype.download = function () {
        var _this = this;
        this.presentLoading();
        var url = this.fileUrl;
        var fileTransfer = this.transfer.create();
        fileTransfer.download(url, this.file.externalRootDirectory +
            '/Download/' + this.fileName)
            .then(function (entry) {
            _this.loadingController.dismiss();
            _this.presentAlert('File', 'File has been downloaded to the Downloads folder');
        }, function (error) {
            // handle error
            _this.loadingController.dismiss();
            console.log('download failed: ' + error);
        });
    }; //download Rresume.
    //Function For Send Seeker Data to Update Contact 
    ProfilePage.prototype.updateContactInfo = function () {
        // this.router.navigate(['/updatecontact'])
        this.router.navigate(['/updatecontact', { seekerContactInfo: JSON.stringify(this.seekerContactInfoArray[0]) }]);
    };
    // Function For Send Data to Update Contact Ends Here.
    // Function For Send Seeker Data To Presend Skill Set UI
    ProfilePage.prototype.updatePresentSkillsets = function () {
        this.router.navigate(['/updateskillset', { seekerSkillSetInfo: JSON.stringify(this.seekerPresentSkillsetArray[0]) }]);
    }; // Function For Send Seeker Data To Presend SkillSet UI Ends Here
    // Function For Send Seeker Data To Work Experience UI
    ProfilePage.prototype.updateWorkExperience = function (id) {
        this.seekerWorkExperienceArray = [];
        for (var i = 0; i < this.seekerExperienceDetails.length; i++) {
            if (this.seekerExperienceDetails[i].id == id) {
                if (this.seekerExperienceDetails[i].current_employer == 1) {
                    this.employerStaus = true;
                }
                else {
                    this.employerStaus = true;
                }
                this.seekerWorkExperienceArray.push({
                    // id: this.seekerExperienceDetails[i].id,
                    id: id,
                    currentEmployer: this.seekerExperienceDetails[i].current_employer,
                    company: this.seekerExperienceDetails[i].company_organisation,
                    designation: this.seekerExperienceDetails[i].designation,
                    fromYearStartDate: this.seekerExperienceDetails[i].start_year,
                    fromMonthStartDate: this.seekerExperienceDetails[i].start_month,
                    toYearEndDate: this.seekerExperienceDetails[i].end_year,
                    toMonthEndDate: this.seekerExperienceDetails[i].end_month,
                    reasonForLeaving: this.seekerExperienceDetails[i].reason_for_leaving,
                    employerStaus: this.seekerExperienceDetails[0].current_employer,
                });
            }
        }
        this.router.navigate(['/updateworkexperience', { seekerExperienceInfo: JSON.stringify(this.seekerWorkExperienceArray[0]) }]);
    }; // Function For Send Seeker Data To Work Experience UI Ends Here.
    //Function For Delete Work Experience 
    ProfilePage.prototype.deleteWorkExperience = function (id) {
        this.deleteEducationAlertFunction(id, 'DeleteExperiance');
    }; // deleteWorkExperience Function Ends Here.
    ProfilePage.prototype.deleteWorkExperienceWithID = function (id) {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteWorkExperience(id).then(function (result) {
            _this.emailVerificatonResponse = result;
            _this.loadingController.dismiss();
            if (_this.emailVerificatonResponse.status == 1) {
                _this.getSeekerInformation();
                _this.presentAlert('', _this.emailVerificatonResponse.message);
            }
            else {
                _this.presentAlert('', _this.emailVerificatonResponse.message);
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    //Function For Delete Work Experience 
    ProfilePage.prototype.deleteEducation = function (id) {
        this.deleteEducationAlertFunction(id, 'DeleteEducation');
    }; // deleteEducation Function  Ends Here.
    ProfilePage.prototype.deleteEducationWithID = function (id) {
        var _this = this;
        this.presentLoading();
        this.dataServices.deleteEducation(id).then(function (result) {
            _this.emailVerificatonResponse = result;
            if (_this.emailVerificatonResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.getSeekerInformation();
                _this.presentAlert('', _this.emailVerificatonResponse.message);
            }
            else {
                _this.presentAlert('', _this.emailVerificatonResponse.message);
                _this.loadingController.dismiss();
            }
        }, function (error) {
            _this.loadingController.dismiss();
            console.log('Error in login: ' + JSON.stringify(error));
        });
    };
    ProfilePage.prototype.updateEducation = function (id) {
        this.seekerQualificationInfoArray = [];
        for (var i = 0; i < this.seekerQualificationInfo.length; i++) {
            if (this.seekerQualificationInfo[i].id == id) {
                this.seekerQualificationInfoArray.push({
                    id: this.seekerQualificationInfo[i].id,
                    educationType: this.education_type,
                    qualificationId: this.seekerQualificationInfo[i].qualification_id,
                    qualificationName: this.seekerQualificationInfo[i].qualification_name,
                    specialisation: this.seekerQualificationInfo[i].specialisation,
                    instituteUniversityId: this.seekerQualificationInfo[i].institute_university,
                    instituteUniversityName: this.seekerQualificationInfo[i].institute_university_name,
                    yearOfPassing: this.seekerQualificationInfo[i].year_of_passing,
                    typeOfCourse: this.seekerQualificationInfo[i].edu_type,
                    cardLength: this.seekerQualificationInfo.length
                });
            }
        }
        this.router.navigate(['/updateeducational', { item: JSON.stringify(this.seekerQualificationInfoArray[0]) }]);
    };
    //Display loader 
    ProfilePage.prototype.presentLoading = function () {
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
    // // Function For Get All Countrys
    // getCountryArray() {
    //   this.resultData = [];
    //   this.dataServices.getCountryArrayAPI().then((result) => {
    //     this.resultData = result
    //     if (this.resultData.status == 1) {
    //       localStorage.setItem("countryArray", JSON.stringify(this.resultData));
    //     } else {
    //     }
    //   }, error => {
    //     console.log('Error in login: ' + JSON.stringify(error))
    //   })
    // } // Function For Get All Countrys Ends Here.
    // Function For Get All States and Citys of According to Country
    ProfilePage.prototype.getDDLAPI = function (countryId) {
        var _this = this;
        this.dataServices.getDDLAPI(countryId).then(function (result) {
            _this.getDLLAPIData = result;
            if (_this.getDLLAPIData.status == 1) {
                localStorage.setItem("stateAndCityArray", JSON.stringify(_this.getDLLAPIData));
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // getDDLAPI Function Ends Here.
    // Function For Email Verification
    ProfilePage.prototype.emailVerification = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.emailVerification().then(function (result) {
            _this.emailVerificatonResponse = result;
            if (_this.emailVerificatonResponse.status == 1) {
                _this.loadingController.dismiss();
                _this.presentAlert('Email', _this.emailVerificatonResponse.message);
            }
            else {
                _this.loadingController.dismiss();
                _this.presentAlert('Email', _this.emailVerificatonResponse.message);
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; // Function emailVerification Ends Here.
    //Function For Verified Email
    // emailVerified(){
    //   this.presentAlert('Email','This email address is already verified');
    // }
    ProfilePage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            subHeader: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.setAttribute('role', 'alert');
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.addExperience = function () {
        this.router.navigate(['/updateworkexperience', { addExperience: 'addExperience', currentEmployer: this.currentEmployerStatus, cardLength: this.experienceDetailscardLength }]);
    };
    ProfilePage.prototype.addEducation = function () {
        this.router.navigate(['/updateeducational', { addEducation: 'addEducation', education_type: this.education_type, cardLength: this.cardLength }]);
    };
    ProfilePage.prototype.setDefaultEducation = function (educationType) {
        if (educationType == '1') {
            this.educationName = 'No Schooling';
        }
        else if (educationType == '2') {
            this.educationName = 'Pre-Primary';
        }
        else if (educationType == '3') {
            this.educationName = 'Primary';
        }
        else if (educationType == '0') {
            this.educationName = 'Education information not available';
        }
    };
    ProfilePage.prototype.hideAndShowForEducationInfo = function (seekerQualificationInfo) {
        if (seekerQualificationInfo.length == 0) {
            this.education_type = '4';
        }
    };
    ProfilePage.prototype.deleteEducationAlertFunction = function (id, deleteAction) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm',
                            subHeader: 'Are you sure? Do you want to delete?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        // this.router.navigate(['/login']);
                                        if (deleteAction == 'DeleteEducation') {
                                            _this.deleteEducationWithID(id);
                                        }
                                        else {
                                            _this.deleteWorkExperienceWithID(id);
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
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            DataservicesService,
            Events,
            LoadingController,
            AlertController,
            FileChooser,
            Http,
            FileTransfer,
            File,
            FilePath,
            TextToSpeech,
            MobileAccessibility])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map