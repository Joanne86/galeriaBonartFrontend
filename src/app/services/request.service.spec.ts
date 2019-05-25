import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { RepositoryService } from './repository.service';

describe('RequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [RepositoryService, HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});
