import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployerpostjobcontactdetailsPage } from './employerpostjobcontactdetails.page';
var routes = [
    {
        path: '',
        component: EmployerpostjobcontactdetailsPage
    }
];
var EmployerpostjobcontactdetailsPageModule = /** @class */ (function () {
    function EmployerpostjobcontactdetailsPageModule() {
    }
    EmployerpostjobcontactdetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployerpostjobcontactdetailsPage]
        })
    ], EmployerpostjobcontactdetailsPageModule);
    return EmployerpostjobcontactdetailsPageModule;
}());
export { EmployerpostjobcontactdetailsPageModule };
//# sourceMappingURL=employerpostjobcontactdetails.module.js.map