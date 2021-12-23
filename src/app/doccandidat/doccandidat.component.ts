import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-doccandidat',
  templateUrl: './doccandidat.component.html',
  styleUrls: ['./doccandidat.component.css']
})
export class DoccandidatComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.canActive();
  }

}
