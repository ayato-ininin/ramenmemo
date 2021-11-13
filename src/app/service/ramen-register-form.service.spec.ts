import { TestBed } from '@angular/core/testing';

import { RamenRegisterFormService } from './ramen-register-form.service';

describe('RamenRegisterFormService', () => {
  let service: RamenRegisterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamenRegisterFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
