import { TestBed } from '@angular/core/testing';

import { DataLevel2Service } from './data-level2.service';

describe('DataLevel2Service', () => {
  let service: DataLevel2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLevel2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
