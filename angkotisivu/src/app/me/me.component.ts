import { Component, OnInit } from '@angular/core';
//Tänne importataan data-luokka MyData, jotta sitä voidaan käyttää
//täällä templaattina sisääntulevalle tiedolle.
import { MyData } from '../dataclasses';
import { HomepageService } from '../homepage.service';
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
})
export class MeComponent implements OnInit {
  
  mydatas: MyData[];

  constructor(private hpservice: HomepageService) {}

  getMyData(): void {
    this.hpservice.getMyData().subscribe(mydatas => this.mydatas = mydatas)
  }

  ngOnInit(): void {
    this.getMyData();
  }
}
