import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-choixformation',
  templateUrl: './choixformation.component.html',
  styleUrls: ['./choixformation.component.css']
})
export class ChoixformationComponent implements OnInit {
  information : any;
  msgValidation: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  choixformation(information:any): any{
    this.http.post('http://localhost:8086/choixformation',information).subscribe({
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
