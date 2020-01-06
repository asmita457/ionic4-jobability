import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TrackjobsemployeePage } from './trackjobsemployee.page';
var routes = [
    {
        path: '',
        component: TrackjobsemployeePage
    }
];
var TrackjobsemployeePageModule = /** @class */ (function () {
    function TrackjobsemployeePageModule() {
    }
    TrackjobsemployeePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TrackjobsemployeePage]
        })
    ], TrackjobsemployeePageModule);
    return TrackjobsemployeePageModule;
}());
export { TrackjobsemployeePageModule };
//# sourceMappingURL=trackjobsemployee.module.js.map