import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPTestService {
    baseUri: string;
     private headers = new Headers({
        'Content-Type': 'application/json'
      });
      constructor(private http: Http) {
      }
      getCurrentTime(){
        return this. http.get('http://date.jsontest.com')
            .map(res => res.json());
      }
}
