import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {E2eService} from '../../services/e2e.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService, public service: E2eService) { }

  ngOnInit() {
  }

  public ping(){
    this.service.ping()
  }
}
