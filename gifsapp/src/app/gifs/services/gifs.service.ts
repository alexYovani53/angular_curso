import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../models/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = "07lltHEAiYjSS6w9fQhxmOP6ObFDZ7sM";
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem("historial")) {
      this._historial = JSON.parse(localStorage.getItem("historial")!)
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
  
    this.http.get<SearchGifsResponse>(`http://api.giphy.com/v1/gifs/search?api_key=07lltHEAiYjSS6w9fQhxmOP6ObFDZ7sM&q=${query}&limit=10`)
      .subscribe((resp)=>{
        console.log(resp)
        this.resultados = resp.data;
      })
  }
}
