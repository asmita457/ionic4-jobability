import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmpcandidateprofilePage } from './empcandidateprofile.page';
var routes = [
    {
        path: '',
        component: EmpcandidateprofilePage
    }
];
var EmpcandidateprofilePageModule = /** @class */ (function () {
    function EmpcandidateprofilePageModule() {
    }
    EmpcandidateprofilePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmpcandidateprofilePage]
        })
    ], EmpcandidateprofilePageModule);
    return EmpcandidateprofilePageModule;
}());
export { EmpcandidateprofilePageModule };
//# sourceMappingURL=empcandidateprofile.module.js.map