import { Component, OnInit } from '@angular/core';
import { Study } from '../dataclasses';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  studiesdata: Study[];

  constructor(private hpservice: HomepageService) {}

  getStudiesData(): void {
    this.hpservice.getStudiesData().subscribe(studiesdata => this.studiesdata = studiesdata)
  }

  ngOnInit(): void {
    this.getStudiesData();
  }

}



