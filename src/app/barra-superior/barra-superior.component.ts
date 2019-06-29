import { Component, OnInit, NgZone } from '@angular/core';
import { CarritoService } from '../carrito.service'
import { Observable } from 'rxjs';

@Component({
  selector: 't-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {
  productoscarro: Object[];
  constructor(private carrito : CarritoService, private zone: NgZone) { }

  ngOnInit(){
    this.refreshCarrito();
    let timer = Observable.timer(500,1000);
    timer.subscribe(()=>this.refreshCarrito())
  }

  refreshCarrito() {
    this.productoscarro = new Array();
    this.productoscarro = this.carrito.carrito;
  
  }

}
