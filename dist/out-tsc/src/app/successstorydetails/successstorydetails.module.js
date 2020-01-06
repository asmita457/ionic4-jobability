import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SuccessstorydetailsPage } from './successstorydetails.page';
var routes = [
    {
        path: '',
        component: SuccessstorydetailsPage
    }
];
var SuccessstorydetailsPageModule = /** @class */ (function () {
    function SuccessstorydetailsPageModule() {
    }
    SuccessstorydetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SuccessstorydetailsPage]
        })
    ], SuccessstorydetailsPageModule);
    return SuccessstorydetailsPageModule;
}());
export { SuccessstorydetailsPageModule };
//# sourceMappingURL=successstorydetails.module.js.map