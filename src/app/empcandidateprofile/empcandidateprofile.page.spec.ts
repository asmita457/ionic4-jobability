import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcandidateprofilePage } from './empcandidateprofile.page';

describe('EmpcandidateprofilePage', () => {
  let component: EmpcandidateprofilePage;
  let fixture: ComponentFixture<EmpcandidateprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpcandidateprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcandidateprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
