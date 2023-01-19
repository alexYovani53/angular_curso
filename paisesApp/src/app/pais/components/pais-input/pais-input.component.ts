import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {


  @Output() parentAction = new EventEmitter<string>();
  @Output() debounce = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject();

  termino: string = "";

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(terminoBusqueda => {
        console.log('debouncer: ', terminoBusqueda)
        this.debounce.emit(terminoBusqueda)
      })
  }

  teclaPresionada(event: any) {
    // const valor = event.target.value as string;
    this.debouncer.next(this.termino)
  }

  enviar() {
    this.parentAction.emit(this.termino)
  }
}
