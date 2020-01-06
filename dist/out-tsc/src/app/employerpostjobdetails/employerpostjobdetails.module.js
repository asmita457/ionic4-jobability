import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployerpostjobdetailsPage } from './employerpostjobdetails.page';
var routes = [
    {
        path: '',
        component: EmployerpostjobdetailsPage
    }
];
var EmployerpostjobdetailsPageModule = /** @class */ (function () {
    function EmployerpostjobdetailsPageModule() {
    }
    EmployerpostjobdetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployerpostjobdetailsPage]
        })
    ], EmployerpostjobdetailsPageModule);
    return EmployerpostjobdetailsPageModule;
}());
export { EmployerpostjobdetailsPageModule };
//# sourceMappingURL=employerpostjobdetails.module.js.map