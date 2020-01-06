import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Title }  from '@angular/platform-browser';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireModule } from '@angular/fire';

export const firebaseConfig = {
  apiKey: "AIzaSyAosIHoOFd8gBDdE7N_DLxsYMxmomv7S2U",
  authDomain: "jobability.firebaseapp.com",
  databaseURL: "https://jobability-4306c.firebaseio.com/",
  projectId: "jobability-4306c",
  storageBucket: "jobability-4306c.appspot.com",
  messagingSenderId: "515947629896"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    // FiltersearchresultPages 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule ,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    FilePath,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    AppVersion,
    AndroidPermissions,
    EmailComposer,
    FCM,
    SocialSharing,
    PhonegapLocalNotification,
    LocalNotifications,
    Base64,
    InAppBrowser,
    Title,
    TextToSpeech,
    MobileAccessibility,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
