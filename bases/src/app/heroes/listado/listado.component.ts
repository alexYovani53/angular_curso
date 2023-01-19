import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit{

  heroes: String[] = ["Spiderman", "Ironman", "Hulk"];
  heoreBorrado?: String;

  constructor(){
    console.log('constructor');
  }
  
  ngOnInit(): void {
    console.log('on init');
  }

  borrarHeroe(){
    this.heoreBorrado = this.heroes.shift();
  }

}
