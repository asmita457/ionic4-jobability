import { TestBed } from '@angular/core/testing';

import { SendotpService } from './sendotp.service';

describe('SendotpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendotpService = TestBed.get(SendotpService);
    expect(service).toBeTruthy();
  });
});
