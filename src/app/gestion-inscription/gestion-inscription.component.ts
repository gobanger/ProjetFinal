import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-gestion-inscription',
  templateUrl: './gestion-inscription.component.html',
  styleUrls: ['./gestion-inscription.component.css']
})
export class GestionInscriptionComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService) { }

  c:any;

  ngOnInit(): void {
    this.lesCandidats();
  }

  lesCandidats(){
    console.log('candidat ', this.auth.candidatChoisi)
    this.http.get(this.auth.lienApi + 'admin/utilisateurs/' + this.auth.candidatChoisi.id).subscribe({
      next: (data) => {
        this.c = data;
      },
      error: (err) => {console.log(err)}
    });
  }
}
