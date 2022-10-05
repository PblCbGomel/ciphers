import { TestBed } from '@angular/core/testing';

import { TranspositionCipherService } from './transposition-cipher.service';

describe('TranspositionCipherService', () => {
  let service: TranspositionCipherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranspositionCipherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
