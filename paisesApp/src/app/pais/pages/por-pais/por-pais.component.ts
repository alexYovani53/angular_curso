import { Component } from '@angular/core';
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

  constructor(private paisService: PaisService) {

  }

  enviar() {
    this.hayError = false;
    this.paisService.buscarPorPais(this.termino)
      .subscribe({
        next: (resp) => {
          console.log(resp)
        },
        error: (err) => {
          this.hayError = true;
          console.log(err)
        }
      })
  }

}
