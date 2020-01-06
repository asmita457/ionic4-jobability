import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateserviceproviderorganisationinfoPage } from './updateserviceproviderorganisationinfo.page';

describe('UpdateserviceproviderorganisationinfoPage', () => {
  let component: UpdateserviceproviderorganisationinfoPage;
  let fixture: ComponentFixture<UpdateserviceproviderorganisationinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateserviceproviderorganisationinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateserviceproviderorganisationinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
