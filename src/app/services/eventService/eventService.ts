import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  public createEvent(event: any) {
    console.log(event, 'event');
  }

}
