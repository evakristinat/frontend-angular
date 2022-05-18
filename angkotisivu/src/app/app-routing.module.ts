import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//nämä importit haettiin app.modulesta, koska ne syntyvät sinne automaattisesti
//kun uusia komponentteja luodaan.
//Näiden importtaus tehdään, jotta tälläkin moduulilla olisi tapa päästä niihin käsiksi.
import { StudiesComponent } from './studies/studies.component';
import { MeComponent } from './me/me.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
//kaikki reitit tulee olioina automaattisesti luotuun Routes-taulukkoon.
//taulukon tietotyyppi on Routes, joka kertoo, että sisällön tulee olla olioita.
const routes: Routes = [
  //polku tulee nimetä samalla nimellä kuin routerlinkissä (navbarissa) on käytetty.
  //reitti syntyy siis routerlink nimestä ja komponentin nimestä, yhdistäen ne poluksi.
  { path: 'me', component: MeComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'hobbies', component: HobbiesComponent },
  //mikäli ei täsmennetä, mille sivulle ollaan menossa, käyttäjä ohjataan me-sivulle.
  { path: '', redirectTo: '/me', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
