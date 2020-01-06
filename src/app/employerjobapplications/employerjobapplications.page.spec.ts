import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerjobapplicationsPage } from './employerjobapplications.page';

describe('EmployerjobapplicationsPage', () => {
  let component: EmployerjobapplicationsPage;
  let fixture: ComponentFixture<EmployerjobapplicationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerjobapplicationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerjobapplicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
