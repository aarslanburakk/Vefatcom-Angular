import { TestBed } from '@angular/core/testing';

import { CustomToastrService } from './custom-toastr.service';

describe('CutomToastrService', () => {
  let service: CustomToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
