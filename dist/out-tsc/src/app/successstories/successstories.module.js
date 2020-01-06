import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SuccessstoriesPage } from './successstories.page';
var routes = [
    {
        path: '',
        component: SuccessstoriesPage
    }
];
var SuccessstoriesPageModule = /** @class */ (function () {
    function SuccessstoriesPageModule() {
    }
    SuccessstoriesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SuccessstoriesPage]
        })
    ], SuccessstoriesPageModule);
    return SuccessstoriesPageModule;
}());
export { SuccessstoriesPageModule };
//# sourceMappingURL=successstories.module.js.map