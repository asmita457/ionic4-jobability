import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdateworkexperiencePage } from './updateworkexperience.page';
import { MatInputModule, MatIconModule, MatSelectModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: UpdateworkexperiencePage
    }
];
var UpdateworkexperiencePageModule = /** @class */ (function () {
    function UpdateworkexperiencePageModule() {
    }
    UpdateworkexperiencePageModule = tslib_1.__decorate([
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
            declarations: [UpdateworkexperiencePage]
        })
    ], UpdateworkexperiencePageModule);
    return UpdateworkexperiencePageModule;
}());
export { UpdateworkexperiencePageModule };
//# sourceMappingURL=updateworkexperience.module.js.map