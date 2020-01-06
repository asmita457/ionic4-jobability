import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrackjobsjobseekerPage } from './trackjobsjobseeker.page';

const routes: Routes = [
  {
    path: '',
    component: TrackjobsjobseekerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrackjobsjobseekerPage]
})
export class TrackjobsjobseekerPageModule {}
