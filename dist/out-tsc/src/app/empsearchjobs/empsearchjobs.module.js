import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmpsearchjobsPage } from './empsearchjobs.page';
var routes = [
    {
        path: '',
        component: EmpsearchjobsPage
    }
];
var EmpsearchjobsPageModule = /** @class */ (function () {
    function EmpsearchjobsPageModule() {
    }
    EmpsearchjobsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmpsearchjobsPage]
        })
    ], EmpsearchjobsPageModule);
    return EmpsearchjobsPageModule;
}());
export { EmpsearchjobsPageModule };
//# sourceMappingURL=empsearchjobs.module.js.map