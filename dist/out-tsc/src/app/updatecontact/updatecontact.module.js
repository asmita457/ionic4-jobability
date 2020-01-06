import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdatecontactPage } from './updatecontact.page';
import { MatInputModule, MatIconModule, MatSelectModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: UpdatecontactPage
    }
];
var UpdatecontactPageModule = /** @class */ (function () {
    function UpdatecontactPageModule() {
    }
    UpdatecontactPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                // ReactiveFormsModule,
                ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                MatInputModule,
                MatIconModule,
                MatSelectModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdatecontactPage]
        })
    ], UpdatecontactPageModule);
    return UpdatecontactPageModule;
}());
export { UpdatecontactPageModule };
//# sourceMappingURL=updatecontact.module.js.map