import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecommendedjobsPage } from './recommendedjobs.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendedjobsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecommendedjobsPage]
})
export class RecommendedjobsPageModule {}
