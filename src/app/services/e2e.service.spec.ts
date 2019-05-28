import { TestBed } from '@angular/core/testing';

import { E2eService } from './e2e.service';

describe('E2eService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: E2eService = TestBed.get(E2eService);
    expect(service).toBeTruthy();
  });
});
