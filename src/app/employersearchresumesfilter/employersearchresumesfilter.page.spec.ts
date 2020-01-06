import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersearchresumesfilterPage } from './employersearchresumesfilter.page';

describe('EmployersearchresumesfilterPage', () => {
  let component: EmployersearchresumesfilterPage;
  let fixture: ComponentFixture<EmployersearchresumesfilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersearchresumesfilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersearchresumesfilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
