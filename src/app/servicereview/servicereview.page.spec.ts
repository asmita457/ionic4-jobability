import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicereviewPage } from './servicereview.page';

describe('ServicereviewPage', () => {
  let component: ServicereviewPage;
  let fixture: ComponentFixture<ServicereviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicereviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicereviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
