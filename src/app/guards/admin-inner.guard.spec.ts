import { TestBed } from '@angular/core/testing';

import { AdminInnerGuard } from './admin-inner.guard';

describe('AdminInnerGuard', () => {
  let guard: AdminInnerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminInnerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
