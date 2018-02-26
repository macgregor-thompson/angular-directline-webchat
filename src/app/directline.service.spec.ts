import { TestBed, inject } from '@angular/core/testing';

import { DirectLineService } from './directline.service';

describe('DirectLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectLineService]
    });
  });

  it('should be created', inject([DirectLineService], (service: DirectLineService) => {
    expect(service).toBeTruthy();
  }));
});
