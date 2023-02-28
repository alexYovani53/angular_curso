import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../interfaces/herores.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

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

  editando: boolean = false;

  constructor(private hService: HeroesService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aRoute.params.pipe(
      switchMap(({ id }) => this.hService.getHeroePorId(id))
    ).subscribe(
      (heroe) => {
        this.editando = true;
        this.heroe = heroe
      }
    )

  }

  save(): void {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id != undefined) {
      // Actualizando
      this.hService.update(this.heroe).subscribe((rsp) => this.heroe = rsp)
      return;
    }

    this.hService.saveHero(this.heroe).subscribe(
      (e) => this.heroe = e
    )
    console.log(this.heroe);
  }

}
