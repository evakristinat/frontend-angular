import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  error: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  // Tunnarit on kovakoodattu tähän komponenttiin. Oikeasssa sovelluksessa näin
  // ei tietenkään tehdä. Oikeassa sovelluksessa tunnarit lähetetään palvelimelle 
  // ja siellä tutkitaan ovatko ne oikeat ja asiakaspuolelle lähetetään tieto siitä
  // eli true tai false. Jos sieltä tulee true niin päästään suojatulle sivulle.

  onSubmit(formdata: any, isvalid: boolean | null): void {
    if(isvalid) {
      if(formdata.username === 'qwerty999' && formdata.password ==='qwerty999') {
        //autentikaatio on onnistunut
        //authservicessä muuttujan arvoksi tulee true
        this.authService.isLoggedIn = true;
        //hypätään regformiin kun autentikaatio on onnistunut
        this.router.navigate(['/regform']);

        //jos tunnarit on väärät:
      } else {
        this.error = 'Tunnus tai salasana väärä'
      }

    }
  }

}
