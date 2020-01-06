import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsuccessstoriesPage } from './addsuccessstories.page';

describe('AddsuccessstoriesPage', () => {
  let component: AddsuccessstoriesPage;
  let fixture: ComponentFixture<AddsuccessstoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsuccessstoriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsuccessstoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
