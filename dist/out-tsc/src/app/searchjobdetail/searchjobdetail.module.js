import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SearchjobdetailPage } from './searchjobdetail.page';
var routes = [
    {
        path: '',
        component: SearchjobdetailPage
    }
];
var SearchjobdetailPageModule = /** @class */ (function () {
    function SearchjobdetailPageModule() {
    }
    SearchjobdetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SearchjobdetailPage]
        })
    ], SearchjobdetailPageModule);
    return SearchjobdetailPageModule;
}());
export { SearchjobdetailPageModule };
//# sourceMappingURL=searchjobdetail.module.js.map