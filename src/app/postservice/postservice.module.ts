import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PostservicePage } from './postservice.page';
import { MatInputModule, MatIconModule, MatSelectModule, MatRadioModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: PostservicePage
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
    MatListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostservicePage]
})
export class PostservicePageModule { }
