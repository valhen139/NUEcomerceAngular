import { Component, OnInit } from '@angular/core';
import { Productos } from '../Productos';
import { DetalleItemService } from '../detalle-item.service';

@Component({
  selector: 't-item-detalle',
  templateUrl: './item-detalle.component.html',
  styleUrls: ['./item-detalle.component.css']
})
export class ItemDetalleComponent implements OnInit {
  item: Productos;
  constructor(private itemservice: DetalleItemService ) { }

  ngOnInit() {
    this.item = this.itemservice.item;
  }

}
