import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// säilyttää tietoa siitä onko käyttäjä kirjautunut sisään vai ei
  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false; //aluksi kirjautuminen false
   }

  /*jos tunnarit lähetettäisiin serverille ja tieto kirjautumisen
  onnistumisesta haettaisiin serveriltä, niin ne metodit tulisivat
  tähän. Yhteys palvelimeen tehtäisiin httpClientin avulla */
}
