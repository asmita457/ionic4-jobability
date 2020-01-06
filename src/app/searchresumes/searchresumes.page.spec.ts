import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresumesPage } from './searchresumes.page';

describe('SearchresumesPage', () => {
  let component: SearchresumesPage;
  let fixture: ComponentFixture<SearchresumesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresumesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresumesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
