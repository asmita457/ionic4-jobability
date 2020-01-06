import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchresumesPage } from './searchresumes.page';
var routes = [
    {
        path: '',
        component: SearchresumesPage
    }
];
var SearchresumesPageModule = /** @class */ (function () {
    function SearchresumesPageModule() {
    }
    SearchresumesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SearchresumesPage]
        })
    ], SearchresumesPageModule);
    return SearchresumesPageModule;
}());
export { SearchresumesPageModule };
//# sourceMappingURL=searchresumes.module.js.map