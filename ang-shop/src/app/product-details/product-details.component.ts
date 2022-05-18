import { Component, OnInit } from '@angular/core';
//AtivatedRoute antaa tietoa reitistä komponenttiin.
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
//route-olio syntyy ActivatedRoute -rajapintaluokasta kun 
//konstruktori käynnistyy, eli komponentti syntyy.
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //Tuotteen id saadaan reitiltä.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    //Etsitään tuote, jonka id on reitillä. esim. localhost:4200/products/1
    //etsitään tuote 1
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
