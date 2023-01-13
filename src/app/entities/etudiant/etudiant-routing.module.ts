import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateComponent} from "./update/update.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {
    path:'ajouter',
    component:UpdateComponent
  },
  {
    path:'liste',
    component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
