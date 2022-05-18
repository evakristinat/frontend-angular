import { Component, OnInit } from '@angular/core';
import { Hobby } from '../dataclasses';
import { HomepageService } from '../homepage.service';
@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbiesdata: Hobby[];

  constructor(private hpservice: HomepageService) {}

  getHobbiesData(): void {
    this.hpservice.getHobbiesData().subscribe(hobbiesdata => this.hobbiesdata = hobbiesdata)
  }

  ngOnInit(): void {
    this.getHobbiesData();
  }

}


