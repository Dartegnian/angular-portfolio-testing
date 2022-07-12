import { TestBed } from '@angular/core/testing';

import { LinkListenerService } from './link-listener.service';

describe('LinkListenerService', () => {
  let service: LinkListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
