import { Component } from '@angular/core';

@Component({
    selector: "app-heore",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent{
    nombre: String = "Ironman"
    edad: number = 45

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }
    
    get capitalizarNombre(){
        return this.nombre.toUpperCase();
    }
}