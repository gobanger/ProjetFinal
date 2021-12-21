import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-compte-admin',
  templateUrl: './compte-admin.component.html',
  styleUrls: ['./compte-admin.component.css']
})
export class CompteAdminComponent implements OnInit {

  formations : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
}
