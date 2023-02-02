import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/Modelo/Tarea';
import { ServiceService } from 'src/app/Services/service.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  modelTarea=new Tarea();
  constructor(private router:Router,private service:ServiceService){}

  ngOnInit(){
    this.Editar();
  }

  Editar(){
    let id:any=localStorage.getItem("id");
    this.service.getTareaId(+id).subscribe(data=>{
      this.modelTarea=data;
    })
  }

  Actualizar(tarea:Tarea){
    this.service.updateTarea(tarea).subscribe(data=>{
      this.modelTarea=data;
      alert("Se actualizo la tarea")
      this.router.navigate(["listar"])
    })
  }
}
