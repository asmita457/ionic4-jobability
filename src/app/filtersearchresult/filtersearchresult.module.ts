import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FiltersearchresultPage } from './filtersearchresult.page';
import { MatInputModule, MatIconModule,MatSelectModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: FiltersearchresultPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FiltersearchresultPage]
})
export class FiltersearchresultPageModule {}
