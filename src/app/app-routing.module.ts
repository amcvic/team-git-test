import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyViewComponent } from './my-view/my-view.component';


const routes: Routes = [
  { path: '', component: MyViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
