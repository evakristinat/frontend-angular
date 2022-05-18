import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  // TS: heroes$ on määritetty täällä Observableksi. 
  // Myös $ kertoo, että muuttuja on observable.
  heroes$: Observable<Hero[]>;
  //Subject on Observable, joka sisältää Observable-arvoja.
  //Siihen voidaan näin ollen myös subscibata. Se siis ottaa 
  //vastaan ja lähettää dataa.
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Tässä pushataan uusi arvo (Observable) Subjectiin.
  // Pushaamiseen käytetään next() -metodia. 
  search(term: string): void {
    this.searchTerms.next(term);
  }
  //Tässä on kaksi reaktiivista streamia:
  //1) näppäimistösyöte
  //2) sankarit, jotka tulevat palautuksena

  ngOnInit(): void {
    //tämä tuottaa tuloksen.
    this.heroes$ = this.searchTerms.pipe(
      // http-pyyntöjä tehdään korkeintaan 300ms välein
      debounceTime(300),

      // ei huomioida hakutermejä, joita on jo käytetty
      distinctUntilChanged(),

      // vaihtaa palvelimelta tulevaan streamiin, jolla saadaan
      // haetut sankarit.
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
