import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employershortlistedcandidate',
  templateUrl: './employershortlistedcandidate.page.html',
  styleUrls: ['./employershortlistedcandidate.page.scss'],
})
export class EmployershortlistedcandidatePage implements OnInit {


  shortlistedCandidateResponse : any
  offset = 0
  uacc_id: any
  shortlistedCandidateData = []
  showCandidatesList = true
  shortlistedCandidateCount: any
  showProfilePhoto: boolean
  hideProfilePhoto: boolean
  moreDataAvailable: boolean
  badgecount: any
  badgeResultData: any

  constructor(
    private loadingController: LoadingController,
    private dataServices: DataservicesService,
    private alertCtrl: AlertController,
    private router: Router
    ) { }

  ngOnInit() {
    

  }

  ionViewWillEnter(){
    this.uacc_id = localStorage.getItem('users_id')
    this.getListofShortlistedCandidates(this.uacc_id , this.offset);
    this.shortlistedCandidateData = [] 
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
   //Functino For get shortlisted candidate list  
   getListofShortlistedCandidates(id, offset) {
    this.presentLoading();
    this.dataServices.shortlistedCandidateListAPI(id, offset).then((result) => {
      this.shortlistedCandidateResponse = result;
      if (this.shortlistedCandidateResponse.status == 1) {
        
        this.loadingController.dismiss();
        this.shortlistedCandidateData = this.shortlistedCandidateResponse.shortlisted_candidated_list
        // this.presentAlert('', this.shortlistedCandidateData);
        this.shortlistedCandidateCount = this.shortlistedCandidateResponse.total_shortlisted_candidated
     
        if (this.shortlistedCandidateCount < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }

        if (this.shortlistedCandidateCount != 0) {
          this.showCandidatesList = true;
        } else {
          this.showCandidatesList = false;
        }
      } else {
        this.loadingController.dismiss();

      }
    }, error => {
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


  // Function For Load Data While Scrolling
  loadData(event) {
    setTimeout(() => {
      this.offset += this.dataServices.globalOffset();

  
      if (this.offset > this.shortlistedCandidateCount) {
        this.moreDataAvailable = false
      } else {
        this.moreDataAvailable = true
        this.getListofShortlistedCandidates(this.uacc_id,this.offset);
        // this.getSearchResumesResult(
        //   this.skills, this.minExperience, this.maxExperience, this.currency, this.annual_ctc_from, this.annual_ctc_to, this.disability_id,
        //   this.location, this.offset, this.uacc_id)
        // event.target.complete();
      }
    },100)
   
    
  } //loadData Function Eds Here.
 


  //Function for show cadidate profile 
  candidateProfileDetails(item) {
    let resumeId = item.id;

    this.router.navigate(['/empcandidateprofile',{ resumeId: resumeId}])
  } //candidateProfileDetails ends here


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
}
