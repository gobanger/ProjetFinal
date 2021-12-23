import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {

  infor : any;
  msgValidation: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  candidature(info:any): any{
    this.http.post('http://localhost:8086/inscription',info).subscribe({
      next:(data) => {
        info = data;
        this.msgValidation="Fiche d'information complete";
      },
      error:(err) => {
        console.log(info);
      },

    })
  }

}
