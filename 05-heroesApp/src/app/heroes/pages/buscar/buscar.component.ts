import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/herores.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {
  termino: String = "";
  heroes: Heroe[] = [];

  constructor(private hService: HeroesService) {

  }

  buscando() {
    this.hService.getHeroes().subscribe(
      (heroes) => this.heroes = heroes
    )
  }

}
