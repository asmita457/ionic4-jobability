import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployerpostjoblocationPage } from './employerpostjoblocation.page';
var routes = [
    {
        path: '',
        component: EmployerpostjoblocationPage
    }
];
var EmployerpostjoblocationPageModule = /** @class */ (function () {
    function EmployerpostjoblocationPageModule() {
    }
    EmployerpostjoblocationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployerpostjoblocationPage]
        })
    ], EmployerpostjoblocationPageModule);
    return EmployerpostjoblocationPageModule;
}());
export { EmployerpostjoblocationPageModule };
//# sourceMappingURL=employerpostjoblocation.module.js.map