import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WelcomescreenPage } from './welcomescreen.page';
var routes = [
    {
        path: '',
        component: WelcomescreenPage
    }
];
var WelcomescreenPageModule = /** @class */ (function () {
    function WelcomescreenPageModule() {
    }
    WelcomescreenPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [WelcomescreenPage]
        })
    ], WelcomescreenPageModule);
    return WelcomescreenPageModule;
}());
export { WelcomescreenPageModule };
//# sourceMappingURL=welcomescreen.module.js.map