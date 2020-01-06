import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessstorydetailsPage } from './successstorydetails.page';

describe('SuccessstorydetailsPage', () => {
  let component: SuccessstorydetailsPage;
  let fixture: ComponentFixture<SuccessstorydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessstorydetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessstorydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
