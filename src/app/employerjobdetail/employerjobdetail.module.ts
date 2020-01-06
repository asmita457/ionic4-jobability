import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployerjobdetailPage } from './employerjobdetail.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerjobdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployerjobdetailPage]
})
export class EmployerjobdetailPageModule {}
