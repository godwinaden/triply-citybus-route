import { TestBed } from '@angular/core/testing';

import { TransportModeService } from './transport-mode.service';
import {HttpClientModule} from "@angular/common/http";

describe('TransportModeService', () => {
  let service: TransportModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TransportModeService]
    });
    service = TestBed.inject(TransportModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*it('check angersiedlung_walk data', () => {
    let angersiedlung_walk = service.angersiedlung_walk;
    expect(angersiedlung_walk).toContain('type');
  });*/
});
