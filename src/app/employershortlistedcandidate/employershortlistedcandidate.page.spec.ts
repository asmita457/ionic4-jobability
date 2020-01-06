import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployershortlistedcandidatePage } from './employershortlistedcandidate.page';

describe('EmployershortlistedcandidatePage', () => {
  let component: EmployershortlistedcandidatePage;
  let fixture: ComponentFixture<EmployershortlistedcandidatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployershortlistedcandidatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployershortlistedcandidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
