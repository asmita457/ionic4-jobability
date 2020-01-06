import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesdetailinfoPage } from './servicesdetailinfo.page';

describe('ServicesdetailinfoPage', () => {
  let component: ServicesdetailinfoPage;
  let fixture: ComponentFixture<ServicesdetailinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesdetailinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesdetailinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
