import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateserviceproviderorganisationinfoPage } from './updateserviceproviderorganisationinfo.page';
import { MatInputModule, MatIconModule, MatSelectModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: UpdateserviceproviderorganisationinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateserviceproviderorganisationinfoPage]
})
export class UpdateserviceproviderorganisationinfoPageModule { }
