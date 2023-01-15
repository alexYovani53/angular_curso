import { Component } from '@angular/core';

interface Personaje {
  nombre: string
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo:Personaje = {
    nombre: "Trunks", 
    poder: 14000
  }
  // agregar(event: any){
  //   event.preventDefault()
  //   console.log(event)
  // }

  agregar(){
    console.log(this.nuevo)
  }

  cambiarNombre(event: any){
    this.nuevo.nombre = event.target.value
  }

  cambiarPoder(event: any){
    this.nuevo.poder = event.target.value
  }
}
