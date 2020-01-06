import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OtpgenerationPage } from './otpgeneration.page';

const routes: Routes = [
  {
    path: '',
    component: OtpgenerationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OtpgenerationPage]
})
export class OtpgenerationPageModule {}
