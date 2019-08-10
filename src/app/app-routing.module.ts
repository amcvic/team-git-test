import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyViewComponent } from './my-view/my-view.component';
import {BeckyComponent} from './becky/becky.component';


const routes: Routes = [
  {path: '', component: MyViewComponent },
  {path: 'becky', component: BeckyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
