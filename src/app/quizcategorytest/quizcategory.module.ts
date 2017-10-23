import { Http, HttpModule } from '@angular/http';
import { QuizCategoryService } from './quizcategory.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HTTPTestComponent } from './quiz.component';

export function QuizCategoryFactory(http: Http) {
  return new QuizCategoryService(http, 'https://opentdb.com/api.php?amount=1');
}

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpModule],
  providers: [{provide: QuizCategoryService, useFactory: QuizCategoryFactory, deps: [Http]}],
})


export class QuizCategoryModule {

}
