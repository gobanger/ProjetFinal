import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-candidats',
  templateUrl: './liste-candidats.component.html',
  styleUrls: ['./liste-candidats.component.css']
})
export class ListeCandidatsComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, private auth: AuthService) { }

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

  goToDetail(info: any){
    this.auth.candidatChoisi = info;
    this.route.navigateByUrl("gestion-inscription");
  }
}
