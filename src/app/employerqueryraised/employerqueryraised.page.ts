import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LoadingController } from '@ionic/angular';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employerqueryraised',
  templateUrl: './employerqueryraised.page.html',
  styleUrls: ['./employerqueryraised.page.scss'],
})
export class EmployerqueryraisedPage implements OnInit {


  offset = 0;
  uacc_id: any
  queryListingResponse: any
  id: any
  employerQueryListingArray = []
  queryListingLength: any
  moreDataAvailable: boolean
 

  constructor(
    private location: Location,
    private loadingController: LoadingController,
    private dataServices: DataservicesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.employerQueryListingArray = []
    this.id = JSON.parse(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getQueryRaisedData();
  }

  closePage() {
    this.location.back();
  }

  getQueryRaisedData() {
    if (this.offset == 0) {
      this.presentLoading();
    }
    this.dataServices.getQueryRaisedDataAPI(this.id, this.offset).then((result) => {
      this.queryListingResponse = result;
      if (this.queryListingResponse.status == 1) {

        this.employerQueryListingArray = this.employerQueryListingArray.concat(this.queryListingResponse.seeker_raised_query_list)
        this.queryListingLength = this.queryListingResponse.total_seeker_raised_query
        console.log('search resume data:', this.queryListingResponse)

        if (this.offset == 0 && this.queryListingLength > 20) {
          this.loadingController.dismiss()
          // this.offset = 1
        }
        if (this.queryListingLength < this.dataServices.globalOffset()) {
          this.moreDataAvailable = false
        } else {
          this.moreDataAvailable = true
        }


      } else {
        if (this.offset == 0) {
          this.loadingController.dismiss();
        }
        alert(this.queryListingResponse.message);

      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  // Function For Load Data While Scrolling
  loadData(event) {
    setTimeout(() => {
      this.offset += this.dataServices.globalOffset();
      // event.target.disabled = false;
      // this.infiniteScroll.disabled = false;

      if (this.offset > this.queryListingLength) {
        // event.target.disabled = true;
        this.moreDataAvailable = false


      } else {
        this.moreDataAvailable = true
        this.getQueryRaisedData()
        event.target.complete();
      }
    }, 100)


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

}
