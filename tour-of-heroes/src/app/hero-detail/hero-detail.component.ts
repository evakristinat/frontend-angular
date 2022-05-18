//input on importattava tiedostoon, jossa sitä halutaan käyttää.
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
//input tarkoittaa, että tieto tähän tulee toiselta komponentilta, kun se on
//määritetty siellä hero propertyyn.
  @Input() hero: Hero;
 
  //Nämä injektoidaan privaattina propertynä, joten niitä voidaan kutsua
  //vain luokan sisältä. Activated route seuraa urlin muutoksia, HeroService 
  //hakee sankaritietoa "serveriltä", joten sitä tarvitaan tässä komponentissa
  //ja Location kommunikoi selaimen kanssa, sitä käytetään takaisin-navigointiin.
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  //TS: void tarkoittaa ettei funktio palauta mitään, joten tyyppiä ei määritetä.
  getHero(): void {
    //route.snapshot on staattinen tieto reitistä komponentin luonnin jälkeen.
    //paramMap kertoo reitin parametriarvot urlista (tässä tapauksessa id).
    //reittitiedot tulevat aina merkkijonoina, joten se on muutettu käyttäen 
    // + merkkiä luvuksi, jotta se täsmää sankari-id -tyyppiin.
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
