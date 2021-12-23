import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { VerifMailComponent } from './verif-mail/verif-mail.component';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user = { mail: '', mdp: '', mdpConfirme: '', nomUsage: '', prenom: '' }

  information: any;
  msgValidation: any;
  visiteur: any;

  constructor(private http: HttpClient, private auth: AuthService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  inscription(information: any): any {
    this.msgValidation = '';
    if (this.user.mdp === this.user.mdpConfirme) {
      this.msgValidation = 'Veuillez patienter quelques seconds ; Inscription en cours ...';
      this.http.post(this.auth.lienApi + 'inscription', information).subscribe({
        next: (data) => {
          this.visiteur = data;
          this.verifMail(this.visiteur);
         // this.msgValidation = "inscription complete";
        },
        error: (err) => {
          console.log(err);
        },
      });
     // this.verifMail();
    }
    else {
      this.msgValidation = 'veuillez bien confirmer votre mot de passe';
    }


  }

  verifMail(visiteur: any) {
    const dialogVerifMail = this.dialog.open(VerifMailComponent, {
      data: visiteur,
    });

    dialogVerifMail.afterClosed().subscribe(result => {

    });
  }

}
