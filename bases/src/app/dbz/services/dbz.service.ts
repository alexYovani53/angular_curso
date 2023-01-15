import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{
    constructor() {
        console.log("Servicio inicializado")
    }

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