import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersearchresumesPage } from './employersearchresumes.page';

describe('EmployersearchresumesPage', () => {
  let component: EmployersearchresumesPage;
  let fixture: ComponentFixture<EmployersearchresumesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersearchresumesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersearchresumesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
