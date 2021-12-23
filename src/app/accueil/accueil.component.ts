import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  constructor(private http : HttpClient, private route: Router) { }

  retour : any;
  user:any;

  ngOnInit(): void {
  }

  connexion(val:any): void{
    this.http.post("http://localhost:8086/connexion", val).subscribe({
      next: (data) => {
        console.log(data);
        this.user = data;
        if(data == null){
          this.retour = "Soit c'est faux soit tu t'fous d'ma gueule";
        }else{
          this.route.navigateByUrl('home');
          alert("Bienvenue " + this.user.prenom + this.user.nomUsage);
          sessionStorage.setItem("id", this.user.id);
          sessionStorage.setItem("prenom", this.user.prenom);
          sessionStorage.setItem("nom", this.user.nomUsage);
          sessionStorage.setItem("mail", this.user.mail);
        }
      },
      error: (err) => {console.log(err)}
    })
  } 
}
