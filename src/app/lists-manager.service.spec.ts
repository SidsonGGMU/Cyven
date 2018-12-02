import { TestBed } from '@angular/core/testing';

import { ListsManagerService } from './lists-manager.service';

describe('ListsManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListsManagerService = TestBed.get(ListsManagerService);
    expect(service).toBeTruthy();
  });
});
