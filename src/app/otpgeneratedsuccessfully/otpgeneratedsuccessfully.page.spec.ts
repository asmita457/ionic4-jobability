import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpgeneratedsuccessfullyPage } from './otpgeneratedsuccessfully.page';

describe('OtpgeneratedsuccessfullyPage', () => {
  let component: OtpgeneratedsuccessfullyPage;
  let fixture: ComponentFixture<OtpgeneratedsuccessfullyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpgeneratedsuccessfullyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpgeneratedsuccessfullyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
