// import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { NavComponent } from '@ionic/core';
import { NavController } from '@ionic/angular';

@Component({
selector: 'app-employerpostjobdetails',
templateUrl: './employerpostjobdetails.page.html',
styleUrls: ['./employerpostjobdetails.page.scss'],
})
export class EmployerpostjobdetailsPage implements OnInit {


// currencyPreselection = "INR"
Currency_id: any
DDlListArray: any
disabilityArray = []
currencyArray = []
selectedMinExperienceValue: number
selectedMaxExperienceValue: number
ctcFrom = ""
ctcTo = ""
currency_list = []
disability_id = []
min_experience = []
max_experience = []
annual_ctc_from = []
annual_ctc_to = []
disabilityPreselection: any
jobtitle = ""
vacancies = ""
salaryHideShow: boolean
hide_salary = 0;
lastdate = ""
postJobDetail = []
getPrePopulatedDataArray = []
jobdescription = ""
disability_name = [];
prePopulateDisabilityType = []
backwardJobDetailFlag = ""
startLastDate: string
jobDescriptionErrorMsg: any
jobTitleErrorMsg: any
jobLastDateErrorMsg: any

showJobLastDateErrorMsg = false
showJobVacanciesErrorMsg = false
onCurrencyStatusSelect = false
onMaxSalaryStatusSelect = false
onMinSalaryStatusSelect = false
onMaxExperienceStatusSelect = false
onMinExperienceStatusSelect = false
onDisabilityStatusSelect = false
showJobDescriptionErrorMsg = false
showJobTitleErrorMsg = false

myDate: any

jobVacanciErrorMsg: any
backPostJobDetail = []
constructor(
private router: Router,
private changeRef: ChangeDetectorRef,
private activatedRoute: ActivatedRoute,
private navController: NavController
) { }

ngOnInit() {
}
selectedDisabilityServedValue(item: any) {
this.disabilityPreselection = item.detail.value;
console.log('Selected Disability Type ::' + this.disabilityPreselection)

}

ionViewWillEnter() {
// this.myDate = new Date();
this.salaryHideShow = false
this.startLastDate = new Date().toISOString().slice(0, 10);

this.DDlListArray = JSON.parse(localStorage.getItem('employerDDLResponse'));
let jobdetaildata = JSON.parse(localStorage.getItem('postJobDetail'))
console.log('test detail data:', jobdetaildata)
this.currencyArray = this.DDlListArray.currency_list;

this.backPostJobDetail = []
this.backwardJobDetailFlag = localStorage.getItem('backwardJobDetailFlag')
if (this.backwardJobDetailFlag == "1") {
this.backPostJobDetail = JSON.parse(localStorage.getItem('postJobDetail'))
console.log('post Job Detail LocalStorage :', this.backPostJobDetail)

this.disability_id = this.backPostJobDetail[0].disabilityType;
}
else {
this.backPostJobDetail = []

localStorage.removeItem('postJobDetail')
}


this.disabilityArray = this.DDlListArray.disability_list;
//this.changeRef.detectChanges();
setTimeout(() => {
this.showJobTitleErrorMsg = false;
}, 500);



for (let i = 0; i <= 40; i++) {
this.min_experience.push(i);
this.max_experience.push(i);
}

for (let i = 10000; i <= 2000000; i = i + 10000) {
this.annual_ctc_from.push(i);
this.annual_ctc_to.push(i);
}
}
onChangeCurrency(item) {
this.Currency_id = item.detail.value;
if (this.Currency_id == "" || this.Currency_id == undefined || this.Currency_id == null) {
this.onCurrencyStatusSelect = true
} else {
this.onCurrencyStatusSelect = false
}
console.log('Currency :: ' + this.Currency_id)
}

selecteMinExperienceValue(item: any) {
this.selectedMinExperienceValue = item.detail.value;
if (this.selectedMinExperienceValue == 0) {
this.onMinExperienceStatusSelect = false

}
if (this.selectedMinExperienceValue == undefined || this.selectedMinExperienceValue == null) {
this.onMinExperienceStatusSelect = true
} else {
this.onMinExperienceStatusSelect = false
}
this.max_experience = []
for (let i = item.detail.value; i <= 40; i++) {
this.max_experience.push(i);
this.changeRef.detectChanges();
}
console.log('Min Experience :: ' + JSON.stringify(item.detail.value))
}


selecteMaxExperienceValue(item: any) {
this.selectedMaxExperienceValue = item.detail.value;
console.log('Max Experience:: ' + JSON.stringify(item.detail.value))

if (this.selectedMaxExperienceValue == 0) {
this.onMaxExperienceStatusSelect = false
}

if (this.selectedMaxExperienceValue == undefined || this.selectedMaxExperienceValue == null) {
this.onMaxExperienceStatusSelect = true
} else {
this.onMaxExperienceStatusSelect = false
}

}

selectedMinSalaryValue(item) {
this.ctcFrom = item.detail.value;
if (this.ctcFrom == "" || this.ctcFrom == undefined || this.ctcFrom == null) {
this.onMinSalaryStatusSelect = true
} else {
this.onMinSalaryStatusSelect = false
}
this.annual_ctc_to = []
for (let i = item.detail.value; i <= 2000000; i = i + 10000) {
this.annual_ctc_to.push(i);
this.changeRef.detectChanges();

}
console.log('Min Salary :: ' + this.ctcFrom)
}


selectedMaxSalaryValue(item) {
this.ctcTo = item.detail.value;
if (this.ctcTo == "" || this.ctcTo == undefined || this.ctcTo == null) {
this.onMaxSalaryStatusSelect = true
} else {
this.onMaxSalaryStatusSelect = false
}
console.log('Max Salary :: ' + this.ctcTo)
}

jobDescriptionValidator() {
if (this.jobdescription == "" || this.jobdescription == null || this.jobdescription == undefined) {
this.showJobDescriptionErrorMsg = true
this.jobDescriptionErrorMsg = "Please enter job description"
} else {
this.showJobDescriptionErrorMsg = false
}
}

jobTitleValidator() {
// if(this.backPostJobDetail != null){
// if(this.backwardJobDetailFlag != "1")
// {

if (this.jobtitle == "" || this.jobtitle == null || this.jobtitle == undefined) {
this.showJobTitleErrorMsg = true
this.jobTitleErrorMsg = "Please enter job title"
} else {
this.showJobTitleErrorMsg = false
}


// }
// else{
// event.stop();
// }

}

jobLastDateValidator() {
// if (this.lastdate == "" || this.lastdate == null || this.lastdate == undefined) {
// this.showJobLastDateErrorMsg = true
// this.jobLastDateErrorMsg = "Please enter last date for applying"
// } else {
// this.showJobLastDateErrorMsg = false
// }
}

jobVacancyValidator() {
if (this.vacancies == "" || this.vacancies == null || this.vacancies == undefined) {
this.showJobVacanciesErrorMsg = true
this.jobVacanciErrorMsg = "Please enter no. of vacancies"
} else {
this.showJobVacanciesErrorMsg = false
}
}


onDisabilitySelect(item) {
this.onDisabilityStatusSelect = false


if (this.disability_id.length == 0) {
this.onDisabilityStatusSelect = true
return
} else {
this.disability_id = [];
this.disability_id = item.detail.value;
this.onDisabilityStatusSelect = false
return
}

//code update by sujit
//for (let i = 0; i < arrayLength; i++) {


//this.disability_id.push(item.detail.value[i].id);
//this.disability_name.push(item.detail.value[i].name)
// this.onDisabilityStatusSelect = false
// //}
// if (this.disability_id.length == 0) {
// this.onDisabilityStatusSelect = true
// } else {
// this.onDisabilityStatusSelect = false
// }
// this.disability_id =item.detail.value.id;
//console.log('Disability Type :: ' + this.disability_id)
}

closePage() {
this.navController.navigateRoot(['/dashboardemployer']).then(() => {

});

}

nextPage() {
if (this.salaryHideShow == true) {
this.hide_salary = 1;
}
else {
this.hide_salary = 0;
}

if ((this.jobtitle == "" || this.jobtitle == null) &&
(this.jobdescription == "" || this.jobdescription == null) &&
(this.disability_id == undefined || this.disability_id == null || this.disability_id == []) &&
(this.selectedMinExperienceValue == null || this.selectedMinExperienceValue == undefined) &&
(this.selectedMaxExperienceValue == null || this.selectedMaxExperienceValue == undefined) &&
(this.Currency_id == "" || this.Currency_id == null || this.Currency_id == undefined) &&
(this.ctcFrom == "" || this.ctcFrom == null || this.ctcFrom == undefined) &&
(this.ctcTo == "" || this.ctcTo == null || this.ctcTo == undefined) &&
(this.vacancies == "" || this.vacancies == null || this.vacancies == undefined) &&
// (this.lastdate == "" || this.lastdate == null || this.lastdate == undefined) &&
(this.disability_id.length == 0)
) {
// this.presentAlert('All fields are mandatory', '')
// return
this.showJobTitleErrorMsg = true
this.jobTitleErrorMsg = "Please enter job title"
this.showJobDescriptionErrorMsg = true;
this.jobDescriptionErrorMsg = "Please enter job description"
this.onDisabilityStatusSelect = true
this.onMinExperienceStatusSelect = true
this.onMaxExperienceStatusSelect = true
this.onMinSalaryStatusSelect = true
this.onMaxSalaryStatusSelect = true
this.showJobVacanciesErrorMsg = true
this.onCurrencyStatusSelect = true
this.jobVacanciErrorMsg = "Please enter no. of vacancies"
// this.showJobLastDateErrorMsg = true
// this.jobLastDateErrorMsg = "Please enter last date for applying"
this.onDisabilityStatusSelect = true

} else {
this.showJobTitleErrorMsg = false
this.showJobDescriptionErrorMsg = false
this.onDisabilityStatusSelect = false
this.onMinExperienceStatusSelect = false
this.onMaxExperienceStatusSelect = false
this.onMinSalaryStatusSelect = false
this.onMaxSalaryStatusSelect = false
this.showJobVacanciesErrorMsg = false
// this.showJobLastDateErrorMsg = false
this.onCurrencyStatusSelect = false

}

this.jobVacancyValidator();
this.jobTitleValidator();
this.jobDescriptionValidator();
this.jobLastDateValidator();


if (this.selectedMaxExperienceValue == undefined || this.selectedMaxExperienceValue == null) {
this.onMaxExperienceStatusSelect = true
} else {
this.onMaxExperienceStatusSelect = false
}

if (this.selectedMinExperienceValue == undefined || this.selectedMinExperienceValue == null) {
this.onMinExperienceStatusSelect = true
} else {
this.onMinExperienceStatusSelect = false
}

if (this.ctcFrom == "" || this.ctcFrom == undefined || this.ctcFrom == null) {
this.onMinSalaryStatusSelect = true
} else {
this.onMinSalaryStatusSelect = false
}

if (this.ctcTo == "" || this.ctcTo == undefined || this.ctcTo == null) {
this.onMaxSalaryStatusSelect = true
} else {
this.onMaxSalaryStatusSelect = false
}

if (this.disability_id.length == 0) {
this.onDisabilityStatusSelect = true
} else {
this.onDisabilityStatusSelect = false
}

if (this.Currency_id == "" || this.Currency_id == undefined || this.Currency_id == null) {
this.onCurrencyStatusSelect = true
} else {
this.onCurrencyStatusSelect = false
}

let LASTDATE = ""
if (this.lastdate != "") {
var date = new Date(this.lastdate);
let month = String(date.getMonth() + 1);
let day = String(date.getDate());
const year = String(date.getFullYear());
if (day.length < 2) { 
day = '0' + day 
}
if (month.length < 2) { 
month = '0' + month 
}
LASTDATE = day + '-' + month + '-' + year
console.log('Full selected date:-' + day + '-' + month + '-' + year)
}



if (this.showJobTitleErrorMsg == false &&
this.showJobDescriptionErrorMsg == false &&
this.onDisabilityStatusSelect == false &&
this.onMinExperienceStatusSelect == false &&
this.onMaxExperienceStatusSelect == false &&
this.onMinSalaryStatusSelect == false &&
this.onMaxSalaryStatusSelect == false &&
this.showJobVacanciesErrorMsg == false &&
// this.showJobLastDateErrorMsg == false &&
this.onCurrencyStatusSelect == false) {
// let LASTDATE = this.lastdate.split('T')[0].split('-')[2] + '-' + this.lastdate.split('T')[0].split('-')[1] + '-' + this.lastdate.split('T')[0].split('-')[0]

this.postJobDetail.push({
jobtitle: this.jobtitle,
jobdescription: this.jobdescription,
disabilityType: this.disability_id,
selectedMinExperienceValue: this.selectedMinExperienceValue,
selectedMaxExperienceValue: this.selectedMaxExperienceValue,
Currency_id: this.Currency_id,
ctcFrom: this.ctcFrom,
ctcTo: this.ctcTo,
salaryHideShow: this.hide_salary,
vacancies: this.vacancies,
lastdate: LASTDATE
});

localStorage.setItem('postJobDetail', JSON.stringify(this.postJobDetail))
this.router.navigate(['/employerpostjoblocation'])

// this.router.navigate(['/employerpostjoblocation', { item: JSON.stringify(this.postJobDetail) }])

}

}
}