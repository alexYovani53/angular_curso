import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: "Goku", 
      poder: 14000
    }, 
    {
      nombre: "Veget", 
      poder: 14045
    }
  ]

  nuevo:Personaje = {
    nombre: "Trunks", 
    poder: 14000
  }
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

  agregarNuevoPersonaje(personaje: Personaje){
    this.personajes.push(personaje)
  }
}
