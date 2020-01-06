import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PostjobPage } from './postjob.page';
var routes = [
    {
        path: '',
        component: PostjobPage
    }
];
var PostjobPageModule = /** @class */ (function () {
    function PostjobPageModule() {
    }
    PostjobPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PostjobPage]
        })
    ], PostjobPageModule);
    return PostjobPageModule;
}());
export { PostjobPageModule };
//# sourceMappingURL=postjob.module.js.map