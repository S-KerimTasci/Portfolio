import { TestBed } from '@angular/core/testing';

import { VisitPageService } from './visit-page.service';

describe('VisitPageService', () => {
  let service: VisitPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
