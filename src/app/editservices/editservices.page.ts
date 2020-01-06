import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-editservices',
  templateUrl: './editservices.page.html',
  styleUrls: ['./editservices.page.scss'],
})
export class EditservicesPage implements OnInit {

  editServiceForm: FormGroup;
  showErrorIcon: boolean = false
  editServiceDetails: any = []
  categoryArray: any = []
  disabilityArray: any[]

  constructor
    (
      private router: Router,
      private location: Location,
      private activatedRoute: ActivatedRoute,
      public dataServices: DataservicesService,
      public loadingController: LoadingController,
      public alertCtrl: AlertController,
      public formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.buildForm()
    this.editServiceDetails = JSON.parse((this.activatedRoute.snapshot.paramMap.get('item')))
    this.categoryArray = this.editServiceDetails.Service_Category_list
    this.disabilityArray = this.editServiceDetails.Disability_Served_list
  }


  ionViewWillEnter() {
  }

  // Forms declaration
  buildForm() {
    this.editServiceForm = this.formBuilder.group({
      serviceTitle: ['', Validators.required],
      serviceCategory: ['', Validators.required],
      disability: ['', Validators.required],
      brief: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  closePage() {
    this.location.back()
  }

  updateServiceDetail(form) {
    if (this.editServiceForm.invalid) {
      this.showErrorIcon = true
      return
    } else {
      this.presentLoading()
      this.showErrorIcon = false

      let postData = {
        "service_name": form.serviceTitle,
        "servicetype_id": form.serviceCategory,
        "disability_id": form.disability,
        "brife": form.brief,
        "service_description": form.description,
        "id": this.editServiceDetails.Service_id,
      }

      this.dataServices.updateServicesDetail(postData).then((res: any) => {
        this.loadingController.dismiss();
        if (res.status == 1) {
          this.presentAlert(res.message, '');
        }
        else {
          this.presentAlert(res.message, '');
        }
      }, (error) => {
        this.loadingController.dismiss();
        console.log(error);
      });

    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 500);
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
            this.closePage()
          }
        }
      ]
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
