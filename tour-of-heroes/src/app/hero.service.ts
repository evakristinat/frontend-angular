//Servicen päätehtävä on noutaa ja jakaa tietoa sankareista komponenteille.
//Tämä tehdään injektoimalla palvelu kaikkiin komponentteihin, joissa sankaritietoa tarvitaan.

//Observable on angularin oma tukitoiminto tiedon välittämiseen.
//Observablelta saadaan tietoa subscribe-toiminnolla, missä vain komponentissa
//johon tämä palvelu on injektoitu.

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private heroesUrl = 'api/heroes'; // URL web APIin

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //luokalle määritetään messageservice privaatiksi propertyksi konstruktorissa.
  //Kun HeroService luodaan, siihen injektoidaan ko. palvelu.
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  //Metodi, jolla noudetaan sankareiden nimet mock-heroesista.
  //TS: funktion on palautettava Observable, jonka tieto on tyypitelty Heron mukaan.

  //hakee serveriltä sankareita ja palauttaa observablen. Kaikki HttpClientin metodit
  //palauttavat observablen. Tämä observable palauttaa vain yhden hero taulukon.
  //tap() on RxJS-operaattori, joka käsittelee saapuvaa observablea, muuttamatta oikeaa
  //arvoa.
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  //TS: Määrittää, että id:n on oltava numero ja palautuksen on oltava observable.
  //Metodi pyytää haluttua id:tä, vastauksena pitäisi tulla yksi sankari. Palautus on 
  //objekti-observable, taulukon sijasta.
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  //Virheiden varalta tieto käydään läpi pipessä, jossa catchError ottaa kiinni tuloksia
  //jotka ovat vääriä. HandleError raportoi virheen ja palauttaa applikaatiolle turvallisen tuloksen.
  //Turvallinen tulos määritellään tyyppiparametrillä.

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }

  //sankarin nimen päivittäminen. Tätä kutsutaan hero-detail-komponentissa.
  //HttpClient.put() ottaa kolme parametriä (url, muutos, options). Sankarin
  //id kertoo kuka päivitetään.
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  //Lähettää/tallentaa tiedon uudesta sankarista serverille. Hyödyntää postia ja
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  //sankarin poisto kutsuu HttpClient.delete:ä.
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  //Haku sankareille
searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // jos hakuehto on tyhjä, palautetaan tyhjä taulukko.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}

}
