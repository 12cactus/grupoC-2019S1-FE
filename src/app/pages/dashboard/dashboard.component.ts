import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

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

  constructor() { }

  ngOnInit() {}

  public createParty(){
    console.log("HELLO FIESTA!!!");
  }

  public createPool(){
    //TODO change name 
    console.log("HELLO BAQUITA!!!");
  }
  public createBasket(){
    //TODO change name 
    console.log("HELLO CANASTA!!!");
  }
}
