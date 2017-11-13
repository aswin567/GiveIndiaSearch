import { TestBed, inject } from '@angular/core/testing';

import { DynamicSearchService } from './dynamic-search.service';

describe('DynamicSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicSearchService]
    });
  });

  it('should be created', inject([DynamicSearchService], (service: DynamicSearchService) => {
    expect(service).toBeTruthy();
  }));
});
