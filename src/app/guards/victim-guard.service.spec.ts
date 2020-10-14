import { TestBed } from '@angular/core/testing';

import { VictimGuardService } from './victim-guard.service';

describe('VictimGuardService', () => {
  let service: VictimGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VictimGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
