import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployerjobapplicationsPage } from './employerjobapplications.page';
var routes = [
    {
        path: '',
        component: EmployerjobapplicationsPage
    }
];
var EmployerjobapplicationsPageModule = /** @class */ (function () {
    function EmployerjobapplicationsPageModule() {
    }
    EmployerjobapplicationsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployerjobapplicationsPage]
        })
    ], EmployerjobapplicationsPageModule);
    return EmployerjobapplicationsPageModule;
}());
export { EmployerjobapplicationsPageModule };
//# sourceMappingURL=employerjobapplications.module.js.map