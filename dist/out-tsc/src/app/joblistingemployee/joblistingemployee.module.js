import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JoblistingemployeePage } from './joblistingemployee.page';
var routes = [
    {
        path: '',
        component: JoblistingemployeePage
    }
];
var JoblistingemployeePageModule = /** @class */ (function () {
    function JoblistingemployeePageModule() {
    }
    JoblistingemployeePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [JoblistingemployeePage]
        })
    ], JoblistingemployeePageModule);
    return JoblistingemployeePageModule;
}());
export { JoblistingemployeePageModule };
//# sourceMappingURL=joblistingemployee.module.js.map