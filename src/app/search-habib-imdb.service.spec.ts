import { TestBed } from '@angular/core/testing';

import { SearchHabibIMDBService } from './search-habib-imdb.service';

describe('SearchHabibIMDBService', () => {
  let service: SearchHabibIMDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchHabibIMDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
