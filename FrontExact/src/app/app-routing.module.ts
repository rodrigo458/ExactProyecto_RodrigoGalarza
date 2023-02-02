import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './Tarea/actualizar/actualizar.component';
import { InsertarComponent } from './Tarea/insertar/insertar.component';
import { ListarComponent } from './Tarea/listar/listar.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'insertar', component:InsertarComponent},
  {path:'actualizar',component:ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
