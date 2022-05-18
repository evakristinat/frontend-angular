import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

//Guard päästää reitistä läpi jos sen canActivat() -metodi palauttaa true

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  //Tieto siitä onko käyttäjä kirjautunut vai ei, tuodaan authservicen välityksellä

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfLoggedIn();
  }
  
  private checkIfLoggedIn(): boolean {
    if(this.authService.isLoggedIn){
      return true;
    } else {
      this.router.navigate(['./loginform'])
      return false;
    }
}
}
