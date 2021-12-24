import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gestion-inscription',
  templateUrl: './gestion-inscription.component.html',
  styleUrls: ['./gestion-inscription.component.css']
})
export class GestionInscriptionComponent implements OnInit {

  constructor(private http: HttpClient) { }

  candidats:any;

  ngOnInit(): void {
    this.lesCandidats();
  }

  lesCandidats(){
    this.http.get("http://localhost:8086/candidats").subscribe({
      next: (data) => {
        this.candidats = data;
      },
      error: (err) => {console.log(err)}
    });
  }
}
