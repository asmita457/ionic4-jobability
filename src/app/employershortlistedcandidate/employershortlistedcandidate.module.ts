import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployershortlistedcandidatePage } from './employershortlistedcandidate.page';

const routes: Routes = [
  {
    path: '',
    component: EmployershortlistedcandidatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployershortlistedcandidatePage]
})
export class EmployershortlistedcandidatePageModule {}
