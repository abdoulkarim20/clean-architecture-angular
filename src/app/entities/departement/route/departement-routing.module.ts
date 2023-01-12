import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateComponent} from "../update/update.component";

const routes: Routes = [
  {
    path:'ajouter',
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
