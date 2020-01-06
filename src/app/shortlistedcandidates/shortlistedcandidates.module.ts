import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShortlistedcandidatesPage } from './shortlistedcandidates.page';

const routes: Routes = [
  {
    path: '',
    component: ShortlistedcandidatesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShortlistedcandidatesPage]
})
export class ShortlistedcandidatesPageModule {}
