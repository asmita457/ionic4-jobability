import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployershortlistedcandidatesPage } from './employershortlistedcandidates.page';

const routes: Routes = [
  {
    path: '',
    component: EmployershortlistedcandidatesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployershortlistedcandidatesPage]
})
export class EmployershortlistedcandidatesPageModule {}
