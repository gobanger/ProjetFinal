import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueilcommun',
  templateUrl: './accueilcommun.component.html',
  styleUrls: ['./accueilcommun.component.css']
})
export class AccueilcommunComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.redirectToHomeIfConnect();
  }

}
