import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { concat } from 'rxjs/internal/observable/concat';
import { NavController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  APIBaseUrl = 'http://www.jobability.org/'
  device_token: string = ''

  isAlertShown: boolean = true
  sideMenu = []

  constructor(public http: Http,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
  ) { }

  // Function to get disability list
  getPartnerList() {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      // headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers

      this.http.get(this.APIBaseUrl + 'api/registration/partner_list', requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getEmployerData(uacc_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))


      requestOpt.headers = headers
      var postData = {
        "uacc_id": uacc_id
      }
      this.http.post(this.APIBaseUrl + 'api/profile/get_employer_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getSearchResultData(
    search_key_words, search_location, disability_id, functional_area_id,
    industry_id, currency, annual_ctc_from, annual_ctc_to, min_experience,
    max_experience, offset, uacc_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()

      if (currency == undefined || currency == null) {
        currency = ""
      }
      headers.set('Content-Type', 'application/json')
      if (localStorage.getItem('users_id') != null) {
        headers.set('Auth-Token', localStorage.getItem('auth_token'))
      }


      requestOpt.headers = headers
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
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/search_job', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getDetailInfoOfJob(jobId, userId) {

    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      if (localStorage.getItem('users_id') != null) {
        headers.set('Auth-Token', localStorage.getItem('auth_token'))
      }

      requestOpt.headers = headers
      var postData = {
        "id": jobId,
        "uacc_id": userId
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/job_details', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  jobApplyAPI(uacc_id, job_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": uacc_id,
        "job_id": job_id
      }
      this.http.post(this.APIBaseUrl + 'api/apply_functionality/job_apply', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })

  }


  getJobsCountData(uacc_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": uacc_id
      }
      this.http.post(this.APIBaseUrl + 'api/dashboard_functionality/seeker_dashboard_details', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getSavedJobsData(uacc_id, offset) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": uacc_id,
        "offset": offset
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/save_job_details_list', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getRecommendedJobsData(uacc_id, offset) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": uacc_id,
        "offset": offset
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/recommended_job_details_list', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getSeekerData(uacc_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": uacc_id
      }
      this.http.post(this.APIBaseUrl + 'api/profile/get_seeker_info', postData, requestOpt).subscribe((response) => {

        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  updateServiceproviderContactInfoAPI(contactDetailsform) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
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
      }

      this.http.post(this.APIBaseUrl + 'api/profile/update_service_provider_contact_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json());
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


  getServiceProviderData() {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": localStorage.getItem("users_id")
      }
      this.http.post(this.APIBaseUrl + 'api/profile/get_service_provider_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getDDLAPI(country_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "country_id": country_id
      }
      this.http.post(this.APIBaseUrl + 'api/profile/ddl_data_for_seeker_profile', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


  getSearchFilterDDLAPI() {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      if (localStorage.getItem('users_id') != null) {
        headers.set('Auth-Token', localStorage.getItem('auth_token'))
      }
      requestOpt.headers = headers

      this.http.get(this.APIBaseUrl + 'api/common_ddlfill/ddlfill_industry_disability_funcational_area_currency', requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


  updateContactInfoAPI(formDeatails, uacc_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
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
      }
      this.http.post(this.APIBaseUrl + 'api/profile/update_seeker_contact_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


  updateEmployeeContactInfoAPI(first_name, designation, business_email, phone, mobile, address, city, state, country, zip_code, email, uacc_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
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
      }
      this.http.post(this.APIBaseUrl + 'api/profile/update_employer_contact_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


  updateEmployeeEmployerInfoAPI(company_name, companytype_id, year_establishment, industry_id, website_url, company_description, uacc_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      // headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "company_name": company_name,
        "companytype_id": companytype_id,
        "year_establishment": year_establishment,
        "industry_id": industry_id,
        "website_url": website_url,
        "company_description": company_description,
        "uacc_id": uacc_id
      }
      this.http.post(this.APIBaseUrl + 'api/profile/update_employer_organization_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


  getCountryArrayAPI() {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      this.http.post(this.APIBaseUrl + 'api/profile/country', requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  updatePresentSkillSetAPI(skillSetForm, industryName, functionalAreaName) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "industry": industryName,
        "industry_id": skillSetForm.industry,
        "functional_area": functionalAreaName,
        "functional_area_id": skillSetForm.functionalArea,
        "years_total_experience": skillSetForm.year,
        "months_total_experience": skillSetForm.month,
        "key_skill": skillSetForm.KeySkills,
        "uacc_id": localStorage.getItem("users_id")
      }
      this.http.post(this.APIBaseUrl + 'api/profile/update_seeker_skill_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }




  updateWorkExperienceInfoAPI(current_employer, companyOrganisation, designation, selectedMonthFromId, selectedYearFrom, selectedMonthToId, selectedYearTo, reasonForLeaving, id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers

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
      }
      this.http.post(this.APIBaseUrl + 'api/profile/update_seeker_work_experience_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  } // Update Work Experience Function Ends Here.

  addWorkExperienceInfoAPI(current_employer, companyOrganisation, designation, selectedMonthFromId, selectedYearFrom, selectedMonthToId, selectedYearTo, reasonForLeaving) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers

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
      }
      this.http.post(this.APIBaseUrl + 'api/profile/add_seeker_work_experience_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //Update Education
  updateEducationInfoAPI(educationForm, qualificationName, instituteUniversityName, id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
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
      }
      this.http.post(this.APIBaseUrl + 'api/profile/update_seeker_education_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }  //Update Education

  addEducationInfoAPI(educationForm, qualification_name, institute_university_name) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
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
      }
      this.http.post(this.APIBaseUrl + 'api/profile/add_seeker_education_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  // Function For Email Verification 
  emailVerification() {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      // headers.append('Access-Control-Allow-Origin' , '*');
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        'uacc_id': localStorage.getItem("users_id"),

      }
      this.http.post(this.APIBaseUrl + 'api/profile/send_email_verify', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  } // Function For Email Verification Ends Here.

  //Delete Work Experience
  deleteWorkExperience(id) {

    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      // headers.append('Access-Control-Allow-Origin' , '*');
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        'id': id,
      }
      this.http.post(this.APIBaseUrl + 'api/profile/delete_seeker_work_experience_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })

  } //Delete Work Experience Ends Here.


  //Delete Work Experience
  deleteEducation(id) {

    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      // headers.append('Access-Control-Allow-Origin' , '*');
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        'id': id,
      }
      this.http.post(this.APIBaseUrl + 'api/profile/delete_seeker_education_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })

  } //Delete Work Experience Ends Here.



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

  updateServiceproviderOrganisationInfoAPI(postData) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))
      requestOpt.headers = headers
      this.http.post(this.APIBaseUrl + 'api/profile/update_service_provider_organization_info', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //Function For Get Application Details 
  applicationDetails(id, offset) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "vacancy_id": id,
        "offset": offset
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/search_application_apply_details', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  //Application Details Function Ends Here.

  //upload resume
  uploadResume(resumePath: string) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'multipart/form-data')
      requestOpt.headers = headers
      var postData = {
        "attach_cv": resumePath
      }
      this.http.post(this.APIBaseUrl + 'api/profile/update_seeker_resume', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //get Employer Dashboard Details
  getEmployerDashBoardDetails(offset) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": localStorage.getItem("users_id"),
        "offset": offset
      }
      this.http.post(this.APIBaseUrl + 'api/dashboard_functionality/employer_dashboard_details', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  // Save or Remove Job



  saveOrRemoveJob(jobId, userId) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": userId,
        "job_id": jobId
      }
      this.http.post(this.APIBaseUrl + 'api/apply_functionality/save_job', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  postJobDataAPI(job_name, job_description, disability_id, min_experience,
    max_experience, ctc_currency, annual_ctc_from, annual_ctc_to, hide_salary,
    number_of_vacancies, last_date_apply, country_id, state_city_id, industry_id, functional_area_id,
    job_role, qualification_id, key_skills, applicants_display, tab_show, from_date, to_date, start_time,
    end_time, show_contact, reference_code, candidate_profile, uacc_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()

      if (ctc_currency == undefined || ctc_currency == null) {
        ctc_currency = ""
      }
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
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
      }
      console.log("Search Post Data: " + postData + "\n" + JSON.stringify(postData))
      this.http.post(this.APIBaseUrl + 'api/post_functionality/job_post_deatils', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })

  }


  //Combine response API for state and city
  getStateAndCityDDLAPI(uacc_id, countryID) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": uacc_id,
        "country_id": countryID
      }
      this.http.post(this.APIBaseUrl + 'api/common_ddlfill/state_city', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }



  trackjoblist(users_id, offset) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": users_id,
        "offset": offset
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/job_applied_list', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  updateServicesContactinfo(postData: any) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()


      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers

      console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData))
      this.http.post(this.APIBaseUrl + 'api/post_functionality/update_service_post_contact', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  changePassword(postData: any) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()


      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers

      console.log("Change Password" + postData + "\n" + JSON.stringify(postData))
      this.http.post(this.APIBaseUrl + 'api/change_password/user_change_password', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  updateServicesDetail(postData: any) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData))
      this.http.post(this.APIBaseUrl + 'api/post_functionality/update_post_service_details', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  updateServicesLocation(postData: any) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData))
      this.http.post(this.APIBaseUrl + 'api/post_functionality/update_service_post_location', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  postServices(postData: any) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()

      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers

      console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData))
      this.http.post(this.APIBaseUrl + 'api/post_functionality/service_post_details', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getCompanyLogoInformation(postData: any) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()


      headers.set('Content-Type', 'application/json')
      // headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers

      console.log("Post Services Post Data" + postData + "\n" + JSON.stringify(postData))
      this.http.post(this.APIBaseUrl + 'api/profile/profile_photo_details', postData, requestOpt).subscribe((response) => {
        // if (response.json().status == '401') {
        //   this.navigateUnauthoriseUser(response.json().message)
        // }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  //get Service Provider Details
  getSPDashBoardDetails(offset) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "id": localStorage.getItem("users_id"),
        "offset": offset,

      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/my_services_list', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  //get Service Provider Details
  getSPIndividualDetails(id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "id": id
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/individual_my_services_details', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  deleteService(id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "id": id
      }
      this.http.post(this.APIBaseUrl + 'api/post_functionality/delete_post_service', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  getStateCountryList(country_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": localStorage.getItem("users_id"),
        "country_id": country_id
      }
      this.http.post(this.APIBaseUrl + 'api/common_ddlfill/state_city', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getServiceListForJobSeeker(keywords, disability_id, offset) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "keywords": keywords,
        "disability_id": disability_id,
        "offset": offset
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/search_services', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  // Function to get disability list
  getDisabilityList() {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers

      this.http.get(this.APIBaseUrl + 'api/profile/disability', requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


  //get jobseeker service  Details
  getJobSeekerServiceDetails(jobId, userId) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "id": jobId,
        "uacc_id": userId,
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/individual_services_details_for_seeker', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //get jobseeker service  Details
  commentOnService(serviceId, comment, userId, ) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "id": serviceId,
        "comment": comment,
        "uacc_id": userId,
      }
      this.http.post(this.APIBaseUrl + 'api/apply_functionality/save_contact', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


  //get jobseeker service  Details
  rateForService(serviceId, serviceProviderId, userId, rating) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "id": serviceId,
        "service_provider_id": serviceProviderId,
        "uacc_id": userId,
        "star_rating": rating
      }
      this.http.post(this.APIBaseUrl + 'api/apply_functionality/save_service_rating', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  shortlistedCandidateListAPI(uacc_id, offset) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": uacc_id,
        "offset": offset
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/search_shortlisted_candidated', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  searchResumesResultAPI(keywords, designation, min_experience, max_experience, currency, annual_ctc_from, annual_ctc_to, disability_id, location, offset, uacc_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()

      if (currency == undefined || currency == null) {
        currency = ""
      }
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
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
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/candidate_list', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //Function for delete employer job detail
  deleteEmployerJobDetailAPI(id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "id": id
      }
      this.http.post(this.APIBaseUrl + 'api/post_functionality/delete_post_job', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //Function for employer job detail
  getEmployerJobDetailAPI(id, uacc_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "id": id,
        "uacc_id": uacc_id
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/job_details', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  resumeDetailAPI(resumeId) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": localStorage.getItem("users_id"),
        "id": resumeId,

      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/individual_seeker_details', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //save and delete resume :employer
  saveRemoveResumeAPI(uacc_id, seeker_id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": uacc_id,
        "seeker_id": seeker_id,

      }
      this.http.post(this.APIBaseUrl + 'api/apply_functionality/save_resume', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getJobListingAPI(uacc_id, offset) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": uacc_id,
        "offset": offset
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/job_listing', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //Raised a query on job with email send functionality (Seeker to Employer)
  raiseQuery(JobId, personName, emailId, jobTitle, comment, userId) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "id": JobId,
        "person_name": personName,
        "email": emailId,
        "name": jobTitle,
        "comment": comment,
        "uacc_id": userId
      }
      this.http.post(this.APIBaseUrl + 'api/apply_functionality/save_job_query', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //Get list of raised a query on individual job
  getQueryRaisedDataAPI(id, offset) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "id": id
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/seeker_raised_query_list', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  // Method for set global variable for all listing pages
  globalOffset() {
    return 10
  }

  postSPReviewCommentsList(id: string, offset: string) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        'id': id,
        'offset': offset
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/service_comment_list', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  postSPRatingList(id: string, offset: string) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        'id': id,
        'offset': offset
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/service_rating_list', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //Get Success Stories
  getsuccessStory(offset: string, userId) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        'offset': offset,
        'uacc_id': userId
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/search_success_stories', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  //Success story details
  successStorysDetails(successStoryId: string) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        'resource_id': successStoryId
      }
      this.http.post(this.APIBaseUrl + 'api/search_functionality/individual_success_story_details', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //Add Device Token
  postAddDeviceToken(device_token: string) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      let userId = localStorage.getItem('users_id')
      var postData = {
        "uacc_id": userId,
        "device_token": device_token,
        "device_type": "android"
      }
      this.http.post(this.APIBaseUrl + 'api/notification/add_device', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  setDeviceToken(device_token: string) {
    this.device_token = device_token
  }

  getDeviceToken() {
    return this.device_token
  }

  //Delete Device Token
  postDeleteDeviceToken(device_token: string) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      // headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      let userId = localStorage.getItem('users_id')
      var postData = {
        "uacc_id": userId,
        "device_token": device_token
      }
      this.http.post(this.APIBaseUrl + 'api/notification/delete_device', postData, requestOpt).subscribe((response) => {
        // alert("response.json().message" + response.json().message)

        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  //Delete Success Story
  deleteSuccessStory(successStoryId) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      let userId = localStorage.getItem('')
      var postData = {
        "resource_id": successStoryId,
      }
      this.http.post(this.APIBaseUrl + 'api/resource/delete_resource', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getNotificationBadgeCount() {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": localStorage.getItem("users_id")
      }
      this.http.post(this.APIBaseUrl + 'api/notification/individual_user_notification_count', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getNotificationListData(offset, id) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": id,
        "offset": offset
      }
      console.log("Post Data" + postData + "\n" + JSON.stringify(postData))
      this.http.post(this.APIBaseUrl + 'api/notification/notification_list', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  // On or Off user notificaitons

  getNotificationStatus() {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": localStorage.getItem("users_id")
      }
      console.log("Post Data" + postData + "\n" + JSON.stringify(postData))
      this.http.post(this.APIBaseUrl + 'api/notification/settings_status', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  // On or Off user notificaitons

  onOffNotification(isActive) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Auth-Token', localStorage.getItem('auth_token'))

      requestOpt.headers = headers
      var postData = {
        "uacc_id": localStorage.getItem("users_id"),
        "is_active": isActive
      }
      console.log("Post Data" + postData + "\n" + JSON.stringify(postData))
      this.http.post(this.APIBaseUrl + 'api/dashboard_functionality/settings', postData, requestOpt).subscribe((response) => {
        if (response.json().status == '401') {
          this.navigateUnauthoriseUser(response.json().message)
          return
        }
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }
  //Unauthorized User
  navigateUnauthoriseUser(msg) {
    if (this.isAlertShown) {
      this.isAlertShown = false
      if (localStorage.getItem('users_id') != null) {
        this.postDeleteDeviceToken(this.getDeviceToken())
      }
      localStorage.clear()
      this.presentAlert('', msg)
      this.navCtrl.navigateRoot('/welcomescreen');
      return
    }
  }

  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      // buttons: ['OK']
      buttons: [
        {
          text: 'OK',
          handler: () => {

          }
        }
      ]
    });
    await alert.present();
  }

  setIsAlertShown() {
    this.isAlertShown = true
  }

  setSideMenuItems(sideMenu) {
    this.sideMenu = sideMenu
  }

  getSideMenuItems() {
    return this.sideMenu
  }
}



