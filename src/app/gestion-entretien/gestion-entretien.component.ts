import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-entretien',
  templateUrl: './gestion-entretien.component.html',
  styleUrls: ['./gestion-entretien.component.css']
})
export class GestionEntretienComponent implements OnInit {

  constructor(private http: HttpClient) { }

  msgErr:any;
  informations: any;

  ngOnInit(): void {
  }

  connexion(informations: any): any{
    this.http.post('', informations).subscribe({
      next: (data) => { this.informations = "requete envoyée"},
      error : (err) => {this.msgErr = "Y'a un truc qui cloche"}
    })
  }
}
