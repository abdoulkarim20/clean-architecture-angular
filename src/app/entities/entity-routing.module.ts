import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'departement',
    loadChildren: () => import('./departement/departement.module').then(module=>module.DepartementModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EntityRoutingModule { }
