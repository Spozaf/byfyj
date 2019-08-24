import { TestBed } from '@angular/core/testing';

import { PotrawyService } from './potrawy.service';

describe('PotrawyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotrawyService = TestBed.get(PotrawyService);
    expect(service).toBeTruthy();
  });
});
