import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Alex";
  genero: string = "masculino";

  invitacinMapa = {
    "masculino": 'invitarlo',
    "femenino": 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarNombre() {
    if (this.nombre == 'Alex') {
      this.nombre = 'Yarali';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Alex';
      this.genero = 'masculino';
    }
  }

  eliminarCliente() {
    if (this.clientes.length == 0) return;
    this.clientes.pop();
  }

  agregarCliente() {
    this.clientes.push("Nuevo");
  }

  // KeyValue Pipe
  persona: any = {
    nombre: "Alex",
    edad: 35,
    direccion: "Sumpango Sac."
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    }, {
      nombre: 'Batman',
      vuela: false
    }, {
      nombre: 'Tortuga Ninja',
      vuela: false
    }, {
      nombre: 'Iron Man',
      vuela: true
    }
  ];


  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Se tiene data de la promesa");
    }, 3500);
  });
}
