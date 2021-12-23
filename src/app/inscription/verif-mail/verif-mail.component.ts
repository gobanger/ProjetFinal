import { HttpClient } from '@angular/common/http';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verif-mail',
  templateUrl: './verif-mail.component.html',
  styleUrls: ['./verif-mail.component.css']
})
export class VerifMailComponent implements OnInit {

  resultVerif: any;
  msgErr: any;
  constructor(public dialogRef: MatDialogRef<VerifMailComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }

  validerMail(val: any) {
    this.msgErr = '';
    // console.log(this.data);
    this.data.code = val.code;
    this.http.post(this.auth.lienApi + 'verifmail/' + this.data.id, this.data).subscribe({
      next: (data) => {
        this.resultVerif = data;
        if(this.resultVerif.ok === true){
          this.dialogRef.close();
          this.auth.msgErr = 'Votre validation est bon, connectez vous a présent';
          this.route.navigateByUrl('accueil');
        }
        else {
          this.msgErr = 'le code n\'est pas le bon' ;
        }
      },
      error: (err) => {
        console.log(err);
      },
    })
  }
}
