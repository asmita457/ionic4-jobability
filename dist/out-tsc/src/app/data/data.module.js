import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DataPage } from './data.page';
var routes = [
    {
        path: '',
        component: DataPage
    }
];
var DataPageModule = /** @class */ (function () {
    function DataPageModule() {
    }
    DataPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DataPage]
        })
    ], DataPageModule);
    return DataPageModule;
}());
export { DataPageModule };
//# sourceMappingURL=data.module.js.map