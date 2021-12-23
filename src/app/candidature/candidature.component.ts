import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { AuthService } from '../services/auth.service';
>>>>>>> 3cfd484fb2d0c371beb6e2eb9dbe29428af391d4

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {

<<<<<<< HEAD
  infor : any;
  msgValidation: any;

  constructor(private http: HttpClient) { }
=======
  constructor(private auth: AuthService) { }
>>>>>>> 3cfd484fb2d0c371beb6e2eb9dbe29428af391d4

  ngOnInit(): void {
    this.auth.canActive();
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
