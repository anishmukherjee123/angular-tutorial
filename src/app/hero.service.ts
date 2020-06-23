import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes"
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // we switch this to observable so that if we were getting
  // data from a REAL server, we would wait for it to load,
  // since we can observe if the array of heroes is updated
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
