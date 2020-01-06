import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedjobsPage } from './savedjobs.page';

describe('SavedjobsPage', () => {
  let component: SavedjobsPage;
  let fixture: ComponentFixture<SavedjobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedjobsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
