import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithOtpAndForgetPasswordPage } from './login-with-otp-and-forget-password.page';

describe('LoginWithOtpAndForgetPasswordPage', () => {
  let component: LoginWithOtpAndForgetPasswordPage;
  let fixture: ComponentFixture<LoginWithOtpAndForgetPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithOtpAndForgetPasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithOtpAndForgetPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
