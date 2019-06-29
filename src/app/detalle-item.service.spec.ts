/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetalleItemService } from './detalle-item.service';

describe('DetalleItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalleItemService]
    });
  });

  it('should ...', inject([DetalleItemService], (service: DetalleItemService) => {
    expect(service).toBeTruthy();
  }));
});
