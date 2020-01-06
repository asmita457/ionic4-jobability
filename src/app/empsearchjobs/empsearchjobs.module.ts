import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmpsearchjobsPage } from './empsearchjobs.page';

const routes: Routes = [
  {
    path: '',
    component: EmpsearchjobsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmpsearchjobsPage]
})
export class EmpsearchjobsPageModule {}
