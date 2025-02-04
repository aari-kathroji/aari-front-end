import { TestBed } from '@angular/core/testing';

import { AdminBatchService } from './admin-batch.service';

describe('AdminBatchService', () => {
  let service: AdminBatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
