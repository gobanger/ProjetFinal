import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService) { }

  formations:any;
  candidats:any;
  question:any;
  fofo:string | undefined;
  selectedOne: string | undefined;
  selectedOneToSend: string | undefined;

  msgErr:any;

  ngOnInit(): void {
    this.auth.canActive();
    setInterval( () => {this.fofo = this.selectedOne}, 100);
    this.lesFormations();
    this.lesCandidats();
    this.listeQuestionParFormation();
    //setInterval(() => {this.lesFormations()}, 100);
    setInterval(() => {this.listeQuestionParFormation()}, 100);
  }

  verif(): boolean{
    if(document.getElementById("Q")?.innerHTML == null){
      this.msgErr = "Tous les champs doivent être rempli"
      return false;
    }
    else{
      return true;
    }
  }

  creationQCM(question:any){
      this.http.post(this.auth.lienApi + "qcm" , question).subscribe({
        next: (data) => {
          question = data;
          console.log(question);
        },
        error: (err) => {
          console.log(err);
        }
      });
      this.listeQuestionParFormation();
      this.ngOnInit();
  }

  lesFormations(){
    this.http.get("http://localhost:8086/formation").subscribe({
      next: (data) => {
        this.formations = data;
      },
      error: (err) => {console.log(err)}
    })
  }

  lesCandidats(){
    this.http.get("http://localhost:8086/candidats").subscribe({
      next: (data) => {
        this.candidats = data;
      },
      error: (err) => {console.log(err)}
    });
  }

  listeQuestionParFormation(){
    this.http.get(this.auth.lienApi + 'qcm/' + this.fofo).subscribe({
      next: (data) => {
        this.question = data;
      },
      error: (err) => {console.log(err)}
    })
  }
  
  ajoutShow(){
    document.getElementById("creationQuestion")?.removeAttribute("hidden")
  }
  cancelCreation(){
    document.getElementById("creationQuestion")?.setAttribute("hidden", "");
  }

  envoiQCM(form:any){

  }

}
