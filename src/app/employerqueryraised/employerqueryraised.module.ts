import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployerqueryraisedPage } from './employerqueryraised.page';

const routes: Routes = [
  {
    path: '',
    component: EmployerqueryraisedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployerqueryraisedPage]
})
export class EmployerqueryraisedPageModule {}
