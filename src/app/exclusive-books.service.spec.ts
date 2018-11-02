import { TestBed, inject } from '@angular/core/testing';

import { ExclusiveBooksService } from './exclusive-books.service';

describe('ExclusiveBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExclusiveBooksService]
    });
  });

  it('should ...', inject([ExclusiveBooksService], (service: ExclusiveBooksService) => {
    expect(service).toBeTruthy();
  }));
});
