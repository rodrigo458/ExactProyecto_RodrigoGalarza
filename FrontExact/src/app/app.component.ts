import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontExact';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Insertar(){
    this.router.navigate(["insertar"]);
  }

  Actualizar(){
    this.router.navigate(["actualizar"]);
  }

}
