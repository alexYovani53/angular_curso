import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = "07lltHEAiYjSS6w9fQhxmOP6ObFDZ7sM";
  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    
  }
  
  buscarGifs(query: string){
    query = query.toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10)
    }

    console.log(this._historial)
  
    this.http.get(`http://api.giphy.com/v1/gifs/search?api_key=07lltHEAiYjSS6w9fQhxmOP6ObFDZ7sM&q=${query}&limit=10`)
      .subscribe((resp: any)=>{
        console.log(resp)
      })
  }
}
