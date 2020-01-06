import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdateserviceproviderorganisationinfoPage } from './updateserviceproviderorganisationinfo.page';
import { MatInputModule, MatIconModule, MatSelectModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: UpdateserviceproviderorganisationinfoPage
    }
];
var UpdateserviceproviderorganisationinfoPageModule = /** @class */ (function () {
    function UpdateserviceproviderorganisationinfoPageModule() {
    }
    UpdateserviceproviderorganisationinfoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                MatInputModule,
                MatIconModule,
                MatSelectModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdateserviceproviderorganisationinfoPage]
        })
    ], UpdateserviceproviderorganisationinfoPageModule);
    return UpdateserviceproviderorganisationinfoPageModule;
}());
export { UpdateserviceproviderorganisationinfoPageModule };
//# sourceMappingURL=updateserviceproviderorganisationinfo.module.js.map