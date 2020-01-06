import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackjobsemployeePage } from './trackjobsemployee.page';

describe('TrackjobsemployeePage', () => {
  let component: TrackjobsemployeePage;
  let fixture: ComponentFixture<TrackjobsemployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackjobsemployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackjobsemployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
