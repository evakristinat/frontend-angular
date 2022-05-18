//tämä tiedosto esittää valepalvelinta.
//täältä voidaan hakea tietoa http-protokollan välityksellä.
//poistetaan koko service, kun ollaan valmiita ja voidaan käyttää
//oikeaa serveriä.
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hobby, MyData, Study } from './dataclasses';

//injectable tarkoittaa, että tätä palvelua ei tarvitse laittaa
//päämoduuliin, mutta tätä voi käyttää kaikkialla, koska tämä on
//provided in root (tarjotaan kaikkialla).
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const mydatas: MyData[] = [
      { id: 1, info: 'Työssäkäyvä opiskelija' },
      { id: 2, info: 'Milleniaali' },
      { id: 3, info: 'Kissaihminen' },
      { id: 4, info: 'Asuu Jyväskylässä' },
    ]
    const hobbiesdata: Hobby[] = [
      { id: 1, info: 'Opiskelu' },
      { id: 2, info: 'Työskentely' },
      { id: 3, info: 'Netflix' },
    ];
    const studiesdata: Study[] = [
      { id: 1, info: 'Frontend-perusteet' },
      { id: 2, info: 'Frontend-sovelluskehitys' },
      { id: 3, info: 'NoSQL' },
    ]
    //tähän voi lisätä studies-datan.
    return { mydatas, hobbiesdata, studiesdata };
  }
}
