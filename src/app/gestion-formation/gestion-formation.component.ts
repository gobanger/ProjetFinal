import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild, ɵɵqueryRefresh } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.css']
})
export class GestionFormationComponent implements OnInit {

  formationToModify : any;
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
        info = data;
        console.log(info);
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.lesFormations();
    this.ngOnInit();
  }
  ajoutShow(){
    document.getElementById("ajout")?.removeAttribute("hidden")
  }
  ajoutHide(){
    document.getElementById("ajout")?.setAttribute("hidden", "");
    this.lesFormations();
  }
  cancelAjout(){
    document.getElementById("ajout")?.setAttribute("hidden", "");
  }


  deleteShow(){
    document.getElementById("delete")?.removeAttribute("hidden")
  }
  deleteHide(){
    document.getElementById("delete")?.setAttribute("hidden", "");
    this.lesFormations();
    this.ngOnInit();
  }
  deleteFormation(info:any){
    this.http.delete(this.auth.lienApi + "formation/" +  info.intitule ).subscribe({next: (data) => {console.log(info)} });
    this.lesFormations();
    this.ngOnInit();
  }
  cancelDelete(){
    document.getElementById("delete")?.setAttribute("hidden", "");
  }

  showModify(id:any){
    document.getElementById(id)?.removeAttribute("hidden");
  }
  modifyCancel(id:any){
    document.getElementById(id)?.setAttribute("hidden", "");
    this.lesFormations();
  }

  modifyFormation(info:any){
    this.http.put('http://localhost:8086/formation/' + info.id , info).subscribe({
      error: (err) => {console.log(info)},
      next: (data) => {console.log(data)}
    });
    this.lesFormations();
    this.ngOnInit();
  }
}
