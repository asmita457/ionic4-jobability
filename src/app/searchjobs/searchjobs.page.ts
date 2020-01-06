import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Location } from '@angular/common';
import { IonInfiniteScroll } from '@ionic/angular';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-searchjobs',
  templateUrl: './searchjobs.page.html',
  styleUrls: ['./searchjobs.page.scss'],
})
export class SearchjobsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  freeSearch: any
  uacc_id: any
  offset = 0;
  searchResultLength: any
  searchTitle: any
  location: any
  disability_id = []
  functional_area_id = ""
  industry_id = ""
  currency = ""
  annual_ctc_from = ""
  annual_ctc_to = ""
  min_experience = ""
  max_experience = ""
  getDLLAPIData: any

  currency_list = []
  disability_list = []
  functional_area_list = []
  industry_list = []
  dropDownList = []
  seekerPresentSkillsetArray: any = []
  resultData: any
  FilterSearchResult: any
  showSearchData = true
  filterSearchArray = []
  jobFilterSearch: any
  filterClosed: any
  moreDataAvailable: boolean

  constructor(
    private router: Router,
    private Location: Location,
    private dataServices: DataservicesService,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private platform: Platform,


  ) {
  }

  ngOnInit() {

  }

  ionViewWillEnter() {

    this.presentLoading()
    this.filterSearchArray = [];
    const jobFilterSearch = (this.activatedRoute.snapshot.paramMap.get('advancedFilterSearch'));

    this.freeSearch = localStorage.getItem('freeSearch')
    this.uacc_id = localStorage.getItem('users_id')
    this.filterClosed = localStorage.getItem('filterClosed')


    this.getDDLAPI();
    if (this.uacc_id == '' || this.uacc_id == null || this.uacc_id == undefined || this.uacc_id == 0) {
      this.uacc_id = 0;
    }


    if (jobFilterSearch == null || jobFilterSearch == 'undefined') {
      this.searchTitle = localStorage.getItem('jobtitle')
      this.location = localStorage.getItem('location')
      this.offset = 0;
      this.searchJob(
        this.searchTitle, this.location, this.disability_id,
        this.functional_area_id, this.industry_id, this.currency,
        this.annual_ctc_from, this.annual_ctc_to, this.min_experience,
        this.max_experience, this.offset)

    } else if (this.filterClosed == 'true') {
      this.searchJob(
        this.searchTitle, this.location, this.disability_id,
        this.functional_area_id, this.industry_id, this.currency,
        this.annual_ctc_from, this.annual_ctc_to, this.min_experience,
        this.max_experience, this.offset)

    } else {
      this.jobFilterSearch = JSON.parse(jobFilterSearch);
      this.searchTitle = this.jobFilterSearch.jobTitle
      this.location = this.jobFilterSearch.location
      this.disability_id = this.jobFilterSearch.disability_id
      this.functional_area_id = this.jobFilterSearch.functional_area_id
      this.industry_id = this.jobFilterSearch.industryId
      this.currency = this.jobFilterSearch.Currency
      this.annual_ctc_from = this.jobFilterSearch.CtcFrom
      this.annual_ctc_to = this.jobFilterSearch.CtcTo
      this.min_experience = this.jobFilterSearch.minExperience
      this.max_experience = this.jobFilterSearch.maxExperience
      this.offset = 0;
      this.searchJob(
        this.searchTitle, this.location, this.disability_id,
        this.functional_area_id, this.industry_id, this.currency,
        this.annual_ctc_from, this.annual_ctc_to, this.min_experience,
        this.max_experience, this.offset)
    }
  }

  // Function For Load Data While Scrolling
  loadData(event) {

    setTimeout(() => {
      this.offset += this.dataServices.globalOffset()
      if (this.offset > this.searchResultLength) {
        this.moreDataAvailable = false
      } else {
        this.moreDataAvailable = true
        this.searchJob(
          this.searchTitle, this.location, this.disability_id, this.functional_area_id,
          this.industry_id, this.currency, this.annual_ctc_from, this.annual_ctc_to,
          this.min_experience, this.max_experience, this.offset)
        event.target.complete();
      }
    }, 500)
  } //loadData Function Eds Here.


  // Function For Job Search
  search(searchTitle: string) {
    this.location = ""
    this.disability_id = []
    this.functional_area_id = ""
    this.industry_id = ""
    this.currency = ""
    this.annual_ctc_from = ""
    this.annual_ctc_to = ""
    this.min_experience = ""
    this.max_experience = ""
    this.filterSearchArray = [];
    this.offset = 0

    localStorage.setItem('jobtitle', searchTitle);
    this.searchJob(
      searchTitle, this.location, this.disability_id, this.functional_area_id,
      this.industry_id, this.currency, this.annual_ctc_from, this.annual_ctc_to,
      this.min_experience, this.max_experience, this.offset
    )
    // this.searchJob(item, searchBarLocation);
  } //search Function Ends Here.

  // Function For Navigation
  goBack() {
    if (this.freeSearch == null || this.freeSearch == undefined || this.freeSearch == "") {
      this.router.navigate(['/dashboardjobseeker']);
      localStorage.removeItem("advanceFilter");
    }
    else {
      this.router.navigate(['/welcomescreen']);
      localStorage.setItem('freeSearch', "")
      localStorage.removeItem("advanceFilter");

    }
  } //goBack Function Ends Here.

  // This Function Navigate User to job deials page
  jobDescription(item) {
    this.router.navigate(['/searchjobdetail', { jobId: item.id }])
  } //jobDescription Ends Here.



  // Function For Get Dll 
  getDDLAPI() {
    this.dataServices.getSearchFilterDDLAPI().then((result) => {
      this.getDLLAPIData = result
      localStorage.setItem('dllLIsts', JSON.stringify(this.getDLLAPIData));

      this.currency_list = this.getDLLAPIData.currency_list;
      this.disability_list = this.getDLLAPIData.disability_list;
      this.functional_area_list = this.getDLLAPIData.functional_area_list;
      this.industry_list = this.getDLLAPIData.industry_list;

    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  } // getDDLAPI function Ends Here.


  filterSearchResult() {
    this.router.navigate(['/filtersearchresult']);
  }

  searchJob(jobTitle, location, disability_id, functional_area_id, industry_id, currency, annual_ctc_from, annual_ctc_to, min_experience, max_experience, offset) {

    if (this.offset == 0) {
      this.presentLoading();
    }

    this.dataServices.getSearchResultData(
      jobTitle, location, disability_id, functional_area_id, industry_id,
      currency, annual_ctc_from, annual_ctc_to, min_experience, max_experience, offset, this.uacc_id
    ).then((result) => {
      this.resultData = result
      if (this.resultData.status == 1) {
        if (this.offset == 0) {
          this.loadingController.dismiss()
        }
        this.filterSearchArray = this.filterSearchArray.concat(this.resultData.search_result_data)
        this.searchResultLength = this.resultData.search_result_data_total_count;

        if (this.searchResultLength < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }
        if (this.searchResultLength == 0) {
          this.showSearchData = false;
        } else {
          this.showSearchData = true;
        }
      } else {
        this.loadingController.dismiss();
        this.presentAlert('', this.resultData.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))

    })
  }
  //Save Job
  saveJob(jobId) {
    if (this.uacc_id == 0) {
      this.confirmAction()

    } else {
      this.saveOrRemoveJob(jobId)
    }
  }

  //Save Job and Remove Job
  saveOrRemoveJob(jobId) {
    this.presentLoading();
    this.dataServices.saveOrRemoveJob(jobId, this.uacc_id).then((res) => {
      this.resultData = res;
      this.loadingController.dismiss();
      if (this.resultData.status == 1) {
        if (this.resultData.check_flag == 1) {

          for (let i = 0; i < this.filterSearchArray.length; i++) {
            if (this.filterSearchArray[i].id == jobId) {
              this.filterSearchArray[i].job_saved_flag = 1
            }
          }
        } else {

          for (let i = 0; i < this.filterSearchArray.length; i++) {
            if (this.filterSearchArray[i].id == jobId) {
              this.filterSearchArray[i].job_saved_flag = 0
            }
          }
        }
        this.presentAlert("", this.resultData.message);
      } else {
        this.presentAlert("", this.resultData.message);
      }
    }, (error) => {
      this.loadingController.dismiss();
      console.log(error);
    });
  } // Save and Remove Job Functon Ends Here.

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



  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
          // this.closePage();
        }
      }]
    });
    await alert.present();
  }


  async confirmAction() {
    const alert = await this.alertCtrl.create({
      header: '',
      subHeader: 'If you want to save job you have to "Register" or "Login" first.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            localStorage.clear();
            localStorage.setItem('users_id', '0')
            this.router.navigate(['/welcomescreen']);
          }
        }]
    });
    await alert.present();
  }

  ionViewWillLeave() {
    this.loadingController.dismiss();
  }
}
