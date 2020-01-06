import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdateserviceproviderpostservicecontactinfoPage } from './updateserviceproviderpostservicecontactinfo.page';
import { MatRadioModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: UpdateserviceproviderpostservicecontactinfoPage
    }
];
var UpdateserviceproviderpostservicecontactinfoPageModule = /** @class */ (function () {
    function UpdateserviceproviderpostservicecontactinfoPageModule() {
    }
    UpdateserviceproviderpostservicecontactinfoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                MatRadioModule,
                ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                RouterModule.forChild(routes)
            ],
            declarations: [UpdateserviceproviderpostservicecontactinfoPage]
        })
    ], UpdateserviceproviderpostservicecontactinfoPageModule);
    return UpdateserviceproviderpostservicecontactinfoPageModule;
}());
export { UpdateserviceproviderpostservicecontactinfoPageModule };
//# sourceMappingURL=updateserviceproviderpostservicecontactinfo.module.js.map