import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { UpdateserviceproviderpostservicecontactinfoPage } from './updateserviceproviderpostservicecontactinfo.page';
describe('UpdateserviceproviderpostservicecontactinfoPage', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UpdateserviceproviderpostservicecontactinfoPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UpdateserviceproviderpostservicecontactinfoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=updateserviceproviderpostservicecontactinfo.page.spec.js.map