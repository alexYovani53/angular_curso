import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({ name: 'ordenarPipe' })
export class OrdenarPipe implements PipeTransform {
  transform(value: Heroe[], ordenarPor: string = "nombre"): Heroe[] {
    switch (ordenarPor) {
      case "nombre":
        return value.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
      case "color":
        return value.sort((a, b) => (a.color > b.color) ? -1 : 1)
      default:
        return value.sort((a, b) => (a.vuela > b.vuela) ? 1 : -1)
    }
  }
}
