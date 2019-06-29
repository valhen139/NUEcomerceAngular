import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component'
import { IProductosGruposComponent } from './i-productos/i-productos.component';
import { ItemDetalleComponent } from './item-detalle/item-detalle.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent,
    children: [
      { path: 'store', component: IProductosGruposComponent },
      { path: 'carrito', component: CarritoComprasComponent },
      { path: 'detalle', component: ItemDetalleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TareasRoutingModule { }
