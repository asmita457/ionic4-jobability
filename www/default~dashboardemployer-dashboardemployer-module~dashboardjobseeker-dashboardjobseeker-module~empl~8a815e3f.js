(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboardemployer-dashboardemployer-module~dashboardjobseeker-dashboardjobseeker-module~empl~8a815e3f"],{

/***/ "./src/app/providers/dataservices/dataservices.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/providers/dataservices/dataservices.service.ts ***!
  \****************************************************************/
/*! exports provided: DataservicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataservicesService", function() { return DataservicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var DataservicesService = /** @class */ (function () {
    function DataservicesService(http) {
        this.http = http;
        this.APIBaseUrl = 'http://www.jobtest.jobability.org/';
    }
    DataservicesService.prototype.getEmployerData = function (uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/get_employer_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getSearchResultData = function (search_key_words, search_location, disability_id, functional_area_id, industry_id, currency, annual_ctc_from, annual_ctc_to, min_experience, max_experience, offset, uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            if (currency == undefined || currency == null) {
                currency = "";
            }
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "search_key_words": search_key_words,
                "search_location": search_location,
                "disability_id": disability_id,
                "functional_area_id": functional_area_id,
                "industry_id": industry_id,
                "currency": currency,
                "annual_ctc_from": annual_ctc_from,
                "annual_ctc_to": annual_ctc_to,
                "min_experience": min_experience,
                "max_experience": max_experience,
                "offset": offset,
                "uacc_id": uacc_id
            };
            console.log("Search Post Data: " + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/search_job', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getDetailInfoOfJob = function (jobId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "id": jobId,
                "uacc_id": localStorage.getItem("users_id")
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/job_details', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.jobApplyAPI = function (uacc_id, job_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "job_id": job_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/apply_functionality/job_apply', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getJobsCountData = function (uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/dashboard_functionality/seeker_dashboard_details', postData, requestOpt).subscribe(function (response) {
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getSavedJobsData = function (uacc_id, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/save_job_details_list', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getRecommendedJobsData = function (uacc_id, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/recommended_job_details_list', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getSeekerData = function (uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/get_seeker_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response);
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updateServiceproviderContactInfoAPI = function (first_name, designation, business_email, email, phone, mobile, address, city, state, country, zip_code, uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            // headers.set('Access-Control-Allow-Origin' , '*');
            // headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            requestOpt.headers = headers;
            // headers.append('Access-Control-Allow-Origin' , '*');
            // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            // headers.append('Accept','application/json');
            // headers.append('content-type','application/json');
            // let options = new RequestOptions({ headers:headers,withCredentials: true});
            var postData = {
                "first_name": first_name,
                "designation": designation,
                "business_email": business_email,
                "email": email,
                "phone": phone,
                "mobile": mobile,
                "address": address,
                "city": city,
                "state": state,
                "country": country,
                "zip_code": zip_code,
                "uacc_id": uacc_id
            };
            console.log("contact post body is >> " + JSON.stringify(postData));
            console.log("contact post header is >> " + JSON.stringify(requestOpt));
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_service_provider_contact_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getServiceProviderData = function (uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/get_service_provider_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getDDLAPI = function (country_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "country_id": country_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/ddl_data_for_seeker_profile', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getSearchFilterDDLAPI = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            _this.http.get(_this.APIBaseUrl + 'api/common_ddlfill/ddlfill_industry_disability_funcational_area_currency', requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updateContactInfoAPI = function (name, email, mobile, gender, country_id, state_id, city_id, marital_status, address, uacc_id, disability_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "name": name,
                "email": email,
                "mobile_no": mobile,
                "gender": gender,
                "country_id": country_id,
                "state_id": state_id,
                "city_id": city_id,
                "marital_status": marital_status,
                "address": address,
                "uacc_id": uacc_id,
                "disability_id": disability_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_seeker_contact_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updateEmployeeContactInfoAPI = function (first_name, designation, business_email, phone, mobile, address, city, state, country, zip_code, email, uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "first_name": first_name,
                "designation": designation,
                "business_email": business_email,
                "phone": phone,
                "mobile": mobile,
                "address": address,
                "city": city,
                "state": state,
                "country": country,
                "zip_code": zip_code,
                "email": email,
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_employer_contact_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updateEmployeeEmployerInfoAPI = function (company_name, companytype_id, year_establishment, industry_id, website_url, company_description, uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "company_name": company_name,
                "companytype_id": companytype_id,
                "year_establishment": year_establishment,
                "industry_id": industry_id,
                "website_url": website_url,
                "company_description": company_description,
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_employer_organization_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getCountryArrayAPI = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            _this.http.post(_this.APIBaseUrl + 'api/profile/country', requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updatePresentSkillSetAPI = function (functional_area, functional_area_id, industry, industry_id, years_total_experience, months_total_experience, uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "functional_area": functional_area,
                "functional_area_id": functional_area_id,
                "industry": industry,
                "industry_id": industry_id,
                "years_total_experience": years_total_experience,
                "months_total_experience": months_total_experience,
                "uacc_id": uacc_id
            };
            console.log('SkillSet Info: ' + postData + '\nInfo: ' + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_seeker_skill_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updateWorkExperienceInfoAPI = function (current_employer, companyOrganisation, designation, selectedMonthFromId, selectedYearFrom, selectedMonthToId, selectedYearTo, reasonForLeaving, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "current_employer": current_employer,
                "company_organisation": companyOrganisation,
                "designation": designation,
                "start_month": selectedMonthFromId,
                "start_year": selectedYearFrom,
                "end_month": selectedMonthToId,
                "end_year": selectedYearTo,
                "reason_for_leaving": reasonForLeaving,
                "uacc_id": localStorage.getItem("users_id"),
                "id": id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_seeker_work_experience_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    }; // Update Work Experience Function Ends Here.
    DataservicesService.prototype.addWorkExperienceInfoAPI = function (current_employer, companyOrganisation, designation, selectedMonthFromId, selectedYearFrom, selectedMonthToId, selectedYearTo, reasonForLeaving) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "current_employer": current_employer,
                "company_organisation": companyOrganisation,
                "designation": designation,
                "start_month": selectedMonthFromId,
                "start_year": selectedYearFrom,
                "end_month": selectedMonthToId,
                "end_year": selectedYearTo,
                "reason_for_leaving": reasonForLeaving,
                "uacc_id": localStorage.getItem("users_id"),
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/add_seeker_work_experience_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Update Education
    DataservicesService.prototype.updateEducationInfoAPI = function (education_type, qualification_id, qualification_name, specialization, institute_university_id, institute_university_name, year_of_passing, type_of_course, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "education_type": education_type,
                "qualification_id": qualification_id,
                "qualification_name": qualification_name,
                "specialisation": specialization,
                "institute_university_id": institute_university_id,
                "institute_university_name": institute_university_name,
                "year_of_passing": year_of_passing,
                "type_of_course": type_of_course,
                "uacc_id": localStorage.getItem("users_id"),
                "id": id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_seeker_education_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    }; //Update Education
    DataservicesService.prototype.addEducationInfoAPI = function (education_type, qualification_id, qualification_name, specialization, institute_university_id, institute_university_name, year_of_passing, type_of_course) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "education_type": education_type,
                "qualification_id": qualification_id,
                "qualification_name": qualification_name,
                "specialisation": specialization,
                "institute_university_id": institute_university_id,
                "institute_university_name": institute_university_name,
                "year_of_passing": year_of_passing,
                "type_of_course": type_of_course,
                "uacc_id": localStorage.getItem("users_id"),
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/add_seeker_education_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    // Function For Email Verification 
    DataservicesService.prototype.emailVerification = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            // headers.append('Access-Control-Allow-Origin' , '*');
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                'uacc_id': userId,
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/send_email_verify', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    }; // Function For Email Verification Ends Here.
    //Delete Work Experience
    DataservicesService.prototype.deleteWorkExperience = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            // headers.append('Access-Control-Allow-Origin' , '*');
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                'id': id,
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/delete_seeker_work_experience_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    }; //Delete Work Experience Ends Here.
    //Delete Work Experience
    DataservicesService.prototype.deleteEducation = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            // headers.append('Access-Control-Allow-Origin' , '*');
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                'id': id,
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/delete_seeker_education_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    }; //Delete Work Experience Ends Here.
    // updateServiceproviderContactInfoAPI(first_name, designation, business_email, phone, mobile, address, city, state, country, zip_code, uacc_id) {
    //   return new Promise((resolve, reject) => {
    //     var requestOpt = new RequestOptions()
    //     var headers = new Headers()
    //     headers.set('Content-Type', 'application/json')
    //     requestOpt.headers = headers
    //     var postData = {
    //       "first_name": first_name,
    //       "designation": designation,
    //       "business_email": business_email,
    //       "phone": phone,
    //       "mobile": mobile,
    //       "address": address,
    //       "city": city,
    //       "state": state,
    //       "country": country,
    //       "zip_code": zip_code,
    //       "uacc_id": uacc_id
    //     }
    //     this.http.post(this.APIBaseUrl + 'api/profile/update_service_provider_contact_info', postData, requestOpt).subscribe((response) => {
    //       console.log("Data", response.json());
    //       resolve(response.json())
    //     }, error => {
    //       console.log("Error", error)
    //       reject(error)
    //     })
    //   })
    // }
    DataservicesService.prototype.updateServiceproviderOrganisationInfoAPI = function (organizationtype, organization_type_id, year_establishment, website_url, organisation_name, disability_id, servicetype_id, uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "organizationtype": organizationtype,
                "organization_type_id": organization_type_id,
                "year_establishment": year_establishment,
                "website_url": website_url,
                "organisation_name": organisation_name,
                "disability_id": disability_id,
                "servicetype_id": servicetype_id,
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_service_provider_organization_info', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Function For Get Application Details 
    DataservicesService.prototype.applicationDetails = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "vacancy_id": id
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/search_application_apply_details', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Application Details Function Ends Here.
    //upload resume
    DataservicesService.prototype.uploadResume = function (resumePath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'multipart/form-data');
            requestOpt.headers = headers;
            var postData = {
                "attach_cv": resumePath
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_seeker_resume', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //get Employer Dashboard Details
    DataservicesService.prototype.getEmployerDashBoardDetails = function (offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": localStorage.getItem("users_id"),
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/dashboard_functionality/employer_dashboard_details', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    // Save or Remove Job
    DataservicesService.prototype.saveOrRemoveJob = function (jobId, userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": userId,
                "job_id": jobId
            };
            _this.http.post(_this.APIBaseUrl + 'api/apply_functionality/save_job', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.postJobDataAPI = function (job_name, job_description, disability_id, min_experience, max_experience, ctc_currency, annual_ctc_from, annual_ctc_to, hide_salary, number_of_vacancies, last_date_apply, country_id, state_city_id, industry_id, functional_area_id, job_role, qualification_id, key_skills, applicants_display, tab_show, from_date, to_date, start_time, end_time, show_contact, reference_code, candidate_profile, uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            if (ctc_currency == undefined || ctc_currency == null) {
                ctc_currency = "";
            }
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "job_name": job_name,
                "job_description": job_description,
                "disability_id": disability_id,
                "min_experience": min_experience,
                "max_experience": max_experience,
                "ctc_currency": ctc_currency,
                "annual_ctc_from": annual_ctc_from,
                "annual_ctc_to": annual_ctc_to,
                "hide_salary": hide_salary,
                "number_of_vacancies": number_of_vacancies,
                "last_date_apply": last_date_apply,
                "country_id": country_id,
                "state_city_id": state_city_id,
                "industry_id": industry_id,
                "functional_area_id": functional_area_id,
                "job_role": job_role,
                "qualification_id": qualification_id,
                "key_skills": key_skills,
                "applicants_display": applicants_display,
                "tab_show": tab_show,
                "from_date": from_date,
                "to_date": to_date,
                "start_time": start_time,
                "end_time": end_time,
                "show_contact": show_contact,
                "reference_code": reference_code,
                "candidate_profile": candidate_profile,
                "uacc_id": uacc_id
            };
            console.log("Search Post Data: " + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/job_post_deatils', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Combine response API for state and city
    DataservicesService.prototype.getStateAndCityDDLAPI = function (uacc_id, countryID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "country_id": countryID
            };
            _this.http.post(_this.APIBaseUrl + 'api/common_ddlfill/state_city', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.trackjoblist = function (users_id, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": users_id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/job_applied_list', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updateServicesContactinfo = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/update_service_post_contact', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updateServicesDetail = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/update_post_service_details', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updateServicesLocation = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/update_service_post_location', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.postServices = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/service_post_details', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //get Service Provider Details
    DataservicesService.prototype.getSPDashBoardDetails = function (offset, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "id": id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/my_services_list', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //get Service Provider Details
    DataservicesService.prototype.getSPIndividualDetails = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "id": id
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/individual_my_services_details', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.deleteService = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "id": id
            };
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/delete_post_service', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getStateCountryList = function (uacc_id, country_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.set('Content-Type', 'application/json');
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "country_id": country_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/common_ddlfill/state_city', postData, requestOpt).subscribe(function (response) {
                console.log("Data", response.json());
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DataservicesService);
    return DataservicesService;
}());



/***/ })

}]);
//# sourceMappingURL=default~dashboardemployer-dashboardemployer-module~dashboardjobseeker-dashboardjobseeker-module~empl~8a815e3f.js.map