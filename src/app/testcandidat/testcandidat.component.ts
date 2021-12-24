import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-testcandidat',
  templateUrl: './testcandidat.component.html',
  styleUrls: ['./testcandidat.component.css']
})
export class TestcandidatComponent implements OnInit {

  constructor(private auth: AuthService, private http: HttpClient) { }

  question:any;
  forma:any;
  resultat = 0;
  answer:any;
  rendu:any;
  reponseU:any;
  listeQ:any;
  good:any;
  cle:any;

  ngOnInit(): void {
    this.forma = this.auth.getUserConnect().session.formation.nomComplet;
    this.listeQuestionParFormation();
  }

  listeQuestionParFormation(){
    this.http.get(this.auth.lienApi + 'qcm/' + this.forma).subscribe({
      next: (data) => {
        this.question = data;
      },
      error: (err) => {console.log(err)}
    })
  }

  check(rep:any){
    for(let i=0; i<100; i++){
      this.http.get(this.auth.lienApi + 'qcm/id/' + i).subscribe({
        next: (data) => {
          this.answer = data;
          this.rendu = this.answer.reponse;
        },
        error: (err) => {console.log(err)}
      });
      if(document.getElementsByName(i.toString()) == this.rendu ){
        this.resultat += 1; 
      }
    }
    for(let j=0; j<100 ; j++){
      this.cle = this.question[j].id;
      this.good = this.question[j].reponse;
    for(var key in rep){
      if(rep[this.cle] == this.good){
        this.resultat += 1;
        //this.resultat = this.resultat / 2;
      }
      else{
        this.resultat = this.resultat;
      }
    }
      
    }
    this.resultat = this.resultat / 2;
    //document.getElementById("resultat")?.setAttribute("hidden", "");
  }
}
