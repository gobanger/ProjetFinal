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
import { Accueilcandidat1Component } from './accueilcandidat1/accueilcandidat1.component';
import { GestionEntretienComponent } from './gestion-entretien/gestion-entretien.component';
import { TestsComponent } from './tests/tests.component';
import { TentativeUsurpComponent } from './tentative-usurp/tentative-usurp.component';
import { ChoixformationComponent } from './choixformation/choixformation.component';
import { TestcandidatComponent } from './testcandidat/testcandidat.component';
import { ListeCandidatsComponent } from './liste-candidats/liste-candidats.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { GestionInscriptionComponent } from './gestion-inscription/gestion-inscription.component';

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
  {path : 'accueilcandidat1' , component : Accueilcandidat1Component},
  {path : 'gestion-entretien' , component : GestionEntretienComponent},
  {path : 'tests', component : TestsComponent},
  {path : 'tentative', component : TentativeUsurpComponent},
  {path : 'choixformation', component : ChoixformationComponent},
  {path : 'testcandidat', component : TestcandidatComponent},
  {path : 'listeCandidats', component : ListeCandidatsComponent},

  {path : 'gestion-inscription', component : GestionInscriptionComponent},
  {path : 'moncompte', component : MoncompteComponent},
  { path: '', redirectTo: 'accueilcommun', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
