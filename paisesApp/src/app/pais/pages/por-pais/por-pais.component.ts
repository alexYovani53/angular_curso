import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {

  }

  enviar() {
    this.hayError = false;
    this.paisService.buscarPorPais(this.termino)
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
