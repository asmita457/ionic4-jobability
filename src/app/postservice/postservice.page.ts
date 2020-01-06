import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { Location } from '@angular/common';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-postservice',
  templateUrl: './postservice.page.html',
  styleUrls: ['./postservice.page.scss'],
})
export class PostservicePage implements OnInit {
  postServiceDetailsForm: FormGroup;
  showErrorIcon: boolean = false
  Serviceofferedlist: any = []
  disabilitylist: any = []
  countryList: any = []
  stateCityList: any = []


  selectedCount = 0;
  maxCount = 3;

  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    public dataServices: DataservicesService,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    private location: Location,
    private filePath: FilePath,
    public formBuilder: FormBuilder,

  ) {

  }

  ngOnInit() {
    this.buildForm()
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false)
    this.getServiceProviderDropDownList()
    this.getCountryListInformation()
  }

  buildForm() {
    this.postServiceDetailsForm = this.formBuilder.group({
      serviceTitle: ['', Validators.required],
      serviceoffered: ['', Validators.required],
      disability: ['', Validators.required],
      brief: ['', Validators.required],
      description: ['', Validators.required],
      country: ['', Validators.required],
      preferredStateCity: ['', Validators.required],
      status: [''],
      showDetailsToApplicants: ['']
    });
  }
  
  updateSelectedCount(count: number) {
    this.selectedCount = count;
    // if (count === this.maxCount) {
    //   this.showAlert('You should not select Preferred State/City more than 3','')

    // }
  }
  
  getServiceProviderDropDownList() {
    this.dataServices.getDDLAPI(0).then((result: any) => {
      if (result.status == 1) {
        this.Serviceofferedlist = result.ddl_list.service_offered_list
        this.disabilitylist = result.ddl_list.disability_list
      }
    }, error => {
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  getCountryListInformation() {
    this.presentLoading();
    this.dataServices.getCountryArrayAPI().then((result: any) => {
      if (result.status == 1) {
        this.countryList = result.country_list
        this.loadingController.dismiss()
      } else {
        this.loadingController.dismiss()
      }
    }, error => {
      this.loadingController.dismiss()
      console.log('Error in postservice: ' + JSON.stringify(error))
    })
  }

  selectedCountryValue(countryId: any) {
    this.getStateCityListInformation(countryId)
  }

  getStateCityListInformation(country_id) {
    this.presentLoading();
    this.dataServices.getStateCountryList(country_id).then((result: any) => {
      if (result.status == 1) {
        this.stateCityList = result.state_city_list
        this.loadingController.dismiss()
      } else {
        this.loadingController.dismiss()
      }
    }, error => {
      this.loadingController.dismiss()
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }




  postServiceDetails(formDeatails) {
    if (this.postServiceDetailsForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      this.presentLoading()
      this.showErrorIcon = false
      formDeatails.showDetailsToApplicants = formDeatails.showDetailsToApplicants == false ? '0' : '1'
      let postData = {
        "service_name": formDeatails.serviceTitle,
        "service_description": formDeatails.description,
        "brife": formDeatails.brief,
        "status": formDeatails.status,
        "show_contact": formDeatails.showDetailsToApplicants,
        "upload_file": [],
        "country_id": formDeatails.country,
        "state_city_id": formDeatails.preferredStateCity.toString(),
        "servicetype_id": formDeatails.serviceoffered.toString(),
        "disability_id": formDeatails.disability.toString(),
        "verify_email": "1",
        "uacc_id": localStorage.getItem('users_id')
      }

      this.dataServices.postServices(postData).then((result: any) => {
        if (result.status == 1) {
          this.loadingController.dismiss()
          this.presentAlert(result.message, '')
        } else {
          this.loadingController.dismiss()
          this.presentAlert(result.message, '')
        }
      }, error => {
        this.loadingController.dismiss()
        console.log('Error in login: ' + JSON.stringify(error))
      })
    }
  }

  closePage() {
    this.location.back()
  }

  postServicesAPI(postData: any) {
    this.presentLoading();
    this.dataServices.postServices(postData).then((result: any) => {
      console.log(result)
      if (result.status == 1) {
        console.log('Country List', result)
        this.loadingController.dismiss()
        this.presentAlert(result.message, '')
      } else {
        this.loadingController.dismiss()
        this.presentAlert(result.message, '')
      }
    }, error => {
      this.loadingController.dismiss()
      console.log('Error in login: ' + JSON.stringify(error))
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
  }
  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      // buttons: ['OK']
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (title != 'File Type')
              this.closePage()
          }
        }
      ]
    });
    await alert.present();
  }

  async showAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,

      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
    
      }]
      
    });
    await alert.present();
  }



}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
