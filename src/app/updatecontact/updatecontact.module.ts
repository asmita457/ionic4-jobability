import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpdatecontactPage } from './updatecontact.page';
import { MatInputModule, MatIconModule,MatSelectModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: UpdatecontactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpdatecontactPage]
})
export class UpdatecontactPageModule {}
