import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueilcandidat1',
  templateUrl: './accueilcandidat1.component.html',
  styleUrls: ['./accueilcandidat1.component.css']
})
export class Accueilcandidat1Component implements OnInit {

  constructor(private auth: AuthService) { }

  msgBienvenue : any;
  etat : any;
  avancement :any;
  ngOnInit(): void {
    this.auth.canActive();
    this.msgBienvenue = "Bienvenue " + this.auth.getUserConnect().nomUsage + " " + this.auth.getUserConnect().prenom; 
    this.etat = this.auth.getUserConnect().avancementInscrit;
    if (this.etat==0) { this.avancement = "Vous n'avez pas encore candidater à l'une de nos sessions de formation !\nConsultez les formations disponibles sur le site de l'ESSIC puis rendez-vous dans votre espace personnel \"Ma Candidature\" pour postuler.\n"};
    if (this.etat==1) { this.avancement = "Vous avez postulé à la " + this.auth.getUserConnect().session.session + " ("  + this.auth.getUserConnect().session.formation.nomComplet + ").\nVos informations et pièces justificatives sont en attente de traitement par l'un de nos conseillers de formation.\n"};
    if (this.etat==2) { this.avancement = "Vous avez postulé à la " + this.auth.getUserConnect().session.session + " ("  + this.auth.getUserConnect().session.formation.nomComplet + ").\nVos pièces justificatives ont été validées.\nAttendez d'être contacté par email par l'un de nos conseillers afin de planifier un RDV Teams pour l'examen de votre candidature.\n"};
    if (this.etat==3) { this.avancement = "Vous avez postulé à la " + this.auth.getUserConnect().session.session + " ("  + this.auth.getUserConnect().session.formation.nomComplet + ").\nAttendez d'être contacté par email par l'un de nos conseillers afin de passer les tests de sélection de la formation.\n"};
    if (this.etat==0) { this.avancement = "Vous avez postulé à la " + this.auth.getUserConnect().session.session + " ("  + this.auth.getUserConnect().session.formation.nomComplet + ").\nVos pièces justificatives ont été validées.\nAttendez d'être contacté par email par l'un de nos conseillers afin de planifier un RDV Teams pour l'examen de votre candidature.\n"};
    if (this.etat==5) { this.avancement = "Vous avez passé les tests pour participer à la " + this.auth.getUserConnect().session.session + " ("  + this.auth.getUserConnect().session.formation.nomComplet + ").\nLes résultats de vos tests et de votre candidature vous seront transmis par email.\n"};
    if (this.etat==6) { this.avancement = "Vous avez inscrit à la " + this.auth.getUserConnect().session.session + " ("  + this.auth.getUserConnect().session.formation.nomComplet + ").\n"};

  }




}
