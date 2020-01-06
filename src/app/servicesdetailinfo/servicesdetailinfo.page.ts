import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';

export enum COLORS {
  GREY = "#E0E0E0",
  BLUE = "#2b0c43",
}

@Component({
  selector: 'app-servicesdetailinfo',
  templateUrl: './servicesdetailinfo.page.html',
  styleUrls: ['./servicesdetailinfo.page.scss'],
})
export class ServicesdetailinfoPage implements OnInit {

  @Input() ratingCount: number;

  title: any
  category: any = []
  disability: any = []
  serviceid: any
  resultData: any
  deleteResultData: any
  brief: any
  description: any
  country: any
  preferredStateCity: any
  Filename: any
  Status: any
  editServiceDetails = []
  editServiceLocation = []
  editServiceContactInfo = []
  selectedTab = 'details'
  spReviewCommentsList = []
  spRatingList = []
  offset = 0
  moreDataAvailable: boolean

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    public dataServices: DataservicesService,
    public alertCtrl: AlertController,
  ) {

    // this.getServiceProviderIndividualDetail()
    this.serviceid = (this.activatedRoute.snapshot.paramMap.get('item'));
    localStorage.setItem('serviceid', this.serviceid)
  }

  ionViewWillEnter() {
    this.getServiceProviderIndividualDetail()
    this.offset = 0
  }

  ngOnInit() {
  }

  segmentChanged(event) {
    if (event.detail.value == 'details') {
      this.selectedTab = 'details'
    } else if (event.detail.value == 'review') {
      this.selectedTab = 'review'
      this.offset = 0
      this.spReviewCommentsList = []
      this.moreDataAvailable = true
      this.reviewCommentsList(this.serviceid, this.offset)
    } else if (event.detail.value == 'rating') {
      this.selectedTab = 'rating'
      this.offset = 0
      this.spRatingList = []
      this.moreDataAvailable = true
      this.ratingList(this.serviceid, this.offset)
    }
  }

  getServiceProviderIndividualDetail() {
    this.presentLoading();
    this.serviceid = localStorage.getItem('serviceid')
    this.dataServices.getSPIndividualDetails(this.serviceid).then((result : any) => {
      this.resultData = result.my_services_details[0]
      if (this.resultData.status == 1) {
        this.title =  this.resultData.name
        this.category =  this.resultData.service_type_list
        this.disability =  this.resultData.disability_list
        this.brief =  this.resultData.brife
        this.description =  this.resultData.description
        this.country =  this.resultData.country_name
        this.preferredStateCity =  this.resultData.state_city_list
        if ( this.resultData.upload_file == '' ||  this.resultData.upload_file == null ||  this.resultData.upload_file == undefined) {
          this.Filename = 'File not available'
        } else {
          this.Filename =  this.resultData.upload_file
        }
        this.Status =  this.resultData.status_name
        let preselectionCategory = []
        let preselectionDisability = []
        let Service_Category_list = []
        let Disability_Served_list = []
        let state_city_list = []

        for (let i = 0; i <  this.resultData.service_type_master_list.length; i++) {
          Service_Category_list.push( this.resultData.service_type_master_list[i].name)
        }

        for (let i = 0; i <  this.resultData.disability_master_list.length; i++) {
          Disability_Served_list.push( this.resultData.disability_master_list[i].name)
        }
        for (let i = 0; i <  this.resultData.service_type_list.length; i++) {
          preselectionCategory.push( this.resultData.service_type_list[i].id)
        }

        for (let i = 0; i <  this.resultData.disability_list.length; i++) {
          preselectionDisability.push( this.resultData.disability_list[i].id)
        }
        this.editServiceDetails = []
        this.editServiceDetails.push({
          Service_id:  this.resultData.id,
          Service_Title:  this.resultData.name,
          Service_Category: preselectionCategory,
          Disability_Served: preselectionDisability,
          Brief:  this.resultData.brife,
          Description:  this.resultData.description,
          Service_Category_list:  this.resultData.service_type_master_list,
          Disability_Served_list:  this.resultData.disability_master_list
        });

        this.editServiceLocation = []
        this.editServiceLocation.push({
          Service_id:  this.resultData.id,
          Country:  this.resultData.country,
          Preferred_StateCity:  this.resultData.state_city_list
        })

        this.editServiceContactInfo = []
        this.editServiceContactInfo.push({
          Service_id:  this.resultData.id,
          upload_filename: this.Filename,
          upload_filelink:  this.resultData.upload_file_path,
          show_contact:  this.resultData.show_contact,
          Status:  this.resultData.status,
          Status_name:  this.resultData.status_name
        })
        
        this.loadingController.dismiss();
      } else {
        this.loadingController.dismiss();
        this.temAlert("", this.resultData.message);
      }
    }, error => {
      this.loadingController.dismiss();
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  goBack() {
    // this.location.back();
    localStorage.removeItem('serviceid')
    this.router.navigate(['/dashboardserviceprovider']);
  }

  //Display loader 
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    // setTimeout(() => {
    // loading.dismiss();
    // }, 6000);
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);

  }//Display Function Ends Here 

  editService() {
    this.router.navigate(['/editservices', { item: JSON.stringify(this.editServiceDetails[0]) }]);
  }

  editServiceLocationNavigate() {
    this.router.navigate(['/updateserviceproviderservicelocation', { item: JSON.stringify(this.editServiceLocation[0]) }]);

  }
  editServiceContactInfoNavigate() {
    this.router.navigate(['/updateserviceproviderpostservicecontactinfo', { item: JSON.stringify(this.editServiceContactInfo[0]) }]);

  }

  DeleteServices() {
    this.presentLoading()
    this.dataServices.deleteService(this.serviceid).then((result) => {
      console.log(result)
      this.deleteResultData = result
      if (this.deleteResultData.status == 1) {
        console.log('Delete Response:', this.deleteResultData)
        this.loadingController.dismiss()
        this.presentAlert(this.deleteResultData.message, '')
      } else {
        this.loadingController.dismiss()
        this.presentAlert(this.deleteResultData.message, '')
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  reviewCommentsList(id, offset) {
    if (this.offset == 0) {
      this.presentLoading();
    }
    this.dataServices.postSPReviewCommentsList(id, offset).then((result: any) => {
      if (result.status == 1) {

        let totalCommentsCount = result.total_seeker_service_comment
        this.spReviewCommentsList = this.spReviewCommentsList.concat(result.seeker_service_comment_list);
        if (this.offset == 0) {
          this.loadingController.dismiss()
        }

        if (totalCommentsCount < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }
      } else {
        this.loadingController.dismiss()
        this.presentAlert('', result.message)
      }
    }).catch(error => {
      this.loadingController.dismiss()
      console.log('Error: ' + error)
    })
  }

  ratingList(id, offset) {
    if (this.offset == 0) {
      this.presentLoading();
    } this.dataServices.postSPRatingList(id, offset).then((result: any) => {
      if (result.status == 1) {
        let totalRatingCount = result.total_seeker_service_rating
        this.ratingCount = result.average_rating
        this.spRatingList = this.spRatingList.concat(result.seeker_service_rating_list)

        if (this.offset == 0) {
          this.loadingController.dismiss()
        }
        if (totalRatingCount > this.spRatingList.length) {
          //call again
          this.moreDataAvailable = true
        } else {
          //stop call
          this.moreDataAvailable = false
        }
      } else {
        this.loadingController.dismiss()
        this.presentAlert('', result.message)
      }
    }).catch(error => {
      this.loadingController.dismiss()
      console.log('Error: ' + error)
    })
  }

  getColor(index: number) {
    if (this.isAboveRating(index)) {
      return COLORS.GREY;
    }
    switch (index) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return COLORS.BLUE;
    }
  }

  isAboveRating(index: number): boolean {
    return index > this.ratingCount
  }

  // Function For Load Data While Scrolling
  loadData(event) {

    setTimeout(() => {
      this.offset += this.dataServices.globalOffset();
      if (this.selectedTab == 'review') {
        this.reviewCommentsList(this.serviceid, this.offset)
      } else if (this.selectedTab == 'rating') {
        this.ratingList(this.serviceid, this.offset)
      }
      event.target.complete();
    }, 500)

  } //loadData Function Eds Here.
  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      // buttons: ['OK']
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.goBack()
          }
        }
      ]
    });
    await alert.present();
  }

  async temAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      // buttons: ['OK']
      buttons: [
        {
          text: 'OK',
          handler: () => {

          }
        }
      ]
    });
    await alert.present();
  }
  loadMore() {
    this.offset += 10
    this.reviewCommentsList(this.serviceid, this.offset)
  }
}