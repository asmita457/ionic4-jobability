import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OtpgenerationPage } from './otpgeneration.page';
var routes = [
    {
        path: '',
        component: OtpgenerationPage
    }
];
var OtpgenerationPageModule = /** @class */ (function () {
    function OtpgenerationPageModule() {
    }
    OtpgenerationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OtpgenerationPage]
        })
    ], OtpgenerationPageModule);
    return OtpgenerationPageModule;
}());
export { OtpgenerationPageModule };
//# sourceMappingURL=otpgeneration.module.js.map