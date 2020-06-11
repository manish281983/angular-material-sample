import { TestBed } from '@angular/core/testing';

import { ProductMapperService } from './product-mapper.service';

describe('ProductMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductMapperService = TestBed.get(ProductMapperService);
    expect(service).toBeTruthy();
  });
});
