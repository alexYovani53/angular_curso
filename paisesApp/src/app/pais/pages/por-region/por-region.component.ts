import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones : string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

  regionActiva : string = ""

  activar(region:string){
    this.regionActiva = region
  }
}
