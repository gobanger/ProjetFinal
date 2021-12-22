import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilcommunComponent } from './accueilcommun/accueilcommun.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CompteAdminComponent } from './compte-admin/compte-admin.component';
import { GestionFormationComponent } from './gestion-formation/gestion-formation.component';
import { DoccandidatComponent } from './doccandidat/doccandidat.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { GestionEntretienComponent } from './gestion-entretien/gestion-entretien.component';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [
  {path : 'accueilcommun' , component : AccueilcommunComponent},
  {path : 'accueil' , component : AccueilComponent},
  {path : 'inscription' , component : InscriptionComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'sidenav', component : SidebarMenuComponent},
  {path : 'moncompte-admin' , component : CompteAdminComponent},
  {path : 'gestion-formation' , component : GestionFormationComponent},
  {path : 'doccandidat' , component : DoccandidatComponent},
  {path : 'candidature' , component : CandidatureComponent},
  {path : 'gestion-entretien' , component : GestionEntretienComponent},
  {path : 'tests', component : TestsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
