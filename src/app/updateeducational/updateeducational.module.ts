import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdateeducationalPage } from './updateeducational.page';
import { MatInputModule, MatIconModule, MatSelectModule, MatRadioModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: UpdateeducationalPage
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
    MatSelectModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdateeducationalPage]
})
export class UpdateeducationalPageModule { }
