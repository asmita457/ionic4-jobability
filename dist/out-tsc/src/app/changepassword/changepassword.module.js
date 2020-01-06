import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChangepasswordPage } from './changepassword.page';
import { MatInputModule, MatIconModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: ChangepasswordPage
    }
];
var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                MatInputModule,
                MatIconModule,
                ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                RouterModule.forChild(routes)
            ],
            declarations: [ChangepasswordPage]
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());
export { ChangepasswordPageModule };
//# sourceMappingURL=changepassword.module.js.map