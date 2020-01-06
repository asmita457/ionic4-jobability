import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchjobdetailPage } from './searchjobdetail.page';

describe('SearchjobdetailPage', () => {
  let component: SearchjobdetailPage;
  let fixture: ComponentFixture<SearchjobdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchjobdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchjobdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
