import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
 selector: 'app-empcandidateprofile',
 templateUrl: './empcandidateprofile.page.html',
 styleUrls: ['./empcandidateprofile.page.scss'],
})
export class EmpcandidateprofilePage implements OnInit {


 // empSearchResumesArray = [
 // {
 // first_name: 'UBA RAJU',
 // designation: 'Accountant Manager',
 // company_name: 'Wipro',
 // years_total_experience: '3',
 // location_name: 'pune',
 // disability_name: 'Locomotor Disability'
 // }
 // ]

 ResumeDetailResponse: any
 resumeId: any
 getSeekerData = []
 qualificationArray = []
 experience_details_array = []
 firstname: any
 resume_saved_flag : number
 resumeRemove: boolean
 resumeSaved: boolean
 uacc_id: any
 resume_download_url: any;
 fileName: any;
 verify_email: any
 email: any
 mobile: any
 profile_photo_path: any
 applicants_display: any

 saveRemoveResumeResponse: any

 constructor(private router: Router,
 private location: Location,
 private activatedRoute: ActivatedRoute,
 public loadingController: LoadingController,
 private dataServices: DataservicesService,
 private alertCtrl: AlertController,
 private transfer: FileTransfer,
 private file: File,
 private emailComposer: EmailComposer
 ) { }


 ionViewWillEnter() {
 this.resumeId = (this.activatedRoute.snapshot.paramMap.get('resumeId'));
 console.log('resumeId:', this.resumeId)

 this.getResumeDetailsData();
 }

 //Display loader 
 async presentLoading() {
 const loading = await this.loadingController.create({
 message: 'Please wait...',
//  spinner: null
 });
 await loading.present();
 setTimeout(() => {
 loading.dismiss();
 }, 6000);
 const { role, data } = await loading.onDidDismiss();
 console.log('Loading dismissed!' + role + ' Data: ' + data);

 }//Display Function Ends Here 


 getResumeDetailsData() {
 this.presentLoading();
 this.dataServices.resumeDetailAPI(this.resumeId).then((result) => {
 this.ResumeDetailResponse = result;
 if (this.ResumeDetailResponse.status == 1) {

 this.getSeekerData = this.ResumeDetailResponse.seeker_details
 this.mobile = this.ResumeDetailResponse.seeker_details.mobile
 this.resume_saved_flag = this.ResumeDetailResponse.seeker_details.resume_saved_flag
 this.resume_download_url = this.ResumeDetailResponse.seeker_details.resume_download_url;
 this.verify_email = this.ResumeDetailResponse.seeker_details.verify_email
 this.email = this.ResumeDetailResponse.seeker_details.email

 this.firstname = this.ResumeDetailResponse.seeker_details.first_name
 this.profile_photo_path = this.ResumeDetailResponse.seeker_details.profile_photo_path;
 this.experience_details_array = this.ResumeDetailResponse.seeker_details.experience_details_array
 this.qualificationArray = this.ResumeDetailResponse.seeker_details.qulification_details_array[0]
 this.loadingController.dismiss();
 // this.router.navigate(['/employerjobapplications', { jobApplication : this.jobApplication}]);

 if(this.applicants_display == 0){

 }
 } else {
 this.loadingController.dismiss();
 }
 }, error => {
 this.loadingController.dismiss();
 console.log('Error in login: ' + JSON.stringify(error))
 })
 }

 ngOnInit() {
 } 
 goBack() {
 this.location.back();
 // this.router.navigate(['/employerjobapplications'])
 }

 //save and remove resume 
 saveRemoveResume() {

 this.uacc_id = localStorage.getItem('users_id')
 this.presentLoading();
 this.dataServices.saveRemoveResumeAPI(this.uacc_id, this.resumeId).then((result) => {
 this.saveRemoveResumeResponse = result;
 if (this.saveRemoveResumeResponse.status == 1) {
 this.loadingController.dismiss();
 this.presentAlert('', this.saveRemoveResumeResponse.message);

 if (this.saveRemoveResumeResponse.check_flag == 1) {
 this.resume_saved_flag = 1

 } else if (this.saveRemoveResumeResponse.check_flag == 2) {
 this.resume_saved_flag = 0
 }
 } else {
 this.loadingController.dismiss();
 this.presentAlert('', this.saveRemoveResumeResponse.message);
 }
 }, error => {
 this.loadingController.dismiss();
 console.log('Error in login: ' + JSON.stringify(error))
 })
 }

 async presentAlert(title, message) {
 const alert = await this.alertCtrl.create({
 header: title,
 subHeader: message,
 buttons: ['OK']
 });
 await alert.present();
 }


 emailComposerOpen(){
 if(this.verify_email == 0)
 {
 this.presentAlert('','Email address is not verified.');

 }else{
 this.emailComposer.isAvailable().then((available: boolean) => {
 if (available) {
 console.log('emailComposer available')
 }
 });
 let employerEmail = localStorage.getItem("email")
 const email = {
 to: this.email,
 subject: 'Jobability',
 body: 'You have been contacted.',
 isHtml: true
 }
 this.emailComposer.open(email);
 }
 

 }


 //download Resume 
 download() {
 this.presentLoading();
 const url = this.resume_download_url;
 this.fileName = url.substring(url.lastIndexOf("/") + 1)
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
}
