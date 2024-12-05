import { TestBed } from '@angular/core/testing';

import { DemandServiceService } from './demand-service.service';

describe('DemandServiceService', () => {
  let service: DemandServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
