import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
  {
    path:'liste',
    component:ListComponent
  },
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
