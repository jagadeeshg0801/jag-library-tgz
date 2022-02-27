import { TestBed } from '@angular/core/testing';

import { JagLibraryService } from './jag-library.service';

describe('JagLibraryService', () => {
  let service: JagLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JagLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
