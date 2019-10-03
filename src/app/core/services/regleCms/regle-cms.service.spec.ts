import { TestBed } from '@angular/core/testing';

import { RegleCmsService } from './regle-cms.service';

describe('RegleCmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegleCmsService = TestBed.get(RegleCmsService);
    expect(service).toBeTruthy();
  });
});
