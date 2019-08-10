import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeckyComponent} from './becky/becky.component';


const routes: Routes = [
  {path: 'becky', component: BeckyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
