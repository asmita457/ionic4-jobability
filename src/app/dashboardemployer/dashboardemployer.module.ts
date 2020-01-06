import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { dashboardemployerPage } from './dashboardemployer.page';

const routes: Routes = [
  {
    path: '',
    component: dashboardemployerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [dashboardemployerPage]
})
export class dashboardemployerPageModule {}
