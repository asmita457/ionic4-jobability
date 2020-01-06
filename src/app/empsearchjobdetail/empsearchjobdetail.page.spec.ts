import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsearchjobdetailPage } from './empsearchjobdetail.page';

describe('EmpsearchjobdetailPage', () => {
  let component: EmpsearchjobdetailPage;
  let fixture: ComponentFixture<EmpsearchjobdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpsearchjobdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsearchjobdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
