import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmployershortlistedcandidatesPage } from './employershortlistedcandidates.page';
var routes = [
    {
        path: '',
        component: EmployershortlistedcandidatesPage
    }
];
var EmployershortlistedcandidatesPageModule = /** @class */ (function () {
    function EmployershortlistedcandidatesPageModule() {
    }
    EmployershortlistedcandidatesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EmployershortlistedcandidatesPage]
        })
    ], EmployershortlistedcandidatesPageModule);
    return EmployershortlistedcandidatesPageModule;
}());
export { EmployershortlistedcandidatesPageModule };
//# sourceMappingURL=employershortlistedcandidates.module.js.map