import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployerprofilePage } from './employerprofile.page';
var routes = [
    {
        path: '',
        component: EmployerprofilePage
    }
];
var EmployerprofilePageModule = /** @class */ (function () {
    function EmployerprofilePageModule() {
    }
    EmployerprofilePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployerprofilePage]
        })
    ], EmployerprofilePageModule);
    return EmployerprofilePageModule;
}());
export { EmployerprofilePageModule };
//# sourceMappingURL=employerprofile.module.js.map