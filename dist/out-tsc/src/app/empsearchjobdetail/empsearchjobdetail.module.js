import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmpsearchjobdetailPage } from './empsearchjobdetail.page';
var routes = [
    {
        path: '',
        component: EmpsearchjobdetailPage
    }
];
var EmpsearchjobdetailPageModule = /** @class */ (function () {
    function EmpsearchjobdetailPageModule() {
    }
    EmpsearchjobdetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmpsearchjobdetailPage]
        })
    ], EmpsearchjobdetailPageModule);
    return EmpsearchjobdetailPageModule;
}());
export { EmpsearchjobdetailPageModule };
//# sourceMappingURL=empsearchjobdetail.module.js.map