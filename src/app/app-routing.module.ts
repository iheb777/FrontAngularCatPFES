import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpfeComponent } from './addpfe/addpfe.component';
import { ListpfeComponent } from './listpfe/listpfe.component';

const routes: Routes = [
  {path:"" , component:ListpfeComponent},
  {path:"addpfe",component:AddpfeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
