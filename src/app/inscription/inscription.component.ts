import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  information : any;
  msgValidation: any;

  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {
  }

  inscription(information:any): any{
    this.http.post('http://localhost:8086/inscription',information).subscribe({
      next:(data) => {
        information = data;
        console.log(information);
        this.msgValidation="inscription complete";
      },

      error:(err) => {
        console.log(information);
      },


    })
  }

}
