import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginWithOtpAndForgetPasswordPage } from './login-with-otp-and-forget-password.page';
import { MatInputModule, MatIconModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: LoginWithOtpAndForgetPasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginWithOtpAndForgetPasswordPage]
})
export class LoginWithOtpAndForgetPasswordPageModule {}
