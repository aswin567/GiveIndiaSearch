import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getData(sort?): any {
    return this.http.get('../assets/Data/db.json').map(res => {
      const array = res.json();
      return array;
    }, ( error ) => {
     console.log(error);
    });
  }
}