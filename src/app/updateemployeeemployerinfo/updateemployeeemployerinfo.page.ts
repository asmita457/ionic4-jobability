import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-updateemployeeemployerinfo',
  templateUrl: './updateemployeeemployerinfo.page.html',
  styleUrls: ['./updateemployeeemployerinfo.page.scss'],
})
export class UpdateemployeeemployerinfoPage implements OnInit {

  yearIndex: any
  companyID: any
  insystryID: any
  resultData: any
  country_id: any
  selectedCompany: any
  selectedIndustryType: any
  companyname: any
  companyprofile: any

  yrestablishment: any
  weburl: any
  industryTypeArray: any = []
  industryIdArray = []
  companyTypeArray: any = []
  companyIdArray = []
  existingDataResponse: any
  users_id: any
  industry_id: any
  dataArray: any = []
  companytype_id: any
  selectedIndustryTypeIndex: any
  selectedCompanyTypeIndex: any
  companyNameErrorMsg: any;
  yearErrorMsg: any;
  urlErrorMsg: any;
  companyProfileErrorMsg: any

  isIndustrySelected = false
  isCompanySelected = false
  showCompanyNameErrorMsg = false
  showYearErrorMsg = false
  showUrlErrorMsg = false
  showCompanyProfileErrorMsg = false
  yearArray = [];
  ddl_list: any;


  constructor
    (
      private router: Router,
      private alertCtrl: AlertController,
      private activatedRoute: ActivatedRoute,
      public loadingController: LoadingController,
      private dataServices: DataservicesService
    ) {
    this.companyTypeArray = [];
    this.ddl_list = JSON.parse(localStorage.getItem("ddl_list"));
    this.companyTypeArray = this.ddl_list.ddl_list.company_type_list;
    this.industryTypeArray = this.ddl_list.ddl_list.industry_list;

    let currentYear = new Date().getFullYear()
    for (let i = currentYear; i >= 1965; i--) {
      this.yearArray.push(i);
    }
    const contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
    this.dataArray = JSON.parse(contactInfo);
    this.companyname = this.dataArray.empInfo.compnayName;
    this.yrestablishment = this.dataArray.empInfo.year_establishment;
    this.weburl = this.dataArray.empInfo.website_url;
    this.companyprofile = this.dataArray.empInfo.company_description;
    this.selectedIndustryType = this.dataArray.empInfo.industry;
    this.companytype_id = this.dataArray.empInfo.companytype_id;
    this.industry_id = this.dataArray.empInfo.industry_id;
    this.selectedCompanyTypeIndex = this.dataArray.empInfo.companyTypeIndex;
    this.users_id = localStorage.getItem('users_id');
    this.country_id = this.dataArray.country;

  }

  ionViewWillEnter() {


  }

  ngOnInit() {
  }
  closePage() {
    this.router.navigate(['/employerprofile'])
  }

  selectyearestablishment(item: any) {
    this.yrestablishment = item.detail.value
    console.log('year::', this.yrestablishment)
  }

  selectedIndustryTypeValue(item: any) {

    this.industry_id = item.detail.value.id;
    console.log('Selected Industry : ' + this.selectedIndustryType);
    for (let i = 0; i < this.industryTypeArray.length; i++) {
      if (this.industry_id == "" || this.industry_id == null) {
        this.isIndustrySelected = true
      } else {
        this.isIndustrySelected = false
      }
    }
  }

  selectedCompanyTypeValue(item: any) {
    this.companytype_id = item.detail.value.id;
    if (this.companytype_id == "" || this.companytype_id == null || this.companytype_id == "0") {
      this.isCompanySelected = true
    } else {
      this.isCompanySelected = false
    }
  }



  employeeCompanyNameValidator() {

    if (this.companyname == "" || this.companyname == undefined || this.companyname == null) {
      this.showCompanyNameErrorMsg = true;
      this.companyNameErrorMsg = "Please enter company name";
    } else {
      this.showCompanyNameErrorMsg = false;
    }
  }

  employeeCompanyProfileValidator() {
    if (this.companyprofile == "" || this.companyprofile == undefined || this.companyprofile == null) {
      this.showCompanyProfileErrorMsg = true;
      this.companyProfileErrorMsg = "Please enter company description";
    } else {
      this.showCompanyProfileErrorMsg = false;
    }
  }

  employeeCompanyYearValidator(item: any) {

    this.yrestablishment = item.detail.value
    console.log('year::', this.yrestablishment)
    if (this.yrestablishment == "" || this.yrestablishment == undefined || this.yrestablishment == null) {
      this.showYearErrorMsg = true;
      // this.yearErrorMsg = "Please enter year";
    } else {
      this.showYearErrorMsg = false;
    }
  }

  employeeCompanyUrlValidator() {
    if (this.weburl == '' || this.weburl == undefined || this.weburl == null) {
      this.showUrlErrorMsg = true;
      this.urlErrorMsg = "Please enter website URL";
    } else {
      this.showUrlErrorMsg = false;
    }

    if (this.showUrlErrorMsg != true) {
      if (/^((https?|ftp|smtp):\/\/)?[a-zA-Z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(this.weburl) == false) {
        this.showUrlErrorMsg = true
        this.urlErrorMsg = 'Please enter valid website URL'
      } else {
        this.showUrlErrorMsg = false
      }
    }
  }

  updateEmployerDetail() {
    if ((this.companyname == "" || this.companyname == null || this.companyname == undefined) &&
      (this.yrestablishment == "" || this.yrestablishment == null || this.yrestablishment == undefined || this.yrestablishment == 0) &&
      (this.weburl == "" || this.weburl == null || this.weburl == undefined) &&
      (this.industry_id == "0" || this.industry_id == null || this.industry_id == undefined) &&
      (this.companytype_id == "0" || this.companytype_id == null || this.companytype_id == undefined) &&
      (this.companyprofile == "" || this.companyprofile == null || this.companyprofile == undefined)) {

      this.showCompanyNameErrorMsg = true
      this.companyNameErrorMsg = "Please enter name"
      this.isCompanySelected = true;
      this.showYearErrorMsg = true
      this.isIndustrySelected = true
      this.showUrlErrorMsg = true
      this.urlErrorMsg = "Please enter website URL";
      this.showCompanyProfileErrorMsg = true
      this.companyProfileErrorMsg = "Please enter company description";
    }
    else {
      this.showCompanyNameErrorMsg = false
      this.isCompanySelected = false
      this.isIndustrySelected = false
      this.showUrlErrorMsg = false
      this.showYearErrorMsg = false
      this.showCompanyProfileErrorMsg = false
    }

    if (this.industry_id == "" || this.industry_id == null || this.industry_id == "0") {
      this.isIndustrySelected = true
    } else {
      this.isIndustrySelected = false
    }

    if (this.companytype_id == "" || this.companytype_id == "" || this.companytype_id == "0") {
      this.isCompanySelected = true
    } else {
      this.isCompanySelected = false
    }

    if (this.companyname == "" || this.companyname == undefined || this.companyname == null) {
      this.showCompanyNameErrorMsg = true;
      this.companyNameErrorMsg = "Please enter company name";
    } else {
      this.showCompanyNameErrorMsg = false;
    }

    if (this.yrestablishment == "" || this.yrestablishment == undefined || this.yrestablishment == null || this.yrestablishment == 0) {
      this.showYearErrorMsg = true;
      // this.yearErrorMsg = "Please enter year";
    } else {
      this.showYearErrorMsg = false;
    }

    // if (this.weburl == "" || this.weburl == undefined || this.weburl == null) {
    //   this.showUrlErrorMsg = true;
    //   this.urlErrorMsg = "Please enter website url";
    // } else {
    //   this.showUrlErrorMsg = false;
    // }
    this.employeeCompanyUrlValidator()

    if (this.companyprofile == "" || this.companyprofile == undefined || this.companyprofile == null) {
      this.showCompanyProfileErrorMsg = true;
      this.companyProfileErrorMsg = "Please enter company description";
    } else {
      this.showCompanyProfileErrorMsg = false;
    }

    if (this.showCompanyProfileErrorMsg == false &&
      this.isIndustrySelected == false &&
      this.isCompanySelected == false &&
      this.showCompanyNameErrorMsg == false &&
      this.showYearErrorMsg == false &&
      this.showUrlErrorMsg == false) {
      this.presentLoading();
      this.dataServices.updateEmployeeEmployerInfoAPI(this.companyname, this.companytype_id, this.yrestablishment, this.industry_id, this.weburl, this.companyprofile, this.users_id).then((res) => {
        this.existingDataResponse = res;
        console.log('responsre::: ' + this.existingDataResponse)
        if (this.existingDataResponse.status == 1) {
          console.log('Update Employer Information :: ' + this.existingDataResponse)
          this.presentAlert(this.existingDataResponse.message, '');
          // this.closePage()
        }
        else {
          this.presentAlert(this.existingDataResponse.message, '');
        }

      }, (error) => {
        alert(error);
      });
    }
  }

  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
          this.closePage();
        }
      }]
    });
    await alert.present();
  }

  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 500);

  }//Display Function Ends Here 
}
