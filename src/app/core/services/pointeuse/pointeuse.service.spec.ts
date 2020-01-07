import { TestBed } from '@angular/core/testing';

import { PointeuseService } from './pointeuse.service';

describe('PointeuseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointeuseService = TestBed.get(PointeuseService);
    expect(service).toBeTruthy();
  });
});
