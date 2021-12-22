import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilcommunComponent } from './accueilcommun/accueilcommun.component';
import { CompteAdminComponent } from './compte-admin/compte-admin.component';
import { GestionFormationComponent } from './gestion-formation/gestion-formation.component';
import { DoccandidatComponent } from './doccandidat/doccandidat.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { Accueilcandidat1Component } from './accueilcandidat1/accueilcandidat1.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccueilComponent,
    InscriptionComponent,
    AccueilcommunComponent,
    CompteAdminComponent,
    GestionFormationComponent,
    DoccandidatComponent,
    CandidatureComponent,
    Accueilcandidat1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
