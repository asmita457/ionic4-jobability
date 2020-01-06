import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dashboardemployerPage } from './dashboardemployer.page';

describe('dashboardemployerPage', () => {
  let component: dashboardemployerPage;
  let fixture: ComponentFixture<dashboardemployerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dashboardemployerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dashboardemployerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
