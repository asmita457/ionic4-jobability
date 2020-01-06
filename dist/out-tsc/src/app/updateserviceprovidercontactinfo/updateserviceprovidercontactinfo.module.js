import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdateserviceprovidercontactinfoPage } from './updateserviceprovidercontactinfo.page';
import { MatInputModule, MatIconModule, MatSelectModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: UpdateserviceprovidercontactinfoPage
    }
];
var UpdateserviceprovidercontactinfoPageModule = /** @class */ (function () {
    function UpdateserviceprovidercontactinfoPageModule() {
    }
    UpdateserviceprovidercontactinfoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                MatInputModule,
                MatIconModule,
                MatSelectModule,
                ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                RouterModule.forChild(routes)
            ],
            declarations: [UpdateserviceprovidercontactinfoPage]
        })
    ], UpdateserviceprovidercontactinfoPageModule);
    return UpdateserviceprovidercontactinfoPageModule;
}());
export { UpdateserviceprovidercontactinfoPageModule };
//# sourceMappingURL=updateserviceprovidercontactinfo.module.js.map