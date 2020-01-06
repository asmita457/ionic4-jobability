import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerpostjobdetailsPage } from './employerpostjobdetails.page';

describe('EmployerpostjobdetailsPage', () => {
  let component: EmployerpostjobdetailsPage;
  let fixture: ComponentFixture<EmployerpostjobdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerpostjobdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerpostjobdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
