import { TestBed } from '@angular/core/testing';

import { RulecmsService } from './rulecms.service';

describe('RulecmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RulecmsService = TestBed.get(RulecmsService);
    expect(service).toBeTruthy();
  });
});
