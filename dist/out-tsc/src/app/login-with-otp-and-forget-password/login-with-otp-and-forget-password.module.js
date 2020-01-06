import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginWithOtpAndForgetPasswordPage } from './login-with-otp-and-forget-password.page';
import { MatInputModule, MatIconModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: LoginWithOtpAndForgetPasswordPage
    }
];
var LoginWithOtpAndForgetPasswordPageModule = /** @class */ (function () {
    function LoginWithOtpAndForgetPasswordPageModule() {
    }
    LoginWithOtpAndForgetPasswordPageModule = tslib_1.__decorate([
        NgModule({
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
    ], LoginWithOtpAndForgetPasswordPageModule);
    return LoginWithOtpAndForgetPasswordPageModule;
}());
export { LoginWithOtpAndForgetPasswordPageModule };
//# sourceMappingURL=login-with-otp-and-forget-password.module.js.map