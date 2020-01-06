import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-employerpostjobrequirement',
  templateUrl: './employerpostjobrequirement.page.html',
  styleUrls: ['./employerpostjobrequirement.page.scss'],
})
export class EmployerpostjobrequirementPage implements OnInit {

  DDlListArray: any
  jobrole: any
  skills: any
  candidateprofile: any
  referancecode: any
  postJobDetailArray = []
  functionalArea = []
  industryArray = []
  qualificationArray = []
  industryId: any
  functionalAreaId: any
  qualificationId: any
  qualificationName = []
  functional_area_id = ""
  isIndustrySelected = false
  showJobRoleErrorMsg = false
  jobRoleErrorMsg: any
  showSkillsErrorMsg = false
  skillsErrorMsg: any
  // showReferanceCodeErrorMsg= false
  // referanceCodeErrorMsg: any
  isQualificationSelected = false
  isFunctionalAreaSelected = false
  // showCandidateProfileErrorMsg = false
  // candidateProfileErrorMsg: any
  postJobRequirementArray = []
  backwardJobRequirementFlag = ""
  backPostJobRequirement = []
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.DDlListArray = JSON.parse(localStorage.getItem('employerDDLResponse'));
    this.functionalArea = this.DDlListArray.functional_area_list;
    this.industryArray = this.DDlListArray.industry_list;
    this.qualificationArray = this.DDlListArray.qualification_list
    this.backPostJobRequirement = []
    this.backwardJobRequirementFlag = localStorage.getItem('backwardJobRequirementFlag')
    if (this.backwardJobRequirementFlag == "1") {
      this.backPostJobRequirement = JSON.parse(localStorage.getItem('backPostJobRequirement'))
      console.log('post Job Requirement LocalStorage :', this.backPostJobRequirement)
      this.industryId = this.backPostJobRequirement[0].industryType;
      this.functionalAreaId = this.backPostJobRequirement[0].functionalArea;
      this.qualificationId = this.backPostJobRequirement[0].qualification;
      this.skills = this.backPostJobRequirement[0].skills
      this.jobrole = this.backPostJobRequirement[0].jobRole;
      this.referancecode = this.backPostJobRequirement[0].reference_code;
      this.candidateprofile = this.backPostJobRequirement[0].candidate_profile
      // this.skills = this.backPostJobRequirement[0].skills
    }

    // this.postJobRequirementArray = JSON.parse(localStorage.getItem('postJobRequirementArray'))
    // console.log("postJobRequirementArray:",this.postJobRequirementArray)
    //DDL List response



    const contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
    this.postJobDetailArray = JSON.parse(contactInfo);
    console.log("postJobDetailArray :: " + JSON.stringify(this.postJobDetailArray))
  }

  // nIndustrySelect(item) {
  //   this.industryId = JSON.stringify(item.detail.value.id);
  //   console.log('Industry Type :: ' + JSON.stringify(item.detail.value.id))
  // }

  onFunctionalAreaSelect(item) {
    this.functionalAreaId = []
    this.functionalAreaId = item.detail.value;
    console.log("Functional Area Id:: ", this.functionalAreaId)
    for (let i = 0; i < this.functionalArea.length; i++) {
      if (this.functionalAreaId == "" || this.functionalAreaId == null || this.functionalAreaId == "0" || this.functionalAreaId == undefined) {
        this.isFunctionalAreaSelected = true
      } else {
        this.isFunctionalAreaSelected = false
      }
    }

    this.functional_area_id = JSON.stringify(item.detail.value.id);
    console.log('Fuctional Area :: ' + JSON.stringify(item.detail.value.id))
  }
  selectedIndustryTypeValue(item: any) {

    this.industryId = item.detail.value;
    console.log("industry id:: ", this.industryId)
    for (let i = 0; i < this.industryArray.length; i++) {
      if (this.industryId == "" || this.industryId == null || this.industryId == "0" || this.industryId == undefined) {
        this.isIndustrySelected = true
      } else {
        this.isIndustrySelected = false
      }
    }
  }


  goBack() {
    localStorage.setItem('backwardJobLocationFlag', '1')

    // this.location.back();
    this.router.navigate(['/employerpostjoblocation']);
  }

  employeeJobRoleValidator() {
    if (this.jobrole == "" || this.jobrole == null || this.jobrole == undefined) {
      this.showJobRoleErrorMsg = true
      this.jobRoleErrorMsg = "Please enter job role"
    } else {
      this.showJobRoleErrorMsg = false
    }
  }
  // employeeReferanceCodeValidator(){
  //   if (this.referancecode == "" || this.referancecode == null || this.referancecode == undefined) {
  //     this.showReferanceCodeErrorMsg = true
  //     this.referanceCodeErrorMsg = "Please enter referance code"
  //   } else {
  //     this.showReferanceCodeErrorMsg = false
  //   }
  // }

  // employeeCandidateProfileValidator(){
  //   if (this.candidateprofile == "" || this.candidateprofile == null || this.candidateprofile == undefined) {
  //     this.showCandidateProfileErrorMsg = true
  //     this.candidateProfileErrorMsg = "Please enter candidate profile"
  //   } else {
  //     this.showCandidateProfileErrorMsg = false
  //   }
  // }

  employeeSkillsValidator() {
    if (this.skills == "" || this.skills == null || this.skills == undefined) {
      this.showSkillsErrorMsg = true
      this.skillsErrorMsg = "Please enter skills"
    } else {
      this.showSkillsErrorMsg = false
    }
  }

  selectedQualificationTypeValue(item: any) {

    let arrayLength = item.detail.value.length;
    this.qualificationId = []
    this.qualificationId = item.detail.value;
    //   for (let i = 0; i < arrayLength; i++) {
    // this.qualificationId = []
    // this.qualificationId = item.detail.value;
    //   }
    // this.qualificationId.push(item.detail.value[i].id);
    // this.qualificationName.push(item.detail.value[i].name)
    if (this.qualificationId == "" || this.qualificationId == null || this.qualificationId == "0" || this.qualificationId == undefined) {
      this.isQualificationSelected = true
    } else {
      this.isQualificationSelected = false
    }

    console.log('Qualification Type :: ' + this.qualificationId)
  }


  closePage() {
    this.router.navigate(['/dashboardemployer'])
  }

  nextPage() {

    if ((this.industryId == "" || this.industryId == null || this.industryId == "0" || this.industryId == undefined) &&
      (this.qualificationId == "" || this.qualificationId == null || this.qualificationId == "0" || this.qualificationId == undefined) &&
      (this.functionalAreaId == "" || this.functionalAreaId == null || this.functionalAreaId == "0" || this.functionalAreaId == undefined) &&
      (this.jobrole == "" || this.jobrole == null || this.jobrole == undefined) &&
      (this.referancecode == "" || this.referancecode == null || this.referancecode == undefined) &&
      (this.skills == "" || this.skills == null || this.skills == undefined) &&
      (this.candidateprofile == "" || this.candidateprofile == null || this.candidateprofile == undefined)) {
      this.isIndustrySelected = true
      this.isFunctionalAreaSelected = true;
      this.isQualificationSelected = true
      // this.showCandidateProfileErrorMsg = true
      this.showJobRoleErrorMsg = true
      // this.showReferanceCodeErrorMsg = true
      this.showSkillsErrorMsg = true
      // this.candidateProfileErrorMsg = "Please enter candidate profile"
      this.jobRoleErrorMsg = "Please enter job role"
      // this.referanceCodeErrorMsg = "Please enter referance code"
      this.skillsErrorMsg = "Please enter skills"
    }
    else {
      this.isIndustrySelected = false
      this.isFunctionalAreaSelected = false
      this.isQualificationSelected = false
      // this.showCandidateProfileErrorMsg = false
      this.showJobRoleErrorMsg = false
      // this.showReferanceCodeErrorMsg = false
      this.showSkillsErrorMsg = false

    }
    this.employeeJobRoleValidator();
    // this.employeeReferanceCodeValidator();
    this.employeeSkillsValidator();
    // this.employeeCandidateProfileValidator();

    if (this.functionalAreaId == "" || this.functionalAreaId == null || this.functionalAreaId == "0" || this.functionalAreaId == undefined) {
      this.isFunctionalAreaSelected = true
    } else {
      this.isFunctionalAreaSelected = false
    }


    if (this.qualificationId == "" || this.qualificationId == null || this.qualificationId == "0" || this.qualificationId == undefined) {
      this.isQualificationSelected = true
    } else {
      this.isQualificationSelected = false
    }


    if (this.industryId == "" || this.industryId == null || this.industryId == "0" || this.industryId == undefined) {
      this.isIndustrySelected = true
    } else {
      this.isIndustrySelected = false
    }

    if (this.isIndustrySelected == false &&
      this.isFunctionalAreaSelected == false &&
      this.isQualificationSelected == false &&
      // this.showCandidateProfileErrorMsg == false &&
      this.showJobRoleErrorMsg == false &&
      // this.showReferanceCodeErrorMsg == false &&
      this.showSkillsErrorMsg == false) {
      this.postJobRequirementArray.push(
        {
          industryType: this.industryId,
          functionalArea: this.functionalAreaId,
          jobRole: this.jobrole,
          qualification: this.qualificationId,
          skills: this.skills,
          reference_code: this.referancecode,
          candidate_profile: this.candidateprofile
        }
      )

      localStorage.setItem('backPostJobRequirement', JSON.stringify(this.postJobRequirementArray))
      // this.postJobRequirementArray = this.postJobRequirementArray.concat(this.postJobDetailArray)
      // console.log("post job Requirement array:",this.postJobRequirementArray)
      // localStorage.setItem("JobPostLocalStorageData",JSON.stringify(this.postJobRequirementArray))
      this.router.navigate(['/employerpostjobmanagerresponses'])
    }



    // this.router.navigate(['/employerpostjobmanagerresponses', { item : JSON.stringify(this.postJobRequirementArray)}])
  }

}
