import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {UpdateComponent} from "./update/update.component";
import {ListeTestNgrxComponent} from "./liste-test-ngrx/liste-test-ngrx.component";

const routes: Routes = [
  {
    path:'liste',
    component:ListComponent
  },
  {
    path:'ajouter',
    component:UpdateComponent
  },
  {
    path:'liste-ngrx',
    component:ListeTestNgrxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
