import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployerpostjobrequirementPage } from './employerpostjobrequirement.page';
var routes = [
    {
        path: '',
        component: EmployerpostjobrequirementPage
    }
];
var EmployerpostjobrequirementPageModule = /** @class */ (function () {
    function EmployerpostjobrequirementPageModule() {
    }
    EmployerpostjobrequirementPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployerpostjobrequirementPage]
        })
    ], EmployerpostjobrequirementPageModule);
    return EmployerpostjobrequirementPageModule;
}());
export { EmployerpostjobrequirementPageModule };
//# sourceMappingURL=employerpostjobrequirement.module.js.map