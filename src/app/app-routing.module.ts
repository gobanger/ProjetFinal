import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilcommunComponent } from './accueilcommun/accueilcommun.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path : 'accueilcommun' , component : AccueilcommunComponent},
  {path : 'accueil' , component : AccueilComponent},
  {path : 'inscription' , component : InscriptionComponent},
  {path : 'home' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
