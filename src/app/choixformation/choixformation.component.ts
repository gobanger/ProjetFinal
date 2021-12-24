import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-choixformation',
  templateUrl: './choixformation.component.html',
  styleUrls: ['./choixformation.component.css']
})
export class ChoixformationComponent implements OnInit {
  information: any;
  info: any;
  msgValidation: any;
  msgValidation2: any;
  msgErr1: any;
  msgErr2: any;
  msgErrSession: any;
  msgErrFormation: any;
  session: any;
  formation:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.lesSessions();
    this.lesFormations();
  }
  lesSessions() {
    this.http.get('http://localhost:8086/session').subscribe({
      next: (data) => {
        this.session = data;
        console.log(data);
        if (this.session.session == null) {
          this.msgErrSession = "Veuillez sélectionner une session";
        }
      },
      error: (err) => {
        this.msgErr1 = err;
        console.log(err);
      }
    })
  }

  lesFormations() {
    this.http.get('http://localhost:8086/formation').subscribe({
      next: (data) => {
        this.formation = data;
        console.log(data);
        if (this.formation.nomComplet == null) {
          this.msgErrFormation = "Veuillez selectionner une formation";
        }

      },
      error: (err) => {
        this.msgErr2 = err;
        console.log(err);
      }
    })
  }

  choixformation(information: any): any {
    this.http.patch('http://localhost:8086/formation', information).subscribe({
      next: (data) => {
        information = data;
        console.log(information);
        this.msgValidation = "Vous venez de réaliser votre choix de formation";
      },
      error: (err) => {
        console.log(information);
      },
    })
  }

  choixsession(info: any): any {
    this.http.patch('http://localhost:8086/utilisateur/session/14', info).subscribe({
      next: (data) => {
        info = data;
        console.log(info);
        this.msgValidation2 = "Vous venez de réaliser votre choix de session";
      },
      error: (err) => {
        console.log(info);
      },
    })
  }
}
