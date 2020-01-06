import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditservicesPage } from './editservices.page';
import { MatInputModule, MatIconModule,MatSelectModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: EditservicesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule.forChild(routes)
  ],
  declarations: [EditservicesPage]
})
export class EditservicesPageModule {}
