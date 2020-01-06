import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddsuccessstoriesPage } from './addsuccessstories.page';
import { MatInputModule, MatIconModule, MatRadioModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: AddsuccessstoriesPage
    }
];
var AddsuccessstoriesPageModule = /** @class */ (function () {
    function AddsuccessstoriesPageModule() {
    }
    AddsuccessstoriesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                MatInputModule,
                MatIconModule,
                MatRadioModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddsuccessstoriesPage]
        })
    ], AddsuccessstoriesPageModule);
    return AddsuccessstoriesPageModule;
}());
export { AddsuccessstoriesPageModule };
//# sourceMappingURL=addsuccessstories.module.js.map