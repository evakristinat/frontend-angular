//Komponentin luokkaosa joka välittää tietoa näkymään.
import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  //selector määrittää millä nimellä tätä komponenttia kutsutaan 
  //näyttävässä osassa
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
//Tätä metodia kutsutaan lapsikomponentista product-alerts
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
}
}