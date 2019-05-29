import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { Router } from '@angular/router';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  public createParty(){    
    this.router.navigate(['user-profile', "Fiesta"]);
  }

  public createPoolMoney(){
    this.router.navigate(['user-profile', "Baquita"]);
  }
  
  public createPotLuck(){
    this.router.navigate(['user-profile', "Canasta"]);
  }
}
