import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { dashboardemployerPage } from './dashboardemployer.page';
var routes = [
    {
        path: '',
        component: dashboardemployerPage
    }
];
var dashboardemployerPageModule = /** @class */ (function () {
    function dashboardemployerPageModule() {
    }
    dashboardemployerPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [dashboardemployerPage]
        })
    ], dashboardemployerPageModule);
    return dashboardemployerPageModule;
}());
export { dashboardemployerPageModule };
//# sourceMappingURL=dashboardemployer.module.js.map