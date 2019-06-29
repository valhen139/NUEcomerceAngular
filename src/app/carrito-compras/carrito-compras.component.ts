import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service'
import { Productos } from '../Productos';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';


@Component({
  selector: 't-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  productoscarro: Productos[];
  total=0;
  constructor(private carrito : CarritoService, private database: DatabaseService,private router: Router) {
  }
 
  ngOnInit() {
    this.productoscarro = this.carrito.carrito;
    for (var i = 0; i < this.productoscarro.length; i++) {
  		this.total += this.productoscarro[i].precio*this.productoscarro[i].cant;
    }
    
  }
  Pagar(){
    for (var i=0; i<this.productoscarro.length; i++){
    this.database.Pagar(this.productoscarro[i])
    .subscribe(
      data=>{
      } 
    )
  } 

    this.carrito.carrito = new Array();
    
    this.router.navigate(['inicio/store'])
    }

    Cancelar(){
      this.carrito.carrito = new Array();
    
    this.router.navigate(['inicio/store'])
    }
}
