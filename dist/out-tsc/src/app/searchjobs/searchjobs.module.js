import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchjobsPage } from './searchjobs.page';
var routes = [
    {
        path: '',
        component: SearchjobsPage
    }
];
var SearchjobsPageModule = /** @class */ (function () {
    function SearchjobsPageModule() {
    }
    SearchjobsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SearchjobsPage]
        })
    ], SearchjobsPageModule);
    return SearchjobsPageModule;
}());
export { SearchjobsPageModule };
//# sourceMappingURL=searchjobs.module.js.map