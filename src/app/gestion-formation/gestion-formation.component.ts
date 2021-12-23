import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.css']
})
export class GestionFormationComponent implements OnInit {

  formations : any;
  etat=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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

  

  infoFormation(niv:any){
  }
}
