import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployerpostjobcontactdetailsPage } from './employerpostjobcontactdetails.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerpostjobcontactdetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployerpostjobcontactdetailsPage]
})
export class EmployerpostjobcontactdetailsPageModule {}
