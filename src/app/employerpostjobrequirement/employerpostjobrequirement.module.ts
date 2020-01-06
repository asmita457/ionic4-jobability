import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployerpostjobrequirementPage } from './employerpostjobrequirement.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerpostjobrequirementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployerpostjobrequirementPage]
})
export class EmployerpostjobrequirementPageModule {}
