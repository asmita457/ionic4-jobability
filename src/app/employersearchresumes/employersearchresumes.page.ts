import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employersearchresumes',
  templateUrl: './employersearchresumes.page.html',
  styleUrls: ['./employersearchresumes.page.scss'],
})
export class EmployersearchresumesPage implements OnInit {




  empSearchResumesArray = []
  jobApplicationCount: any
  jobApplication: any
  showJobApplications = true
  searchResumeLength: any
  searchResumesResponse: any
  searchTitle: any
  minExperience: number
  maxExperience: number
  currency: any
  annual_ctc_from: number
  annual_ctc_to: number
  disability_id = []
  location: any
  offset = 0;
  uacc_id: any
  searchResumeDataFlag: any
  moreDataAvailable: boolean
  profile_photo_path: any
  resumeFilterSearch: any
  MaxExp: any
  MinExp: any
  MaxSal: any
  designation: any
  MinSal: any

  constructor(
    public loadingController: LoadingController,
    private dataServices: DataservicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.uacc_id = localStorage.getItem('users_id')
    this.checkSearchData();

  }

  checkSearchData() {

    this.searchResumeDataFlag = localStorage.getItem('searchResumeDataFlag')
    this.resumeFilterSearch = JSON.parse(this.activatedRoute.snapshot.paramMap.get('advancedFilterSearch'));

    if (this.resumeFilterSearch != null || this.resumeFilterSearch != undefined || this.searchResumeDataFlag == '2') {
      this.searchTitle = this.resumeFilterSearch.jobTitle
      this.designation = this.resumeFilterSearch.designation
      this.minExperience = this.resumeFilterSearch.minExperience
      this.maxExperience = this.resumeFilterSearch.maxExperience
      this.currency = this.resumeFilterSearch.Currency
      this.annual_ctc_from = this.resumeFilterSearch.CtcFrom
      this.annual_ctc_to = this.resumeFilterSearch.CtcTo
      this.disability_id = this.resumeFilterSearch.disability_id
      this.location = this.resumeFilterSearch.location
      this.offset = 0;
      this.uacc_id = this.resumeFilterSearch.uacc_id
      this.empSearchResumesArray = []
      this.getSearchResumesResult(
        this.searchTitle,this.designation, this.minExperience,
        this.maxExperience, this.currency, this.annual_ctc_from, this.annual_ctc_to,
        this.disability_id, this.location, this.offset, this.uacc_id)
    }

    if (this.searchResumeDataFlag == '0') {
      this.searchTitle = ""
      this.designation = ""
      this.minExperience = null
      this.maxExperience = null
      this.currency = ""
      this.annual_ctc_from = null
      this.annual_ctc_to = null
      this.disability_id = []
      this.location = ""
      this.offset = 0;
      this.uacc_id = this.uacc_id
      this.empSearchResumesArray = []
      if (this.minExperience == null && this.maxExperience == null && this.annual_ctc_from == null && this.annual_ctc_to == null) {
        this.MinExp = ""
        this.MaxExp = ""
        this.MaxSal = ""
        this.MinSal = ""
        this.getSearchResumesResult(this.searchTitle,this.designation, this.MinExp, this.MaxExp, this.currency, this.MinSal, this.MaxSal,
          this.disability_id, this.location, this.offset, this.uacc_id);
      }
      else {
        this.getSearchResumesResult(this.searchTitle,this.designation, this.minExperience, this.maxExperience, this.currency, this.annual_ctc_from, this.annual_ctc_to,
          this.disability_id, this.location, this.offset, this.uacc_id);
      }

    }

    if (this.searchResumeDataFlag == '1') {
      this.searchTitle = localStorage.getItem('jobtitle')
      this.empSearchResumesArray = []
      this.search(this.searchTitle);
    }
  }

  search(searchTitle: string) {
    this.empSearchResumesArray = []

    localStorage.setItem('searchResumeDataFlag', '1');
    localStorage.setItem('jobtitle', searchTitle);
    this.searchTitle = searchTitle
    this.designation = ""
    this.minExperience = null
    this.maxExperience = null
    this.currency = ""
    this.annual_ctc_from = null
    this.annual_ctc_to = null
    this.disability_id = []
    this.location = ""
    this.offset = 0
    this.uacc_id = this.uacc_id

    if (this.minExperience == null && this.maxExperience == null && this.annual_ctc_from == null && this.annual_ctc_to == null) {
      this.MinExp = ""
      this.MaxExp = ""
      this.MaxSal = ""
      this.MinSal = ""
      this.getSearchResumesResult(
        this.searchTitle,this.designation, this.MinExp, this.MaxExp, this.currency, this.MinSal, this.MaxSal,
        this.disability_id, this.location, this.offset, this.uacc_id
      )
    }
    else {
      this.getSearchResumesResult(
        this.searchTitle,this.designation, this.minExperience, this.maxExperience, this.currency, this.annual_ctc_from, this.annual_ctc_to,
        this.disability_id, this.location, this.offset, this.uacc_id
      )
    }


    localStorage.setItem('jobtitle', searchTitle);

    // this.searchJob(item, searchBarLocation);
  } //search Function Ends Here.


  goBack() {
    this.router.navigate(['/dashboardemployer'])

  }

  filterSearchResumesResult() {
    this.router.navigate(['/employersearchresumesfilter'])
  }

  getSearchResumesResult(keywords,designation, min_experience, max_experience, currency, annual_ctc_from, annual_ctc_to, disability_id, location, offset, uacc_id) {
    if (this.offset == 0) {
      this.presentLoading();
    }
    // this.empSearchResumesArray = []
    // this.presentLoading();
    this.dataServices.searchResumesResultAPI(keywords,designation, min_experience, max_experience, currency, annual_ctc_from, annual_ctc_to, disability_id, location, offset, uacc_id).then((result) => {
      this.searchResumesResponse = result;
      if (this.searchResumesResponse.status == 1) {

        this.empSearchResumesArray = this.empSearchResumesArray.concat(this.searchResumesResponse.candidate_list)
        this.searchResumeLength = this.searchResumesResponse.total_candidate_count
        console.log('search resume data:', this.searchResumesResponse)

        if (this.offset == 0 && this.searchResumeLength > this.dataServices.globalOffset()) {
          this.loadingController.dismiss()
          // this.offset = 1
        }
        if (this.searchResumeLength < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }

        if (this.searchResumeLength != 0) {
          this.showJobApplications = true;
        } else {
          this.showJobApplications = false;
        }

      } else {
        if (this.offset == 0) {
          this.loadingController.dismiss();
        }
        alert(this.searchResumesResponse.message);

      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }


  // Function For Load Data While Scrolling
  loadData(event) {
    setTimeout(() => {
      this.offset += this.dataServices.globalOffset();
      if (this.offset > this.searchResumeLength) {
        this.moreDataAvailable = false
      } else {
        this.moreDataAvailable = true
        if (this.minExperience == null && this.maxExperience == null && this.annual_ctc_from == null && this.annual_ctc_to == null) {
          this.MinExp = ""
          this.MaxExp = ""
          this.MaxSal = ""
          this.MinSal = ""
          this.getSearchResumesResult(
            this.searchTitle,this.designation, this.MinExp, this.MaxExp, this.currency, this.MinSal, this.MaxSal,
            this.disability_id, this.location, this.offset, this.uacc_id
          )
        }
        else {
          this.getSearchResumesResult(
            this.searchTitle,this.designation, this.minExperience, this.maxExperience, this.currency, this.annual_ctc_from, this.annual_ctc_to,
            this.disability_id, this.location, this.offset, this.uacc_id
          )
        }
        event.target.complete();
        // this.checkSearchData();
      }
    }, 100)
  } //loadData Function Eds Here.


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
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);

  }//Display Function Ends Here 


  candidateProfileDetails(item) {
    let resumeId = item.id;

    this.router.navigate(['/empcandidateprofile', { resumeId: resumeId }])
  }
}