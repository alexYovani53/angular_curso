import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{
    constructor() {
        console.log("Servicio inicializado")
    }

    private _personajes: Personaje[] = [
      {
        nombre: "Goku", 
        poder: 14000
      }, 
      {
        nombre: "Veget", 
        poder: 14045
      }
    ]

    get personajes(): Personaje[] {
      return [...this._personajes];
    }
  
    nuevo:Personaje = {
      nombre: "Trunks", 
      poder: 14000
    }

    agregarNuevoPersonaje(personaje: Personaje){
      this.personajes.push(personaje)
    }
}