import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServicesdetailinfoPage } from './servicesdetailinfo.page';
var routes = [
    {
        path: '',
        component: ServicesdetailinfoPage
    }
];
var ServicesdetailinfoPageModule = /** @class */ (function () {
    function ServicesdetailinfoPageModule() {
    }
    ServicesdetailinfoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ServicesdetailinfoPage]
        })
    ], ServicesdetailinfoPageModule);
    return ServicesdetailinfoPageModule;
}());
export { ServicesdetailinfoPageModule };
//# sourceMappingURL=servicesdetailinfo.module.js.map