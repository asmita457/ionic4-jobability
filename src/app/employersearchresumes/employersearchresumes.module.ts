import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployersearchresumesPage } from './employersearchresumes.page';

const routes: Routes = [
  {
    path: '',
    component: EmployersearchresumesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployersearchresumesPage]
})
export class EmployersearchresumesPageModule {}
