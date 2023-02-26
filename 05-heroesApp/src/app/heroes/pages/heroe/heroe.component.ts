import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/herores.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: Heroe | undefined;

  constructor(private activatedRoute: ActivatedRoute, private hService: HeroesService) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.hService.getHeroe(id).subscribe(e => {
    //     this.heroe = e
    //   })
    // })
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.hService.getHeroe(id))
      )
      .subscribe((heroe) => this.heroe = heroe)
  }
}
