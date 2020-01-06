import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { fakeAsync } from '@angular/core/testing';
import { Events, LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-employerjobapplications',
  templateUrl: './employerjobapplications.page.html',
  styleUrls: ['./employerjobapplications.page.scss'],
})
export class EmployerjobapplicationsPage implements OnInit {

  applicationData: any;
  jobApplication: any;
  jobApplicationCount: number;
  showJobApplications: boolean;
  applicationId: any;
  results = []
  aplicationsResponse: any;
  applicationDetails: any = [];
  profile_photo_path: any
  offset = 0
  moreDataAvailable: boolean

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,

  ) {
    this.onPageLoad();
  }

  ngOnInit() {
  }

  goBack() {
    // this.location.back();
    this.router.navigate(['/dashboardemployer'])
  }
  //onPageLoad function call when page is load
  onPageLoad() {
    this.offset = 0
    this.jobApplication = []
    this.applicationData = JSON.parse(localStorage.getItem("applicationData"));
    // this.jobApplication = JSON.parse((this.activatedRoute.snapshot.paramMap.get('jobApplications')));
    // this.jobApplication = JSON.parse(localStorage.getItem("jobApplications"))
    this.jobApplicationCount = this.jobApplication.length
    if(this.jobApplicationCount > 0)
    {
      this.profile_photo_path = this.jobApplication[0].profile_photo_path
    }
    this.applicationId = localStorage.getItem("applicationId")
    this.filterApplications(this.applicationId,this.offset);
    // this.applicationId = JSON.parse((this.activatedRoute.snapshot.paramMap.get('applicationId')));

    this.jobApplicationCount = this.jobApplication.length;
    if (this.jobApplicationCount != 0) {
      this.showJobApplications = true;
    } else {
      this.showJobApplications = false;
    }

  } //onPageLoad function ends here.

  //navigate user to prvious page on clicked of back arrow


  //On change Function when drop down is changed
  jobApplications(item: any) {
    this.jobApplication = []
    this.applicationId = item.detail.value.id
    this.filterApplications(this.applicationId,this.offset);
  }

  //Functino For get job applications 
  filterApplications(id,offset) {
    this.presentLoading();
    this.dataServices.applicationDetails(id,offset).then((result) => {
      this.aplicationsResponse = result;
      if (this.aplicationsResponse.status == 1) {
        this.jobApplication = this.aplicationsResponse.application_apply_data;
        this.jobApplicationCount = this.aplicationsResponse.total_application_apply_data;
        if(this.jobApplicationCount > 0)
        {
          this.profile_photo_path = this.aplicationsResponse.application_apply_data.profile_photo_path;
        }

        if (this.jobApplicationCount < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }

        if (this.jobApplicationCount != 0) {
          this.showJobApplications = true;
        } else {
          this.showJobApplications = false;
        }
        this.loadingController.dismiss();
        localStorage.setItem('jobApplication', this.jobApplication)
        // this.router.navigate(['/employerjobapplications', { jobApplication : this.jobApplication}]);

      } else {
        this.loadingController.dismiss();
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  } //jobApplications function ends here. 

  // Function For Load Data While Scrolling
  loadData(event) {
    setTimeout(() => {
      this.offset += this.dataServices.globalOffset()
      if (this.offset > this.jobApplicationCount) {
        this.moreDataAvailable = false
      } else {
        this.moreDataAvailable = true
        this.filterApplications(this.applicationId, this.offset)
        event.target.complete();
      }
    }, 500)
  } //loadData Function Eds Here.

  //Function for show cadidate profile 
  candidateProfileDetails(item) {
    let resumeId = item;
    this.router.navigate(['/empcandidateprofile',{ resumeId: resumeId}])
  }
  //candidateProfileDetails ends here

  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 600);
    const { role, data } = await loading.onDidDismiss();

  }//Display Function Ends Here 


  //Function For show alert
  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  // presentAlert function ends here.
}
