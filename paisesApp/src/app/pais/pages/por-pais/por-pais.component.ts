import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor:pointer
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  sugerenciasP: Country[] = [];

  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {

  }

  sugerencias(termino:string){
    this.termino = termino
    if (termino.length < 1) {
      this.mostrarSugerencias = false;
      this.sugerenciasP = []
      return
    }
    this.mostrarSugerencias = true;
    this.hayError = false
    this.paisService.buscarPorPais(termino)
      .subscribe({
        next:paises=>{
          this.sugerenciasP = paises.splice(0,4)
        },
        error: err=>{
          this.sugerenciasP = []
        }
      })
  }

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.termino = termino;
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

  buscarSugerido(){
    this.buscar(this.termino);
  }

}
