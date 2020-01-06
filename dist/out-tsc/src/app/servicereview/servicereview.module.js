import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServicereviewPage } from './servicereview.page';
var routes = [
    {
        path: '',
        component: ServicereviewPage
    }
];
var ServicereviewPageModule = /** @class */ (function () {
    function ServicereviewPageModule() {
    }
    ServicereviewPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ServicereviewPage]
        })
    ], ServicereviewPageModule);
    return ServicereviewPageModule;
}());
export { ServicereviewPageModule };
//# sourceMappingURL=servicereview.module.js.map