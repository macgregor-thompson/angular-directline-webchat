import { TestBed, inject } from '@angular/core/testing';

import { DirectlineService } from './directline.service';

describe('DirectlineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectlineService]
    });
  });

  it('should be created', inject([DirectlineService], (service: DirectlineService) => {
    expect(service).toBeTruthy();
  }));
});
