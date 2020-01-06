import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, AlertController } from '@ionic/angular';
var DataservicesService = /** @class */ (function () {
    function DataservicesService(http, navCtrl, alertCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.APIBaseUrl = 'http://www.jobtest.jobability.org/';
        this.device_token = '';
        this.isAlertShown = true;
    }
    DataservicesService.prototype.getEmployerData = function (uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/get_employer_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            if (currency == undefined || currency == null) {
                currency = "";
            }
            headers.set('Content-Type', 'application/json');
            if (localStorage.getItem('users_id') != null) {
                headers.set('Auth-Token', localStorage.getItem('auth_token'));
            }
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
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/search_job', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getDetailInfoOfJob = function (jobId, userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            if (localStorage.getItem('users_id') != null) {
                headers.set('Auth-Token', localStorage.getItem('auth_token'));
            }
            requestOpt.headers = headers;
            var postData = {
                "id": jobId,
                "uacc_id": userId
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/job_details', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "job_id": job_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/apply_functionality/job_apply', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/dashboard_functionality/seeker_dashboard_details', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/save_job_details_list', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/recommended_job_details_list', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/get_seeker_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updateServiceproviderContactInfoAPI = function (contactDetailsform) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "first_name": contactDetailsform.name,
                "designation": contactDetailsform.designation,
                "business_email": contactDetailsform.businessEmail,
                "email": contactDetailsform.email,
                "phone": contactDetailsform.phone,
                "mobile": contactDetailsform.mobile,
                "address": contactDetailsform.address,
                "city": contactDetailsform.city,
                "state": contactDetailsform.state,
                "country": contactDetailsform.country,
                "zip_code": contactDetailsform.zipCode,
                "uacc_id": localStorage.getItem('users_id')
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_service_provider_contact_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getServiceProviderData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": localStorage.getItem("users_id")
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/get_service_provider_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "country_id": country_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/ddl_data_for_seeker_profile', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            if (localStorage.getItem('users_id') != null) {
                headers.set('Auth-Token', localStorage.getItem('auth_token'));
            }
            requestOpt.headers = headers;
            _this.http.get(_this.APIBaseUrl + 'api/common_ddlfill/ddlfill_industry_disability_funcational_area_currency', requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updateContactInfoAPI = function (formDeatails, uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "name": formDeatails.name,
                "email": formDeatails.email,
                "mobile_no": formDeatails.mobile,
                "gender": formDeatails.gender,
                "country_id": formDeatails.country,
                "state_id": formDeatails.state,
                "city_id": formDeatails.city,
                "marital_status": formDeatails.maritalStatus,
                "address": formDeatails.address,
                "uacc_id": uacc_id,
                "disability_id": formDeatails.disability
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_seeker_contact_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
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
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            // headers.set('Auth-Token', localStorage.getItem('auth_token'))
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
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            _this.http.post(_this.APIBaseUrl + 'api/profile/country', requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.updatePresentSkillSetAPI = function (skillSetForm, industryName, functionalAreaName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "industry": industryName,
                "industry_id": skillSetForm.industry,
                "functional_area": functionalAreaName,
                "functional_area_id": skillSetForm.functionalArea,
                "years_total_experience": skillSetForm.year,
                "months_total_experience": skillSetForm.month,
                "key_skill": skillSetForm.KeySkills,
                "uacc_id": localStorage.getItem("users_id")
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_seeker_skill_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
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
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
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
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Update Education
    DataservicesService.prototype.updateEducationInfoAPI = function (educationForm, qualificationName, instituteUniversityName, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "education_type": educationForm.educationtype,
                "qualification_id": educationForm.qualification,
                "qualification_name": qualificationName,
                "specialisation": educationForm.specialization,
                "institute_university_id": educationForm.university,
                "institute_university_name": instituteUniversityName,
                "year_of_passing": educationForm.passingYear,
                "type_of_course": educationForm.typeOfCourse,
                "uacc_id": localStorage.getItem("users_id"),
                "id": id
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_seeker_education_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    }; //Update Education
    DataservicesService.prototype.addEducationInfoAPI = function (educationForm, qualification_name, institute_university_name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "education_type": educationForm.educationtype,
                "qualification_id": educationForm.qualification,
                "qualification_name": qualification_name,
                "specialisation": educationForm.specialization,
                "institute_university_id": educationForm.university,
                "institute_university_name": institute_university_name,
                "year_of_passing": educationForm.passingYear,
                "type_of_course": educationForm.typeOfCourse,
                "uacc_id": localStorage.getItem("users_id"),
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/add_seeker_education_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    // Function For Email Verification 
    DataservicesService.prototype.emailVerification = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            // headers.append('Access-Control-Allow-Origin' , '*');
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                'uacc_id': localStorage.getItem("users_id"),
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/send_email_verify', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            // headers.append('Access-Control-Allow-Origin' , '*');
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                'id': id,
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/delete_seeker_work_experience_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            // headers.append('Access-Control-Allow-Origin' , '*');
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                'id': id,
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/delete_seeker_education_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
    //      
    //       resolve(response.json())
    //     }, error => {
    //       console.log("Error", error)
    //       reject(error)
    //     })
    //   })
    // }
    DataservicesService.prototype.updateServiceproviderOrganisationInfoAPI = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_service_provider_organization_info', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Function For Get Application Details 
    DataservicesService.prototype.applicationDetails = function (id, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "vacancy_id": id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/search_application_apply_details', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'multipart/form-data');
            requestOpt.headers = headers;
            var postData = {
                "attach_cv": resumePath
            };
            _this.http.post(_this.APIBaseUrl + 'api/profile/update_seeker_resume', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": localStorage.getItem("users_id"),
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/dashboard_functionality/employer_dashboard_details', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": userId,
                "job_id": jobId
            };
            _this.http.post(_this.APIBaseUrl + 'api/apply_functionality/save_job', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            if (ctc_currency == undefined || ctc_currency == null) {
                ctc_currency = "";
            }
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
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
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "country_id": countryID
            };
            _this.http.post(_this.APIBaseUrl + 'api/common_ddlfill/state_city', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": users_id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/job_applied_list', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/update_service_post_contact', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.changePassword = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            console.log("Change Password" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/change_password/user_change_password', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/update_post_service_details', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/update_service_post_location', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/service_post_details', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getCompanyLogoInformation = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            // headers.set('Auth-Token', localStorage.getItem('auth_token'))
            requestOpt.headers = headers;
            console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/profile/profile_photo_details', postData, requestOpt).subscribe(function (response) {
                // if (response.json().status == '401') {
                //   this.navigateUnauthoriseUser(response.json().message)
                // }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //get Service Provider Details
    DataservicesService.prototype.getSPDashBoardDetails = function (offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "id": localStorage.getItem("users_id"),
                "offset": offset,
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/my_services_list', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "id": id
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/individual_my_services_details', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
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
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "id": id
            };
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/delete_post_service', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getStateCountryList = function (country_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": localStorage.getItem("users_id"),
                "country_id": country_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/common_ddlfill/state_city', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getServiceListForJobSeeker = function (keywords, disability_id, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "keywords": keywords,
                "disability_id": disability_id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/search_services', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    // Function to get disability list
    DataservicesService.prototype.getDisabilityList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            _this.http.get(_this.APIBaseUrl + 'api/profile/disability', requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //get jobseeker service  Details
    DataservicesService.prototype.getJobSeekerServiceDetails = function (jobId, userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "id": jobId,
                "uacc_id": userId,
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/individual_services_details_for_seeker', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //get jobseeker service  Details
    DataservicesService.prototype.commentOnService = function (serviceId, comment, userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "id": serviceId,
                "comment": comment,
                "uacc_id": userId,
            };
            _this.http.post(_this.APIBaseUrl + 'api/apply_functionality/save_contact', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //get jobseeker service  Details
    DataservicesService.prototype.rateForService = function (serviceId, serviceProviderId, userId, rating) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "id": serviceId,
                "service_provider_id": serviceProviderId,
                "uacc_id": userId,
                "star_rating": rating
            };
            _this.http.post(_this.APIBaseUrl + 'api/apply_functionality/save_service_rating', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.shortlistedCandidateListAPI = function (uacc_id, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/search_shortlisted_candidated', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.searchResumesResultAPI = function (keywords, designation, min_experience, max_experience, currency, annual_ctc_from, annual_ctc_to, disability_id, location, offset, uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            if (currency == undefined || currency == null) {
                currency = "";
            }
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "keywords": keywords,
                "designation": designation,
                "min_experience": min_experience,
                "max_experience": max_experience,
                "currency": currency,
                "annual_ctc_from": annual_ctc_from,
                "annual_ctc_to": annual_ctc_to,
                "disability_id": disability_id,
                "location": location,
                "offset": offset,
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/candidate_list', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Function for delete employer job detail
    DataservicesService.prototype.deleteEmployerJobDetailAPI = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "id": id
            };
            _this.http.post(_this.APIBaseUrl + 'api/post_functionality/delete_post_job', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Function for employer job detail
    DataservicesService.prototype.getEmployerJobDetailAPI = function (id, uacc_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "id": id,
                "uacc_id": uacc_id
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/job_details', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.resumeDetailAPI = function (resumeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": localStorage.getItem("users_id"),
                "id": resumeId,
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/individual_seeker_details', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //save and delete resume :employer
    DataservicesService.prototype.saveRemoveResumeAPI = function (uacc_id, seeker_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "seeker_id": seeker_id,
            };
            _this.http.post(_this.APIBaseUrl + 'api/apply_functionality/save_resume', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getJobListingAPI = function (uacc_id, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": uacc_id,
                "offset": offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/job_listing', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Raised a query on job with email send functionality (Seeker to Employer)
    DataservicesService.prototype.raiseQuery = function (JobId, personName, emailId, jobTitle, comment, userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "id": JobId,
                "person_name": personName,
                "email": emailId,
                "name": jobTitle,
                "comment": comment,
                "uacc_id": userId
            };
            _this.http.post(_this.APIBaseUrl + 'api/apply_functionality/save_job_query', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Get list of raised a query on individual job
    DataservicesService.prototype.getQueryRaisedDataAPI = function (id, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "id": id
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/seeker_raised_query_list', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    // Method for set global variable for all listing pages
    DataservicesService.prototype.globalOffset = function () {
        return 10;
    };
    DataservicesService.prototype.postSPReviewCommentsList = function (id, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                'id': id,
                'offset': offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/service_comment_list', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.postSPRatingList = function (id, offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                'id': id,
                'offset': offset
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/service_rating_list', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Get Success Stories
    DataservicesService.prototype.getsuccessStory = function (offset, userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                'offset': offset,
                'uacc_id': userId
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/search_success_stories', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Success story details
    DataservicesService.prototype.successStorysDetails = function (successStoryId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                'resource_id': successStoryId
            };
            _this.http.post(_this.APIBaseUrl + 'api/search_functionality/individual_success_story_details', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Add Device Token
    DataservicesService.prototype.postAddDeviceToken = function (device_token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var userId = localStorage.getItem('users_id');
            var postData = {
                "uacc_id": userId,
                "device_token": device_token,
                "device_type": "android"
            };
            _this.http.post(_this.APIBaseUrl + 'api/notification/add_device', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.setDeviceToken = function (device_token) {
        this.device_token = device_token;
    };
    DataservicesService.prototype.getDeviceToken = function () {
        return this.device_token;
    };
    //Delete Device Token
    DataservicesService.prototype.postDeleteDeviceToken = function (device_token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            // headers.set('Auth-Token', localStorage.getItem('auth_token'))
            requestOpt.headers = headers;
            var userId = localStorage.getItem('users_id');
            var postData = {
                "uacc_id": userId,
                "device_token": device_token
            };
            _this.http.post(_this.APIBaseUrl + 'api/notification/delete_device', postData, requestOpt).subscribe(function (response) {
                // alert("response.json().message" + response.json().message)
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Delete Success Story
    DataservicesService.prototype.deleteSuccessStory = function (successStoryId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var userId = localStorage.getItem('');
            var postData = {
                "resource_id": successStoryId,
            };
            _this.http.post(_this.APIBaseUrl + 'api/resource/delete_resource', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getNotificationBadgeCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": localStorage.getItem("users_id")
            };
            _this.http.post(_this.APIBaseUrl + 'api/notification/individual_user_notification_count', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    DataservicesService.prototype.getNotificationListData = function (offset, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": id,
                "offset": offset
            };
            console.log("Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/notification/notification_list', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    // On or Off user notificaitons
    DataservicesService.prototype.getNotificationStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": localStorage.getItem("users_id")
            };
            console.log("Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/notification/settings_status', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    // On or Off user notificaitons
    DataservicesService.prototype.onOffNotification = function (isActive) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestOpt = new RequestOptions();
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');
            headers.set('Auth-Token', localStorage.getItem('auth_token'));
            requestOpt.headers = headers;
            var postData = {
                "uacc_id": localStorage.getItem("users_id"),
                "is_active": isActive
            };
            console.log("Post Data" + postData + "\n" + JSON.stringify(postData));
            _this.http.post(_this.APIBaseUrl + 'api/dashboard_functionality/settings', postData, requestOpt).subscribe(function (response) {
                if (response.json().status == '401') {
                    _this.navigateUnauthoriseUser(response.json().message);
                    return;
                }
                resolve(response.json());
            }, function (error) {
                console.log("Error", error);
                reject(error);
            });
        });
    };
    //Unauthorized User
    DataservicesService.prototype.navigateUnauthoriseUser = function (msg) {
        if (this.isAlertShown) {
            this.isAlertShown = false;
            if (localStorage.getItem('users_id') != null) {
                this.postDeleteDeviceToken(this.getDeviceToken());
            }
            localStorage.clear();
            this.presentAlert('', msg);
            this.navCtrl.navigateRoot('/welcomescreen');
            return;
        }
    };
    DataservicesService.prototype.presentAlert = function (title, message) {
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
    DataservicesService.prototype.setIsAlertShown = function () {
        this.isAlertShown = true;
    };
    DataservicesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http,
            NavController,
            AlertController])
    ], DataservicesService);
    return DataservicesService;
}());
export { DataservicesService };
//# sourceMappingURL=dataservices.service.js.map