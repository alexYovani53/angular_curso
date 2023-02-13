import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  aplicarMayuscula: boolean = false;
  ordenarPor: string = "nombre";

  heroes: Heroe[] = [
    {
      nombre: "Superman",
      vuela: true,
      color: Color.azul
    },
    {
      nombre: "Superman",
      vuela: true,
      color: Color.negro
    },
    {
      nombre: "Thor",
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: "Superman",
      vuela: true,
      color: Color.azul
    },
    {
      nombre: "Iron Man",
      vuela: true,
      color: Color.verde
    },
    {
      nombre: "Loky",
      vuela: false,
      color: Color.azul
    },
    {
      nombre: "Hulk",
      vuela: false,
      color: Color.verde
    },

  ]

  toggle() {
    this.aplicarMayuscula = !this.aplicarMayuscula;
  }

  cambiarOrden(por: string) {
    this.ordenarPor = por
  }

}
