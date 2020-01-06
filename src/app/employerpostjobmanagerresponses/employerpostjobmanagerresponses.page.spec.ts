import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerpostjobmanagerresponsesPage } from './employerpostjobmanagerresponses.page';

describe('EmployerpostjobmanagerresponsesPage', () => {
  let component: EmployerpostjobmanagerresponsesPage;
  let fixture: ComponentFixture<EmployerpostjobmanagerresponsesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerpostjobmanagerresponsesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerpostjobmanagerresponsesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
