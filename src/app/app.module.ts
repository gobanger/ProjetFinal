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

import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { GestionEntretienComponent } from './gestion-entretien/gestion-entretien.component';
import { TestsComponent } from './tests/tests.component';
import { TentativeUsurpComponent } from './tentative-usurp/tentative-usurp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { VerifMailComponent } from './inscription/verif-mail/verif-mail.component';


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
    SidebarMenuComponent,
    GestionEntretienComponent,
    TestsComponent,
    TentativeUsurpComponent,
    VerifMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
