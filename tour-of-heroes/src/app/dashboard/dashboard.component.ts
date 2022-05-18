import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  //ts-määritys, jossa kerrotaan että heroes noudattaa Hero-määritystä ja
  //on oltava taulukko.
  heroes: Hero[] = [];

  //heroservice injektoidaan privaattina propertynä, joten sitä voidaan kutsua
  //vain luokan sisältä.
  constructor(private heroService: HeroService) { }

  //getHeroes kutsutaan käynnistysvaiheessa.
  ngOnInit() {
    this.getHeroes();
  }
  //getHeroes-metodi palauttaa listan sankareita, mutta vain
  //toisen, kolmannen, neljännen ja viidennen.
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}