import { Injectable } from '@angular/core';
import { Ramen } from '../ramens';
import { Ramens } from '../mock-ramen';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RamenService {

  constructor() { }
  getRamen(id:number):Observable<Ramen>{
    const ramen = Ramens.find(h => h.id === id);
    return of(ramen);
  }
}
