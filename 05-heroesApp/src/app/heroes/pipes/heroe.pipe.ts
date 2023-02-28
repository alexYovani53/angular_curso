import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/herores.interface';

@Pipe({ name: 'heroePipe' })
export class HeroePipe implements PipeTransform {
  transform(value: Heroe): String {
    if (value.id == undefined) return "assets/no-image.png"
    return `assets/heroes/${value.id}.jpg`
  }
}
