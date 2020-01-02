import { TestBed } from '@angular/core/testing';

import { WhenDoesHePlayService } from './when-does-he-play.service';

describe('WhenDoesHePlayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhenDoesHePlayService = TestBed.get(WhenDoesHePlayService);
    expect(service).toBeTruthy();
  });
});
