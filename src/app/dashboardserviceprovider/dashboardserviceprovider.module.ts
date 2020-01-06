import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardserviceproviderPage } from './dashboardserviceprovider.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardserviceproviderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicModule.forRoot({
      mode: 'ios',
      scrollAssist: false,
      scrollPadding: false
    }),

  ],
  declarations: [DashboardserviceproviderPage]
})
export class DashboardserviceproviderPageModule { }
