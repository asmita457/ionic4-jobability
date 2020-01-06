import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController, NavController } from '@ionic/angular';
import { Events, LoadingController } from '@ionic/angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-updateeducational',
  templateUrl: './updateeducational.page.html',
  styleUrls: ['./updateeducational.page.scss'],
})
export class UpdateeducationalPage implements OnInit {
  updateEducationalDetailsForm: FormGroup;
  showErrorIcon: boolean = false
  passingYear = []

  educationalDetails: any;
  qualificationList: any;
  universityList: any;

  addEducation: any;
  cardLength: any;
  educationType: any;
  showDiv = false;
  showEducationTypes: boolean;


  seekerInfoArray: any;
  id: any;
  qualificationId: any;
  qualificationName: any;
  instituteUniversityId: any;
  instituteUniversityName: any
  yearOfPassing: any
  typeOfCourse: any;
  specialization: any;

  readQualification: string = 'Please select qualification'
  readUniversity: string = 'Please select university / board'
  readPassingYear: string = 'Please select passing year'

  constructor(
    private router: Router,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,
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
    this.updateEducationalDetailsForm = this.formBuilder.group({
      educationtype: ['', Validators.required],
      qualification: ['', Validators.required],
      specialization: ['', Validators.required],
      university: ['', Validators.required],
      passingYear: ['', Validators.required],
      typeOfCourse: ['', Validators.required]
    });
  }

  setCurrentEmployerValidators() {
    const qualification = this.updateEducationalDetailsForm.get('qualification');
    const specialization = this.updateEducationalDetailsForm.get('specialization');
    const university = this.updateEducationalDetailsForm.get('university');
    const passingYear = this.updateEducationalDetailsForm.get('passingYear');
    const typeOfCourse = this.updateEducationalDetailsForm.get('typeOfCourse');



    this.updateEducationalDetailsForm.get('educationtype').valueChanges
      .subscribe(educationType => {

        if (educationType == '4') {
          specialization.setValidators([Validators.required])
          university.setValidators([Validators.required])
          passingYear.setValidators([Validators.required])
          typeOfCourse.setValidators([Validators.required])
          qualification.setValidators([Validators.required])
        }

        if (educationType != '4') {
          specialization.setValidators(null)
          university.setValidators(null)
          passingYear.setValidators(null)
          typeOfCourse.setValidators(null)
          qualification.setValidators(null)

        }

        specialization.updateValueAndValidity();
        university.updateValueAndValidity();
        passingYear.updateValueAndValidity();
        typeOfCourse.updateValueAndValidity();
        qualification.updateValueAndValidity();
      });
  }

  // This Function Call when Page is load
  onPageLoad() {
    let currentYear = new Date().getFullYear()
    for (let i = currentYear; i >= 1965; i--) {
      this.passingYear.push(i.toString());
    }


    this.educationalDetails = localStorage.getItem("stateAndCityArray");
    this.qualificationList = JSON.parse(this.educationalDetails).ddl_list.qualification_list;
    this.universityList = JSON.parse(this.educationalDetails).ddl_list.university_list;

    this.addEducation = (this.activatedRoute.snapshot.paramMap.get('addEducation'));
    this.educationType = (this.activatedRoute.snapshot.paramMap.get('education_type'));
    this.cardLength = (this.activatedRoute.snapshot.paramMap.get('cardLength'));


    if (this.addEducation != null || this.addEducation != undefined && this.addEducation != '') {
      // this.educationType = '';

      if (this.cardLength == 0) {
        this.educationType = '';
        this.showEducationTypes = true;
      } else if (this.cardLength >= 1 && this.educationType == 4) {
        this.showDiv = true;
        this.educationType = '4';
      }



    } else {

      const contactInfo = (this.activatedRoute.snapshot.paramMap.get('item'));
      this.seekerInfoArray = JSON.parse(contactInfo);

      this.qualificationId = this.seekerInfoArray.qualificationId == '0' ? '' : this.seekerInfoArray.qualificationId;
      this.qualificationName = this.seekerInfoArray.qualificationName;
      this.readQualification = this.qualificationName
      this.instituteUniversityId = this.seekerInfoArray.instituteUniversityId == '0' ? '' : this.seekerInfoArray.instituteUniversityId;
      this.instituteUniversityName = this.seekerInfoArray.instituteUniversityName;
      this.readUniversity = this.instituteUniversityName
      this.yearOfPassing = this.seekerInfoArray.yearOfPassing;
      this.readPassingYear = this.yearOfPassing
      this.typeOfCourse = this.seekerInfoArray.typeOfCourse;
      this.specialization = this.seekerInfoArray.specialisation;


      this.educationType = this.seekerInfoArray.educationType;
      this.cardLength = this.seekerInfoArray.cardLength;

      if (this.cardLength == 1 && this.educationType == '4') {
        this.showEducationTypes = true;
        this.showDiv = true;
      } else if (this.cardLength > 1 && this.educationType == '4') {
        this.showEducationTypes = false;
        this.showDiv = true;
      } else if (this.cardLength == 1 && this.educationType != '4') {
        this.showEducationTypes = true;
      }
    }//Seeker Info Ends Here.

    // To Creat Year Array Function Ends Here.

    // this.educationTypeValidation()
  }// onPageLoad Function Ends Here.
  closePage() {
    // this.router.navigate(['/profile'])
    this.navCtrl.navigateRoot('/profile');

  }



  ionViewWillEnter() {
    // this.onPageLoad();
  }

  onSelect(educationType: any) {
    if ("4" == educationType) {
      this.showDiv = true;
    } else {
      this.showDiv = false;
    }
  }

  selectedQualification(qualificationId: any) {
    for (let i = 0; i <= this.qualificationList.length; i++) {
      if (this.qualificationList[i].id == qualificationId) {
        this.qualificationName = this.qualificationList[i].name
        this.readQualification = this.qualificationName
        return
      }
    }
  }

  selectedUniversity(UniversityId: any) {
    for (let i = 0; i <= this.universityList.length; i++) {
      if (this.universityList[i].id == UniversityId) {
        this.instituteUniversityName = this.universityList[i].name
        this.readUniversity = this.instituteUniversityName
        return
      }
    }
  }

  selectedPassingYear(passingYear){
    this.readPassingYear = passingYear

  }


  updateEducationalDetail(educationForm) {
    if (this.updateEducationalDetailsForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      if (educationForm.educationtype != '4') {
        educationForm.qualification = ''
        this.qualificationName = ''
        educationForm.specialization = ''
        educationForm.university = ''
        this.instituteUniversityName = ''
        educationForm.passingYear = ''
        educationForm.typeOfCourse = ''
      }
      // if (this.showDiv) {
      if (this.addEducation != null || this.addEducation != undefined && this.addEducation != '') {
        this.presentLoading();
        this.dataServices.addEducationInfoAPI(educationForm, this.qualificationName, this.instituteUniversityName).then((result: any) => {
          this.loadingController.dismiss();
          if (result.status == 1) {
            this.presentAlert(result.message, '');
            // this.closePage()
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
        this.dataServices.updateEducationInfoAPI(educationForm, this.qualificationName, this.instituteUniversityName, this.seekerInfoArray.id).then((result: any) => {
          this.loadingController.dismiss();
          if (result.status == 1) {
            this.presentAlert(result.message, '');
            // this.closePage()
          }
          else {
            this.presentAlert(result.message, '');
          }

        }, (error) => {
          this.loadingController.dismiss();
          console.log(error);
        });
      }
      // }


      // else {

      //   if (this.addEducation != null || this.addEducation != undefined && this.addEducation != '') {
      //     this.presentLoading();
      //     this.dataServices.addEducationInfoAPI(educationForm, this.qualificationName, this.instituteUniversityName).then((result: any) => {
      //       this.loadingController.dismiss();
      //       if (result.status == 1) {
      //         this.presentAlert(result.message, '');
      //         // this.closePage()
      //       }
      //       else {
      //         this.presentAlert(result.message, '');
      //       }

      //     }, (error) => {
      //       alert(error);
      //     });
      //   } else {
      //     this.presentLoading();
      //     this.dataServices.updateEducationInfoAPI(educationForm, this.qualificationName, this.instituteUniversityName, this.id).then((result: any) => {
      //       this.loadingController.dismiss();
      //       if (result.status == 1) {
      //         this.presentAlert(result.message, '');
      //         // this.closePage()
      //       }
      //       else {
      //         this.presentAlert(result.message, '');
      //       }

      //     }, (error) => {
      //       alert(error);
      //     });
      //   }
      // }
      // console.log('validation success.')
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
