import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dashboardjobseekerPage } from './dashboardjobseeker.page';

describe('dashboardjobseekerPage', () => {
  let component: dashboardjobseekerPage;
  let fixture: ComponentFixture<dashboardjobseekerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dashboardjobseekerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dashboardjobseekerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
