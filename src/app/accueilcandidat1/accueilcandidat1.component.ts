import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueilcandidat1',
  templateUrl: './accueilcandidat1.component.html',
  styleUrls: ['./accueilcandidat1.component.css']
})
export class Accueilcandidat1Component implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.canActive();
  }

}
