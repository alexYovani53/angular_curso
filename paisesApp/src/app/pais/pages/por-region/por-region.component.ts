import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

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

  paises: Country[] = [];

  constructor(private paisServices: PaisService) {}

  getClassCSS(region:string) : string {
    return (region !==this.regionActiva) ? 'btn btn-outline-primary' :'btn btn-primary'
  }

  activar(region:string){
    if(this.regionActiva === region) return;
    this.regionActiva = region
    this.paisServices.buscarPorRegio(region).subscribe(countries =>{
      this.paises = countries
    })
  }
  
  activar2(region:string){
    if(this.regionActiva === region) return;
    this.regionActiva = region
    this.paisServices.buscarPorRegion2(region).subscribe(countries =>{
      this.paises = countries
    })
  }
}
