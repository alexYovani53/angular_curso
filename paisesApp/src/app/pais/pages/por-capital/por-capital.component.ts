import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {

  }

  enviar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPorRegion(this.termino)
      .subscribe({
        next: (resp) => {
          this.paises = resp;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
          console.log(err)
        }
      })
  }

}
