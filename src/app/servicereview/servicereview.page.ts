import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Location } from '@angular/common';

export enum COLORS {
  GREY = "#E0E0E0",
  BLUE = "#2b0c43",
}

@Component({
  selector: 'app-servicereview',
  templateUrl: './servicereview.page.html',
  styleUrls: ['./servicereview.page.scss'],
})
export class ServicereviewPage implements OnInit {

  @Input() rating: number;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  Comment: any
  serviceId: any
  userId: any
  commitResponse: any
  showCommnet: any
  showCommentErrorMsg: boolean = false
  ratingResponse: any
  serviceProviderId: any
  ratingCount: any
  ratingButton: boolean
  rateFlag: boolean
  navFromServiceDetails: any
  showCommitButton: boolean

  jobId: any
  personeName: any
  emailId: any
  jobTitle: any

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataServices: DataservicesService,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private location: Location,

    // public modalCtrl: ModalController

  ) {
    this.serviceId = (this.activatedRoute.snapshot.paramMap.get('serviceId'))
    this.showCommnet = (this.activatedRoute.snapshot.paramMap.get('showCommnet'))
    if (this.showCommnet == 'true') {
      this.showCommitButton = true
    }
    this.serviceProviderId = (this.activatedRoute.snapshot.paramMap.get('serviceProviderId'));
    this.ratingCount = (this.activatedRoute.snapshot.paramMap.get('ratingCount'))
    this.userId = localStorage.getItem('users_id')
    this.navFromServiceDetails = (this.activatedRoute.snapshot.paramMap.get('navFromServiceDetails'))


    if (this.navFromServiceDetails != 'true') {
      this.showCommnet = "true"
      this.showCommitButton = true
      this.jobId = (this.activatedRoute.snapshot.paramMap.get('jobId'))
      this.personeName = (this.activatedRoute.snapshot.paramMap.get('personeName'))
      this.emailId = (this.activatedRoute.snapshot.paramMap.get('emailId'))
      this.jobTitle = (this.activatedRoute.snapshot.paramMap.get('jobTitle'))
    }

    if (this.ratingCount == 'null') {
      this.rating = null
      this.ratingButton = true
    } else {
      this.rate(this.ratingCount)
      this.ratingButton = false
    }
  }

  ngOnInit() {
  }


  ionViewWillEnter() {
    if (this.ratingCount != 'null') {
      this.rateFlag = true
    } else {
      this.rateFlag = false
    }
  }


  //Function for validate comment
  validationForComment() {
    if (this.Comment == null || this.Comment.trim() == "" || this.Comment == undefined) {
      this.showCommentErrorMsg = true

    } else {
      this.showCommentErrorMsg = false
    }
  }

  Submit() {
    if (this.Comment == null || this.Comment.trim() == "" || this.Comment == undefined) {
      this.showCommentErrorMsg = true
      // this.errorAlert('','Please enter comment')
      return
    } else {
      if (this.navFromServiceDetails != 'true') {

        this.raiseQuery(this.jobId, this.personeName, this.emailId, this.jobTitle, this.Comment, this.userId)

      } else {
        this.submitComment(this.serviceId, this.Comment, this.userId)
      }
    }
  }

  //Comment on service
  submitComment(serviceID, comment, users_id) {

    // if (this.Comment == null || this.Comment.trim() == "" || this.Comment == undefined) {
    //   this.presentAlert('', 'Please enter comment')
    //   return
    // } else {
    this.presentLoading()
    this.dataServices.commentOnService(serviceID, comment, users_id).then((result) => {
      this.commitResponse = result
      this.loadingController.dismiss()
      if (this.commitResponse.status == 1) {
        setTimeout(_ => {
          this.presentAlert('', this.commitResponse.message);
        }, 500);
        // this.showServiceDetails = true
        // this.showRating = false
        // this.showContact = false
        // this.serviceDetails.total_service_contact = 1
      } else {
        this.presentAlert('', this.commitResponse.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in commit service: ' + JSON.stringify(error))

    })
    // }
  }

  raiseQuery(jobId, personName, emailId, jobTitle, comment, users_id) {

    // if (this.Comment == null || this.Comment.trim() == "" || this.Comment == undefined) {
    //   this.presentAlert('', 'Please enter comment')
    //   return
    // } else {

    this.presentLoading()
    this.dataServices.raiseQuery(jobId, personName, emailId, jobTitle, comment, users_id).then((result) => {
      this.commitResponse = result
      this.loadingController.dismiss()
      if (this.commitResponse.status == 1) {
        this.showCommitButton = false

        setTimeout(_ => {
          this.presentAlert('', this.commitResponse.message);
        }, 500);

        // this.showServiceDetails = true
        // this.showRating = false
        // this.showContact = false
        // this.serviceDetails.total_service_contact = 1
      } else {
        this.presentAlert('', this.commitResponse.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in commit service: ' + JSON.stringify(error))

    })
    // }
  }

  rate(index: number) {
    if (this.rateFlag) {
      this.presentAlert("", "You have already rated for this service")
      return
    } else {
      this.rating = index;
      this.ratingChange.emit(this.rating)
    }
    // if (this.rateFlag != null) {
    // this.presentAlert("", "You have already rated for this service")
    // return
    // } else {
    // this.rating = index;
    // this.ratingChange.emit(this.rating)
    // }


  }

  getColor(index: number) {
    if (this.isAboveRating(index)) {
      return COLORS.GREY;
    }
    switch (this.rating) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return COLORS.BLUE;
    }
  }

  isAboveRating(index: number): boolean {
    return index > this.rating
  }

  submitRating() {
    if (this.rating != null) {
      this.dataServices.rateForService(this.serviceId, this.serviceProviderId, this.userId, this.rating).then((result) => {
        this.ratingResponse = result
        this.loadingController.dismiss()
        if (this.ratingResponse.status == 1) {
          this.rateFlag = true

          // this.showServiceDetails = true
          // this.showContact = false
          // this.showRating = false

          this.ratingButton = false
          // this.serviceDetails.total_service_contact = 1
          // this.rateFlag = 1
          setTimeout(_ => {
            this.presentAlert('', this.ratingResponse.message);
          }, 500);
        } else {
          this.presentAlert('', this.ratingResponse.message);
        }
      }, error => {
        this.loadingController.dismiss();
        console.log('Error in commit service: ' + JSON.stringify(error))
      })
    } else {
      this.errorAlert("", "please rate service")
      return
    }

  }

  closePage() {
    this.location.back();

    // if (this.navFromServiceDetails != 'true') {
    //   this.router.navigate(['/searchjobdetail', { jobId: this.jobId, navFromServiceReview: true }],{skipLocationChange: true})

    // } else {
    //   this.router.navigate(['/servicedetails', { serviceId: this.serviceId }],{skipLocationChange: true})
    // }

  }
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
    console.log('Loading dismissed!' + role + ' Data: ' + data);

  }//Display Function Ends Here 


  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
          this.closePage();
          // this.router.navigate(['/searchservices'])

        }
      }]
    });
    await alert.present();
  }

  async errorAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
          if (title != 0) {
          }
          // this.router.navigate(['/searchservices'])

        }
      }]
    });
    await alert.present();
  }

  ionViewWillLeave() {
    this.loadingController.dismiss();
  }

}
