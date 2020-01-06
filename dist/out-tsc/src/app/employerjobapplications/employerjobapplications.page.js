import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController } from '@ionic/angular';
var EmployerjobapplicationsPage = /** @class */ (function () {
    function EmployerjobapplicationsPage(router, location, activatedRoute, loadingController, dataServices, alertCtrl) {
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertCtrl = alertCtrl;
        this.results = [];
        this.applicationDetails = [];
        this.offset = 0;
        this.onPageLoad();
    }
    EmployerjobapplicationsPage.prototype.ngOnInit = function () {
    };
    EmployerjobapplicationsPage.prototype.goBack = function () {
        // this.location.back();
        this.router.navigate(['/dashboardemployer']);
    };
    //onPageLoad function call when page is load
    EmployerjobapplicationsPage.prototype.onPageLoad = function () {
        this.offset = 0;
        this.jobApplication = [];
        this.applicationData = JSON.parse(localStorage.getItem("applicationData"));
        // this.jobApplication = JSON.parse((this.activatedRoute.snapshot.paramMap.get('jobApplications')));
        // this.jobApplication = JSON.parse(localStorage.getItem("jobApplications"))
        this.jobApplicationCount = this.jobApplication.length;
        if (this.jobApplicationCount > 0) {
            this.profile_photo_path = this.jobApplication[0].profile_photo_path;
        }
        this.applicationId = localStorage.getItem("applicationId");
        this.filterApplications(this.applicationId, this.offset);
        // this.applicationId = JSON.parse((this.activatedRoute.snapshot.paramMap.get('applicationId')));
        this.jobApplicationCount = this.jobApplication.length;
        if (this.jobApplicationCount != 0) {
            this.showJobApplications = true;
        }
        else {
            this.showJobApplications = false;
        }
    }; //onPageLoad function ends here.
    //navigate user to prvious page on clicked of back arrow
    //On change Function when drop down is changed
    EmployerjobapplicationsPage.prototype.jobApplications = function (item) {
        this.jobApplication = [];
        this.applicationId = item.detail.value.id;
        this.filterApplications(this.applicationId, this.offset);
    };
    //Functino For get job applications 
    EmployerjobapplicationsPage.prototype.filterApplications = function (id, offset) {
        var _this = this;
        this.presentLoading();
        this.dataServices.applicationDetails(id, offset).then(function (result) {
            _this.aplicationsResponse = result;
            if (_this.aplicationsResponse.status == 1) {
                _this.jobApplication = _this.aplicationsResponse.application_apply_data;
                _this.jobApplicationCount = _this.aplicationsResponse.total_application_apply_data;
                if (_this.jobApplicationCount > 0) {
                    _this.profile_photo_path = _this.aplicationsResponse.application_apply_data.profile_photo_path;
                }
                if (_this.jobApplicationCount < _this.dataServices.globalOffset()) {
                    _this.moreDataAvailable = false;
                }
                else {
                    _this.moreDataAvailable = true;
                }
                if (_this.jobApplicationCount != 0) {
                    _this.showJobApplications = true;
                }
                else {
                    _this.showJobApplications = false;
                }
                _this.loadingController.dismiss();
                localStorage.setItem('jobApplication', _this.jobApplication);
                // this.router.navigate(['/employerjobapplications', { jobApplication : this.jobApplication}]);
            }
            else {
                _this.loadingController.dismiss();
            }
        }, function (error) {
            console.log('Error in login: ' + JSON.stringify(error));
        });
    }; //jobApplications function ends here. 
    // Function For Load Data While Scrolling
    EmployerjobapplicationsPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.offset += _this.dataServices.globalOffset();
            if (_this.offset > _this.jobApplicationCount) {
                _this.moreDataAvailable = false;
            }
            else {
                _this.moreDataAvailable = true;
                _this.filterApplications(_this.applicationId, _this.offset);
                event.target.complete();
            }
        }, 500);
    }; //loadData Function Eds Here.
    //Function for show cadidate profile 
    EmployerjobapplicationsPage.prototype.candidateProfileDetails = function (item) {
        var resumeId = item;
        this.router.navigate(['/empcandidateprofile', { resumeId: resumeId }]);
    };
    //candidateProfileDetails ends here
    //Display loader 
    EmployerjobapplicationsPage.prototype.presentLoading = function () {
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
    //Function For show alert
    EmployerjobapplicationsPage.prototype.presentAlert = function (title, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            message: message,
                            buttons: ['OK']
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
    EmployerjobapplicationsPage = tslib_1.__decorate([
        Component({
            selector: 'app-employerjobapplications',
            templateUrl: './employerjobapplications.page.html',
            styleUrls: ['./employerjobapplications.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location,
            ActivatedRoute,
            LoadingController,
            DataservicesService,
            AlertController])
    ], EmployerjobapplicationsPage);
    return EmployerjobapplicationsPage;
}());
export { EmployerjobapplicationsPage };
//# sourceMappingURL=employerjobapplications.page.js.map