import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomescreenPage } from './welcomescreen.page';

describe('WelcomescreenPage', () => {
  let component: WelcomescreenPage;
  let fixture: ComponentFixture<WelcomescreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomescreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomescreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
