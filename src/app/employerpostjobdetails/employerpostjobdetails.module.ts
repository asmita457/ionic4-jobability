import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployerpostjobdetailsPage } from './employerpostjobdetails.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerpostjobdetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployerpostjobdetailsPage]
})
export class EmployerpostjobdetailsPageModule {}
