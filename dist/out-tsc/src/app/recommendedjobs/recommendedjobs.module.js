import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecommendedjobsPage } from './recommendedjobs.page';
var routes = [
    {
        path: '',
        component: RecommendedjobsPage
    }
];
var RecommendedjobsPageModule = /** @class */ (function () {
    function RecommendedjobsPageModule() {
    }
    RecommendedjobsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RecommendedjobsPage]
        })
    ], RecommendedjobsPageModule);
    return RecommendedjobsPageModule;
}());
export { RecommendedjobsPageModule };
//# sourceMappingURL=recommendedjobs.module.js.map