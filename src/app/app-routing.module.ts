import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueilcommunComponent } from './accueilcommun/accueilcommun.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CompteAdminComponent } from './compte-admin/compte-admin.component';
import { GestionFormationComponent } from './gestion-formation/gestion-formation.component';

const routes: Routes = [
  {path : 'accueilcommun' , component : AccueilcommunComponent},
  {path : 'accueil' , component : AccueilComponent},
  {path : 'inscription' , component : InscriptionComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'sidenav', component : SidebarMenuComponent},
  {path : 'moncompte-admin' , component : CompteAdminComponent},
  {path : 'gestion-formation' , component : GestionFormationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
