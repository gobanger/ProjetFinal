import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-compte-admin',
  templateUrl: './compte-admin.component.html',
  styleUrls: ['./compte-admin.component.css']
})
export class CompteAdminComponent implements OnInit {

  formations : any;
  informations:any;
  pwd: any;

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.canActive();
    this.pwd = this.auth.getUserConnect().mdp;
  }

  modifier(informations: any): any{
    this.http.post('http://localhost:8086/', informations).subscribe({
      next: (data) => { 
        this.informations = data;
      },
      error : (err) => {
        console.log(err);
    }
    })
  }
}
