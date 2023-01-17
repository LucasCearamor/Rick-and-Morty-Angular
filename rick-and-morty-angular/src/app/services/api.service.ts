import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  urlCharacters = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  public getCharacters(page: number,name: string) {
    return this.http.get(`${this.urlCharacters}/?page=${page}&name=${name}`);
  }

  public getEpisodes(urlEpisode: any) {
    return this.http.get(`${urlEpisode}`);
  }
}
