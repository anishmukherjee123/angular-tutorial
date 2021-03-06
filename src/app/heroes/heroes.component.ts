import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];


  constructor(private heroService: HeroService) { }

  // we call data retrieval here instead
  ngOnInit(): void {
    this.getHeroes();
  }


  // we don't call this in the constructor because the 
  // constructor should not DO anything, it is bad practice
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}