import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/herores.interface';
import { HeroesService } from '../services/heroes.service';

@Pipe({ name: 'heroePipe', pure: false })
export class HeroePipe implements PipeTransform {
  constructor(private hService: HeroesService) {

  }
  transform(heroe: Heroe): string {
    if (!heroe.id && !heroe.alt_img) return "assets/no-image.png"
    else if (heroe.alt_img && !heroe.alt_img!.includes("http")) return "assets/no-image.png"
    else if (heroe.alt_img) return heroe.alt_img;
    else return `assets/heroes/${heroe.id}.jpg`
  }
}
