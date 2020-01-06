import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataservicesService } from '../providers/dataservices/dataservices.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-updateserviceproviderpostservicecontactinfo',
  templateUrl: './updateserviceproviderpostservicecontactinfo.page.html',
  styleUrls: ['./updateserviceproviderpostservicecontactinfo.page.scss'],
})
export class UpdateserviceproviderpostservicecontactinfoPage implements OnInit {


  updateContactInfoForm: FormGroup;
  showErrorIcon: boolean = false
  editServiceContactInformationDetails: any = []
  checkStatus: any
  fileName: any
  filePathURI: any
  isFileSelected: boolean = false
  fileUploadResponse: any

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    public dataServices: DataservicesService,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    private filePath: FilePath,
    public formBuilder: FormBuilder,

  ) {

    this.editServiceContactInformationDetails = []
    this.editServiceContactInformationDetails = JSON.parse((this.activatedRoute.snapshot.paramMap.get('item')))
    this.checkStatus = this.editServiceContactInformationDetails.show_contact == 0 ? false : true
    this.fileName = this.editServiceContactInformationDetails.upload_filename
  }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.updateContactInfoForm = this.formBuilder.group({
      checkStatus: [''],
      status: ['']
    });
  }

  uploadFile() {
    this.fileChooser.open()
      .then(uri => {
        this.filePathURI = uri
        this.filePath.resolveNativePath(uri)
          .then(url => {
            let choosedFileName = url.substring(url.lastIndexOf("/") + 1);
            var fileExtension = choosedFileName.split('.');
            if (fileExtension[1] == 'pdf' || fileExtension[1] == 'PDF' || fileExtension[1] == 'doc' || fileExtension[1] == 'DOC' || fileExtension[1] == 'docx' || fileExtension[1] == 'DOCX') {
              this.fileName = url.substring(url.lastIndexOf("/") + 1);
              let fileURL = url.split(" ").join("%20")
              this.isFileSelected = true
            } else {
              this.loadingController.dismiss();
              // this.showResume = false;
              // this.fileName = '';
              this.presentAlert('File Type', 'You can choose only .pdf, .doc or .docx types of file', '');
            }
          })
      }).catch(e => console.log(e));
  }

  updateContactInfo(form) {
    if (this.isFileSelected) {
      var headers = new Headers();
      // headers.append('Content-Type', 'multipart/form-data' );
      headers.append('Access-Control-Allow-Headers', 'Content-Type');
      headers.append('Access-Control-Allow-Origin', '*');
      let options: FileUploadOptions = {
        headers: headers,
        fileKey: 'upload_file',
        fileName: this.fileName.split(" ").join("%20"),
        chunkedMode: false,
        params: {
          "id": this.editServiceContactInformationDetails.Service_id,
          "status": form.status,
          "show_contact": form.checkStatus == true ? 1 : 0,
        }
      }

      this.presentLoading()
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.upload(this.filePathURI, 'http://www.jobability.org/api/post_functionality/update_service_post_contact', options)
        .then((data) => {
          this.fileUploadResponse = data;
          this.loadingController.dismiss();
          if (JSON.parse(this.fileUploadResponse.response).status == 1) {
            this.presentAlert(JSON.parse(this.fileUploadResponse.response).message, '', 'Success')
          } else {
            this.presentAlert(JSON.parse(this.fileUploadResponse.response).message, '', '')
          }
        }, (err) => {
          // error
          console.log('error: ' + err)
          this.loadingController.dismiss();
          this.presentAlert("", "Upload Failed", '');
        })
    } else {
      let postData = {
        "id": this.editServiceContactInformationDetails.Service_id,
        "status": form.status,
        "show_contact": form.checkStatus == true ? 1 : 0,
        "upload_file": []
      }
      this.updateContactInfoAPI(postData)
    }
  }

  updateContactInfoAPI(postData: any) {
    this.presentLoading();
    this.dataServices.updateServicesContactinfo(postData).then((result: any) => {
      console.log(result)
      result = result
      if (result.status == 1) {
        this.loadingController.dismiss()
        this.presentAlert(result.message, '', 'Success')
      } else {
        this.loadingController.dismiss()
        this.presentAlert(result.message, '', '')
      }
    }, error => {
      this.loadingController.dismiss()
    })
  }

  closePage() {
    this.location.back()
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

  async presentAlert(title, message, status) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      // buttons: ['OK']
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (status == 'Success') {
              this.closePage()
            }
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
