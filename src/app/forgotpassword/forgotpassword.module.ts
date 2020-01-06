import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule, MatIconModule } from '@angular/material';

import { IonicModule } from '@ionic/angular';

import { ForgotpasswordPage } from './forgotpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgotpasswordPage]
})
export class ForgotpasswordPageModule {}
