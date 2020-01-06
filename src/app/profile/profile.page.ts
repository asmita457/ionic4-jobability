import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Events, LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
// import { File } from '@ionic-native/file';
// import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Http } from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  emailVerificatonResponse: any;

  // 16/05/2019
  seekerExperienceDetails: any;
  seekerQualificationInfo: any;

  name: any;
  email: any;
  mobile: any;
  education_type: any;

  industry: any;
  functionalArea: any;
  totalYearExperience: any;
  totalMonthExperience: any;
  badgecount: any
  badgeResultData: any
  //Arrays for push neccessory information on next page.
  seekerContactInfoArray: any = [];
  seekerPresentSkillsetArray: any = [];
  seekerWorkExperienceArray: any = [];
  seekerQualificationInfoArray: any = [];

  uacc_id: any;
  resultData: any;
  country: any;
  state: any
  city: any;
  getDLLAPIData: any;
  educationName: any;
  employerStaus: boolean = true;
  cardLength: any;
  currentEmployerStatus: boolean;
  experienceDetailscardLength: any;
  verify_email: number;
  showVerifyButton: boolean;
  showVerifiedButton: boolean;
  fileName: any;
  fileUploadResponse: any;
  showResume: boolean = false;
  fileUrl: string = '';
  KeySkills: string = ''
  splitMobile: ''
  constructor(
    private router: Router,
    private dataServices: DataservicesService,
    public events: Events,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private fileChooser: FileChooser,
    public http: Http,
    private transfer: FileTransfer,
    private file: File,
    // private transfer: FileTransfer,

    // private file: File,
    // private transfer: FileTransfer,
    private filePath: FilePath,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility
  ) {
    this.uacc_id = localStorage.getItem("users_id");
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getSeekerInformation();
    this.getNotificationBadgeCount()
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('My Profile Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  getNotificationBadgeCount() {
    // this.presentLoading();
    this.dataServices.getNotificationBadgeCount().then((result) => {
      console.log(result)
      this.badgeResultData = result
      if (this.badgeResultData.status == 1) {
        // this.loadingController.dismiss();
        this.badgecount = this.badgeResultData.total_notification_count
      } else {
        // this.loadingController.dismiss();
      }
    }, error => {
      // this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  navigateToNotification() {
    this.router.navigate(['/notification'])
  }
  // Function For Get Seeker Infromation
  getSeekerInformation() {
    // this.uacc_id = localStorage.getItem("users_id");
    this.seekerContactInfoArray = [];
    this.seekerPresentSkillsetArray = [];
    this.presentLoading();
    this.dataServices.getSeekerData(this.uacc_id).then((result) => {
      this.resultData = result
      if (this.resultData.status == 1) {
        // Seeker Details
        this.name = this.resultData.seeker_details[0].first_name;
        this.email = this.resultData.seeker_details[0].email;
        this.mobile = this.resultData.seeker_details[0].mobile;
        this.splitMobile = this.mobile.split('').join(' ').replace(/0/g, 'zero')
        this.education_type = this.resultData.seeker_details[0].education_type;
        this.country = this.resultData.seeker_details[0].country == 0 ? '' : this.resultData.seeker_details[0].country;
        this.state = this.resultData.seeker_details[0].state == 0 ? '' : this.resultData.seeker_details[0].state
        this.city = this.resultData.seeker_details[0].city == 0 ? '' : this.resultData.seeker_details[0].city
        this.verify_email = this.resultData.seeker_details[0].verify_email;
        this.fileName = this.resultData.seeker_details[0].attach_cv;
        this.fileUrl = this.resultData.seeker_details[0].file_path;
        if (this.fileName != null) {
          this.showResume = true;
        }


        if (this.verify_email == 0) {
          this.showVerifyButton = true;
          this.showVerifiedButton = false;

        } else {
          this.showVerifiedButton = true;
          this.showVerifyButton = false;
        }

        this.seekerContactInfoArray.push({
          name: this.name,
          email: this.email,
          mobile: this.mobile,
          address: this.resultData.seeker_details[0].address,
          gender: this.resultData.seeker_details[0].gender,
          marritalStatus: this.resultData.seeker_details[0].marital_status,
          country: this.country,
          state: this.state,
          city: this.city,
          disability_id: this.resultData.seeker_details[0].disability_id,
        });

        this.industry = this.resultData.seeker_details[0].industry_name;
        this.functionalArea = this.resultData.seeker_details[0].functional_area;
        this.totalYearExperience = this.resultData.seeker_details[0].years_total_experience;
        this.totalMonthExperience = this.resultData.seeker_details[0].months_total_experience;
        this.KeySkills = this.resultData.seeker_details[0].key_skill;


        this.seekerPresentSkillsetArray.push({
          industryId: this.resultData.seeker_details[0].industry_id,
          industryName: this.resultData.seeker_details[0].industry_name,
          functionalAreaId: this.resultData.seeker_details[0].functional_area_id,
          functionalAreaName: this.resultData.seeker_details[0].functional_area,
          totalMonthExperience: this.resultData.seeker_details[0].months_total_experience,
          totalYearExperience: this.resultData.seeker_details[0].years_total_experience,
          KeySkills: this.resultData.seeker_details[0].key_skill

        });

        // Work Experience Of Seeker
        this.seekerExperienceDetails = this.resultData.seeker_experience_details;
        this.experienceDetailscardLength = this.seekerExperienceDetails.length

        if (this.seekerExperienceDetails.length != 0) {
          this.currentEmployerStatus = this.seekerExperienceDetails[0].current_employer == 0 ? false : true;
        }
        // Seeker Educational information
        this.seekerQualificationInfo = this.resultData.seeker_qualification_details;
        this.cardLength = this.seekerQualificationInfo.length
        this.hideAndShowForEducationInfo(this.seekerQualificationInfo);



        this.setDefaultEducation(this.education_type);

        localStorage.setItem('userName', this.name)
        this.events.publish('Event-UserName')


        if (this.country != null || this.country != undefined || this.country != '') {

          this.getDDLAPI(this.country);
        }

        this.loadingController.dismiss();
      } else {
        this.loadingController.dismiss();
        this.presentAlert('', this.resultData.message);

      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))

    })
  } // Function For Get Seeker Infromation Ends Here.

  //Function For Uplaod Resume
  uploadResume() {
    this.fileChooser.open()
      .then(uri => {
        let filePathURI = uri
        this.filePath.resolveNativePath(uri)
          .then(url => {
            let choosedFileName = url.substring(url.lastIndexOf("/") + 1);
            var fileExtension = choosedFileName.split('.');
            if (fileExtension[1] == 'pdf' || fileExtension[1] == 'PDF' || fileExtension[1] == 'doc' || fileExtension[1] == 'DOC' || fileExtension[1] == 'docx' || fileExtension[1] == 'DOCX') {
              this.fileName = url.substring(url.lastIndexOf("/") + 1);
              const fileTransfer: FileTransferObject = this.transfer.create();
              var headers = new Headers();
              // headers.append('Content-Type', 'multipart/form-data' );
              headers.append('Access-Control-Allow-Headers', 'Content-Type');
              headers.append('Access-Control-Allow-Origin', '*');
              let options: FileUploadOptions = {
                headers: headers,
                fileKey: 'attach_cv',
                fileName: this.fileName.split(" ").join("%20"),
                chunkedMode: false,
                params: {
                  'uacc_id': localStorage.getItem("users_id")
                }
              }
              this.presentLoading();
              let fileURL = url.split(" ").join("%20")
              fileTransfer.upload(filePathURI, 'http://www.jobability.org/api/profile/update_seeker_resume', options)
                .then((data) => {
                  this.fileUploadResponse = data;
                  this.loadingController.dismiss();
                  this.showResume = true;
                  if (this.fileUploadResponse.responseCode == 200) {
                    this.getSeekerInformation();
                    this.presentAlert("", JSON.parse(this.fileUploadResponse.response).message);
                  } else {
                    this.presentAlert("", "Upload Failed");
                  }
                }, (err) => {
                  // error
                  console.log('error: ' + err)
                  this.loadingController.dismiss();
                  this.presentAlert("", "Upload Failed");
                })
            } else {
              this.loadingController.dismiss();
              // this.showResume = false;
              // this.fileName = '';
              this.presentAlert('File Type', 'You can choose only .pdf, .doc or .docx types of file');
            }
          })
      }).catch(e => console.log(e));
  } // uploadResume Fnction Ends Here.

  //download Resume 
  download() {
    this.presentLoading();
    const url = this.fileUrl;
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(url, this.file.externalRootDirectory +
      '/Download/' + this.fileName)
      .then((entry) => {
        this.loadingController.dismiss();
        this.presentAlert('File', 'File has been downloaded to the Downloads folder');
      }, (error) => {
        // handle error
        this.loadingController.dismiss();
        console.log('download failed: ' + error);
      });
  }//download Rresume.

  //Function For Send Seeker Data to Update Contact 
  updateContactInfo() {
    // this.router.navigate(['/updatecontact'])
    this.router.navigate(['/updatecontact', { seekerContactInfo: JSON.stringify(this.seekerContactInfoArray[0]) }]);
  }
  // Function For Send Data to Update Contact Ends Here.

  // Function For Send Seeker Data To Presend Skill Set UI
  updatePresentSkillsets() {
    this.router.navigate(['/updateskillset', { seekerSkillSetInfo: JSON.stringify(this.seekerPresentSkillsetArray[0]) }]);
  } // Function For Send Seeker Data To Presend SkillSet UI Ends Here



  // Function For Send Seeker Data To Work Experience UI
  updateWorkExperience(id) {
    this.seekerWorkExperienceArray = [];

    for (let i = 0; i < this.seekerExperienceDetails.length; i++) {
      if (this.seekerExperienceDetails[i].id == id) {
        if (this.seekerExperienceDetails[i].current_employer == 1) {
          this.employerStaus = true;
        } else {
          this.employerStaus = true;
        }
        this.seekerWorkExperienceArray.push({
          // id: this.seekerExperienceDetails[i].id,
          id: id,
          currentEmployer: this.seekerExperienceDetails[i].current_employer,
          company: this.seekerExperienceDetails[i].company_organisation,
          designation: this.seekerExperienceDetails[i].designation,
          fromYearStartDate: this.seekerExperienceDetails[i].start_year,
          fromMonthStartDate: this.seekerExperienceDetails[i].start_month,
          toYearEndDate: this.seekerExperienceDetails[i].end_year,
          toMonthEndDate: this.seekerExperienceDetails[i].end_month,
          reasonForLeaving: this.seekerExperienceDetails[i].reason_for_leaving,
          employerStaus: this.seekerExperienceDetails[0].current_employer,

        });
      }
    }
    this.router.navigate(['/updateworkexperience', { seekerExperienceInfo: JSON.stringify(this.seekerWorkExperienceArray[0]) }]);
  } // Function For Send Seeker Data To Work Experience UI Ends Here.

  //Function For Delete Work Experience 
  deleteWorkExperience(id) {

    this.deleteEducationAlertFunction(id, 'DeleteExperiance')

  } // deleteWorkExperience Function Ends Here.

  deleteWorkExperienceWithID(id: string) {
    this.presentLoading();
    this.dataServices.deleteWorkExperience(id).then((result) => {
      this.emailVerificatonResponse = result
      this.loadingController.dismiss();
      if (this.emailVerificatonResponse.status == 1) {
        this.getSeekerInformation();
        this.presentAlert('', this.emailVerificatonResponse.message)
      } else {
        this.presentAlert('', this.emailVerificatonResponse.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }
  //Function For Delete Work Experience 
  deleteEducation(id) {

    this.deleteEducationAlertFunction(id, 'DeleteEducation')
  } // deleteEducation Function  Ends Here.

  deleteEducationWithID(id: string) {
    this.presentLoading();
    this.dataServices.deleteEducation(id).then((result) => {
      this.emailVerificatonResponse = result
      if (this.emailVerificatonResponse.status == 1) {
        this.loadingController.dismiss();
        this.getSeekerInformation();
        this.presentAlert('', this.emailVerificatonResponse.message)
      } else {
        this.presentAlert('', this.emailVerificatonResponse.message)
        this.loadingController.dismiss();
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  updateEducation(id) {

    this.seekerQualificationInfoArray = [];

    for (let i = 0; i < this.seekerQualificationInfo.length; i++) {
      if (this.seekerQualificationInfo[i].id == id) {
        this.seekerQualificationInfoArray.push({
          id: this.seekerQualificationInfo[i].id,
          educationType: this.education_type,
          qualificationId: this.seekerQualificationInfo[i].qualification_id,
          qualificationName: this.seekerQualificationInfo[i].qualification_name,
          specialisation: this.seekerQualificationInfo[i].specialisation,
          instituteUniversityId: this.seekerQualificationInfo[i].institute_university,
          instituteUniversityName: this.seekerQualificationInfo[i].institute_university_name,
          yearOfPassing: this.seekerQualificationInfo[i].year_of_passing,
          typeOfCourse: this.seekerQualificationInfo[i].edu_type,
          cardLength: this.seekerQualificationInfo.length
        });
      }
    }
    this.router.navigate(['/updateeducational', { item: JSON.stringify(this.seekerQualificationInfoArray[0]) }])
  }
  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 6000);
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);

  }//Display Function Ends Here 


  // // Function For Get All Countrys
  // getCountryArray() {
  //   this.resultData = [];
  //   this.dataServices.getCountryArrayAPI().then((result) => {
  //     this.resultData = result
  //     if (this.resultData.status == 1) {
  //       localStorage.setItem("countryArray", JSON.stringify(this.resultData));
  //     } else {
  //     }
  //   }, error => {
  //     console.log('Error in login: ' + JSON.stringify(error))

  //   })
  // } // Function For Get All Countrys Ends Here.


  // Function For Get All States and Citys of According to Country
  getDDLAPI(countryId) {
    this.dataServices.getDDLAPI(countryId).then((result) => {
      this.getDLLAPIData = result
      if (this.getDLLAPIData.status == 1) {
        localStorage.setItem("stateAndCityArray", JSON.stringify(this.getDLLAPIData));
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))

    })
  }  // getDDLAPI Function Ends Here.


  // Function For Email Verification
  emailVerification() {
    this.presentLoading();
    this.dataServices.emailVerification().then((result) => {
      this.emailVerificatonResponse = result
      if (this.emailVerificatonResponse.status == 1) {
        this.loadingController.dismiss();
        this.presentAlert('Email', this.emailVerificatonResponse.message)
      } else {
        this.loadingController.dismiss();
        this.presentAlert('Email', this.emailVerificatonResponse.message)
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }  // Function emailVerification Ends Here.

  //Function For Verified Email
  // emailVerified(){
  //   this.presentAlert('Email','This email address is already verified');
  // }


  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: ['OK']
    });
    alert.setAttribute('role', 'alert')
    await alert.present();
  }



  addExperience() {
    this.router.navigate(['/updateworkexperience', { addExperience: 'addExperience', currentEmployer: this.currentEmployerStatus, cardLength: this.experienceDetailscardLength }]);

  }

  addEducation() {
    this.router.navigate(['/updateeducational', { addEducation: 'addEducation', education_type: this.education_type, cardLength: this.cardLength }]);
  }

  setDefaultEducation(educationType) {
    if (educationType == '1') {
      this.educationName = 'No Schooling'
    } else if (educationType == '2') {
      this.educationName = 'Pre-Primary'
    } else if (educationType == '3') {
      this.educationName = 'Primary'
    } else if (educationType == '0') {
      this.educationName = 'Education information not available'
    }
  }

  hideAndShowForEducationInfo(seekerQualificationInfo) {
    if (seekerQualificationInfo.length == 0) {
      this.education_type = '4';
    }
  }


  async deleteEducationAlertFunction(id: string, deleteAction: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      subHeader: 'Are you sure? Do you want to delete?',
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
            // this.router.navigate(['/login']);
            if (deleteAction == 'DeleteEducation') {
              this.deleteEducationWithID(id)
            } else {
              this.deleteWorkExperienceWithID(id);
            }

          }
        }]
    });
    await alert.present();
  }
}