import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServicedetailsPage } from './servicedetails.page';
var routes = [
    {
        path: '',
        component: ServicedetailsPage
    }
];
var ServicedetailsPageModule = /** @class */ (function () {
    function ServicedetailsPageModule() {
    }
    ServicedetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ServicedetailsPage]
        })
    ], ServicedetailsPageModule);
    return ServicedetailsPageModule;
}());
export { ServicedetailsPageModule };
//# sourceMappingURL=servicedetails.module.js.map