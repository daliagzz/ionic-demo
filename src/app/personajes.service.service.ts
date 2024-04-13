import { HttpClient} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private readonly http = inject(HttpClient);

  constructor() { }

  cargar(){
return this.http.get<any>('https://rickandmortyapi.com/api/character');
  }
}
