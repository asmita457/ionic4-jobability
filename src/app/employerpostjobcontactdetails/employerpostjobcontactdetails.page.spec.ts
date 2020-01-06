import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerpostjobcontactdetailsPage } from './employerpostjobcontactdetails.page';

describe('EmployerpostjobcontactdetailsPage', () => {
  let component: EmployerpostjobcontactdetailsPage;
  let fixture: ComponentFixture<EmployerpostjobcontactdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerpostjobcontactdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerpostjobcontactdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
