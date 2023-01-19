import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2";

  constructor(private http: HttpClient) { }

  buscarPorPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
    // return this.http.get(url)
    //   .pipe(
    //     catchError(err => of([]))
    //   )
  }

  buscarPorRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url);
    // return this.http.get(url)
    //   .pipe(
    //     catchError(err => of([]))
    //   )
  }

}
