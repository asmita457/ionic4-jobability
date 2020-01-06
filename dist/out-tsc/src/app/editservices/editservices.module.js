import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditservicesPage } from './editservices.page';
import { MatInputModule, MatIconModule, MatSelectModule } from '@angular/material';
var routes = [
    {
        path: '',
        component: EditservicesPage
    }
];
var EditservicesPageModule = /** @class */ (function () {
    function EditservicesPageModule() {
    }
    EditservicesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                MatInputModule,
                MatIconModule,
                MatSelectModule,
                ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
                RouterModule.forChild(routes)
            ],
            declarations: [EditservicesPage]
        })
    ], EditservicesPageModule);
    return EditservicesPageModule;
}());
export { EditservicesPageModule };
//# sourceMappingURL=editservices.module.js.map