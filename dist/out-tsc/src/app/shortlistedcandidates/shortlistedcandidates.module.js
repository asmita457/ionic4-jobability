import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShortlistedcandidatesPage } from './shortlistedcandidates.page';
var routes = [
    {
        path: '',
        component: ShortlistedcandidatesPage
    }
];
var ShortlistedcandidatesPageModule = /** @class */ (function () {
    function ShortlistedcandidatesPageModule() {
    }
    ShortlistedcandidatesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ShortlistedcandidatesPage]
        })
    ], ShortlistedcandidatesPageModule);
    return ShortlistedcandidatesPageModule;
}());
export { ShortlistedcandidatesPageModule };
//# sourceMappingURL=shortlistedcandidates.module.js.map