import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {

  @Output() parentAction = new EventEmitter<string>();

  termino: string = "";
  enviar() {
    this.parentAction.emit(this.termino)
  }
}
