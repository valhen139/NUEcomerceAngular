import { Injectable } from '@angular/core';
import { Productos } from './Productos';

@Injectable()
export class DetalleItemService {
  item: Productos;
  constructor() { }

}
