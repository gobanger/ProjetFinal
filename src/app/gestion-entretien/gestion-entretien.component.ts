import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-gestion-entretien',
  templateUrl: './gestion-entretien.component.html',
  styleUrls: ['./gestion-entretien.component.css']
})
export class GestionEntretienComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService) { }

  msgErr:any;
  informations: any;
  msgValidation:any;
  msgErrCandidat:any;

  candidats: any;

  ngOnInit(): void {
    this.lesCandidats();
    this.auth.canActive();
  }

  envoi(informations: any): any{
    this.http.post('http://localhost:8086/admin/Nard_Con/creation_rdv', informations).subscribe({
      next: (data) => { 
        this.informations = data;
        this.msgValidation = "Message bien envoyé";
      },
      error : (err) => {
        console.log(informations);
        this.msgErr = 'http://localhost:8086/admin/' + sessionStorage.getItem("prenom") + '_' + sessionStorage.getItem("nom")
        + '/creation_rdv';
    }
    })
  }

  lesCandidats(){
    this.http.get('http://localhost:8086/admin/utilisateurs').subscribe({
      next: (data) => {
        this.candidats = data;
        console.log(data);
        if(this.candidats.mail == null){
          this.msgErrCandidat = "Veuillez sélectionner un candidat";
        }
      },
      error: (err) => {
        this.msgErr = err;
        console.log(err);
    }
    })
  }
}
