//Routing, eli reititys, yksinkertaistaa sivuston navigointia. Se määrittää
//polun mukaan minkä komponentin näkymä näytetään. App-komponentin router-outlet
//määrittää minne tämä näkymä tulee. Routerlinkit ovat linkkejä, jotka muuttavat 
//polkua kun niitä klikataan, jotta näkymä vaihtuu.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//path kertoo mikä komponentti ladataan kun käyttäjä siirtyy osoitteesseen
// .../heroes.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  //ohjataan automaattisesti dashboardiin, kun reittiä ei ole määritetty urlissa.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //kaksoispistettä käytetään osoittamaan, että id on placeholderi.
  { path: 'detail/:id', component: HeroDetailComponent },
];

//ngmodule käynnistää routerin ja alkaa kuunnella muutoksia urlissa.
//imports osiossa määritetään routes toimimaan root-tasolla forRoot-metodilla
//joka mahdollistaa navigaation toiminnan.
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  //export-osiossa määritetään tämä moduuli käytettäväksi koko applikaatiossa.
  exports: [RouterModule],
})
export class AppRoutingModule {}
