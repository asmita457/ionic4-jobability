import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployershortlistedcandidatePage } from './employershortlistedcandidate.page';
var routes = [
    {
        path: '',
        component: EmployershortlistedcandidatePage
    }
];
var EmployershortlistedcandidatePageModule = /** @class */ (function () {
    function EmployershortlistedcandidatePageModule() {
    }
    EmployershortlistedcandidatePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployershortlistedcandidatePage]
        })
    ], EmployershortlistedcandidatePageModule);
    return EmployershortlistedcandidatePageModule;
}());
export { EmployershortlistedcandidatePageModule };
//# sourceMappingURL=employershortlistedcandidate.module.js.map