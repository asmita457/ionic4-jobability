import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServiceproviderprofilePage } from './serviceproviderprofile.page';
var routes = [
    {
        path: '',
        component: ServiceproviderprofilePage
    }
];
var ServiceproviderprofilePageModule = /** @class */ (function () {
    function ServiceproviderprofilePageModule() {
    }
    ServiceproviderprofilePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ServiceproviderprofilePage]
        })
    ], ServiceproviderprofilePageModule);
    return ServiceproviderprofilePageModule;
}());
export { ServiceproviderprofilePageModule };
//# sourceMappingURL=serviceproviderprofile.module.js.map