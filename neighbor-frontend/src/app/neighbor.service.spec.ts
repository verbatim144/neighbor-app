import { TestBed } from '@angular/core/testing';

import { NeighborService } from './neighbor.service';

describe('NeighborService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeighborService = TestBed.get(NeighborService);
    expect(service).toBeTruthy();
  });
});
