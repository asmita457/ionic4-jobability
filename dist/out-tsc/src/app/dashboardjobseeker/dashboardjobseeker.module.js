import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { dashboardjobseekerPage } from './dashboardjobseeker.page';
import { MatInputModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: dashboardjobseekerPage
    }
];
var dashboardjobseekerPageModule = /** @class */ (function () {
    function dashboardjobseekerPageModule() {
    }
    dashboardjobseekerPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                MatInputModule,
                RouterModule.forChild(routes)
            ],
            declarations: [dashboardjobseekerPage]
        })
    ], dashboardjobseekerPageModule);
    return dashboardjobseekerPageModule;
}());
export { dashboardjobseekerPageModule };
//# sourceMappingURL=dashboardjobseeker.module.js.map