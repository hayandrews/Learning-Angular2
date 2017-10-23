import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// https://opentdb.com/api.php?amount=1&type=multiple
// https://opentdb.com/api.php?amount=1&category=9&type=multiple
// https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple
// https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple
@Injectable()
export class QuizCategoryService {
    baseUri: string;
    baseCategory: number;
    baseDifficulty: string;
    completeUrl: string;
     private headers = new Headers({
        'Content-Type': 'application/json'
      });
      constructor(private http: Http, baseAPIUri: string) {
        this.baseUri = baseAPIUri;
      }
      getQuiz(baseCategory: number, baseDifficulty: string) {
         this.baseCategory = baseCategory;
         this.baseDifficulty = baseDifficulty;
          this.completeUrl = this.baseUri;
          // id range for cats [9,32]
          if (this.baseCategory >= 9 && this.baseCategory <= 32) {
              this.completeUrl = this.completeUrl + '&category=' + this.baseCategory;
          }
          if (this.baseDifficulty !== '') {
              this.completeUrl = this.completeUrl + '&difficulty=' + this.baseDifficulty;
          }
          this.completeUrl = this.completeUrl + '&tpye=multiple';

          return this. http.get(this.completeUrl)
            .map(res => res.json());
      }
}
