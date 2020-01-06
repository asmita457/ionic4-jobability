import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchjobsPage } from './searchjobs.page';

describe('SearchjobsPage', () => {
  let component: SearchjobsPage;
  let fixture: ComponentFixture<SearchjobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchjobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
