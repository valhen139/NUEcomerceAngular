import { Injectable } from '@angular/core';
import { Productos } from './Productos';

@Injectable()
export class CarritoService {

  carrito: Productos[];

  constructor() {
    this.carrito = new Array();
  }
}
