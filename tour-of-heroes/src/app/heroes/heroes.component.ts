import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'; //Hero-tietotyyppi
import { HeroService} from '../hero.service'; //Tuodaan sankareita palvelusta
import { MessageService} from '../message.service'; //viestipalvelu
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]; 
  //injektoidaan servicet, eli tehdään niistä välttämättömiä
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  //TS: funktio ei palauta mitään, joten sen palautuksen tietotyyppiä ei määritetä.
  ngOnInit(): void {
    //angular kutsuu metodia heroes-komponentin rakentamisen jälkeen.
    this.getHeroes();
  }
//tämä metodi kutsuu servicen samannimistä metodia, nimetäkseen heroes-propertyn.
  getHeroes(): void {
    //tästä tulee Observable.
   this.heroService.getHeroes()
   //subscribe antaa Observablen arvon eteenpäin, vasta kun se on saapunut.
   //tämä mahdollistaa asynkronisuuden.
     .subscribe(heroes => this.heroes = heroes);
  }
  //uuden sankarin lisäys. Kutsuu servicen metodia addHero, jolla nimi lähetetään serverille.
  //saa vastauksena tallennetun sankarin subscriben avulla ja lisää sen sankarilistaan.
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  
  //sankarin poisto. Kutsuu servicen metodia deleteHero. Subscribe on merkkittävä tai mitään 
  //ei tapahdu, koska observable ei tee mitään ilman subscribeä, vaikka sitä ei muuten tarvita.
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  
}
