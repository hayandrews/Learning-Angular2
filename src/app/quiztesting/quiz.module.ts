import { Http, HttpModule } from '@angular/http';
import { QuizService } from './quiz.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HTTPTestComponent } from './quiz.component';

export function QuizFactory(http: Http){
  return new QuizService(http);
}

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpModule],
  providers: [{provide: QuizService, useFactory: QuizFactory, deps: [Http]}],
})


export class QuizModule {

}
