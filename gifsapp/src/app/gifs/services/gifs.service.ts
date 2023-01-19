import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../models/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = "07lltHEAiYjSS6w9fQhxmOP6ObFDZ7sM";
  private _servicioUrl: string = "http://api.giphy.com/v1/gifs";
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem("historial")) {
      this._historial = JSON.parse(localStorage.getItem("historial")!)
    }
    if (localStorage.getItem("ultimaBusqueda")) {
      this.resultados = JSON.parse(localStorage.getItem("ultimaBusqueda")!)
    }
  }
  
  buscarGifs(query: string){
    query = query.toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10)

      localStorage.setItem("historial", JSON.stringify(this._historial))
    }

    console.log(this._historial)
  
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', query)
      .set('limit', "10")

    this.http.get<SearchGifsResponse>(`${this._servicioUrl}/search`, {params:params})
      .subscribe((resp)=>{
        console.log(resp)
        this.resultados = resp.data;
        localStorage.setItem("ultimaBusqueda", JSON.stringify(this.resultados))
      })
  }
}
