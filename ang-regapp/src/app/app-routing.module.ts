import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login.guard';
import { LoginformComponent} from './loginform/loginform.component'
import { RegformComponent } from './regform/regform.component';
import { ReglistComponent } from './reglist/reglist.component';


const routes: Routes = [
  { path: 'loginform', component: LoginformComponent },
  //regform on suojattu
  { path: 'regform', component: RegformComponent, canActivate:[LoginGuard]},
  { path: 'reglist', component: ReglistComponent },
  { path: '', redirectTo:'/reglist', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
