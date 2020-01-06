import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployershortlistedcandidatesPage } from './employershortlistedcandidates.page';

describe('EmployershortlistedcandidatesPage', () => {
  let component: EmployershortlistedcandidatesPage;
  let fixture: ComponentFixture<EmployershortlistedcandidatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployershortlistedcandidatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployershortlistedcandidatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
