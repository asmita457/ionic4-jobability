import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployerjobdetailPage } from './employerjobdetail.page';
var routes = [
    {
        path: '',
        component: EmployerjobdetailPage
    }
];
var EmployerjobdetailPageModule = /** @class */ (function () {
    function EmployerjobdetailPageModule() {
    }
    EmployerjobdetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployerjobdetailPage]
        })
    ], EmployerjobdetailPageModule);
    return EmployerjobdetailPageModule;
}());
export { EmployerjobdetailPageModule };
//# sourceMappingURL=employerjobdetail.module.js.map