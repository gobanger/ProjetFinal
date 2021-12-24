import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  info: any;
  msgValidation: any;
  user: any;

  parcoursSouhaite = [
    {parcours: 'En continu'},
    {parcours: 'Contrat de professionnalisation'},
    {parcours: 'Contrat d’apprentissage'},
  ]


  constructor(private auth: AuthService, private http: HttpClient) { }
  ngOnInit(): void {
    this.auth.canActive();
    this.user = this.auth.getUserConnect();
  }
 
  candidat(info:any){
    this.http.put(this.auth.lienApi + 'user/' + this.user.id, this.user).subscribe({
      next: (data) =>{
        info = data;
        console.log(info);
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err);
      }
    });
 
    this.ngOnInit();
  }

}
