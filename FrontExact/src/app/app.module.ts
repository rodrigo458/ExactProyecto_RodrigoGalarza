import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Tarea/listar/listar.component';
import { InsertarComponent } from './Tarea/insertar/insertar.component';
import { ActualizarComponent } from './Tarea/actualizar/actualizar.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Services/service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    InsertarComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
