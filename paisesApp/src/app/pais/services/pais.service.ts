import { HttpClient, HttpParams } from '@angular/common/http';
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
    const params: HttpParams  = new HttpParams()
      .set('fields', 'name,capital,alpha2Code,flags,population')

    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, {params: params});
    // return this.http.get(url)
    //   .pipe(
    //     catchError(err => of([]))
    //   )
  }

  buscarPorcapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url,{params: this.getParams()});
    // return this.http.get(url)
    //   .pipe(
    //     catchError(err => of([]))
    //   )
  }

  buscarPorId(id:string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
    // return this.http.get(url)
    //   .pipe(
    //     catchError(err => of({}))
    //   )
  }

  buscarPorRegio(codeRegion:string): Observable<Country[]> {

    const url = `${this.apiUrl}/regionalbloc/${codeRegion}`
    return this.http.get<Country[]>(url, {params:this.getParams()});
    // return this.http.get(url)
    //   .pipe(
    //     catchError(err => of({}))
    //   )
  }
  buscarPorRegion2(regionName:string): Observable<Country[]> {
    
    const url = `${this.apiUrl}/region/${regionName}`
    return this.http.get<Country[]>(url, {params: this.getParams()});
    // return this.http.get(url)
    //   .pipe(
    //     catchError(err => of({}))
    //   )
  }

  getParams(): HttpParams {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flags,population')
  }

}
