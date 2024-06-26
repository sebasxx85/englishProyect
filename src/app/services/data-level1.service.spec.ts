import { TestBed } from '@angular/core/testing';

import { DataLevel1Service } from './data-level1.service';

describe('DataLevel1Service', () => {
  let service: DataLevel1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLevel1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
