import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/herores.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {
  // @Input() heroe: Heroe | undefined;
  // @Input() heroe?: Heroe;
  @Input() heroe!: Heroe;
}
