import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerpostjoblocationPage } from './employerpostjoblocation.page';

describe('EmployerpostjoblocationPage', () => {
  let component: EmployerpostjoblocationPage;
  let fixture: ComponentFixture<EmployerpostjoblocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerpostjoblocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerpostjoblocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
