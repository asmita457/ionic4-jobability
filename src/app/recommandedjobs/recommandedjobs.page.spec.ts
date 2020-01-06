import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandedjobsPage } from './recommandedjobs.page';

describe('RecommandedjobsPage', () => {
  let component: RecommandedjobsPage;
  let fixture: ComponentFixture<RecommandedjobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommandedjobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandedjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
