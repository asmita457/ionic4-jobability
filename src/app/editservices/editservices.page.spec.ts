import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditservicesPage } from './editservices.page';

describe('EditservicesPage', () => {
  let component: EditservicesPage;
  let fixture: ComponentFixture<EditservicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditservicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
