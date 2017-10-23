import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HTTPTestComponent } from './testing/http-test.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HTTPTestComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
