import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { InicioComponent } from './inicio/inicio.component';
import { IProductosGruposComponent } from './i-productos/i-productos.component';
import { TareasRoutingModule } from './app-routing.module';
import { DatabaseService } from './database.service';
import { FirstPageComponent } from './first-page/first-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CarritoService } from './carrito.service';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component'
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ItemDetalleComponent } from './item-detalle/item-detalle.component';
import { DetalleItemService } from './detalle-item.service';


@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    InicioComponent,
    IProductosGruposComponent,
    FirstPageComponent,
    LoginComponent,
    CarritoComprasComponent,
    ItemDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TareasRoutingModule,
    ReactiveFormsModule,
    FilterPipeModule
  ],
  providers: [DatabaseService, CarritoService, DetalleItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
