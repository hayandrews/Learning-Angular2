import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {
    baseUri: string;
     private headers = new Headers({
        'Content-Type': 'application/json'
      });
      constructor(private http: Http) {
      }
      getQuiz(){
        return this. http.get('https://opentdb.com/api.php?amount=1&type=multiple')
            .map(res => res.json());
      }
}
