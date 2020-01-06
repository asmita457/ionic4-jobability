import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OtpgeneratedsuccessfullyPage } from './otpgeneratedsuccessfully.page';
var routes = [
    {
        path: '',
        component: OtpgeneratedsuccessfullyPage
    }
];
var OtpgeneratedsuccessfullyPageModule = /** @class */ (function () {
    function OtpgeneratedsuccessfullyPageModule() {
    }
    OtpgeneratedsuccessfullyPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OtpgeneratedsuccessfullyPage]
        })
    ], OtpgeneratedsuccessfullyPageModule);
    return OtpgeneratedsuccessfullyPageModule;
}());
export { OtpgeneratedsuccessfullyPageModule };
//# sourceMappingURL=otpgeneratedsuccessfully.module.js.map