import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiceproviderprofilePage } from './serviceproviderprofile.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceproviderprofilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceproviderprofilePage]
})
export class ServiceproviderprofilePageModule {}
