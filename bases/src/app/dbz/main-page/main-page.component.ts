import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor() {
  }
  
  nuevo:Personaje = {
    nombre: "Trunks", 
    poder: 14000
  }
  // get personajes () : Personaje[] {
  //   return this.dbzService.personajes; 
  // }

  // agregar(event: any){
  //   event.preventDefault()
  //   console.log(event)
  // }


  // cambiarNombre(event: any){
  //   this.nuevo.nombre = event.target.value
  // }

  // cambiarPoder(event: any){
  //   this.nuevo.poder = event.target.value
  // }

  // agregarNuevoPersonaje(personaje: Personaje){
  //   this.personajes.push(personaje)
  // }
}
