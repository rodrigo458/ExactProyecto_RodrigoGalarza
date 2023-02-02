import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ ServiceService } from '../../Services/service.service'
import{ Tarea } from '../../Modelo/Tarea'
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tareas:Tarea[];
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit():void{
    this.service.getTareas().subscribe(data=>{
      this.tareas=data;
    })

  }

  Editar(tarea:Tarea):void{
    localStorage.setItem("id",tarea.id.toString());
    this.router.navigate(["actualizar"])
  }

  Delete(tarea:Tarea){
    this.service.deleteTarea(tarea).subscribe(data=>{
      this.tareas=this.tareas.filter(p=>p!==tarea);
      alert("Tarea eliminada");
    })
  }

}
