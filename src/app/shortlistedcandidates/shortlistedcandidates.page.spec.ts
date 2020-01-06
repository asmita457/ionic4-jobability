import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedcandidatesPage } from './shortlistedcandidates.page';

describe('ShortlistedcandidatesPage', () => {
  let component: ShortlistedcandidatesPage;
  let fixture: ComponentFixture<ShortlistedcandidatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistedcandidatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistedcandidatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
