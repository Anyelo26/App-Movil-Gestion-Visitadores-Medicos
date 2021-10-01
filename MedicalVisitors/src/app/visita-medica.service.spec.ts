import { TestBed } from '@angular/core/testing';

import { VisitaMedicaService } from './visita-medica.service';

describe('VisitaMedicaService', () => {
  let service: VisitaMedicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitaMedicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
