import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsearchjobsPage } from './empsearchjobs.page';

describe('EmpsearchjobsPage', () => {
  let component: EmpsearchjobsPage;
  let fixture: ComponentFixture<EmpsearchjobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpsearchjobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsearchjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
