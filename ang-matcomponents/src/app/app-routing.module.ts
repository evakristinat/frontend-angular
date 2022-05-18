import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sivu1Component } from './sivu1/sivu1.component';
import { Sivu2Component } from './sivu2/sivu2.component';
import { Sivu3Component } from './sivu3/sivu3.component';

const routes: Routes = [
  {path: 'sivu1', component: Sivu1Component},
  {path: 'sivu2', component: Sivu2Component},
  {path: 'sivu3', component: Sivu3Component},
  {path: '', redirectTo: 'sivu1', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
