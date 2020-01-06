import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DashboardserviceproviderPage } from './dashboardserviceprovider.page';
var routes = [
    {
        path: '',
        component: DashboardserviceproviderPage
    }
];
var DashboardserviceproviderPageModule = /** @class */ (function () {
    function DashboardserviceproviderPageModule() {
    }
    DashboardserviceproviderPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                IonicModule.forRoot({
                    mode: 'ios',
                    scrollAssist: false,
                    scrollPadding: false
                }),
            ],
            declarations: [DashboardserviceproviderPage]
        })
    ], DashboardserviceproviderPageModule);
    return DashboardserviceproviderPageModule;
}());
export { DashboardserviceproviderPageModule };
//# sourceMappingURL=dashboardserviceprovider.module.js.map