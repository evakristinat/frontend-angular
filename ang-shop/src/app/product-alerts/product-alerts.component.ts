//Komponentin luokkaosa joka välittää tietoa näkymään.
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 
//Input kertoo, että dataa tulee sisään toisesta komponentista.
import { Output, EventEmitter } from '@angular/core';
//output kertoo, että dataa lähtee ulos toiseen komponenttiin.
//Emitter 
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product; //äitikomponentista sisään tuleva tieto
  @Output() notify = new EventEmitter();//lapsikomponentista ulos lähtevä tieto
  constructor() { }

  ngOnInit(): void {
  }

}
