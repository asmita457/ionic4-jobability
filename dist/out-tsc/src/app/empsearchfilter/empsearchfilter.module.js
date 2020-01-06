import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmpsearchfilterPage } from './empsearchfilter.page';
var routes = [
    {
        path: '',
        component: EmpsearchfilterPage
    }
];
var EmpsearchfilterPageModule = /** @class */ (function () {
    function EmpsearchfilterPageModule() {
    }
    EmpsearchfilterPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmpsearchfilterPage]
        })
    ], EmpsearchfilterPageModule);
    return EmpsearchfilterPageModule;
}());
export { EmpsearchfilterPageModule };
//# sourceMappingURL=empsearchfilter.module.js.map