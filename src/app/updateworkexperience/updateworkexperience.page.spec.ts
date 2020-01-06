import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateworkexperiencePage } from './updateworkexperience.page';

describe('UpdateworkexperiencePage', () => {
  let component: UpdateworkexperiencePage;
  let fixture: ComponentFixture<UpdateworkexperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateworkexperiencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateworkexperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
