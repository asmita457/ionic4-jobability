import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateemployeeemployerinfoPage } from './updateemployeeemployerinfo.page';

describe('UpdateemployeeemployerinfoPage', () => {
  let component: UpdateemployeeemployerinfoPage;
  let fixture: ComponentFixture<UpdateemployeeemployerinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateemployeeemployerinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateemployeeemployerinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
