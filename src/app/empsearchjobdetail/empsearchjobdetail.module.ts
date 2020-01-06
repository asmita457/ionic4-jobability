import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmpsearchjobdetailPage } from './empsearchjobdetail.page';

const routes: Routes = [
  {
    path: '',
    component: EmpsearchjobdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmpsearchjobdetailPage]
})
export class EmpsearchjobdetailPageModule {}
