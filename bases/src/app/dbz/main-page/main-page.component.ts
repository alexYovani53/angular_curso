import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  // agregar(event: any){
  //   event.preventDefault()
  //   console.log(event)
  // }

  agregar(){
    console.log("prueba")
  }
}
