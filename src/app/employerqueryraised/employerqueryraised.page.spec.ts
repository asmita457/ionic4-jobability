import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerqueryraisedPage } from './employerqueryraised.page';

describe('EmployerqueryraisedPage', () => {
  let component: EmployerqueryraisedPage;
  let fixture: ComponentFixture<EmployerqueryraisedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerqueryraisedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerqueryraisedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
