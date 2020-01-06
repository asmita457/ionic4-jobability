import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateemployeeemployerinfoPage } from './updateemployeeemployerinfo.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateemployeeemployerinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateemployeeemployerinfoPage]
})
export class UpdateemployeeemployerinfoPageModule {}
