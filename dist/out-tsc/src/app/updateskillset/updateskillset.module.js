import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdateskillsetPage } from './updateskillset.page';
import { MatInputModule, MatIconModule, MatSelectModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: UpdateskillsetPage
    }
];
var UpdateskillsetPageModule = /** @class */ (function () {
    function UpdateskillsetPageModule() {
    }
    UpdateskillsetPageModule = tslib_1.__decorate([
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
            declarations: [UpdateskillsetPage]
        })
    ], UpdateskillsetPageModule);
    return UpdateskillsetPageModule;
}());
export { UpdateskillsetPageModule };
//# sourceMappingURL=updateskillset.module.js.map