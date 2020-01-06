import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
var EmpsearchjobsPage = /** @class */ (function () {
    function EmpsearchjobsPage(router, location) {
        this.router = router;
        this.location = location;
        this.empSearchResultsArray = [
            {
                name: 'UBA RAJU',
                title: 'Accountant Manager',
                company: 'Wipro',
                minexp: '0',
                maxexp: '3',
                location: 'pune',
                postdate: '3'
            },
            {
                name: 'UBA RAJU',
                title: 'Accountant Manager',
                company: 'Wipro',
                minexp: '0',
                maxexp: '3',
                location: 'chennai',
                postdate: '3'
            },
            {
                name: 'UBA RAJU',
                title: 'Accountant Manager',
                company: 'Wipro',
                minexp: '0',
                maxexp: '3',
                location: 'mumbai',
                postdate: '3'
            },
            {
                name: 'UBA RAJU',
                title: 'Accountant Manager',
                company: 'Wipro',
                minexp: '0',
                maxexp: '3',
                location: 'pune',
                postdate: '3'
            }
        ];
    }
    EmpsearchjobsPage.prototype.ngOnInit = function () {
    };
    EmpsearchjobsPage.prototype.empSearchJobDetail = function () {
        this.router.navigate(['/empsearchjobdetail']);
    };
    EmpsearchjobsPage.prototype.filterEmpSearchResult = function () {
        this.router.navigate(['/empsearchfilter']);
    };
    EmpsearchjobsPage.prototype.goBack = function () {
        this.location.back();
        // this.router.navigate(['/dashboardemployer']);
    };
    EmpsearchjobsPage = tslib_1.__decorate([
        Component({
            selector: 'app-empsearchjobs',
            templateUrl: './empsearchjobs.page.html',
            styleUrls: ['./empsearchjobs.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location])
    ], EmpsearchjobsPage);
    return EmpsearchjobsPage;
}());
export { EmpsearchjobsPage };
//# sourceMappingURL=empsearchjobs.page.js.map