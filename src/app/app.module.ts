import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTPTestModule } from './testing/http-test.module';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTPTestComponent} from './testing/http-test.component';
import { QuizModule } from './quiztesting/quiz.module';
import { QuizComponent } from './quiztesting/quiz.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';

@NgModule({
  declarations: [
    AppComponent,
    HTTPTestComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    HTTPTestModule,
    FormsModule,
    AppRoutingModule,
    BootstrapModalModule,
    QuizModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
