import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployerpostjobmanagerresponsesPage } from './employerpostjobmanagerresponses.page';
var routes = [
    {
        path: '',
        component: EmployerpostjobmanagerresponsesPage
    }
];
var EmployerpostjobmanagerresponsesPageModule = /** @class */ (function () {
    function EmployerpostjobmanagerresponsesPageModule() {
    }
    EmployerpostjobmanagerresponsesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployerpostjobmanagerresponsesPage]
        })
    ], EmployerpostjobmanagerresponsesPageModule);
    return EmployerpostjobmanagerresponsesPageModule;
}());
export { EmployerpostjobmanagerresponsesPageModule };
//# sourceMappingURL=employerpostjobmanagerresponses.module.js.map