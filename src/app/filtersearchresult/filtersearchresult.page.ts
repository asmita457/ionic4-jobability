import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-filtersearchresult',
  templateUrl: './filtersearchresult.page.html',
  styleUrls: ['./filtersearchresult.page.scss'],
})
export class FiltersearchresultPage implements OnInit {

  dlllist: any
  avdvanceSearchFields: any
  jobTitle: any
  location: any
  currency_list = []
  disability_list = []
  functional_area_list = []
  industry_list = []
  minExperience: any
  maxExperience: any
  Currency_id: any
  CtcFrom: any
  CtcTo: any
  disability_id = []
  functional_area_id: any
  industry_id: any
  min_experience = []
  max_experience = []
  annual_ctc_from = []
  annual_ctc_to = []
  advancedFilterSearch = []

  constructor(
    private router: Router,
    private Location: Location,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private navController: NavController

  ) {
   
    this.onPageLoad()
  }

  // Loaads Data When Page is called
  onPageLoad() {

    this.dlllist = JSON.parse(localStorage.getItem('dllLIsts'));
    // this.avdvanceSearchFields = JSON.parse(localStorage.getItem('advanceFilter'))

    this.jobTitle = localStorage.getItem('jobtitle') == '' ? '' : localStorage.getItem('jobtitle')
    this.location = localStorage.getItem('location') == '' ? '' : localStorage.getItem('location')

    this.currency_list = this.dlllist.currency_list;
    this.disability_list = this.dlllist.disability_list;
    this.functional_area_list = this.dlllist.functional_area_list;
    this.industry_list = this.dlllist.industry_list;

    // if (this.avdvanceSearchFields != null) {
    //   if (this.avdvanceSearchFields[0] != undefined) {
    //     this.jobTitle = this.avdvanceSearchFields[0].jobTitle == '' ? this.jobTitle : this.avdvanceSearchFields[0].jobTitle
    //     this.location = this.avdvanceSearchFields[0].location
    //     this.minExperience = this.avdvanceSearchFields[0].minExperience
    //     this.maxExperience = this.avdvanceSearchFields[0].maxExperience
    //     this.Currency_id = this.avdvanceSearchFields[0].Currency
    //     this.CtcFrom = this.avdvanceSearchFields[0].CtcFrom
    //     this.CtcTo = this.avdvanceSearchFields[0].CtcTo
    //     this.disability_id = this.avdvanceSearchFields[0].disability_id
    //     // if (this.avdvanceSearchFields[0].disability_id.length != 0) {
    //     //   this.disability_id = this.avdvanceSearchFields[0].disability_id.split(",");
    //     // }
    //     this.functional_area_id = this.avdvanceSearchFields[0].functional_area_id
    //     this.industry_id = this.avdvanceSearchFields[0].industryId
    //   }
    // }

    for (let i = 0; i <= 35; i++) {
      this.min_experience.push(i);
      this.max_experience.push(i);
    }

    for (let i = 10000; i <= 2000000; i = i + 10000) {
      this.annual_ctc_from.push(i);
      this.annual_ctc_to.push(i);
    }
  }
  // Funtoion For Clear Fill Fields
  clearFilterData() {
    this.jobTitle = ""
    this.location = ""
    this.minExperience = ""
    this.maxExperience = ""
    this.Currency_id = ""
    this.CtcFrom = ""
    this.CtcTo = ""
    this.disability_id = []
    this.industry_id = ""
    this.functional_area_id = ""
    localStorage.removeItem("advanceFilter")
  } // clearFilterData Ends Here


  ngOnInit() {

  }

  closePage() {

    localStorage.setItem('filterClosed', 'true')
    this.clearFilterData()
    this.Location.back();
  }

  updateFilterDetail() {

    this.advancedFilterSearch = []
    this.advancedFilterSearch.push({
      jobTitle: this.jobTitle,
      location: this.location,
      minExperience: this.minExperience,
      maxExperience: this.maxExperience,
      Currency: this.Currency_id,
      CtcFrom: this.CtcFrom,
      CtcTo: this.CtcTo,
      disability_id: this.disability_id,
      industryId: this.industry_id,
      functional_area_id: this.functional_area_id,
    });
    localStorage.setItem("advanceFilter", JSON.stringify(this.advancedFilterSearch))
    localStorage.setItem('filterClosed', 'false')

    this.router.navigate(['/searchjobs', { advancedFilterSearch: JSON.stringify(this.advancedFilterSearch[0]) }])
    // this.navController.navigateRoot(['/searchjobs',{advancedFilterSearch: JSON.stringify(this.advancedFilterSearch[0]) }]).then(() => {
    // }); 
  }

  //On Change Methods
  onChangeMinExperience(minYear: any) {
    if (minYear == 35) {
      minYear = minYear - 1
    }
    this.minExperience = minYear;

    this.max_experience = []

    for (let i = this.minExperience + 1; i <= 35; i++) {
      this.max_experience.push(i);
      // this.changeRef.detectChanges();
    }
  }

  onChangeMinSalary(minSalary: any) {
    this.annual_ctc_to = []

    if (minSalary == 2000000) {
      minSalary = minSalary - 10000
    }
    this.CtcFrom = minSalary;

    for (let i = this.CtcFrom + 10000; i <= 2000000; i = i + 10000) {
      this.annual_ctc_to.push(i);
      // this.changeRef.detectChanges();
    }
  }

  // on change functions ends here.

  ionViewWillLeave() {
    this.loadingController.dismiss();
  }
}
