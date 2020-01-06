import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employerjobdetail',
  templateUrl: './employerjobdetail.page.html',
  styleUrls: ['./employerjobdetail.page.scss'],
})
export class EmployerjobdetailPage implements OnInit {

  uacc_id: any
  id: any
  employerJobDetailResponse: any
  employerJobDetailArray = []
  jobId: any
  manageResponsesWalkin = false
  manageResponsesEmail = false
  walkinFromDate: any
  walkin_to_date: any
  applicants_display: any
  hide_salary: any
  hideSalary = true
  show_contact: any
  contactDetailShow = true
  contactDetailHide = false
  employerJobDeleteAPIResponse: any
  applicantDisaply: any

  constructor(
    private location: Location,
    public loadingController: LoadingController,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'));
    // console.log('resumeId:', this.jobId)
    // this.getJobDetail();
  }

  ionViewWillEnter(){
    this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'));
    console.log('resumeId:', this.jobId)
    this.getJobDetail();

  }


  getJobDetail(){
    this.uacc_id = 0
    this.presentLoading();
    this.dataServices.getEmployerJobDetailAPI(this.jobId, this.uacc_id).then((result) => {
      this.employerJobDetailResponse = result;
      if (this.employerJobDetailResponse.status == 1) {
        this.loadingController.dismiss(); 
        this.employerJobDetailArray = this.employerJobDetailResponse.job_details_data[0]
        this.walkinFromDate =this.employerJobDetailResponse.job_details_data[0].walkin_from_date;
        this.walkin_to_date = this.employerJobDetailResponse.job_details_data[0].walkin_to_date;
        this.applicants_display = this.employerJobDetailResponse.job_details_data[0].applicants_display
        this.hide_salary = this.employerJobDetailResponse.job_details_data[0].hide_salary;
        this.show_contact = this.employerJobDetailResponse.job_details_data[0].show_contact;

        if((this.walkinFromDate == 0 && this.walkin_to_date == 0) || this.applicants_display == 1)
        {
          this.manageResponsesEmail = true;
          this.manageResponsesWalkin = false;
        }
        else{
          this.manageResponsesEmail = false;
          this.manageResponsesWalkin = true;
        }

        if(this.applicants_display == 0)
        {
          this.applicantDisaply = "Show"
        }
        else
        {
          this.applicantDisaply = "Hide"
        }

      if(this.hide_salary == 1)
      {
        this.hideSalary = false
      }

      if(this.show_contact == 1)
      {
        this.contactDetailHide = true;
        this.contactDetailShow = false;
      }
      else
      {
        this.contactDetailHide = false;
        this.contactDetailShow = true;
      }
        // this.presentAlert('', this.employerJobDetailResponse.message);

      } else {
        this.loadingController.dismiss();
        // this.presentAlert('', this.employerJobDetailResponse.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }


  deleteJobDetail(){


    this.presentLoading();
    this.dataServices.deleteEmployerJobDetailAPI(this.jobId).then((result) => {
      this.employerJobDeleteAPIResponse = result;
      if (this.employerJobDeleteAPIResponse.status == 1) {
        this.loadingController.dismiss(); 
        // this.employerJobDetailArray = this.employerJobDeleteAPIResponse
       
        this.presentAlert('', this.employerJobDeleteAPIResponse.message);

      } else {
        this.loadingController.dismiss();
        this.presentAlert('', this.employerJobDeleteAPIResponse.message);
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
      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
          this.router.navigate(['/joblistingemployee'])        }
      }]
    });
    await alert.present();
  }

async presentAlertForDelete() {
    const alert = await this.alertCtrl.create({
      subHeader: "Are you sure you want to delete?",
      buttons: [{
        text: 'Cancel',
        cssClass: 'secondary',
        role: 'cancel'
      },
      {
        text: 'OK',
        cssClass: 'secondary',
        handler: _ => {
          //api call

          this.deleteAPICall();
        }
      }]
    });
    await alert.present();
  }

  deleteAPICall(){
    this.presentLoading();
    this.dataServices.deleteEmployerJobDetailAPI(this.jobId).then((result) => {
      this.employerJobDeleteAPIResponse = result;
      if (this.employerJobDeleteAPIResponse.status == 1) {
        this.loadingController.dismiss(); 
        // this.employerJobDetailArray = this.employerJobDeleteAPIResponse
       
        this.presentAlert('', this.employerJobDeleteAPIResponse.message);

      } else {
        this.loadingController.dismiss();
        this.presentAlert('', this.employerJobDeleteAPIResponse.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

   //Display loader 
   async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 6000);
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);

  }//Display Function Ends Here 

  closePage(){
    this.location.back();
    // this.router.navigate(['/'])
  }
}
