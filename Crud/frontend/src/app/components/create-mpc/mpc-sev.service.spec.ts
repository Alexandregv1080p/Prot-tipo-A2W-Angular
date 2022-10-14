import { TestBed } from '@angular/core/testing';

import { MpcSevService } from './mpc-sev.service';

describe('MpcSevService', () => {
  let service: MpcSevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpcSevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
