import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/herores.interface';

@Pipe({ name: 'heroePipe' })
export class HeroePipe implements PipeTransform {
  transform(value: Heroe): String {
    return `assets/heroes/${value.id}.jpg`
  }
}
