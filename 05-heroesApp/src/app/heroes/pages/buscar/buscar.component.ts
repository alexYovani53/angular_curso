import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/herores.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  termino: string = "";
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor(private hService: HeroesService) { }

  buscando() {
    this.hService.getSugerencias(this.termino.trim()).subscribe(
      (heroes) => this.heroes = heroes
    )
  }
  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (event.option.value === "") {
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    console.log(heroe);
    this.termino = heroe.alter_ego;

    this.hService.getHeroePorId(heroe.id!).subscribe((rsp) => this.heroeSeleccionado = rsp);
  }
}
