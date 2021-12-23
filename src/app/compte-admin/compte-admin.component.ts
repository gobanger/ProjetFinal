import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-compte-admin',
  templateUrl: './compte-admin.component.html',
  styleUrls: ['./compte-admin.component.css']
})
export class CompteAdminComponent implements OnInit {

  formations : any;
  informations:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
