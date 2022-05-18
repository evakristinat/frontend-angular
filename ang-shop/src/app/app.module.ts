//app.module kuvaa kuinka kuinka sovelluksen osat sopivat yhteen.

//Angularin importit, jotka mahdollistavat angularin toiminnallisuuksia.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//kaikki applikaation komponentit tulevat tähän.
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

//Dekoraattori, joka määrittää tämän appModulen NgModuleksi.
//Kertoo angularille kuinka sovellus kootaan ja mitä se sisältää.
@NgModule({
  imports: [
    //importatut moduulit tulevat myös tähän.
    BrowserModule,
    ReactiveFormsModule,
    //reititys
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
    ]),
  ],
  //tässä määritetään applikaation komponentit
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  //root-komponentti, joka näytetään index-html -sivulla. Vastaa muiden komponenttien näyttämisestä.
  bootstrap: [AppComponent],
})
export class AppModule {}
