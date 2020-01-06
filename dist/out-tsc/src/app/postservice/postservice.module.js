import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PostservicePage } from './postservice.page';
import { MatInputModule, MatIconModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
var routes = [
    {
        path: '',
        component: PostservicePage
    }
];
var PostservicePageModule = /** @class */ (function () {
    function PostservicePageModule() {
    }
    PostservicePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                MatInputModule,
                MatIconModule,
                MatSelectModule,
                MatRadioModule,
                MatListModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PostservicePage]
        })
    ], PostservicePageModule);
    return PostservicePageModule;
}());
export { PostservicePageModule };
//# sourceMappingURL=postservice.module.js.map