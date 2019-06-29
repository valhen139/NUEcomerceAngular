import { Component, OnInit, NgZone } from '@angular/core';
import { DatabaseService } from '../database.service';
import { CarritoService } from '../carrito.service'
import { DetalleItemService } from '../detalle-item.service';
import { Router } from '@angular/router';
import { Productos } from '../Productos';
import { Observable } from 'rxjs';


@Component({
  selector: 't-i-productos',
  templateUrl: './i-productos.component.html',
  styleUrls: ['./i-productos.component.css']
})
export class IProductosGruposComponent implements OnInit {

  productos : Object[];
  filtro: any = {nombre: ''};
  carga: boolean;

  constructor(private zone: NgZone, private data : DatabaseService, private carrito : CarritoService, private itemdetalle: DetalleItemService, private router: Router) { 
    this.carga=true;

  }
  ngOnInit(){
    
    this.getData();
    let timer = Observable.timer(3000,1000000);
    timer.subscribe(()=>{
      this.getData();
      this.carga=false;
    })
  }

  getData() {    
    this.data.getProductos()
      .subscribe(
        (data) => {
          
          this.zone.run(()=>{
          this.productos = data

        });
      });
      

    
  }
  
  addCarrito(item, id){

    if (item.cant > 0) {
      var itemcarro: Productos
      itemcarro = item
      itemcarro.id = id;
      this.carrito.carrito.push(itemcarro)
    }

  }

  verItem(item){
    this.itemdetalle.item = item;
    this.router.navigateByUrl('inicio/detalle')
  }


}
