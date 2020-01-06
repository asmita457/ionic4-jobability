import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployersearchresumesfilterPage } from './employersearchresumesfilter.page';
var routes = [
    {
        path: '',
        component: EmployersearchresumesfilterPage
    }
];
var EmployersearchresumesfilterPageModule = /** @class */ (function () {
    function EmployersearchresumesfilterPageModule() {
    }
    EmployersearchresumesfilterPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployersearchresumesfilterPage]
        })
    ], EmployersearchresumesfilterPageModule);
    return EmployersearchresumesfilterPageModule;
}());
export { EmployersearchresumesfilterPageModule };
//# sourceMappingURL=employersearchresumesfilter.module.js.map