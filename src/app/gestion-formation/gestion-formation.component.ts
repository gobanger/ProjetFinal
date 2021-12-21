import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.css']
})
export class GestionFormationComponent implements OnInit {

  formations : any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.lesFormations();
  }

  lesFormations(){
    this.http.get("http://localhost:8086/formation").subscribe({
      next: (data) => {
        this.formations = data;
      },
      error: (err) => {console.log(err)}
    })
  }
}
