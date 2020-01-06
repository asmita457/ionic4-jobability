import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SavedjobsPage } from './savedjobs.page';
var routes = [
    {
        path: '',
        component: SavedjobsPage
    }
];
var SavedjobsPageModule = /** @class */ (function () {
    function SavedjobsPageModule() {
    }
    SavedjobsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SavedjobsPage]
        })
    ], SavedjobsPageModule);
    return SavedjobsPageModule;
}());
export { SavedjobsPageModule };
//# sourceMappingURL=savedjobs.module.js.map