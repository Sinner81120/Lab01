import { TestBed } from '@angular/core/testing';

import { Cartlab08Service } from './cartlab08.service';

describe('Cartlab08Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Cartlab08Service = TestBed.get(Cartlab08Service);
    expect(service).toBeTruthy();
  });
});
