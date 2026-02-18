import { TestBed } from '@angular/core/testing';

import { FotoService } from './foto.service';

describe('Foto', () => {
  let service: FotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
