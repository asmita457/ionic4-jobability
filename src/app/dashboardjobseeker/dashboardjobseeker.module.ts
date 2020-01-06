import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { dashboardjobseekerPage } from './dashboardjobseeker.page';
import { MatInputModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: dashboardjobseekerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  declarations: [dashboardjobseekerPage]
})
export class dashboardjobseekerPageModule {}
