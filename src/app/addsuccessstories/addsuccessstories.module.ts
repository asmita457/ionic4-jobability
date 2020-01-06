import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddsuccessstoriesPage } from './addsuccessstories.page';
import { MatInputModule, MatIconModule, MatRadioModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: AddsuccessstoriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddsuccessstoriesPage]
})
export class AddsuccessstoriesPageModule { }
