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
import { ChoixformationComponent } from './choixformation/choixformation.component';
import { TestcandidatComponent } from './testcandidat/testcandidat.component';
import { ListeCandidatsComponent } from './liste-candidats/liste-candidats.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { GestionInscriptionComponent } from './gestion-inscription/gestion-inscription.component';



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
    VerifMailComponent,
    ChoixformationComponent,
    TestcandidatComponent,
    ListeCandidatsComponent,
    MoncompteComponent,
    GestionInscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
