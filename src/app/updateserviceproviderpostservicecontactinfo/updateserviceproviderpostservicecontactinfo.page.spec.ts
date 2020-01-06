import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateserviceproviderpostservicecontactinfoPage } from './updateserviceproviderpostservicecontactinfo.page';

describe('UpdateserviceproviderpostservicecontactinfoPage', () => {
  let component: UpdateserviceproviderpostservicecontactinfoPage;
  let fixture: ComponentFixture<UpdateserviceproviderpostservicecontactinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateserviceproviderpostservicecontactinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateserviceproviderpostservicecontactinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
