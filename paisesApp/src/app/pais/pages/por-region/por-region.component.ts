import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones : string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  regiones2 : string[] = [
    "EU",
    "EFTA",
    "CARICOM",
    "PA",
    "AU",
    "USAN",
    "EEU",
    "AL",
    "ASEAN",
    "CAIS",
    "CEFTA",
    "NAFTA",
    "SAARC", 
  ]

  regionActiva : string = ""

  getClassCSS(region:string) : string {
    return (region !==this.regionActiva) ? 'btn btn-outline-primary' :'btn btn-primary'
  }

  activar(region:string){
    this.regionActiva = region
  }
}
