import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ɵɵqueryRefresh } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.css']
})
export class GestionFormationComponent implements OnInit {

  formationToDelete : any;
  formations : any;
  msgConfirmation: any;
  infoCreate:any;
  infoDelete:any;
  etat=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  constructor(private http : HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.canActive();
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

  show(num:any){
    document.getElementById("info"+num)?.removeAttribute("hidden");
  }
  hide(num:any){
    document.getElementById("info"+num)?.setAttribute("hidden", "");
  }

  afficherCacher(num:any){
    if(this.etat[num] == 0){
      this.show(num);
      this.etat[num] = 1;
    }
    else{
      this.hide(num);
      this.etat[num] = 0;
    }
  }

  createFormation(info:any){
    this.http.post('http://localhost:8086/formation', info).subscribe({
      next: (data) =>{
        this.infoCreate = data
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  ajoutShow(){
    document.getElementById("ajout")?.removeAttribute("hidden")
  }
  ajoutHide(){
    document.getElementById("ajout")?.setAttribute("hidden", "");
    this.msgConfirmation = "Formation enregistrer";
    window.location.reload();
  }
  cancelAjout(){
    document.getElementById("ajout")?.setAttribute("hidden", "");
  }


  deleteShow(){
    document.getElementById("delete")?.removeAttribute("hidden")
  }
  deleteHide(){
    document.getElementById("delete")?.setAttribute("hidden", "");
    this.msgConfirmation = "Formation supprimer";
    window.location.reload();
  }
  deleteFormation(info:any){
    this.formationToDelete = this.http.get(this.auth.lienApi+ "/formation/" + info);
    this.http.delete(this.auth.lienApi + "/formation/" + this.formationToDelete.intitule);
  }
}
