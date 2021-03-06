import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private auth: AuthService) { }

  msgBienvenu : any;

  ngOnInit(): void {
    this.auth.canActive();
    this.msgBienvenu = "Bienvenue " + this.auth.getUserConnect().nomUsage + " " + this.auth.getUserConnect().prenom; 
  }

}
