import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JoblistingemployeePage } from './joblistingemployee.page';

const routes: Routes = [
  {
    path: '',
    component: JoblistingemployeePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JoblistingemployeePage]
})
export class JoblistingemployeePageModule {}
