import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackjobsjobseekerPage } from './trackjobsjobseeker.page';

describe('TrackjobsjobseekerPage', () => {
  let component: TrackjobsjobseekerPage;
  let fixture: ComponentFixture<TrackjobsjobseekerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackjobsjobseekerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackjobsjobseekerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
