import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes"
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // this service is now a decorator for a message service:
  // now, when a hero gets its data, its message service is
  // updated as well
  constructor(private messageService: MessageService) { }

  // we switch this to observable so that if we were getting
  // data from a REAL server, we would wait for it to load,
  // since we can observe if the array of heroes is updated
  getHeroes(): Observable<Hero[]> {
    // send a message after fetching the heroes
    this.messageService.add(`HeroService: fetched heroes`);
    return of(HEROES);
  }
}
