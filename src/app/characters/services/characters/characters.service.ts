import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FetchRickMortyResponse, Character } from '../../interfaces/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<FetchRickMortyResponse>(`${this.apiUrl}/character`);
  }

  getCharacter(id: number) {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }

  nextPage(next?: any) {
    return this.http.get<FetchRickMortyResponse>(next);
  }

  prevPage(prev?: any) {
    return this.http.get<FetchRickMortyResponse>(prev);
  }

  searchCharacter(name: string) {
    const apiSearch = `${this.apiUrl}/character/?name=${name}`;
    return this.http.get<FetchRickMortyResponse>(apiSearch);
  }
}
