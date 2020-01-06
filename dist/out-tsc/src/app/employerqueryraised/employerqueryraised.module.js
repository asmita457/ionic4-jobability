import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployerqueryraisedPage } from './employerqueryraised.page';
var routes = [
    {
        path: '',
        component: EmployerqueryraisedPage
    }
];
var EmployerqueryraisedPageModule = /** @class */ (function () {
    function EmployerqueryraisedPageModule() {
    }
    EmployerqueryraisedPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployerqueryraisedPage]
        })
    ], EmployerqueryraisedPageModule);
    return EmployerqueryraisedPageModule;
}());
export { EmployerqueryraisedPageModule };
//# sourceMappingURL=employerqueryraised.module.js.map