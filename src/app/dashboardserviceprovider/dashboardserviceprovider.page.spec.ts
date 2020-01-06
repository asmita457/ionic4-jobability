import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardserviceproviderPage } from './dashboardserviceprovider.page';

describe('DashboardserviceproviderPage', () => {
  let component: DashboardserviceproviderPage;
  let fixture: ComponentFixture<DashboardserviceproviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardserviceproviderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardserviceproviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
