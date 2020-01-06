import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecommandedjobsPage } from './recommandedjobs.page';
var routes = [
    {
        path: '',
        component: RecommandedjobsPage
    }
];
var RecommandedjobsPageModule = /** @class */ (function () {
    function RecommandedjobsPageModule() {
    }
    RecommandedjobsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RecommandedjobsPage]
        })
    ], RecommandedjobsPageModule);
    return RecommandedjobsPageModule;
}());
export { RecommandedjobsPageModule };
//# sourceMappingURL=recommandedjobs.module.js.map