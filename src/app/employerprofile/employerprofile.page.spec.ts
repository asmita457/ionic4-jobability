import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerprofilePage } from './employerprofile.page';

describe('EmployerprofilePage', () => {
  let component: EmployerprofilePage;
  let fixture: ComponentFixture<EmployerprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
