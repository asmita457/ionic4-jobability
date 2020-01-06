import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateserviceproviderservicelocationPage } from './updateserviceproviderservicelocation.page';

describe('UpdateserviceproviderservicelocationPage', () => {
  let component: UpdateserviceproviderservicelocationPage;
  let fixture: ComponentFixture<UpdateserviceproviderservicelocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateserviceproviderservicelocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateserviceproviderservicelocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
