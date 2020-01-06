import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateskillsetPage } from './updateskillset.page';

describe('UpdateskillsetPage', () => {
  let component: UpdateskillsetPage;
  let fixture: ComponentFixture<UpdateskillsetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateskillsetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateskillsetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
