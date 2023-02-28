import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../interfaces/herores.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 50px
    }
  `]
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

  constructor(private hService: HeroesService,
    private aRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
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
      (e) => {
        this.router.navigate(['/heroes/editar', e.id])
      }
    )
    console.log(this.heroe);
  }

}
