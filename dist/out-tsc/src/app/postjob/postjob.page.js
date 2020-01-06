import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var PostjobPage = /** @class */ (function () {
    function PostjobPage(router) {
        this.router = router;
    }
    PostjobPage.prototype.ngOnInit = function () {
    };
    PostjobPage.prototype.closePage = function () {
        this.router.navigate(['/dashboardemployer']);
    };
    PostjobPage.prototype.postJob = function () {
    };
    PostjobPage = tslib_1.__decorate([
        Component({
            selector: 'app-postjob',
            templateUrl: './postjob.page.html',
            styleUrls: ['./postjob.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], PostjobPage);
    return PostjobPage;
}());
export { PostjobPage };
//# sourceMappingURL=postjob.page.js.map