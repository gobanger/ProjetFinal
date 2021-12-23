import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  constructor(private http : HttpClient, private route: Router, public auth: AuthService) { }

  retour : any;
  user:any;

  ngOnInit(): void {
    this.auth.redirectToHomeIfConnect();
  }

  connexion(val:any): void{
    this.http.post(this.auth.lienApi + "connexion", val).subscribe({
      next: (data) => {
        // console.log(data);
       this.verif(data);     
      },
      error: (err) => {console.log(err)}
    })
  }
  
  verif(val: any): void {
    if (val != null) {
      // console.log('connexion ok');
      this.auth.setUserInSession(val);
      switch (this.auth.getUserConnect().role) {
        case 'CANDIDAT':
          this.route.navigateByUrl('accueilcandidat1');
          break;
          case 'ADMIN':
          this.route.navigateByUrl('home');
          break;
      
        default:
          this.auth.deconnexion();
          break;
      }
    }
    else {
      //  console.log('bad credentials')
      this.auth.connect = true;
      // this.msgErr = 'Bad credentials';
      this.auth.msgErr = 'Bad credentials';
    }
  }

}
