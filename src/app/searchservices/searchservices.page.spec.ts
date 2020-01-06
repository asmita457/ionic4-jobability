import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchservicesPage } from './searchservices.page';

describe('SearchservicesPage', () => {
  let component: SearchservicesPage;
  let fixture: ComponentFixture<SearchservicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchservicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
