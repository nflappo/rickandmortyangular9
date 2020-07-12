import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '@shared/interfaces/character.interface';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) { }

  searchCharacters(query = '', page = 1) {
    const filter = `${environment.baseUrlApi}/?name=${query}&page=${page}`;
    return this.httpClient.get<Character[]>(filter);
  }
  getDetails(id: number) {
    return this.httpClient.get<Character>(
      `${environment.baseUrlApi}/${id}`
    );
  }
}
