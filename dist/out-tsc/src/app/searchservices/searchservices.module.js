import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchservicesPage } from './searchservices.page';
import { MatSelectModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: SearchservicesPage
    }
];
var SearchservicesPageModule = /** @class */ (function () {
    function SearchservicesPageModule() {
    }
    SearchservicesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                MatSelectModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SearchservicesPage]
        })
    ], SearchservicesPageModule);
    return SearchservicesPageModule;
}());
export { SearchservicesPageModule };
//# sourceMappingURL=searchservices.module.js.map