import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas.interface';

@Pipe({ name: 'colorPipe' })
export class ColorPipe implements PipeTransform {
  transform(value: Color): string {
    switch (value) {
      case Color.azul:
        return "Azul";
      case Color.negro:
        return "Negro";
      case Color.rojo:
        return "Rojo";
      default:
        return "Verde"
    }
  }
}
