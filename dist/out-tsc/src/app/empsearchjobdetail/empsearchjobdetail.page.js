import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
var EmpsearchjobdetailPage = /** @class */ (function () {
    function EmpsearchjobdetailPage(router, Location) {
        this.router = router;
        this.Location = Location;
    }
    EmpsearchjobdetailPage.prototype.ngOnInit = function () {
    };
    EmpsearchjobdetailPage.prototype.updateJobDescription = function () {
    };
    EmpsearchjobdetailPage.prototype.goBack = function () {
        this.Location.back();
        // this.routera   .navigate(['/empsearchjobs']);
    };
    EmpsearchjobdetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-empsearchjobdetail',
            templateUrl: './empsearchjobdetail.page.html',
            styleUrls: ['./empsearchjobdetail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location])
    ], EmpsearchjobdetailPage);
    return EmpsearchjobdetailPage;
}());
export { EmpsearchjobdetailPage };
//# sourceMappingURL=empsearchjobdetail.page.js.map