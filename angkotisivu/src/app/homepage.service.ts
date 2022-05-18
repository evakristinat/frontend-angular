import { Injectable } from '@angular/core';
//HTTP-clienttia tarvitaan datan hakemiseen ja lähettämiseen palvelimelta.
import { HttpClient } from '@angular/common/http';
//Palvelimelta tuleva data toimitetaan komponentille Obdervablena eli reaktiivisesti.
import { Observable } from 'rxjs';
import { Hobby, MyData, Study } from './dataclasses';

@Injectable({providedIn: 'root'})
export class HomepageService {
  //valepalvelimen osoite, josta saadaan mydata
  mydataurl = 'api/mydatas';
  studiesurl = 'api/studiesdata';
  hobbiesdataurl = 'api/hobbiesdata';

  //liitetään eli injektoidaan HTTpClient-olio tähän luokkaan.
  //Tämä tapahtuu konstruktorin argumenttina (Depency injection)
  constructor(private http: HttpClient) { }

    //Tehdään palvelimele pyyntö, jolla haetaan data observablena
    getMyData(): Observable <MyData[]> {
      return this.http.get<MyData[]>(this.mydataurl);
    }

    getHobbiesData(): Observable <Hobby[]> {
      return this.http.get<Hobby[]>(this.hobbiesdataurl);
    }

    getStudiesData(): Observable <Study[]> {
      return this.http.get<Study[]>(this.studiesurl);
    }
}
