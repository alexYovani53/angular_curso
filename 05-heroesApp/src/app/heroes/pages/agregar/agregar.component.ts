import { Component } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/herores.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    characters: '',
    alter_ego: ''
  }

  constructor(private hService: HeroesService) {

  }

  save(): void {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    this.hService.saveHero(this.heroe).subscribe(
      (e) => this.heroe = e
    )

    console.log(this.heroe);
  }

}
