import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
//public-määre mahdollistaa authServicen käytön suoraan templaatissa
//templaattiin haetaan tieto isLoggedIn-muuttujan arvo
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.isLoggedIn = false;
  }

}
