/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServidorService } from './servidor.service';

describe('Service: Servidor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServidorService]
    });
  });

  it('should ...', inject([ServidorService], (service: ServidorService) => {
    expect(service).toBeTruthy();
  }));
});
