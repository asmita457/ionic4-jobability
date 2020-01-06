import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchjobdetailPage } from './searchjobdetail.page';

const routes: Routes = [
  {
    path: '',
    component: SearchjobdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchjobdetailPage]
})
export class SearchjobdetailPageModule {}
