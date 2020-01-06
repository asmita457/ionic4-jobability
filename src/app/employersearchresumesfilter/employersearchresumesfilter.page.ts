import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employersearchresumesfilter',
  templateUrl: './employersearchresumesfilter.page.html',
  styleUrls: ['./employersearchresumesfilter.page.scss'],
})
export class EmployersearchresumesfilterPage implements OnInit {


  jobtitle = ""
  location = "" 
  designation = ''
  minExperience = null
  maxExperience = null
  currency = ""
  CtcFrom = null
  CtcTo = null
  Disability = []
  uacc_id: any

  ddlListResponse: any
  currncy_list = []
  disability_list = []
  min_experience = []
  max_experience = []
  annual_ctc_from = []
  annual_ctc_to = []
  disability_id = []
  // Currency_id = 
  advancedFilterSearch = []

  constructor(private router: Router,
    private changeRef: ChangeDetectorRef,
  ) {
   
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    for (let i = 0; i <= 40; i++) {
      this.min_experience.push(i);
      this.max_experience.push(i);
    }

    for (let i = 10000; i <= 2000000; i = i + 10000) {
      this.annual_ctc_from.push(i);
      this.annual_ctc_to.push(i);
    }

    this.uacc_id = localStorage.getItem('users_id')

    this.ddlListResponse = JSON.parse(localStorage.getItem('employerDDLResponse'))
    console.log('ddl lidt:', this.ddlListResponse)
    this.currncy_list = this.ddlListResponse.currency_list
    this.disability_list = this.ddlListResponse.disability_list
    console.log('Disability list:', this.disability_list)
    console.log('Currency list:', this.currncy_list)

  }

  // Funtoion For Clear Fill Fields
  clearFilterData() {
    this.jobtitle = ""
    this.location = ""
    this.minExperience = ""
    this.maxExperience = ""
    this.currency = ""
    this.CtcFrom = ""
    this.CtcTo = ""
    this.disability_id = []
    this.designation = ''

  } // clearFilterData Ends Here


  closePage() {
    this.router.navigate(['/employersearchresumes'])
  }


  //On Change Methods
  onChangeMinExperience(item: any) {

    this.minExperience = item.detail.value;
    this.max_experience = []
    for (let i = item.detail.value; i <= 40; i++) {
      this.max_experience.push(i);
      this.changeRef.detectChanges();
    }
  }

  onChangeMaxExperience(item: any) {
    console.log('Max Experience:: ' + JSON.stringify(item.detail.value))
    this.maxExperience = item.detail.value;

  }

  onChangeCurrency(item) {
    this.currency = item.detail.value;
  }
  onChangeMinSalary(item) {
    this.CtcFrom = item.detail.value;
    this.annual_ctc_to = []
    for (let i = item.detail.value; i <= 2000000; i = i + 10000) {
      this.annual_ctc_to.push(i);
      this.changeRef.detectChanges();

    }
  }

  onChangeMaxSalary(item) {
    this.CtcTo = item.detail.value;
  }

  onChangeDisability(item) {
    this.disability_id = [];
    this.disability_id = item.detail.value
    console.log('disability id', this.disability_id)
    // let disability_Array = item.detail.value
    // for (let i = 0; i < disability_Array.length; i++) {
    //   this.disability_id.push(disability_Array[i])
    // }
  }

  // on change functions ends here.


  updateResumeFilterDetail() {

    localStorage.setItem('searchResumeDataFlag', '2')



    this.advancedFilterSearch = []
    this.advancedFilterSearch.push({
      jobTitle: this.jobtitle,
      location: this.location,
      minExperience: this.minExperience,
      maxExperience: this.maxExperience,
      Currency: this.currency,
      CtcFrom: this.CtcFrom,
      CtcTo: this.CtcTo,
      disability_id: this.disability_id,
      uacc_id: this.uacc_id,
      designation : this.designation
    });

    localStorage.setItem('advancedFilterSearch', JSON.stringify(this.advancedFilterSearch))
    // this.router.navigate(['/employersearchresumes'])
    this.router.navigate(['/employersearchresumes', { advancedFilterSearch: JSON.stringify(this.advancedFilterSearch[0]) }])

  }
}
