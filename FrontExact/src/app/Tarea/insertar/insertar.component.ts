import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Services/service.service';
import{ Tarea } from '../../Modelo/Tarea'
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css'],
})
export class InsertarComponent implements OnInit {
  modelTarea=new Tarea()
  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(){
  }

  Insertar(tarea:Tarea){
    this.service.postTarea(tarea).subscribe(data=>{
      alert("Se agrego la tarea");
      this.router.navigate(["listar"]);
    })
  }
}
