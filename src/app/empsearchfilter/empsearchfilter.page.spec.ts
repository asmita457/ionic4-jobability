import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsearchfilterPage } from './empsearchfilter.page';

describe('EmpsearchfilterPage', () => {
  let component: EmpsearchfilterPage;
  let fixture: ComponentFixture<EmpsearchfilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpsearchfilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsearchfilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
