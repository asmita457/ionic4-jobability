import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { ActionSheetController, LoadingController, AlertController, Platform } from '@ionic/angular';
import * as Quill from 'quill';
import { Base64 } from '@ionic-native/base64/ngx';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-addsuccessstories',
  templateUrl: './addsuccessstories.page.html',
  styleUrls: ['./addsuccessstories.page.scss'],
})
export class AddsuccessstoriesPage implements OnInit {
  addSuccessstoriesForm: FormGroup;
  showErrorIcon: boolean = false

  title: string = ''
  brief: string = ''
  description: string = ''
  subTitle = ''
  titleErrorMsg = ''
  showTitleErrorMsg: boolean = false
  showBriefErrorMsg: boolean = false
  showDescriptionErrorMsg: boolean = false

  imageData: string = ''
  choosedFileName: string = ''
  ////
  imageDataSrc: any
  uploadedPic: any
  // picImageUrl: any
  quill
  constructor(
    private location: Location,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private file: File,
    private filePath: FilePath,
    private transfer: FileTransfer,
    public loadingController: LoadingController,
    private base64: Base64,
    private alertCtrl: AlertController,
    public platform: Platform,
    public formBuilder: FormBuilder,
    private tts: TextToSpeech,
    private mobileAccessibility: MobileAccessibility,
  ) {
  }

  ngOnInit() {
    this.quill = new Quill('#editor-container', {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }],
          [{ list: 'bullet' }],
          [{ header: 1 }],
          [{ header: 2 }],
          [{ color: ["#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"] }],
          [{ background: ["#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"] }],
          [{ script: 'sub' }],
          [{ script: 'super' }],
          [{ indent: '-1' }],
          [{ indent: '+1' }],
          [{ align: [false, 'center', 'right', 'justify'] }],
          [{ header: [1, 2, false] }],
          [{ size: ['small', false, 'large', 'huge'] }],
        ]
      },
      placeholder: 'Type a desription...',
      theme: 'snow' // or 'bubble'
    });

    this.buildForm()
  }

  // Forms declaration
  buildForm() {
    this.addSuccessstoriesForm = this.formBuilder.group({
      title: ['', Validators.required],
      subTitle: [''],
      brief: ['', Validators.required],
    });
  }

  ionViewWillEnter() {
    this.imageData = 'assets/img/upload.png'
  }

  ionViewDidEnter() {
    this.mobileAccessibility.isScreenReaderRunning().then(bool => {
      if (bool) {
        setTimeout(() => {
          this.tts.speak('Create Success Story Screen')
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
        }, 1000);
      }
    })
  }

  takePhoto(sourceType: number) {

    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imagePath) => {

      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          console.log(filePath);
          this.base64.encodeFile(filePath).then((base64File: string) => {
            this.imageData = base64File
          }, (err) => {
            console.log(err);
          });
        });

      this.imageData = ''
      this.choosedFileName = ''
      this.choosedFileName = imagePath


    }, (err) => {
      console.log(err);
      //this.presentToast(err);
    }).catch(err => {
      console.log('Error in catch: ' + err)
    });
  }



  addSuccessStories(storyDetials) {
    if (this.choosedFileName == "" || this.choosedFileName == "fileNotSelected") {
      // this.presentAlert('','Please select image.')
      this.choosedFileName = "fileNotSelected"
      return
    }
    if (this.addSuccessstoriesForm.invalid) {
      this.showErrorIcon = true
      return
    } if (this.quill.container.innerHTML.length == 447) {
      this.presentAlert('', 'Please insert description');
      return
    }

    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'image_name',
      fileName: this.createFileName(),
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {},
      params: {
        'title': storyDetials.title,
        'sub_title': storyDetials.subTitle,
        'brife': storyDetials.brief,
        'description': this.quill.container.innerHTML.replace('<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action">', ''),
        "uacc_id": localStorage.getItem('users_id')
      }
    }
    this.presentLoading()
    fileTransfer.upload(this.choosedFileName, 'http://www.jobability.org/api/resource/add_success_stories', options)
      .then((data) => {
        console.log(data + " Uploaded Successfully");
        this.loadingController.dismiss()
        let ResultData: any = JSON.parse(data.response)
        if (ResultData.status == 1) {
          // this.photos = ResultData.photo_path
          this.sucessAlert('', ResultData.message)
        } else {
          this.presentAlert('', ResultData.message)
        }

      }, (err) => {
        this.loadingController.dismiss()
        console.log(err);
      });
  }



  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  closePage() {
    this.location.back();
  }

  //Validation on fileds





  // Create a new name for the image
  // private createFileName() {
  // var d = new Date(),
  // n = d.getTime(),
  // newFileName = n + ".jpg";
  // return newFileName;
  // }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Your Action',
      buttons: [{
        text: 'Camera',
        handler: () => {
          // this.openCamera();
          this.takePhoto(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Gallery',
        handler: () => {
          // this.OpenGallery();
          this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
          // this.takePhoto(this.camera.PictureSourceType.SAVEDPHOTOALBUM);
        }
      }, {
        text: 'Cancel',
        role: 'destructive',
        // role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      // spinner: null
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!' + role + ' Data: ' + data);

  }

  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {

        }
      }]
    });
    await alert.present();
  }

  async sucessAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: [{
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
          this.closePage()
        }
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
