import { TestBed } from '@angular/core/testing';
import { SendotpService } from './sendotp.service';
describe('SendotpService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SendotpService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=sendotp.service.spec.js.map