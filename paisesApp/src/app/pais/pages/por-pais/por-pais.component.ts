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
  constructor(private paisService: PaisService) {

  }

  enviar() {
    this.paisService.buscarPorPais(this.termino)
      .subscribe(resp => {
        console.log(resp)
      })
  }

}
