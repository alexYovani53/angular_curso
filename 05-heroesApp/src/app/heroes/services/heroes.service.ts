import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/herores.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${environment.baseUrl}/heroes`)
  }
  getHeroePorId(id: String): Observable<Heroe> {
    return this.http.get<Heroe>(`${environment.baseUrl}/heroes/${id}`)
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${environment.baseUrl}/heroes?q=${termino}&_limit=6`)
  }

  saveHero(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${environment.baseUrl}/heroes`, heroe);
  }

}
