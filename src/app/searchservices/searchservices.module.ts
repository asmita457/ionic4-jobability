import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchservicesPage } from './searchservices.page';
import { MatSelectModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: SearchservicesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchservicesPage]
})
export class SearchservicesPageModule {}
