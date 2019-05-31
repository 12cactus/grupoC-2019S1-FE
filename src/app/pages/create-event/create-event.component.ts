import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/eventService/eventService';
import {UtilsService} from '../../services/utilService';

@Component({
  selector: 'app-user-profile',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})

export class CreateEventComponent implements OnInit {

  // ITEMS DE PRUEBA PARA LA VISTA
  item1 = {
    name: 'Chorizo',
    presentation: 1,
    price: 20,
    perGuest: 1
    };

  item2 = {
    name: 'Vino',
    presentation: 1,
    price: 170,
    perGuest: 0.5
    };

  item3 = {
    name: 'Pan',
    presentation: 1,
    price: 50,
    perGuest: 0.1
    };
  // BORRARLOS DESP

  event = 'Evento';
  guestValid = false;
  guests: any[] = [];
  guestMail: string;
  items: any[] = [];
  productValid = false;
  productName: string;
  productPresentation: number;
  productPrice: number;
  productPerGuest: number;
  expiryTime = new Date();
  partyTime = new Date();

  constructor(private route: ActivatedRoute, private eventService: EventService, private utilService: UtilsService) {}

  ngOnInit() {
    this.event = this.route.snapshot.paramMap.get('event');
    // TODO: BORRAR LO QUE SIGUE CUANDO ESTE TERMINADO
    this.items.push(this.item1);
    this.items.push(this.item2);
    this.items.push(this.item3);
  }

  private addGuest() {
    this.guests.push(this.guestMail);
    this.guestMail = '';
  }

  private addItem() {
    this.items.push(this.newItem());
    this.resetProductProperties();
  }

  private newItem() {
    const newItem = {
      name: this.productName,
      presentation: this.productPresentation,
      price: this.productPrice,
      perGuest: this.productPerGuest
    };
    return newItem;
  }

  private resetProductProperties() {
    this.productName = null;
    this.productPresentation = 0;
    this.productPrice = 0;
    this.productPerGuest = 0;
  }

  public checkStatusProductBtn() {
    this.productValid = this.productNameValid() && this.productPresentation > 0 && this.productPrice > 0 && this.productPerGuest > 0;
  }

  public productNameValid() {
    return this.productName !== '' || this.productName !== null;
  }

  public validMail() {
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(this.guestMail)) {
        this.guestValid = true;
    } else {
      this.guestValid = false;
    }
  }

  public createEvent() {
    const event = {
      expiryTime: this.expiryTime,
      partyTime: this.partyTime,
      event: this.event,
      items: this.items,
      guests: this.guests
    };

    if (  new Date(this.partyTime) > new Date(this.expiryTime)) {
      this.eventService.createEvent(event);
    } else {
      console.log('llegaste tarde');
      this.utilService.showNotification('bottom', 'center', 'El timepo para realizar la apuesta ha expirado', 'error');
    }
  }

}
