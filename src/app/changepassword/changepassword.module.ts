import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChangepasswordPage } from './changepassword.page';
import { MatInputModule, MatIconModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: ChangepasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),

    RouterModule.forChild(routes)
  ],
  declarations: [ChangepasswordPage]
})
export class ChangepasswordPageModule { }
