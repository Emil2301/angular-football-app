import { TestBed } from '@angular/core/testing';

import { DrawAClubService } from './draw-a-club.service';

describe('DrawAClubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawAClubService = TestBed.get(DrawAClubService);
    expect(service).toBeTruthy();
  });
});
