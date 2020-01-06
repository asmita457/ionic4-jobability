import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicesdetailinfoPage } from './servicesdetailinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesdetailinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServicesdetailinfoPage]
})
export class ServicesdetailinfoPageModule {}
