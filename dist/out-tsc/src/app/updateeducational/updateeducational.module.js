import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdateeducationalPage } from './updateeducational.page';
import { MatInputModule, MatIconModule, MatSelectModule, MatRadioModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: UpdateeducationalPage
    }
];
var UpdateeducationalPageModule = /** @class */ (function () {
    function UpdateeducationalPageModule() {
    }
    UpdateeducationalPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                MatInputModule,
                MatIconModule,
                MatSelectModule,
                MatRadioModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdateeducationalPage]
        })
    ], UpdateeducationalPageModule);
    return UpdateeducationalPageModule;
}());
export { UpdateeducationalPageModule };
//# sourceMappingURL=updateeducational.module.js.map