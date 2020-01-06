import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EmployerpostjobcontactdetailsPage = /** @class */ (function () {
    function EmployerpostjobcontactdetailsPage(router) {
        this.router = router;
    }
    EmployerpostjobcontactdetailsPage.prototype.ngOnInit = function () {
    };
    EmployerpostjobcontactdetailsPage.prototype.closePage = function () {
        this.router.navigate(['/dashboardemployer']);
    };
    EmployerpostjobcontactdetailsPage.prototype.nextPage = function () {
        this.router.navigate(['/employerpostjobjoblocation']);
    };
    EmployerpostjobcontactdetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-employerpostjobcontactdetails',
            templateUrl: './employerpostjobcontactdetails.page.html',
            styleUrls: ['./employerpostjobcontactdetails.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EmployerpostjobcontactdetailsPage);
    return EmployerpostjobcontactdetailsPage;
}());
export { EmployerpostjobcontactdetailsPage };
//# sourceMappingURL=employerpostjobcontactdetails.page.js.map