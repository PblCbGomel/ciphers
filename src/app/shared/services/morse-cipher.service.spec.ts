import { TestBed } from '@angular/core/testing';

import { MorseCipherService } from './morse-cipher.service';

describe('MorseCipherService', () => {
  let service: MorseCipherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MorseCipherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
