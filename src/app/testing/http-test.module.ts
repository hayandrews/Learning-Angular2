import { Http, HttpModule } from '@angular/http';
import { HTTPTestService } from './http-test.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTPTestComponent } from './http-test.component';

export function HTTPTestFactory(http: Http){
  return new HTTPTestService(http);
}

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpModule],
  providers: [{provide: HTTPTestService, useFactory: HTTPTestFactory, deps: [Http]}],
})


export class HTTPTestModule {

}
