import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedjobsPage } from './recommendedjobs.page';

describe('RecommendedjobsPage', () => {
  let component: RecommendedjobsPage;
  let fixture: ComponentFixture<RecommendedjobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedjobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
