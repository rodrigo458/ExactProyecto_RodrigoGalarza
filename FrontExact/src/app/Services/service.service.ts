import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../Modelo/Tarea';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  UrlGet='http://localhost:8080/api/listar';
  UrlGetId='http://localhost:8080/api/listar';
  UrlPost='http://localhost:8080/api/insertar';
  UrlPut='http://localhost:8080/api/actualizar';
  UrlDelete='http://localhost:8080/api/eliminar';

  getTareas(){
    return this.http.get<Tarea[]>(this.UrlGet);
  }

  postTarea(tarea:Tarea){
    return this.http.post<Tarea>(this.UrlPost,tarea);
  }

  getTareaId(id:number){
    return this.http.get<Tarea>(this.UrlGetId+"/"+id)
  }

  updateTarea(tarea:Tarea){
    return this.http.put<Tarea>(this.UrlPut+"/"+tarea.id,tarea);
  }

  deleteTarea(tarea:Tarea){
    return this.http.delete<Tarea>(this.UrlDelete+"/"+tarea.id)
  }

}
