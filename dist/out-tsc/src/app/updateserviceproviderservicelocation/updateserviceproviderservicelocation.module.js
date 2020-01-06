import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdateserviceproviderservicelocationPage } from './updateserviceproviderservicelocation.page';
import { MatSelectModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: UpdateserviceproviderservicelocationPage
    }
];
var UpdateserviceproviderservicelocationPageModule = /** @class */ (function () {
    function UpdateserviceproviderservicelocationPageModule() {
    }
    UpdateserviceproviderservicelocationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                MatSelectModule,
                ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                RouterModule.forChild(routes)
            ],
            declarations: [UpdateserviceproviderservicelocationPage]
        })
    ], UpdateserviceproviderservicelocationPageModule);
    return UpdateserviceproviderservicelocationPageModule;
}());
export { UpdateserviceproviderservicelocationPageModule };
//# sourceMappingURL=updateserviceproviderservicelocation.module.js.map