import { TestBed } from '@angular/core/testing';

import { CuentaserviceService } from './cuentaservice.service';

describe('CuentaserviceService', () => {
  let service: CuentaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
