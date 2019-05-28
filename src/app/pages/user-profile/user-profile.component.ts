import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  //ITEMS DE PRUEBA PARA LA VISTA
  item1 = {
    name: "Chorizo",
    presentation: 1,
    price: 20,
    perGuest: 1
    }

  item2 = {
    name: "Vino",
    presentation: 1,
    price: 170,
    perGuest: 0.5
    }

  item3 = {
    name: "Pan",
    presentation: 1,
    price: 50,
    perGuest: 0.1
    }
  // BORRARLOS DESP 

  event:String = "Evento";
  items: any[] = [];
  productName: string;
  productPresentation: number;
  productPrice: number;
  productPerGuest: number;

  constructor() { }

  ngOnInit() {
    this.items.push(this.item1);
    this.items.push(this.item2);
    this.items.push(this.item3);
  }

  addItem(){
    this.items.push(this.newItem());
    this.resetProductProperties();
  }

  private newItem(){
    let newItem = {
      name: this.productName,
      presentation: this.productPresentation,
      price: this.productPrice,
      perGuest: this.productPerGuest
    }
    console.log(newItem, "newitem");
    
    return newItem
  }

  private resetProductProperties(){
    this.productName = null;
    this.productPresentation = 0;
    this.productPrice = 0;
    this.productPerGuest = 0;
  }

}
