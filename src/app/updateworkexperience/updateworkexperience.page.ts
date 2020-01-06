import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Events, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-updateworkexperience',
  templateUrl: './updateworkexperience.page.html',
  styleUrls: ['./updateworkexperience.page.scss'],
})
export class UpdateworkexperiencePage implements OnInit {
  updateWorkExperienceForm: FormGroup;
  yearExperianceFromArray: any = [];
  yearExperianceToArray: any = [];
  monthIndex = 0
  isFromMonthDisabled: boolean = true
  isToMonthDisabled: boolean = true

  monthExperianceArray: any = [{ name: 'Jan', id: '1' },
  { name: 'Feb', id: '2' }, { name: 'Mar', id: '3' }, { name: 'Apr', id: '4' }, { name: 'May', id: '5' },
  { name: 'Jun', id: '6' }, { name: 'Jul', id: '7' }, { name: 'Aug', id: '8' }, { name: 'Sep', id: '9' },
  { name: 'Oct', id: '10' }, { name: 'Nov', id: '11' }, { name: 'Dec', id: '12' }]


  monthExperianceToArray: any = [{ name: 'Jan', id: '1' },
  { name: 'Feb', id: '2' }, { name: 'Mar', id: '3' }, { name: 'Apr', id: '4' }, { name: 'May', id: '5' },
  { name: 'Jun', id: '6' }, { name: 'Jul', id: '7' }, { name: 'Aug', id: '8' }, { name: 'Sep', id: '9' },
  { name: 'Oct', id: '10' }, { name: 'Nov', id: '11' }, { name: 'Dec', id: '12' }]

  showErrorIcon: boolean = false

  addExperience: any;
  cardLength: any;
  currentEmployer: any;
  employerStaus: boolean;


  dataArray: any;
  id: any;

  companyOrganisation: any;
  designation: any;
  selectedYearFrom: any;
  fromYearStartMonth: any;
  toYearEndYear: any;
  toYearEndMonth: any;
  reasonForLeaving: any;
  firstCardEmployerStatus: any;


  readFromYear: string = 'Please select from year'
  readToYear: string = 'Please select to year'
  readFromMonth: string = 'Please select from month'
  readToMonth: string = 'Please select to month'


  // isFromBothSelected = false
  // isToBothSelected = false
  // toBothErrorMsg: any


  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private dataServices: DataservicesService,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    public navCtrl: NavController



  ) {
    this.onPageLoad();
  }



  ngOnInit() {
    this.buildForm()
    this.setCurrentEmployerValidators()
  }



  // Forms declaration
  buildForm() {
    this.updateWorkExperienceForm = this.formBuilder.group({
      currentEmployer: [''],
      companyOrganisation: ['', Validators.required],
      designation: ['', Validators.required],
      fromYear: ['', Validators.required],
      fromMonth: ['', Validators.required],
      toYear: ['', Validators.required],
      toMonth: ['', Validators.required],
      reasonForLeaving: ['', Validators.required],
    });
  }

  setCurrentEmployerValidators() {
    const toYear = this.updateWorkExperienceForm.get('toYear');
    const toMonth = this.updateWorkExperienceForm.get('toMonth');
    const reasonForLeaving = this.updateWorkExperienceForm.get('reasonForLeaving');

    this.updateWorkExperienceForm.get('currentEmployer').valueChanges
      .subscribe(currentEmployer => {

        if (currentEmployer === true) {
          toYear.setValidators(null)
          toMonth.setValidators(null)
          reasonForLeaving.setValidators(null)
        }

        if (currentEmployer === false) {
          toYear.setValidators([Validators.required])
          toMonth.setValidators([Validators.required])
          reasonForLeaving.setValidators([Validators.required])
        }

        toYear.updateValueAndValidity();
        toMonth.updateValueAndValidity();
        reasonForLeaving.updateValueAndValidity();
      });
  }

  onPageLoad() {
    this.addExperience = (this.activatedRoute.snapshot.paramMap.get('addExperience'));
    this.cardLength = (this.activatedRoute.snapshot.paramMap.get('cardLength'));

    if (this.addExperience != null || this.addExperience != undefined && this.addExperience != '') {
      this.currentEmployer = (this.activatedRoute.snapshot.paramMap.get('currentEmployer'));
      if (this.currentEmployer == "undefined" || this.currentEmployer == "null" || this.currentEmployer == '' || this.cardLength == 0) {
        this.employerStaus = true
        this.currentEmployer = false;
      } else if (this.cardLength >= 1 && this.currentEmployer != 'true') {
        this.employerStaus = true
        this.currentEmployer = false;
      } else if (this.cardLength >= 1 && this.currentEmployer == 'true') {
        this.employerStaus = false;
        this.currentEmployer = false;
      }

    } else {
      const contactInfo = (this.activatedRoute.snapshot.paramMap.get('seekerExperienceInfo'));
      this.dataArray = JSON.parse(contactInfo);
      this.id = this.dataArray.id == null ? '' : this.dataArray.id;
      this.currentEmployer = this.dataArray.currentEmployer == 0 ? false : true;
      this.companyOrganisation = this.dataArray.company == null ? '' : this.dataArray.company;
      this.designation = this.dataArray.designation == null ? '' : this.dataArray.designation;
      this.selectedYearFrom = this.dataArray.fromYearStartDate == null ? '' : this.dataArray.fromYearStartDate;
      this.readFromYear = this.selectedYearFrom

      this.fromYearStartMonth = this.dataArray.fromMonthStartDate == null ? '' : this.dataArray.fromMonthStartDate;
      if (this.fromYearStartMonth != '') {
        this.readFromMonth = this.monthExperianceArray[this.fromYearStartMonth - 1].name
      }
      this.toYearEndYear = this.dataArray.toYearEndDate == 0 ? '' : this.dataArray.toYearEndDate;
      this.readToYear = this.toYearEndYear

      this.toYearEndMonth = this.dataArray.toMonthEndDate == 0 ? '' : this.dataArray.toMonthEndDate;
      if (this.toYearEndMonth != '') {
        this.readToMonth = this.monthExperianceToArray[this.toYearEndMonth - 1].name
      }

      this.reasonForLeaving = this.dataArray.reasonForLeaving == null ? '' : this.dataArray.reasonForLeaving;
      this.employerStaus = this.dataArray.currentEmployer == 0 ? false : true //this.dataArray.employerStaus;
      this.firstCardEmployerStatus = this.dataArray.employerStaus;

      if (this.selectedYearFrom != '') {
        this.isFromMonthDisabled = false
      }

      if (this.toYearEndYear != '') {
        this.isToMonthDisabled = false
      }

      if (this.firstCardEmployerStatus == 0) {
        this.employerStaus = true;
      }
    }


    let currentYear = new Date().getFullYear()
    for (let i = currentYear; i >= 1965; i--) {
      this.yearExperianceFromArray.push(i.toString());
      this.yearExperianceToArray.push(i.toString());

    }

  }

  selectedFromYear(year) {
    this.readFromYear = year
    this.isFromMonthDisabled = false
    this.monthExperianceToArray = [{ name: 'Jan', id: '1' },
    { name: 'Feb', id: '2' }, { name: 'Mar', id: '3' }, { name: 'Apr', id: '4' }, { name: 'May', id: '5' },
    { name: 'Jun', id: '6' }, { name: 'Jul', id: '7' }, { name: 'Aug', id: '8' }, { name: 'Sep', id: '9' },
    { name: 'Oct', id: '10' }, { name: 'Nov', id: '11' }, { name: 'Dec', id: '12' }]
    if (year > this.toYearEndYear) {
      this.toYearEndYear = undefined
    } else if (year == this.toYearEndYear) {
      this.toYearEndMonth = undefined
      for (let i = 0; i < this.fromYearStartMonth - 1; i++) {
        this.monthExperianceToArray.splice(0, 1);
      }
    }

    // this.fromYearStartMonth = undefined
    // this.toYearEndMonth = undefined
    this.monthExperianceArray
    let currentYear = new Date().getFullYear()
    this.yearExperianceToArray = []
    for (let i = currentYear; i >= year; i--) {
      this.yearExperianceToArray.push(i.toString());
    }
  }

  selectedFromMonth(month) {
    this.readFromMonth = this.monthExperianceArray[month - 1].name

    this.monthExperianceToArray = [{ name: 'Jan', id: '1' },
    { name: 'Feb', id: '2' }, { name: 'Mar', id: '3' }, { name: 'Apr', id: '4' }, { name: 'May', id: '5' },
    { name: 'Jun', id: '6' }, { name: 'Jul', id: '7' }, { name: 'Aug', id: '8' }, { name: 'Sep', id: '9' },
    { name: 'Oct', id: '10' }, { name: 'Nov', id: '11' }, { name: 'Dec', id: '12' }]
    if (this.toYearEndYear == this.selectedYearFrom) {
      this.toYearEndMonth = undefined
      for (let i = 0; i < month - 1; i++) {
        this.monthExperianceToArray.splice(0, 1);
      }
    }
  }
  // fromYearStartMonth

  // selectedToMonth(month) {
  //   this.isToMonthDisabled = false
  // }

  selectedToYear(year) {
    this.readToYear = year
    this.monthExperianceToArray = [{ name: 'Jan', id: '1' },
    { name: 'Feb', id: '2' }, { name: 'Mar', id: '3' }, { name: 'Apr', id: '4' }, { name: 'May', id: '5' },
    { name: 'Jun', id: '6' }, { name: 'Jul', id: '7' }, { name: 'Aug', id: '8' }, { name: 'Sep', id: '9' },
    { name: 'Oct', id: '10' }, { name: 'Nov', id: '11' }, { name: 'Dec', id: '12' }]
    this.isToMonthDisabled = false
    if (this.toYearEndYear == this.selectedYearFrom) {

      // this.fromYearStartMonth = undefined
      if (this.fromYearStartMonth != undefined) {
        for (let i = 0; i < this.fromYearStartMonth - 1; i++) {
          this.monthExperianceToArray.splice(0, 1);
        }
      }
      this.toYearEndMonth = undefined
    }
  }

  selectedToMonth(month) {
    this.readToMonth = this.monthExperianceToArray[month - 1].name
  }

  updateWorkExperienceDetail(form) {

    let current_employer: any
    if (form.fromYear > form.toYear) {
      this.toYearEndYear = undefined
    }
    if (this.updateWorkExperienceForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      this.showErrorIcon = false

      if (!this.currentEmployer) {
        current_employer = '0'

        if (this.addExperience != null || this.addExperience != undefined && this.addExperience != '') {
          this.presentLoading();

          this.dataServices.addWorkExperienceInfoAPI(current_employer, form.companyOrganisation, form.designation, form.fromMonth, form.fromYear, form.toMonth, form.toYear, form.reasonForLeaving).then((result: any) => {

            this.loadingController.dismiss();
            if (result.status == 1) {
              console.log('Update Information :: ' + result)
              this.presentAlert(result.message, '');
            }
            else {
              this.presentAlert(result.message, '');
            }

          }, (error) => {
            this.loadingController.dismiss();
            console.log(error);
          });
        } else {
          this.presentLoading();
          this.dataServices.updateWorkExperienceInfoAPI(current_employer, form.companyOrganisation, form.designation, form.fromMonth, form.fromYear, form.toMonth, form.toYear, form.reasonForLeaving, this.id).then((result: any) => {

            this.loadingController.dismiss();
            if (result.status == 1) {
              console.log('Update Information :: ' + result)
              this.presentAlert(result.message, '');
            }
            else {
              this.presentAlert(result.message, '');
            }

          }, (error) => {
            this.loadingController.dismiss();
            console.log(error);
          });
        }
      } else {
        current_employer = '1'
        form.toYear = ''
        form.toMonth = ''
        form.reasonForLeaving = ''

        if (this.addExperience != null || this.addExperience != undefined && this.addExperience != '') {
          this.presentLoading();
          this.dataServices.addWorkExperienceInfoAPI(current_employer, form.companyOrganisation, form.designation, form.fromMonth, form.fromYear, form.toMonth, form.toYear, form.reasonForLeaving).then((result: any) => {
            this.loadingController.dismiss();
            if (result.status == 1) {
              this.presentAlert(result.message, '');
            }
            else {
              this.presentAlert(result.message, '');
            }
          }, (error) => {
            console.log(error);
          });
        } else {
          this.presentLoading();

          this.dataServices.updateWorkExperienceInfoAPI(current_employer, form.companyOrganisation, form.designation, form.fromMonth, form.fromYear, form.toMonth, form.toYear, form.reasonForLeaving, this.id).then((result: any) => {

            this.loadingController.dismiss();

            if (result.status == 1) {

              this.presentAlert(result.message, '');
            }
            else {
              this.presentAlert(result.message, '');
            }

          }, (error) => {
            console.log(error);
          });
        }
      }
    }
  }

  closePage() {
    // this.router.navigate(['/profile'])
    this.navCtrl.navigateRoot('/profile');

  }


  // onChange Functions 


  //onChange Functions Ends Here

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
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);

  }//Display Function Ends Here 

  ionViewWillLeave() {
    this.loadingController.dismiss();
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}