import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Promise} from 'q';

@Injectable()
export class E2eService {

  constructor(public http: HttpClient) {
  }

  ping() {
    const pepe = new Promise((resolve, reject) => {
      const url = 'https://eventeando-be.herokuapp.com/';

      this.http.get(url).subscribe((response: any) => {
          if (response.status) {
            resolve({status: true, data: response.data});
          } else {
            resolve({status: false, message: 'oops'});
          }
        },
        error => console.log(error)
      );
    })
    return pepe;
  }
}
