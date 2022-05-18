//Komponentti-määrittely on haettu angular coresta.
import { Component } from '@angular/core';

//@Component on dekoraattori, joka mahdollistaa luokkien muokkaamisen
//ennen niiden käyttöä.
@Component({
  //selectoria käytetään komponentin upottamiseen htmllään
  selector: 'app-root',
  //templateUrl kertoo tämän komponentin html-tiedoston sijainnin.
  templateUrl: './app.component.html',
  //styleUrls kertoo tämän komponentin css-tiedoston sijainnin.
  styleUrls: ['./app.component.css']
})
//sovelluslogiikka tulee tämän luokan sisälle.
export class AppComponent {
  title = 'Eevan Angular-kotisivu';
}

//täältä puuttuu implements onInit-metodi, koska tätä ei tarvitse koota erikseen,
//kuten lapsikomponentit. 
