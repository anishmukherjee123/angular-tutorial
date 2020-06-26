import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../hero"
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    // extracts info from the url given
    private route: ActivatedRoute,
    // gets hero data
    private heroService: HeroService,
    // interacts with browser
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // pull the id from the url
    // javascript + operator converts string into a number
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  // return to the previous page
  goBack(): void {
    this.location.back();
  }

}
