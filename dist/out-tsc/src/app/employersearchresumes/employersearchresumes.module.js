import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployersearchresumesPage } from './employersearchresumes.page';
var routes = [
    {
        path: '',
        component: EmployersearchresumesPage
    }
];
var EmployersearchresumesPageModule = /** @class */ (function () {
    function EmployersearchresumesPageModule() {
    }
    EmployersearchresumesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployersearchresumesPage]
        })
    ], EmployersearchresumesPageModule);
    return EmployersearchresumesPageModule;
}());
export { EmployersearchresumesPageModule };
//# sourceMappingURL=employersearchresumes.module.js.map