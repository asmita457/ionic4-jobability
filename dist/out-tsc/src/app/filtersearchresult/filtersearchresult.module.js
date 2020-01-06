import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FiltersearchresultPage } from './filtersearchresult.page';
import { MatInputModule, MatIconModule, MatSelectModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: FiltersearchresultPage
    }
];
var FiltersearchresultPageModule = /** @class */ (function () {
    function FiltersearchresultPageModule() {
    }
    FiltersearchresultPageModule = tslib_1.__decorate([
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
            declarations: [FiltersearchresultPage]
        })
    ], FiltersearchresultPageModule);
    return FiltersearchresultPageModule;
}());
export { FiltersearchresultPageModule };
//# sourceMappingURL=filtersearchresult.module.js.map