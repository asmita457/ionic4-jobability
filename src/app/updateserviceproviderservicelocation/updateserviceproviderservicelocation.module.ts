import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateserviceproviderservicelocationPage } from './updateserviceproviderservicelocation.page';
import { MatSelectModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: UpdateserviceproviderservicelocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatSelectModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateserviceproviderservicelocationPage]
})
export class UpdateserviceproviderservicelocationPageModule { }
