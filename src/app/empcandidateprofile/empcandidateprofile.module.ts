import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmpcandidateprofilePage } from './empcandidateprofile.page';

const routes: Routes = [
  {
    path: '',
    component: EmpcandidateprofilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmpcandidateprofilePage]
})
export class EmpcandidateprofilePageModule {}
