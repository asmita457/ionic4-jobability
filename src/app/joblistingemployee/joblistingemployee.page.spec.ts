import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblistingemployeePage } from './joblistingemployee.page';

describe('JoblistingemployeePage', () => {
  let component: JoblistingemployeePage;
  let fixture: ComponentFixture<JoblistingemployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoblistingemployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoblistingemployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
