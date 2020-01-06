import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackjobsemployeePage } from './trackjobsemployee.page';

const routes: Routes = [
  {
    path: '',
    component: TrackjobsemployeePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackjobsemployeePage]
})
export class TrackjobsemployeePageModule {}
