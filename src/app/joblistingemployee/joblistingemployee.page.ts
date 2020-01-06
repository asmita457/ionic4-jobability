import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';

@Component({
  selector: 'app-joblistingemployee',
  templateUrl: './joblistingemployee.page.html',
  styleUrls: ['./joblistingemployee.page.scss'],
})
export class JoblistingemployeePage implements OnInit {

 

  jobListingResponse: any


  employerJobListingArray = []
  jobApplicationCount: any
  jobApplication: any
  showPostJobList = true
  jobListingLength: any
  skills: any
  minExperience: number
  maxExperience: number
  currency: any
  annual_ctc_from: number
  annual_ctc_to: number
  disability_id = []
  location: any
  offset = 0;
  uacc_id: any
  searchResumeDataFlag: any
  moreDataAvailable: boolean
  profile_photo_path: any
  queryraise: any
  badgecount: any
  badgeResultData: any
  constructor(private router: Router,
    public loadingController: LoadingController,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    // this.getJobListingResult();

  }


  ionViewWillEnter(){
    this.presentLoading();
    this.employerJobListingArray = []
    this.getJobListingResult();
    this.offset = 0
    this.getNotificationBadgeCount()
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
  getJobListingResult() {
    if (this.offset == 0) {
      this.presentLoading();
    }
    this.uacc_id = localStorage.getItem('users_id');
    // this.presentLoading();
    this.dataServices.getJobListingAPI( this.uacc_id, this.offset).then((result) => {
      this.jobListingResponse = result;
      if (this.jobListingResponse.status == 1) {

        this.employerJobListingArray = this.employerJobListingArray.concat(this.jobListingResponse.job_list)
        this.jobListingLength = this.jobListingResponse.job_total_count
        console.log('search resume data:', this.jobListingResponse)

        if (this.offset == 0 && this.jobListingLength > this.dataServices.globalOffset()) {
          this.loadingController.dismiss()
          // this.offset = 1
        }
        if (this.jobListingLength < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }
        
        if (this.jobApplicationCount != 0) {
          this.showPostJobList = true;
        } else {
          this.showPostJobList = false;
        }

      } else {
        if (this.offset == 0) {
          this.loadingController.dismiss();
        }
        alert(this.jobListingResponse.message);

      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

//Function for show detail of employer post job
  employerJobDetail(id){
    this.router.navigate(['/employerjobdetail' ,{ jobId : id}])
  }//employerJobDetail Function Eds Here.



    // Function For Load Data While Scrolling
    loadData(event) {
      setTimeout(() => {
        this.offset += this.dataServices.globalOffset();
        // event.target.disabled = false;
        // this.infiniteScroll.disabled = false;
    
        if (this.offset > this.jobListingLength) {
          // event.target.disabled = true;
          this.moreDataAvailable = false
    
    
        } else {
          this.moreDataAvailable = true
          this.getJobListingResult()
          event.target.complete();
        }
      },100)
     
      
    } //loadData Function Eds Here.

  
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


  queryRaised(id, total_raised_query_count){
    console.log('id', id)
    console.log('total_raised_query_count',total_raised_query_count)
    if(total_raised_query_count == 0)
    {
      this.presentAlert('No query raised', '');
    }
    else{
      this.router.navigate(['/employerqueryraised', {id : id}])
    }
  }

  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
