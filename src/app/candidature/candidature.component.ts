import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {
  info: any;
  msgValidation: any;

  constructor(private auth: AuthService, private http: HttpClient) { }
  ngOnInit(): void {
    this.auth.canActive();
  }

  candidat(info:any): any{
    this.http.put('http://localhost:8086/inscription/information/7',info).subscribe({
      next:(data) => {
        info = data;
        console.log(info);
        this.msgValidation="inscription complete";
      },
      error:(err) => {
        console.log(err);
      },
    })
  }

}
