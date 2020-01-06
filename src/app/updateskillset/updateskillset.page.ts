import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, NavController } from '@ionic/angular';
import { Events, LoadingController } from '@ionic/angular';

import { Validators, FormBuilder } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-updateskillset',
  templateUrl: './updateskillset.page.html',
  styleUrls: ['./updateskillset.page.scss'],
})
export class UpdateskillsetPage implements OnInit {

  yearExperianceArray: any = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
  monthExperianceArray: any = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

  dataArray: any;
  showErrorIcon: boolean = false
  functionalAreaName: any;
  industryName: any;
  seekerInfo: any;
  functionAreaList: any;
  industryTypeArray: any;

  readIndustry: string = 'Please select industry'
  readFunctionalArea: string = 'Please select functional area'
  readYear: string = 'Please select year'
  readMonth: string = 'Please select month'


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    public navCtrl: NavController

  ) {

    this.onPageLoad();
  }

  // Forms declaration
  updateSkillsetDetailsForm = this.formBuilder.group({
    industry: ['', Validators.required],
    functionalArea: ['', Validators.required],
    year: [''],
    month: [''],
    KeySkills: ['', Validators.required],
  });

  ngOnInit() {
    // this.getDropDownListArray();

  }



  onPageLoad() {

    const contactInfo = (this.activatedRoute.snapshot.paramMap.get('seekerSkillSetInfo'));
    this.dataArray = JSON.parse(contactInfo);
    this.functionalAreaName = this.dataArray.functionalAreaName
    this.industryName = this.dataArray.industryName
    this.readIndustry = this.industryName
    this.readFunctionalArea = this.dataArray.functionalAreaName
    this.readYear = this.dataArray.totalYearExperience
    this.readMonth = this.dataArray.totalMonthExperience
    this.seekerInfo = localStorage.getItem("stateAndCityArray");
    this.functionAreaList = JSON.parse(this.seekerInfo).ddl_list.functional_area_list;
    this.industryTypeArray = JSON.parse(this.seekerInfo).ddl_list.industry_list
  }


  closePage() {
    // this.router.navigate(['/profile'])
    this.navCtrl.navigateRoot('/profile');

  }

  //On change Functions
  selectedIndustry(industryId: any) {
    for (let i = 0; i <= this.industryTypeArray.length; i++) {
      if (this.industryTypeArray[i].id == industryId) {
        this.industryName = this.industryTypeArray[i].name
        this.readIndustry = this.industryName
        return
      }
    }
  }

  selectedFunctionalArea(functionalAreaId) {
    for (let i = 0; i <= this.functionAreaList.length; i++) {
      if (this.functionAreaList[i].id == functionalAreaId) {
        this.functionalAreaName = this.functionAreaList[i].name
        this.readFunctionalArea = this.functionalAreaName
        return
      }
    }
  }

  selectedYear(year) {
    this.readYear = year
  }

  selectedMonth(month) {
    this.readMonth = month
  }


  // onChange Functions Ends Here.


  updateSkillsetDetail(form) {
    if (this.updateSkillsetDetailsForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      this.presentLoading();
      this.dataServices.updatePresentSkillSetAPI(form, this.industryName, this.functionalAreaName).then((res: any) => {
        this.loadingController.dismiss();
        if (res.status == 1) {
          this.presentAlert(res.message, '');
        }
        else {
          this.presentAlert(res.message, '');
        }
      }, (error) => {
        this.loadingController.dismiss();
        console.log(error);
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