import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { User } from './User';
import { Productos } from './Productos';

@Injectable()
export class DatabaseService {


  user: User[];
  constructor(private http : Http) { }

  getProductos(){
    return this.http.get('https://ecommerce-nu-odvh.firebaseio.com/productos.json')
      .map((response: Response)=> response.json())
  } 

   Login(usr, pwd){
    return this.http.get('https://ecommerce-nu-odvh.firebaseio.com/usuarios.json?orderBy="mail"&equalTo="' + usr + '"')
      .map((response: Response)=> response.json())
      .map(data => {
        this.user = data
        if(typeof this.user[0] != 'undefined')
        {
          return this.Authenticte(usr, pwd)
        }
        else {
          return false;
        }
       
      })
  } 

  Authenticte(username:string,passwrod:string):boolean{
    if(username==this.user[0].mail && passwrod==this.user[0].password){
       return true;
        }else{
          return false;
        }

    }
    Pagar(carrito: Productos){
  
      var cantidadfinal
        console.log(carrito.cant +' '+ carrito.nombre)
        cantidadfinal = carrito.cantidad -  carrito.cant;
       return this.http.patch('https://ecommerce-nu-odvh.firebaseio.com/productos/'+ carrito.id+'.json', '{"cantidad":'+cantidadfinal+'}')
      .map((respose: Response)=>respose.json)
 
    }

}
