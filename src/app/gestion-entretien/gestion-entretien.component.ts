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
  msgValidation:any;

  candidats: any;

  ngOnInit(): void {
    this.lesCandidats();
  }

  envoi(informations: any): any{
    this.http.post('', informations).subscribe({
      next: (data) => { 
        this.informations = data;
        this.msgValidation = "Message bien envoyé";
      },
      error : (err) => {this.msgErr = "Y'a un truc qui cloche"}
    })
  }

  lesCandidats(){
    this.http.get('http://localhost:8086/admin/utilisateurs').subscribe({
      next: (data) => {
        this.candidats = data;
        console.log(data);
      },
      error: (err) => {
        this.msgErr = err;
        console.log(err);
    }
    })
  }
}
