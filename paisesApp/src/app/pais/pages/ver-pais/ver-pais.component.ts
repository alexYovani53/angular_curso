import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{

  country? : Country ;

  constructor(private activatedRoute: ActivatedRoute, private paisService:PaisService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) =>{
      console.log(params.id);
      this.paisService.buscarPorId(params.id).subscribe(pais=>{
        this.country = pais;
      })
    })
  }
}
