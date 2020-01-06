import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployerpostjoblocationPage } from './employerpostjoblocation.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerpostjoblocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployerpostjoblocationPage]
})
export class EmployerpostjoblocationPageModule {}
