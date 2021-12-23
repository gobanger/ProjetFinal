import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  lienApi = 'http://localhost:8086/';

  user: any;
  msgErr = '';

  connect = false;
  constructor(private route: Router) { }

  setUserInSession(u: any): void {
    localStorage.setItem('userConnect', JSON.stringify(u));
  }

  getUserConnect(): any {
    //ou caster la valeur du local storage (asString), ou solution ci dessous

    this.user = localStorage.getItem('userConnect');
    return JSON.parse(this.user);
  }

  deconnexion(): void {
    localStorage.removeItem('userConnect');
    this.route.navigateByUrl('');
  }

  isConnected(): boolean {
    if (this.getUserConnect() != null) {
        return true;
    }
    else {
      return false;
    }
  }

  canActive() {
    if (!this.isConnected()) { this.route.navigateByUrl('accueil'); this.connect = true; this.msgErr = 'Veuillez vous connecter' }
  }

  redirectToHomeIfConnect() {
    if(this.isConnected()){
      this.route.navigateByUrl('home')
    }
  }

  IfTeatcherConnected(): boolean {
    if(this.getUserConnect().role === 'FORMATEUR') { return true; } else {
      return false;
    }
  }

  IfCandidatConnected(): boolean {
    if(this.getUserConnect().role.roleName === 'CANDIDAT') { return true; } else {
      return false;
    }
  }

  IfResponsablePedaConnected(): boolean {
    if(this.getUserConnect().role.roleName === 'RESPONSABLE_PEDAGOGIQUE') { return true; } else {
      return false;
    }
  }

  IfConseillerFormaConnected(): boolean {
    if(this.getUserConnect().role.roleName === 'CONSEILLER_DE_FORMATION') { return true; } else {
      return false;
    }
  }

  IfStudentConnected(): boolean {
    if(this.getUserConnect().role.roleName === 'ETUDIANT') { return true; } else {
      return false;
    }
  }


  IfAdminConnected(): boolean {
    if(this.getUserConnect().role.roleName === 'ADMINISTRATEUR') { return true; } else {
      return false;
    }
  }

  adminSideNav() : boolean{
    if(this.isConnected()){
      if(this.getUserConnect().role == 'CANDIDAT'){
        return false;
      }
      else{
        return true;
      }
    }
    else{
      return false;
    }
  }

  candidatSideNav() : boolean{
    if(this.isConnected()){
      if(this.getUserConnect().role == 'CANDIDAT'){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
}
