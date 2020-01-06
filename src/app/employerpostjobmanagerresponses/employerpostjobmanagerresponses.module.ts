import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployerpostjobmanagerresponsesPage } from './employerpostjobmanagerresponses.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerpostjobmanagerresponsesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployerpostjobmanagerresponsesPage]
})
export class EmployerpostjobmanagerresponsesPageModule {}
