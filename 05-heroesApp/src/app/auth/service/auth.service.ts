import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of, map } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth | undefined {
    return this._auth
  }

  constructor(private http: HttpClient) { }

  verificaAuthenticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      map(auth =>{
        this._auth = auth
        return true
      })
    )
  }

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(resp => this._auth = resp),
        tap(resp => localStorage.setItem('token',resp.id))
      );
  }

  logout(){
    // this._auth = undefined
    localStorage.clear();
  }
}
