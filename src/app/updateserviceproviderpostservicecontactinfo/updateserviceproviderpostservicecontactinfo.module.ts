import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateserviceproviderpostservicecontactinfoPage } from './updateserviceproviderpostservicecontactinfo.page';
import { MatRadioModule } from '@angular/material';


const routes: Routes = [
  {
    path: '',
    component: UpdateserviceproviderpostservicecontactinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatRadioModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateserviceproviderpostservicecontactinfoPage]
})
export class UpdateserviceproviderpostservicecontactinfoPageModule { }
